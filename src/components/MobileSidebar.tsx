"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoMenu } from "react-icons/io5"
import Socials from "@/components/Socials"

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [selectedIndicator, setSelectedIndicator] = useState(pathname)

  function toggleSideBar() {
    setIsOpen(!isOpen)
    console.log("toggling side bar")
  }

  return (
    <>
      <IoMenu className="inline sm:hidden" onClick={toggleSideBar} />
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 h-screen w-screen pointer-events-auto"
              onClick={toggleSideBar}
            ></motion.div>
            <motion.aside
              key={pathname}
              initial={{ x: "100%" }} // Start off-screen
              animate={{ x: 0 }} // Slide in
              exit={{ x: "100%" }} // Slide out
              transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth bounce effect
              className="fixed h-screen w-[60vw] right-0 bottom-0 top-0 shadow-[-10px_0_10px_rgba(0,0,0,0.25)]"
            >
              <nav className="h-full w-full flex flex-col items-center bg-background text-lg font-primary">
                <Link href="/" className="pt-6 w-full text-center" onClick={toggleSideBar}>
                  <span className="text-2xl italic font-secondary">Quentin Falzon</span>
                  <hr className="h-[1px] border-gray/30 w-full mt-6" />
                </Link>

                <Link href="/projects" className="pt-5 w-full text-center" onClick={toggleSideBar}>
                  <div className="flex gap-1 items-center place-content-center">
                    {pathname === "/projects" && (
                      <div className="w-[5px] h-[5px] bg-green-500 rounded-full" />
                    )}
                    <span>Projects</span>
                  </div>

                  <hr className="h-[1px] border-gray/30 w-full mt-6" />
                </Link>

                <Link href="/about" className="pt-5 w-full text-center" onClick={toggleSideBar}>
                  <div className="flex gap-1 items-center place-content-center">
                    {pathname === "/about" && (
                      <div className="w-[5px] h-[5px] bg-green-500 rounded-full" />
                    )}
                    <span>About</span>
                  </div>
                  <hr className="h-[1px] border-gray/30 w-full mt-6" />
                </Link>

                <Link href="/contact" className="pt-5 w-full text-center" onClick={toggleSideBar}>
                  <div className="flex gap-1 items-center place-content-center">
                    {pathname === "/contact" && (
                      <div className="w-[5px] h-[5px] bg-green-500 rounded-full" />
                    )}
                    <span>Contact</span>
                  </div>{" "}
                  <hr className="h-[1px] border-gray/30 w-full mt-6" />
                </Link>

                <div className="pt-5">
                  <Socials />
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
