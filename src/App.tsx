import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import TechArsenal from './sections/TechArsenal'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <div className="relative min-h-[100dvh]" style={{ background: 'var(--surface)', color: 'var(--ink)' }}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechArsenal />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
