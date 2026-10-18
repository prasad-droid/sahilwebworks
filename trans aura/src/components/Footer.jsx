import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { company, navLinks } from '../data/siteData'
import '../styles/Footer.css'

const productLinks = [
  'Industrial Chemicals',
  'Specialty Chemical Sourcing',
  'Bulk Product Sourcing',
  'Selected Commercial Products',
  'Customized B2B Procurement',
  'Export Supply Coordination'
]

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta">
          <div>
            <h2>Ready to Source from India?</h2>
            <p>Share your requirements and discuss the next steps with our team.</p>
          </div>
          <a
            href="#quote"
            className="btn btn--gold btn--lg"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('quote')
            }}
          >
            Request a Quote
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <svg viewBox="0 0 48 48" width="40" height="40" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="2.4" />
                <ellipse cx="24" cy="24" rx="6" ry="13" stroke="currentColor" strokeWidth="2" />
                <path d="M11 24h26M24 11v26" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="24" cy="24" r="2.6" fill="currentColor" />
              </svg>
              <div>
                <strong>Trans-Aura International</strong>
                <span>{company.tagline}</span>
              </div>
            </div>
            <p>{company.description}</p>
          </div>

          <nav className="footer__col" aria-label="Footer navigation">
            <h3>Quick Links</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(link.id)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h3>Products &amp; Services</h3>
            <ul>
              {productLinks.map((p) => (
                <li key={p}>
                  <a
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo('products')
                    }}
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3>Contact</h3>
            <ul className="footer__contact">
              <li>
                <a href={company.phoneHref}>
                  <Phone size={15} aria-hidden="true" />
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={company.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle size={15} aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={company.emailHref}>
                  <Mail size={15} aria-hidden="true" />
                  {company.email}
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=9%2F503%2C%20Agarwal%20Nagri%20Complex%2C%20Vasai%20Nalasopara%20Link%20Road%2C%20Vasai%20(E)%20-%20401208%2C%20India" target="_blank" rel="noreferrer">
                  <MapPin size={15} aria-hidden="true" />
                  {company.addressLines.join(', ')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} {company.name}. All rights reserved.</p>
          <p className="footer__legal">
            <a href="/privacy.html" onClick={(e) => e.preventDefault()} title="Page coming soon">
              Privacy Policy <span aria-hidden="true">(coming soon)</span>
            </a>
            <span aria-hidden="true">·</span>
            <a href="/terms.html" onClick={(e) => e.preventDefault()} title="Page coming soon">
              Terms of Use <span aria-hidden="true">(coming soon)</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}