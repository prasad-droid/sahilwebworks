import { ArrowUpRight, Handshake, PackageSearch, UserRoundSearch } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { partnershipCards } from '../data/features'
import { site } from '../data/site'
import '../styles/partnership.css'

const iconMap = { package: PackageSearch, buyer: UserRoundSearch, partnership: Handshake }

export default function BusinessPartnership({ onQuote }) {
  return (
    <section id="partnership" className="section partnership" aria-labelledby="partnership-title">
      <div className="container partnership__grid">
        <div className="partnership__intro">
          <SectionHeading
            eyebrow="Business Partnership"
            titleId="partnership-title"
            title="Let's Create Opportunities Together."
            description="Whether you are a buyer, importer, distributor, wholesaler, or business organization, Sunscape Enterprises welcomes inquiries and opportunities to develop meaningful business relationships."
          />
          <div className="partnership__image" data-reveal>
            <img
              src={site.images.partnership}
              alt="Business team in discussion"
              loading="lazy"
              width="1200"
              height="800"
            />
          </div>
        </div>

        <div className="partnership__cards">
          {partnershipCards.map(({ title, description, icon }) => {
            const Icon = iconMap[icon]
            return (
              <article className="partnership-card" key={title} data-reveal>
                <span className="partnership-card__icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <button type="button" onClick={onQuote} aria-label={`Contact us about ${title}`}>
                  Contact Us <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
