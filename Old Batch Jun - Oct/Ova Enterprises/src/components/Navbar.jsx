import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { NAV_LINKS, PHONE_DISPLAY, WHATSAPP_URL } from "../data/site";
import logo from "../assets/images/logo.jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((l) => l.id);
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          current = id;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container navbar-inner">
          <a href="#home" className="logo" onClick={closeMenu} aria-label="Ovaa Enterprises Home">
            <span className="logo-badge">
              <img src={logo} alt="Ovaa Enterprises logo" />
            </span>
            <span className="logo-text">
              <span className="logo-name">
                OVAA<span>.</span>
              </span>
              <span className="logo-sub">Enterprises</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${active === link.id ? "active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp />
            {PHONE_DISPLAY}
          </a>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`nav-overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-label="Mobile navigation">
        <a href="#home" className="logo mobile-brand" onClick={closeMenu}>
          <span className="logo-badge">
            <img src={logo} alt="Ovaa Enterprises logo" />
          </span>
          <span className="logo-text">
            <span className="logo-name">
              OVAA<span>.</span>
            </span>
            <span className="logo-sub">Enterprises</span>
          </span>
        </a>
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="mobile-link"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="btn btn--whatsapp"
          onClick={closeMenu}
        >
          <FaWhatsapp /> WhatsApp Us
        </a>
      </aside>
    </>
  );
};

export default Navbar;
