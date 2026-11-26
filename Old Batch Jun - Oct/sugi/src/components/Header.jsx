import { useState } from "react";
import { Link, useRoute } from "../router";
import { NAV_LINKS, TAGLINE, COMPANY } from "../data/site";
import { useSite } from "../store/SiteContext";
import logoMark from "../assets/brand/logo-mark.webp";
import "../styles/header.css";

// ==========================================================================
// HEADER — brand bar stays in flow; only the navigation row is sticky so the
// links stay pinned while scrolling.
// Layout: logo + company name | nav | "Get a Quote" button.
// ==========================================================================

export default function Header() {
  const [open, setOpen] = useState(false);
  const route = useRoute();
  const activePath = route.startsWith("/products") ? "/products" : route;
  const { settings, content } = useSite();
  const siteName = settings?.siteName || COMPANY;
  const siteTagline = settings?.tagline || TAGLINE;
  const header = content?.header || {};
  const logo = header.logo || logoMark;
  const navLinks = (header.nav?.length ? header.nav : NAV_LINKS).filter(
    (link) => link && link.to
  );
  const ctaLabel = header.ctaLabel || "Get a Quote";
  const ctaHref = header.ctaHref || "/quote";

  return (
    <>
      <header className={`header ${open ? "header--open" : ""}`}>
        <div className="container header__inner">
          <Link to="/" className="header__brand" onClick={() => setOpen(false)}>
            <img
              src={logo}
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

          <Link to={ctaHref} className="btn btn-primary header__cta">
            {ctaLabel}
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
      </header>

      <nav
        className={`header__nav ${open ? "header__nav--open" : ""}`}
        aria-label="Primary"
      >
        <ul className="container header__links">
          {navLinks.map((link) => {
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
            <Link to={ctaHref} className="btn btn-primary" onClick={() => setOpen(false)}>
              {ctaLabel}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
