import { ourValues } from '../data/siteData'
import Icon from './Icons'
import '../styles/OurValues.css'

export default function OurValues() {
  return (
    <section className="section section--alt values" id="values" aria-labelledby="values-title">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Our Values</p>
          <h2 className="section-title" id="values-title">
            Our Commitment to Engineering Excellence
          </h2>
          <p className="section-subtitle">
            The principles that guide how GLOBAL ENTERPRISES works with customers and partners.
            Final wording can be updated when the official values are supplied.
          </p>
        </div>

        <div className="values__grid">
          {ourValues.map((value, index) => (
            <article className={`value-card reveal delay-${(index % 3) + 1}`} key={value.id}>
              <div className="value-card__head">
                <span className="value-card__icon" aria-hidden="true">
                  <Icon name={value.icon} size={22} />
                </span>
                <h3 className="value-card__title">{value.title}</h3>
              </div>
              <p className="value-card__text">{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
