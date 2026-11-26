import {
  ArrowUpRight,
  FileCheck2,
  FileSearch,
  Handshake,
  ListChecks,
  MessageCircle,
  MessageSquareText,
  Ship,
  SlidersHorizontal,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { benefits, whatsappMessages } from '../data/siteData'
import { getWhatsAppUrl } from '../utils/links'
import '../styles/WhyChooseUs.css'

const benefitIcons = {
  ListChecks,
  FileSearch,
  FileCheck2,
  MessageSquareText,
  SlidersHorizontal,
  Handshake,
}

export default function WhyChooseUs() {
  return (
    <section
      className="section why"
      id="why-us"
      aria-labelledby="why-title"
    >
      <div className="container why__inner">
        <Reveal className="why__media">
          <div className="why__image-wrap">
            <img
              src="/images/warehouse.jpg"
              alt="Representative image of a food storage and dispatch facility"
              width="1400"
              height="933"
              loading="lazy"
              decoding="async"
            />
            <span className="image-credit">Representative image</span>
          </div>

          <div className="why__overlay">
            <span className="why__overlay-icon" aria-hidden="true">
              <Ship size={19} />
            </span>
            <p>
              <small>Built for B2B</small>
              <strong>Clear communication. Practical coordination.</strong>
            </p>
          </div>

          <div className="why__frame" aria-hidden="true" />
        </Reveal>

        <div className="why__content">
          <Reveal>
            <SectionHeading
              id="why-title"
              eyebrow="Why Choose Us"
              title="A practical approach to international food supply."
              description="International sourcing works best when the product, packing and documentation expectations are clear. Our approach is built around that clarity."
            />
          </Reveal>

          <div className="why__grid">
            {benefits.map((benefit, index) => {
              const Icon = benefitIcons[benefit.icon] || ListChecks
              return (
                <Reveal
                  as="article"
                  className="why-card"
                  delay={(index % 2) * 70}
                  key={benefit.title}
                >
                  <span className="why-card__icon" aria-hidden="true">
                    <Icon size={17} />
                  </span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="why__footer" delay={80}>
            <a href="#quote" className="btn btn--dark">
              Request a Quote
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href={getWhatsAppUrl(whatsappMessages.general)}
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Or chat on WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
