import { Project } from "@/types/Project"
import Image from "next/image"

export default function ProjectAboutPage({ project }: { project: Project }) {
  return (
    <>
      <h1 className="mb-4">{project.title}</h1>
      <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] relative">
        <Image
          fill
          sizes="(max-width: 640px) 100px, 150px"
          src={project.imageSrc}
          alt={project.description}
        />
      </div>
    </>
  )
}
