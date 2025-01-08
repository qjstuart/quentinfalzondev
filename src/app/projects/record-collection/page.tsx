import Search from "@/components/Search"
import Pagination from "@/components/Pagination"
import ReleasesList from "@/components/ReleasesList"
import { ReleasesListSkeleton } from "@/components/Skeletons"
import { Suspense } from "react"
import { fetchTotalPages } from "@/app/lib/util"

export default async function RecordCollection(props: {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await fetchTotalPages(query)

  return (
    <>
      <div className="mb-8">
        <Search placeholder="Search by artist or title" />
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination numberOfPages={totalPages} />
      </div>
      <Suspense key={query + currentPage} fallback={<ReleasesListSkeleton />}>
        <ReleasesList query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination numberOfPages={totalPages} />
      </div>
    </>
  )
}
