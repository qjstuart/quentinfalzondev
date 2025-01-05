import DiscogRecord from "@/types/DiscogRecord"

export function searchRecordsByTitleAndArtist(
  records: DiscogRecord[],
  query: string
) {
  const searchWord = query.toLowerCase()

  return records.filter((record) => {
    const title = record.basic_information.title.toLowerCase()
    const artist = record.basic_information.artists[0].name.toLowerCase()
    return title.includes(searchWord) || artist.includes(searchWord)
  })
}
