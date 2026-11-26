import { StarIcon, QuoteIcon } from "./icons.jsx";
import useReveal from "../hooks/useReveal.js";
import "../styles/sections.css";

const TESTIMONIALS = [
  {
    quote: "Excellent towel quality and highly professional export service.",
    name: "Mohammed Al Farsi",
    role: "Import Director, Middle East",
  },
  {
    quote: "Reliable supplier with competitive pricing and timely delivery.",
    name: "Elena Petrova",
    role: "Procurement Head, Europe",
  },
  {
    quote: "Outstanding communication and consistent product quality.",
    name: "David Thompson",
    role: "Retail Chain Buyer, North America",
  },
  {
    quote: "Trusted sourcing partner for our hospitality requirements.",
    name: "Sarah Mitchell",
    role: "Hotel Supplies Manager, Australia",
  },
];

const Testimonials = () => {
  const ref = useReveal();

  return (
    <section className="section" id="testimonials">
      <div className="container" ref={ref}>
        <div className="section-header reveal">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">
            Trusted By Buyers <span>Worldwide</span>
          </h2>
          <p className="section-subtitle">
            What importers, wholesalers, and hospitality partners say about working with us.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              className="testimonial-card reveal"
              key={t.name}
              style={{ "--delay": `${(i % 2) * 0.12}s` }}
            >
              <span className="quote-mark">“</span>
              <div className="stars">
                {[...Array(5)].map((_, s) => (
                  <StarIcon key={s} />
                ))}
              </div>
              <blockquote>{t.quote}</blockquote>
              <div className="testimonial-author">
                <span className="avatar">{t.name.charAt(0)}</span>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
                <QuoteIcon style={{ marginLeft: "auto", width: 26, height: 26, opacity: 0.15 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
