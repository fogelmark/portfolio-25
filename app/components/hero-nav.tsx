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
  const slideUp = {
    initial: {
      y: "100%",
      rotate: 0,
      opacity: 0,
      willChange: "transform, opacity",
    },
    animate: (i: number) => ({
      y: 0,
      rotate: 0,
      opacity: 1,
      willChange: "transform, opacity",
      transition: {
        duration: 0.8,
        delay: 0.3 + 0.1 * i,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  }

  return (
    <nav className="md:col-span-4 col-span-12 md:col-start-5 flex items-center justify-center self-center uppercase">
      <ul className="group text-gray-secondary flex text-xs font-medium">
        {navItems.map((item, i) => (
          <div key={i} className="overflow-hidden cursor-pointer">
            <motion.li
              key={item.name}
              className={cn(
                "transition-colors duration-300 ease-out px-2 will-change-transform",
                "group-hover:text-gray-tertiary",
                "hover:text-gray-secondary",
              )}
              initial="initial"
              animate="animate"
              custom={i}
              variants={slideUp}
            >
              <Link href={item.href}>{item.name}</Link>
            </motion.li>
          </div>
        ))}
      </ul>
    </nav>
  )
}
