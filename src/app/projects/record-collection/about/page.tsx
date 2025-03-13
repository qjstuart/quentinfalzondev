import ProjectAboutPage from "@/components/ProjectAboutPage"
import { Project } from "@/types/Project"
import Link from "next/link"
import { IoIosInformationCircleOutline } from "react-icons/io"

import MyTooltip from "@/components/MyTooltip"

const projectInfo = {
  id: "1",
  title: "Music Catalog Browser",
  description: "A record collection app using the Discogs API",
  imageSrc: "/record_player_silver.png",
  link: "/projects/record-collection/",
  about: (
    <>
      <div className="mb-6 font-primary text-base sm:text-lg">
        Being an out-and-out music aficionado, I have been using{" "}
        <span className="inline-flex">
          Discogs
          <IoIosInformationCircleOutline className="anchor-discogs inline outline-none size-[20px]" />
        </span>{" "}
        <MyTooltip anchorSelect=".anchor-discogs" place="top-start" fontSize="0.8rem">
          An online music database & marketplace. <br /> Similar to what IMDB is for movies.
        </MyTooltip>
        for several years now. It serves as an invaluable resource - both for discovering new music
        and for further exploring my favorite artists&apos; discographies. Furthermore, it allows
        you to create an account and keep track of your own personal music collection.
      </div>
      <div className="mb-6 font-primary text-base sm:text-lg">
        As soon as I found out that they have a{" "}
        <Link
          href="https://www.discogs.com/developers"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground/80 transition-color duration-300"
        >
          publicly-accessible API
        </Link>
        , I knew it would be fun to create a small website that fetches and showcases the releases
        in my vinyl collection.
      </div>
    </>
  ),
}

const project: Project = {
  id: projectInfo.id,
  title: projectInfo.title,
  description: projectInfo.description,
  imageSrc: projectInfo.imageSrc,
  about: projectInfo.about,
  link: projectInfo.link,
}

export default function RecordCollectionAboutPage() {
  return (
    <>
      <ProjectAboutPage mockupSrc="/mockup_dummy.avif" project={project} openInNewTab={false} />
    </>
  )
}
