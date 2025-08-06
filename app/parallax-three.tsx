import { motion, useScroll, useTransform } from "motion/react";
import bobba from "@/public/images/bobba.jpg";
import hallway from "@/public/images/hallway.avif";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { noto_serif } from "@/lib/fonts";
import { playfair } from "@/lib/fonts";

export default function ParallaxThree() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const image = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative grid items-center gap-4 grid-cols-4 w-full px-10"
      >
      <div className="flex flex-col col-start-3 h-fit">
        <div className="h-[500px] overflow-hidden">
          <motion.img
            style={{ y: image }}
            className="object-cover scale-105 size-full"
            src={hallway.src}
            alt="bobba"
          />
        </div>
        <p className={cn("", playfair.className)}>Bobba Fett</p>
        <p className="font-semibold text-[13px]">Bounty Hunter</p>
      </div>
    </div>
  );
}
