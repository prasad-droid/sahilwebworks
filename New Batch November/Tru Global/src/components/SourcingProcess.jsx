import {
  ClipboardList,
  Search,
  Sprout,
  Microscope,
  FileText,
  Ship,
} from 'lucide-react'
import SectionHeading from './SectionHeading'
import { processSteps } from '../data/siteData'
import '../styles/SourcingProcess.css'

const icons = {
  clipboard: ClipboardList,
  search: Search,
  sprout: Sprout,
  microscope: Microscope,
  'file-text': FileText,
  ship: Ship,
}

export default function SourcingProcess() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Our Sourcing & Export Process"
          title={<>From Indian Suppliers to <span className="highlight-word">Your Global Destination.</span></>}
          subtitle="A coordinated sourcing and export workflow, adapted to each buyer's product, destination and commercial terms."
        />

        <div className="process__timeline">
          {processSteps.map((step, index) => {
            const Icon = icons[step.icon] || Sprout
            return (
              <article
                className="process__step"
                key={step.number}
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="process__marker">
                  <span className="process__dot"><Icon aria-hidden="true" /></span>
                  <span className="process__line" aria-hidden="true" />
                </div>
                <span className="process__number">Step {step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            )
          })}
        </div>

        <p className="process__note" data-reveal>
          Each stage is coordinated as part of our sourcing and export support, according to the agreed
          requirements and terms with the buyer.
        </p>
      </div>
    </section>
  )
}
