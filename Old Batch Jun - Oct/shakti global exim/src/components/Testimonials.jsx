import {
  ArrowUpRight,
  ClipboardCheck,
  Handshake,
  MessagesSquare,
  Quote,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { commitments } from '../data/siteData'
import '../styles/Testimonials.css'

const commitmentIcons = {
  MessagesSquare,
  ClipboardCheck,
  Handshake,
}

export default function Testimonials() {
  return (
    <section
      className="section testimonials"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="testimonials__mark" aria-hidden="true">
        &ldquo;
      </div>

      <div className="container">
        <div className="testimonials__header">
          <Reveal>
            <SectionHeading
              id="testimonials-title"
              eyebrow="Our Commitment to Buyers"
              title="Trust is built through the work, not a quote on a page."
              description="These are the commitments we bring to every buyer conversation and shipment — the standards behind Global Reach. Trusted Quality."
            />
          </Reveal>

          <Reveal className="testimonials__badge" delay={80}>
            <span className="testimonials__badge-icon" aria-hidden="true">
              <Quote size={22} />
            </span>
            <p>
              <small>Our standard</small>
              <strong>Global Reach. Trusted Quality.</strong>
            </p>
          </Reveal>
        </div>

        <div className="testimonials__grid">
          {commitments.map((commitment, index) => {
            const Icon = commitmentIcons[commitment.icon] || Handshake
            return (
              <Reveal
                as="article"
                className="commitment-card"
                delay={index * 80}
                key={commitment.title}
              >
                <div className="commitment-card__top">
                  <span className="commitment-card__icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <span className="commitment-card__number">
                    0{index + 1}
                  </span>
                </div>
                <h3>{commitment.title}</h3>
                <p>{commitment.description}</p>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="testimonials__footer" delay={80}>
          <p>
            Authentic buyer feedback will be published here only when it is
            available and approved for use.
          </p>
          <a href="#contact" className="text-link">
            Start a conversation with our team
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
