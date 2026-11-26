import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/testimonials'
import '../styles/testimonials.css'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const hasTestimonials = testimonials.length > 0

  const move = (direction) => {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          titleId="testimonials-title"
          title="Relationships That Create Opportunities."
          description="Genuine feedback from the businesses we work with will be shared here."
          align="center"
        />

        <div className="testimonials__stage" data-reveal aria-live="polite">
          {hasTestimonials ? (
            <>
              <article className="testimonial-card">
                <Quote className="testimonial-card__quote-icon" size={30} aria-hidden="true" />
                <p>&ldquo;{testimonials[index].quote}&rdquo;</p>
                <div className="testimonial-card__person">
                  <strong>{testimonials[index].name}</strong>
                  <span>
                    {testimonials[index].company} &middot; {testimonials[index].country}
                  </span>
                </div>
              </article>

              {testimonials.length > 1 && (
                <>
                  <button
                    type="button"
                    className="carousel-arrow carousel-arrow--prev"
                    aria-label="Previous testimonial"
                    onClick={() => move(-1)}
                  >
                    <ChevronLeft size={20} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="carousel-arrow carousel-arrow--next"
                    aria-label="Next testimonial"
                    onClick={() => move(1)}
                  >
                    <ChevronRight size={20} aria-hidden="true" />
                  </button>
                  <div className="carousel-dots">
                    {testimonials.map((item, dotIndex) => (
                      <button
                        key={item.id}
                        type="button"
                        className={dotIndex === index ? 'is-active' : ''}
                        aria-label={`Show testimonial ${dotIndex + 1}`}
                        aria-current={dotIndex === index ? 'true' : undefined}
                        onClick={() => setIndex(dotIndex)}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="testimonials__empty">
              <span className="testimonials__empty-icon">
                <Quote size={28} aria-hidden="true" />
              </span>
              <h3>Client stories will appear here.</h3>
              <p>
                We will add genuine, approved feedback when it is available. No testimonials or
                identities have been invented.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
