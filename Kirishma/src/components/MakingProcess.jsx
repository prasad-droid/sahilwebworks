import { makingProcess } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'
import '../styles/process.css'

export default function MakingProcess() {
  const [ref, isVisible] = useReveal()

  return (
    <section className="process" id="process" aria-labelledby="process-heading">
      <div className="container">
        <SectionHeading
          label={makingProcess.label}
          heading={makingProcess.heading}
          text={makingProcess.text}
          id="process-heading"
        />

        <ol className={`process__timeline reveal ${isVisible ? 'is-visible' : ''}`.trim()} ref={ref}>
          {makingProcess.steps.map((step, index) => (
            <li
              className="process__step"
              key={step.id}
              style={{ '--i': index, '--reveal-delay': `${index * 110}ms` }}
            >
              <div className="process__marker" aria-hidden="true">
                <span className="process__number">{step.number}</span>
              </div>

              <div className="process__body">
                <h3 className="process__title">{step.title}</h3>
                <p className="process__text">{step.text}</p>
              </div>

              <figure className="process__media">
                <img
                  className="process__image"
                  src={step.image}
                  alt={step.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                />
              </figure>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
