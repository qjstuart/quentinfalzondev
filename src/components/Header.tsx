import React from "react"
import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center text-2xl py-4">
        <Link href="/">
          <em>Quentin Falzon</em>
        </Link>
        <div className="flex gap-x-5 items-center">
          <Link href="/projects" className="hidden sm:inline"><em>Projects</em></Link>
          <Link href="/about" className="hidden sm:inline"><em>About</em></Link>
          <Link href="/contact" className="hidden sm:inline"><em>Contact</em></Link>
          <ThemeSwitch />
          <IoMenu className="inline sm:hidden" />
        </div>
      </div>
    </header>
  )
}
