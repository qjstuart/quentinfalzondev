import Link from "next/link"

export default function Home() {
  return (
    <main className={`container p-8 mx-auto`}>
      <p>Hi there, my name is</p>
      <h1 className={`font-semibold`}>Quentin Falzon.</h1>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/projects">Projects</Link>
      </div>
    </main>
  )
}
