import { motion } from "motion/react"
import Link from "next/link"
import React from "react"

const navItems = [
  { name: "about", href: "/about" },
  // { name: "contact", href: "/contact" },
  { name: "design library", href: "/design-library" },
  { name: "projects", href: "/projects" },
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
        duration: .8,
        delay: .3 + 0.1 * i,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  }

  return (
    <nav className="col-span-12 flex items-center justify-center self-center uppercase">
      <ul className="text-gray-secondary flex gap-2.5 text-xs font-medium">
        {navItems.map((item, i) => (
          <div key={i} className="overflow-hidden">
            <motion.li
              key={item.name}
              className="will-change-transform"
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
