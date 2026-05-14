import { ArrowUp, Instagram, Github, Linkedin } from 'lucide-react'

const navLinks = [
  { label: 'Home', target: 'hero' },
  { label: 'About', target: 'about' },
  { label: 'Work', target: 'projects' },
  { label: 'Experience', target: 'experience' },
  { label: 'Skills', target: 'toolkit' },
  { label: 'Contact', target: 'contact' },
]

const socials = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/rifqi.rizqullah_?igsh=MTJ6ZGJxeGdmbDViOQ%3D%3D&utm_source=qr',
    label: 'Instagram',
  },
  {
    icon: Github,
    href: 'https://github.com/rifqirizqullah1453-cell',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/rifqi-rizqullah-207694340?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    label: 'LinkedIn',
  },
]

export default function Footer() {
  const scrollTo = (target: string) => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="py-10" style={{ background: 'var(--surface-dark)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="page-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--coral)' }}>
              <span className="text-white font-extrabold text-sm">R</span>
            </div>
            <div>
              <span className="text-[15px] font-extrabold text-white">Rifqi Rizqullah</span>
              <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>Web Developer & Robotics Enthusiast</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <button key={l.label} onClick={() => scrollTo(l.target)} className="text-[12px] font-medium transition-colors hover:text-[var(--coral)]" style={{ color: 'rgba(255,255,255,0.4)' }}>{l.label}</button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Social Icons */}
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <s.icon className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.5)' }} />
              </a>
            ))}
            {/* Email */}
            <a
              href="mailto:rifqirizqullah1453@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            >
              <svg className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.5)' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <span className="text-[12px] font-medium ml-1" style={{ color: 'rgba(255,255,255,0.3)' }}>2026</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/10" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <ArrowUp className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.5)' }} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
