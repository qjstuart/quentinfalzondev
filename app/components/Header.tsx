import React from "react"
import { oswald } from '@/app/fonts'

export default function Header() {
  return (
    <header>
      <div className={`flex justify-between items-center text-lg py-3`}>
        <p><em>logo placeholder</em></p>
        <div className="flex gap-x-4">
          <p>Projects</p>
          <p>About</p>
          <p>Contact</p>
          <p><em>theme</em></p>
        </div>
      </div>
    </header>
  )
}
