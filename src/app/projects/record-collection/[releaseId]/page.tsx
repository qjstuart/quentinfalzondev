import { fetchRelease } from "@/app/lib/util"
import { Suspense } from "react"
import AppleMusicPlayer from "@/components/AppleMusicPlayer"
import DiscogsRelease from "@/types/DiscogsRelease"

export default async function ReleaseDetails({
  params,
}: {
  params: Promise<{ releaseId: string }>
}) {
  const { releaseId } = await params
  console.log("params:", releaseId)
  let release: DiscogsRelease

  try {
    release = await fetchRelease(releaseId)
  } catch (error) {
    return <div>{(error as Error).message}</div>
  }

  // try {
  //   const appleMusicId = await fetchAppleMusicId(release)
  // } catch (error) {
  //   return <div>{(error as Error).message}</div>
  // }

  return (
    <>
      <h1>{release.title}</h1>
      <div>release id is {releaseId}</div>

      <section>
        <Suspense fallback={<p>Loading video...</p>}>
          <AppleMusicPlayer />
        </Suspense>
        {/* Other content of the page */}
      </section>
    </>
  )
}
