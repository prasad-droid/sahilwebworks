import { useEffect, useState } from 'react'
import { company, navLinks } from '../data/company.js'
import { images } from '../data/images.js'
import { Icon } from './Icons.jsx'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) {
    const reduce =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    })
  }
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return (
    <div className="scroll-progress" aria-hidden="true">
      <span style={{ width: `${progress}%` }} />
    </div>
  )
}

export default function Navbar({ onRequestQuote }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => {
      if (e.key === 'Escape' && open) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const handleNav = (id) => {
    setOpen(false)
    requestAnimationFrame(() => scrollToId(id))
  }

  const handleQuote = () => {
    setOpen(false)
    onRequestQuote()
  }

  return (
    <>
      <ScrollProgress />
      <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
        <div className="navbar__inner container">
          <a
            href="#home"
            className="navbar__brand"
            onClick={(e) => {
              e.preventDefault()
              handleNav('home')
            }}
            aria-label="Aviyana Enterprises — back to top"
          >
            <span className="navbar__mark" aria-hidden="true">
              <img src={images.logo.src} alt="" />
            </span>
            <span className="navbar__wordmark">
              <span className="navbar__name">AVIYANA</span>
              <span className="navbar__sub">ENTERPRISES</span>
            </span>
          </a>

          <nav className="navbar__nav" aria-label="Primary">
            <ul className="navbar__list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNav(link.id)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            <button type="button" className="btn btn--gold btn--sm navbar__cta" onClick={handleQuote}>
              Request a Quote
            </button>
            <button
              type="button"
              className="navbar__toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? 'close' : 'menu'} size={26} />
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={`mobile-menu${open ? ' is-open' : ''}`}>
          <nav className="mobile-menu__nav" aria-label="Mobile">
            <ul className="mobile-menu__list">
              {navLinks.map((link, i) => (
                <li key={link.id} style={{ '--i': i }}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNav(link.id)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-menu__footer">
            <button type="button" className="btn btn--gold btn--lg" onClick={handleQuote}>
              Request a Quote
            </button>
            <a
              href={`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="mobile-menu__wa"
            >
              <Icon name="whatsapp" size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </header>
    </>
  )
}