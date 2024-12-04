import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Header from "./components/Header"
import About from "./about/page"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Quentin Falzon",
  description: "Welcome to the web development portfolio of Quentin Falzon",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-8`}
      >
        <Header />
        {/* <About /> */}
        {children}
        <footer></footer>
      </body>
    </html>
  )
}
