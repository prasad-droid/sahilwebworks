import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/#about" },
  { label: "Products", to: "/#products" },
  { label: "Services", to: "/#services" },
  { label: "Testimonials", to: "/#testimonials" },
  { label: "Order Here", to: "/#order" },
  { label: "Contact", to: "/#contact" },
];

const Navbar = () => {
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

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled || open ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img
            className="navbar__logo-img"
            src="/images/logo/logo.jpeg"
            alt="GHONS Global Impex logo"
            width="44"
            height="44"
          />
          <span className="navbar__logo-text">
            GHONS
            <span className="navbar__logo-sub">Global Impex</span>
          </span>
        </Link>

        <nav className={`navbar__menu ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "is-active" : ""}`
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
            <a
              className="btn btn-gold navbar__cta"
              href="mailto:ghonsglobal@gmail.com?subject=Request%20Catalogue%20-%20GHONS%20Global%20Impex"
              onClick={closeMenu}
            >
              Request Catalogue
            </a>
        </nav>

        <button
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
