import { motion, Variants } from "motion/react"
import { useState } from "react"

interface ButtonProps {
  children: string
  href: string
  variants: Variants
}

export const Button = ({ children, href, variants }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      initial="initial"
      animate="animate"
      variants={variants}
      href={href}
      className="group relative flex cursor-pointer items-center justify-center border py-4 text-xs font-medium uppercase [clip-path:inset(0px)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-20 leading-none [clip-path:inset(0px)]">
        <motion.span
          className="relative inline-block text-white"
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: isHovered ? "100%" : 0,
            opacity: isHovered ? 0.25 : 1,
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 1, 0.5, 1],
            delay: isHovered ? 0 : 0.2,
          }}
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute top-0 left-0 text-black"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: isHovered ? 0 : "-100%", opacity: isHovered ? 1 : 0 }}
          transition={{
            duration: 0.4,
            delay: isHovered ? 0.2 : 0,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          {children}
        </motion.span>
      </span>
      <motion.span
        initial={{ y: "-135%", rotate: "-2.5deg" }}
        animate={{
          y: isHovered ? 0 : "-135%",
          rotate: isHovered ? "0deg" : "-2.5deg",
        }}
        transition={{
          duration: 1,
          delay: isHovered ? 0 : 0.1,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="pointer-events-none absolute top-0 left-[-10%] z-10 h-full w-[120%] bg-white"
      />
      <span className="bg-gray-background absolute top-0 left-0 h-full w-full" />
    </motion.a>
  )
}
