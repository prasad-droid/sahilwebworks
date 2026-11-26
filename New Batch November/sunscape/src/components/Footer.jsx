import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { site } from '../data/site'
import { buildWhatsappUrl } from '../utils/whatsapp'
import { scrollToSection } from '../utils/scroll'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a className="footer__logo" href="#home" onClick={(event) => {
            event.preventDefault()
            scrollToSection('home')
          }}>
            <img src={site.logoLight} alt="" width="46" height="46" />
            <span>
              <strong>{site.name}</strong>
              <small>{site.tagline}</small>
            </span>
          </a>
          <p>
            Sunscape Enterprises is an import and export business connecting buyers with business
            opportunities through professional communication and long-term relationships.
          </p>
        </div>

        <div className="footer__col">
          <h2>Quick Links</h2>
          <ul>
            {site.nav.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection(link.id)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h2>Contact Details</h2>
          <ul className="footer__contact">
            <li>
              <Phone size={16} aria-hidden="true" />
              <a href="tel:+917770007019">{site.contact.phone}</a>
            </li>
            <li>
              <MessageCircle size={16} aria-hidden="true" />
              <a
                href={buildWhatsappUrl(site.whatsapp.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.contact.whatsapp}
              </a>
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
          </ul>
          <a
            className="footer__cta"
            href={buildWhatsappUrl(site.whatsapp.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; 2026 Sunscape Enterprises. All Rights Reserved.</p>
        <span>Connecting Words, Creating Opportunities.</span>
      </div>
    </footer>
  )
}
