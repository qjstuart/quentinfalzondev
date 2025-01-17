import { Splide, SplideSlide } from "@splidejs/react-splide"
import Image from "next/image"
import { Image as DiscogsReleaseImage } from "@/types/DiscogsRelease"

export default function DiscogsReleaseImageCarousel({
  images,
  handleSplideMounted,
}: {
  images: DiscogsReleaseImage[]
  handleSplideMounted: (splide: Splide) => void
}) {
  return (
    <Splide
      onMounted={(splide: Splide) => handleSplideMounted(splide)}
      options={{
        rewind: true,
        autoHeight: true,
      }}
      hasTrack="true"
      tag="section"
      aria-label="Release image carousel"
      className={"px-5 overflow-hidden hidden"}
    >
      {/* Make sure slides are square to prevent CLS */}
      {images.map((image) => (
        <SplideSlide key={image.resource_url} className="aspect-square relative">
          <Image
            className="object-contain"
            src={image.resource_url}
            alt="Release image"
            sizes="(max-width: 640px) 400px, 500px"
            fill
            priority
          />
        </SplideSlide>
      ))}
    </Splide>
  )
}
