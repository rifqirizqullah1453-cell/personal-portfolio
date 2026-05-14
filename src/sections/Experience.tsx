import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, ExternalLink, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// Reverse chronological order — newest first
const experiences = [
  {
    role: 'Lead Full-Stack Developer',
    company: 'BOH Hizmet',
    location: 'Remote',
    period: '2025 — Present',
    bullets: [
      'Developed and deployed a full-service web application on Vercel, serving business workflow management needs.',
      'Implemented responsive UI design patterns and integrated Firebase for real-time data synchronization.',
      'Architected clean, scalable codebase using React and modern frontend best practices.',
    ],
    skills: ['React', 'Firebase', 'Vercel'],
    link: 'https://boh-hizmet.vercel.app/',
  },
  {
    role: 'Head of Networking & Partnerships',
    company: 'PPI Bartin',
    location: 'Bartin, Turkey',
    period: '2023 — Present',
    bullets: [
      'Lead the Networking and Partnerships Division, managing international organizational relationships across 5+ countries.',
      'Contributed to the Web Application Development Team, coordinating digital platform development and UI improvements.',
      'Spearheaded partnership initiatives that expanded organizational reach and collaboration networks.',
    ],
    skills: ['Leadership', 'Team Management', 'Web Dev', 'Partnerships'],
    link: 'https://www.ppibartin.com/login',
  },
  {
    role: 'Web Application Developer',
    company: 'Freelance',
    location: 'Remote',
    period: '2021 — Present',
    bullets: [
      'Developed 10+ responsive web projects for diverse clients, emphasizing clean structure and performance optimization.',
      'Managed end-to-end project delivery from requirements gathering to deployment and client handover.',
      'Built maintainable codebases using modern JavaScript frameworks and CSS utility libraries.',
    ],
    skills: ['JavaScript', 'Tailwind', 'Git'],
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from('.exp-header', {
        opacity: 0, y: 30, duration: 0.8,
        scrollTrigger: { trigger: el, start: 'top 80%' },
        ease: 'power3.out',
      })
      gsap.utils.toArray<HTMLElement>('.exp-item').forEach((item, i) => {
        gsap.from(item, {
          opacity: 0, y: 50, duration: 0.7, delay: i * 0.12,
          scrollTrigger: { trigger: el, start: 'top 75%' },
          ease: 'power3.out',
        })
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-28 md:py-36" style={{ background: 'var(--surface)' }}>
      <div className="page-container max-w-[900px]">

        {/* Header */}
        <div className="exp-header flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--coral)' }}>
              Career Path
            </p>
            <h2 className="text-[2.2rem] md:text-[2.8rem] font-extrabold tracking-tight leading-[1.05]" style={{ color: 'var(--ink)' }}>
              Work Experience
            </h2>
          </div>
          <p className="text-[14px] max-w-sm leading-relaxed" style={{ color: 'var(--ink-faint)' }}>
            My professional journey spanning leadership, full-stack development, and freelance projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line — aligned perfectly with timeline dots */}
          <div
            className="absolute left-[8px] md:left-[11px] top-5 bottom-5 w-[2px]"
            style={{ background: 'linear-gradient(180deg, var(--coral) 0%, rgba(224,122,95,0.12) 100%)' }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-item relative pl-10 md:pl-14">

                {/* Timeline dot — perfectly centered on the line */}
                <div
                  className="absolute left-0 md:left-[3px] top-5 w-4 h-4 md:w-[18px] md:h-[18px] rounded-full border-[2.5px] md:border-[3px] flex items-center justify-center z-10"
                  style={{ borderColor: 'var(--coral)', background: 'var(--surface)' }}
                >
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full" style={{ background: 'var(--coral)' }} />
                </div>

                {/* Card */}
                <div
                  className="group relative rounded-[2rem] p-6 md:p-8 border transition-all duration-500 hover:shadow-xl hover:shadow-[rgba(224,122,95,0.08)] hover:-translate-y-1"
                  style={{ background: 'white', borderColor: 'rgba(0,0,0,0.05)' }}
                >
                  {/* Top row: Role + Company + Period */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-3 min-w-0">
                      <h3 className="text-[15px] md:text-[17px] font-extrabold" style={{ color: 'var(--ink)' }}>
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        {exp.link ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[12px] md:text-[13px] font-bold hover:underline underline-offset-2 transition-all"
                            style={{ color: 'var(--coral)' }}
                          >
                            <Briefcase className="w-3 h-3" />
                            {exp.company}
                            <ExternalLink className="w-3 h-3 opacity-40" />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[12px] md:text-[13px] font-bold" style={{ color: 'var(--coral)' }}>
                            <Briefcase className="w-3 h-3" />
                            {exp.company}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Date badge — enhanced contrast */}
                    <span
                      className="text-[11px] md:text-[12px] font-bold px-3 py-1.5 rounded-full flex-shrink-0 self-start border"
                      style={{
                        background: 'var(--ink)',
                        color: 'white',
                        borderColor: 'rgba(0,0,0,0.1)',
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <MapPin className="w-3 h-3" style={{ color: 'var(--ink-faint)' }} />
                    <span className="text-[12px] font-medium" style={{ color: 'var(--ink-faint)' }}>
                      {exp.location}
                    </span>
                  </div>

                  {/* Bullet points — action oriented */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: 'var(--coral)' }} />
                        <span className="text-[13px] md:text-[14px] leading-[1.75]" style={{ color: 'var(--ink-soft)' }}>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-full text-[10px] md:text-[11px] font-semibold border"
                        style={{
                          borderColor: 'rgba(0,0,0,0.06)',
                          color: 'var(--ink-soft)',
                          background: 'rgba(0,0,0,0.02)',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
