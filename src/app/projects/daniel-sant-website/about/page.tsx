import ProjectAboutPage from "@/components/ProjectAboutPage"
import { Project } from "@/types/Project"
import Link from "next/link"

const projectInfo = {
  id: "2",
  title: "Daniel Sant's Website",
  description: "The official website of Daniel Sant",
  about: (
    <>
      <p className="mb-6">
        Daniel Sant is an upcoming pianist and composer based in Utrecht, Netherlands. He is active
        in both local and international jazz scenes.
      </p>
      <p className="mb-6">
        Daniel&apos;s needed a website where his audience can get to know his story and
        find important information such as latest releases and collaborations. I wanted to
        prioritize simplicity and efficiency for this project, while keeping the option for adding
        new features open.
      </p>{" "}
      <p className="mb-6">
        For me this meant choosing a lightweight Static Site Generator (SSG) such as{" "}
        <Link href="https://www.11ty.dev/" className="underline" target="_blank">
          Eleventy
        </Link>{" "}
        I also included SASS to help keep stylesheets separated and manageable as they inevitably start to grow.
        Currently, the website is also being expanded to allow for downloadable sheet music.
      </p>
    </>
  ),
  link: "https://www.danielsant.com",
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
      <ProjectAboutPage imageSrc="/mockups/daniel-sant-mockups.webp" project={project} openInNewTab={true} />
    </>
  )
}
