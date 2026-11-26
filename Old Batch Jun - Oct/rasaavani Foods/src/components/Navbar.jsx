import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { navLinks, site } from '../data/site.js'
import useScrollSpy from '../hooks/useScrollSpy.js'
import useBodyScrollLock from '../hooks/useBodyScrollLock.js'
import { IconMenu, IconClose, IconWhatsApp } from './Icons.jsx'
import '../styles/navbar.css'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  useBodyScrollLock(menuOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const solid = scrolled || menuOpen

  return (
    <header
      className={`navbar ${solid ? 'navbar--solid' : 'navbar--transparent'}`}
    >
      <div className="navbar__inner container">
        <a href="#home" className="navbar__brand" aria-label="Rasavaani home">
          <Logo variant={solid ? 'dark' : 'light'} />
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`navbar__link ${
                    activeId === link.id ? 'is-active' : ''
                  }`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <a href="#products" className="btn btn--primary btn--sm navbar__cta">
            Discover Our Products
          </a>
          <button
            type="button"
            className="navbar__toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div
        className={`navbar__overlay ${menuOpen ? 'is-open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
        aria-label="Mobile navigation"
      >
        <ul className="navbar__mobile-list">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              style={{ '--i': index }}
              className={activeId === link.id ? 'is-active' : ''}
            >
              <a
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__mobile-foot">
          <a
            href="#products"
            className="btn btn--primary btn--block"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            Discover Our Products
          </a>
          <a
            href={`mailto:${site.email}`}
            className="navbar__mobile-mail"
            tabIndex={menuOpen ? 0 : -1}
          >
            {site.email}
          </a>
          <span className="navbar__mobile-wa" aria-hidden="true">
            <IconWhatsApp /> {site.phoneDisplay}
          </span>
        </div>
      </aside>
    </header>
  )
}
