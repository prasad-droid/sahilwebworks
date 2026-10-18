import { FaStar, FaRegStar, FaQuoteRight } from "react-icons/fa6";
import { useReveal } from "../../hooks/useReveal";

const testimonials = [
  {
    name: "Anita Sharma",
    country: "India",
    business: "Boutique Owner, Mumbai",
    rating: 5,
    review:
      "Excellent quality jewellery at genuinely wholesale prices. The designs sell out fast in my boutique and the dispatch is always on time.",
  },
  {
    name: "David Fernandez",
    country: "Spain",
    business: "Import & Distribution",
    rating: 5,
    review:
      "A very professional export partner. Communication was clear throughout and the packaging was perfectly export-ready. Highly recommended.",
  },
  {
    name: "Fatima Al-Rashid",
    country: "UAE",
    business: "Lifestyle Store",
    rating: 5,
    review:
      "We started with a small bulk order and now reorder every season. Consistent quality and honest dealing — a supply partner we trust.",
  },
  {
    name: "Rahul Verma",
    country: "India",
    business: "Online Seller",
    rating: 4,
    review:
      "Great variety and fast responses on WhatsApp. Prices are competitive and the catalogue keeps up with current trends.",
  },
  {
    name: "Grace Okafor",
    country: "Nigeria",
    business: "Fashion Retailer",
    rating: 5,
    review:
      "Our container arrived beautifully packed and exactly as ordered. Reliable from enquiry to delivery. We look forward to growing together.",
  },
  {
    name: "Maya Patel",
    country: "India",
    business: "Wholesale Distributor",
    rating: 5,
    review:
      "Professional service with genuine flexibility on quantities and styles. A dependable merchant trader for our domestic network.",
  },
];

const stars = (n) =>
  Array.from({ length: 5 }, (_, i) =>
    i < n ? <FaStar key={i} aria-hidden="true" /> : <FaRegStar key={i} aria-hidden="true" />
  );

const Testimonials = () => {
  const ref = useReveal();

  return (
    <section className="section" id="testimonials" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title">Trusted By Buyers Worldwide</h2>
          <p className="section-subtitle">
            Boutiques, wholesalers, and importers across the globe rely on
            GHONS Global Impex for consistent supply and service.
          </p>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className="testimonial-card reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="testimonial-card__quote">
                <FaQuoteRight aria-hidden="true" />
              </span>
              <div className="testimonial-card__stars">{stars(t.rating)}</div>
              <p className="testimonial-card__review">“{t.review}”</p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__avatar">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__meta">
                    {t.business} · {t.country}
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
