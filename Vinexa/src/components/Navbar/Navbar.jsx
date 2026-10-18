import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes, FaChevronRight } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { whatsappLink } from "../../data/siteConfig";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/affiliations", label: "Affiliations" },
  { to: "/blog", label: "Blog" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <div className="container navbar__inner">
          <Logo />

          <nav aria-label="Primary" className="navbar__links">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `navbar__link${isActive ? " navbar__link--active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__cta">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__whatsapp"
              aria-label="Open WhatsApp chat"
            >
              <FaWhatsapp size={19} />
            </a>
            <NavLink to="/request-quote" className="btn btn--gold btn--sm">
              Request a Quote
            </NavLink>
            <button
              type="button"
              className="navbar__toggle"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
      <div className={`menu-panel${menuOpen ? " menu-panel--open" : ""}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div className="menu-panel__head">
          <Logo />
          <button
            type="button"
            className="menu-panel__close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `menu-panel__link${isActive ? " menu-panel__link--active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              <FaChevronRight size={14} aria-hidden="true" />
            </NavLink>
          ))}
        </nav>
        <div className="menu-panel__cta">
          <NavLink to="/request-quote" className="btn btn--gold btn--block">
            Request a Quote
          </NavLink>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--block">
            <FaWhatsapp size={17} /> WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
