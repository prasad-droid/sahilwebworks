import { useEffect, useState } from 'react';
import { business } from '../data/data';
import '../styles/navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Product', href: '#product' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Export', href: '#export' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      updateActive();
    };
    const updateActive = () => {
      let current = '#home';
      navLinks.forEach((link) => {
        const el = document.querySelector(link.href);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) current = link.href;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateActive();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const handleClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => handleClick('#home')} aria-label="Gouri Global Trade home">
          <img
            src="/images/logo.jpg"
            alt="GOURI GLOBAL TRADE logo"
            className="navbar__logo"
            loading="eager"
          />
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">GOURI GLOBAL TRADE</span>
            <span className="navbar__brand-sub">Merchant Exporter</span>
          </span>
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation" id="main-nav">
          <ul className="navbar__menu">
            {navLinks.map((link) => (
              <li key={link.href} className="navbar__item">
                <a
                  href={link.href}
                  className={`navbar__link ${active === link.href ? 'is-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="btn btn--primary navbar__cta"
            onClick={() => handleClick('#contact')}
          >
            Request a Quote
          </button>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'is-active' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span className="hamburger__line" />
          <span className="hamburger__line" />
          <span className="hamburger__line" />
        </button>
      </div>
    </header>
  );
}
