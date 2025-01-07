import DiscogsRelease from "@/types/DiscogsRelease"
import DiscogsResponse from "@/types/DiscogsResponse"

// As per Lewis Diamond's answer on Stack Overflow
// (https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/37511463#37511463),
// the title and artist are normalized so that the search is accent-insensitive.
export function filterReleasesByTitleAndArtist(
  releases: DiscogsRelease[],
  query: string
) {
  const searchWord = query.toLowerCase()

  return releases.filter((release) => {
    const title = release.basic_information.title.toLowerCase()
    const artist = release.basic_information.artists[0].name.toLowerCase()

    return (
      title.includes(searchWord) ||
      title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(searchWord) ||
      artist.includes(searchWord) ||
      artist
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(searchWord)
    )
  })
}

export async function fetchDiscogsCollectionOld(): Promise<DiscogsResponse> {
  const response = await fetch(
    `https://api.discogs.com/users/QJ_Stuart/collection/folders/0/releases?token=${process.env.DISCOGS_TOKEN}&per_page=100&sort=artist`,
    {
      headers: {
        "User-Agent":
          "QuentinFalzonRecordCollection/1.0 +https://github.com/qjstuart/quentinfalzondev",
      },
      next: { revalidate: 3600 },
      cache: "force-cache",
    }
  )
  return response.json()
}

export async function fetchDiscogsCollection(): Promise<DiscogsRelease[]> {

  const BASE_URL = `https://api.discogs.com/users/QJ_Stuart/collection/folders/0/releases?token=${process.env.DISCOGS_TOKEN}&per_page=100&sort=artist`

  async function fetchAllPages(url: string, releases: DiscogsRelease[] = []): Promise<DiscogsRelease[]> {
    const response = await fetch(url, {
        headers: {
          "User-Agent":
            "QuentinFalzonRecordCollection/1.0 +https://github.com/qjstuart/quentinfalzondev",
        },
        next: { revalidate: 3600 },
        cache: "force-cache",
      })
      const data: DiscogsResponse = await response.json()
      const allReleases = [...releases, ...data.releases];

      // Check if there is a next page to fetch
      if (data.pagination.urls.next) {
        return fetchAllPages(data.pagination.urls.next, allReleases);
      }

      // Return all releases once there are no more "next" pages
      return allReleases;
    }

    const allReleases = await fetchAllPages(BASE_URL);
    return allReleases

}
