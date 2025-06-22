/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

export default function GsapProvider({children}: {children: React.ReactNode}) {
  useGSAP(() => {
    if (window.innerWidth > 639) {
      ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: false,
      })
    }
  }, [])
  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>{children}</div>
    </div>
  )
}
