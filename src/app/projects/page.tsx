import React from "react"
import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
  return (
    <>
      <h1 className="text-center">Some things I&apos;ve built</h1>
      <div className="text-copy-primary my-12 mx-auto">
        {/* <ul className="grid gap-12 sm:grid-cols-2 sm:gap-16 place-items-center"> */}
        <ul className="flex flex-col gap-12">
          <ProjectCard
            iconSrc="/record_player_silver.png"
            title="Music Catalog Browser"
            description="Using the Discogs API to showcase my music collection."
            href={"/projects/record-collection/about"}
          />
          <ProjectCard
            iconSrc="/globe.svg"
            title={`Daniel Sant's Website`}
            description={`The official website of pianist/composer Daniel Sant.`}
            href={"/projects/daniel-sant-website/about"}
          />
          <ProjectCard
            iconSrc="/daily_word_detectives.png"
            title="Daily word detectives"
            description={`A not-so covert replica of the famous "Wordle" game.`}
            href={"/projects/daily-word-detectives/about"}
          />

          <ProjectCard
            iconSrc="/nasa-logo.svg"
            title="NASA Pic Of The Day"
            description={`Discover the cosmos with NASA's APOD (Astronomy Picture of the Day) API!`}
            href={"/projects/daniel-sant-website/about"}
          />
          <ProjectCard
            iconSrc="/logo-nextjs.svg"
            title="This Portfolio Website"
            description={`Built using NextJS, Tailwind and TypeScript.`}
            href={"/projects/daniel-sant-website/about"}
          />
        </ul>
      </div>
    </>
  )
}

{
  /* 
  Discogs collection 
  Daily word detectives
  Daniel Sant website
  NASA pic of the day
  This portfolio website
  */
}
