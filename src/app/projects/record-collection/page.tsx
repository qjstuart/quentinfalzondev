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

  // const response = await fetch(
  //   `https://api.discogs.com/users/QJ_Stuart/collection/folders/0/releases?token=${process.env.DISCOGS_TOKEN}&per_page=200&sort=artist`,
  //   {
  //     headers: {
  //       "User-Agent":
  //         "QuentinFalzonRecordCollection/1.0 +https://github.com/qjstuart/quentinfalzondev",
  //     },
  //     next: { revalidate: 3600 },
  //   }
  // )

  // const data = await response.json()
  // console.log("data.releases.Length", data.releases.length)
  // console.log("currentPage", currentPage)

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
