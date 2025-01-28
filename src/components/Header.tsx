import React from "react"
import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import { IoMenu } from "react-icons/io5"

export default function Header({ classes }: { classes: string }) {
  return (
    <header className={`${classes} sticky top-0 z-10 bg-background`}>
      <div className="flex justify-between items-center text-2xl py-4">
        <Link href="/" className="hover:text-foreground/60 transition duration-300">
          <em>Quentin Falzon</em>
        </Link>
        <div className="flex gap-x-5 items-center">
          <Link
            href="/projects"
            className="hidden sm:inline hover:text-foreground/60 transition duration-300"
          >
            <em>Projects</em>
          </Link>
          <Link
            href="/about"
            className="hidden sm:inline hover:text-foreground/60 transition duration-300"
          >
            <em>About</em>
          </Link>
          <Link
            href="/contact"
            className="hidden sm:inline hover:text-foreground/60 transition duration-300"
          >
            <em>Contact</em>
          </Link>
          <ThemeSwitch />
          <IoMenu className="inline sm:hidden" />
        </div>
      </div>
    </header>
  )
}
