import React from "react"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <>
      <h1 className="">Some things I've built</h1>
      <div className="text-copy-primary my-12">
        <div>
          <ul className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* 
                Discogs collection 
                Daily word detectives
                Daniel Sant website
                NASA pic of the day
                This portfolio website
            */}
            <ProjectCard
              iconSrc="/record_player_silver.png"
              description="Music Catalog Browser"
            />
            <ProjectCard
              iconSrc="/daily_word_detectives.png"
              description="Daily word detectives"
            />
            {/* <ProjectCard
              iconSrc="https://t4.ftcdn.net/jpg/05/89/27/21/360_F_589272121_akMVElogcYg2xhMoL3EQntLNKSQ4X6zC.jpg"
              description="Daniel Sant website"
            /> */}
            {/* <ProjectCard
              iconSrc="https://t4.ftcdn.net/jpg/05/89/27/21/360_F_589272121_akMVElogcYg2xhMoL3EQntLNKSQ4X6zC.jpg"
              description="NASA pic of the day"
            /> */}
            {/* <ProjectCard
              iconSrc="https://t4.ftcdn.net/jpg/05/89/27/21/360_F_589272121_akMVElogcYg2xhMoL3EQntLNKSQ4X6zC.jpg"
              description="This portfolio website"
            /> */}
          </ul>
        </div>
      </div>
    </>
  )
}
