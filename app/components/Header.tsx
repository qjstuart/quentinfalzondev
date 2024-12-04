import React from "react"

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center text-lg py-3">
        <em>logo placeholder</em>
        <div className="flex gap-x-4">
          <p>Projects</p>
          <p>About</p>
          <p>Contact</p>
          <em>theme</em>
        </div>
      </div>
    </header>
  )
}
