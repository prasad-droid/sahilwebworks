import { whyChooseUs } from '../data/siteData'
import Icon from './Icons'
import '../styles/WhyChooseUs.css'

export default function WhyChooseUs() {
  return (
    <section className="section section--navy why" id="why-us" aria-labelledby="why-title">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="section-title" id="why-title">
            Why Choose GLOBAL ENTERPRISES?
          </h2>
          <p className="section-subtitle">
            Our approach is built around understanding your requirement and coordinating the
            engineering products you need.
          </p>
        </div>

        <div className="why__grid">
          {whyChooseUs.map((item, index) => (
            <article className={`why-card reveal delay-${(index % 3) + 1}`} key={item.id}>
              <span className="why-card__icon" aria-hidden="true">
                <Icon name={item.icon} size={26} />
              </span>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__text">{item.text}</p>
            </article>
          ))}
        </div>

        <p className="why__note reveal">
          <Icon name="clipboard" size={17} />
          These are suggested messaging themes — confirm or adjust them once the final business
          details are supplied.
        </p>
      </div>
    </section>
  )
}
