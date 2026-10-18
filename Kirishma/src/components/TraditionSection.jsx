import { traditionContent } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'
import '../styles/sections.css'

/** Editorial section showing how the traditional range fits daily life. */
export default function TraditionSection() {
  const [ref, isVisible] = useReveal()

  return (
    <section className="tradition" aria-labelledby="tradition-heading">
      <div className="container tradition__grid">
        <div className="tradition__media" ref={ref}>
          <figure className={`tradition__figure reveal ${isVisible ? 'is-visible' : ''}`.trim()}>
            <img
              className="tradition__image"
              src={traditionContent.image}
              alt={traditionContent.imageAlt}
              loading="lazy"
              decoding="async"
              width="1100"
              height="733"
            />
            <span className="tradition__stamp" aria-hidden="true">
              <span>Traditional</span>
              <span>Food Culture</span>
            </span>
          </figure>
        </div>

        <div className={`tradition__content reveal ${isVisible ? 'is-visible' : ''}`.trim()}>
          <SectionHeading
            label={traditionContent.label}
            heading={traditionContent.heading}
            text={traditionContent.text}
            id="tradition-heading"
            align="left"
          />

          <ul className="tradition__list">
            {traditionContent.items.map((item, index) => (
              <li className="tradition__item" key={item.id} style={{ '--i': index }}>
                <span className="tradition__item-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="tradition__item-title">{item.title}</h3>
                  <p className="tradition__item-text">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
