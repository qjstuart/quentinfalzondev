"use client"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import Image from "next/image"
import { Image as DiscogsReleaseImage } from "@/types/DiscogsRelease"

export default function DiscogsReleaseImageCarousel({ images }: { images: DiscogsReleaseImage[] }) {
  return (
    <>
      <div className="w-[600px] h-[600px]">
        Discogs
        <Splide aria-label="Discogs release image carousel">
          {images.map((image) => (
            <SplideSlide key={image.resource_url} className="size-full">
              <Image
                width={image.width}
                height={image.height}
                src={image.resource_url}
                alt=""
                className="object-cover"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  )
}
