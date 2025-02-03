import { Oswald, PT_Sans, Inter } from "next/font/google"

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-oswald",
})

export const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-pt-sans",
})

export const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
})
