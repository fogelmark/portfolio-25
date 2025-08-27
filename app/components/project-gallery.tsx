import { motion, useScroll, useTransform } from "motion/react"
import React, { useRef } from "react"
import { useMediaQuery } from "usehooks-ts"
import { StaticImageData } from "next/dist/shared/lib/get-img-props"

interface ProjectGalleryProps {
  images: StaticImageData[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  const isDesktop = useMediaQuery("(min-width: 768px)")

  // const image = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  // const one = useTransform(scrollYProgress, [0, 1], ["60%", "-70%"])
  // const two = useTransform(scrollYProgress, [0, 1], ["90%", "-90%"])

  return (
      <div
        ref={container}
        className="relative grid w-full md:grid-cols-[350px_1fr_1fr_1fr] items-center gap-2 md:gap-4 md:px-10"
      >
          <div className="relative md:h-[20vw] w-[100%] md:col-span-2 md:col-start-3 flex md:-translate-x-30 flex-col">
            <motion.img
              // style={isDesktop ? { y: image } : {}}
              className="md:h-full w-full object-contain"
              src={images[0].src}
              alt="bobba"
            />
          </div>

        <motion.div
          // style={isDesktop ? { y: one } : {}}
          className="relative md:h-[20vw] w-[100%] md:col-span-2 md:col-start-3 md:-translate-x-30 flex h-fit flex-col"
        >
            <motion.img
              // style={isDesktop ? { y: image } : {}}
              className="md:h-full w-full object-contain"
              src={images[1].src}
              alt="bobba"
            />
        </motion.div>

        <motion.div
          // style={isDesktop ? { y: two } : {}}
          className="md:col-span-2 relative md:h-[20vw] w-[100%] md:col-start-3 md:-translate-x-30 flex h-fit flex-col"
        >
            <motion.img
              // style={isDesktop ? { y: image } : {}}
              className="md:h-full w-full object-contain"
              src={images[2].src}
              alt="bobba"
            />
        </motion.div>
      </div>
  )
}
