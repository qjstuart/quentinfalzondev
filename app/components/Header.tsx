import React from "react"
import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center text-lg py-4">
        <Link href="/">
          <em>Quentin Falzon</em>
        </Link>
        <div className="flex gap-x-5 items-center">
          <em>
            <Link href="/projects">Projects</Link>
          </em>
          <em>
            <Link href="/about">About</Link>
          </em>
          <em>
            <Link href="/contact">Contact</Link>
          </em>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}
