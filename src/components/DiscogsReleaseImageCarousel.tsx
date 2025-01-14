"use client"

// Refer to /src/types/global.d.ts for importing Splide React components
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import Image from "next/image"
import { Image as DiscogsReleaseImage } from "@/types/DiscogsRelease"

export default function DiscogsReleaseImageCarousel({ images }: { images: DiscogsReleaseImage[] }) {
  return (
    <Splide
      options={{
        rewind: true,
      }}
      hasTrack="true"
      tag="section"
      aria-label="Discogs release image carousel"
      className="size-full"
    >
      {images.map((image) => (
        <SplideSlide
          key={image.resource_url}
          // className="relative size-[200px] xs:size-[240px] md:size-[290px] lg:size-[360px]"
          className="relative aspect-square"

        >
          <Image className="object-contain" src={image.resource_url} fill priority alt="" />
        </SplideSlide>
      ))}
    </Splide>
  )
}
