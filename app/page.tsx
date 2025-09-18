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
      <p className="absolute p-2 bottom-0 left-0 text-gray-tertiary capitalize text-xs">© 2025 alexander fogelmark</p>
      <div className="relative grid min-h-screen auto-rows-auto grid-cols-12">
        <HeroHeading />
        <HeroNav />
        <IconSocialsSidebar className="absolute max-sm:bottom-10 md:items-end right-0 max-sm:w-full flex md:h-full md:flex-col justify-center gap-4 p-4" />
      </div>
    </div>
  )
}
