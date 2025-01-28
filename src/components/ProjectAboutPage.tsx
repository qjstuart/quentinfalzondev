import { Project } from "@/types/Project"
import Image from "next/image"
import Link from "next/link"
import { FaRegEye } from "react-icons/fa"

export default function ProjectAboutPage({ project }: { project: Project }) {
  return (
    <section className="flex flex-col gap-3 items-center max-w-[1024px] mx-auto">
      <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] relative">
        <Image
          fill
          sizes="(max-width: 640px) 100px, 150px"
          src={project.imageSrc}
          alt={project.description}
        />
      </div>
      <h1 className="mb-4">{project.title}</h1>

      {/* Project description & summary */}
      <p className="text-xl max-w-[800px]">{project.about}</p>

      <button className="border-2 border-foreground rounded-md px-5 py-2 mt-8">
        <Link href={project.link} className="flex items-center gap-4">
          <FaRegEye className="size-[25px]" />
          <span className="btn-project-about text-xl">CHECK OUT THIS PROJECT</span>
        </Link>
      </button>
    </section>
  )
}
