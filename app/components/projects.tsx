/* eslint-disable */

"use client"

import { Button } from "./button"
import { cn } from "@/lib/utils"
import { motion, useInView } from "motion/react"
import Image from "next/image"

import React, { useRef, useState } from "react"
import ProjectGallery from "./project-gallery"
import {
  fadeIn,
  slideUp,
  staggerFive,
  staggerFour,
  staggerOne,
  staggerSix,
  staggerSixNoArray,
  staggerThree,
  staggerTwo,
} from "@/lib/animations"
import { projects } from "@/lib/projects"
import { ButtonPill } from "../design-library/buttons/button-pill"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null)

  function handleClick(project: (typeof projects)[0]) {
    setSelectedProject(project)
  }

  return (
    <div
      id="projects"
      className={cn(
        "relative grid min-h-screen auto-rows-min grid-cols-12 place-content-center gap-6 px-6",
      )}
    >
      <div
        className="absolute inset-0 z-[49]"
        onClick={() => setSelectedProject(null)}
      />
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
                "text-gray-tertiary border-b-gray-tertiary/50 relative z-[999] flex cursor-pointer items-center justify-between border-b py-2 will-change-transform hover:text-white md:items-end",
                "will-change-transform",
              )}
            >
              <h3 className="text-base md:text-3xl"> {project.name} </h3>
              <p className="text-xs uppercase">{project.stack}</p>
            </motion.li>
          </div>
        ))}
      </ul>

      {/* PROJECT VIEW */}
      {selectedProject && (
        <div
          className={cn(
            "col-span-12 flex h-full w-full flex-col gap-12 py-18 md:flex-row",
          )}
        >
          <div
            className={cn(
              "z-50 flex min-w-[300px] flex-col justify-center gap-12 md:max-w-[300px]",
              {
                "md:fixed md:top-0 md:bottom-0 md:left-10":
                  selectedProject.platform === "website",
              },
            )}
          >
            <div className="flex flex-col gap-2">
              <div className="overflow-hidden">
                <motion.h3
                  initial="initial"
                  animate="animate"
                  // STAGGER 1
                  variants={staggerOne}
                  className="text-2xl will-change-transform"
                >
                  {selectedProject.name}
                </motion.h3>
              </div>
              <div>
                {selectedProject.description.map((line, i) => (
                  <div className="overflow-hidden" key={i}>
                    <motion.p
                      className="leading-[17px] will-change-transform md:text-sm"
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
            <div className="text-xs uppercase md:max-w-[300px]">
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
            <div className="grid grid-cols-2 grid-rows-1 text-xs uppercase md:max-w-[300px]">
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
              className="flex flex-col gap-2 text-xs md:max-w-[300px]"
            >
              <ButtonPill
                variants={fadeIn}
                href={selectedProject.href}
                children={
                  selectedProject.platform === "mobile"
                    ? "preview app"
                    : "visit website"
                }
              />
              <ButtonPill
                variants={fadeIn}
                href={selectedProject.github}
                children="source code"
              />
            </motion.div>

            <div className="flex items-center overflow-hidden uppercase">
              <motion.div
                initial="initial"
                animate="animate"
                variants={fadeIn}
                className="hover:text-gray-secondary flex cursor-pointer items-center pr-3 transition-colors duration-300 ease-out"
                onClick={() => setSelectedProject(null)}
              >
                <svg
                  className="h-6 w-6"
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
                <p className="text-xs md:text-xs">back</p>
              </motion.div>
            </div>
          </div>

          {selectedProject.platform === "website" && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="relative"
            >
              <ProjectGallery images={selectedProject.images} />
            </motion.div>
          )}

          {selectedProject.platform === "mobile" && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="grid h-full w-full items-center md:grid-cols-3 2xl:max-w-[60%]"
            >
              {selectedProject.images.map((img, idx) => (
                <div className="relative h-[600px]" key={idx}>
                  <Image
                    loading="lazy"
                    src={img}
                    fill
                    className="object-contain"
                    alt={`image-${idx}`}
                  />
                </div>
              ))}
            </motion.div>
          )}
        </div>
      )}
    </div>
  )
}
