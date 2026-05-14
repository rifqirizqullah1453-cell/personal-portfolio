import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Send, Check, AlertCircle, Mail, MapPin, Instagram, Github, Linkedin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqenjnkr'

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rifqirizqullah1453@gmail.com',
    href: 'mailto:rifqirizqullah1453@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@rifqi.rizqullah_',
    href: 'https://www.instagram.com/rifqi.rizqullah_?igsh=MTJ6ZGJxeGdmbDViOQ%3D%3D&utm_source=qr',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'rifqirizqullah1453',
    href: 'https://github.com/rifqirizqullah1453-cell',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Rifqi Rizqullah',
    href: 'https://www.linkedin.com/in/rifqi-rizqullah-207694340?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from('.contact-header', {
        opacity: 0, y: 30, duration: 0.8,
        scrollTrigger: { trigger: el, start: 'top 80%' },
        ease: 'power3.out',
      })
      gsap.utils.toArray<HTMLElement>('.contact-social-card').forEach((item, i) => {
        gsap.from(item, {
          opacity: 0, y: 30, duration: 0.6, delay: 0.1 + i * 0.08,
          scrollTrigger: { trigger: el, start: 'top 75%' },
          ease: 'power3.out',
        })
      })
      gsap.from('.contact-form-card', {
        opacity: 0, y: 40, duration: 0.7, delay: 0.2,
        scrollTrigger: { trigger: el, start: 'top 70%' },
        ease: 'power3.out',
      })
    }, el)
    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-28 md:py-36" style={{ background: 'var(--surface)' }}>
      <div className="page-container max-w-[920px]">
        {/* Header */}
        <div className="contact-header text-center mb-14">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--coral)' }}>Get In Touch</p>
          <h2 className="text-[2.4rem] md:text-[3rem] font-extrabold tracking-tight leading-[1.05]" style={{ color: 'var(--ink)' }}>
            Let&apos;s Work Together
          </h2>
          <p className="text-[15px] mt-4 max-w-md mx-auto leading-relaxed" style={{ color: 'var(--ink-faint)' }}>
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </div>

        {/* Social Links - 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card group flex flex-col items-center text-center p-5 rounded-2xl bg-white border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 no-underline"
              style={{ borderColor: 'rgba(0,0,0,0.06)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 mb-3"
                style={{ background: 'rgba(224,122,95,0.08)' }}
              >
                <link.icon className="w-5 h-5" style={{ color: 'var(--coral)' }} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: 'var(--ink-faint)' }}>{link.label}</p>
              <p className="text-[12px] font-bold break-all group-hover:text-[var(--coral)] transition-colors leading-tight" style={{ color: 'var(--ink)' }}>{link.value}</p>
            </a>
          ))}
        </div>

        {/* Location bar */}
        <div className="contact-social-card flex items-center justify-center gap-2 mb-10">
          <MapPin className="w-4 h-4" style={{ color: 'var(--coral)' }} />
          <span className="text-[13px] font-medium" style={{ color: 'var(--ink-faint)' }}>Bartin, Turkey</span>
        </div>

        {/* Form Card */}
        <div className="contact-form-card bg-white rounded-3xl border" style={{ borderColor: 'rgba(0,0,0,0.04)' }}>
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 text-center px-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgb(240,253,244)' }}>
                <Check className="w-10 h-10 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-extrabold mb-2" style={{ color: 'var(--ink)' }}>Message Sent!</h3>
              <p className="text-[15px]" style={{ color: 'var(--ink-soft)' }}>Thank you for reaching out. I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10 space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.12em] mb-2" style={{ color: 'var(--ink-soft)' }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input"
                    placeholder="Your name"
                    required
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.12em] mb-2" style={{ color: 'var(--ink-soft)' }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input"
                    placeholder="your@email.com"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.12em] mb-2" style={{ color: 'var(--ink-soft)' }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="input"
                  placeholder="What's this about?"
                  disabled={loading}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.12em] mb-2" style={{ color: 'var(--ink-soft)' }}>Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="input resize-none"
                  placeholder="Tell me about your project..."
                  required
                  disabled={loading}
                />
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-50 border border-red-100">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-[13px] font-medium text-red-600">{error}</p>
                </div>
              )}

              {/* Button Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                <button type="submit" className="btn" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                  {loading ? (
                    <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>
                <div className="flex items-center justify-center sm:justify-end gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-40" />
                    <span className="relative rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[12px] font-medium" style={{ color: 'var(--ink-faint)' }}>Usually reply within 24h</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
