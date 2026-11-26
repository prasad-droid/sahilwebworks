import Logo from './Logo';
import { buildWhatsAppUrl, siteConfig } from '../data/siteConfig';
import '../styles/Footer.css';

export default function Footer() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <footer className="footer section--tight">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <Logo className="footer__logo" variant="gold" />
            <p className="footer__brand-copy">
              Agricultural products from India, presented for international business
              conversations and long-term trade relationships.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <h4 className="footer__subheading">Quick Links</h4>
            <ul className="footer__nav-list">
              <li>
                <a className="footer__nav-link" href="#home">Home</a>
              </li>
              <li>
                <a className="footer__nav-link" href="#about">About Us</a>
              </li>
              <li>
                <a className="footer__nav-link" href="#products">Products</a>
              </li>
              <li>
                <a className="footer__nav-link" href="#markets">Markets</a>
              </li>
              <li>
                <a className="footer__nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="footer__products">
            <h4 className="footer__subheading">Our Products</h4>
            <ul className="footer__products-list">
              <li>
                <a className="footer__products-link" href="#products">Rice</a>
              </li>
              <li>
                <a className="footer__products-link" href="#products">Tea</a>
              </li>
              <li>
                <a className="footer__products-link" href="#products">Flowers</a>
              </li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4 className="footer__subheading">Contact</h4>
            <ul className="footer__contact-list">
              <li>
                <a className="footer__contact-link" href={siteConfig.phone.href}>
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a className="footer__contact-link" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  className="footer__contact-link"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp · {siteConfig.whatsapp.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            SUGANTA GLOBAL – Connecting Markets, Delivering Trust.
          </p>
          <p className="footer__small">
            © {new Date().getFullYear()} SUGANTA GLOBAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
