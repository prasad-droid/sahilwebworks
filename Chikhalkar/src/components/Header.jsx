import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LOGO } from "@/assets/images";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
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
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="navbar__inner container">
        <a href="#home" className="navbar__brand" aria-label="CHIKHALKAR ENTERPRISES - Home">
          <img src={LOGO} alt="CHIKHALKAR ENTERPRISES logo" className="navbar__logo" />
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">CHIKHALKAR ENTERPRISES</span>
            <span className="navbar__brand-tag">Delivering Excellence Across Borders</span>
          </span>
        </a>

        <ul className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__mobile-cta">
            <a href="#contact" className="btn btn-primary btn--sm" onClick={() => setOpen(false)}>
              Request A Quote
            </a>
          </li>
        </ul>

        <div className="navbar__actions">
          <a href="#contact" className="btn btn-primary btn--sm navbar__cta">
            Request A Quote
          </a>
          <button
            className="navbar__toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
