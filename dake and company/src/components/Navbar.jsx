import { useEffect, useState } from 'react'
import { BUSINESS_NAME, LOGO_PRIMARY } from '../data/business.js'
import { useScrolled, useActiveSection } from '../hooks/useScroll.js'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'products', label: 'Products' },
  { id: 'why-choose-us', label: 'Why Choose Us' },
  { id: 'contact', label: 'Contact Us' },
]

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const top = el.getBoundingClientRect().top + window.scrollY - 88
  window.scrollTo({ top: Math.max(top, 0), behavior: reduce ? 'auto' : 'smooth' })
}

export function Navbar() {
  const scrolled = useScrolled(40)
  const activeId = useActiveSection(SECTION_IDS, 110)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 880px)')
    const onChange = (event) => {
      if (event.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const go = (event, id) => {
    event.preventDefault()
    setMenuOpen(false)
    scrollTo(id)
    window.history.replaceState(null, '', `#${id}`)
  }

  const solid = scrolled || menuOpen

  return (
    <header className={`nav ${solid ? 'nav--solid' : 'nav--transparent'}`}>
      <div className="nav__inner container">
        <a className="nav__brand" href="#home" onClick={(event) => go(event, 'home')} aria-label={`${BUSINESS_NAME} - back to home`}>
          <span className="nav__brand-mark">
            <img src={LOGO_PRIMARY} alt="" aria-hidden="true" />
          </span>
          <span className="nav__brand-text">
            <span className="nav__brand-name">{BUSINESS_NAME}</span>
            <span className="nav__brand-tagline">Trade Beyond Boundaries</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary navigation">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(event) => go(event, link.id)}
                  className={`nav__link ${activeId === link.id ? 'is-active' : ''}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <a className="btn btn--primary" href="#inquiry" onClick={(event) => go(event, 'inquiry')}>
            Request a Quote
          </a>
          <button
            type="button"
            className="nav__toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`nav__mobile ${menuOpen ? 'is-open' : ''}`} hidden={!menuOpen}>
        <nav className="nav__mobile-inner" aria-label="Mobile navigation">
          <ul className="nav__mobile-list">
            {NAV_LINKS.map((link, index) => (
              <li key={link.id} className="nav__mobile-item">
                <a
                  href={`#${link.id}`}
                  onClick={(event) => go(event, link.id)}
                  className={`nav__mobile-link ${activeId === link.id ? 'is-active' : ''}`}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <span className="nav__mobile-num">{String(index + 1).padStart(2, '0')}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__mobile-cta">
            <a className="btn btn--primary btn--block" href="#inquiry" onClick={(event) => go(event, 'inquiry')} tabIndex={menuOpen ? 0 : -1}>
              Request a Quote
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
