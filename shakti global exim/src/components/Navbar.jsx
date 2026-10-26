import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  X,
} from 'lucide-react'
import Logo from './Logo'
import { company, navItems, whatsappMessages } from '../data/siteData'
import { getWhatsAppUrl } from '../utils/links'
import '../styles/Navbar.css'

const trackedSections = [
  'home',
  'about',
  'products',
  'services',
  'why-us',
  'testimonials',
  'contact',
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const probe = window.scrollY + window.innerHeight * 0.3
      let current = 'home'

      trackedSections.forEach((id) => {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= probe) {
          current = id
        }
      })

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8

      setActiveSection(nearBottom ? 'contact' : current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setDropdownOpen(false)
      }
    }

    const onPointerDown = (event) => {
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [dropdownOpen])

  const closeMenus = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  const isItemActive = (item) => {
    if (item.section === 'products') {
      return activeSection === 'products' || activeSection === 'services'
    }
    return activeSection === item.section
  }

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <p className="topbar__note">
            <span className="topbar__dot" aria-hidden="true" />
            India-based B2B food exports
          </p>
          <div className="topbar__links">
            <a href={company.phoneHref} className="topbar__link">
              <Phone size={13} aria-hidden="true" />
              {company.phoneDisplay}
            </a>
            <a href={company.emailHref} className="topbar__link">
              <Mail size={13} aria-hidden="true" />
              {company.email}
            </a>
            <a
              href={getWhatsAppUrl(whatsappMessages.general)}
              className="topbar__link topbar__link--whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={13} aria-hidden="true" />
              WhatsApp
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container site-header__inner">
          <a
            href="#home"
            className="site-header__brand"
            aria-label="Shakti Global Exim — go to home"
            onClick={closeMenus}
          >
            <Logo />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <ul className="desktop-nav__list">
              {navItems.map((item) => {
                const active = isItemActive(item)

                if (item.children) {
                  return (
                    <li
                      className={`nav-dropdown ${
                        dropdownOpen ? 'is-open' : ''
                      }`}
                      key={item.label}
                      ref={dropdownRef}
                    >
                      <button
                        type="button"
                        className={`nav-link nav-link--button ${
                          active ? 'is-active' : ''
                        }`}
                        aria-expanded={dropdownOpen}
                        aria-controls="products-services-menu"
                        onClick={() => setDropdownOpen((open) => !open)}
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className="nav-link__chevron"
                          aria-hidden="true"
                        />
                      </button>

                      <div
                        className="nav-dropdown__panel"
                        id="products-services-menu"
                      >
                        <p className="nav-dropdown__eyebrow">Explore</p>
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="nav-dropdown__link"
                            onClick={closeMenus}
                          >
                            <span>{child.label}</span>
                            <ArrowUpRight size={14} aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    </li>
                  )
                }

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`nav-link ${active ? 'is-active' : ''}`}
                      aria-current={active ? 'location' : undefined}
                      onClick={closeMenus}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="site-header__actions">
            <a
              className="header-whatsapp"
              href={getWhatsAppUrl(whatsappMessages.general)}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with Shakti Global Exim on WhatsApp"
            >
              <MessageCircle size={17} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#quote"
              className="btn btn--primary header-quote"
              onClick={closeMenus}
            >
              Request a Quote
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => {
                setMenuOpen((open) => !open)
                setDropdownOpen(false)
              }}
            >
              {menuOpen ? (
                <X size={23} aria-hidden="true" />
              ) : (
                <Menu size={23} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
          id="mobile-navigation"
        >
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <ul className="mobile-nav__list">
              {navItems.map((item) =>
                item.children ? (
                  <li className="mobile-nav__group" key={item.label}>
                    <span className="mobile-nav__group-label">
                      {item.label}
                    </span>
                    <ul className="mobile-nav__sublist">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="mobile-nav__sublink"
                            onClick={closeMenus}
                          >
                            {child.label}
                            <ArrowUpRight size={15} aria-hidden="true" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`mobile-nav__link ${
                        isItemActive(item) ? 'is-active' : ''
                      }`}
                      onClick={closeMenus}
                    >
                      {item.label}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </li>
                ),
              )}
            </ul>

            <div className="mobile-menu__footer">
              <a href="#quote" className="btn btn--primary" onClick={closeMenus}>
                Request a Quote
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <div className="mobile-menu__contact">
                <a href={company.phoneHref}>
                  <Phone size={15} aria-hidden="true" />
                  {company.phoneDisplay}
                </a>
                <a href={company.emailHref}>
                  <Mail size={15} aria-hidden="true" />
                  {company.email}
                </a>
                <a
                  href={getWhatsAppUrl(whatsappMessages.general)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  WhatsApp enquiry
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
