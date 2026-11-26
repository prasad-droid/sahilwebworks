import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/images/logo.png";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const PRODUCTS_LINKS = [
  "Brown Kraft Bags",
  "White Kraft Bags",
  "Twisted Handle Bags",
  "Flat Handle Bags",
  "SOS Bags",
  "Printed Bags",
];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="footer-logo-badge">
              <img src={logo} alt="PRIKAL GLOBAL logo" />
            </span>
            <span>
              <strong>PRIKAL</strong> GLOBAL
            </span>
          </a>
          <p className="footer-tagline">Global Force For Goods</p>
          <p className="footer-desc">
            PRIKAL GLOBAL is a trusted exporter of premium eco-friendly Kraft Paper Bags,
            delivering sustainable packaging solutions to customers worldwide.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  <ArrowRight size={13} /> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            {PRODUCTS_LINKS.map((p) => (
              <li key={p}>
                <a href="#products">
                  <ArrowRight size={13} /> {p}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <Phone size={16} />
              <a href="tel:+917058020057">+91 7058020057</a>
            </li>
            <li>
              <MessageCircle size={16} />
              <a href="https://wa.me/917058020057" target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </li>
            <li>
              <Mail size={16} />
              <a href="mailto:priyankabagul57@gmail.com">priyankabagul57@gmail.com</a>
            </li>
            <li>
              <MapPin size={16} />
              <span>
                Pristine Greens Phase I, Opposite Silver 9 Society, Moshi, Pune - 412105,
                Maharashtra, India
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 PRIKAL GLOBAL. All Rights Reserved.</p>
        <p className="footer-tagline-mini">Global Force For Goods</p>
      </div>
    </div>
  </footer>
);

export default Footer;
