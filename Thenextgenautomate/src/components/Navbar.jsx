import { useEffect, useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Testimonials', href: '#testimonials' },
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

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a className="navbar-logo" href="#home" onClick={closeMenu}>
          <div className="logo-mark">NG</div>
          <div className="logo-text">
            <span className="logo-title">Thenextgenautomate</span>
            <span className="logo-subtitle">.co.in</span>
          </div>
        </a>
        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="navbar-cta-mobile" href="#inquiry" onClick={closeMenu}>
            Request a Quote
          </a>
        </nav>
        <div className="navbar-actions">
          <a className="btn btn-primary navbar-cta" href="#inquiry">
            Request a Quote
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
