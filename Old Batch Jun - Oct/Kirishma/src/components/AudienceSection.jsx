import { audienceContent } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'
import '../styles/sections.css'

/** Audience cards reflecting the supplied target audience. */
export default function AudienceSection() {
  const [ref, isVisible] = useReveal()

  return (
    <section className="audience" aria-labelledby="audience-heading">
      <div className="container">
        <SectionHeading
          label={audienceContent.label}
          heading={audienceContent.heading}
          id="audience-heading"
        />

        <ul className={`audience__grid reveal ${isVisible ? 'is-visible' : ''}`.trim()} ref={ref}>
          {audienceContent.items.map((item, index) => (
            <li
              className={`audience__card reveal is-visible tone-${index + 1}`}
              key={item.id}
              style={{ '--i': index, '--reveal-delay': `${index * 90}ms` }}
            >
              <span className="audience__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="audience__title">{item.title}</h3>
              <p className="audience__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
