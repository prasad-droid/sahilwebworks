import { useEffect, useState } from 'react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';
import useActiveSection from '../hooks/useActiveSection';
import '../styles/Navbar.css';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'products', label: 'Products' },
  { id: 'markets', label: 'Markets' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const activeSection = useActiveSection(navLinks.map((link) => link.id));
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth > 980) setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.classList.remove('nav-open');
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <Logo className="navbar__logo" />

        <button
          type="button"
          className={`navbar__menu-toggle${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar__menu-toggle-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}
          aria-label="Primary navigation"
        >
          <ul className="navbar__nav-list">
            {navLinks.map((link) => (
              <li className="navbar__nav-item" key={link.id}>
                <a
                  className={`navbar__nav-link${
                    activeSection === link.id ? ' navbar__nav-link--active' : ''
                  }`}
                  href={`#${link.id}`}
                  aria-current={activeSection === link.id ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="btn btn--gold navbar__mobile-inquiry" href="#contact" onClick={closeMenu}>
            Send Inquiry
            <WhatsAppIcon size={18} />
          </a>
        </nav>

        <div className="navbar__actions">
          <a className="btn btn--gold navbar__inquiry" href="#contact">
            Send Inquiry
            <span aria-hidden="true">
              <WhatsAppIcon size={18} />
            </span>
          </a>
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="navbar__backdrop"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
