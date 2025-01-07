import DiscogRecord from "@/types/DiscogsRecord"

// As per Lewis Diamond's answer on Stack Overflow
// (https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/37511463#37511463),
// the title and artist are normalized so that the search is accent-insensitive.
export function searchRecordsByTitleAndArtist(
  records: DiscogRecord[],
  query: string
) {
  const searchWord = query.toLowerCase()

  return records.filter((record) => {
    const title = record.basic_information.title.toLowerCase()
    const artist = record.basic_information.artists[0].name.toLowerCase()

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

export async function fetchDiscogsCollection() {  
  const response = await fetch(
    `https://api.discogs.com/users/QJ_Stuart/collection/folders/0/releases?token=${process.env.DISCOGS_TOKEN}&per_page=100&sort=artist`,
    {
      headers: {
        "User-Agent":
          "QuentinFalzonRecordCollection/1.0 +https://github.com/qjstuart/quentinfalzondev",
      },
      next: { revalidate: 3600 },
      cache: 'force-cache',
    }
  )
  return response
}
