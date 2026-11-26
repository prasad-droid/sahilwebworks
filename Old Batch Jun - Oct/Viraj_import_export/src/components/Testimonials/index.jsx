import { FiStar } from "react-icons/fi";
import { testimonials } from "../../data/data";

const Testimonials = () => (
  <section id="testimonials" className="testimonials section">
    <div className="container">
      <div className="section__head" data-reveal>
        <span className="section__eyebrow">Testimonials</span>
        <h2 className="section__title">Trusted by Buyers Worldwide</h2>
        <p className="section__sub">
          What importers, wholesalers, and hospitality buyers say about partnering with us.
        </p>
      </div>

      <div className="testimonials__grid">
        {testimonials.map((t, i) => (
          <article className="testimonial-card" key={t.name} data-reveal style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
            <div className="testimonial-card__stars" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, s) => (
                <FiStar key={s} className={s < t.rating ? "is-filled" : ""} />
              ))}
            </div>
            <blockquote className="testimonial-card__review">&ldquo;{t.review}&rdquo;</blockquote>
            <div className="testimonial-card__person">
              <span className="testimonial-card__avatar" aria-hidden="true">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="testimonial-card__name">{t.name}</p>
                <p className="testimonial-card__meta">
                  {t.business} · {t.country}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
