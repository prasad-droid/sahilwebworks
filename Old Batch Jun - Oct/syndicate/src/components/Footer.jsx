import { ArrowUpRight, Globe2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { company, footer } from '../data/site';
import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo />
            <p className="site-footer__tagline">{company.tagline}</p>
            <p className="site-footer__intro">{company.description}</p>
            <a className="btn btn-outline-light" href={company.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> WhatsApp Inquiry <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="site-footer__col">
            <h3>Quick Links</h3>
            <ul>
              {footer.quickLinks.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h3>Products</h3>
            <ul>
              {footer.productLinks.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col site-footer__contact">
            <h3>Contact</h3>
            <a href={company.phoneHref}><Phone size={15} /> {company.phoneDisplay}</a>
            <a href={`mailto:${company.email}`}><Mail size={15} /> {company.email}</a>
            <a href={company.address.mapUrl} target="_blank" rel="noreferrer">
              <MapPin size={15} /> {company.address.line}
            </a>
            <span><Globe2 size={15} /> India · International B2B supply</span>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© Syndicate Global EXIM. All Rights Reserved.</p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
