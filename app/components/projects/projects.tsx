"use client"

import { motion } from "motion/react"
import React, { useState } from "react"
import leon from "@/public/images/leon-page.png"
import { cn } from "@/lib/utils"

export default function Projects() {
  const [toggle, setToggle] = useState(false)

  function handleClick() {
    setToggle((prev) => !prev)
    console.log(toggle)
  }

  return (
    <div className="grid min-h-screen auto-rows-min grid-cols-12 gap-6 px-6 py-20">
      <div className="text-gray-secondary col-span-12 flex items-center justify-between text-xs uppercase">
        <h3>project</h3>
        <h3>stack</h3>
      </div>
      <ul className="col-span-12">
        {projects.map(({ name, stack }) => (
          <motion.li
            whileHover={{ paddingLeft: 8, paddingRight: 8 }}
            transition={{ type: "tween", duration: 0.2 }}
            key={name}
            onClick={handleClick}
            className={cn(
              "text-gray-tertiary border-b-gray-tertiary/50 relative flex cursor-pointer items-end justify-between border-b py-2 hover:text-white",
              {},
            )}
          >
            <p className="text-3xl">{name}</p>
            <p className="text-xs uppercase">{stack}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

const projects = [
  { name: "LÉON", stack: "frontend", src: leon },
  { name: "Punch Publishing", stack: "frontend", src: leon },
  { name: "Krenko Helper", stack: "frontend", src: leon },
  { name: "Magic: The Gathering Mobile App", stack: "frontend", src: leon },
  { name: "Östermalm Måleriservice", stack: "Web Design", src: leon },
]
