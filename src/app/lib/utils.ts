import DiscogsCollectionItem from "@/types/DiscogsCollectionItem"
import DiscogsCollectionItemsByFolderResponse from "@/types/DiscogsCollectionItemsByFolderResponse"
import DiscogsRelease from "@/types/DiscogsRelease"
import DiscogsArtistResponse from "@/types/DiscogsArtistResponse"
import AppleMusicRelease from "@/types/AppleMusicRelease"

export const RELEASES_PER_PAGE = 25
const BASE_URL = `https://api.discogs.com/users/${process.env.DISCOGS_USERNAME}/collection/folders/${process.env.DISCOGS_FOLDER_ID}/releases?token=${process.env.DISCOGS_TOKEN}&per_page=${RELEASES_PER_PAGE}&sort=artist`
const RELEASE_URL = `https://api.discogs.com/releases/`
const ARTIST_URL = `https://api.discogs.com/artists/`

async function fetchAllReleases(
  url: string,
  releases: DiscogsCollectionItem[] = []
): Promise<DiscogsCollectionItem[]> {
  // Recursively fetch all releases from the Discogs API, page by page until there are no more "next" pages.
  const response = await fetch(url, {
    headers: {
      "User-Agent": `${process.env.DISCOGS_USERAGENT}`,
    },
    next: { revalidate: 3600 },
    // cache: "force-cache",
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch releases: ${response.status} ${response.statusText}`)
  }

  const data: DiscogsCollectionItemsByFolderResponse = await response.json()
  const allReleases = [...releases, ...(data.releases || [])]

  // Check if there is a "next" page to fetch
  if (data.pagination && data.pagination.urls && data.pagination.urls.next) {
    return fetchAllReleases(data.pagination.urls.next, allReleases)
  }

  // Return all releases once there are no more "next" pages
  return allReleases
}

export async function fetchFilteredReleases(
  query: string,
  currentPage: number
): Promise<DiscogsCollectionItem[]> {
  // Fetch all releases recursively page by page
  const allReleases = await fetchAllReleases(BASE_URL)
  const searchWord = query.toLowerCase()

  // Filter releases by artist or title. There can be more than one artist per release.
  const filteredReleases = filterReleases(allReleases, searchWord)

  // Return the releases for the current page.
  const startIndex = (currentPage - 1) * RELEASES_PER_PAGE
  const endIndex = startIndex + RELEASES_PER_PAGE
  const filteredReleasesForCurrentPage = filteredReleases.slice(startIndex, endIndex)

  // Add delay to see <Suspense /> working
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("Timeout resolved")
      resolve(null)
    }, 2000)
  )

  return filteredReleasesForCurrentPage
}

function filterReleases(
  releases: DiscogsCollectionItem[],
  searchWord: string
): DiscogsCollectionItem[] {
  // Filter releases by artist or title. There can be more than one artist per release.
  return releases.filter((release) => {
    searchWord = searchWord.toLowerCase().replace(/\s+/g, " ") || ""
    const title = release.basic_information.title.toLowerCase()
    const artistNames = release.basic_information.artists.map((artist) => artist.name.toLowerCase())

    return (
      title.includes(searchWord) ||
      deAccent(title).includes(searchWord) ||
      artistNames.some(
        (artistName) => artistName.includes(searchWord) || deAccent(artistName).includes(searchWord)
      )
    )
  })
}

export async function fetchTotalPages(query: string): Promise<number> {
  // Get releases which match the search word and calculate the number of pages required to display them.
  const allReleases = await fetchAllReleases(BASE_URL)
  const filteredReleases = filterReleases(allReleases, query)
  const totalPages = Math.ceil(filteredReleases.length / RELEASES_PER_PAGE)
  // When there are no matches for given search query, it makes sense to set the number of pages to 1 instead of 0.
  if (totalPages === 0) {
    return 1
  } else return totalPages
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
  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages]
}

function deAccent(searchWord: string) {
  // As per Lewis Diamond's answer on Stack Overflow
  // (https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/37511463#37511463),
  // search words should also be normalized so that the search is accent-insensitive.
  return searchWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export function removeDiscogsMarkdown(text: string) {
  return text
  // TODO implement parsing and data-fetching as per https://support.discogs.com/hc/en-us/articles/360007331734-How-Can-I-Format-Text
  // .replace(/"\[m=\d+\]"/g, "")      // link to master release
  // .replace(/\[m=\d+\]/g, "")        // alternate format link to master release
  // .replace(/\[a\d+\]/g, "")         // link to artist page
  // .replace(/\[a=(.+?)\]/g, "$1")    // alternate format link to artist page
  // .replace(/\[l=([^\]]+)]/g, "$1")  // link to label page
  // .replace(/\[l\d+\]/g, "")         // alternate format link to label page
}

export async function fetchRelease(releaseId: string): Promise<DiscogsRelease> {
  // A release should only be fetched if it is part of the Discogs collection
  const allReleases = await fetchAllReleases(BASE_URL)

  if (allReleases.filter((release) => release.id.toString() === releaseId).length === 0) {
    throw new Error(`Release ${releaseId} is not part of the collection.`)
  }

  const response = await fetch(`${RELEASE_URL}${releaseId}`, {
    headers: {
      "User-Agent": `${process.env.DISCOGS_USERAGENT}`,
    },
    next: { revalidate: 3600 },
    // cache: "force-cache",
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch release: ${response.status} ${response.statusText}`)
  }

  return await response.json()
}

export async function fetchAppleMusicId(discogsRelease: DiscogsRelease): Promise<string> {
  function throwNoResultsError(searchQuery: string) {
    throw new Error(`No matching results for ${searchQuery}`)
  }

  const normalizedDiscogsReleaseTitle = deAccent(discogsRelease.title.toLowerCase())
  const normalizedDiscogsReleaseTitleWords = normalizedDiscogsReleaseTitle.split(" ")
  const mainArtistName = deAccent(discogsRelease.artists[0].name.toLowerCase())
  const iTunesSearchQuery = `${mainArtistName} ${normalizedDiscogsReleaseTitle}`.replaceAll(
    " ",
    "+"
  )
  const response = await fetch(
    `https://itunes.apple.com/search?term=${iTunesSearchQuery}&media=music&explicit=Y&entity=album`,
    {
      next: { revalidate: 3600 },
    }
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch from iTunes: ${response.status} ${response.statusText}`)
  }

  const { resultCount, results: appleMusicReleases } = await response.json()

  if (resultCount < 1) {
    throwNoResultsError(iTunesSearchQuery)
  }

  // For each Apple Music release matching the iTunes search, we normalize its collectionName & artistName properties.
  // Both properties are converted to lowercase. For collectionName, any colon characters ":" are stripped.
  const normalizedAppleMusicReleases = appleMusicReleases.map(
    (appleMusicRelease: AppleMusicRelease) => ({
      ...appleMusicRelease,
      artistName: deAccent(appleMusicRelease.artistName?.toLowerCase()),
      collectionName: deAccent(appleMusicRelease.collectionName?.replace(":", "").toLowerCase()),
    })
  )

  function appleReleaseTitleIncludesDiscogsReleaseTitleWords(
    appleMusicRelease: AppleMusicRelease
  ): boolean {
    // For each word in the Discogs release title, check if the word contained in the Apple Music release title.
    // The map() method generates an array of boolean values, with each element corresponding to a word in the Discogs release title.
    // e.g. For a normalized Discogs release title of "try the feeling" and a normalized Apple Music release title of "try the feelin'""
    // the resulting appray would be [true, true, false]. For our scenario, we are happy with at least one true element in the array.
    return normalizedDiscogsReleaseTitleWords
      .map((word) => appleMusicRelease.collectionName?.includes(word))
      .includes(true)
  }

  const matchingAppleMusicRelease = normalizedAppleMusicReleases.find(
    // Find the first result which satisfies both expressions (separated by &&)
    (normalizedAppleMusicRelease: AppleMusicRelease) =>
      appleReleaseTitleIncludesDiscogsReleaseTitleWords(normalizedAppleMusicRelease) &&
      normalizedAppleMusicRelease.artistName.includes(mainArtistName)
  )

  if (!matchingAppleMusicRelease) {
    throwNoResultsError(iTunesSearchQuery)
  }

  return matchingAppleMusicRelease.collectionId.toString()
}

export async function fetchArtistInfo(artistId: string) {
  const response = await fetch(`${ARTIST_URL}${artistId}`, {
    headers: {
      "User-Agent": `${process.env.DISCOGS_USERAGENT}`,
    },
    next: { revalidate: 3600 },
    // cache: "force-cache",
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch artist information: ${response.status} ${response.statusText}`)
  }

  const artistInfo: DiscogsArtistResponse = await response.json()
  return artistInfo
}

export async function fetchWithErrorHandling<T>(fetchFn: () => Promise<T>): Promise<T | null> {
  try {
    return await fetchFn()
  } catch (error) {
    console.log(error)
    return null
  }
}
