import { useEffect, useState } from 'react'
import { company, navLinks } from '../data/siteData'
import { useScrollSpy, useMediaQuery } from '../hooks/useReveal'
import Icon from './Icons'
import '../styles/Navbar.css'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 980px)')
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (isDesktop) setMenuOpen(false)
  }, [isDesktop])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}>
      <div className="container container--wide navbar__inner">
        <a href="#home" className="navbar__brand" aria-label={`${company.name} — home`} onClick={handleNavClick}>
          <span className="navbar__logo" aria-hidden="true">
            <svg viewBox="0 0 48 48" width="38" height="38" role="presentation">
              <rect x="1.5" y="1.5" width="45" height="45" rx="10" fill="currentColor" />
              <path
                d="M16 32V16h16"
                fill="none"
                stroke="#fff"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24 24h8v8h-8z"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="3.4"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="navbar__brand-text">
            <strong>GLOBAL</strong> ENTERPRISES
            <small>Engineering Goods Supply</small>
          </span>
        </a>

        <nav
          className={`navbar__nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary"
          id="primary-navigation"
        >
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`navbar__link ${activeId === link.id ? 'is-active' : ''}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__mobile-actions">
            <a
              href={`mailto:${company.email}`}
              className="navbar__mobile-contact"
              onClick={handleNavClick}
            >
              <Icon name="mail" size={18} />
              {company.email}
            </a>
            <a href="#enquiry" className="btn btn--primary btn--block" onClick={handleNavClick}>
              Send an Enquiry
            </a>
          </div>
        </nav>

        <div className="navbar__actions">
          <a href="#enquiry" className="btn btn--primary navbar__cta">
            Send an Enquiry
            <Icon name="arrowRight" size={17} className="icon-trailing" />
          </a>
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={26} />
          </button>
        </div>
      </div>
      <button
        type="button"
        className={`navbar__scrim ${menuOpen ? 'is-visible' : ''}`}
        aria-hidden={!menuOpen}
        tabIndex={-1}
        aria-label="Close menu"
        onClick={() => setMenuOpen(false)}
      />
    </header>
  )
}
