import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Cpu, Users, Lightbulb, Globe, ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  { icon: Code2, title: 'Frontend Dev', desc: 'React, TypeScript, Tailwind', badge: '10+' },
  { icon: Cpu, title: 'Robotics & Embedded', desc: 'Arduino, Sensors, IoT, Automation', badge: '5+' },
  { icon: Users, title: 'Leadership', desc: 'PPI Bartın Division Head', badge: 'Head' },
  { icon: Lightbulb, title: 'Problem Solving', desc: 'System Architecture', badge: 'E2E' },
]

const techs = ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React', 'TypeScript', 'Firebase', 'Arduino', 'Git', 'Vercel']

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from('.about-header', { opacity: 0, y: 30, duration: 0.8, scrollTrigger: { trigger: el, start: 'top 80%' }, ease: 'power3.out' })
      gsap.from('.about-text-col', { opacity: 0, x: -40, duration: 0.8, delay: 0.1, scrollTrigger: { trigger: el, start: 'top 75%' }, ease: 'power3.out' })
      gsap.utils.toArray<HTMLElement>('.about-card').forEach((item, i) => {
        gsap.from(item, { opacity: 0, x: 40, duration: 0.6, delay: 0.2 + i * 0.1, scrollTrigger: { trigger: el, start: 'top 70%' }, ease: 'power3.out' })
      })
      gsap.from('.about-tags', { opacity: 0, y: 20, duration: 0.6, delay: 0.6, scrollTrigger: { trigger: el, start: 'top 65%' }, ease: 'power3.out' })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-28 md:py-36" style={{ background: 'white' }}>
      <div className="page-container max-w-[1000px]">

        {/* Header */}
        <div className="about-header mb-12 md:mb-16">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--coral)' }}>About Me</p>
          <h2 className="text-[2rem] md:text-[2.4rem] font-extrabold tracking-tight leading-[1.1]" style={{ color: 'var(--ink)' }}>
            Who I <span style={{ color: 'var(--coral)' }}>Am</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

          {/* LEFT: Narrative Text */}
          <div className="about-text-col">
            <div className="mb-6">
              <p className="text-[14px] md:text-[15px] font-medium leading-[1.7] mb-3" style={{ color: 'var(--ink-soft)' }}>
                A passionate developer bridging the gap between web technologies and hardware systems.
              </p>
              <p className="text-[14px] md:text-[15px] leading-[1.85]" style={{ color: 'var(--ink-soft)' }}>
                I am a <strong style={{ color: 'var(--ink)' }}>Web Developer and Robotics Programming Enthusiast</strong> with a strong focus on building modern, scalable, and user-oriented digital solutions.
              </p>
            </div>

            <div className="space-y-4 text-[14px] md:text-[15px] leading-[1.85]" style={{ color: 'var(--ink-soft)' }}>
              <p>
                My expertise lies in frontend web development, particularly in developing responsive interfaces, integrating backend services, and creating efficient user experiences through clean and maintainable code.
              </p>

              {/* Quote block for PPI Bartın */}
              <div className="rounded-2xl p-5 my-5 border-l-[3px]" style={{ background: 'rgba(224,122,95,0.03)', borderColor: 'var(--coral)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4" style={{ color: 'var(--coral)' }} />
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--coral)' }}>Current Role</span>
                </div>
                <p style={{ color: 'var(--ink-soft)' }}>
                  I serve as the <strong style={{ color: 'var(--ink)' }}>Head of Networking and Partnerships Division at PPI Bartın</strong>, while also contributing as part of the Web Application Development Team — gaining experience in leadership, collaboration, and project coordination.
                </p>
              </div>

              <p>
                I have developed several web-based projects, including a service-based web application deployed on Vercel called <strong style={{ color: 'var(--coral)' }}>BOH Hizmet</strong>, focused on creating responsive and functional user experiences.
              </p>

              <p>
                Beyond web development, I also have experience in <strong style={{ color: 'var(--ink)' }}>robotics programming and embedded systems engineering</strong>, working on projects involving Arduino, automation systems, sensors, and semi-autonomous robotic platforms.
              </p>
            </div>

            {/* Tech tags */}
            <div className="about-tags flex flex-wrap gap-2 mt-8">
              {techs.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all hover:border-[var(--coral)] hover:text-[var(--coral)]" style={{ borderColor: 'rgba(0,0,0,0.08)', color: 'var(--ink-soft)', background: 'rgba(0,0,0,0.02)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Highlight Cards */}
          <div className="space-y-4">

            {/* Skill cards with badges */}
            {highlights.map((h) => (
              <div
                key={h.title}
                className="about-card group flex items-center gap-4 p-5 rounded-2xl border bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                style={{ borderColor: 'rgba(0,0,0,0.05)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: 'rgba(224,122,95,0.06)' }}>
                  <h.icon className="w-5 h-5" style={{ color: 'var(--coral)' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[14px] font-bold" style={{ color: 'var(--ink)' }}>{h.title}</p>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full flex-shrink-0" style={{ background: 'rgba(224,122,95,0.06)', color: 'var(--coral)' }}>{h.badge}</span>
                  </div>
                  <p className="text-[12px] mt-0.5" style={{ color: 'var(--ink-faint)' }}>{h.desc}</p>
                </div>
              </div>
            ))}

            {/* BOH Hizmet Project Card with badge */}
            <a
              href="https://boh-hizmet.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-card group block p-5 rounded-2xl border bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 no-underline"
              style={{ borderColor: 'rgba(0,0,0,0.05)' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(224,122,95,0.06)' }}>
                  <Globe className="w-5 h-5" style={{ color: 'var(--coral)' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <p className="text-[14px] font-bold group-hover:text-[var(--coral)] transition-colors" style={{ color: 'var(--ink)' }}>BOH Hizmet</p>
                      <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" style={{ color: 'var(--coral)' }} />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full flex-shrink-0" style={{ background: 'rgba(224,122,95,0.06)', color: 'var(--coral)' }}>Live</span>
                  </div>
                  <p className="text-[12px] mt-0.5" style={{ color: 'var(--ink-faint)' }}>Web Application — boh-hizmet.vercel.app</p>
                </div>
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}
