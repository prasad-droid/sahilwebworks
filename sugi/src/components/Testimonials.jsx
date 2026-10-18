import { useSite } from "../store/SiteContext";
import "../styles/testimonials.css";

// ==========================================================================
// TESTIMONIALS — approved customer reviews from Admin Panel > Reviews.
// Renders nothing until at least one review is approved.
// ==========================================================================

function Stars({ rating }) {
  const value = Math.min(5, Math.max(1, Number(rating) || 5));
  return (
    <span className="testimonials__stars" aria-label={`${value} out of 5 stars`}>
      {"★".repeat(value)}
      <span className="testimonials__stars-empty">{"★".repeat(5 - value)}</span>
    </span>
  );
}

export default function Testimonials() {
  const { reviews = [], settings } = useSite();
  if (!settings?.features?.enableReviews) return null;

  const approved = (reviews || []).filter((r) => r.approved);
  if (approved.length === 0) return null;

  return (
    <section className="testimonials section-pad">
      <div className="container">
        <header className="testimonials__head reveal">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title">What Our Customers Say</h2>
        </header>

        <div className="testimonials__grid">
          {approved.map((review, i) => (
            <article
              className="testimonials__card reveal"
              key={review.id}
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <Stars rating={review.rating} />
              <p className="testimonials__text">“{review.text}”</p>

              {(review.beforeImage || review.afterImage) && (
                <div className="testimonials__ba">
                  {review.beforeImage && (
                    <figure>
                      <img src={review.beforeImage} alt="Before" loading="lazy" />
                      <figcaption>Before</figcaption>
                    </figure>
                  )}
                  {review.afterImage && (
                    <figure>
                      <img src={review.afterImage} alt="After" loading="lazy" />
                      <figcaption>After</figcaption>
                    </figure>
                  )}
                </div>
              )}

              <footer className="testimonials__author">
                {review.photo ? (
                  <img className="testimonials__avatar" src={review.photo} alt={review.name} loading="lazy" />
                ) : (
                  <span className="testimonials__avatar testimonials__avatar--initials">
                    {(review.name || "?").charAt(0).toUpperCase()}
                  </span>
                )}
                <span>
                  <strong>{review.name}</strong>
                  {review.company && <small>{review.company}</small>}
                </span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
