import { testimonials, showTestimonialsPlaceholder } from '../data/testimonials.js'
import useReveal from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'
import '../styles/sections.css'

/**
 * Testimonials.
 *
 * No customer testimonials have been supplied, so the section renders nothing
 * in production. In development a subtle placeholder marks where the section
 * will appear once real reviews are added to src/data/testimonials.js.
 *
 * The markup below is ready for real entries: add objects to the
 * `testimonials` array and the grid will populate automatically.
 */
export default function Testimonials() {
  const [ref, isVisible] = useReveal()
  const hasTestimonials = testimonials.length > 0

  if (!hasTestimonials) {
    if (!showTestimonialsPlaceholder) return null

    return (
      <section className="testimonials testimonials--placeholder" aria-labelledby="testimonials-heading">
        <div className="container">
          <SectionHeading label="Testimonials" heading="Customer Testimonials" id="testimonials-heading" />
          <p className="testimonials__placeholder-note reveal is-visible" ref={ref}>
            Customer testimonials will appear here once they are supplied. Add entries to{' '}
            <code>src/data/testimonials.js</code> to publish this section.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionHeading label="Testimonials" heading="What Our Customers Say" id="testimonials-heading" />

        <ul className={`testimonials__grid reveal ${isVisible ? 'is-visible' : ''}`.trim()} ref={ref}>
          {testimonials.map((testimonial, index) => (
            <li
              className="testimonial"
              key={testimonial.id ?? index}
              style={{ '--i': index, '--reveal-delay': `${index * 80}ms` }}
            >
              <blockquote className="testimonial__quote">{testimonial.text}</blockquote>
              <p className="testimonial__name">{testimonial.name}</p>
              {testimonial.location ? <p className="testimonial__location">{testimonial.location}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
