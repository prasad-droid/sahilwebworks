import { useCallback, useEffect, useState } from 'react'
import { navLinks, site } from '../data/site.js'
import useMediaQuery from '../hooks/useMediaQuery.js'
import useLockBodyScroll from '../hooks/useLockBodyScroll.js'
import useScrollSpy from '../hooks/useScrollSpy.js'
import '../styles/navbar.css'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useLockBodyScroll(isMenuOpen)

  // Close the mobile menu when the viewport grows to the desktop layout.
  useEffect(() => {
    if (isDesktop && isMenuOpen) setIsMenuOpen(false)
  }, [isDesktop, isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  const scrollToSection = (event, id) => {
    event.preventDefault()
    closeMenu()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Keep the URL shareable without triggering a jump.
    window.history.replaceState(null, '', `#${id}`)
  }

  const classes = [
    'navbar',
    isScrolled ? 'navbar--scrolled' : '',
    isMenuOpen ? 'navbar--open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      <div className="navbar__inner container">
        <a
          className="navbar__brand"
          href="#home"
          onClick={(event) => scrollToSection(event, 'home')}
          aria-label={`${site.name} — home`}
        >
          <img className="navbar__logo" src={site.logo} alt="" width="128" height="42" />
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className={`navbar__link ${activeId === link.id ? 'is-active' : ''}`.trim()}
                  href={`#${link.id}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  onClick={(event) => scrollToSection(event, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <a className="btn btn--primary btn--sm navbar__cta" href="#products" onClick={(event) => scrollToSection(event, 'products')}>
            Explore Products
          </a>
          <button
            type="button"
            className={`navbar__toggle ${isMenuOpen ? 'is-open' : ''}`.trim()}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`navbar__mobile ${isMenuOpen ? 'is-open' : ''}`.trim()}
        hidden={!isMenuOpen}
      >
        <nav aria-label="Mobile">
          <ul className="navbar__mobile-list">
            {navLinks.map((link, index) => (
              <li key={link.id} style={{ '--i': index }}>
                <a
                  className={`navbar__mobile-link ${activeId === link.id ? 'is-active' : ''}`.trim()}
                  href={`#${link.id}`}
                  onClick={(event) => scrollToSection(event, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="btn btn--primary navbar__mobile-cta"
          href="#products"
          onClick={(event) => scrollToSection(event, 'products')}
        >
          Explore Products
        </a>
      </div>

      {/* Decorative dismiss layer. Keyboard users close the menu with Escape
          or the toggle, so this is hidden from assistive technology. */}
      <div
        className={`navbar__scrim ${isMenuOpen ? 'is-open' : ''}`.trim()}
        aria-hidden="true"
        onClick={closeMenu}
      />
    </header>
  )
}
