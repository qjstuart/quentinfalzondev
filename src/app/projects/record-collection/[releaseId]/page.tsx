import { fetchRelease, fetchAppleMusicId, fetchWithErrorHandling } from "@/app/lib/utils"
import { Suspense } from "react"
import AppleMusicPlayer from "@/components/AppleMusicPlayer"
import DiscogsReleaseImageCarousel from "@/components/DiscogsReleaseImageCarousel"

export default async function ReleaseDetails({
  params,
}: {
  params: Promise<{ releaseId: string }>
}) {
  const { releaseId } = await params
  const release = await fetchWithErrorHandling(() => fetchRelease(releaseId))

  if (!release) {
    return <div>Error fetching release</div>
  }

  const appleMusicId = await fetchWithErrorHandling(() => fetchAppleMusicId(release))

  if (!appleMusicId) {
    return <div>Error fetching Apple Music ID</div>
  }

  return (
    <div className="bg-blue">
      <h1>{release.title}</h1>
      <div>release id is {releaseId}</div>

      <DiscogsReleaseImageCarousel images={release.images}/>

      <section>
        <Suspense fallback={<p>Loading video...</p>}>
          <AppleMusicPlayer appleMusicId={appleMusicId} />
        </Suspense>
      </section>
    </div>
  )
}
