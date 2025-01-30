"use client"

import { ReactNode } from "react"
import { Tooltip, PlacesType } from "react-tooltip"

export default function MyTooltip({
  anchorSelect,
  place = "top",
  children,
}: {
  anchorSelect: string
  place: PlacesType
  children: ReactNode
}) {
  return (
    <Tooltip
      anchorSelect={anchorSelect}
      place={place}
      style={{ backgroundColor: "rgba(var(--foreground))", color: "rgba(var(--background))", fontSize: "1rem", paddingBlock: "0.5rem"}}
    >
      {children}
    </Tooltip>
  )
}
