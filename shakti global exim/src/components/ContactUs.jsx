import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { company, whatsappMessages } from '../data/siteData'
import { getWhatsAppUrl } from '../utils/links'
import '../styles/ContactUs.css'

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  company.address.full,
)}`

const contactChannels = [
  {
    label: 'Call us',
    value: company.phoneDisplay,
    href: company.phoneHref,
    icon: Phone,
    external: false,
  },
  {
    label: 'Email us',
    value: company.email,
    href: company.emailHref,
    icon: Mail,
    external: false,
  },
  {
    label: 'WhatsApp',
    value: 'Start a WhatsApp conversation',
    href: getWhatsAppUrl(whatsappMessages.general),
    icon: MessageCircle,
    external: true,
  },
]

export default function ContactUs() {
  return (
    <section
      className="section contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact__frame">
          <Reveal className="contact__aside">
            <SectionHeading
              id="contact-title"
              eyebrow="Contact Us"
              title="Let’s talk about your requirement."
              light
            />

            <p className="contact__lead">
              Reach out directly, or use the quote form to share detailed product
              and shipment requirements with our team.
            </p>

            <div className="contact__channels">
              {contactChannels.map((channel) => {
                const Icon = channel.icon
                return (
                  <a
                    href={channel.href}
                    className="contact-channel"
                    key={channel.label}
                    {...(channel.external
                      ? { target: '_blank', rel: 'noreferrer' }
                      : {})}
                  >
                    <span className="contact-channel__icon" aria-hidden="true">
                      <Icon size={17} />
                    </span>
                    <span className="contact-channel__text">
                      <small>{channel.label}</small>
                      <strong>{channel.value}</strong>
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="contact-channel__arrow"
                      aria-hidden="true"
                    />
                  </a>
                )
              })}
            </div>

            <div className="contact__actions">
              <a href="#quote" className="btn btn--primary">
                Request a Quote
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href={directionsUrl}
                className="btn btn--light-outline"
                target="_blank"
                rel="noreferrer"
              >
                <Navigation size={15} aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </Reveal>

          <Reveal className="contact__location" delay={90}>
            <div className="contact__location-head">
              <div>
                <p className="contact__eyebrow">Our location</p>
                <h3>Navi Mumbai, Maharashtra</h3>
                <span className="contact__country">India</span>
              </div>
              <span className="contact__pin" aria-hidden="true">
                <MapPin size={22} />
              </span>
            </div>

            <address className="contact__address">
              {company.address.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>

            <div className="contact__map" aria-hidden="true">
              <span className="contact__map-road contact__map-road--one" />
              <span className="contact__map-road contact__map-road--two" />
              <span className="contact__map-road contact__map-road--three" />
              <span className="contact__map-marker">
                <span className="contact__map-dot" />
                <span className="contact__map-label">Navi Mumbai</span>
              </span>
              <span className="contact__map-water" />
            </div>

            <div className="contact__location-foot">
              <p>
                For a detailed export enquiry, include your product,
                specifications, quantity and destination port or city.
              </p>
              <a
                href={directionsUrl}
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
