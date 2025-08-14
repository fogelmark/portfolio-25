"use client"

import { motion } from "motion/react"
import React, { useState } from "react"
import leon from "@/public/images/leon-display-a.png"
import { cn } from "@/lib/utils"
import Image from "next/image"
import counter_a_left from "@/public/images/counter-app-a-left.png"
import counter_b_portrait from "@/public/images/counter-app-b-portrait.png"
import counter_c_portrait from "@/public/images/counter-app-c-portrait.png"

export default function Projects() {
  const [toggle, setToggle] = useState(false)

  function handleClick() {
    setToggle((prev) => !prev)
    console.log(toggle)
  }

  return (
    <div className="grid min-h-screen auto-rows-min grid-cols-12 py-10 gap-6 px-6">
      <div
        className={cn(
          "text-gray-secondary col-span-12 flex items-center justify-between text-xs uppercase",
          {
            hidden: toggle,
          },
        )}
      >
        <h3>project</h3>
        <h3>stack</h3>
      </div>
      <ul
        className={cn("col-span-12", {
          hidden: toggle,
        })}
      >
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
            <h3 className="text-3xl">{name}</h3>
            <p className="text-xs uppercase">{stack}</p>
          </motion.li>
        ))}
      </ul>

      {toggle && (
        <div
          className={cn(
            "col-span-12 grid w-full grid-cols-[0.5fr_1fr] gap-0",
            "grid-rows-[minmax(596px,_1fr)]",
          )}
        >
          <div className="flex w-2/3 max-w-[300px] flex-col gap-12">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl">LÉON</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eu erat quis purus laoreet consectetur sit amet eget mauris.
                Donec non ultricies leo.
              </p>
            </div>

            <div className="grid grid-cols-2 grid-rows-1 text-xs uppercase">
              <div className="text-gray-secondary">
                <p>type</p>
                <p>role</p>
                <p>date</p>
              </div>
              <div>
                <p>artist website</p>
                <p>design & frontend</p>
                <p>2025</p>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 text-xs uppercase">
              <div className="text-gray-secondary">
                <p>tools</p>
              </div>
              <div>
                <p>next</p>
                <p>react</p>
                <p>motion</p>
                <p>typescript</p>
                <p>tailwind</p>
                <p>css</p>
                <p>figma</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <button className="text-gray-background cursor-pointer bg-white py-3 uppercase">
                <a href="/">visit website</a>
              </button>
              <button className="text-gray-background cursor-pointer bg-white py-3 uppercase">
                <a href="/">source code</a>
              </button>
            </div>
            <div className="flex items-center justify-between uppercase">
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m14 8-4 4 4 4"
                  />
                </svg>
                <p className="text-xs">previous</p>
              </div>
              <div className="flex items-center">
                <p className="text-xs">next</p>
                <svg
                  className="h-6 w-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m10 16 4-4-4-4"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* COLLAGE FOR DESKTOP IMAGES */}
          {/* <div className="grid auto-cols-auto auto-rows-min gap-y-[3px] gap-x-1.5"> */}
          <div className="grid auto-cols-auto auto-rows-min gap-x-[3px] gap-y-[2px]">
            <div className="relative col-span-2 justify-self-center h-[385px] w-[733px]">
              <Image
                loading="lazy"
                src={leon}
                fill
                className="object-contain"
                alt="image"
              />
            </div>
            <div className="relative h-[calc(382px/2)] w-[calc(730px/2)] justify-self-end">
              <Image
                loading="lazy"
                src={leon}
                fill
                className="object-contain"
                alt="asd"
              />
            </div>
            <div className="relative h-[calc(382px/2)] w-[calc(730px/2)] justify-self-start">
              <Image
                loading="lazy"
                src={leon}
                fill
                className="object-contain"
                alt="asd"
              />
            </div>
          </div>

          {/* COLLAGE FOR MOBILE IMAGES */}
          {/* <div className="grid items-center grid-cols-3">
            <div className=" h-[500px] relative">
              <Image
                loading="lazy"
                src={counter_a_left}
                fill
                className="object-contain"
                alt="image"
              />
            </div>
            <div className="h-[500px] relative">
              <Image
                loading="lazy"
                src={counter_b_portrait}
                fill
                className="object-contain"
                alt="image"
              />
            </div>
            <div className="h-[500px] relative">
              <Image
                loading="lazy"
                src={counter_c_portrait}
                fill
                className="object-contain"
                alt="image"
              />
            </div>
          </div> */}
        </div>
      )}
    </div>
  )
}

const projects = [
  {
    name: "LÉON",
    stack: "frontend",
    type: "artist website",
    role: "design & frontend",
    date: "2025",
    tools: [
      "next",
      "react",
      "motion",
      "typescript",
      "tailwind",
      "css",
      "figma",
    ],
    platform: "website",
  },
  {
    name: "Punch Publishing",
    stack: "frontend",
    type: "publishing platform",
    role: "frontend developer",
    date: "2024",
    tools: ["next", "react", "typescript", "tailwind", "css"],
    platform: "website",
  },
  {
    name: "Krenko Helper",
    stack: "frontend",
    type: "gaming utility",
    role: "design & frontend",
    date: "2023",
    tools: ["react", "typescript", "tailwind", "css"],
    platform: "mobile",
  },
  {
    name: "Magic: The Gathering Mobile App",
    stack: "frontend",
    type: "mobile app",
    role: "frontend developer",
    date: "2022",
    tools: ["react-native", "typescript", "expo", "css"],
    platform: "mobile",
  },
  {
    name: "Östermalm Måleriservice",
    stack: "Web Design",
    type: "company website",
    role: "design & frontend",
    date: "2021",
    tools: ["next", "react", "typescript", "tailwind", "css", "figma"],
    platform: "website",
  },
]
