"use client"

import React, { useEffect } from 'react'
import Projects from '../components/projects'
import Lenis from 'lenis'

export default function Page() {

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
    <div className='bg-gray-background min-h-screen overflow-x-hidden'>
      <Projects />
    </div>
  )
}
