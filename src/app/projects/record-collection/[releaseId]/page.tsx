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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {/* Artists and title */}
      <section className="flex flex-col items-center">
        <h2>
          {release.artists.length === 1 ? release.artists[0].name : "Various"} - {release.title}
        </h2>
      </section>

      <section className="flex flex-col gap-6">
        {/* <div className="mb-12 place-self-center aspect-square size-[200px] xs:size-[240px] md:size-[290px] lg:size-[360px]"> */}
        <div className="aspect-square w-[100%] place-self-center">
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
  )
}
