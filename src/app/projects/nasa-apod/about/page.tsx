import ProjectAboutPage from "@/components/ProjectAboutPage"
import { Project } from "@/types/Project"
import Link from "next/link"

const projectInfo = {
  id: "3",
  title: "NASA Astronomy Pic of the Day",
  description: "Discover the cosmos with NASA's APOD (Astronomy Picture of the Day) API!",
  about: (
    <>
      <p className="mb-6">
        This mini-project fetches and displays{" "}
        <Link href="https://apod.nasa.gov/apod/astropix.html" className="underline" target="_blank">
          NASA&apos;s APOD
        </Link>{" "}
        <span className="italic">(Astronomy Picture of the Day)</span>, with a description and other
        metadata. I wanted a quick way to get back into React after having spent some time working
        with other technologies. The app updates daily with a new image from NASA&apos;s public API.
        No extra libraries were used, just standard client-side React.
      </p>
    </>
  ),
  link: "https://qfprojectnasa.netlify.app/",
}

const project: Project = {
  id: projectInfo.id,
  title: projectInfo.title,
  description: projectInfo.description,
  about: projectInfo.about,
  link: projectInfo.link,
}

export default function RecordCollectionAboutPage() {
  return (
    <>
      <ProjectAboutPage
        imageSrc="/nasa-logo.svg"
        project={project}
        openInNewTab={true}
      />
    </>
  )
}
