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
    <div className="flex justify-center items-center w-[300px] h-[300px] rounded-lg shadow-lg bg-project-card-bg hover:bg-project-card-bg-hover hover:cursor-pointer transition-colors">
      <div className="grid grid-rows-[1fr_auto] gap-3">
        <Image src={iconSrc} width={200} height={200} alt="Alt text" />
        {/* <picture className="max-w-[200px] max-h-[200px]">
          <img src={iconSrc} />
        </picture> */}
        <p className="justify-self-center text-2xl">{description}</p>
      </div>
    </div>
  )
}
