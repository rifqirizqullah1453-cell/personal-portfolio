import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ArrowUpRight, MapPin } from 'lucide-react'

function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [v, setV] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const done = useRef(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        const s = Date.now()
        const tick = () => { const p = Math.min((Date.now() - s) / 2000, 1); setV(Math.round((1 - Math.pow(1 - p, 4)) * end)); if (p < 1) requestAnimationFrame(tick) }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [end])
  return <span ref={ref}>{v}{suffix}</span>
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-photo', { opacity: 0, scale: 0.95, duration: 1, delay: 0.1, ease: 'power3.out' })
      gsap.from('.hero-badge', { opacity: 0, x: 10, duration: 0.6, delay: 0.3, ease: 'power3.out' })
      gsap.from('.hero-floater', { opacity: 0, y: 10, duration: 0.6, delay: 0.5, ease: 'power3.out' })
      gsap.from('.hero-name', { opacity: 0, y: 30, duration: 0.7, delay: 0.2, ease: 'power3.out' })
      gsap.from('.hero-role1', { opacity: 0, y: 30, duration: 0.7, delay: 0.35, ease: 'power3.out' })
      gsap.from('.hero-role2', { opacity: 0, y: 30, duration: 0.7, delay: 0.5, ease: 'power3.out' })
      gsap.from('.hero-desc', { opacity: 0, y: 20, duration: 0.6, delay: 0.6, ease: 'power3.out' })
      gsap.from('.hero-btns', { opacity: 0, y: 15, duration: 0.6, delay: 0.7, ease: 'power3.out' })
      gsap.from('.hero-stats', { opacity: 0, y: 15, duration: 0.6, delay: 0.8, ease: 'power3.out' })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-[100dvh] flex items-center pt-20 pb-16 overflow-hidden" style={{ background: 'var(--surface)' }}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.04]" style={{ background: 'radial-gradient(circle, var(--coral), transparent 70%)', transform: 'translate(40%, -30%)' }} />

      <div className="page-container w-full relative z-10">

        {/* MOBILE: Photo top, text bottom (vertical stack) */}
        <div className="flex flex-col items-center sm:hidden">
          {/* Photo */}
          <div className="relative mb-4">
            <div className="absolute -top-3 -right-3 w-[92%] h-[92%] rounded-[1rem] rotate-3 -z-10" style={{ background: 'rgba(224,122,95,0.12)' }} />
            <div className="hero-photo relative w-[160px] h-[200px] rounded-[1rem] overflow-hidden bg-white shadow-md z-10 border" style={{ borderColor: 'rgba(224,122,95,0.1)' }}>
              <img src="/profile.png" alt="Rifqi Rizqullah" className="w-full h-full object-cover object-top" />
            </div>
            {/* Badge */}
            <div className="hero-badge absolute top-3 right-3 bg-white rounded-full shadow-sm px-2 py-0.5 flex items-center gap-1 z-20 border" style={{ borderColor: 'rgba(0,0,0,0.04)' }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-40" />
                <span className="relative rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[8px] font-bold" style={{ color: 'var(--ink)' }}>Open</span>
            </div>

            {/* Card — bottom left of photo */}
            <div className="hero-floater absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-md px-3 py-2 flex items-center gap-2 border z-20" style={{ borderColor: 'rgba(0,0,0,0.04)' }}>
              <div className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(224,122,95,0.08)' }}>
                <svg className="w-3 h-3" style={{ color: 'var(--coral)' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-[8px] font-bold uppercase tracking-wider" style={{ color: 'var(--ink-faint)' }}>Specialization</p>
                <p className="text-[11px] font-extrabold" style={{ color: 'var(--ink)' }}>Full-Stack Dev</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="text-left w-full">
            <p className="text-[12px] font-medium mb-1" style={{ color: 'var(--coral)' }}>Hello, I'm</p>
            <h1 className="text-[2rem] font-extrabold leading-[1.1] tracking-tight" style={{ color: 'var(--ink)' }}>
              Rifqi <span style={{ color: 'var(--coral)' }}>Rizqullah</span>
            </h1>
            <h2 className="text-[1.2rem] font-bold leading-[1.2] tracking-tight mt-1" style={{ color: 'var(--ink)' }}>Web Developer</h2>
            <h2 className="text-[1.1rem] font-bold leading-[1.2] tracking-tight" style={{ color: 'var(--ink-faint)' }}>& Robotics Enthusiast</h2>
            <p className="text-[13px] leading-[1.7] mt-3" style={{ color: 'var(--ink-soft)' }}>
              I build modern, scalable digital solutions with expertise in frontend web development and embedded systems engineering.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <button onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn text-[12px] px-4 py-2.5">View My Work <ArrowUpRight className="w-3.5 h-3.5" /></button>
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-ghost text-[12px] px-4 py-2.5">Contact Me</button>
            </div>
            <div className="flex gap-8 mt-8">
              {[{v:3,s:'+',l:'Years Exp.'},{v:10,s:'+',l:'Projects'},{v:5,s:'+',l:'Tech Stacks'}].map(x=> (
                <div key={x.l}><p className="text-[1.6rem] font-extrabold leading-none" style={{color:'var(--ink)'}}><Counter end={x.v} suffix={x.s}/></p><p className="text-[10px] font-medium mt-1" style={{color:'var(--ink-faint)'}}>{x.l}</p></div>
              ))}
            </div>
            <div className="flex items-center gap-1.5 mt-3 text-[11px] font-medium" style={{color:'var(--ink-faint)'}}><MapPin className="w-3.5 h-3.5" style={{color:'var(--coral)'}}/>Bartin, Turkey</div>
          </div>
        </div>

        {/* TABLET+: Side by side */}
        <div className="hidden sm:grid grid-cols-[1fr_auto] gap-8 lg:gap-20 xl:gap-28 items-center">

          {/* LEFT: Text */}
          <div className="flex flex-col items-start text-left min-w-0">
            <p className="text-[13px] font-medium mb-1" style={{ color: 'var(--coral)' }}>Hello, I'm</p>
            <h1 className="text-[3.4rem] lg:text-[3.6rem] xl:text-[4.2rem] font-extrabold leading-[1.05] tracking-tight" style={{ color: 'var(--ink)' }}>
              Rifqi <span style={{ color: 'var(--coral)' }}>Rizqullah</span>
            </h1>
            <div className="mt-2">
              <h2 className="text-[1.8rem] lg:text-[2rem] xl:text-[2.4rem] font-bold leading-[1.2]" style={{ color: 'var(--ink)' }}>Web Developer</h2>
              <h2 className="text-[1.6rem] lg:text-[1.9rem] xl:text-[2.2rem] font-bold leading-[1.2]" style={{ color: 'var(--ink-faint)' }}>& Robotics Enthusiast</h2>
            </div>
            <p className="text-[15px] lg:text-[16px] leading-[1.8] max-w-lg mt-5 lg:mt-6" style={{ color: 'var(--ink-soft)' }}>
              I build modern, scalable digital solutions with expertise in frontend web development and embedded systems engineering.
            </p>
            <div className="flex flex-wrap gap-3 mt-7 lg:mt-8">
              <button onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn text-[14px] px-6 py-3.5">View My Work <ArrowUpRight className="w-4 h-4" /></button>
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-ghost text-[14px] px-6 py-3.5">Contact Me</button>
            </div>
            <div className="flex gap-14 mt-16 lg:mt-20">
              {[{v:3,s:'+',l:'Years Exp.'},{v:10,s:'+',l:'Projects'},{v:5,s:'+',l:'Tech Stacks'}].map(x=> (
                <div key={x.l}><p className="text-[2.2rem] lg:text-[2.4rem] font-extrabold leading-none" style={{color:'var(--ink)'}}><Counter end={x.v} suffix={x.s}/></p><p className="text-[13px] font-medium mt-1.5" style={{color:'var(--ink-faint)'}}>{x.l}</p></div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-5 text-[13px] font-medium" style={{color:'var(--ink-faint)'}}><MapPin className="w-4 h-4" style={{color:'var(--coral)'}}/>Bartin, Turkey</div>
          </div>

          {/* RIGHT: Photo */}
          <div className="flex justify-end flex-shrink-0">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-[92%] h-[94%] rounded-[1.5rem] rotate-3 -z-10" style={{ background: 'rgba(224,122,95,0.12)' }} />
              <div className="absolute -bottom-4 -left-4 w-[82%] h-[82%] rounded-[1.5rem] -rotate-2 -z-10" style={{ background: 'rgba(224,122,95,0.06)' }} />

              <div className="hero-photo relative w-[260px] h-[330px] lg:w-[360px] lg:h-[460px] xl:w-[400px] xl:h-[520px] rounded-[1.5rem] overflow-hidden bg-white shadow-lg z-10 border" style={{ borderColor: 'rgba(224,122,95,0.1)' }}>
                <img src="/profile.png" alt="Rifqi Rizqullah" className="w-full h-full object-cover object-top" />
              </div>

              {/* Badge */}
              <div className="hero-badge absolute top-3 right-3 bg-white rounded-full shadow-md px-2.5 py-1.5 flex items-center gap-1.5 z-20 border" style={{ borderColor: 'rgba(0,0,0,0.04)' }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-bold" style={{ color: 'var(--ink)' }}>Open to work</span>
              </div>

              {/* Floating card — bottom LEFT (not right) */}
              <div className="hero-floater absolute -bottom-8 -left-12 lg:-bottom-10 lg:-left-14 bg-white rounded-[1.25rem] shadow-lg px-5 py-3.5 flex items-center gap-3 border z-20" style={{ borderColor: 'rgba(0,0,0,0.04)' }}>
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(224,122,95,0.08)' }}>
                  <svg className="w-5 h-5" style={{ color: 'var(--coral)' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color: 'var(--ink-faint)' }}>Specialization</p>
                  <p className="text-[14px] font-extrabold" style={{ color: 'var(--ink)' }}>Full-Stack Dev</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
