import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { company } from '../data/siteData'
import '../styles/Contact.css'

const mapsQuery = encodeURIComponent(company.addressLines.join(' '))
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

const details = [
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: company.phoneDisplay,
    href: company.phoneHref,
    hint: 'Call us'
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: company.phoneDisplay,
    href: company.whatsappHref,
    hint: 'Chat on WhatsApp',
    external: true
  },
  {
    icon: Mail,
    label: 'Email',
    value: company.email,
    href: company.emailHref,
    hint: 'Send us an email'
  },
  {
    icon: MapPin,
    label: 'Registered Address',
    value: company.addressLines,
    href: mapsUrl,
    hint: 'View on Google Maps',
    external: true,
    isAddress: true
  }
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head section-head--left reveal">
          <p className="eyebrow">Contact Us</p>
          <h2 className="section-title">Contact Trans-Aura International</h2>
          <p className="section-sub">
            Contact us to discuss industrial chemical sourcing, product requirements, export
            coordination, or potential B2B partnerships.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__list reveal">
            {details.map(({ icon: Icon, label, value, href, hint, external, isAddress }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="contact__item"
              >
                <span className="contact__icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <span className="contact__body">
                  <span className="contact__label">{label}</span>
                  {isAddress ? (
                    <span className="contact__value">
                      {company.addressLines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </span>
                  ) : (
                    <span className="contact__value">{value}</span>
                  )}
                  <span className="contact__hint">
                    {hint}
                    <ExternalLink size={13} aria-hidden="true" />
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="contact__side reveal" style={{ '--reveal-delay': '0.15s' }}>
            <div className="contact__side-art" aria-hidden="true">
              <svg viewBox="0 0 60 60" width="74" height="74" fill="none">
                <circle cx="30" cy="30" r="18" stroke="currentColor" strokeWidth="2.6" />
                <ellipse cx="30" cy="30" rx="8" ry="18" stroke="currentColor" strokeWidth="2.2" />
                <path d="M12 30h36M30 12v36" stroke="currentColor" strokeWidth="2.4" />
                <circle cx="30" cy="30" r="3.4" fill="currentColor" />
              </svg>
            </div>
            <h3>{company.name}</h3>
            <p className="contact__tagline">{company.tagline}</p>
            <p>
              We respond to B2B sourcing enquiries during standard business hours. For the fastest
              turnaround, include your product category, required quantities, and destination market
              in your first message.
            </p>
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary btn--lg"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}