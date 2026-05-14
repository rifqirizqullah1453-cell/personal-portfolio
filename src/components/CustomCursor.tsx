import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const isHover = useRef(false)

  useEffect(() => {
    if ('ontouchstart' in window) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return
    document.body.style.cursor = 'none'

    const onMove = (e: MouseEvent) => { target.current.x = e.clientX; target.current.y = e.clientY }
    const onEnter = () => { isHover.current = true }
    const onLeave = () => { isHover.current = false }

    const addListeners = () => {
      const els = document.querySelectorAll('a, button, input, textarea')
      els.forEach((el) => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave) })
      return els
    }
    let els = addListeners()
    const mo = new MutationObserver(() => { els.forEach((e) => { e.removeEventListener('mouseenter', onEnter); e.removeEventListener('mouseleave', onLeave) }); els = addListeners() })
    mo.observe(document.body, { childList: true, subtree: true })
    window.addEventListener('mousemove', onMove)

    let raf: number
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.14
      pos.current.y += (target.current.y - pos.current.y) * 0.14
      const s = isHover.current ? 44 : 10
      dot.style.transform = `translate(${target.current.x - 5}px, ${target.current.y - 5}px)`
      ring.style.transform = `translate(${pos.current.x - s / 2}px, ${pos.current.y - s / 2}px)`
      ring.style.width = `${s}px`
      ring.style.height = `${s}px`
      ring.style.opacity = isHover.current ? '0.1' : '0.3'
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => { window.removeEventListener('mousemove', onMove); mo.disconnect(); cancelAnimationFrame(raf); document.body.style.cursor = '' }
  }, [])

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] hidden md:block" style={{ background: 'rgba(var(--coral),0.7)' }} />
      <div ref={ringRef} className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] hidden md:block transition-[width,height] duration-200" style={{ width: 10, height: 10, border: '1.5px solid rgba(var(--coral),0.3)' }} />
    </>
  )
}
