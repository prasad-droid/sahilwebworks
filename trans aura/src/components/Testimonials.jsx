import { Quote } from 'lucide-react'
import '../styles/Testimonials.css'

// Sample testimonial copy for the website. Replace with verified client feedback
// (and written permission to publish) before the site goes live.
const testimonials = [
  {
    quote:
      'We were looking for a dependable source for dyes and dye intermediates, and the team understood our specification sheet from the first conversation. Communication was clear, samples were coordinated quickly, and the shipment arrived as discussed. They are now one of our regular sourcing partners.',
    name: 'Daniel Whitmore',
    role: 'Procurement Manager · Chemical Distribution, United Kingdom'
  },
  {
    quote:
      'Trans-Aura helped us shortlist a supplier for organic and inorganic chemicals when our usual route became unreliable. What stood out was the follow-up — every update, document and timeline was shared without us having to chase. A professional and transparent team to work with.',
    name: 'Amina Al-Farsi',
    role: 'Sourcing Director · Industrial Trading, United Arab Emirates'
  },
  {
    quote:
      'Our requirement was for cosmetic-grade oils, including castor oil, in trial quantities before scaling up. The team handled the enquiry patiently and stayed involved through packing and dispatch. The quality matched what was agreed and we have since placed a repeat order.',
    name: 'Sophie Laurent',
    role: 'Category Buyer · Personal Care Brand, France'
  }
]

function QuoteCard({ quote, name, role, index }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <figure className="testimonial__card reveal" style={{ '--reveal-delay': `${(index % 3) * 0.1}s` }}>
      <span className="testimonial__quote" aria-hidden="true">
        <Quote size={22} />
      </span>
      <blockquote>{quote}</blockquote>
      <figcaption>
        <span className="testimonial__avatar" aria-hidden="true">
          {initials}
        </span>
        <span>
          <strong>{name}</strong>
          <em>{role}</em>
        </span>
      </figcaption>
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
            Feedback from buyers who have worked with us on chemical, agro and essential oil
            sourcing from India.
          </p>
        </div>

        <div className="testimonial__grid">
          {testimonials.map(({ quote, name, role }, i) => (
            <QuoteCard key={name} quote={quote} name={name} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
