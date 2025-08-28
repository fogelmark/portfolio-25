import { noto_serif_display } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import React from "react"

const headings = ["alex fogelmark", "frontend developer", "based in stockholm"]

export default function HeroHeading() {
  const slideUp = {
    initial: {
      y: "100%",
      rotate: 3.5,
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.1 * i,
        ease: [0, 0, 0.2, 1],
      },
    }),
  }

  return (
    <div
      className={cn(
        "md:col-span-8 md:col-start-3 col-span-12 px-2 self-end text-center text-3xl md:text-6xl uppercase",
        noto_serif_display.className,
      )}
    >
      {headings.map((heading, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            className={cn(
              "will-change-transform",
              i === 1 ? "font-bold" : "font-medium",
            )}
            initial="initial"
            animate="animate"
            custom={i}
            variants={slideUp}
          >
            {heading}
          </motion.div>
        </div>
      ))}
    </div>
  )
}
