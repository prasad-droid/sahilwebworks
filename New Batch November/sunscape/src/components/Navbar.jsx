import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import { site } from '../data/site'
import { scrollToSection } from '../utils/scroll'
import '../styles/navbar.css'

export default function Navbar({ onQuote }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    let frame = null

    const update = () => {
      frame = null
      setScrolled(window.scrollY > 28)

      let current = 'home'
      site.nav.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= window.innerHeight * 0.36) {
          current = id
        }
      })
      setActiveSection(current)
    }

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.body.classList.add('menu-is-open')
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.classList.remove('menu-is-open')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const handleNavClick = (event, id) => {
    event.preventDefault()
    setMenuOpen(false)
    scrollToSection(id)
  }

  const handleQuote = () => {
    setMenuOpen(false)
    onQuote()
  }

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <nav className="container nav" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={(event) => handleNavClick(event, 'home')}>
          <img
            className="brand__mark"
            src={scrolled || menuOpen ? site.logo : site.logoLight}
            alt=""
            width="44"
            height="44"
          />
          <span className="brand__text">
            <strong>Sunscape</strong>
            <span>Enterprises</span>
          </span>
        </a>

        <ul id="primary-navigation" className={`nav__links${menuOpen ? ' is-open' : ''}`}>
          {site.nav.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'is-active' : ''}
                aria-current={activeSection === link.id ? 'page' : undefined}
                onClick={(event) => handleNavClick(event, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav__mobile-cta">
            <button type="button" className="btn btn--gold" onClick={handleQuote}>
              Get a Quote <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </li>
        </ul>

        <div className="nav__actions">
          <a className="nav__phone" href={`tel:+917770007019`}>
            <Phone size={15} aria-hidden="true" />
            <span>+91 7770007019</span>
          </a>
          <button type="button" className="btn btn--gold btn--sm nav__quote" onClick={handleQuote}>
            Get a Quote <ArrowUpRight size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  )
}
