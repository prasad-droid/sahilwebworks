import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import Logo from "@/components/Logo/Logo";
import "@/styles/footer.css";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <Logo />
          </a>
          <p className="footer__tagline">Connecting India to the World</p>
          <p className="footer__about">
            Reliable exporter of premium medical disposable supplies for hospitals, distributors, and
            healthcare institutions across the globe.
          </p>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Our Products</h4>
          <ul>
            <li><a href="#products">Alcohol Swabs</a></li>
            <li><a href="#products">Medical Gloves</a></li>
            <li><a href="#products">Infusion Products</a></li>
            <li><a href="#products">Catheters &amp; Urology</a></li>
            <li><a href="#products">Wound Care</a></li>
          </ul>
        </div>

        <div className="footer__col footer__col--contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <FaPhoneAlt />
              <a href="tel:+919137730636">+91 91377 30636</a>
            </li>
            <li>
              <FaWhatsapp />
              <a href="https://wa.me/919137730636" target="_blank" rel="noopener noreferrer">
                +91 91377 30636
              </a>
            </li>
            <li>
              <FaEnvelope />
              <a href="mailto:Info@viomglobalexim.com">Info@viomglobalexim.com</a>
            </li>
            <li>
              <FaMapMarkerAlt />
              <span>
                Arihant Abhilasha, B112, Plot No. 10, Sector 35, Kharghar, Navi Mumbai, Maharashtra 410210,
                India
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 ViOm Global Exim. All Rights Reserved.</p>
        <p className="footer__credit">
          Designed by{" "}
          <a href="https://www.sahilwebworks.com/" target="_blank" rel="noopener noreferrer">
            Sahil Web Works
          </a>
        </p>
        <a href="#home" className="footer__top" aria-label="Back to top">
          <FaArrowUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
