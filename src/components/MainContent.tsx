"use client"

// This component serves to wrap the main content of every page in an animatable Motion component.
// By default these animations only ran on page reload. To ensure these animations also run when navigating
// between pages, AnimatePresence is also used, and a "key" prop is passed to the Motion component.
import { motion, AnimatePresence } from "motion/react"
import { usePathname } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"

export default function Main({ className, children }: { className: string; children: ReactNode }) {
  const pathname = usePathname() // Get current route
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(false) // Reset when navigating to a new page
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      {!isLoading && (
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={className}
        >
          {children}
        </motion.main>
      )}
    </AnimatePresence>
  )
}
