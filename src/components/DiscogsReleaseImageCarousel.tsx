"use client"

// Refer to /src/types/global.d.ts for importing Splide React components
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import Image from "next/image"
import { Image as DiscogsReleaseImage } from "@/types/DiscogsRelease"
import { useCallback } from "react"

export default function DiscogsReleaseImageCarousel({ images }: { images: DiscogsReleaseImage[] }) {
  const expandCollapseImages = useCallback(() => {
    const arrow = document.querySelector(".image-card__heading-arrow")
    const carouselContainer = document.querySelector(".image-card__carousel-container")
    if (arrow) {
      arrow.classList.toggle("rotate-90")
      arrow.classList.toggle("rotate-270")
    }
    if (carouselContainer) {
      carouselContainer.classList.toggle("grid-rows-[0fr]")
      carouselContainer.classList.toggle("grid-rows-[1fr]")
    }
  }, [])

  return (
    <div className="grid grid-rows-[auto_1fr]">
      <div
        className="image-card__heading relative flex justify-between items-center w-full px-8 py-4 hover:cursor-pointer"
        onClick={expandCollapseImages}
      >
        <p className="text-lg">Images</p>
        {/* Using <svg> as <Image /> and <img> were not able to color the arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          className="image-card__heading-arrow size-[15px] rotate-90 object-contain fill-foreground"
        >
          <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
        </svg>
      </div>
      <div className="image-card__carousel-container grid grid-rows-[0fr] transition-grid-rows duration-500">
        <div className="overflow-hidden">
          {/* TO PLACE THE FOLLOWING INSIDE A DiscogsReleaseImageCarousel COMPONENT & RENAME THIS FILE TO E.G. DiscogsReleaseImagesCard*/}
          <Splide
            options={{
              rewind: true,
            }}
            hasTrack="true"
            tag="section"
            aria-label="Release image carousel"
            className="px-8 pb-2 overflow-hidden"
          >
            {/* below element had aspect-square */}
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
        </div>
      </div>
    </div>
  )
}
