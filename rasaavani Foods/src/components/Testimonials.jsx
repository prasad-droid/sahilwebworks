import { testimonials } from '../data/testimonials.js'
import '../styles/contact.css'

/**
 * Testimonials.
 *
 * Hidden entirely while no genuine, verified testimonials exist (see
 * data/testimonials.js). When real reviews are supplied the section renders
 * automatically — no invented names, ratings or endorsements.
 */
export default function Testimonials() {
  if (!testimonials || testimonials.length === 0) return null

  return (
    <section id="testimonials" className="section section--white testimonials">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <p className="eyebrow eyebrow--center">Kind Words</p>
          <h2>What People Say</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <figure
              key={item.id ?? index}
              className="testimonials__card"
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                {item.role && <span>{item.role}</span>}
                {item.company && <span>{item.company}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
