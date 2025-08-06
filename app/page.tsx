"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
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
    <div className="flex bg-[#10100E] relative min-h-[100vh] justify-center items-center">
    </div>
  );
}
