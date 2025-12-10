"use client"

import React from 'react'
import { ButtonPill } from './button-pill'

export default function Page() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <ButtonPill>
        {'hover me'}
      </ButtonPill>
    </div>
  )
}
