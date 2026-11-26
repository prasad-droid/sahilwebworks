import { Link } from "react-router-dom";
import {
  FiMessageCircle,
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import logo from "../../assets/logo/logo.png";
import { SITE, whatsappLink, mailtoLink, telLink } from "../../data/site";

const companyLinks = [
  { to: "/about", label: "About Us" },
  { to: "/#why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact" },
];

const productLinks = [
  "Canvas Tote Bags",
  "Cotton Tote Bags",
  "Jute Tote Bags",
  "Custom Tote Bags",
];

const serviceLinks = ["Export Supply", "Customization", "Private Label", "Bulk Orders"];

const socials = [
  { icon: FiFacebook, label: "Facebook", url: null },
  { icon: FiInstagram, label: "Instagram", url: null },
  { icon: FiLinkedin, label: "LinkedIn", url: null },
];

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src={logo} alt="SATBHAI EXIM logo" width="52" height="52" />
            <span className="footer__brand-name">SATBHAI EXIM</span>
            <span className="footer__brand-tag">Quality Product - Global Reach</span>
            <p>
              An India-based merchant export company specializing in high-quality tote
              bags for international buyers.
            </p>
            <div className="footer__socials">
              {socials.map((s) => {
                const Icon = s.icon;
                return s.url ? (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    <Icon />
                  </a>
                ) : (
                  <a key={s.label} aria-disabled="true" title={`${s.label} (coming soon)`} aria-label={`${s.label} - not yet available`}>
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <nav className="footer__col" aria-label="Company links">
            <h4>Company</h4>
            <ul>
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Product links">
            <h4>Products</h4>
            <ul>
              {productLinks.map((p) => (
                <li key={p}>
                  <Link to="/products">{p}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul className="footer__contact">
              <li>
                <FiPhone aria-hidden="true" />
                <a href={telLink()}>{SITE.phoneDisplay}</a>
              </li>
              <li>
                <FiMessageCircle aria-hidden="true" />
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <FiMail aria-hidden="true" />
                <a href={mailtoLink()}>{SITE.email}</a>
              </li>
              <li>
                <FiMapPin aria-hidden="true" />
                <span>Nashik, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          © {SITE.copyrightYear} <strong>SATBHAI EXIM</strong>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
