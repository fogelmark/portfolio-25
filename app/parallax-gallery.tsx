import { motion, useScroll, useTransform } from "motion/react"
import React, { useRef } from "react"
import { cn } from "@/lib/utils"
import { playfair } from "@/lib/fonts"

import vintage_1 from "@/public/images/mathias-reding-ojnf5WyKyjo-unsplash.jpg"
import vintage_2 from "@/public/images/annie-spratt-aEEERuDKHjk-unsplash.jpg"
import vintage_3 from "@/public/images/mathias-reding-d2l1Y90YSnY-unsplash.jpg"
export default function ParallaxGallery() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  const image = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const one = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"])
  const two = useTransform(scrollYProgress, [0, 1], ["60%", "-60%"])

  return (
    <div
      ref={container}
      className="relative grid w-full md:grid-cols-4 items-center gap-4 px-10"
    >
      <div className="md:col-start-4 flex flex-col">
        <div className="h-[500px] overflow-hidden">
          <motion.img
            style={{ y: image }}
            className="size-full scale-125 object-cover"
            src={vintage_1.src}
            alt="bobba"
          />
        </div>
        <p className={cn("", playfair.className)}>Bobba Fett</p>
        <p className="text-[13px] font-semibold">Bounty Hunter</p>
      </div>

      <motion.div
        style={{ y: one }}
        className="md:col-start-2 flex h-fit -translate-y-44 flex-col"
      >
        <div className="h-[500px] overflow-hidden">
          <motion.img
            style={{ y: image }}
            className="size-full scale-125 object-cover"
            src={vintage_2.src}
            alt="bobba"
          />
        </div>
        <p className={cn("", playfair.className)}>Bobba Fett</p>
        <p className="text-[13px] font-semibold">Bounty Hunter</p>
      </motion.div>

      <motion.div
        style={{ y: two }}
        className="md:col-start-3 md:row-start-3 flex h-fit -translate-y-80 flex-col"
      >
        <div className="h-[500px] overflow-hidden">
          <motion.img
            style={{ y: image }}
            className="size-full scale-125 object-cover"
            src={vintage_3.src}
            alt="bobba"
          />
        </div>
        <p className={cn("", playfair.className)}>Bobba Fett</p>
        <p className="text-[13px] font-semibold">Bounty Hunter</p>
      </motion.div>
    </div>
  )
}
