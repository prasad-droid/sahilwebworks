import { useState } from "react";
import { Link, useRoute } from "../router";
import { NAV_LINKS, TAGLINE, COMPANY } from "../data/site";
import { useSite } from "../store/SiteContext";
import "../styles/header.css";

// ==========================================================================
// HEADER — static bar (never follows the user while scrolling, per brief).
// Layout: logo + company name | nav | "Get a Quote" button.
// ==========================================================================

function Logo() {
  return (
    <svg className="header__logo" viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#173b2f" />
      <circle cx="32" cy="24" r="9" fill="none" stroke="#b9975b" strokeWidth="2.5" />
      <path d="M27 33c1.5 8 3.5 13 5 15" fill="none" stroke="#d8c7a3" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M37 33c-1.5 8-3.5 13-5 15" fill="none" stroke="#d8c7a3" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M25 32c-2 3-3 6-3 8M39 32c2 3 3 6 3 8" fill="none" stroke="#b9975b" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="22" cy="40" r="2" fill="#b9975b" />
      <circle cx="42" cy="40" r="2" fill="#b9975b" />
    </svg>
  );
}

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
          <Logo />
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
