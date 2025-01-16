"use client"

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  // Update the <meta name="theme-color"> dynamically
  useEffect(() => {
    if (!mounted) {
      return
    }

    let metaTag = document.querySelector('meta[name="theme-color"]')
    if (!metaTag) {
      // Create a new <meta> tag to hold the theme-color attribute
      metaTag = document.createElement("meta")
      metaTag.setAttribute("name", "theme-color")
    }

    // Set the theme-color attribute based on the resolved theme
    if (resolvedTheme === "dark") {
      metaTag.setAttribute("content", "#000000")
    } else if (resolvedTheme === "light") {
      metaTag.setAttribute("content", "#FFFFFF")
    }

    // Append the <meta> tag to the <head> element
    document.head.appendChild(metaTag)
  }, [resolvedTheme, mounted])

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={18}
        height={18}
        sizes="18x18"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    )
  }

  if (resolvedTheme === "dark") {
    return <FiSun onClick={() => setTheme("light")} className="hover:cursor-pointer" />
  }
  if (resolvedTheme === "light") {
    return <FiMoon onClick={() => setTheme("dark")} className="hover:cursor-pointer" />
  }
}
