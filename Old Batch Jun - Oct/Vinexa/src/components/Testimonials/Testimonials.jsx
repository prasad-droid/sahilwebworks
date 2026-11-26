import { useMemo } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "../../data/testimonials";
import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const VISIBLE_COUNT = 3;

/**
 * Testimonials section. Shows a random selection of testimonials on each
 * visit (see src/data/testimonials.js).
 */
export default function Testimonials() {
  const visible = useMemo(() => {
    const shuffled = [...testimonials];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, VISIBLE_COUNT);
  }, []);

  return (
    <section className="section section--tint" aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Global Buyers Say"
          sub="Feedback from buyers who source through VINEXA GLOBAL ENTERPRISES."
        />

        <div className="testimonial-grid">
          {visible.map((t, i) => (
            <ScrollReveal key={t.id} className="testimonial-card" delay={i * 120}>
              <FaQuoteLeft size={26} aria-hidden="true" className="testimonial-card__quote" />
              <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, s) => (
                  <FaStar key={s} size={13} aria-hidden="true" />
                ))}
              </div>
              <p className="testimonial-card__text">&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <strong>{t.name}</strong>
                <span>
                  {t.company}
                  {t.country ? ` — ${t.country}` : ""}
                </span>
              </footer>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
