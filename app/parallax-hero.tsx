import React, { useRef } from "react";
import bobba from "@/public/images/bobba.jpg";
import hallway from "@/public/images/hallway.avif";
import building from "@/public/images/building.avif";
import vader from "@/public/images/darth-vader.jpg";
import vintage_4 from "@/public/images/william-f-santos-Xpy_asUd_SU-unsplash.jpg"
import { motion, useScroll, useTransform } from "motion/react";
import { bricolage } from "@/lib/fonts";
import { noto_serif } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function ParallaxHero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={container} className="bg-[#f0efe9] w-full h-[200vh] flex justify-center items-center">
      <div
        className="relative w-full h-screen overflow-hidden p-10"
      >
        <div className="size-full overflow-hidden relative flex flex-col justify-center items-center">
          <section className="text-white absolute z-10 text-center">
            <h3 className={cn("text-2xl capitalize", noto_serif.className)}>
              a simple trick to
            </h3>
            <h2 className="text-6xl font-medium uppercase">engage the user</h2>
            <h2
              className={cn(
                "text-6xl font-medium uppercase",
                noto_serif.className
              )}
            >
              with parallax
            </h2>
          </section>
          <motion.img
            style={{ y }}
            className="object-cover scale-105 size-full"
            src={vintage_4.src}
            alt="bobba"
          />
        </div>
      </div>
    </div>
  );
}
