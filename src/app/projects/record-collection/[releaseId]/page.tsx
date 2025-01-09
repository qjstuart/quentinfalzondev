import { fetchRelease } from "@/app/lib/util"
import { Suspense } from "react"

export default async function ReleaseDetails({
  params,
}: {
  params: { releaseId: string }
}) {
  const { releaseId } = await params

  try {
    const releaseInfo = await fetchRelease(releaseId)
    console.log("releaseInfo:", releaseInfo)
  } catch (error) {
    return <div>{(error as Error).message}</div>
  }

  return (
    <>
      <div>Release details page</div>
      <div>release id is {releaseId}</div>
    </>
  )
}
