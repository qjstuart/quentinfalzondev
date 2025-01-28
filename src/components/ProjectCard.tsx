import React from "react"
import Image from "next/image"
import Link from "next/link"

type ProjectCardProps = {
  description: string
  iconSrc: string
  href: string
}

export default function ProjectCard({
  description,
  iconSrc,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="flex justify-center items-center size-[220px] md:size-[280px] rounded-lg shadow-projectcard bg-project-card-bg hover:bg-project-card-bg-hover hover:cursor-pointer transition-colors"
    >
      <div className="grid grid-rows-[1fr_auto] justify-items-center gap-5">
        <div className="size-[100px]  md:size-[150px] relative">
          <Image
            fill
            sizes="(max-width: 640px) 100px, 150px"
            src={iconSrc}
            alt={description}
          />
        </div>
        <p className="text-xl md:text-2xl">{description}</p>
      </div>
    </Link>
  )
}
