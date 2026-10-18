import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { scrollToId, COMPANY, buildWhatsAppLink } from "../../utils/config";
import logo from "../../assets/logo/logo.jpeg";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Products", id: "products" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

const footerProducts = [
  "Onion Powder",
  "Garlic Powder",
  "Tomato Powder",
  "Mango Powder",
  "Pineapple Powder",
  "Mixed Vegetable Powders",
];

const footerServices = [
  "Merchant Export",
  "Product Sourcing",
  "Bulk Supply",
  "Export Documentation",
  "International Logistics",
];

const socials = [
  { icon: <FaLinkedin />, label: "LinkedIn" },
  { icon: <FaInstagram />, label: "Instagram" },
  { icon: <FaFacebookF />, label: "Facebook" },
  { icon: <FaXTwitter />, label: "X (Twitter)" },
];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <button
            type="button"
            className="footer-logo"
            onClick={() => scrollToId("home")}
            aria-label="Kesarkar Overseas Home"
          >
            <img src={logo} alt="Kesarkar Overseas logo" loading="lazy" />
          </button>
          <p className="footer-tagline">{COMPANY.tagline}</p>
          <p className="footer-about">
            A trusted Indian merchant exporter of premium dehydrated fruits and
            vegetable powders, delivering naturally processed ingredients to food
            businesses across the world.
          </p>
          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#home"
                aria-label={s.label}
                className="footer-social"
                onClick={(e) => e.preventDefault()}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button type="button" onClick={() => scrollToId(link.id)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Our Products</h4>
          <ul className="footer-links">
            {footerProducts.map((p) => (
              <li key={p}>
                <button type="button" onClick={() => scrollToId("products")}>
                  {p}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            {footerServices.map((s) => (
              <li key={s}>
                <button type="button" onClick={() => scrollToId("services")}>
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-contact">
            <li>
              <FaPhone />
              <a href={`tel:${COMPANY.phoneLink}`}>{COMPANY.phone}</a>
            </li>
            <li>
              <FaWhatsapp />
              <a href={buildWhatsAppLink()}>Chat on WhatsApp</a>
            </li>
            <li>
              <FaEnvelope />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">© 2026 Kesarkar Overseas. All Rights Reserved.</p>
        <p className="footer-tagline-line">{COMPANY.tagline}</p>
        <p className="footer-credit">
          Designed by{" "}
          <a
            href="https://www.sahilwebworks.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sahil Web Works
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
