"use client"

import { motion, useInView } from "motion/react"
import React, { useEffect, useRef, useState } from "react"
import leon from "@/public/images/leon-display-a.png"
import { cn } from "@/lib/utils"
import Image from "next/image"
import counter_a_left from "@/public/images/counter-app-a-left.png"
import counter_b_portrait from "@/public/images/counter-app-b-portrait.png"
import counter_c_portrait from "@/public/images/counter-app-c-portrait.png"
import { Button } from "../button"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null)

  function handleClick(project: (typeof projects)[0]) {
    setSelectedProject(project)
  }

  const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.15,
        duration: 1.2,
        ease: [.4, 0, 0.2, 1],
      },
    },
  }

  const slideUp = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.1 * i,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  }

  const staggerOne = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.05 * i,
        ease: [0, 0, 0.2, 1],
      },
    }),
  }

  const staggerTwo = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.15 + 0.05 * i,
        ease: [0, 0, 0.2, 1],
      },
    }),
  }

  const staggerThree = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0, 0.2, 1],
      },
    }),
  }

  const staggerFour = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.25,
        ease: [0, 0, 0.2, 1],
      },
    }),
  }

  const staggerFive = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0, 0.2, 1],
      },
    }),
  }

  const staggerSix = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.35 + 0.05 * i,
        ease: [0, 0, 0.2, 1],
      },
    }),
  }

  const staggerSixNoArray = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.35,
        ease: [0, 0, 0.2, 1],
      },
    }),
  }

    const staggerSeven = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.35,
        ease: [0, 0, 0.2, 1],
      },
    },
  }
    const staggerEight = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0, 0, 0.2, 1],
      },
    },
  }

  return (
    <div
      id="projects"
      className={cn(
        "grid min-h-screen auto-rows-min grid-cols-12 gap-6 px-6 py-10", {
        }
      )}
    >
      <div
        ref={ref}
        className={cn(
          "text-gray-secondary col-span-12 flex items-center justify-between overflow-hidden text-xs uppercase",
          {
            hidden: selectedProject !== null,
          },
        )}
      >
        <motion.h3
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={slideUp}
          className="will-change-transform"
        >
          project
        </motion.h3>
        <motion.h3
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={slideUp}
          className="will-change-transform"
        >
          stack
        </motion.h3>
      </div>
      <ul
        ref={ref}
        className={cn("col-span-12", {
          hidden: selectedProject !== null,
        })}
      >
        {projects.map((project, i) => (
          <div key={i} className="overflow-hidden">
            <motion.li
              whileHover={{ paddingLeft: 8, paddingRight: 8 }}
              transition={{ type: "tween", duration: 0.2 }}
              onClick={() => handleClick(project)}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              custom={i}
              variants={slideUp}
              className={cn(
                "text-gray-tertiary border-b-gray-tertiary/50 relative flex cursor-pointer items-end justify-between border-b py-2 will-change-transform hover:text-white",
                "will-change-transform",
              )}
            >
              <h3 className="text-3xl"> {project.name} </h3>
              <p className="text-xs uppercase">{project.stack}</p>
            </motion.li>
          </div>
        ))}
      </ul>

      {/* PROJECT VIEW */}
      {selectedProject && (
        <div
          className={cn(
            "col-span-12 grid w-full grid-cols-[0.5fr_1fr] grid-rows-[minmax(596px,_1fr)] gap-0",
          )}
        >
          <div className="flex w-2/3 max-w-[300px] flex-col gap-12">
            <div className="flex flex-col gap-2">
              <div className="overflow-hidden">
                <motion.h3
                  initial="initial"
                  animate="animate"
                  // STAGGER 1
                  variants={staggerOne}
                  className="text-3xl will-change-transform"
                >
                  {selectedProject.name}
                </motion.h3>
              </div>
              <div>
                {selectedProject.description.map((line, i) => (
                  <div className="overflow-hidden" key={i}>
                    <motion.p
                      className="text-sm leading-[17px] will-change-transform"
                      initial="initial"
                      animate="animate"
                      custom={i}
                      // STAGGER 2
                      variants={staggerTwo}
                    >
                      {line}
                    </motion.p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-xs uppercase">
              <div className="overflow-hidden">
                <motion.div
                  initial="initial"
                  animate="animate"
                  // STAGGER 3
                  variants={staggerThree}
                  className="grid grid-cols-2 will-change-transform"
                >
                  <p className="text-gray-secondary">type</p>
                  <p>{selectedProject.type}</p>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial="initial"
                  animate="animate"
                  // STAGGER 4
                  variants={staggerFour}
                  className="grid grid-cols-2 will-change-transform"
                >
                  <p className="text-gray-secondary">role</p>
                  <p>{selectedProject.role}</p>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial="initial"
                  animate="animate"
                  // STAGGER 5
                  variants={staggerFive}
                  className="grid grid-cols-2 will-change-transform"
                >
                  <p className="text-gray-secondary">date</p>
                  <p>{selectedProject.date}</p>
                </motion.div>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 text-xs uppercase">
              <div className="text-gray-secondary">
                <div className="overflow-hidden">
                  <motion.p
                    initial="initial"
                    animate="animate"
                    // STAGGER 6
                    variants={staggerSixNoArray}
                    className="will-change-transform"
                  >
                    tools
                  </motion.p>
                </div>
              </div>
              <div>
                {selectedProject.tools.map((tool, i) => (
                  <div key={tool} className="overflow-hidden">
                    <motion.p
                      initial="initial"
                      animate="animate"
                      custom={i}
                      // STAGGER 6
                      variants={staggerSix}
                      className="will-change-transform"
                    >
                      {tool}
                    </motion.p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="flex flex-col gap-2 text-xs"
            >
              <Button variants={fadeIn} href="/" children="visit website" />
              <Button variants={fadeIn} href="/" children="source code" />
            </motion.div>

            <div className="flex items-center overflow-hidden uppercase">
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerSeven}
                className="flex pr-3 cursor-pointer items-center"
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

              </motion.div>
            </div>
          </div>

          {selectedProject.platform === "website" && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="grid h-full auto-cols-auto auto-rows-min gap-x-[3px] gap-y-[2px]"
            >
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
            </motion.div>
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
        </div>
      )}
    </div>
  )
}

const projects = [
  {
    name: "LÉON",
    description: [
      "Lorem ipsum dolor sit amet consectetur",
      "adipiscing elit. Fusce eu erat quis",
      "purus laoreet consectetur sit amet",
    ],
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
    description: [
      "Lorem ipsum dolor sit amet consectetur",
      "adipiscing elit. Fusce eu erat quis",
      "purus laoreet consectetur sit amet",
    ],
    stack: "frontend",
    type: "mobile app",
    role: "frontend developer",
    date: "2022",
    tools: ["react", "css", "sass", "figma"],
    platform: "mobile",
    images: [counter_a_left, counter_b_portrait, counter_c_portrait],
  },
  {
    name: "Magic: The Gathering Mobile App",
    description: [
      "Lorem ipsum dolor sit amet consectetur",
      "adipiscing elit. Fusce eu erat quis",
      "purus laoreet consectetur sit amet",
    ],
    stack: "frontend",
    type: "mobile app",
    role: "frontend developer",
    date: "2022",
    tools: ["react", "css", "sass", "figma"],
    platform: "mobile",
    images: [counter_a_left, counter_b_portrait, counter_c_portrait],
  },
  {
    name: "Magic: The Gathering Mobile App",
    description: [
      "Lorem ipsum dolor sit amet consectetur",
      "adipiscing elit. Fusce eu erat quis",
      "purus laoreet consectetur sit amet",
    ],
    stack: "frontend",
    type: "mobile app",
    role: "frontend developer",
    date: "2022",
    tools: ["react", "css", "sass", "figma"],
    platform: "mobile",
    images: [counter_a_left, counter_b_portrait, counter_c_portrait],
  },
  {
    name: "Magic: The Gathering Mobile App",
    description: [
      "Lorem ipsum dolor sit amet consectetur",
      "adipiscing elit. Fusce eu erat quis",
      "purus laoreet consectetur sit amet",
    ],
    stack: "frontend",
    type: "mobile app",
    role: "frontend developer",
    date: "2022",
    tools: ["react", "css", "sass", "figma"],
    platform: "mobile",
    images: [counter_a_left, counter_b_portrait, counter_c_portrait],
  },
  {
    name: "Magic: The Gathering Mobile App",
    description: [
      "Lorem ipsum dolor sit amet consectetur",
      "adipiscing elit. Fusce eu erat quis",
      "purus laoreet consectetur sit amet",
    ],
    stack: "frontend",
    type: "mobile app",
    role: "frontend developer",
    date: "2022",
    tools: ["react", "css", "sass", "figma"],
    platform: "mobile",
    images: [counter_a_left, counter_b_portrait, counter_c_portrait],
  },
  {
    name: "Magic: The Gathering Mobile App",
    description: [
      "Lorem ipsum dolor sit amet consectetur",
      "adipiscing elit. Fusce eu erat quis",
      "purus laoreet consectetur sit amet",
    ],
    stack: "frontend",
    type: "mobile app",
    role: "frontend developer",
    date: "2022",
    tools: ["react", "css", "sass", "figma"],
    platform: "mobile",
    images: [counter_a_left, counter_b_portrait, counter_c_portrait],
  },
  {
    name: "Magic: The Gathering Mobile App",
    description: [
      "Lorem ipsum dolor sit amet consectetur",
      "adipiscing elit. Fusce eu erat quis",
      "purus laoreet consectetur sit amet",
    ],
    stack: "frontend",
    type: "mobile app",
    role: "frontend developer",
    date: "2022",
    tools: ["react", "css", "sass", "figma"],
    platform: "mobile",
    images: [counter_a_left, counter_b_portrait, counter_c_portrait],
  },
  {
    name: "Magic: The Gathering Mobile App",
    description: [
      "Lorem ipsum dolor sit amet consectetur",
      "adipiscing elit. Fusce eu erat quis",
      "purus laoreet consectetur sit amet",
    ],
    stack: "frontend",
    type: "mobile app",
    role: "frontend developer",
    date: "2022",
    tools: ["react", "css", "sass", "figma"],
    platform: "mobile",
    images: [counter_a_left, counter_b_portrait, counter_c_portrait],
  },
]
