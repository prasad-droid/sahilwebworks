import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";
import { categories } from "../../data/categories";
import { company, waLink } from "../../config/site";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/#about" },
  { label: "Products", to: "/#products" },
  { label: "Services", to: "/#services" },
  { label: "Testimonials", to: "/#testimonials" },
  { label: "Order Here", to: "/#order" },
  { label: "Contact", to: "/#contact" },
];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div>
          <div className="footer__brand">
            <img
              src="/images/logo/logo.jpeg"
              alt="GHONS Global Impex logo"
              width="52"
              height="52"
            />
            <span>
              <span className="footer__brand-name">GHONS Global Impex</span>
              <span className="footer__brand-sub">Merchant Trader &amp; Exporter</span>
            </span>
          </div>
          <p className="footer__about">
            An India-based merchant trading and export company supplying premium
            imitation jewellery and future-ready product categories to
            wholesalers, retailers, boutiques, and importers worldwide.
          </p>
          <p className="footer__tagline">“{company.tagline}”</p>
        </div>

        <div>
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__links">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link className="footer__link" to={l.to}>
                  <FaChevronRight aria-hidden="true" /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__title">Categories</h3>
          <ul className="footer__links">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link className="footer__link" to={`/category/${c.slug}`}>
                  <FaChevronRight aria-hidden="true" /> {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__title">Contact Info</h3>
          <p className="footer__contact-item">
            <FaPhone aria-hidden="true" />
            <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
          </p>
          <p className="footer__contact-item">
            <FaWhatsapp aria-hidden="true" />
            <a
              href={waLink("Hello GHONS Global Impex, I would like to get in touch.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {company.phone}
            </a>
          </p>
          <p className="footer__contact-item">
            <FaEnvelope aria-hidden="true" />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <p className="footer__contact-item">
            <FaLocationDot aria-hidden="true" />
            <span>
              1A, 503, Shankheshwar Palm,
              <br />
              Dombivli West, Maharashtra, India
            </span>
          </p>
          <div className="footer__socials">
            <a
              className="footer__social"
              href="https://wa.me/917039281981"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              className="footer__social"
              href="#"
              aria-label="Instagram"
              onClick={(e) => e.preventDefault()}
            >
              <FaInstagram />
            </a>
            <a
              className="footer__social"
              href="#"
              aria-label="Facebook"
              onClick={(e) => e.preventDefault()}
            >
              <FaFacebookF />
            </a>
            <a
              className="footer__social"
              href="#"
              aria-label="LinkedIn"
              onClick={(e) => e.preventDefault()}
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <div className="container">
        © 2026 <strong>GHONS Global Impex</strong>. All Rights Reserved. ·{" "}
        {company.tagline}
        <span className="footer__credit">
          Designed by{" "}
          <a
            href="https://www.sahilwebworks.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sahilwebwork
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
