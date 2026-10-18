import { whyFeatures } from '../data/why.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { Icon } from './Icons.jsx'

export default function WhyChooseUs() {
  return (
    <section className="why section section--cream" id="why-us">
      <div className="container">
        <SectionHeader
          eyebrow="Why Aviyana"
          title="Why Partner With Aviyana Enterprises?"
          align="center"
        />
        <div className="why__grid">
          {whyFeatures.map((feature, i) => (
            <Reveal key={feature.id} delay={(i % 3) * 120}>
              <article className={`why-card why-card--${feature.id}`}>
                <span className="why-card__icon" aria-hidden="true">
                  <Icon name={feature.icon} size={26} />
                </span>
                <h3 className="why-card__title">{feature.title}</h3>
                <p className="why-card__desc">{feature.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}