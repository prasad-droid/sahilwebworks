import {
  ArrowUpRight,
  Globe2,
  MessageCircle,
  PackageCheck,
  Snowflake,
} from 'lucide-react'
import { heroHighlights, whatsappMessages } from '../data/siteData'
import { getWhatsAppUrl } from '../utils/links'
import '../styles/Hero.css'

const highlightIcons = [Snowflake, PackageCheck, Globe2]

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />
      <div className="hero__grid-lines" aria-hidden="true" />

      <div className="container">
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              India-Based Food Exports
            </p>

            <h1 className="hero__title" id="hero-title">
              Frozen French fries.
              <span>Export-ready from India.</span>
            </h1>

            <p className="hero__description">
              Shakti Global Exim offers coated frozen French fries — a 9 mm
              cut, 10 kg packing and -18°C storage — for importers, distributors
              and food-service buyers, with a current focus on the Middle East
              and Southeast Asia.
            </p>

            <div className="hero__actions">
              <a href="#quote" className="btn btn--primary">
                Request a Quote
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href="#products" className="btn btn--light-outline">
                Explore the Product
              </a>
            </div>

            <ul className="hero__highlights">
              {heroHighlights.map((item, index) => {
                const Icon = highlightIcons[index]
                return (
                  <li className="hero__highlight" key={item.title}>
                    <span className="hero__highlight-icon" aria-hidden="true">
                      <Icon size={16} />
                    </span>
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.description}</small>
                    </span>
                  </li>
                )
              })}
            </ul>

            <p className="hero__contact-line">
              Prefer a direct conversation?
              <a
                href={getWhatsAppUrl(whatsappMessages.general)}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={15} aria-hidden="true" />
                Message us on WhatsApp
              </a>
            </p>
          </div>

          <div className="hero__visual">
            <div className="hero__frame" aria-hidden="true" />

            <figure className="hero__image-card">
              <img
                src="/images/hero-fries.jpg"
                alt="Representative image of golden French fries served on a dark surface"
                width="1200"
                height="1600"
                fetchPriority="high"
                decoding="async"
              />
              <span className="image-credit">Representative image</span>
              <span className="hero__product-badge">
                <Snowflake size={14} aria-hidden="true" />
                Flagship export product
              </span>
            </figure>

            <div className="hero__spec-card">
              <p className="hero__spec-label">Product snapshot</p>
              <dl className="hero__specs">
                <div>
                  <dt>Cut</dt>
                  <dd>9 mm</dd>
                </div>
                <div>
                  <dt>Packing</dt>
                  <dd>10 kg</dd>
                </div>
                <div>
                  <dt>Storage</dt>
                  <dd>-18°C</dd>
                </div>
              </dl>
            </div>

            <div className="hero__market-card">
              <span className="hero__market-icon" aria-hidden="true">
                <Globe2 size={18} />
              </span>
              <p>
                <small>Target markets</small>
                <strong>Middle East &amp; Southeast Asia</strong>
              </p>
            </div>
          </div>
        </div>

        <dl className="hero__facts" aria-label="Key export facts">
          <div>
            <dt>Primary product</dt>
            <dd>Coated Frozen French Fries</dd>
          </div>
          <div>
            <dt>Cut</dt>
            <dd>9 mm</dd>
          </div>
          <div>
            <dt>Packing</dt>
            <dd>10 kg</dd>
          </div>
          <div>
            <dt>Target markets</dt>
            <dd>Middle East &amp; Southeast Asia</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
