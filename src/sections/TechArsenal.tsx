import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const advancedSkills = [
  { title: 'Frontend Development', desc: 'React, TypeScript, HTML5, CSS3', level: 95, tooltip: 'Built 10+ production web apps with React ecosystem' },
  { title: 'Responsive UI Design', desc: 'Tailwind CSS, Mobile-first, Animations', level: 92, tooltip: 'Pixel-perfect designs across all device sizes' },
  { title: 'Web App Development', desc: 'JavaScript, SPA, Git, CI/CD', level: 88, tooltip: 'End-to-end development from concept to deployment' },
]

const intermediateSkills = [
  { title: 'Backend & Cloud', desc: 'Firebase, REST API, Vercel', level: 75, tooltip: 'Serverless backend solutions and API integration' },
  { title: 'Robotics & Embedded', desc: 'Arduino, Sensors, Automation, IoT', level: 70, tooltip: 'Hardware programming for automation systems' },
  { title: 'System Design', desc: 'Clean Code, Scalable Architecture', level: 72, tooltip: 'Architecture planning for scalable applications' },
]

function SkillBar({ skill, index }: { skill: typeof advancedSkills[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const [animatedLevel, setAnimatedLevel] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = barRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          // Staggered animation: delay based on index
          const delay = index * 200
          setTimeout(() => {
            const duration = 1200
            const startTime = performance.now()
            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              // Ease out cubic
              const eased = 1 - Math.pow(1 - progress, 3)
              setAnimatedLevel(Math.round(eased * skill.level))
              if (progress < 1) requestAnimationFrame(animate)
            }
            requestAnimationFrame(animate)
          }, delay)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [index, skill.level])

  return (
    <div
      ref={barRef}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={`absolute -top-10 left-0 px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all duration-300 z-20 pointer-events-none ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
        style={{ background: 'var(--ink)', color: 'white' }}
      >
        {skill.tooltip}
        <div className="absolute -bottom-1 left-4 w-2 h-2 rotate-45" style={{ background: 'var(--ink)' }} />
      </div>

      {/* Title row: name + desc + percentage — all aligned on same line */}
      <div className="flex items-baseline justify-between gap-3 mb-2.5">
        <div className="flex items-baseline gap-2.5 min-w-0">
          <h3 className="text-[14px] md:text-[15px] font-bold whitespace-nowrap" style={{ color: 'var(--ink)' }}>
            {skill.title}
          </h3>
          <span className="text-[11px] md:text-[12px] font-medium hidden sm:block" style={{ color: 'var(--ink-faint)' }}>
            {skill.desc}
          </span>
        </div>
        <span className="text-[13px] md:text-[14px] font-extrabold tabular-nums flex-shrink-0" style={{ color: 'var(--coral)' }}>
          {animatedLevel}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-[6px] md:h-[7px] rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.04)' }}>
        <div
          className="h-full rounded-full transition-all duration-[1200ms]"
          style={{
            width: `${animatedLevel}%`,
            background: 'linear-gradient(90deg, #e07a5f, #eda594)',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
      </div>
    </div>
  )
}

export default function TechArsenal() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from('.tk-header', { opacity: 0, y: 30, duration: 0.8, scrollTrigger: { trigger: el, start: 'top 80%' }, ease: 'power3.out' })
      gsap.from('.tk-group', { opacity: 0, y: 30, duration: 0.7, delay: 0.15, scrollTrigger: { trigger: el, start: 'top 75%' }, ease: 'power3.out' })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="toolkit" ref={sectionRef} className="py-28 md:py-36" style={{ background: 'white' }}>
      <div className="page-container max-w-[900px]">

        {/* Header */}
        <div className="tk-header flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--coral)' }}>Core Competencies</p>
            <h2 className="text-[2.2rem] md:text-[2.8rem] font-extrabold tracking-tight leading-[1.05]" style={{ color: 'var(--ink)' }}>
              Technical Toolkit
            </h2>
          </div>
          <p className="text-[14px] max-w-sm leading-relaxed" style={{ color: 'var(--ink-faint)' }}>
            My core technical skills across web development, embedded systems, and software engineering.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-10" style={{ background: 'rgba(0,0,0,0.06)' }} />

        <div className="tk-group space-y-12">

          {/* Advanced */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border" style={{ background: 'rgba(224,122,95,0.04)', color: 'var(--coral)', borderColor: 'rgba(224,122,95,0.15)' }}>
                Advanced
              </span>
              <div className="flex-1 h-px" style={{ background: 'rgba(224,122,95,0.08)' }} />
            </div>
            <div className="space-y-7">
              {advancedSkills.map((s, i) => (
                <SkillBar key={s.title} skill={s} index={i} />
              ))}
            </div>
          </div>

          {/* Intermediate */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border" style={{ background: 'rgba(0,0,0,0.02)', color: 'var(--ink-soft)', borderColor: 'rgba(0,0,0,0.08)' }}>
                Intermediate
              </span>
              <div className="flex-1 h-px" style={{ background: 'rgba(0,0,0,0.04)' }} />
            </div>
            <div className="space-y-7">
              {intermediateSkills.map((s, i) => (
                <SkillBar key={s.title} skill={s} index={i + 3} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
