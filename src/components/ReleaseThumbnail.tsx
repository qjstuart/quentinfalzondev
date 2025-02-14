"use client"

import Image from "next/image"
import DiscogsCollectionItem from "@/types/DiscogsCollectionItem"

export default function ReleaseThumbnail({ release }: { release: DiscogsCollectionItem }) {
  return (
    <Image
      fill
      sizes="(min-width: 375px) 150px, (min-width: 640px) 200px, 200px"
      src={release.basic_information.cover_image}
      alt={release.basic_information.title}
      className="rounded-md hover:cursor-pointer transition-opacity opacity-0 duration-[1s]"
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
    />
  )
}
