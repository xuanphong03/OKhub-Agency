'use client'

import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Types for SVG animation
interface SVGAnimationConfig {
  duration: number
  ease: string
  triggerOffset: string
}

// Default configuration for SVG animations
const DEFAULT_CONFIG: SVGAnimationConfig = {
  duration: 3,
  ease: 'power4.inOut',
  triggerOffset: 'top 80%',
}

// Function to animate a single SVG path
function animateSVGPath(
  path: SVGPathElement,
  config: SVGAnimationConfig,
): void {
  const length = path.getTotalLength()

  // Set initial state
  path.style.strokeDasharray = length.toString()
  path.style.strokeDashoffset = length.toString()

  // Create animation
  gsap.to(path, {
    strokeDashoffset: 0,
    duration: config.duration,
    ease: config.ease,
    scrollTrigger: {
      trigger: path,
      start: config.triggerOffset,
      toggleActions: 'play none none none',
    },
  })
}

// Main function to initialize SVG animations
export function initializeSVGAnimations(
  config: SVGAnimationConfig = DEFAULT_CONFIG,
): void {
  if (typeof window === 'undefined') return
  const svgElement = document.getElementById('triangleSVG')
  if (!svgElement) return

  const paths = svgElement.querySelectorAll('path')
  paths.forEach((path) => animateSVGPath(path as SVGPathElement, config))
}

// Cleanup function
export function cleanupAnimations(): void {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
}
