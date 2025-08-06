import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { noto_serif } from "@/lib/fonts";
import { playfair } from "@/lib/fonts";

import vintage_1 from "@/public/images/mathias-reding-ojnf5WyKyjo-unsplash.jpg"
import vintage_2 from "@/public/images/annie-spratt-aEEERuDKHjk-unsplash.jpg"
import vintage_3 from "@/public/images/mathias-reding-d2l1Y90YSnY-unsplash.jpg"
export default function ParallaxGallery() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const image = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const one = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const two = useTransform(scrollYProgress, [0, 1], ["60%", "-60%"]);

  return (
    <div
      ref={container}
      className="relative grid items-center gap-4 grid-cols-4 w-full px-10"
    >
      <div className="flex flex-col col-start-4">
        <div className="h-[500px] overflow-hidden">
          <motion.img
            style={{ y: image }}
            className="object-cover scale-125 size-full"
            src={vintage_1.src}
            alt="bobba"
          />
        </div>
        <p className={cn("", playfair.className)}>Bobba Fett</p>
        <p className="font-semibold text-[13px]">Bounty Hunter</p>
      </div>

      <motion.div style={{ y: one }} className="flex -translate-y-44 flex-col col-start-2 h-fit">
        <div className="h-[500px] overflow-hidden">
          <motion.img
            style={{ y: image }}
            className="object-cover scale-125 size-full"
            src={vintage_2.src}
            alt="bobba"
          />
        </div>
        <p className={cn("", playfair.className)}>Bobba Fett</p>
        <p className="font-semibold text-[13px]">Bounty Hunter</p>
      </motion.div>

      <motion.div style={{ y: two }} className="flex -translate-y-80 flex-col col-start-3 row-start-3 h-fit">
        <div className="h-[500px] overflow-hidden">
          <motion.img
            style={{ y: image }}
            className="object-cover scale-125 size-full"
            src={vintage_3.src}
            alt="bobba"
          />
        </div>
        <p className={cn("", playfair.className)}>Bobba Fett</p>
        <p className="font-semibold text-[13px]">Bounty Hunter</p>
      </motion.div>
    </div>
  );
}
