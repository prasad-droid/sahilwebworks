import { whyChooseUs } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'
import FeatureIcon from './FeatureIcon.jsx'
import '../styles/sections.css'

/** Feature grid explaining the product-focused reasons to explore the brand. */
export default function WhyChooseUs() {
  const [ref, isVisible] = useReveal()

  return (
    <section className="why" aria-labelledby="why-heading">
      <div className="container">
        <SectionHeading label={whyChooseUs.label} heading={whyChooseUs.heading} id="why-heading" />

        <ul className={`why__grid reveal ${isVisible ? 'is-visible' : ''}`.trim()} ref={ref}>
          {whyChooseUs.items.map((item, index) => (
            <li
              className="why__card"
              key={item.id}
              style={{ '--i': index, '--reveal-delay': `${index * 80}ms` }}
            >
              <span className="why__icon" aria-hidden="true">
                <FeatureIcon index={index} />
              </span>
              <h3 className="why__title">{item.title}</h3>
              <p className="why__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
