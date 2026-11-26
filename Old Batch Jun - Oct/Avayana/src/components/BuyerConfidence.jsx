import { trustPrinciples } from '../data/trust.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { Icon } from './Icons.jsx'

export default function BuyerConfidence() {
  return (
    <section className="confidence section section--beige">
      <div className="container">
        <SectionHeader
          eyebrow="Buyer Confidence"
          title="Built Around Buyer Confidence"
          subtitle="The principles behind every sourcing conversation."
          align="center"
        />
        <div className="confidence__grid">
          {trustPrinciples.map((principle, i) => (
            <Reveal key={principle.id} delay={i * 120}>
              <article className="confidence-card">
                <span className="confidence-card__icon" aria-hidden="true">
                  <Icon name={principle.icon} size={28} />
                </span>
                <h3 className="confidence-card__title">{principle.title}</h3>
                <p className="confidence-card__desc">{principle.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}