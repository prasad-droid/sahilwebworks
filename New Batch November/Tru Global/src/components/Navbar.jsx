import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data/siteData'
import { useActiveSection } from '../hooks/useActiveSection'
import '../styles/Navbar.css'

const sectionIds = navLinks.map((link) => link.href.slice(1))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled || menuOpen ? ' navbar--solid' : ''}${menuOpen ? ' navbar--open' : ''}`}>
      <div className="container navbar__inner">
        <Logo />

        <nav className="navbar__links" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const id = link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`navbar__link${activeId === id ? ' is-active' : ''}`}
                aria-current={activeId === id ? 'page' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="navbar__actions">
          <a className="btn btn--primary navbar__cta" href="#contact">
            Request a Quote <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            className="navbar__toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`navbar__mobile${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const id = link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`navbar__mobile-link${activeId === id ? ' is-active' : ''}`}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            )
          })}
          <a className="btn btn--primary navbar__mobile-cta" href="#contact" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
            Request a Quote <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
