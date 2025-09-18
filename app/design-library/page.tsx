import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import Link from "next/link"
import React from "react"

const navItems = [
  { name: "parallax", href: "/design-library/parallax" },
  { name: "text masque", href: "/design-library/text-masque" },
]

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <nav className="col-span-12 flex items-center justify-center self-center uppercase md:col-span-4 md:col-start-5">
        <ul className="group text-gray-secondary flex text-xs font-medium">
          {navItems.map((item, i) => (
            <div key={i} className="cursor-pointer overflow-hidden">
              <li
                key={item.name}
                className={cn(
                  "px-2 transition-colors duration-300 ease-out will-change-transform",
                  "group-hover:text-gray-tertiary",
                  "hover:text-gray-secondary",
                )}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            </div>
          ))}
        </ul>
      </nav>
    </div>
  )
}
