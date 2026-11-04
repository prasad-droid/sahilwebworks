import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../data/testimonials";

/**
 * Renders genuine testimonials when they exist in src/data/testimonials.js.
 * Nothing is ever invented here — the empty state is intentionally explicit.
 */
export default function Testimonials() {
  const hasTestimonials = Array.isArray(testimonials) && testimonials.length > 0;

  return (
    <section
      id="testimonials"
      className="testimonials section section--surface"
      aria-labelledby="testimonials-heading-title"
    >
      <div className="container">
        <SectionHeading
          id="testimonials-heading"
          label="TESTIMONIALS"
          title="What Our Partners Say"
          subtitle="Genuine feedback from clients and partners will be published here as relationships grow."
        />

        {hasTestimonials ? (
          <div className="testimonials__grid">
            {testimonials.map((item) => (
              <figure className="testimonial-card" key={item.id} data-reveal>
                <span className="testimonial-card__quote" aria-hidden="true">
                  <Icon name="quote" size={26} />
                </span>
                <blockquote>
                  <p>{item.quote}</p>
                </blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  {(item.role || item.country) && (
                    <span>{[item.role, item.country].filter(Boolean).join(" · ")}</span>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="testimonials__empty" data-reveal>
            <span className="testimonials__empty-icon" aria-hidden="true">
              <Icon name="quote" size={30} />
            </span>
            <p className="testimonials__empty-text">Client feedback will be featured here.</p>
            <p className="testimonials__empty-note">
              We only publish feedback shared directly by our clients and partners.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
