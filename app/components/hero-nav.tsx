import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import Link from "next/link"
import React from "react"

const navItems = [
  { name: "projects", href: "/projects" },
  { name: "design library", href: "/design-library" },
  { name: "contact", href: "mailto:alexander.fogelmark@gmail.com" },
]

export default function HeroNav() {
  // const slideUp = {
  //   initial: {
  //     x: "-100%",
  //     filter: "blur(10px)",
  //     opacity: 0,
  //     willChange: "transform, opacity",
  //   },
  //   animate: (i: number) => ({
  //     x: 0,
  //     filter: "blur(0px)",
  //     opacity: 1,
  //     willChange: "transform, opacity",
  //     transition: {
  //       duration: 0.8,
  //       delay: 0.3 + 0.1 * i,
  //       ease: [0.4, 0, 0.2, 1],
  //     },
  //   }),
  // }

  const fadeIn = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: 1, duration: 1.2, ease: [0, 0, 0.2, 1] },
    },
  }

  return (
    <nav className="col-span-12 flex items-center justify-center self-center uppercase md:col-span-4 md:col-start-5">
      <ul className="group text-gray-secondary flex text-xs font-medium">
        {navItems.map((item, i) => (
          <div key={i} className="cursor-pointer overflow-hidden">
            <motion.li
              key={item.name}
              className={cn(
                "px-2 transition-colors duration-300 ease-out will-change-transform",
                "group-hover:text-gray-tertiary",
                "hover:text-gray-secondary",
              )}
              initial="initial"
              animate="animate"
              custom={i}
              variants={fadeIn}
            >
              <Link href={item.href}>{item.name}</Link>
            </motion.li>
          </div>
        ))}
      </ul>
    </nav>
  )
}
