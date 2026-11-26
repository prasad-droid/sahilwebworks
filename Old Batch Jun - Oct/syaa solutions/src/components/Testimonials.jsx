import { Quote } from 'lucide-react';
import { testimonialPlaceholder } from '../data/site.js';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-heading section-heading-center" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Testimonials
          </p>
          <h2 id="testimonials-title">Building Business Relationships Through Trust.</h2>
        </div>

        <div className="testimonial-placeholder" data-reveal>
          <Quote size={34} strokeWidth={1.4} aria-hidden="true" />
          <p>{testimonialPlaceholder}</p>
          <span>Genuine customer feedback will be added here when provided.</span>
        </div>
      </div>
    </section>
  );
}
