import DiscogsRelease from "@/types/DiscogsRelease"
import DiscogsResponse from "@/types/DiscogsResponse"
import Image from "next/image"
import { fetchFilteredDiscogsCollection } from "@/app/lib/util"

export default async function RecordsList({
  query,
  currentPage,
}: {
  query: string
  currentPage: number
}) {
  console.log("currentPage", currentPage)

  const releases = await fetchFilteredDiscogsCollection(query, currentPage)

  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {releases.map((release: DiscogsRelease) => (
        <li key={release.instance_id}>
          <div className="size-[200px] relative">
            <Image
              fill
              sizes="(min-width: 375px) 150px, (min-width: 640px) 200px, 200px"
              src={release.basic_information.cover_image}
              alt={release.basic_information.title}
              className="rounded-md hover:cursor-pointer"
            />
          </div>
          {/* 
        <h3>{release.basic_information.title}</h3>
        <p>{release.basic_information.artists[0].name}</p>
        <p>{release.basic_information.year}</p>
        <p>{release.basic_information.genres.join(", ")}</p>
        <p>{release.basic_information.styles.join(", ")}</p>
        <p>{release.basic_information.formats[0].name}</p> */}
        </li>
      ))}
    </ul>
  )
}
