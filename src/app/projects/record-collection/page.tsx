import Search from "@/components/Search"
import RecordsList from "@/components/RecordsList"
import { RecordsListSkeleton } from "@/components/Skeletons"
import { Suspense } from "react"

export default async function RecordCollection(props: {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1

  return (
    <>
      <div className="mb-8">
        <Search placeholder="Search your collection" />
      </div>
      <Suspense key={query + currentPage} fallback={<RecordsListSkeleton />}>
        <RecordsList query={query} currentPage={currentPage} />
      </Suspense>
    </>
  )
}
