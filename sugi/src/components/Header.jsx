import { useState } from "react";
import { Link, useRoute } from "../router";
import { NAV_LINKS, TAGLINE, COMPANY } from "../data/site";
import { useSite } from "../store/SiteContext";
import logoMark from "../assets/brand/logo-mark.webp";
import "../styles/header.css";

// ==========================================================================
// HEADER — static bar (never follows the user while scrolling, per brief).
// Layout: logo + company name | nav | "Get a Quote" button.
// ==========================================================================

export default function Header() {
  const [open, setOpen] = useState(false);
  const route = useRoute();
  const activePath = route.startsWith("/products") ? "/products" : route;
  const { settings } = useSite();
  const siteName = settings?.siteName || COMPANY;
  const siteTagline = settings?.tagline || TAGLINE;

  return (
    <header className={`header ${open ? "header--open" : ""}`}>
      <div className="container header__inner">
        <Link to="/" className="header__brand" onClick={() => setOpen(false)}>
          <img
            src={logoMark}
            alt=""
            className="header__logo"
            width="52"
            height="52"
          />
          <span className="header__brand-text">
            <span className="header__brand-name">{siteName}</span>
            <span className="header__brand-tag">{siteTagline}</span>
          </span>
        </Link>

        <Link to="/quote" className="btn btn-primary header__cta">
          Get a Quote
        </Link>

        <button
          type="button"
          className="header__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className="header__nav" aria-label="Primary">
        <ul className="container header__links">
          {NAV_LINKS.map((link) => {
            const active = activePath === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`header__link ${active ? "is-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="header__link-cta">
            <Link to="/quote" className="btn btn-primary" onClick={() => setOpen(false)}>
              Get a Quote
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
