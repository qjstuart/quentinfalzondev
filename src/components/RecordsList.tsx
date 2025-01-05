import DiscogRecord from "@/types/DiscogRecord"
import Image from "next/image"
import { searchRecordsByTitleAndArtist } from "@/app/lib/util"

export default async function RecordsList({
  query,
  currentPage,
}: {
  query: string
  currentPage: number
}) {

  const response = await fetch(
    `https://api.discogs.com/users/QJ_Stuart/collection/folders/0/releases?token=${process.env.DISCOGS_TOKEN}&per_page=200&sort=artist`,
    {
      headers: {
        "User-Agent":
          "QuentinFalzonRecordCollection/1.0 +https://github.com/qjstuart/quentinfalzondev",
      },
      next: { revalidate: 3600 },
    }
  )

  const data = await response.json()
  const records = data.releases
  const filteredRecords = searchRecordsByTitleAndArtist(records, query)
  console.log("currentPage", currentPage)

  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {filteredRecords.map((record: DiscogRecord) => (
        <li key={record.instance_id}>
          <div className="size-[200px] relative">
            <Image
              fill
              sizes="(min-width: 375px) 150px, (min-width: 640px) 200px, 200px"
              src={record.basic_information.cover_image}
              alt={record.basic_information.title}
              className="rounded-md"
            />
          </div>
          {/* 
        <h3>{record.basic_information.title}</h3>
        <p>{record.basic_information.artists[0].name}</p>
        <p>{record.basic_information.year}</p>
        <p>{record.basic_information.genres.join(", ")}</p>
        <p>{record.basic_information.styles.join(", ")}</p>
        <p>{record.basic_information.formats[0].name}</p> */}
        </li>
      ))}
    </ul>
  )
}
