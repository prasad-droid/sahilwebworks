import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import "../styles/footer.css";
import logo from "../assets/logo.jpeg";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Why Choose Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  { label: "Turmeric Powder", href: "#products" },
  { label: "Moringa Powder", href: "#products" },
  { label: "Raisins (Kismis)", href: "#products" },
  { label: "Product Information", href: "#product-info" },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-col footer-brand">
        <a href="#home" className="footer-logo">
          <span className="brand-mark">
            <img src={logo} alt="Agrani Shivar logo" />
          </span>
          <span className="brand-name">
            Agrani<span className="brand-shivar">Shivar</span>
          </span>
        </a>
        <p>
          Agrani Shivar Farmer Producer Company connects 300+ farmers of Sangli, Maharashtra with
          national and international markets, delivering premium-quality agricultural products
          worldwide.
        </p>
        <em className="footer-tagline">Agrani — From Farmers To World</em>
      </div>

      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
          {quickLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-col">
        <h4>Products</h4>
        <ul>
          {productLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-col">
        <h4>Contact Details</h4>
        <ul className="footer-contact">
          <li>
            <Phone size={16} />
            <a href="tel:+919850693701">+91 98506 93701</a>
          </li>
          <li>
            <Mail size={16} />
            <a href="mailto:maheshkharade27@gmail.com">maheshkharade27@gmail.com</a>
          </li>
          <li>
            <Mail size={16} />
            <a href="mailto:agranishivar@gmail.com">agranishivar@gmail.com</a>
          </li>
          <li>
            <MapPin size={16} />
            <span>
              Yajurved Apartment, Flat No. 10, Savarkar Colony Lane 3, Vishrambag, Sangli,
              Maharashtra, India
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container footer-bottom-inner">
        <p>© 2026 Agrani Shivar Farmer Producer Company. All Rights Reserved.</p>
        <a href="#home" className="back-to-top" aria-label="Back to top">
          <ArrowUp size={18} /> Top
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
