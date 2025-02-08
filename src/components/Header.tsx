import React from "react"
import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import { IoMenu } from "react-icons/io5"
import { CiGlobe } from "react-icons/ci"
import Time from "@/components/Time"

export default function Header({ classes }: { classes: string }) {
  return (
    <header className={`${classes} sticky top-0 z-10 bg-background max-h-[65px]`}>
      <div className="flex justify-between items-center text-2xl py-4">
        <div className="flex gap-4 items-center justify-center">
          {/* Site logo */}
          <Link
            href="/"
            className="hover:text-foreground/60 transition duration-300 overflow-visible"
          >
            <span className="italic pr-2">QF</span>
          </Link>
          {/* Locale + local time */}
          <span className="flex flex-col gap-[3px] justify-center px-3 pt-1">
            <div className="flex gap-1">
              <p className="text-sm leading-none text-nowrap font-inter">Valletta, Malta</p>
              {/* Ping animation */}
              <span className="relative flex size-[8px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-[8px] rounded-full bg-green-500"></span>
              </span>
            </div>

            <div className="flex items-center gap-[4px]">
              <CiGlobe className="size-[12px] fill-gray" />
              <Time classes="text-xs leading-none text-gray font-inter" />
            </div>
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
