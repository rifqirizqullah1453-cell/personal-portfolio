import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Globe, Layers, Cpu, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: '01',
    title: 'BOH Hizmet',
    category: 'Web Application',
    desc: 'A service-based web application deployed on Vercel, featuring responsive design and seamless user interactions for business workflow management.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Vercel'],
    year: '2026',
    icon: Globe,
    color: '#e07a5f',
    link: 'https://boh-hizmet.vercel.app/',
  },
  {
    id: '02',
    title: 'PPI Bartin',
    category: 'Organization Platform',
    desc: 'A web platform for student organization networking, partnership management, and event coordination with a clean modern interface.',
    tags: ['JavaScript', 'HTML/CSS', 'Responsive Design'],
    year: '2026',
    icon: Layers,
    color: '#4a90a4',
    link: 'https://www.ppibartin.com/login',
  },
  {
    id: '03',
    title: 'Robotics Control System',
    category: 'Embedded Systems',
    desc: 'Arduino-based automation system with sensor integration for robotic platforms, enabling precise control and real-time monitoring.',
    tags: ['Arduino', 'C++', 'IoT', 'Sensors'],
    year: '2026',
    icon: Cpu,
    color: '#5f8d6e',
  },
  {
    id: '04',
    title: 'Personal Portfolio',
    category: 'Personal Project',
    desc: 'A modern, animated portfolio website built with React and TypeScript featuring smooth scroll interactions and refined visual design.',
    tags: ['React', 'TypeScript', 'GSAP', 'Tailwind'],
    year: '2026',
    icon: Sparkles,
    color: '#c4a35a',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from('.proj-header', {
        opacity: 0, y: 40, duration: 0.8,
        scrollTrigger: { trigger: el, start: 'top 80%' },
        ease: 'power3.out',
      })
      gsap.utils.toArray<HTMLElement>('.proj-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, y: 60, duration: 0.8, delay: i * 0.15,
          scrollTrigger: { trigger: card, start: 'top 88%' },
          ease: 'power3.out',
        })
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-28 md:py-36" style={{ background: 'var(--surface)' }}>
      <div className="page-container max-w-[960px]">

        {/* Header */}
        <div className="proj-header mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(224,122,95,0.08)' }}>
              <svg className="w-5 h-5" style={{ color: 'var(--coral)' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--coral)' }}>
              Selected Work
            </p>
          </div>
          <h2 className="text-[2.2rem] md:text-[2.8rem] font-extrabold tracking-tight leading-[1.05]" style={{ color: 'var(--ink)' }}>
            Featured Projects
          </h2>
        </div>

        {/* Project Grid — 2 columns, equal height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          {projects.map((p) => {
            const Icon = p.icon
            const Tag = p.link ? 'a' : 'div'
            const linkProps = p.link ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' } : {}

            return (
              <Tag
                key={p.id}
                {...linkProps}
                className="proj-card group relative rounded-[2rem] border bg-white overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(224,122,95,0.12)] hover:-translate-y-2 no-underline flex flex-col h-full"
                style={{ borderColor: 'rgba(0,0,0,0.05)' }}
              >
                {/* Top accent bar */}
                <div
                  className="h-[3px] w-full transition-all duration-500 group-hover:h-[4px]"
                  style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}40)` }}
                />

                <div className="p-6 lg:p-7 flex flex-col flex-1">
                  {/* Top: ID + Year */}
                  <div className="flex items-center justify-between mb-5 flex-shrink-0">
                    <span
                      className="text-[13px] font-extrabold tabular-nums tracking-wider"
                      style={{ color: `${p.color}99` }}
                    >
                      {p.id}
                    </span>
                    <span className="text-[11px] font-bold tabular-nums" style={{ color: 'var(--ink-faint)' }}>
                      {p.year}
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 flex-shrink-0">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{ background: `${p.color}10` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: p.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3
                          className="text-[1.15rem] lg:text-[1.25rem] font-extrabold tracking-tight transition-colors duration-300 group-hover:text-[var(--coral)]"
                          style={{ color: 'var(--ink)' }}
                        >
                          {p.title}
                        </h3>
                        <ArrowUpRight
                          className="w-4 h-4 flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                          style={{ color: 'var(--coral)' }}
                        />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--ink-faint)' }}>
                        {p.category}
                      </span>
                    </div>
                  </div>

                  {/* Description — line-clamped for equal height */}
                  <p
                    className="text-[13px] lg:text-[14px] leading-[1.8] mt-4 flex-1 line-clamp-3"
                    style={{ color: 'var(--ink-soft)' }}
                  >
                    {p.desc}
                  </p>

                  {/* Tags — pinned to bottom */}
                  <div className="flex flex-wrap gap-2 mt-5 flex-shrink-0">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold transition-all duration-300"
                        style={{ color: `${p.color}`, background: `${p.color}08` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
