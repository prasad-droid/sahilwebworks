import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navLinks, company } from '../data/siteData'
import '../styles/Navbar.css'

function Logo() {
  return (
    <a href="#home" className="navbar__brand" aria-label="Trans-Aura International — home">
      <span className="navbar__logo" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="34" height="34" fill="none">
          <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="2.4" />
          <ellipse cx="24" cy="24" rx="6" ry="13" stroke="currentColor" strokeWidth="2" />
          <path d="M11 24h26M24 11v26" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="24" cy="24" r="2.6" fill="currentColor" />
        </svg>
      </span>
      <span className="navbar__namewrap">
        <span className="navbar__name">Trans-Aura</span>
        <span className="navbar__tag">International</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    return () => document.body.classList.remove('no-scroll')
  }, [open])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    const ids = navLinks.map((l) => l.id)
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}${open ? ' navbar--open' : ''}`}>
      <nav className="navbar__inner container" aria-label="Primary navigation">
        <Logo />

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.id)
                }}
                className={active === link.id ? 'is-active' : ''}
                aria-current={active === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a
            href="#quote"
            className="btn btn--primary btn--sm navbar__cta"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('quote')
            }}
          >
            Request a Quote
            <ArrowRight size={15} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`navbar__mobile${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <ul className="navbar__mobile-list">
          {navLinks.map((link, i) => (
            <li
              key={link.id}
              style={{ '--item': i }}
              className={active === link.id ? 'is-active' : ''}
            >
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.id)
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-foot">
          <a
            href="#quote"
            className="btn btn--primary"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('quote')
            }}
          >
            Request a Quote
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="navbar__mobile-phone">
            {company.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  )
}