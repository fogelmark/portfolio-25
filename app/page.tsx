"use client"

import { useEffect, useRef } from "react"
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
    <div className="bg-gray-background min-h-screen">
      <div className="relative grid min-h-screen auto-rows-auto grid-cols-12">
        <HeroHeading />
        <HeroNav />
        <IconSocialsSidebar className="absolute right-0 flex h-full flex-col justify-center gap-4 p-4" />
      </div>
    </div>
  )
}
