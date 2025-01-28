import React from "react"
import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
  return (
    <>
      <h1 className="text-center">Some things I&apos;ve built</h1>
      <div className="text-copy-primary my-12 mx-auto">
        <ul className="grid gap-12 sm:grid-cols-2 sm:gap-16 place-items-center">
          <ProjectCard
            iconSrc="/record_player_silver.png"
            description="Music Catalog Browser"
            href={"/projects/record-collection/about"}
          />
          <ProjectCard
            iconSrc="/daily_word_detectives.png"
            description="Daily word detectives"
            href={"/projects/daily-word-detectives/about"}
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
