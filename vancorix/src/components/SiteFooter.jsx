import { ArrowUpRight, MessageCircle } from 'lucide-react';
import logo from '../assets/images/vancorix-logo.png';
import { whatsappLink } from '../data/site';

const year = new Date().getFullYear();

const links = [
  { label: 'Products', href: '#products' },
  { label: 'Quality', href: '#quality' },
  { label: 'Markets', href: '#markets' },
  { label: 'Process', href: '#process' },
  { label: 'Request Quote', href: '#quote' },
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
            <a key={link.href} href={link.href}>{link.label}</a>
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
          <a href="#" aria-label="LinkedIn"><ArrowUpRight size={16} strokeWidth={1.8} /> LinkedIn</a>
          <a href="#" aria-label="Facebook"><ArrowUpRight size={16} strokeWidth={1.8} /> Facebook</a>
          <a href="#" aria-label="Instagram"><ArrowUpRight size={16} strokeWidth={1.8} /> Instagram</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {year} Vancorix International. All rights reserved.</span>
        <span>Export-grade botanical powders · Batch-traceable · Vacuum-sealed</span>
      </div>
    </footer>
  );
};

export default SiteFooter;
