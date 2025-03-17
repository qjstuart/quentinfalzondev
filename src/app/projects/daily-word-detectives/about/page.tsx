import ProjectAboutPage from "@/components/ProjectAboutPage"
import { Project } from "@/types/Project"
import Link from "next/link"
import { IoIosInformationCircleOutline } from "react-icons/io"

import MyTooltip from "@/components/MyTooltip"

const projectInfo = {
  id: "3",
  title: "Daily Word Detectives",
  description: 'A not-so covert replica of the famous web-based game "Wordle"',
  imageSrc: "/record_player_silver.png",
  link: "https://dailyworddetectives.netlify.app/",
  about: (
    <>
      <p className="mb-8">
        The goal of this mini-project was to practice a bit of JavaScript. I wanted something
        bite-sized that I could hack together in no more than a day or two. I used to love playing
        the{" "}
        <Link
          href="https://www.nytimes.com/games/wordle/index.html"
          className="underline"
          target="_blank"
        >
          Wordle
        </Link>{" "}
        game every morning when I was younger, so I thought it would be a good idea to try and
        recreate it.
      </p>
      <p className="mb-8">
        This project relies on vanilla JS to reach out to a public API, containing a 5-letter
        mystery word that changes every day. Users have 6 tries to guess the word. On each guess,
        the UI provides color-coded feedback on each letter. A nice additional feature this version
        has, is that it verifies the word to be a valid word, preventing a player from entering
        invlaid words to gain unfair insights to the mystery word.
      </p>
    </>
  ),
}

const project: Project = {
  id: projectInfo.id,
  title: projectInfo.title,
  description: projectInfo.description,
  about: projectInfo.about,
  link: projectInfo.link,
}

export default function DailyWordDetectives() {
  return (
    <>
      <ProjectAboutPage imageSrc="/mockups/dailyworddetectives-mobile.webp" project={project} openInNewTab={true} />
    </>
  )
}
