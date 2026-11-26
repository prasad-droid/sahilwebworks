import { process } from '../data/process.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function SupplyProcess() {
  return (
    <section className="process section" id="process">
      <div className="container">
        <SectionHeader
          eyebrow="Quality & Supply"
          title="From Sourcing to Supply"
          subtitle="A coordinated approach to identify, prepare and supply suitable Indian agricultural products."
          align="center"
        />
        <div className="process__grid">
          {process.map((step, i) => (
            <Reveal key={step.num} delay={i * 130} className="process__step">
              <div className="process__node">
                <span className="process__num">{step.num}</span>
                {i < process.length - 1 && <span className="process__link" aria-hidden="true" />}
              </div>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__desc">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}