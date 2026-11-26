import { Mail, MapPin, MessageCircle, Phone, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { company } from '../data/siteData'
import { defaultWhatsappUrl } from '../utils/whatsapp'
import '../styles/Contact.css'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact Us"
          title="Get in Touch"
          subtitle="Reach out to discuss flexible cable products, your requirements and trading options."
          center
        />

        <div className="contact__grid">
          <div className="contact__cards" data-reveal="left">
            <article className="contact__card contact__card--brand">
              <h3>{company.name}</h3>
              <p>{company.tagline}</p>
            </article>

            <article className="contact__card">
              <span className="contact__icon" aria-hidden="true">
                <Phone size={21} />
              </span>
              <div>
                <h3>Phone</h3>
                {company.phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className="contact__value">
                    {phone.label}
                  </a>
                ))}
              </div>
            </article>

            <article className="contact__card">
              <span className="contact__icon" aria-hidden="true">
                <Mail size={21} />
              </span>
              <div>
                <h3>Email</h3>
                <a href={`mailto:${company.email}`} className="contact__value contact__value--break">
                  {company.email}
                </a>
              </div>
            </article>

            <article className="contact__card">
              <span className="contact__icon" aria-hidden="true">
                <MapPin size={21} />
              </span>
              <div>
                <h3>Office Address</h3>
                <p className="contact__address">{company.address}</p>
                <a
                  className="contact__map-link"
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </article>

            <a
              className="btn btn--whatsapp contact__whatsapp"
              href={defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp
            </a>
          </div>

          <div className="contact__map" data-reveal="right">
            <iframe
              src={company.mapsEmbedUrl}
              title="Map showing Sujata Global Exim office in Vishrantwadi, Pune"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
