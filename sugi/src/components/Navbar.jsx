import { useState, useEffect } from "react";
import "../styles/navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ ctaHref = "#enquiry" }) {
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

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${open ? "navbar--open" : ""}`}>
      <nav className="navbar__inner container" aria-label="Primary">
        <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__brand-name">SUGI INTERNATIONAL</span>
          <span className="navbar__brand-sub">PRIVATE LIMITED</span>
        </a>

        <ul className={`navbar__links ${open ? "is-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta-mobile">
            <a href={ctaHref} className="btn btn-primary" onClick={() => setOpen(false)}>
              Send Enquiry
            </a>
          </li>
        </ul>

        <a href={ctaHref} className="navbar__cta btn btn-primary">
          Send Enquiry
        </a>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
      </nav>
    </header>
  );
}
