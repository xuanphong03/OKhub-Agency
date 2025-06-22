'use client'

import {useEffect} from 'react'
import {initializeSVGAnimations} from '@/animation/draw-svg'
import gsap from 'gsap'

const DefinitionClient = () => {
  useEffect(() => {
    // Ensure we're in the browser environment
    if (typeof window === 'undefined') return

    initializeSVGAnimations()

    // Badge animation
    gsap.set('#badge', {
      clipPath: 'inset(0% 100% 0% 0%)',
      opacity: 0,
    })

    gsap.to('#badge', {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      duration: 2.5,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: '#badge',
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    })

    const isDesktop = window.matchMedia('(min-width: 768px)').matches

    if (!isDesktop) return

    // Card hover animations
    const cards = document.querySelectorAll('.definition__card')

    cards.forEach((card) => {
      const image = card.querySelector('#cardImage')
      const content = card.querySelector('#cardContent')
      const sparkle1 = card.querySelector('#sparkle1')
      const sparkle2 = card.querySelector('#sparkle2')
      const svgPath = card.querySelector('#svgPath')
      const text = card.querySelector('#cardText')
      const number = card.querySelector('#cardNumber')
      const line = card.querySelector('#cardLine')
      const plus = card.querySelector('#cardPlus')

      gsap.set([sparkle1, sparkle2], {
        scale: 0,
        opacity: 0,
      })

      const tl = gsap.timeline({paused: true})

      tl.to(content, {rotation: -5, y: 0, duration: 0.3, ease: 'power2.out'}, 0)
        .to(image, {rotation: -5, y: 0, duration: 0.3, ease: 'power2.out'}, 0)
        .to(
          svgPath,
          {
            attr: {fill: 'url(#blueGradient)'},
            duration: 0.3,
            ease: 'power2.out',
          },
          0,
        )
        .to(text, {color: 'white', duration: 0.3, ease: 'power2.out'}, 0)
        .to(
          plus,
          {
            WebkitTextFillColor: 'white',
            WebkitTextStroke: '1.39px #fff',
            duration: 0.1,
            ease: 'power2.out',
          },
          0,
        )
        .to(
          number,
          {
            backgroundImage: 'none',
            color: 'white',
            duration: 0.3,
            ease: 'power2.out',
          },
          0,
        )
        .to(
          line,
          {
            borderColor: 'rgba(255,255,255,0.3)',
            duration: 0.3,
            ease: 'power2.out',
          },
          0,
        )
        .to(
          sparkle1,
          {
            scale: 1,
            opacity: 1,
            rotation: -10,
            duration: 0.4,
            ease: 'back.out(1.7)',
          },
          0.1,
        )
        .to(
          sparkle2,
          {
            scale: 1,
            opacity: 1,
            rotation: -5,
            duration: 0.4,
            ease: 'back.out(1.7)',
          },
          0.2,
        )

      card.addEventListener('mouseenter', () => tl.play())
      card.addEventListener('mouseleave', () => tl.reverse())

      card.setAttribute('tabindex', '0')
      card.addEventListener('focus', () => tl.play())
      card.addEventListener('blur', () => tl.reverse())

      let touchStartY = 0
      let isTap = false

      card.addEventListener('touchstart', (e: Event) => {
        const touchEvent = e as TouchEvent
        touchStartY = touchEvent.touches[0].clientY
        isTap = true
      })

      card.addEventListener('touchmove', (e: Event) => {
        const touchEvent = e as TouchEvent
        const moveY = touchEvent.touches[0].clientY
        if (Math.abs(moveY - touchStartY) > 10) {
          isTap = false
        }
      })

      card.addEventListener('touchend', function (e) {
        if (isTap) {
          e.preventDefault()
          tl.play()
          setTimeout(() => tl.reverse(), 100)
        }
      })
    })

    return () => {
      // Cleanup
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', () => {})
        card.removeEventListener('mouseleave', () => {})
        card.removeEventListener('focus', () => {})
        card.removeEventListener('blur', () => {})
        card.removeEventListener('touchstart', () => {})
        card.removeEventListener('touchmove', () => {})
        card.removeEventListener('touchend', () => {})
      })
    }
  }, [])

  return null
}

export default DefinitionClient
