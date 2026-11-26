import { ArrowUp, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Logo from './Logo'
import { company, navLinks, products } from '../data/siteData'
import { defaultWhatsappUrl } from '../utils/whatsapp'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo inverse />
            <p className="footer__about">
              Sujata Global Exim is an import-export trading business specializing in
              flexible cables and serving buyers in international markets.
            </p>
            <div className="footer__social">
              <a
                href={defaultWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="WhatsApp"
              >
                <MessageCircle size={18} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${company.email}`}
                aria-label="Email Sujata Global Exim"
                title="Email"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h3>Quick Links</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li><a href="#global-trade">International Trade</a></li>
              <li><a href="#quote">Get a Quote</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Products</h3>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <a href="#products">{product.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column footer__column--contact">
            <h3>Contact</h3>
            <ul className="footer__contact-list">
              {company.phones.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href}>
                    <Phone size={15} aria-hidden="true" /> {phone.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`}>
                  <Mail size={15} aria-hidden="true" /> {company.email}
                </a>
              </li>
              <li>
                <span>
                  <MapPin size={15} aria-hidden="true" /> {company.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Sujata Global Exim. All Rights Reserved.</p>
          <a href="#home" className="footer__top-link">
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
