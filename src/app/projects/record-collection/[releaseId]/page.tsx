import { fetchRelease, fetchAppleMusicId, fetchWithErrorHandling } from "@/app/lib/util"
import { Suspense } from "react"
import AppleMusicPlayer from "@/components/AppleMusicPlayer"

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

      <section>
        <Suspense fallback={<p>Loading video...</p>}>
          <AppleMusicPlayer appleMusicId={appleMusicId} />
        </Suspense>
        {/* Other content of the page */}
      </section>
    </div>
  )
}
