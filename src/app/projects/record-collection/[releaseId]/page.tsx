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

  return (
    <div className="mx-auto w-full max-w-[1200px] ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Artists and title */}
        <div className="flex flex-col items-center">
          <h2>
            {release.artists.length === 1 ? release.artists[0].name : "Various"} - {release.title}
          </h2>
        </div>

        <div className="mx-auto w-full max-sm:max-w-[400px]">
          <section className="flex flex-col gap-6">
            {/* below element had aspect-square */}
            <div className="w-[100%] place-self-center relative bg-release-images-card rounded-[15px] boxshadow-studydesk">
              <DiscogsReleaseImageCarousel images={release.images} />
            </div>
            <div>
              {appleMusicId && (
                <Suspense fallback={<p>Loading video...</p>}>
                  <AppleMusicPlayer appleMusicId={appleMusicId} />
                </Suspense>
              )}
            </div>
          </section>
        </div>

        {/* <h1>{release.title}</h1>
      <div>release id is {releaseId}</div>

      <DiscogsReleaseImageCarousel images={release.images} />

      {appleMusicId && (
        <section className="apple-music">
          <Suspense fallback={<p>Loading video...</p>}>
            <AppleMusicPlayer appleMusicId={appleMusicId} />
          </Suspense>
        </section>
      )} */}
      </div>
    </div>
  )
}
