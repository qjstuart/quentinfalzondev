import ProjectAboutPage from "@/components/ProjectAboutPage"
import { Project } from "@/types/Project"

const projectInfo = {
  id: "2",
  title: "Daniel Sants Website",
  description: "The official website of Daniel Sant",
  imageSrc: "/record_player_silver.png",
  about:
    "Tasked to build a functional website for pianist/composer Daniel Sant. The goal is to have a platform for his audience to find important information, and is also being expanded to allow for people to view Daniel's sheet music",
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
      <ProjectAboutPage project={project} />
    </>
  )
}
