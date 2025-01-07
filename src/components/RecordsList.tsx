import DiscogsRecord from "@/types/DiscogsRecord"
import DiscogsResponse from "@/types/DiscogsResponse"
import Image from "next/image"
import { filterRecordsByTitleAndArtist } from "@/app/lib/util"

export default async function RecordsList({
  query,
  currentPage,
  discogsResponse,
}: {
  query: string
  currentPage: number
  discogsResponse: DiscogsResponse
}) {
  const records = discogsResponse.releases
  const filteredRecords = filterRecordsByTitleAndArtist(records, query)

  // console.log("data", data)
  // console.log("records.length", records.length)
  console.log("currentPage", currentPage)

  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {filteredRecords.map((record: DiscogsRecord) => (
        <li key={record.instance_id}>
          <div className="size-[200px] relative">
            <Image
              fill
              sizes="(min-width: 375px) 150px, (min-width: 640px) 200px, 200px"
              src={record.basic_information.cover_image}
              alt={record.basic_information.title}
              className="rounded-md hover:cursor-pointer"
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
