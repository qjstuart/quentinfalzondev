import { promises as fs } from "fs"
import Link from "next/link"
import Image from "next/image"

export default async function ProjectAboutPage({
  params,
}: {
  params: { projectName: string }
}) {
  const { projectName } = await params // params is a "dynamic API" which is asynchronous, therefore it must be awaited
  const projectsInfoBuffer = await fs.readFile(
    process.cwd() + "/app/projectInfo.json",
    "utf8"
  )
  const projectsInfo = JSON.parse(projectsInfoBuffer)
  const projectInfo = projectsInfo[projectName]

  console.log("projectInfo", projectInfo)
  console.log("projectName", projectName)

  if (!projectInfo) {
    return <h1>Project not found</h1>
  }

  return (
    <div className="text-center">
      <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] relative mx-auto mb-8">
        <Image
          fill
          sizes="(max-width: 640px) 100px, 150px"
          src={projectInfo.imageSrc}
          alt={projectInfo.title}
        />
      </div>
      <h1 className="mb-8">{projectInfo.title}</h1>

      <p>{projectInfo.description}</p>
      <h2>Motivation</h2>
      <p>{projectInfo.motivation}</p>
      <Link href={`/projects/${projectName}`}>
        <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
          Go to Project
        </button>
      </Link>
    </div>
  )
}
