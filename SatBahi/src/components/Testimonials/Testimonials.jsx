import { FiStar, FiMessageSquare } from "react-icons/fi";
import { Reveal } from "../../hooks/useScrollReveal";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="section" id="testimonials" aria-label="Testimonials">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Testimonials</span>
          <h2 className="section__title">What Our Buyers Say</h2>
          <p className="section__subtitle">
            Feedback from importers, wholesalers and brands we work with across
            international markets.
          </p>
        </Reveal>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i % 3}>
              <article className="testimonial-card">
                <FiMessageSquare className="testimonial-card__quote" aria-hidden="true" />
                <div className="testimonial-card__stars" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <FiStar
                      key={s}
                      className={s < t.rating ? "is-filled" : ""}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="testimonial-card__text">"{t.quote}"</p>
                <footer className="testimonial-card__author">
                  <span className="testimonial-card__avatar" aria-hidden="true">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>
                      {t.role}, {t.company}
                    </span>
                    <span>{t.country}</span>
                  </div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
