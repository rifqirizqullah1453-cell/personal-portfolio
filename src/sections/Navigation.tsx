import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', target: 'hero' },
  { label: 'About', target: 'about' },
  { label: 'Work', target: 'projects' },
  { label: 'Experience', target: 'experience' },
  { label: 'Skills', target: 'toolkit' },
]

export default function Navigation() {
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  // Detect active section
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'projects', 'experience', 'toolkit', 'contact']
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id)
          }
        },
        { threshold: 0.1, rootMargin: '-80px 0px -60% 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const go = useCallback((target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }, [])

  return (
    <>
      {/* Sticky Navigation — Always visible */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ backdropFilter: 'blur(24px) saturate(1.6)', background: 'rgba(251,250,248,0.92)', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
        <div className="page-container">
          <div className="flex items-center justify-between py-3.5">
            {/* Logo */}
            <span className="text-[17px] font-extrabold tracking-tight cursor-pointer transition-colors hover:text-[var(--coral)]" style={{ color: 'var(--ink)' }} onClick={() => go('hero')}>Rifqi.</span>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5 px-2 py-1.5 rounded-full" style={{ background: 'rgba(0,0,0,0.02)' }}>
              {links.map((l) => (
                <button
                  key={l.label}
                  onClick={() => go(l.target)}
                  className={`px-4 lg:px-5 py-2 rounded-full text-[12px] lg:text-[13px] font-medium transition-all duration-500 ${active === l.target ? 'text-white' : 'hover:bg-black/5'}`}
                  style={active === l.target ? { background: 'var(--ink)', boxShadow: '0 2px 12px rgba(29,29,31,0.15)' } : { color: 'rgba(29,29,31,0.4)' }}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Contact Button (Desktop) */}
            <button onClick={() => go('contact')} className="hidden md:block px-5 py-2.5 rounded-full text-[13px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:scale-105" style={{ background: 'var(--coral)' }}>Contact</button>

            {/* Mobile Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.03)' }}>
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl shadow-xl p-3 border" style={{ borderColor: 'rgba(0,0,0,0.04)' }}>
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => go(l.target)}
                className={`w-full text-left px-5 py-3 rounded-2xl text-sm font-semibold transition-all ${active === l.target ? 'text-white' : 'text-gray-400 hover:bg-gray-50'}`}
                style={active === l.target ? { background: 'var(--ink)' } : {}}
              >
                {l.label}
              </button>
            ))}
            <button onClick={() => go('contact')} className="w-full text-left px-5 py-3 rounded-2xl text-sm font-bold text-white mt-1" style={{ background: 'var(--coral)' }}>Contact</button>
          </div>
        )}
      </nav>
    </>
  )
}
