import React from "react"
import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import { IoMenu } from "react-icons/io5"
import Time from "@/components/Time"

export default function Header({ classes }: { classes: string }) {
  return (
    <header className={`${classes} sticky top-0 z-10 bg-background`}>
      <div className="flex justify-between items-center text-2xl py-4">
        <div className="flex gap-4 items-center justify-center">
          {/* Site logo */}
          <Link href="/" className="hover:text-foreground/60 transition duration-300">
            <span className="italic">QF</span>
          </Link>
          {/* Locale + local time */}
          <span className="flex flex-col gap-1 justify-center px-3">
            <div className="flex gap-1">
              <p className="text-sm leading-none text-nowrap">Valletta, Malta</p>
              {/* Ping animation */}
              <span className="relative flex size-[8px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-[8px] rounded-full bg-green-500"></span>
              </span>
            </div>

            <Time classes="text-xs leading-none font-inter text-gray" />
          </span>
        </div>

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
