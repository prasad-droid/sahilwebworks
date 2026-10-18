import { testimonials } from '../data/siteData'
import Icon from './Icons'
import '../styles/Testimonials.css'

export default function Testimonials() {
  if (!testimonials.enabled) return null

  return (
    <section className="section testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title" id="testimonials-title">
            What Our Customers Say
          </h2>
          <p className="section-subtitle">
            Genuine customer feedback will be published here once it becomes available. The cards
            below are clearly marked placeholders.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.items.map((item, index) => (
            <figure
              className={`testimonial-card reveal delay-${(index % 3) + 1}`}
              key={item.id}
            >
              <span className="testimonial-card__quote" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="testimonial-card__text">{item.quote}</blockquote>

              <figcaption className="testimonial-card__author">
                <span className="testimonial-card__avatar" aria-hidden="true">
                  <Icon name="customer" size={22} />
                </span>
                <span className="testimonial-card__meta">
                  <strong>{item.name}</strong>
                  <span>
                    {item.role} · {item.company}
                  </span>
                </span>
              </figcaption>

              {item.isPlaceholder && (
                <span className="testimonial-card__flag">Placeholder — replace with real feedback</span>
              )}
            </figure>
          ))}
        </div>

        <p className="testimonials__note reveal">
          <Icon name="clipboard" size={17} />
          Do not publish invented names, quotations or ratings. Replace the placeholders in{' '}
          <code>testimonials.items</code> or set <code>enabled: false</code> to hide this section.
        </p>
      </div>
    </section>
  )
}
