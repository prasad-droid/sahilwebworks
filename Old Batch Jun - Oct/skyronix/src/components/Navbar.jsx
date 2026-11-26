import { useEffect, useState } from "react";
import { useScrollSpy } from "../hooks/index.js";
import { WhatsApp, Menu, X, ArrowUpRight } from "./Icons.jsx";
import logo from "../logo.png";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "why-us", label: "Why Us" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const active = useScrollSpy(
    LINKS.map((l) => l.id),
    180,
  );
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container navbar__inner">
          <a
            className="brand"
            href="#home"
            aria-label="Skyronix Overseas Pvt. Ltd. — Home"
          >
            <img src={logo} alt="Skyronix Overseas" className="brand__logo" />
            <div>
              <span className="brand__name">
                SKY<span>RONIX</span>
              </span>
              <p className="brand__sub">Overseas Pvt. Ltd.</p>
            </div>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${active === link.id ? "is-active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar__cta">
            <a href="#contact" className="btn btn--primary btn--sm">
              Get a Quote
              <ArrowUpRight size={16} />
            </a>
            <button
              type="button"
              className={`hamburger ${open ? "is-open" : ""}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="mobile-menu__links" aria-label="Mobile">
          {LINKS.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="mobile-menu__link"
              style={{ "--m-i": i }}
              onClick={close}
            >
              {link.label}
              <ArrowUpRight size={20} />
            </a>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <a
            className="btn btn--whatsapp"
            href="https://wa.me/919309187314?text=Hello%20Skyronix%20Overseas%20Pvt.%20Ltd.%2C%20I%20would%20like%20to%20discuss%20a%20product%20sourcing%2Fexport%20requirement."
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            <WhatsApp size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
