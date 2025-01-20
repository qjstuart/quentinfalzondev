"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function AppleMusicPlayer({ appleMusicId }: { appleMusicId: string }) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // We need to wait until it is safe to show the UI.
  // Otherwise we risk hydration mismatch errors.
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Render placeholder for Apple Music player to prevent Cumulative Layout Shift (CLS)
    return <div className="relative h-[450px] w-full rounded-[15px]"></div>
  }

  return (
    <div className="rounded-[15px] boxshadow-studydesk">
      {/* Preload 2 <iframes>, 1 light & 1 dark */}
      <iframe
        className={`rounded-[15px] ${theme === "light" ? "hidden" : ""}`}
        width="100%"
        height="450"
        src={`https://embed.music.apple.com/us/album/${appleMusicId}?theme=dark`}
        allow="encrypted-media; fullscreen; clipboard-write;"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        title="Media player"
      ></iframe>
      <iframe
        className={`rounded-[15px] ${theme === "dark" ? "hidden" : ""}`}
        width="100%"
        height="450"
        src={`https://embed.music.apple.com/us/album/${appleMusicId}?theme=light`}
        allow="encrypted-media; fullscreen; clipboard-write;"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        title="Media player"
      ></iframe>
    </div>
  )
}
