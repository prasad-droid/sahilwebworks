import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo/logo.png";
import { whatsappLink, SITE } from "../../data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/#why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="SATBHAI EXIM - Home">
          <img src={logo} alt="SATBHAI EXIM logo" width="46" height="46" />
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">SATBHAI EXIM</span>
            <span className="navbar__logo-tagline">Quality Product - Global Reach</span>
          </span>
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `navbar__link ${isActive && link.to !== "/" ? "is-active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__cta">
          <a
            className="btn btn--outline btn--sm"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
          <Link className="btn btn--primary btn--sm" to="/contact">
            Request a Quote
          </Link>
        </div>

        <button
          className="navbar__hamburger"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) =>
              `mobile-menu__link ${isActive && link.to !== "/" ? "is-active" : ""}`
            }
            onClick={handleLinkClick}
          >
            {link.label}
          </NavLink>
        ))}
        <div className="mobile-menu__ctas">
          <a
            className="btn btn--whatsapp btn--sm"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
          <Link className="btn btn--primary btn--sm" to="/contact" onClick={handleLinkClick}>
            Request a Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}
