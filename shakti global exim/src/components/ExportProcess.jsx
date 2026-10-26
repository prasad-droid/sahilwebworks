import { ArrowUpRight, MessageCircle, Ship } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { processSteps, whatsappMessages } from '../data/siteData'
import { getWhatsAppUrl } from '../utils/links'
import '../styles/ExportProcess.css'

export default function ExportProcess() {
  return (
    <section
      className="section process"
      id="process"
      aria-labelledby="process-title"
    >
      <div className="container">
        <div className="process__header">
          <Reveal>
            <SectionHeading
              id="process-title"
              eyebrow="Export Process"
              title="A clear path from enquiry to shipment."
              description="Five practical stages keep the conversation structured and the requirements visible at every step."
            />
          </Reveal>

          <Reveal className="process__start" delay={80}>
            <span className="process__start-icon" aria-hidden="true">
              <Ship size={19} />
            </span>
            <div>
              <p>Start here</p>
              <a href="#quote">
                Share your requirement
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <ol className="process__steps">
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              className="process-step"
              delay={index * 70}
              key={step.number}
            >
              <span className="process-step__marker" aria-hidden="true">
                {step.number}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="process__cta" delay={80}>
          <div>
            <p className="process__cta-title">
              Ready to start with your product requirement?
            </p>
            <p className="process__cta-text">
              The enquiry form collects the essentials: product, specification,
              quantity, packaging and destination.
            </p>
          </div>
          <div className="process__cta-actions">
            <a href="#quote" className="btn btn--dark">
              Start an Enquiry
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href={getWhatsAppUrl(whatsappMessages.general)}
              className="btn btn--outline"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
