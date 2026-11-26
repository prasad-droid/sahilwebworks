import {
  ArrowUpRight,
  Check,
  MessageCircle,
  Package,
  Snowflake,
  Thermometer,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { whatsappMessages } from '../data/siteData'
import { getWhatsAppUrl, requestProduct } from '../utils/links'
import '../styles/Products.css'

const productFacts = [
  { label: 'Cut', value: '9 mm', icon: Check },
  { label: 'Type', value: 'Coated', icon: Snowflake },
  { label: 'Packing', value: '10 kg', icon: Package },
  { label: 'Storage', value: '-18°C', icon: Thermometer },
]

const suitedFor = [
  'Restaurants',
  'QSRs',
  'Hotels',
  'Food-service distributors',
  'Wholesalers',
]

const gallery = [
  {
    src: '/images/gallery-fries-1.jpg',
    alt: 'Frozen French fries product presentation supplied by Shakti Global Exim',
  },
  {
    src: '/images/gallery-fries-2.jpg',
    alt: 'Frozen French fries product presentation supplied by Shakti Global Exim',
  },
  {
    src: '/images/gallery-fries-3.jpg',
    alt: 'Frozen French fries product presentation supplied by Shakti Global Exim',
  },
]

export default function Products() {
  return (
    <section
      className="section products"
      id="products"
      aria-labelledby="products-title"
    >
      <div className="container">
        <div className="products__top">
          <Reveal>
            <SectionHeading
              id="products-title"
              eyebrow="Our Flagship Product"
              title="Frozen French fries, built for food-service buyers."
              description="A focused frozen product for professional kitchens, backed by clear specifications and export-ready packing."
            />
          </Reveal>

          <Reveal className="products__top-note" delay={80}>
            <span className="products__top-number">9 mm</span>
            <span className="products__top-label">Specified cut</span>
            <p>
              Coated frozen French fries for importers, distributors and
              food-service operators.
            </p>
          </Reveal>
        </div>

        <Reveal className="products__spotlight" delay={60}>
          <div className="products__media">
            <figure className="products__main-image">
              <img
                src="/images/product-fries.jpg"
                alt="Representative image of frozen French fries prepared for serving"
                width="1600"
                height="1067"
                loading="lazy"
                decoding="async"
              />
              <span className="image-credit">Representative image</span>
              <span className="products__image-badge">Flagship product</span>
            </figure>

            <div className="products__gallery" aria-label="Supplied product images">
              {gallery.map((image) => (
                <figure className="products__thumb" key={image.src}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    width="1536"
                    height="1024"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
            <p className="products__media-note">
              Product imagery supplied by Shakti Global Exim.
            </p>
          </div>

          <div className="products__content">
            <p className="products__badge">
              <Snowflake size={13} aria-hidden="true" />
              Primary export product
            </p>

            <h3 className="products__name">Coated Frozen French Fries</h3>

            <p className="products__description">
              Our frozen French fries are offered with a specified 9 mm cut,
              10 kg packing and -18°C storage. They are intended for
              restaurants, QSRs, hotels, food-service distributors and
              wholesalers across our target export markets.
            </p>

            <dl className="products__facts">
              {productFacts.map((fact) => {
                const Icon = fact.icon
                return (
                  <div key={fact.label}>
                    <dt>
                      <Icon size={13} aria-hidden="true" />
                      {fact.label}
                    </dt>
                    <dd>{fact.value}</dd>
                  </div>
                )
              })}
            </dl>

            <div className="products__suited">
              <p>Suitable for</p>
              <ul>
                {suitedFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="products__actions">
              <button
                type="button"
                className="btn btn--dark"
                onClick={() => requestProduct('Frozen French Fries')}
              >
                Request a Quote
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
              <a
                href={getWhatsAppUrl(whatsappMessages.quote)}
                className="btn btn--outline"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp Enquiry
              </a>
            </div>

            <p className="products__spec-link">
              Need the full product breakdown?{' '}
              <a href="#specifications">View specifications</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
