import {
  ChevronRightIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
  TruckIcon,
} from "./icons.jsx";
import logo from "../assets/logos/logo.jpeg";
import "../styles/footer.css";

const PRODUCT_LINKS = [
  "Bath Towels",
  "Hand Towels",
  "Face Towels",
  "Bath Sheets",
  "Hotel Towels",
  "Gym Towels",
];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#home" className="logo" aria-label="Asalkaar Global Exim">
            <img className="logo-mark" src={logo} alt="Asalkaar Global Exim logo" />
            <span className="logo-text">
              <span className="name">
                Asalkaar <em>Global Exim</em>
              </span>
              <span className="tag">Premium Textile Exports</span>
            </span>
          </a>
          <p>
            Asalkaar Global Exim is an Indian export trading company specializing in
            premium-quality Cotton Terry Towels, connecting Indian quality to global markets.
          </p>
          <span className="footer-tagline">
            <TruckIcon /> Connecting Indian Quality to Global Markets
          </span>
        </div>

        <div>
          <h4>Company</h4>
          <ul className="footer-links">
            {[
              { label: "About Us", href: "#about" },
              { label: "Products", href: "#products" },
              { label: "Why Choose Us", href: "#why-us" },
              { label: "Request A Quote", href: "#inquiry" },
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  <ChevronRightIcon /> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Products</h4>
          <ul className="footer-links">
            {PRODUCT_LINKS.map((product) => (
              <li key={product}>
                <a href="#products">
                  <ChevronRightIcon /> {product}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <span className="fc-icon">
                <PhoneIcon />
              </span>
              <div>
                <a href="tel:+917796319511">+91 77963 19511</a>
                <br />
                <a href="https://wa.me/917796319511" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +91 77963 19511
                </a>
              </div>
            </li>
            <li>
              <span className="fc-icon">
                <MailIcon />
              </span>
              <a href="mailto:info@asalkaarglobalexim.com">info@asalkaarglobalexim.com</a>
            </li>
            <li>
              <span className="fc-icon">
                <MapPinIcon />
              </span>
              <div>
                At Post Ieet, Taluka Bhoom,
                <br />
                District Dharashiv,
                <br />
                Maharashtra, India
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Asalkaar Global Exim. All Rights Reserved.</span>
        <span>
          Designed by{" "}
          <a
            href="https://www.sahilwebworks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="sahil-link"
          >
            Sahil Web Works
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
