import { company } from '../data/company.js'
import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'

const contactChannels = [
  { icon: 'mail', title: 'Email', value: company.email, href: `mailto:${company.email}` },
  {
    icon: 'phone',
    title: 'Phone / WhatsApp',
    value: company.phone,
    href: `https://wa.me/${company.whatsappNumber}`,
  },
  { icon: 'pin', title: 'Office', value: company.addressLines.join(', '), href: company.mapsUrl },
]

export default function Contact({ onRequestQuote }) {
  const waLink = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__grid">
          <Reveal className="contact__main" variant="fade-right">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Let's Grow Globally Together</h2>
            <p className="section-subtitle">
              Have a product requirement? Let's discuss your next sourcing
              opportunity.
            </p>
            <div className="contact__channels">
              {contactChannels.map((channel) => (
                <a
                  key={channel.title}
                  className="contact__channel"
                  href={channel.href}
                  target={channel.icon === 'mail' || channel.icon === 'phone' ? '_self' : '_blank'}
                  rel="noreferrer"
                >
                  <span className="contact__channel-icon" aria-hidden="true">
                    <Icon name={channel.icon} size={22} />
                  </span>
                  <span>
                    <span className="contact__channel-label">{channel.title}</span>
                    <span className="contact__channel-value">{channel.value}</span>
                  </span>
                </a>
              ))}
            </div>
            <div className="contact__actions">
              <button type="button" className="btn btn--forest btn--md" onClick={onRequestQuote}>
                Request a Quote
                <Icon name="arrow" size={18} />
              </button>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline-forest btn--md"
              >
                <Icon name="whatsapp" size={18} />
                Chat on WhatsApp
              </a>
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--link"
              >
                View Location
                <Icon name="arrow" size={17} />
              </a>
            </div>
          </Reveal>

          <Reveal className="contact__aside" variant="fade-left" delay={140}>
            <div className="contact__card">
              <span className="contact__card-mark" aria-hidden="true">
                A
              </span>
              <p className="contact__card-name">AVIYANA</p>
              <p className="contact__card-sub">ENTERPRISES</p>
              <p className="contact__card-tagline">Rooted in Quality. Growing Globally.</p>
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="contact__card-map"
              >
                <Icon name="pin" size={16} />
                View Location
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}