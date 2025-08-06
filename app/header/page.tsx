import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <nav className='w-full text-white uppercase p-4 text-sm fixed top-0 z-10 bg-transparent flex justify-between'>
      <Link href={'/'}>
        Home
      </Link>
      <Link href={'/design-library'}>
        Design
      </Link>
    </nav>
  )
}
