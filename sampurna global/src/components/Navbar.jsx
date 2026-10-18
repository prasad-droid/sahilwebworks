import React, { useCallback, useEffect, useState } from "react";
import { siteConfig } from "../data/siteConfig.js";
import { useLockBodyScroll } from "../hooks/useReveal.js";
import {
  IconMenu,
  IconClose,
  IconArrowRight,
  IconWhatsApp,
} from "./Icons.jsx";
import "../styles/Navbar.css";

/**
 * Sticky, responsive navigation bar with scroll-spy active states,
 * a smooth mobile menu, and a prominent "Enquire Now" CTA.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useLockBodyScroll(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [...siteConfig.navLinks.map((l) => l.id), "enquiry"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  }, []);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    goTo(id);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="navbar__inner container" aria-label="Primary navigation">
        <a
          className="navbar__brand"
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          aria-label={`${siteConfig.brand.name} — home`}
        >
          <span className="navbar__logo" aria-hidden="true">
            S
          </span>
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">{siteConfig.brand.name}</span>
            <span className="navbar__brand-tagline">
              {siteConfig.brand.tagline}
            </span>
          </span>
        </a>

        <ul className="navbar__links" role="list">
          {siteConfig.navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`navbar__link ${
                  activeId === link.id ? "is-active" : ""
                }`}
                aria-current={activeId === link.id ? "page" : undefined}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a
            className="navbar__wa"
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            <IconWhatsApp />
          </a>
          <button
            type="button"
            className="btn btn--primary btn--sm navbar__cta"
            onClick={() => goTo("enquiry")}
          >
            Enquire Now
            <IconArrowRight />
          </button>
          <button
            type="button"
            className="navbar__burger"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {siteConfig.navLinks.map((link, i) => (
            <li key={link.id} style={{ transitionDelay: `${i * 0.05}s` }}>
              <a
                href={`#${link.id}`}
                className={`navbar__mobile-link ${
                  activeId === link.id ? "is-active" : ""
                }`}
                tabIndex={menuOpen ? 0 : -1}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                <span>{link.label}</span>
                <IconArrowRight />
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-cta">
          <button
            type="button"
            className="btn btn--primary btn--block"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => goTo("enquiry")}
          >
            Enquire Now
            <IconArrowRight />
          </button>
        </div>
      </div>
      {menuOpen && (
        <button
          type="button"
          className="navbar__overlay"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
