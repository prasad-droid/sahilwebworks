import { useEffect, useState } from 'react'
import { company, navLinks, productCategories } from '../data/siteData'
import { requestEnquiry } from '../utils/enquiry'
import Icon from './Icons'
import '../styles/Footer.css'

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    body: 'This Privacy Policy is a placeholder. The final policy will be published here once it is prepared. Until then, details submitted through this website are used only to respond to your enquiry.',
  },
  terms: {
    title: 'Terms & Conditions',
    body: 'These Terms & Conditions are a placeholder. The final terms will be published here once they are prepared.',
  },
}

export default function Footer() {
  const [legal, setLegal] = useState(null)
  const year = new Date().getFullYear()

  useEffect(() => {
    if (!legal) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setLegal(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [legal])

  return (
    <footer className="footer" id="footer">
      <div className="footer__cta-band">
        <div className="container footer__cta-inner">
          <div>
            <h2 className="footer__cta-title">Looking for the Right Engineering Products?</h2>
            <p className="footer__cta-text">
              Share your requirement and GLOBAL ENTERPRISES will help you find the products you need.
            </p>
          </div>
          <a
            href="#enquiry"
            className="btn btn--primary btn--lg"
            onClick={() => requestEnquiry()}
          >
            Send an Enquiry
            <Icon name="arrowRight" size={19} className="icon-trailing" />
          </a>
        </div>
      </div>

      <div className="container footer__main">
        <div className="footer__col footer__col--brand">
          <a href="#home" className="footer__brand" aria-label={`${company.name} — home`}>
            <span className="footer__logo" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="36" height="36" role="presentation">
                <rect x="1.5" y="1.5" width="45" height="45" rx="10" fill="#ffffff" />
                <path
                  d="M16 32V16h16"
                  fill="none"
                  stroke="var(--navy-900)"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 24h8v8h-8z"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="3.4"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="footer__brand-text">
              <strong>GLOBAL</strong> ENTERPRISES
            </span>
          </a>
          <p className="footer__tagline">{company.tagline}</p>
          <p className="footer__desc">
            Supplier of engineering goods for industrial requirements. Our website is being
            developed to help customers discover our product range and enquire about their needs.
          </p>
          <div className="footer__social">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Icon name="whatsapp" size={20} />
            </a>
            <a href={`mailto:${company.email}`} aria-label="Email">
              <Icon name="mail" size={20} />
            </a>
            <a href={`tel:${company.phoneIntl}`} aria-label="Phone">
              <Icon name="phone" size={20} />
            </a>
          </div>
        </div>

        <nav className="footer__col" aria-label="Quick links">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#why-us">Why Choose Us</a>
            </li>
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Product categories">
          <h3 className="footer__heading">Product Categories</h3>
          <ul className="footer__links">
            {productCategories.map((category) => (
              <li key={category.id}>
                <a href="#products">{category.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col footer__col--contact">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__contact">
            <li>
              <Icon name="mapPin" size={18} />
              <span>
                {company.address.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <a href={`tel:${company.phoneIntl}`}>+91 {company.phone}</a>
            </li>
            <li>
              <Icon name="whatsapp" size={18} />
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +91 {company.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <div className="footer__legal">
            <button type="button" onClick={() => setLegal('privacy')}>
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button type="button" onClick={() => setLegal('terms')}>
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>

      {legal && (
        <div
          className="legal-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-title"
          onClick={() => setLegal(null)}
        >
          <div className="legal-modal__panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="legal-modal__close"
              onClick={() => setLegal(null)}
              aria-label="Close"
            >
              <Icon name="close" size={20} />
            </button>
            <span className="placeholder-tag">Placeholder</span>
            <h3 id="legal-title">{legalContent[legal].title}</h3>
            <p>{legalContent[legal].body}</p>
            <p className="placeholder-note">
              Replace this content with the finalized {legalContent[legal].title.toLowerCase()}.
            </p>
            <button type="button" className="btn btn--navy btn--sm" onClick={() => setLegal(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  )
}
