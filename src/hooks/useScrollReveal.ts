import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealOptions {
  y?: number
  x?: number
  opacity?: number
  duration?: number
  delay?: number
  stagger?: number
  ease?: string
  start?: string
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      y = 40,
      x = 0,
      opacity = 0,
      duration = 0.8,
      delay = 0,
      ease = 'power3.out',
      start = 'top 85%',
    } = options

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        x,
        opacity,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
      })
    })

    return () => ctx.revert()
  }, [options.y, options.x, options.opacity, options.duration, options.delay, options.ease, options.start])

  return ref
}

export function useStaggerReveal<T extends HTMLElement>(
  childSelector: string,
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const children = el.querySelectorAll(childSelector)
    if (children.length === 0) return

    const {
      y = 30,
      opacity = 0,
      duration = 0.6,
      stagger = 0.1,
      ease = 'power3.out',
      start = 'top 85%',
    } = options

    const ctx = gsap.context(() => {
      gsap.from(children, {
        y,
        opacity,
        duration,
        stagger,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
      })
    })

    return () => ctx.revert()
  }, [childSelector, options.y, options.opacity, options.duration, options.stagger, options.ease, options.start])

  return ref
}
