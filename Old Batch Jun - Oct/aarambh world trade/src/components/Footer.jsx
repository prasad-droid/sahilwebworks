import { Icon } from './Icons.jsx';
import {
  BUSINESS_NAME,
  BUSINESS_TYPE,
  TAGLINE,
  PHONE_DISPLAY,
  PHONE_TEL,
  PHONE_2_DISPLAY,
  PHONE_2_TEL,
  EMAIL,
  ADDRESS,
  MAP_URL,
  LOGO,
  SOCIAL,
  whatsappLink,
} from '../data/business.js';
import { useEnquiry } from '../context/EnquiryContext.jsx';
import { NAV_LINKS } from './Navbar.jsx';

const RESOURCES = [
  { id: 'products', label: 'Product Catalogue' },
  { id: 'services', label: 'Export Services' },
  { id: 'bulk-order', label: 'Request a Quotation' },
  { id: 'faq', label: 'Buyer FAQs' },
];

export function Footer() {
  const { startEnquiry } = useEnquiry();
  const year = new Date().getFullYear();

  return (
    <footer className="footer section--dark">
      <div className="container">
        <div className="footer__top">
          {/* ---- Brand ------------------------------------------- */}
          <div className="footer__brand">
            <a className="footer__logo" href="#home" aria-label={`${BUSINESS_NAME} home`}>
              <img src={LOGO.src} width={LOGO.width} height={LOGO.height} alt="" loading="lazy" decoding="async" />
              <span>
                <strong>{BUSINESS_NAME}</strong>
                <em>{TAGLINE}</em>
              </span>
            </a>
            <p className="footer__blurb">
              {BUSINESS_TYPE} connecting Indian agricultural and food products with international
              buyers through bulk sourcing, quality-focused coordination and export support.
            </p>

            <ul className="footer__contact">
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={16} />
                  WhatsApp {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_TEL}`}>
                  <Icon name="phone" size={16} />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_2_TEL}`}>
                  <Icon name="phone" size={16} />
                  {PHONE_2_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>
                  <Icon name="mail" size={16} />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer">
                  <Icon name="pin" size={16} />
                  {ADDRESS.line1}, {ADDRESS.line2}
                </a>
              </li>
            </ul>

            {/*
              Social links render only when real accounts are added to
              SOCIAL in src/data/business.js. No placeholder icons.
            */}
            {SOCIAL.length > 0 && (
              <ul className="footer__social">
                {SOCIAL.map((item) => (
                  <li key={item.id || item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ---- Navigation --------------------------------------- */}
          <nav className="footer__nav" aria-label="Footer">
            <h2 className="footer__nav-title">Company</h2>
            <ul>
              {NAV_LINKS.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__nav" aria-label="Buyer resources">
            <h2 className="footer__nav-title">Buyers</h2>
            <ul>
              {RESOURCES.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---- CTA ----------------------------------------------- */}
          <div className="footer__cta">
            <h2 className="footer__cta-title">Ready to source from India?</h2>
            <p>Send your product, quantity and destination for a quotation.</p>
            <button
              type="button"
              className="btn btn--accent"
              onClick={() => startEnquiry('', { anchor: '#bulk-order' })}
            >
              Request a Quote
              <Icon name="arrowRight" size={18} />
            </button>
            <a className="footer__cta-wa" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={17} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {year} {BUSINESS_NAME}. All rights reserved.
          </p>
          <a
            className="footer__credit"
            href="https://www.sahilwebworks.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed By SahilWebWorks
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
