import DiscogRecord from "@/types/DiscogRecord"

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

// As per Lewis Diamond's answer on Stack Overflow 
// (https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/37511463#37511463), 
// the title and artist are normalized so that the search is accent-insensitive.
