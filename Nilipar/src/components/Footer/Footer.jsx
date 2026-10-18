import { FiPhoneCall, FiMail, FiMapPin, FiArrowUp } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SITE, NAV_LINKS } from "../../data/siteData";
import "./Footer.css";

const PRODUCT_LINKS = [
  "Shopping & Grocery Bags",
  "Tote & Gift Bags",
  "Custom Printed Bags",
  "Bagasse Plates & Bowls",
  "Food Containers",
  "Cutlery & Catering",
];

const SOCIALS = [
  { icon: FaWhatsapp, href: SITE.whatsappLink, label: "WhatsApp" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo-wrap">
            <img src="/logo.png" alt="Nilipar Enterprises logo" className="footer__logo" />
            <div>
              <span className="footer__name">Nilipar Enterprises</span>
              <span className="footer__role">Eco-Friendly Exports</span>
            </div>
          </div>
          <p className="footer__tagline">“{SITE.tagline}”</p>
          <p className="footer__blurb">
            Indian exporter of premium eco-friendly jute bags and biodegradable bagasse products, serving buyers
            across the USA, Europe, and global markets.
          </p>
          <ul className="footer__socials">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label}>
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="footer__col" aria-label="Quick links">
          <h3>Quick Links</h3>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Products">
          <h3>Products</h3>
          <ul>
            {PRODUCT_LINKS.map((item) => (
              <li key={item}>
                <a href="#products">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col footer__contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <FiPhoneCall aria-hidden="true" />
              <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a>
            </li>
            <li>
              <FiMail aria-hidden="true" />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <FiMapPin aria-hidden="true" />
              <address>
                {SITE.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2026 {SITE.name}. All Rights Reserved.</p>
          <p className="footer__slogan">Sustainable Today, Essential Tomorrow</p>
          <p className="footer__credit">
            Designed By{" "}
            <a href="https://www.sahilwebworks.com/" target="_blank" rel="noopener noreferrer">
              Sahil Web Works
            </a>
          </p>
          <a href="#home" className="footer__top" aria-label="Back to top">
            <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
