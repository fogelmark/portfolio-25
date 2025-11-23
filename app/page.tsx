"use client"

import { useEffect } from "react"
import HeroHeading from "./components/hero-heading"
import HeroNav from "./components/hero-nav"
import IconSocialsSidebar from "./components/icon-socials-sidebar"
import Lenis from "lenis"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)

      requestAnimationFrame(raf)
    }

    window.scrollTo(0, 0)

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="bg-gray-background relative min-h-screen">
      <p className="text-gray-tertiary absolute bottom-0 left-0 max-sm:w-full p-2 text-center text-xs capitalize">
        © 2025 alexander fogelmark
      </p>
      <div className="relative grid min-h-screen auto-cols-auto md:auto-rows-auto md:grid-cols-12">
        <HeroHeading />
        <HeroNav />
        <IconSocialsSidebar className="right-0 flex max-sm:w-full justify-center gap-4 self-start p-4 max-sm:bottom-10 md:absolute md:h-full md:flex-col md:items-end" />
      </div>
    </div>
  )
}
