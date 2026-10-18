import { useEffect, useState } from "react";
import { navLinks } from "../data/site";
import "../styles/navbar.css";

const SECTION_IDS = [
  "home",
  "about",
  "why",
  "products",
  "markets",
  "certifications",
  "gallery",
  "contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-38% 0px -56% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled || open ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={close}>
          <img
            src="/images/logo.jpeg"
            alt="A1 Royal Exim logo"
            className="navbar__logo"
            width="40"
            height="40"
          />
          <span className="navbar__name">
            A1 Royal Exim
            <small>Quality Beyond Borders</small>
          </span>
        </a>

        <button
          type="button"
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close main menu" : "Open main menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-menu"
          className={`navbar__menu ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href.slice(1) ? "is-active" : ""}
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--gold navbar__cta" onClick={close}>
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}