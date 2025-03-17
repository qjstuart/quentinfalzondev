import { ReactNode } from "react"

export type Project = {
  id: string
  title: string
  description: string
  about: ReactNode
  link: string
}
