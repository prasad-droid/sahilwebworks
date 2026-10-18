import { useEffect, useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { SITE, NAV_LINKS } from "../../data/siteData";
import "./Navbar.css";

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

  const close = () => setOpen(false);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={close} aria-label={`${SITE.name} home`}>
          <img src="/logo.png" alt="Nilipar Enterprises logo" className="navbar__logo" />
          <span className="navbar__name">
            Nilipar <em>Enterprises</em>
          </span>
        </a>

        <nav className="navbar__menu" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link" onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="#contact" className="btn btn--primary navbar__cta">
            <FiDownload aria-hidden="true" /> Request Catalogue
          </a>
          <button
            className="navbar__toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      <div className={`navbar__mobile${open ? " navbar__mobile--open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__mobile-link" onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn--primary navbar__mobile-cta" onClick={close}>
          <FiDownload aria-hidden="true" /> Request Catalogue
        </a>
      </div>
    </header>
  );
}
