import React from "react"

type ProjectCardProps = {
  description: string
  iconSrc: string
}

export default function ProjectCard({
  description,
  iconSrc,
}: ProjectCardProps) {
  return (
    <div className="flex items-center border border-copy-primary">
      <div className="basis-3/12">
        <picture>
          <img src={iconSrc} />
        </picture>
      </div>
      <div className="basis-9/12">
        <p className="justify-self-center">{description}</p>
      </div>
    </div>
  )
}
