import { services } from '../data/services.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { Icon } from './Icons.jsx'

export default function Services({ onEnquire }) {
  return (
    <section className="services section" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="Supply Solutions Built Around Your Requirements"
          subtitle="Demand-oriented support — from product discussions to bulk and export requirements."
          align="center"
        />
        <div className="services__grid">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 90}>
              <article className="service-card">
                <span className="service-card__icon" aria-hidden="true">
                  <Icon name={service.icon} size={26} />
                </span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="services__cta" delay={200}>
          <button type="button" className="btn btn--forest btn--md" onClick={onEnquire}>
            Discuss Your Requirement
            <Icon name="arrow" size={18} />
          </button>
        </Reveal>
      </div>
    </section>
  )
}