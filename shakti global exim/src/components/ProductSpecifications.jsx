import {
  ArrowUpRight,
  FileText,
  MessageCircle,
  PackageCheck,
  Ship,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { productSpecs, whatsappMessages } from '../data/siteData'
import { getWhatsAppUrl, requestProduct } from '../utils/links'
import '../styles/ProductSpecifications.css'

const buyerRequirements = [
  {
    icon: PackageCheck,
    title: 'Packaging requirements',
    text: 'Discuss packing formats and order presentation.',
  },
  {
    icon: Ship,
    title: 'Destination and shipment',
    text: 'Share the destination port, city and shipment expectations.',
  },
  {
    icon: FileText,
    title: 'Documentation needs',
    text: 'Coordinate the commercial and export documents required.',
  },
]

export default function ProductSpecifications() {
  return (
    <section
      className="section specs"
      id="specifications"
      aria-labelledby="specs-title"
    >
      <div className="container specs__inner">
        <div className="specs__content">
          <Reveal>
            <SectionHeading
              id="specs-title"
              eyebrow="Product Specifications"
              title="The details buyers ask for, stated clearly."
              description="These are the core product details currently available for our coated frozen French fries. Order-specific requirements can be discussed directly with our team."
            />
          </Reveal>

          <Reveal delay={70}>
            <dl className="specs__table">
              {productSpecs.map((spec) => (
                <div
                  className={`specs__row ${spec.wide ? 'specs__row--wide' : ''}`}
                  key={spec.label}
                >
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>

            <p className="specs__note">
              Specifications above describe our primary product. Please confirm
              current availability and order-specific details with our team
              before purchase.
            </p>

            <div className="specs__actions">
              <button
                type="button"
                className="btn btn--dark"
                onClick={() => requestProduct('Frozen French Fries')}
              >
                Enquire About This Product
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
              <a
                href={getWhatsAppUrl(whatsappMessages.quote)}
                className="btn btn--outline"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Ask on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="specs__side" delay={100}>
          <figure className="specs__image">
            <img
              src="/images/product-packaging.jpg"
              alt="Frozen French fries product presentation supplied by Shakti Global Exim"
              width="1536"
              height="1024"
              loading="lazy"
              decoding="async"
            />
            <span className="image-credit">Supplied image</span>
          </figure>

          <div className="specs__buyer-card">
            <p className="specs__buyer-eyebrow">
              For a precise quotation, share
            </p>
            <ul className="specs__buyer-list">
              {buyerRequirements.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.title}>
                    <span aria-hidden="true">
                      <Icon size={16} />
                    </span>
                    <p>
                      <strong>{item.title}</strong>
                      <small>{item.text}</small>
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
