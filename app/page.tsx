import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1>Homepage</h1>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/projects">Projects</Link>
      </div>
    </main>
  )
}
