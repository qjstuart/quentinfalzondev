import React from "react"
import Image from "next/image"
import Link from "next/link"

type ProjectCardProps = {
  description: string
  iconSrc: string
  href: string
}

export default function ProjectCard({ description, iconSrc, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="flex justify-center items-center px-4 sm:px-12 py-6 gap-4 sm:gap-8 rounded-lg shadow-projectcard bg-project-card-bg hover:bg-project-card-bg-hover hover:cursor-pointer transition-colors"
    >
      {/* <div className="grid grid-rows-[1fr_auto] justify-items-center gap-5"> */}
      <div className="size-[60px]  md:size-[80px] relative">
        <Image
          fill
          sizes="(max-width: 640px) 100px, 150px"
          src={iconSrc}
          alt={description}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-lg sm:text-2xl">{description}</p>
        <p className="text-md text-gray">Test secondary description</p>
      </div>
      {/* </div> */}
    </Link>
  )
}
