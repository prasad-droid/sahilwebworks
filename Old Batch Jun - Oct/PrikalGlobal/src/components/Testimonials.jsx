import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal.jsx";

const TESTIMONIALS = [
  {
    quote: "Excellent quality paper bags and professional service.",
    author: "Retail Chain Buyer",
    role: "United States",
  },
  {
    quote: "Reliable export partner with timely deliveries.",
    author: "Wholesale Distributor",
    role: "Canada",
  },
  {
    quote: "Outstanding customization and branding solutions.",
    author: "E-commerce Brand",
    role: "United Kingdom",
  },
  {
    quote: "Highly recommended for sustainable packaging requirements.",
    author: "Food & Beverage Business",
    role: "Europe",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="section testimonials">
    <div className="container">
      <Reveal className="section-head">
        <span className="eyebrow">Testimonials</span>
        <h2 className="section-title">
          Trusted By Businesses <span className="accent">Worldwide</span>
        </h2>
        <p className="section-desc">
          Importers, distributors, and brands across global markets rely on PRIKAL GLOBAL
          for sustainable packaging excellence.
        </p>
      </Reveal>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.author} delay={(i % 2) * 100}>
            <div className="testimonial-card">
              <div className="testimonial-quote">
                <Quote size={30} />
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.author.charAt(0)}</div>
                <div>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
