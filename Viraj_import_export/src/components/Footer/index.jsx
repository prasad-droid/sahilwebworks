import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiPhone, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";
import { CONTACT } from "../../data/data";
import logo from "../../assets/logo-ui.png";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  "Handmade Carpets",
  "Terry Towels",
  "Wooden Handicrafts",
  "Custom Orders",
  "Request Catalogue",
];

const serviceLinks = [
  "Merchant Export",
  "Product Sourcing",
  "Quality Inspection",
  "Packaging Solutions",
  "Logistics & Shipping",
];

const socials = [
  { icon: FiFacebook, label: "Facebook", href: "#" },
  { icon: FiInstagram, label: "Instagram", href: "#" },
  { icon: FiLinkedin, label: "LinkedIn", href: "#" },
  { icon: FiTwitter, label: "Twitter / X", href: "#" },
];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo" aria-label="Viraj Import & Export">
            <img src={logo} alt="Viraj Import & Export logo" className="footer__logo-img" />
            <span className="footer__logo-text">
              <span>Viraj</span>
              <span>Import &amp; Export</span>
            </span>
          </a>
          <p className="footer__tagline">Connecting India with Global Excellence</p>
          <p className="footer__about">
            Merchant exporter of premium handmade carpets, terry towels, and wooden handicrafts,
            serving importers and businesses across the globe.
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>
                <s.icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>
                  <FiArrowRight aria-hidden="true" /> {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Products</h4>
          <ul className="footer__links">
            {productLinks.map((l) => (
              <li key={l}>
                <a href="#products">
                  <FiArrowRight aria-hidden="true" /> {l}
                </a>
              </li>
            ))}
          </ul>
          <h4 className="footer__heading footer__heading--alt">Services</h4>
          <ul className="footer__links">
            {serviceLinks.map((l) => (
              <li key={l}>
                <a href="#services">
                  <FiArrowRight aria-hidden="true" /> {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact">
            <li>
              <FiPhone aria-hidden="true" />
              <a href="tel:+919226559225">{CONTACT.phone}</a>
            </li>
            <li>
              <FiMail aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <FiMapPin aria-hidden="true" />
              <address>
                Viraj, Islampur,
                <br />
                District Sangli,
                <br />
                Maharashtra 415409, India
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Viraj Import &amp; Export. All Rights Reserved.</p>
        <p className="footer__legal">Merchant Exporter · Carpets · Terry Towels · Wooden Handicrafts</p>
      </div>
    </div>
  </footer>
);

export default Footer;
