import React from "react"
import Image from "next/image"

type ProjectCardProps = {
  description: string
  iconSrc: string
}

export default function ProjectCard({
  description,
  iconSrc,
}: ProjectCardProps) {
  return (
    <div className="flex justify-center items-center w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-lg shadow-projectcard bg-project-card-bg hover:bg-project-card-bg-hover hover:cursor-pointer transition-colors">
      <div className="grid grid-rows-[1fr_auto] justify-items-center gap-5">
        <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] relative">
          <Image
            fill
            sizes="(max-width: 640px) 100px, 150px"
            src={iconSrc}
            alt={description}
          />
        </div>
        <p className="text-xl md:text-2xl">{description}</p>
      </div>
    </div>
  )
}
