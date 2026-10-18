import { applications } from '../data/applications.js'
import { images } from '../data/images.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { Icon } from './Icons.jsx'

export default function Applications() {
  return (
    <section className="applications section section--beige" id="applications">
      <div className="container">
        <SectionHeader
          eyebrow="Applications"
          title="Ingredients Designed for Diverse Industries"
          align="center"
        />
        <div className="applications__grid">
          {applications.map((app, i) => (
            <Reveal key={app.id} delay={i * 100}>
              <article className="application-card">
                <div className="application-card__media">
                  <img
                    src={images[app.image].src}
                    alt={images[app.image].alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="application-card__icon" aria-hidden="true">
                    <Icon name={app.icon} size={24} />
                  </span>
                </div>
                <div className="application-card__body">
                  <h3 className="application-card__title">{app.title}</h3>
                  <p className="application-card__desc">{app.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}