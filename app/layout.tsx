import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Header from "./components/Header"
import About from "./about/page"
import { oswald, ptSans } from "./fonts"
import { Providers } from "./providers"

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

type HeaderProps = {
  onThemeChange: () => void
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${ptSans.variable} antialiased px-8 min-h-[100vh] grid grid-rows-[auto_1fr_auto]`}
      >
        <Providers>
          <Header />
          <main className="flex flex-col items-center py-12 mx-auto">{children}</main>
          <footer>I am the footer</footer>
        </Providers>
      </body>
    </html>
  )
}
