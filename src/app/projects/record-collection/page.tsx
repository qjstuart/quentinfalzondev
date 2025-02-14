import Search from "@/components/Search"
import Pagination from "@/components/Pagination"
import ReleasesList from "@/components/ReleasesList"
import { ReleasesListSkeleton } from "@/components/Skeletons"
import { Suspense } from "react"
import { fetchTotalPages, fetchWithErrorHandling } from "@/app/lib/utils"
import Link from "next/link"
import NotFound from "@/app/not-found"

export default async function RecordCollection(props: {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await fetchWithErrorHandling(() => fetchTotalPages(query))

  // If there is an error fetching the total number of pages
  if (totalPages === null) {
    return <div>Error fetching number of total pages</div>
  }

  // If user enters a non-existent page number in URL
  if (currentPage > totalPages || currentPage < 0) {
    return (
      // <div>
      //   Page not found!
      //   <Link href="/">Back to homepage</Link>
      <NotFound />
      // </div>
    )
  }

  return (
    <section className="mx-auto flex flex-col items-center">
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
    </section>
  )
}
