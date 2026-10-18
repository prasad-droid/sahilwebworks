import { Info, Quote } from 'lucide-react'
import '../styles/Testimonials.css'

function QuoteCard({ quote, name, role, placeholder }) {
  return (
    <figure className={placeholder ? 'testimonial__card testimonial__card--placeholder' : 'testimonial__card'}>
      <span className="testimonial__quote" aria-hidden="true">
        <Quote size={22} />
      </span>
      <blockquote>{quote}</blockquote>
      <figcaption>
        <span className="testimonial__avatar" aria-hidden="true" />
        <span>
          <strong>{name}</strong>
          <em>{role}</em>
        </span>
      </figcaption>
      {placeholder && <span className="testimonial__tag">Placeholder</span>}
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title">Building Trust Through Business Relationships</h2>
          <p className="section-sub">
            We value the feedback of our clients. Verified testimonials will be published here as
            they become available.
          </p>
        </div>

        <div className="testimonial__notice reveal">
          <Info size={18} aria-hidden="true" />
          <p>
            No customer testimonials have been supplied yet. This section is reserved for genuine,
            approved client feedback — the cards below are <strong>clearly marked placeholders</strong> and are
            not real endorsements.
          </p>
        </div>

        <div className="testimonial__grid">
          <QuoteCard
            placeholder
            quote="Verified client quotation will appear here once approved for publication."
            name="Client Name"
            role="Company / Role"
          />
          <QuoteCard
            placeholder
            quote="Verified client quotation will appear here once approved for publication."
            name="Client Name"
            role="Company / Role"
          />
          <QuoteCard
            placeholder
            quote="Verified client quotation will appear here once approved for publication."
            name="Client Name"
            role="Company / Role"
          />
        </div>
      </div>
    </section>
  )
}