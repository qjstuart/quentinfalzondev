import DiscogsCollectionItem from "@/types/DiscogsCollectionItem"
import Link from "next/link"
import { fetchFilteredReleases } from "@/app/lib/utils"
import ReleaseThumbnail from "./ReleaseThumbnail"

export default async function RecordsList({
  query,
  currentPage,
}: {
  query: string
  currentPage: number
}) {
  const releases = await fetchFilteredReleases(query, currentPage)

  if (releases.length === 0) {
    return (
      <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <li className="size-[200px]" />
      </ul>
    )
  }

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {releases.map((release: DiscogsCollectionItem) => (
        <li key={release.instance_id}>
          <Link href={`/projects/record-collection/${release.id}`}>
            <div className="size-[155px] md:size-[200px] relative">
              <ReleaseThumbnail release={release} />
              {/* <Image
                fill
                sizes="(min-width: 375px) 150px, (min-width: 640px) 200px, 200px"
                src={release.basic_information.cover_image}
                alt={release.basic_information.title}
                className="rounded-md hover:cursor-pointer transition-opacity opacity-0 duration-[0.5s]"
                onLoadingComplete={(image) => image.classList.remove("opacity-0")}
              /> */}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
