"use client"

import Link from "next/link"
import Image from "next/image"

import { useTheme } from "next-themes"
import { useState, useEffect, useMemo } from "react"

import { invertLogoColorBasedOnTheme } from "@/app/lib/utils"

export default function Socials() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // We need to wait until it is safe to show the UI.
  // Otherwise we risk hydration mismatch errors.
  useEffect(() => setMounted(true), [])

  // Whenever the theme changes, invert the logo color.
  // We do this only once the component has mounted,
  // otherwise the logo will not be found in the DOM.
  useEffect(() => {
    if (mounted && theme) {
      invertLogoColorBasedOnTheme(".socials-container", theme.toString())
    }
  }, [theme, mounted])

  // Pre-render the images and store them for later use
  const githubImage = useMemo(
    () => (
      <Image
        src="/logo-github.png"
        alt="GitHub"
        fill
        priority
        className="transition-opacity opacity-0 duration-[0.5s]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
    ),
    []
  )
  
  const linkedInImage = useMemo(
    () => (
      <Image
        src="/logo-linkedin.png"
        alt="LinkedIn"
        fill
        priority
        className="transition-opacity opacity-0 duration-[0.5s]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
    ),
    []
  )

  if (!mounted) {
    // Render placeholder to prevent Cumulative Layout Shift (CLS)
    return <div className="relative h-[48px] w-full"></div>
  }

  return (
    // Github & LinkedIn links
    <div className="socials-container flex gap-4 pt-2 invert">
      <Link
        href="https://github.com/qjstuart"
        target="_blank"
        className="relative size-[30px] md:size-[40px]"
      >
        {githubImage}
      </Link>
      <Link
        href="https://www.linkedin.com/in/quentin-falzon-b7b56a19b/"
        target="_blank"
        className="relative size-[30px] md:size-[40px]"
      >
        {linkedInImage}
      </Link>
    </div>
  )
}
