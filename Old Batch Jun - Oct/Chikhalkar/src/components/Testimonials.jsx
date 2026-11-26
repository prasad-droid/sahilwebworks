import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "Excellent towel quality and professional customer support.",
    author: "Hotel Procurement Manager",
    role: "Middle East",
  },
  {
    text: "Reliable supplier with consistent product standards.",
    author: "Hospitality Buyer",
    role: "Europe",
  },
  {
    text: "Timely delivery and exceptional export experience.",
    author: "Wellness & Spa Importer",
    role: "Southeast Asia",
  },
  {
    text: "Trusted long-term partner for hospitality textile requirements.",
    author: "Institutional Distributor",
    role: "North America",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <div className="container">
      <div className="section-head">
        <span className="section-tag reveal" data-animation="fade-up">Testimonials</span>
        <h2 className="reveal" data-animation="fade-up" data-delay="1">
          What Our <span>Global Clients Say</span>
        </h2>
        <p className="reveal" data-animation="fade-up" data-delay="2">
          Trusted by hospitality, healthcare, and wellness businesses around the world.
        </p>
      </div>

      <div className="testimonials__grid">
        {TESTIMONIALS.map((t, i) => (
          <div className="testimonial-card reveal" data-animation="fade-up" data-delay={i % 4} key={i}>
            <div className="testimonial-card__quote">
              <Quote size={20} />
            </div>
            <p className="testimonial-card__text">"{t.text}"</p>
            <div className="testimonial-card__stars">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={15} fill="currentColor" />
              ))}
            </div>
            <div className="testimonial-card__author">
              <span className="testimonial-card__avatar">{t.author.charAt(0)}</span>
              <div>
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
