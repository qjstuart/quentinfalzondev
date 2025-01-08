import DiscogsRelease from "@/types/DiscogsRelease"
import DiscogsResponse from "@/types/DiscogsResponse"

export const RELEASES_PER_PAGE = 100
const BASE_URL = `https://api.discogs.com/users/${process.env.DISCOGS_USERNAME}/collection/folders/0/releases?token=${process.env.DISCOGS_TOKEN}&per_page=${RELEASES_PER_PAGE}&sort=artist`

export async function fetchTotalPages(query: string): Promise<number> {
  // Get releases which match the search word and calculate the number of pages required to display them.
  const allReleases = await fetchAllReleases(BASE_URL)
  const filteredReleases = filterReleases(allReleases, query)
  return Math.ceil(filteredReleases.length / RELEASES_PER_PAGE)
}

async function fetchAllReleases(
  url: string,
  releases: DiscogsRelease[] = []
): Promise<DiscogsRelease[]> {
  // Recursively fetch all releases from the Discogs API, page by page until there are no more "next" pages.
  const response = await fetch(url, {
    headers: {
      "User-Agent": `${process.env.DISCOGS_USERAGENT}`,
    },
    next: { revalidate: 3600 },
    cache: "force-cache",
  })

  const data: DiscogsResponse = await response.json()
  const allReleases = [...releases, ...(data.releases || [])]

  // Check if there is a "next" page to fetch
  if (data.pagination && data.pagination.urls && data.pagination.urls.next) {
    return fetchAllReleases(data.pagination.urls.next, allReleases)
  }

  // Return all releases once there are no more "next" pages
  return allReleases
}

function deAccent(searchWord: string) {
  // As per Lewis Diamond's answer on Stack Overflow
  // (https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/37511463#37511463),
  // search words should also be normalized so that the search is accent-insensitive.
  return searchWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function filterReleases(
  releases: DiscogsRelease[],
  searchWord: string
): DiscogsRelease[] {
  // Filter releases by artist or title. There can be more than one artist per release.
  return releases.filter((release) => {
    searchWord = searchWord.toLowerCase()
    const title = release.basic_information.title.toLowerCase()
    const artistNames = release.basic_information.artists.map((artist) =>
      artist.name.toLowerCase()
    )

    return (
      title.includes(searchWord) ||
      deAccent(title).includes(searchWord) ||
      artistNames.some(
        (artistName) =>
          artistName.includes(searchWord) ||
          deAccent(artistName).includes(searchWord)
      )
    )
  })
}

export async function fetchFilteredReleases(
  query: string,
  currentPage: number
): Promise<DiscogsRelease[]> {
  // Fetch all releases recursively page by page
  const allReleases = await fetchAllReleases(BASE_URL)
  const searchWord = query.toLowerCase()

  // Filter releases by artist or title. There can be more than one artist per release.
  const filteredReleases = filterReleases(allReleases, searchWord)

  // Return the releases for the current page.
  const startIndex = (currentPage - 1) * RELEASES_PER_PAGE
  const endIndex = startIndex + RELEASES_PER_PAGE
  const filteredReleasesForCurrentPage = filteredReleases.slice(
    startIndex,
    endIndex
  )

  return filteredReleasesForCurrentPage
}

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages]
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages]
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ]
}
