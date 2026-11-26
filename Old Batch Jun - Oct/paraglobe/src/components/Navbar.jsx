import { useEffect, useState } from "react";
import { navLinks } from "../data/business.js";

const Logo = () => (
  <a href="#home" className="navbar__logo" aria-label="Paraglobe Exims — Home">
    <img src="/images/logo 2.png" alt="Paraglobe Exims logo" className="navbar__logo-img" />
    <span className="navbar__logo-text">
      <span className="navbar__brand">Paraglobe<span className="navbar__brand-part"> Exims</span></span>
      <span className="navbar__brand-sub">Inspiring solutions <br />with excellence</span>
    </span>
  </a>
);

export default function Navbar({ page = "home" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [page]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${open ? "navbar--open" : ""}`}>
      <nav className="navbar__inner " aria-label="Primary navigation">
        <Logo />

        <ul className={`navbar__links ${open ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${active === link.href.slice(1) ? "is-active" : ""}`}
                onClick={close}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#/catalog"
              className={`navbar__link navbar__link-catalog ${page === "catalog" ? "is-active" : ""}`}
              onClick={close}
            >
              Full Catalog
            </a>
          </li>
          <li className="navbar__cta-mobile">
            <a href="#contact" className="btn btn-primary navbar__cta" onClick={close}>
              Request a Quote
            </a>
          </li>
        </ul>

        <a href="#contact" className="btn btn-primary navbar__cta navbar__cta-desktop">
          Request a Quote
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? "Close menu" : "Open menu"}
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