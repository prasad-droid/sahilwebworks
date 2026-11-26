import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, SITE } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.getElementById(href.slice(1)),
    ).filter(Boolean);

    if (!sections.length || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const onResize = () => {
      if (window.innerWidth > 1120) setMenuOpen(false);
    };

    document.body.classList.add("menu-open");
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-nav__inner container">
        <a
          className="site-nav__brand"
          href="#home"
          aria-label={`${SITE.name} — back to top`}
          onClick={closeMenu}
        >
          <Logo />
        </a>

        <nav className="site-nav__links" aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={activeHref === href ? "is-active" : undefined}
              aria-current={activeHref === href ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary btn--small site-nav__cta" href="#products">
          Explore Our Products
          <ArrowUpRight size={16} strokeWidth={2.1} aria-hidden="true" />
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className={`site-nav__toggle${menuOpen ? " is-open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={22} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Menu size={22} strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`site-nav__mobile${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="site-nav__mobile-links" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }, index) => (
            <a
              key={href}
              href={href}
              tabIndex={menuOpen ? 0 : -1}
              className={activeHref === href ? "is-active" : undefined}
              aria-current={activeHref === href ? "location" : undefined}
              onClick={closeMenu}
              style={{ "--item-delay": `${index * 35}ms` }}
            >
              <span>{label}</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="site-nav__mobile-foot">
          <a
            className="btn btn--primary"
            href="#products"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            Explore Our Products
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <p>
            India <a href="tel:+919930439581">+91 9930439581</a>
            <span aria-hidden="true">·</span>
            UAE <a href="tel:+971503879581">+971 503879581</a>
          </p>
        </div>
      </div>
    </header>
  );
}
