import {
  ArrowUpRight,
  FileText,
  Globe2,
  MessageCircle,
  MessagesSquare,
  PackageCheck,
  Repeat2,
  Ship,
  Snowflake,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { services, whatsappMessages } from '../data/siteData'
import { getWhatsAppUrl } from '../utils/links'
import '../styles/Services.css'

const serviceIcons = {
  Globe2,
  Snowflake,
  PackageCheck,
  FileText,
  Ship,
  MessagesSquare,
  Repeat2,
}

export default function Services() {
  return (
    <section
      className="section services"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="services__glow" aria-hidden="true" />

      <div className="container">
        <div className="services__header">
          <Reveal>
            <SectionHeading
              id="services-title"
              eyebrow="Export Services"
              title="Support that goes beyond the product."
              description="From the first product discussion to shipment coordination, our services are structured around the practical needs of international food buyers."
              light
            />
          </Reveal>

          <Reveal className="services__header-aside" delay={80}>
            <span className="services__aside-line" aria-hidden="true" />
            <p>
              One point of contact
              <strong>From enquiry to shipment</strong>
            </p>
          </Reveal>
        </div>

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon] || Globe2
            return (
              <Reveal
                as="article"
                className="service-card"
                delay={(index % 3) * 70}
                key={service.title}
              >
                <div className="service-card__top">
                  <span className="service-card__icon" aria-hidden="true">
                    <Icon size={19} />
                  </span>
                  <span className="service-card__number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="services__cta" delay={80}>
          <div>
            <p className="services__cta-title">Have an export requirement?</p>
            <p className="services__cta-text">
              Share your product, quantity and destination. We will respond with
              the relevant next steps.
            </p>
          </div>
          <div className="services__cta-actions">
            <a href="#quote" className="btn btn--primary">
              Request a Quote
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href={getWhatsAppUrl(whatsappMessages.general)}
              className="btn btn--light-outline"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
