import { business, socialLinks } from '../data/data';
import { waLink } from '../utils/whatsapp';
import SocialIcon from './SocialIcons';
import '../styles/footer.css';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Product', href: '#product' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Export', href: '#export' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-head">
              <img
                src="/images/logo.jpg"
                alt="GOURI GLOBAL TRADE logo"
                className="footer__logo"
                loading="lazy"
              />
              <span className="footer__brand-name">GOURI GLOBAL TRADE</span>
            </div>
            <p className="footer__tagline">Sourcing Locally. Serving Globally.</p>
            <p className="footer__desc">
              A merchant export business connecting Indian products with customers and
              buyers across global markets.
            </p>

            <div className="footer__social">
              <h3 className="footer__title">Follow Us</h3>
              <ul className="footer__social-list">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      className="footer__social-link"
                      href={link.href}
                      aria-label={link.label}
                      title={link.label}
                    >
                      <SocialIcon name={link.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <nav className="footer__col" aria-label="Footer navigation">
            <h3 className="footer__title">Explore</h3>
            <ul className="footer__list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a className="footer__link" href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h3 className="footer__title">Contact</h3>
            <ul className="footer__list">
              <li>
                <a className="footer__link" href={`tel:+91${business.phone}`}>
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  className="footer__link"
                  href={waLink('Hello GOURI GLOBAL TRADE, I would like to connect.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {business.whatsappNumber}
                </a>
              </li>
              <li>
                <a className="footer__link" href={`mailto:${business.email}`}>
                  {business.email}
                </a>
              </li>
              <li className="footer__address">{business.office}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 GOURI GLOBAL TRADE. All Rights Reserved.</p>
          <p className="footer__credit">
            Designed by{' '}
            <a
              className="footer__credit-link"
              href="https://www.sahilwebworks.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              sahilwebworks
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}