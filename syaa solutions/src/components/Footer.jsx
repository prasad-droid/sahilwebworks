import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Logo from './Logo.jsx';
import { brand, contact, navLinks, packagingProducts } from '../data/site.js';

export default function Footer({ onEnquire }) {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a href="#home" aria-label="SYAA SOLUTION, back to top">
            <Logo inverse />
          </a>
          <p className="footer-tagline">{brand.tagline}</p>
          <p className="footer-intro">
            SYAA SOLUTION supplies corrugated boxes, honeycomb paper and printed gift boxes to
            businesses, and offers fresh Indian banana leaves for export markets.
          </p>
          <a
            className="footer-whatsapp"
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp Inquiry <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="footer-links">
          <h3>Quick Navigation</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h3>Packaging Products</h3>
          <ul>
            {packagingProducts.map((product) => (
              <li key={product.id}>
                <button type="button" onClick={() => onEnquire(product.name)}>
                  {product.name}
                </button>
              </li>
            ))}
            <li>
              <a href="#banana-leaves">Fresh Banana Leaves</a>
            </li>
          </ul>
        </div>

        <div className="footer-links footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <Phone size={16} aria-hidden="true" />
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" />
              <span>{contact.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© SYAA SOLUTION. All Rights Reserved.</p>
        <p>Packaging Solutions · Domestic Supply · Banana Leaf Exports</p>
      </div>
    </footer>
  );
}
