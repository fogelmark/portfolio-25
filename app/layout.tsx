import "./globals.css"
import { satoshi } from "@/lib/fonts"
import type { Metadata } from "next"
import Header from "./components/header"

export const metadata: Metadata = {
  title: "Alex Fogelmark | Frontend Developer",
  description: "Frontend Developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} text-white bg-gray-background font-medium antialiased selection:text-gray-background selection:bg-white`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
