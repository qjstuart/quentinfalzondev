import React from "react"
import Image from "next/image"
import Link from "next/link"

type ProjectCardProps = {
  title: string
  description: string
  iconSrc: string
  href: string
}

export default function ProjectCard({ title, description, iconSrc, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="grid grid-cols-[auto_1fr] justify-center items-center px-4 sm:px-12 py-6 gap-4 sm:gap-8 max-w-[700px] rounded-lg shadow-projectcard bg-project-card-bg hover:bg-project-card-bg-hover hover:cursor-pointer transition-colors"
    >
      <div className="size-[60px] md:size-[80px] relative">
        <Image
          fill
          sizes="(max-width: 640px) 100px, 150px"
          src={iconSrc}
          alt={description}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col h-full justify-center sm:gap-1">
        <p className="text-md sm:text-lg md:text-2xl">{title}</p>
        <p className="text-gray text-sm sm:text-md md:text-lg">{description}</p>
      </div>
    </Link>
  )
}
