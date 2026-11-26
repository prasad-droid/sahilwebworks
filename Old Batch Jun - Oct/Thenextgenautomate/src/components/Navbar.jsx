import { useEffect, useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Workflows', href: '#workflows' },
  { label: 'Process', href: '#process' },
  { label: 'Our Promise', href: '#promise' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a className="navbar-logo" href="#home" onClick={closeMenu}>
          <img src="/Logo.jpeg" alt="The NextGen Automate logo" className="navbar-logo-img" />
          <span className="logo-text">
            <span className="logo-title">The NextGen Automate</span>
            <span className="logo-subtitle">automation studio · India</span>
          </span>
        </a>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="navbar-cta-mobile btn btn-primary" href="#inquiry" onClick={closeMenu}>
            Book a free audit
          </a>
        </nav>

        <div className="navbar-actions">
          <a className="btn btn-primary navbar-cta" href="#inquiry">
            Book a free audit
          </a>
          <button
            className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
