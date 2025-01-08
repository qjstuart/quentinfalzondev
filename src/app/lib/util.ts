import DiscogsRelease from "@/types/DiscogsRelease"
import DiscogsResponse from "@/types/DiscogsResponse"

// As per Lewis Diamond's answer on Stack Overflow
// (https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/37511463#37511463),
// the title and artist are normalized so that the search is accent-insensitive.
// export function filterReleasesByTitleAndArtist(
//   releases: DiscogsRelease[],
//   query: string
// ) {
//   const searchWord = query.toLowerCase()

//   return releases.filter((release) => {
//     const releaseInfo = release.basic_information
//     const title = releaseInfo.title.toLowerCase()
//     const artistNames = releaseInfo.artists.map((artist) =>
//       artist.name.toLowerCase()
//     )

//     return (
//       title.includes(searchWord) ||
//       title
//         .normalize("NFD")
//         .replace(/[\u0300-\u036f]/g, "")
//         .includes(searchWord) ||
//       artistNames.some(
//         (artistName) =>
//           artistName.includes(searchWord) ||
//           artistName
//             .normalize("NFD")
//             .replace(/[\u0300-\u036f]/g, "")
//             .includes(searchWord)
//       )
//     )
//   })
// }

export const RELEASES_PER_PAGE = 100
const BASE_URL = `https://api.discogs.com/users/QJ_Stuart/collection/folders/0/releases?token=${process.env.DISCOGS_TOKEN}&per_page=${RELEASES_PER_PAGE}&sort=artist`

export async function fetchTotalPages(): Promise<number> {
  const response = await fetch(
    `https://api.discogs.com/users/QJ_Stuart/collection/folders/0/releases?token=${process.env.DISCOGS_TOKEN}&per_page=${RELEASES_PER_PAGE}&sort=artist`,
    {
      headers: {
        "User-Agent":
          "QuentinFalzonRecordCollection/1.0 +https://github.com/qjstuart/quentinfalzondev",
      },
      next: { revalidate: 3600 },
      cache: "force-cache",
    }
  )
  const data: DiscogsResponse = await response.json()
  const totalPages = data.pagination.pages
  return totalPages
}

async function fetchAllReleases(
  url: string,
  releases: DiscogsRelease[] = []
): Promise<DiscogsRelease[]> {
  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "QuentinFalzonRecordCollection/1.0 +https://github.com/qjstuart/quentinfalzondev",
    },
    next: { revalidate: 3600 },
    cache: "force-cache",
  })
  const data: DiscogsResponse = await response.json()
  const allReleases = [...releases, ...data.releases]

  // Check if there is a next page to fetch
  if (data.pagination.urls.next) {
    return fetchAllReleases(data.pagination.urls.next, allReleases)
  }

  // Return all releases once there are no more "next" pages
  return allReleases
}

function deAccent(searchWord: string) {
  return searchWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export async function fetchFilteredReleases(
  query: string,
  currentPage: number
): Promise<DiscogsRelease[]> {
  const allReleases = await fetchAllReleases(BASE_URL)

  const searchWord = query.toLowerCase()

  const filteredReleases = allReleases.filter((release) => {
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

  console.log("fetchFilteredReleases(): current page ", currentPage)
  console.log("filteredReleases", filteredReleases)
  const startIndex = (currentPage - 1) * RELEASES_PER_PAGE
  const endIndex = startIndex + RELEASES_PER_PAGE
  const filteredReleasesPaginated = filteredReleases.slice(startIndex, endIndex)
  console.log("filteredReleasesPaginated", filteredReleasesPaginated)

  return filteredReleasesPaginated
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
