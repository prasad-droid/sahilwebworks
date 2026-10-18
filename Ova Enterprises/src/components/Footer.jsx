import { useEffect, useState } from "react";
import {
  FaArrowUp,
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import {
  ADDRESS,
  COMPANY,
  EMAIL,
  EMAIL_TEL,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "../data/site";
import logo from "../assets/images/logo.jpeg";

const SERVICES = [
  "Leather Product Export",
  "OEM Manufacturing",
  "Private Label Manufacturing",
  "Custom Logo Branding",
  "Bulk Orders",
  "Quality Inspection",
];

const PRODUCTS = [
  "Leather Handbags",
  "Wallets & Card Holders",
  "Backpacks & Briefcases",
  "Belts & Accessories",
  "Travel & Duffel Bags",
  "Corporate Gift Items",
];

const SOCIALS = [
  { icon: <FaWhatsapp />, label: "WhatsApp", href: WHATSAPP_URL },
  { icon: <FaInstagram />, label: "Instagram", href: "https://instagram.com" },
  { icon: <FaFacebookF />, label: "Facebook", href: "https://facebook.com" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", href: "https://linkedin.com" },
];

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <span className="logo-badge">
                <img src={logo} alt="Ovaa Enterprises logo" />
              </span>
              <span className="logo-text">
                <span className="logo-name">
                  OVAA<span>.</span>
                </span>
                <span className="logo-sub">Enterprises</span>
              </span>
            </a>
            <p className="footer-about">
              {COMPANY.type}. We deliver exceptional craftsmanship, quality and dependable export
              solutions to businesses worldwide.
            </p>
            <p className="footer-tagline">"{COMPANY.tagline}"</p>
            <div className="footer-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              {NAV_LINKS.map((l) => (
                <a key={l.id} href={`#${l.id}`}>
                  <FaChevronRight /> {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <div className="footer-links">
              {SERVICES.map((s) => (
                <a key={s} href="#services">
                  <FaChevronRight /> {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Products</h4>
            <div className="footer-links">
              {PRODUCTS.map((p) => (
                <a key={p} href="#products">
                  <FaChevronRight /> {p}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 <strong>{COMPANY.name}</strong>. All rights reserved.
          </p>
          <p className="made-with">
            Designed by{" "}
            <a href="https://www.sahilwebworks.com/" target="_blank" rel="noreferrer">
              Sahil Web Works
            </a>
          </p>
          <p className="made-with">
            {ADDRESS.line1} | <FaPhoneAlt /> <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a> |{" "}
            <FaEnvelope /> <a href={`mailto:${EMAIL_TEL}`}>{EMAIL}</a>
          </p>
        </div>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <button
        className={`scroll-top ${showTop ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
