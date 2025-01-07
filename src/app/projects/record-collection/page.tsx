import Search from "@/components/Search"
import RecordsList from "@/components/RecordsList"
import { RecordsListSkeleton } from "@/components/Skeletons"
import { Suspense } from "react"
import { fetchDiscogsCollection, filterRecordsByTitleAndArtist } from "@/app/lib/util"

export default async function RecordCollection(props: {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1

  const response = await fetchDiscogsCollection()
  const discogsResponse = await response.json()
  console.log("discogsResponse", discogsResponse)

  const numberOfSearchResults = filterRecordsByTitleAndArtist(discogsResponse.releases, query).length 
  const numberOfPages = Math.ceil(numberOfSearchResults / 100)
  console.log("numberOfPages", numberOfPages)

  return (
    <>
      <div className="mb-8">
        <Search placeholder="Search your collection" />
      </div>
      <Suspense key={query + currentPage} fallback={<RecordsListSkeleton />}>
        <RecordsList query={query} currentPage={currentPage} discogsResponse={discogsResponse}/>
      </Suspense>
    </>
  )
}
