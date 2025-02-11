"use client"

import { ThemeProvider } from "next-themes"
import { AppProgressBar as ProgressBar } from "next-nprogress-bar"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressBar height="4px" color="#8B0000" options={{ showSpinner: false }} shallowRouting />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
        {children}
      </ThemeProvider>
    </>
  )
}
