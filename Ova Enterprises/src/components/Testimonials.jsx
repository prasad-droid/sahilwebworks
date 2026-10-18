import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Ovaa Enterprises delivered exactly what our boutique needed. The leather quality and finishing surpassed our expectations — our customers keep asking for more.",
    name: "Sophia Laurent",
    role: "Fashion Retailer, France",
  },
  {
    quote:
      "A highly dependable export partner. Every bulk order arrived on schedule with flawless quality inspection and complete documentation. Truly professional.",
    name: "David Kim",
    role: "Wholesale Distributor, South Korea",
  },
  {
    quote:
      "We launched a private label range with them and the craftsmanship was exceptional. Clear communication and a team that genuinely cares about your brand.",
    name: "Amara Okafor",
    role: "Brand Owner, UAE",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="section testimonials">
    <div className="container">
      <Reveal className="section-head section-head--center">
        <span className="section-tag">Testimonials</span>
        <h2 className="section-title">
          What Our <span className="accent">Clients Say</span>
        </h2>
        <p className="section-sub">
          Trusted by importers, retailers and brands across the globe.
        </p>
      </Reveal>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} type="fade-up" delay={i * 120}>
            <div className="testimonial-card">
              <span className="quote-mark">
                <FaQuoteLeft />
              </span>
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, s) => (
                  <FaStar key={s} />
                ))}
              </div>
              <p className="testimonial-text">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal type="fade-up">
        <p className="testimonial-cta">
          Ready to become our next success story? <a href="#contact">Partner with us today</a>.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Testimonials;
