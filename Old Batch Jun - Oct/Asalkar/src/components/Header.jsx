import { useEffect, useState } from "react";
import logo from "../assets/logos/logo.jpeg";
import "../styles/header.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1))
      .filter((id) => document.getElementById(id))
      .map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          <a href="#home" className="logo" aria-label="Asalkaar Global Exim Home">
            <img className="logo-mark" src={logo} alt="Asalkaar Global Exim logo" />
            <span className="logo-text">
              <span className="name">
                Asalkaar <em>Global Exim</em>
              </span>
              <span className="tag">Premium Textile Exports</span>
            </span>
          </a>

          <nav className="nav-desktop" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${active === link.href ? "active" : ""}`}
              >
                {link.label}
              </a>
            ))}
            <a href="#inquiry" className="header-cta">
              Request A Quote
            </a>
          </nav>

          <button
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`menu-backdrop ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />

      <nav
        className={`nav-mobile ${open ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`nav-link ${active === link.href ? "active" : ""}`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href="#inquiry" className="header-cta" onClick={() => setOpen(false)}>
          Request A Quote
        </a>
      </nav>
    </>
  );
};

export default Header;
