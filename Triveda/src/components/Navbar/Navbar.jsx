import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'
import Logo from '../Logo'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${open ? 'navbar-menu-open' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" aria-label="TRIVEDA EXPORTS - Home">
          <Logo variant={scrolled ? 'dark' : 'light'} />
        </a>

        <nav className={`navbar-links ${open ? 'open' : ''}`} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a
            className="btn btn-accent navbar-cta"
            href="https://wa.me/919175809636?text=Hello%20TRIVEDA%20EXPORTS%2C%20please%20send%20me%20your%20product%20catalogue."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Request Catalogue
          </a>
          <button
            className="navbar-toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
