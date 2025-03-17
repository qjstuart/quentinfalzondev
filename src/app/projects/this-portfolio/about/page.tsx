import ProjectAboutPage from "@/components/ProjectAboutPage"
import { Project } from "@/types/Project"
import Link from "next/link"

const projectInfo = {
  id: "5",
  title: "Portfolio Website",
  description: "A record collection app using the Discogs API",
  link: "/projects/record-collection/",
  about: (
    <>
      <div className="mb-6 font-primary text-base sm:text-lg">
        <p className="mb-8">
          You are currently viewing exploring my portfolio website, built using{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            NextJS
          </Link>
          . NextJS is a hybrid framework which supports traditional Static Site Generation (SSG) but
          is better known for features like Server Side Rendering (SSR) and Incremetal Static
          Regeneration (ISR).
        </p>
        <p className="mb-8">
          Since NextJS is based on React, the capabilites of Client Side Rendering (CSR) with React
          are also available. However, in practice one should strive to use SSR over CSR because
          with SSR, content is pre-rendered on the server and served directly to the client. This
          allows for much better Search Engine Optimization (SEO) and page load speeds.
        </p>
        <p className="mb-8">
          Of course it is not always possible to pre-render everything on the server, especially
          dynamic parts of a website. For example, if users are able to toggle between light and
          dark mode, there's no way the server knows the user's theme preference. Typically, this
          is accessed from <span className="italic">localStorage</span>. In fact, this was
          a challenge I faced in this project which helped me understand how SSR and CSR often work together. The
          solution was to wrap the site in a "provider" client-side component (this does{" "}
          <span className="font-bold">not</span> mean the site gets converted to CSR!), and only
          render UI which depends on the current them once the page has mounted. Doing this
          introduces a "hydration warning", because the HTML on the server no longer matches the
          HTML generated on the client - but in this case it is fine (and recommended) to suppress the warning.
        </p>
        <p className="mb-8">
          I'm also enjoying experimenting with UI libraries like{" "}
          <Link
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://motion.dev/"
          >
            Motion
          </Link>{" "}
          (previously <span className="italic">Framer Motion</span>) for animations, and {" "}
          <Link
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://particles.js.org/"
          >
            tsParticles
          </Link>{" "}
          for adding some subtle character to websites. Building the{" "}
          <Link
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="/projects/record-collection/"
          >
            Record Collection
          </Link>{" "}
          project and integrating it directly into this portfolio site (didn't make much sense to
          have it hosted independently for the time being) was also great fun. Enjoy your time here!
        </p>
      </div>
    </>
  ),
}

const project: Project = {
  id: projectInfo.id,
  title: projectInfo.title,
  description: projectInfo.description,
  about: projectInfo.about,
}

export default function RecordCollectionAboutPage() {
  return (
    <>
      <ProjectAboutPage project={project} openInNewTab={false} />
    </>
  )
}
