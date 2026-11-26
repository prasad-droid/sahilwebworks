import { Phone, Mail, MapPin } from "lucide-react";
import { LOGO } from "@/assets/images";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const PRODUCT_LINKS = [
  { label: "Bath Towels", href: "#products" },
  { label: "Hand Towels", href: "#products" },
  { label: "Face Towels", href: "#products" },
  { label: "Spa Towels", href: "#products" },
  { label: "Gym Towels", href: "#products" },
  { label: "Hotel Towels", href: "#products" },
];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={LOGO} alt="CHIKHALKAR ENTERPRISES logo" />
            <strong>
              CHIKHALKAR ENTERPRISES
              <span>Delivering Excellence Across Borders</span>
            </strong>
          </div>
          <p>
            Manufacturer and exporter of premium Cotton Terry Towels for hospitality, healthcare, wellness, and
            commercial sectors worldwide.
          </p>
          <span className="footer__tagline">Delivering Excellence Across Borders</span>
        </div>

        <div className="footer__col">
          <h3>Quick Links</h3>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Products</h3>
          <ul>
            {PRODUCT_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Contact</h3>
          <div className="footer__contact-item">
            <Phone size={16} />
            <a href="tel:+919324029664">+91 93240 29664</a>
          </div>
          <div className="footer__contact-item">
            <Mail size={16} />
            <a href="mailto:chikhalkarenterprises@gmail.com">chikhalkarenterprises@gmail.com</a>
          </div>
          <div className="footer__contact-item">
            <MapPin size={16} />
            <span>CHIKHALKAR ENTERPRISES · India</span>
          </div>
          <a href="#contact" className="btn btn-accent btn--sm">
            Inquiry Form
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 CHIKHALKAR ENTERPRISES. All Rights Reserved.</p>
        <p>
          <span>Delivering Excellence Across Borders</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
