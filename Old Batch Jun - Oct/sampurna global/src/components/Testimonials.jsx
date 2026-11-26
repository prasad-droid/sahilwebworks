import React from "react";
import { testimonials } from "../data/testimonials.js";
import { useReveal } from "../hooks/useReveal.js";
import "../styles/Testimonials.css";

/**
 * Customer Experiences.
 * Renders genuine testimonials when available. Until then it shows clearly
 * marked placeholders — never fabricated names, companies or ratings.
 */
const PLACEHOLDERS = [1, 2, 3];

export default function Testimonials() {
  const [ref, visible] = useReveal();
  const hasReal = testimonials.length > 0;
  const items = hasReal ? testimonials : PLACEHOLDERS;

  return (
    <section
      id="testimonials"
      className="testimonials section section--surface"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow">Testimonials</p>
          <h2 id="testimonials-heading">Customer Experiences</h2>
          <p>
            {hasReal
              ? "What buyers say about working with Sampurnm Global."
              : "This section is ready for genuine customer feedback. Placeholders are shown until verified reviews are supplied."}
          </p>
        </div>

        <div
          ref={ref}
          className={`testimonials__grid ${visible ? "is-visible" : ""}`}
        >
          {items.map((t, i) => (
            <figure
              key={hasReal ? t.id : `ph-${i}`}
              className={`testimonial reveal ${
                visible ? "is-visible" : ""
              } reveal--delay-${i + 1} ${hasReal ? "" : "testimonial--placeholder"}`}
            >
              <span className="testimonial__quote" aria-hidden="true">
                &ldquo;
              </span>

              {hasReal ? (
                <>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <span className="testimonial__avatar" aria-hidden="true">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <strong>{t.name}</strong>
                      <em>
                        {t.company}
                        {t.location ? ` • ${t.location}` : ""}
                      </em>
                    </span>
                  </figcaption>
                </>
              ) : (
                <>
                  <span className="badge badge--muted testimonial__badge">
                    Placeholder
                  </span>
                  <blockquote>
                    A genuine customer review will appear here once it has been
                    provided and verified. No names, companies or ratings have
                    been invented.
                  </blockquote>
                  <figcaption>
                    <span className="testimonial__avatar" aria-hidden="true">
                      ?
                    </span>
                    <span>
                      <strong>Awaiting verified review</strong>
                      <em>Sampurnm Global</em>
                    </span>
                  </figcaption>
                </>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
