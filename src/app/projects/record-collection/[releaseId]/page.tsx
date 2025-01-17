import { fetchRelease, fetchAppleMusicId, fetchWithErrorHandling } from "@/app/lib/utils"
import { Suspense } from "react"
import AppleMusicPlayer from "@/components/AppleMusicPlayer"
import DiscogsReleaseImagesCard from "@/components/DiscogsReleaseImagesCard"

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
  console.log(release)

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="release-details flex flex-col gap-4 pb-6">
          {/* Artists & title */}
          <div className="release-details__title">
            <h2 className="md:text-3xl">
              {release.artists.length === 1 ? release.artists[0].name : "Various"} - {release.title}
            </h2>
          </div>

          {/* Genres */}
          <div className="release-details__genre">
            <p className="release-field">Genre</p>
            {release.genres.map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
          {/* Styles */}
          <div className="release-details__styles">
            <p className="release-field">Styles</p>
            {release.styles.map((style, index) => (
              <span key={style}>
                {style} {index < release.styles.length - 1 && "/ "}
              </span>
            ))}
          </div>
          {/* Year */}
          <div className="release-details__year">
            <p className="release-field">Year</p>
            {release.year}
          </div>
          {/* Labels */}
          <div className="release-details__labels">
            <p className="release-field">Labels</p>
            {release.labels.map((label) => (
              <span key={label.name}>{label.name}</span>
            ))}
          </div>
          {/* Notes */}
          <div className="release-details__notes">
            <p className="release-field">Release Notes</p>
            <div>{release.notes}</div>
          </div>
        </div>

        <div className="mx-auto w-full max-sm:max-w-[400px]">
          <section className="flex flex-col gap-6">
            {/* below element had aspect-square */}
            <div className="w-[100%] place-self-center relative bg-release-images-card rounded-[15px] boxshadow-studydesk">
              <DiscogsReleaseImagesCard images={release.images} />
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

      <DiscogsReleaseImagesCard images={release.images} />

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
