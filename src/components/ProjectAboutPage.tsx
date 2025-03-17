import { Project } from "@/types/Project"
import Image from "next/image"
import Link from "next/link"
import { FaRegEye } from "react-icons/fa"

export default function ProjectAboutPage({
  imageSrc,
  project,
  openInNewTab,
}: {
  imageSrc?: string
  project: Project
  openInNewTab: boolean
}) {
  return (
    <>
      <section className="flex flex-col items-center max-w-[1024px] mx-auto">
        {/* <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] relative">
        <Image
          fill
          sizes="(max-width: 640px) 100px, 150px"
          src={project.imageSrc}
          alt={project.description}
        />
      </div> */}
        <h1 className="mb-14 text-3xl">{project.title}</h1>

        {/* Project description & summary */}
        <div className="text-xl max-w-[800px]">{project.about}</div>

        {imageSrc && (
          <div className="relative w-full h-[200px] mt-5 mb-10 sm:mt-8 sm:mb-16 md:h-[300px] ">
            <Image src={imageSrc} alt="" fill className="object-contain"></Image>
          </div>
        )}
        {project.link && (
          <button className="border-2 border-foreground rounded-md px-5 py-3 text-background bg-foreground hover:bg-background hover:text-foreground transition-color duration-300">
            <Link
              href={project.link}
              className="flex items-center gap-4"
              target={openInNewTab ? "_blank" : ""}
            >
              <FaRegEye className="size-[25px]" />
              <span className="btn-project-about text-xl md:text-2xl">CHECK OUT THIS PROJECT</span>
            </Link>{" "}
          </button>
        )}
      </section>
    </>
  )
}
