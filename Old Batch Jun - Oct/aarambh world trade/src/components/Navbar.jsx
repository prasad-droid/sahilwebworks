import { useEffect, useState } from 'react';
import { Icon } from './Icons.jsx';
import { BUSINESS_NAME, LOGO, whatsappLink } from '../data/business.js';
import { useScrolled, useScrollSpy } from '../hooks/useScrollSpy.js';
import { useEnquiry } from '../context/EnquiryContext.jsx';

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'services', label: 'Services' },
  { id: 'why-choose-us', label: 'Why Choose Us' },
  { id: 'global-markets', label: 'Global Markets' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function Navbar() {
  const scrolled = useScrolled(40);
  const activeId = useScrollSpy(SECTION_IDS, { offset: 120 });
  const [menuOpen, setMenuOpen] = useState(false);
  const { startEnquiry } = useEnquiry();

  /* Lock the page behind the mobile menu. */
  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  /* Close the menu on Escape. */
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  /* Close the menu if the viewport grows to desktop width. */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const go = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const top = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top: Math.max(top, 0), behavior: reduce ? 'auto' : 'smooth' });
    /* Keep the URL shareable without triggering a jump. */
    window.history.replaceState(null, '', `#${id}`);
  };

  const isSolid = scrolled || menuOpen;

  return (
    <header className={`nav ${isSolid ? 'nav--solid' : 'nav--transparent'}`}>
      <div className="nav__inner container">
        <a
          className="nav__brand"
          href="#home"
          onClick={(e) => go(e, 'home')}
          aria-label={`${BUSINESS_NAME} - back to top`}
        >
          <span className="nav__brand-mark">
            <img src={LOGO.src} width="44" height="44" alt="" aria-hidden="true" />
          </span>
          <span className="nav__brand-text">
            <span className="nav__brand-name">{BUSINESS_NAME}</span>
            <span className="nav__brand-tagline">From India to the World</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => go(e, link.id)}
                  className={`nav__link ${activeId === link.id ? 'is-active' : ''}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--accent btn--sm nav__cta"
            href="#bulk-order"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              startEnquiry('', { anchor: '#bulk-order' });
            }}
          >
            Request a Quote
          </a>

          <button
            type="button"
            className={`nav__toggle ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="nav__toggle-box" aria-hidden="true">
              <span className="nav__toggle-bar" />
              <span className="nav__toggle-bar" />
              <span className="nav__toggle-bar" />
            </span>
          </button>
        </div>
      </div>

      {/* ---- Mobile panel ------------------------------------------- */}
      <div
        id="mobile-menu"
        className={`nav__mobile ${menuOpen ? 'is-open' : ''}`}
        hidden={!menuOpen}
      >
        <nav className="nav__mobile-inner" aria-label="Mobile">
          <ul className="nav__mobile-list">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.id}
                className="nav__mobile-item"
                style={{ transitionDelay: `${90 + i * 45}ms` }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={(e) => go(e, link.id)}
                  className={`nav__mobile-link ${activeId === link.id ? 'is-active' : ''}`}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <span className="nav__mobile-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__mobile-cta">
            <a
              className="btn btn--accent btn--block"
              href="#bulk-order"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                startEnquiry('', { anchor: '#bulk-order' });
              }}
              tabIndex={menuOpen ? 0 : -1}
            >
              Request a Quote
            </a>
            <a
              className="btn btn--ghost btn--block"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={menuOpen ? 0 : -1}
            >
              <Icon name="whatsapp" size={18} />
              WhatsApp Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
