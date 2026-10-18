import Logo from './Logo.jsx'
import { navLinks, site, whatsappLink } from '../data/site.js'
import { IconMail, IconPhone, IconPin, IconWhatsApp } from './Icons.jsx'
import '../styles/footer.css'

const productLinks = [
  { label: 'Lal Mirch Bharwa Achaar', href: '#signature' },
  { label: 'Traditional Pickles', href: '#products' },
  { label: 'Regional Specialities', href: '#products' },
  { label: 'Seasonal Preserves', href: '#products' },
  { label: 'Heritage Foods', href: '#products' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo variant="light" />
          <p className="footer__tagline">{site.tagline}</p>
          <p className="footer__desc">{site.description}</p>

          <ul className="footer__social" aria-label="Contact channels">
            <li>
              <a
                href={`mailto:${site.email}`}
                aria-label={`Email ${site.email}`}
              >
                <IconMail />
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phoneHref}`}
                aria-label={`Call ${site.phoneDisplay}`}
              >
                <IconPhone />
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <IconWhatsApp />
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer__col" aria-label="Footer navigation">
          <h3>Navigation</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Product links">
          <h3>Products</h3>
          <ul>
            {productLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3>Contact</h3>
          <ul className="footer__contact">
            <li>
              <IconMail aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <IconPhone aria-hidden="true" />
              <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <IconPin aria-hidden="true" />
              <span>{site.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>&copy; 2026 Rasavaani. All Rights Reserved.</p>
          <a href="#home" className="footer__top">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
