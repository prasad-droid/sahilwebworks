import { industriesServed } from '../data/siteData'
import Icon from './Icons'
import '../styles/IndustriesServed.css'

const INDUSTRY_IMAGE =
  'https://images.unsplash.com/photo-1565043732395-6b8d8b9c1f4f?auto=format&fit=crop&w=1100&q=80'

export default function IndustriesServed() {
  return (
    <section className="section industries" id="industries" aria-labelledby="industries-title">
      <div className="container">
        <div className="industries__intro reveal">
          <div className="section-head section-head--left">
            <p className="eyebrow">Industries Served</p>
            <h2 className="section-title" id="industries-title">
              Serving Engineering Industries
            </h2>
            <p className="section-subtitle">
              GLOBAL ENTERPRISES supplies engineering goods across a range of industrial and
              commercial requirements. The segments below are examples and remain editable until
              the business confirms its actual target industries.
            </p>
            <span className="placeholder-tag" style={{ marginTop: '16px' }}>
              Example segments — confirm with the business
            </span>
          </div>

          <div className="industries__image">
            <img
              src={INDUSTRY_IMAGE}
              alt="Heavy industrial manufacturing environment with steel structures"
              loading="lazy"
              width="1100"
              height="820"
            />
            <div className="industries__image-overlay" aria-hidden="true" />
          </div>
        </div>

        <ul className="industries__list">
          {industriesServed.map((industry, index) => (
            <li className={`industry-item reveal delay-${(index % 5) + 1}`} key={industry.id}>
              <span className="industry-item__icon" aria-hidden="true">
                <Icon name={industry.icon} size={24} />
              </span>
              <div>
                <h3 className="industry-item__title">{industry.title}</h3>
                <p className="industry-item__text">{industry.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
