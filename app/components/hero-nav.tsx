import Link from "next/link"
import React from "react"

export default function HeroNav() {
  return (
    <nav className="col-span-12 flex items-center justify-center self-center">
      <ul className="text-cod-gray-secondary flex gap-2.5 text-xs font-medium">
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
        <li>
          <Link href="/design-library">design library</Link>
        </li>
      </ul>
    </nav>
  )
}
