import { ArrowRight, Ship } from 'lucide-react'
import SectionHeading from './SectionHeading'
import WorldMap from './WorldMap'
import { site } from '../data/site'
import { scrollToSection } from '../utils/scroll'
import '../styles/globaltrade.css'

export default function GlobalTrade() {
  return (
    <section id="global-trade" className="section global-trade" aria-labelledby="global-trade-title">
      <div className="container global-trade__grid">
        <div className="global-trade__copy">
          <SectionHeading
            eyebrow="Global Trade"
            titleId="global-trade-title"
            title="Connecting Opportunities Across Borders."
            description="We believe international trade creates opportunities for businesses to grow, connect, and build lasting partnerships."
          />
          <p>
            Sunscape Enterprises aims to develop a strong presence in the global marketplace through
            meaningful business connections and buyer relationships.
          </p>
          <a
            href="#contact"
            className="text-link"
            onClick={(event) => {
              event.preventDefault()
              scrollToSection('contact')
            }}
          >
            Discuss an opportunity <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="global-trade__visual" data-reveal>
          <div className="global-trade__map-panel">
            <WorldMap />
            <p className="global-trade__map-note">
              Illustrative connectivity graphic. No trade routes or destinations are implied.
            </p>
          </div>
          <div className="global-trade__photo">
            <img
              src={site.images.globalTrade}
              alt="Cargo ship representing international shipping"
              loading="lazy"
              width="1600"
              height="1067"
            />
            <span className="global-trade__photo-label">
              <Ship size={15} aria-hidden="true" /> International trade
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
