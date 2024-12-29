import React from "react"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <>
      <h1 className="">Some things I've built</h1>
      <div className="text-copy-primary m-8">
        <div>
          <ul className="grid grid-cols-2 gap-16">
            {/* 
                Discogs collection 
                Daily word detectives
                Daniel Sant website
                NASA pic of the day
                This portfolio website
            */}
            <ProjectCard
              iconSrc="/record_player.jpg"
              description="Music Catalog Browser"
            />
            <ProjectCard
              iconSrc="https://t4.ftcdn.net/jpg/05/89/27/21/360_F_589272121_akMVElogcYg2xhMoL3EQntLNKSQ4X6zC.jpg"
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
