import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";
import { LINKS, NAV_LINKS, SITE } from "../data/site";

const PRODUCT_LINKS = [
  { label: "Moringa Powder", href: "#moringa" },
  { label: "Carpets", href: "#carpets" },
  { label: "Rugs", href: "#carpets" },
  { label: "Hair Clips", href: "#hair-accessories" },
  { label: "Rubber Bands", href: "#rubber-bands" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <div>
            <p className="eyebrow eyebrow--light">
              <span>Let’s build something together</span>
            </p>
            <h2>Your Products. Our Commitment. Shared Growth.</h2>
          </div>
          <a className="btn btn--gold" href="#inquiry">
            Start an enquiry
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" aria-label={`${SITE.name} — back to top`}>
            <Logo tone="light" />
          </a>
          <p className="footer__tagline">{SITE.tagline}</p>
          <p className="footer__intro">
            An Indian merchant trader and exporter connecting diverse product
            categories with domestic and international business opportunities.
          </p>
          <div className="footer__brand-actions">
            <a
              href={LINKS.waIndia}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__brand-link"
            >
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp us
            </a>
            <a href={LINKS.mail} className="footer__brand-link">
              <Mail size={16} aria-hidden="true" />
              Email us
            </a>
          </div>
        </div>

        <nav className="footer__col" aria-labelledby="footer-nav-title">
          <h3 id="footer-nav-title">Quick Links</h3>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <nav className="footer__col" aria-labelledby="footer-products-title">
          <h3 id="footer-products-title">Products</h3>
          {PRODUCT_LINKS.map(({ label, href }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="footer__col footer__col--contact">
          <h3>Contact</h3>
          <a href={LINKS.telIndia}>
            <Phone size={15} aria-hidden="true" />
            <span>
              <small>India</small>
              {SITE.phoneIndia}
            </span>
          </a>
          <a href={LINKS.telUae}>
            <Phone size={15} aria-hidden="true" />
            <span>
              <small>UAE</small>
              {SITE.phoneUae}
            </span>
          </a>
          <a href={LINKS.mail} className="footer__email">
            <Mail size={15} aria-hidden="true" />
            <span>{SITE.email}</span>
          </a>
          <div className="footer__wa">
            <span>WhatsApp</span>
            <a
              href={LINKS.waIndia}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.whatsappIndiaAlt}
            </a>
            <a
              href={LINKS.waIndiaAlt}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.whatsappIndia}
            </a>
            <a href={LINKS.waUae} target="_blank" rel="noopener noreferrer">
              {SITE.whatsappUae}
            </a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {SITE.name}. All rights reserved.
        </p>
        <p className="footer__bottom-right">
          Merchant Trader &amp; Exporter
          <span aria-hidden="true">·</span>
          India
        </p>
      </div>
    </footer>
  );
}
