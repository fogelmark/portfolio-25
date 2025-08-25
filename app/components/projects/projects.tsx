"use client"

import { Button } from "../button"
import { cn } from "@/lib/utils"
import { motion, useInView } from "motion/react"
import counter_a_left from "@/public/images/counter-app-a-left.png"
import counter_b_portrait from "@/public/images/counter-app-b-portrait.png"
import counter_c_portrait from "@/public/images/counter-app-c-portrait.png"
import Image from "next/image"
import leon_a from "@/public/images/leon-display-a.png"
import leon_b from "@/public/images/leon-display-b.png"
import leon_c from "@/public/images/leon-display-c.png"
import punch_a from "@/public/images/punch-display-a.png"
import punch_b from "@/public/images/punch-display-b.png"
import punch_c from "@/public/images/punch-display-c.png"
import krenko_a from "@/public/images/krenko-a-left.png"
import krenko_b from "@/public/images/krenko-b-portrait.png"
import krenko_c from "@/public/images/krenko-c-portrait.png"
import movietrends_a from "@/public/images/movietrend-display-a.png"
import movietrends_b from "@/public/images/movietrend-display-b.png"
import movietrends_c from "@/public/images/movietrend-display-c.png"
import medialog_a from "@/public/images/medialog-display-a.png"
import medialog_b from "@/public/images/medialog-display-b.png"
import medialog_c from "@/public/images/medialog-display-c.png"
import blog_a from "@/public/images/blog-display-a.png"
import blog_b from "@/public/images/blog-display-b.png"
import blog_c from "@/public/images/blog-display-c.png"
import airbnb_a from "@/public/images/airbnb-display-a.png"
import airbnb_b from "@/public/images/airbnb-display-b.png"
import airbnb_c from "@/public/images/airbnb-display-c.png"
import ostermalm_a from "@/public/images/ostermalm-display-a.png"
import ostermalm_b from "@/public/images/ostermalm-display-b.png"
import ostermalm_c from "@/public/images/ostermalm-display-c.png"

import React, { useRef, useState } from "react"

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
        delay: 1,
        duration: 1.2,
        ease: [0, 0, 0.2, 1],
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
      y: "100%",
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

  return (
    <div
      id="projects"
      className={cn(
        "grid min-h-screen auto-rows-min grid-cols-12 place-content-center gap-6 px-6 py-10",
      )}
    >
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
            "col-span-12 grid h-full w-full grid-cols-[0.5fr_1fr] grid-rows-[minmax(596px,_1fr)] gap-0",
          )}
        >
          <div className="flex w-2/3 max-w-[300px] flex-col justify-center gap-12">
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
              <Button variants={fadeIn} href={selectedProject.href} children={selectedProject.platform === "mobile" ? "preview app" : "visit website"} />
              <Button variants={fadeIn} href={selectedProject.github} children="source code" />
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
                <p className="text-xs">back</p>
              </motion.div>
            </div>
          </div>

          {selectedProject.platform === "website" && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="grid h-full auto-cols-auto auto-rows-min place-content-center gap-1"
            >
              {selectedProject.images.map((img, idx) => {
                const imageClassnames = [
                  idx === 0
                    ? "relative col-span-2 h-[340.5px] w-[724px] justify-self-center"
                    : idx === 1
                      ? "relative h-[calc(340.5px/2)] w-[calc(720px/2)] justify-self-end"
                      : "relative h-[calc(340.5px/2)] w-[calc(720px/2)] justify-self-start",
                ].join(" ")
                return (
                  <div className={imageClassnames} key={idx}>
                    <Image
                      loading="lazy"
                      placeholder="blur"
                      src={img}
                      fill
                      className="object-cover"
                      alt="image"
                    />
                  </div>
                )
              })}
            </motion.div>
          )}
          {selectedProject.platform === "mobile" && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="grid grid-cols-3 items-center"
            >
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
            </motion.div>
          )}
        </div>
      )}
    </div>
  )
}

const projects = [
  {
    name: "Östermalms Måleriserice",
    description: [
      "A website for Östermalms Måleriservice, a painting company based in Stockholm. Me and my colleague redesigned and enhanced their previous Wix website to improve user experience, modernize the design and enhance SEO.",
    ],
    stack: "web development",
    type: "painter website",
    role: "web developer",
    date: "2025",
    tools: [
      "wix",
      "figma",
      "seo",
    ],
    platform: "website",
    href: "https://www.ostermalmsmaleriservice.se/",
    images: [ostermalm_a, ostermalm_b, ostermalm_c],
  },
  {
    name: "Krenko's Assistant",
    description: [
      "A very niche app for players of the card game Magic: The Gathering. Helps players keep track of their Goblin tokens and other game related info.",
    ],
    stack: "frontend",
    type: "card game app",
    role: "frontend developer",
    date: "2025",
    tools: [
      "next",
      "motion",
      "typescript",
      "tailwind",
      "css",
      "figma",
      "pwa",
    ],
    platform: "mobile",
    href: "https://krenko-helper.vercel.app/",
    github: "https://github.com/fogelmark/krenko-helper",
    images: [krenko_a, krenko_b, krenko_c],
  },
  {
    name: "Punch Publishing",
    description: [
      "A website for Punch Publishing, a music publishing company based in Stockholm. Showcasing their artists and catalog.",
    ],
    stack: "frontend",
    type: "music publisher website",
    role: "frontend developer",
    date: "2025",
    tools: [
      "next",
      "motion",
      "typescript",
      "tailwind",
      "css",
      "figma",
    ],
    platform: "website",
    href: "https://punchpublishing.vercel.app/",
    github: "https://github.com/fogelmark/trufflepig",
    images: [punch_a, punch_b, punch_c],
  },
  {
    name: "Movie Trends",
    description: [
      "A movie browsing app that uses The Movie Database (TMDb) API to fetch and display trending movies.",
    ],
    stack: "fullstack",
    type: "3hour code test",
    role: "frontend developer",
    date: "2025",
    tools: [
      "next",
      "typescript",
      "tailwind",
      "sqlite",
      "prisma",
      "api"
    ],
    platform: "website",
    github: "https://github.com/fogelmark/code-test-ignite",
    images: [movietrends_a, movietrends_b, movietrends_c],
  },
  {
    name: "MediaLog",
    description: [
      "A fullstack media tracking app where users can log and track movies and TV-shows they have watched or want to watch.",
    ],
    stack: "fullstack",
    type: "media tracker app",
    role: "fullstack developer",
    date: "2025",
    tools: [
      "next",
      "typescript",
      "tailwind",
      "shadcn",
      "mongodb",
      "nodejs",
      "cloudinary",
      "kinde auth",
    ],
    platform: "website",
    github: "https://github.com/fogelmark/media-tracker",
    images: [medialog_a, medialog_b, medialog_c],
  },
  {
    name: "Developer Blog",
    description: [
      "A developer blog where I share my thoughts and experiences as a developer.",
    ],
    stack: "fullstack",
    type: "developer blog",
    role: "fullstack developer",
    date: "2024",
    tools: [
      "next",
      "typescript",
      "tailwind",
      "prisma",
      "postgresql",
      "nodejs",
      "kinde auth",
    ],
    platform: "website",
    href: "https://next-blog-aff8x8bp0-alexs-projects-3d95c78a.vercel.app/",
    github: "https://github.com/fogelmark/next-blog",
    images: [blog_a, blog_b, blog_c],
  },
  {
    name: "Lifelink",
    description: [
      "A Magic: The Gathering themed mobile app used for tracking life totals. PWA with offline support.",
    ],
    stack: "frontend",
    type: "mobile app",
    role: "frontend developer",
    date: "2024",
    tools: ["react", "css", "figma", "pwa"],
    platform: "mobile",
    href: "https://mtgcounterapp.netlify.app/",
    github: "https://github.com/fogelmark/mtg-counter-react",
    images: [counter_a_left, counter_b_portrait, counter_c_portrait],
  },
  {
    name: "LÉON",
    description: [
      "A website for the artist LÉON showcasing her music, tour dates and more.",
    ],
    stack: "frontend",
    type: "artist website",
    role: "design & frontend",
    date: "2023",
    tools: [
      "next",
      "motion",
      "typescript",
      "tailwind",
      "css",
      "figma",
    ],
    platform: "website",
    href: "https://its-leon.netlify.app/",
    github: "https://github.com/fogelmark/leon-site",
    images: [leon_a, leon_b, leon_c],
  },
  {
    name: "Cabin Rental",
    description: [
      "A school project where we built a fullstack cabin rental service featuring user authentication, bookings and more.",
    ],
    stack: "fullstack",
    type: "lodging rental website",
    role: "fullstack developer",
    date: "2023",
    tools: [
      "react",
      "vite",
      "css",
      "mongodb",
      "nodejs",
      "bootstrap",
    ],
    platform: "website",
    github: "https://github.com/fogelmark/cabin-rental",
    images: [airbnb_a, airbnb_b, airbnb_c],
  },
]
