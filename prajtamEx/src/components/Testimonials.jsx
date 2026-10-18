import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../data/testimonials";

/**
 * The section renders only when genuine testimonials exist in
 * src/data/testimonials.js — nothing is ever invented here.
 */
export default function Testimonials() {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="testimonials section section--surface" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading
          id="testimonials"
          label="TESTIMONIALS"
          title="What Our Partners Say"
        />

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
                <span className="testimonial-card__name">{item.name}</span>
                <span className="testimonial-card__role">
                  {[item.role, item.country].filter(Boolean).join(" • ")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
