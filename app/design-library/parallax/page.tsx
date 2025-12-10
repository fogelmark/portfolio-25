"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import ParallaxGallery from "../../parallax-gallery";
import ParallaxHero from "../../parallax-hero";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    window.scrollTo(0, 0);

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="flex bg-white flex-col relative min-h-[100vh] justify-center items-center">
      <div className="h-screen uppercase flex justify-center text-gray-background items-center text-2xl font-bold">
        <h1>scroll</h1>
      </div>
      <div className="relative md:h-[300vh] h-[200vh] py-28">
        <ParallaxGallery />
      </div>
      <ParallaxHero />
    </div>
  );
}
