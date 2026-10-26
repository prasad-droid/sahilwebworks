import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import Logo from './Logo'
import { company, footerNavLinks, footerProductLinks, whatsappMessages } from '../data/siteData'
import { getWhatsAppUrl } from '../utils/links'
import '../styles/Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <a
              href="#home"
              className="site-footer__brand-link"
              aria-label="Shakti Global Exim — back to home"
            >
              <Logo variant="light" />
            </a>
            <p className="site-footer__tagline">Global Reach. Trusted Quality.</p>
            <p className="site-footer__about">
              India-based B2B food exports with frozen French fries as our
              primary product, focused on importers, distributors and
              food-service buyers in the Middle East and Southeast Asia.
            </p>
            <a href="#quote" className="btn btn--primary btn--sm">
              Request a Quote
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <nav className="site-footer__col" aria-labelledby="footer-products">
            <h3 id="footer-products">Products</h3>
            <ul>
              {footerProductLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer__col" aria-labelledby="footer-company">
            <h3 id="footer-company">Company</h3>
            <ul>
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__col site-footer__contact">
            <h3>Contact</h3>
            <address className="site-footer__address">
              <MapPin size={14} aria-hidden="true" />
              <span>{company.address.full}</span>
            </address>
            <a href={company.phoneHref} className="site-footer__contact-link">
              <Phone size={14} aria-hidden="true" />
              {company.phoneDisplay}
            </a>
            <a href={company.emailHref} className="site-footer__contact-link">
              <Mail size={14} aria-hidden="true" />
              {company.email}
            </a>
            <a
              href={getWhatsAppUrl(whatsappMessages.general)}
              className="site-footer__contact-link site-footer__contact-link--whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={14} aria-hidden="true" />
              WhatsApp enquiry
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {year} Shakti Global Exim. All rights reserved.</p>
          <p className="site-footer__disclaimer">
            Product images are representative. Final specifications, packaging
            and availability are confirmed on enquiry.
          </p>
          <a href="#home" className="site-footer__back-top">
            Back to top
            <ArrowUp size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
