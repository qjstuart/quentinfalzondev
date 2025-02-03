"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Vinyl404Logo from "@/components/Vinyl404Logo"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // We need to wait until it is safe to show the UI.
  // Otherwise we risk hydration mismatch errors.
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    function invertLogoColor() {
      const vinylLogo = document.querySelector(".logo-vinyl")
      if (!vinylLogo) {
        return
      }
      if (theme === "light") {
        vinylLogo.classList.remove("invert")
      }
      if (theme === "dark") {
        vinylLogo.classList.add("invert")
      }
    }

    // Whenever the theme changes, invert the logo color.
    // We do this only once the component has mounted, 
    // otherwise the logo will not be found in the DOM.
    if (mounted) {
      invertLogoColor()
    }
  }, [theme, mounted])

  if (!mounted) {
    // Render placeholder to prevent Cumulative Layout Shift (CLS)
    return <div className="relative size-[230px] w-full rounded-[15px]"></div>
  }

  return (
    <div className="flex flex-col items-center gap-8 max-w-[1024px] mx-auto mt-24 px-8">
      <div className="flex items-center gap-6 relative font-bold">
        <h1 className="text-[200px] sm:text-[300px]">4</h1>

        <Vinyl404Logo classes="logo-vinyl size-[150px] sm:size-[230px]" />

        <h1 className="text-[200px] sm:text-[300px]">4</h1>
      </div>

      <h2 className="text-[40px] mb-14 text-center leading-[3rem]">
        The page you&apos;re looking for does not exist!
      </h2>
    </div>
  )
}
