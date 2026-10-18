import { FaStar, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import "@/styles/testimonials.css";

const TESTIMONIALS = [
  {
    name: "James Carter",
    country: "United Kingdom",
    company: "MediCare Supply Co.",
    rating: 5,
    review:
      "ViOm Global Exim has been a dependable partner for our medical supply needs. Consistent quality, transparent communication, and on-time deliveries every single time.",
  },
  {
    name: "Amira Hassan",
    country: "United Arab Emirates",
    company: "Gulf Health Distributors",
    rating: 5,
    review:
      "Their product quality and packaging standards are excellent. The team made the entire import process smooth and handled our bulk orders with great professionalism.",
  },
  {
    name: "Daniel Osei",
    country: "Ghana",
    company: "WestCare Medical Group",
    rating: 5,
    review:
      "Reliable Indian exporter with genuine commitment to quality. Documentation was accurate, shipments arrived on schedule, and their support team is always responsive.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-head reveal" data-animation="fade-up">
          <span className="section-tag">Testimonials</span>
          <h2>
            Trusted by Buyers <span>Around the World</span>
          </h2>
          <p>Hear from healthcare partners who rely on ViOm Global Exim for their medical supplies.</p>
        </div>

        <div className="testimonials__slider reveal" data-animation="scale">
          <button className="testimonials__arrow" aria-label="Previous testimonial" onClick={prev}>
            <FiChevronLeft />
          </button>

          <div className="testimonials__track" key={index}>
            <div className="testimonials__card">
              <FaQuoteRight className="testimonials__quote" />
              <div className="testimonials__stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="testimonials__review">{t.review}</p>
              <div className="testimonials__person">
                <span className="testimonials__avatar">{t.name.charAt(0)}</span>
                <div>
                  <h3>{t.name}</h3>
                  <span>
                    {t.company} · {t.country}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button className="testimonials__arrow" aria-label="Next testimonial" onClick={next}>
            <FiChevronRight />
          </button>
        </div>

        <div className="testimonials__dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${i === index ? "is-active" : ""}`}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
