import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { navLinks } from "../data/site";
import { scrollToSection, lockScroll } from "../lib/scroll";

export default function Navbar({ active = "home" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    lockScroll(open);
    return () => lockScroll(false);
  }, [open]);

  const go = (id) => (event) => {
    event.preventDefault();
    setOpen(false);
    scrollToSection(id);
  };

  const isSolid = scrolled || open;

  return (
    <header className={`navbar ${isSolid ? "navbar--solid" : ""} ${open ? "navbar--open" : ""}`}>
      <div className="navbar__inner">
        <a className="navbar__brand" href="#home" onClick={go("home")}>
          <Logo />
        </a>

        <nav
          id="site-menu"
          className={`navbar__menu ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`navbar__link ${active === link.id ? "is-active" : ""}`}
                  aria-current={active === link.id ? "true" : undefined}
                  onClick={go(link.id)}
                  style={{ "--i": navLinks.indexOf(link) }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--accent navbar__cta navbar__cta--mobile" href="#contact" onClick={go("contact")}>
            Enquire Now
            <Icon name="arrowRight" size={16} />
          </a>
        </nav>

        <div className="navbar__actions">
          <a className="btn btn--accent navbar__cta navbar__cta--desktop" href="#contact" onClick={go("contact")}>
            Enquire Now
            <Icon name="arrowRight" size={16} />
          </a>

          <button
            type="button"
            className={`navbar__toggle ${open ? "is-open" : ""}`}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
