"use client"

// Refer to /src/types/global.d.ts for importing Splide React components
import { Splide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { Image as DiscogsReleaseImage } from "@/types/DiscogsRelease"
import { useCallback, useState, useEffect } from "react"
import DiscogsReleaseImageCarousel from "./DiscogsReleaseImageCarousel"

export default function DiscogsReleaseImagesCard({ images }: { images: DiscogsReleaseImage[] }) {
  const [loading, setLoading] = useState(true)
  const [splideInstance, setSplideInstance] = useState<Splide>(null)

  useEffect(() => {
    if (splideInstance) {
      splideInstance.refresh() // Force Splide to recalculate layout once it has loaded
    }
  }, [splideInstance, loading])

  function handleSplideMounted(splideInstance: Splide) {
    setSplideInstance(splideInstance)
    const splideElement = document.querySelector(".splide")
    if (loading && splideElement) {
      setLoading(false)
      // When originally hidden, then showed, the Splide carousel seems to behave unpredictably.
      // Specifically it does not assign itself the "is-overflow" class. This means it thinks all
      // slides are visible, when most of the time they are not. Therefore, a useEffect() takes care of
      // refreshing the Splide carousel so that the layout is recalculated and pagination works as expected.
      splideElement.classList.remove("hidden")
      splideElement.classList.add("aspect-square")
    }
  }

  // Cached handler function for expanding/collapsing the Splide carousel container and rotating arrow by 180 degrees.
  const expandCollapseImages = useCallback(() => {
    const carouselContainer = document.querySelector(".image-card__carousel-container")
    if (carouselContainer) {
      carouselContainer.classList.toggle("grid-rows-[0fr]")
      carouselContainer.classList.toggle("grid-rows-[1fr]")
    }
    const arrow = document.querySelector(".image-card__heading-arrow")
    if (arrow) {
      arrow.classList.toggle("rotate-90")
      arrow.classList.toggle("rotate-270")
    }
  }, [])

  return (
    <div className="grid grid-rows-[auto_1fr]">
      <div
        className="image-card__heading relative flex justify-between items-center w-full px-5 py-4 hover:cursor-pointer"
        onClick={expandCollapseImages}
      >
        <p className="text-lg">Images</p>
        {/* Using <svg> as <Image /> and <img> were not able to color the arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          className="image-card__heading-arrow size-[15px] rotate-270 object-contain fill-foreground"
        >
          <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
        </svg>
      </div>
      <div className="image-card__carousel-container grid grid-rows-[1fr] transition-grid-rows duration-500 overflow-hidden">
        {/* Ensure loading placeholder and image carousel both have a square aspect ratio to prevent CLS */}
        {loading && <div className="w-full aspect-square"></div>}
        <DiscogsReleaseImageCarousel images={images} handleSplideMounted={handleSplideMounted} />
      </div>
    </div>
  )
}
