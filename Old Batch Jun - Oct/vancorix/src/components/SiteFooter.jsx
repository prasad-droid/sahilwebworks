import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Mail, MessageCircle } from 'lucide-react';
import logo from '../assets/images/vancorix-logo.png';
import { DEVELOPER_URL, EMAIL, INSTAGRAM_URL, quoteMessage, whatsappLink } from '../data/site';

const year = new Date().getFullYear();

const links = [
  { label: 'Products', href: '#products' },
  { label: 'Quality', href: '#quality' },
  { label: 'Markets', href: '#markets' },
  { label: 'Process', href: '#process' },
  { label: 'Request Quote', href: whatsappLink(quoteMessage()), external: true },
];

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Vancorix International" />
          <p>Global Sourcing. Seamless Trade.</p>
          <span>Botanical powders · India</span>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <h3>Explore</h3>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-connect">
          <h3>Connect</h3>
          <a
            href={whatsappLink('Hello Vancorix International, I would like to discuss a sourcing requirement.')}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} strokeWidth={1.8} /> WhatsApp
          </a>
          <a href={`mailto:${EMAIL}`}>
            <Mail size={16} strokeWidth={1.8} /> {EMAIL}
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> @vancorix.global
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {year} Vancorix International. All rights reserved.</span>
        <span>Export-grade botanical powders · Batch-traceable · Vacuum-sealed</span>
        <a href={DEVELOPER_URL} target="_blank" rel="noreferrer">
          Developed and designed by Sahilwebworks
        </a>
      </div>
    </footer>
  );
};

export default SiteFooter;
