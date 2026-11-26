import { useEffect, useState } from "react";
import { hasTestimonials } from "../data/testimonials";
import "../styles/navbar.css";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Our Process", id: "process" },
  { label: "Why Us", id: "why-us" },
  ...(hasTestimonials ? [{ label: "Testimonials", id: "testimonials" }] : []),
  { label: "Contact", id: "contact" },
];

export default function Navbar({ onRequestQuote }) {
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
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
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

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleQuoteClick = (event) => {
    event.preventDefault();
    setOpen(false);
    if (onRequestQuote) onRequestQuote();
  };

  return (
    <header className={`navbar ${scrolled || open ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a
          href="#home"
          className="navbar__brand"
          onClick={(e) => handleNavClick(e, "home")}
          aria-label="Varidian Exim — home"
        >
          <img
            src="/images/logo.jpg"
            alt="Varidian Exim logo"
            className="navbar__logo"
            width="44"
            height="44"
          />
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">Varidian Exim</span>
            <span className="navbar__brand-tagline">Quality. Reliability. Global Reach.</span>
          </span>
        </a>

        <nav className={`navbar__menu ${open ? "navbar__menu--open" : ""}`} aria-label="Primary">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.id} className="navbar__item">
                <a
                  href={`#${link.id}`}
                  className={`navbar__link ${active === link.id ? "is-active" : ""}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn-accent navbar__cta navbar__cta--mobile"
            onClick={handleQuoteClick}
          >
            Request a Quote
          </button>
        </nav>

        <button
          type="button"
          className="btn btn-accent navbar__cta navbar__cta--desktop"
          onClick={handleQuoteClick}
        >
          Request a Quote
        </button>

        <button
          type="button"
          className={`hamburger ${open ? "hamburger--open" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-menu"
        >
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
        </button>
      </div>
    </header>
  );
}