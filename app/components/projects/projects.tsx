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
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null)

  function handleClick(project: (typeof projects)[0]) {
    setSelectedProject(project)
  }

  console.log(selectedProject)

  return (
    <div className="grid min-h-screen auto-rows-min grid-cols-12 gap-6 px-6 py-10">
      <div
        className={cn(
          "text-gray-secondary col-span-12 flex items-center justify-between text-xs uppercase",
          {
            hidden: selectedProject !== null,
          },
        )}
      >
        <h3>project</h3>
        <h3>stack</h3>
      </div>
      <ul
        className={cn("col-span-12", {
          hidden: selectedProject !== null,
        })}
      >
        {projects.map((project) => (
          <motion.li
            whileHover={{ paddingLeft: 8, paddingRight: 8 }}
            transition={{ type: "tween", duration: 0.2 }}
            key={project.name}
            onClick={() => handleClick(project)}
            className={cn(
              "text-gray-tertiary border-b-gray-tertiary/50 relative flex cursor-pointer items-end justify-between border-b py-2 hover:text-white",
              {},
            )}
          >
            <h3 className="text-3xl">{project.name}</h3>
            <p className="text-xs uppercase">{project.stack}</p>
          </motion.li>
        ))}
      </ul>

      {selectedProject && (
        <div
          className={cn(
            "col-span-12 grid w-full grid-cols-[0.5fr_1fr] gap-0",
            "grid-rows-[minmax(596px,_1fr)]",
          )}
        >
          <div className="flex w-2/3 max-w-[300px] flex-col gap-12">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl">{selectedProject.name}</h3>
              <p className="text-sm">{selectedProject.description}</p>
            </div>

            <div className="grid grid-cols-2 grid-rows-1 text-xs uppercase">
              <div className="text-gray-secondary">
                <p>type</p>
                <p>role</p>
                <p>date</p>
              </div>
              <div>
                <p>{selectedProject.type}</p>
                <p>{selectedProject.role}</p>
                <p>{selectedProject.date}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 text-xs uppercase">
              <div className="text-gray-secondary">
                <p>tools</p>
              </div>
              <div>
                {selectedProject.tools.map((tool) => (
                  <p key={tool}>{tool}</p>
                ))}
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
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setSelectedProject(null)}
              >
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
                <p className="text-xs">back</p>
              </div>
            </div>
          </div>

          {selectedProject.platform === "website" && (
            <div className="grid auto-cols-auto h-full auto-rows-min gap-x-[3px] gap-y-[2px]">
              {selectedProject.images.map((img, idx) => {
                const imageClassnames = [
                  idx === 0
                    ? "relative col-span-2 h-[385px] w-[733px] justify-self-center"
                    : idx === 1
                    ? "relative h-[calc(382px/2)] w-[calc(730px/2)] justify-self-end"
                    : "relative h-[calc(382px/2)] w-[calc(730px/2)] justify-self-start",
                ].join(" ")
                return (
                  <div className={imageClassnames} key={idx}>
                    <Image
                      loading="lazy"
                      placeholder="blur"
                      src={img}
                      fill
                      className="object-contain"
                      alt="image"
                    />
                  </div>
                )
              })}
            </div>
          )}
          {selectedProject.platform === "mobile" && (
            <div className="grid grid-cols-3 items-center">
              {selectedProject.images.map((img, idx) => (
              <div className="relative h-[500px]" key={idx}>
                <Image
                loading="lazy"
                src={img}
                fill
                className="object-contain"
                alt={`image-${idx}`}
                />
              </div>
              ))}
            </div>
            )}
            {/* COLLAGE FOR MOBILE IMAGES */}
        </div>
      )}
    </div>
  )
}

const projects = [
  {
    name: "LÉON",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu erat quis purus laoreet consectetur sit amet eget mauris. Donec non ultricies leo.",
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
    images: [leon, leon, leon],
  },
  {
    name: "Magic: The Gathering Mobile App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu erat quis purus laoreet consectetur sit amet eget mauris. Donec non ultricies leo.",
    stack: "frontend",
    type: "mobile app",
    role: "frontend developer",
    date: "2022",
    tools: ["react", "css", "sass", "figma"],
    platform: "mobile",
    images: [counter_a_left, counter_b_portrait, counter_c_portrait],
  },
]
