import DiscogsCollectionItem from "@/types/DiscogsCollectionItem"
import Image from "next/image"
import Link from "next/link"
import { fetchFilteredReleases } from "@/app/lib/utils"

export default async function RecordsList({
  query,
  currentPage,
}: {
  query: string
  currentPage: number
}) {
  const releases = await fetchFilteredReleases(query, currentPage)

  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {releases.map((release: DiscogsCollectionItem) => (
        <li key={release.instance_id}>
          <Link href={`/projects/record-collection/${release.id}`}>
            <div className="size-[200px] relative">
              <Image
                fill
                sizes="(min-width: 375px) 150px, (min-width: 640px) 200px, 200px"
                src={release.basic_information.cover_image}
                alt={release.basic_information.title}
                className="rounded-md hover:cursor-pointer"
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
