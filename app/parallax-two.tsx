import { motion, useScroll, useTransform } from "motion/react"
import hallway from "@/public/images/hallway.avif"
import React, { useRef } from "react"
import { cn } from "@/lib/utils"
import { playfair } from "@/lib/fonts"

export default function ParallaxTwo() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  const image = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div
      ref={container}
      className="relative grid w-full -translate-y-[300px] grid-cols-4 items-center gap-4 px-10"
    >
      <div className="col-start-2 flex h-fit flex-col border">
        <div className="h-[500px] overflow-hidden">
          <motion.img
            style={{ y: image }}
            className="size-full scale-125 object-cover"
            src={hallway.src}
            alt="bobba"
          />
        </div>
        <p className={cn("", playfair.className)}>Bobba Fett</p>
        <p className="text-[13px] font-semibold">Bounty Hunter</p>
      </div>
    </div>
  )
}
