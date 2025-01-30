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
      className="tooltip"
      anchorSelect={anchorSelect}
      place={place}
      style={{
        backgroundColor: "rgba(var(--foreground))",
        color: "rgba(var(--background))",
        fontSize: "0.8rem",
        paddingBlock: "0.5rem",
        paddingInline: "0.8rem",
        lineHeight: 1.3,
        textAlign: "center",
      }}
    >
      {children}
    </Tooltip>
  )
}
