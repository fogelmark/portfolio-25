"use client"

import { cn } from "@/lib/utils"
import { motion, useInView } from "motion/react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import React, { useRef } from "react"
import { animate } from "motion"

const navItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "design library", href: "/design-library" },
  { name: "projects", href: "/projects" },
]

export default function Header() {
  const pathname = usePathname()
  const ref = useRef(null)
  const isInView = useInView(ref)

  const fadeIn = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: 1, duration: 1.2, ease: [0, 0, 0.2, 1] },
    },
  }

  return (
    <div
      ref={ref}
      className={cn("fixed top-0 z-50 w-full px-6 py-4 mix-blend-difference", {
        hidden: pathname === "/",
      })}
    >
      <nav className="col-span-12 flex items-center justify-center self-center uppercase">
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
                animate={isInView ? "animate" : "initial"}
                variants={fadeIn}
              >
                <Link href={item.href}>{item.name}</Link>
              </motion.li>
            </div>
          ))}
        </ul>
      </nav>
    </div>
  )
}
