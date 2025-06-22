import Image from 'next/image'
import {useEffect, useRef} from 'react'
import gsap from 'gsap'

const createSquareMovement = (element: HTMLImageElement) => {
  if (!element) return null

  const tl = gsap.timeline({repeat: -1, yoyo: true})

  tl.to(element, {
    x: 3,
    y: 0,
    duration: 0.25,
    ease: 'linear',
  })
    .to(element, {
      x: 3,
      y: 3,
      duration: 0.25,
      ease: 'linear',
    })
    .to(element, {
      x: 0,
      y: 3,
      duration: 0.25,
      ease: 'linear',
    })
    .to(element, {
      x: 0,
      y: 0,
      duration: 0.25,
      ease: 'linear',
    })

  return tl
}

const createCircularMovement = (element: HTMLImageElement) => {
  if (!element) return null

  const tl = gsap.timeline({repeat: -1, yoyo: true})

  tl.to(element, {
    x: 3,
    y: 3,
    duration: 0.25,
    ease: 'linear',
  })
    .to(element, {
      x: -3,
      y: 3,
      duration: 0.25,
      ease: 'linear',
    })
    .to(element, {
      x: -3,
      y: -3,
      duration: 0.25,
      ease: 'linear',
    })
    .to(element, {
      x: 3,
      y: -3,
      duration: 0.25,
      ease: 'linear',
    })
    .to(element, {
      x: 3,
      y: 3,
      duration: 0.25,
      ease: 'linear',
    })
    .to(element, {
      x: 0,
      y: 0,
      duration: 0.25,
      ease: 'linear',
    })

  return tl
}

export const Stars = () => {
  const starFirstRef = useRef<HTMLImageElement>(null)
  const starSecondRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    let starFirstAnimation: gsap.core.Timeline | null = null
    let starSecondAnimation: gsap.core.Timeline | null = null

    if (starFirstRef.current) {
      starFirstAnimation = createSquareMovement(starFirstRef.current)
    }
    if (starSecondRef.current) {
      starSecondAnimation = createCircularMovement(starSecondRef.current)
    }

    return () => {
      if (starFirstAnimation) starFirstAnimation.kill()
      if (starSecondAnimation) starSecondAnimation.kill()
    }
  }, [])

  return (
    <>
      <Image
        src='https://seohub.okhub-tech.com/wp-content/uploads/2025/05/Vector-579.svg'
        alt='star-first'
        className='object-cover absolute right-[13.5rem] top-[1.5rem] xsm:w-[1.47rem] xsm:h-[1.835rem] xsm:right-[7.5rem] xsm:top-[1rem] xsm:[filter:brightness(0)_invert(1)]'
        width={44}
        height={55}
        ref={starFirstRef}
      />
      <Image
        src='https://seohub.okhub-tech.com/wp-content/uploads/2025/05/Vector-580.svg'
        alt='star-second'
        className='object-cover absolute right-[12rem] top-[3.5rem] xsm:w-[1.08rem] xsm:h-[1.25rem] xsm:right-[6.5rem] xsm:top-[2.5rem] xsm:[filter:brightness(0)_invert(1)]'
        width={34}
        height={39}
        ref={starSecondRef}
      />
    </>
  )
}
