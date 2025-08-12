import { noto_serif_display } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import React from "react"

export default function HeroHeading() {
  return (
    <div
      className={cn(
        "col-span-12 self-end text-center text-6xl uppercase",
        noto_serif_display.className,
      )}
    >
      <h1 className="font-medium">alex fogelmark</h1>
      <h1 className="font-bold">frontend developer</h1>
      <h1 className="font-medium">based in stockholm</h1>
    </div>
  )
}
