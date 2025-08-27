import React, { useRef } from "react"
import vintage_4 from "@/public/images/william-f-santos-Xpy_asUd_SU-unsplash.jpg"
import { motion, useScroll, useTransform } from "motion/react"
import { noto_serif } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function ParallaxHero() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div
      ref={container}
      className="flex h-[200vh] w-full items-center justify-center bg-[#f0efe9]"
    >
      <div className="relative h-screen w-full overflow-hidden p-10">
        <div className="relative flex size-full flex-col items-center justify-center overflow-hidden">
          <section className="absolute z-10 text-center text-white">
            <h3 className={cn("text-2xl capitalize", noto_serif.className)}>
              a simple trick to
            </h3>
            <h2 className="text-6xl font-medium uppercase">engage the user</h2>
            <h2
              className={cn(
                "text-6xl font-medium uppercase",
                noto_serif.className,
              )}
            >
              with parallax
            </h2>
          </section>
          <motion.img
            style={{ y }}
            className="size-full scale-105 object-cover"
            src={vintage_4.src}
            alt="bobba"
          />
        </div>
      </div>
    </div>
  )
}
