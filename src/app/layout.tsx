import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { oswald, ptSans } from "../fonts"
import { Providers } from "../providers"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${ptSans.variable} antialiased px-6 min-h-[100vh] grid grid-rows-[auto_1fr_auto]`}
      >
        <Providers>
          <Header />
          <main className="flex flex-col py-12">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
