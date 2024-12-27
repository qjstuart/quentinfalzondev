import React from "react"
import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"

export default function Header() {
  return (
    <header>
      <div className={`flex justify-between items-center text-lg py-3`}>
        <p><Link href="/"><em>Quentin Falzon</em></Link></p>
        <div className="flex gap-x-4 items-center">
          <p><Link href="/projects">Projects</Link></p>
          <p><Link href="/about">About</Link></p>
          <p><Link href="/contact">Contact</Link></p>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}
