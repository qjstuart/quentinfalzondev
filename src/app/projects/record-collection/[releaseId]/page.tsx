import {
  fetchRelease,
  fetchAppleMusicId,
  fetchWithErrorHandling,
  fetchArtistInfo,
} from "@/app/lib/utils"
import { Suspense } from "react"
import AppleMusicPlayer from "@/components/AppleMusicPlayer"
import DiscogsReleaseImagesCard from "@/components/DiscogsReleaseImagesCard"
import ArtistInfo from "@/components/ArtistInfo"

export default async function ReleaseDetails({
  params,
}: {
  params: Promise<{ releaseId: string }>
}) {
  const { releaseId } = await params
  const release = await fetchWithErrorHandling(() => fetchRelease(releaseId))
  console.log("release: ", release)

  if (!release) {
    return <div>Error fetching release</div>
  }

  const artistId = release.artists[0].id
  const artistInfo = await fetchWithErrorHandling(() => fetchArtistInfo(artistId))
  console.log("artistInfo", artistInfo)

  const appleMusicId = await fetchWithErrorHandling(() => fetchAppleMusicId(release))

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="release-details flex flex-col gap-6 pb-6">
          {/* Artist + release title */}
          <div className="release-details__title">
            <h2 className="font-semibold md:text-3xl">
              {release.artists.length === 1 ? release.artists[0].name : "Various"} - {release.title}
            </h2>
          </div>

          {/* Other release information in a grid layout */}
          <div className="grid gap-3 grid-rows-2 grid-cols-[4fr_6fr] sm:gap-5">
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
              {release.labels.map((label, index) => (
                <span key={index}>
                  {label.name} {index < release.labels.length - 1 && "/ "}
                </span>
              ))}
            </div>
          </div>

          {/* Notes */}
          {release.notes && (
            <div className="release-details__notes">
              <p className="release-field">Release Notes</p>
              <div>{release.notes}</div>
            </div>
          )}

          {/* TODO if artistInfo?.profile or artistInfo.realname, then show the Artist Info section*/}
          {/* Artist info */}
          {/* {artistInfo?.profile && (
            <div className="release-details__artist-info">
              <p className="release-field">Artist Information</p>
              <div>{artistInfo?.profile}</div>
            </div>
          )} */}
          {artistInfo?.profile && <ArtistInfo artistInfo={artistInfo}/>}
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
