import { testimonials } from '../data/testimonials';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import '../styles/Testimonials.css';

export default function Testimonials() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section id="testimonials" className="testimonials section--tight section--beige">
      <div className="container">
        <SectionHeading
          eyebrow="Customer Feedback"
          title="Building Relationships That Matter"
          align="center"
        />

        {hasTestimonials ? (
          <div className="testimonials__grid">
            {testimonials.map((testimonial, index) => (
              <Reveal
                as="blockquote"
                className="testimonial-card"
                key={testimonial.id}
                delay={80 + index * 60}
                y={18}
              >
                <p className="testimonial-card__quote">{testimonial.quote}</p>
                <footer className="testimonial-card__footer">
                  <cite className="testimonial-card__name">{testimonial.name}</cite>
                  <span className="testimonial-card__meta">
                    {[testimonial.role, testimonial.location].filter(Boolean).join(' · ')}
                  </span>
                </footer>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal as="div" className="testimonials__empty-state" delay={120} y={16} role="status">
            <span className="testimonials__empty-mark" aria-hidden="true">“</span>
            <p className="testimonials__empty-text">
              Our customer experiences will be featured here soon.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
