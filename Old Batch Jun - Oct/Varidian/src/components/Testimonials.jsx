import { testimonials } from "../data/testimonials";
import "../styles/testimonials.css";
import Reveal from "./Reveal";

export default function Testimonials() {
  if (testimonials.length === 0) {
    if (import.meta.env.DEV) {
      return (
        <section className="testimonials testimonials--empty">
          <div className="container">
            <p className="testimonials__placeholder">
              Testimonials: add verified customer reviews to{" "}
              <code>src/data/testimonials.js</code>. No reviews are displayed until
              real ones are added.
            </p>
          </div>
        </section>
      );
    }
    return null;
  }

  return (
    <section id="testimonials" className="section testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <Reveal className="section-head center">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title" id="testimonials-title">
            Trusted by International Partners
          </h2>
        </Reveal>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name || index} delay={`reveal-delay-${(index % 3) + 1}`}>
              <figure className="testimonial">
                <span className="testimonial__quote" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote>{testimonial.message}</blockquote>
                <figcaption>
                  <strong>{testimonial.name}</strong>
                  <span>
                    {testimonial.role}
                    {testimonial.company ? ` · ${testimonial.company}` : ""}
                  </span>
                  <em>{testimonial.country}</em>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}