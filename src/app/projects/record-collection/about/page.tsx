import ProjectAboutPage from "@/components/ProjectAboutPage"
import { Project } from "@/types/Project"

const projectInfo = {
  id: "1",
  title: "Discogs Record Collection",
  description: "A record collection app using the Discogs API",
  imageSrc: "/record_player_silver.png",
  about:
    "I wanted to create a tool to organize and showcase my vinyl collection. With this app, I can pull data directly from the Discogs API and display details about each record",
}

const project: Project = {
  id: projectInfo.id,
  title: projectInfo.title,
  description: projectInfo.description,
  imageSrc: projectInfo.imageSrc,
  about: projectInfo.about,
}

export default function RecordCollectionAboutPage() {
  return (
    <>
      <ProjectAboutPage project={project}/>
    </>
  )
}
