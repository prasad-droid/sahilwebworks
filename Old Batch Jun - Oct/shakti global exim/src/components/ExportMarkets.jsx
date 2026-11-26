import { ArrowUpRight, Globe2, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { targetMarkets } from '../data/siteData'
import '../styles/ExportMarkets.css'

export default function ExportMarkets() {
  return (
    <section
      className="section markets"
      id="markets"
      aria-labelledby="markets-title"
    >
      <div className="container">
        <div className="markets__header">
          <Reveal>
            <SectionHeading
              id="markets-title"
              eyebrow="Export Markets"
              title="A current focus on two key regions."
              description="Our export conversations are currently centred on the Middle East and Southeast Asia, with a focus on importers, distributors and food-service businesses."
            />
          </Reveal>

          <Reveal className="markets__header-stat" delay={80}>
            <span className="markets__stat-number">02</span>
            <span className="markets__stat-label">Focus regions</span>
            <p>Middle East &amp; Southeast Asia</p>
          </Reveal>
        </div>

        <div className="markets__layout">
          <Reveal className="markets__map-panel">
            <div className="markets__map-head">
              <span className="markets__map-icon" aria-hidden="true">
                <Globe2 size={18} />
              </span>
              <div>
                <p>Target export markets</p>
                <span>Current focus</span>
              </div>
            </div>

            <div className="markets__map">
              <img
                src="/images/world-map.svg"
                alt=""
                width="4378"
                height="2435"
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
              <span className="markets__marker markets__marker--me">
                <span className="markets__marker-dot" aria-hidden="true" />
                <span className="markets__marker-label">Middle East</span>
              </span>
              <span className="markets__marker markets__marker--sea">
                <span className="markets__marker-dot" aria-hidden="true" />
                <span className="markets__marker-label">Southeast Asia</span>
              </span>
            </div>

            <div className="markets__map-foot">
              <span>
                <i aria-hidden="true" />
                Region of current export focus
              </span>
              <span>India-based supply</span>
            </div>
          </Reveal>

          <div className="markets__regions">
            {targetMarkets.map((market, index) => (
              <Reveal
                as="article"
                className="market-card"
                delay={index * 90}
                key={market.region}
              >
                <div className="market-card__top">
                  <span className="market-card__icon" aria-hidden="true">
                    <MapPin size={18} />
                  </span>
                  <span className="market-card__tag">Focus region</span>
                </div>
                <h3>{market.region}</h3>
                <p>{market.description}</p>
                <a
                  href="#quote"
                  className="market-card__link"
                  aria-label={`Enquire about supply to ${market.region}`}
                >
                  Discuss this market
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </Reveal>
            ))}

            <Reveal className="markets__destination" delay={120}>
              <p>
                Share your destination port or city in the enquiry form so we
                can review your requirement in context.
              </p>
              <a href="#quote" className="text-link">
                Add destination to enquiry
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
