import Search from "@/components/Search"
import ReleasesList from "@/components/ReleasesList"
import { ReleasesListSkeleton } from "@/components/Skeletons"
import { Suspense } from "react"
import { fetchDiscogsCollection, filterReleasesByTitleAndArtist } from "@/app/lib/util"
import { RELEASES_PER_PAGE } from "@/app/lib/util"

export default async function RecordCollection(props: {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1

  const allReleases = await fetchDiscogsCollection()
  console.log("allReleases", allReleases)

  const numberOfSearchResults = filterReleasesByTitleAndArtist(allReleases, query).length 
  console.log("numberOfSearchResults", numberOfSearchResults)
  const numberOfPages = Math.ceil(numberOfSearchResults / RELEASES_PER_PAGE)

  return (
    <>
      <div className="mb-8">
        <Search placeholder="Search by artist or title" />
      </div>
      <Suspense key={query + currentPage} fallback={<ReleasesListSkeleton />}>
        <ReleasesList query={query} currentPage={currentPage} releases={allReleases}/>
      </Suspense>
    </>
  )
}
