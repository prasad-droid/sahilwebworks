import { ArrowUpRight, Quote, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "../data/site";

export default function Testimonials() {
  return (
    <section
      className="testimonials section"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <Reveal className="testimonials__head">
          <p className="eyebrow">
            <span>Customer Voices</span>
          </p>
          <h2 id="testimonials-title" className="section-title">
            What Our Customers Say
          </h2>
          <p className="section-lede">
            Trust is the starting point of every business relationship we hope
            to build.
          </p>
        </Reveal>

        {TESTIMONIALS.length > 0 ? (
          <div className="testimonials__grid">
            {TESTIMONIALS.map((testimonial, index) => (
              <Reveal
                as="figure"
                className="testimonial-card"
                delay={index * 80}
                key={`${testimonial.name}-${index}`}
              >
                <Quote size={22} strokeWidth={1.5} aria-hidden="true" />
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  <strong>{testimonial.name}</strong>
                  <span>
                    {[testimonial.role, testimonial.company]
                      .filter(Boolean)
                      .join(", ")}
                  </span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="testimonials__placeholder">
            <span className="testimonials__quote-mark" aria-hidden="true">
              <Quote size={30} strokeWidth={1.4} />
            </span>
            <blockquote>
              “We believe every successful business relationship begins with
              trust and grows through shared opportunities.”
            </blockquote>
            <div className="testimonials__meta">
              <span aria-hidden="true">
                <Sparkles size={15} />
              </span>
              <p>
                This space is reserved for genuine feedback from the customers
                and partners we work with.
              </p>
            </div>
            <a className="text-link" href="#inquiry">
              Begin a conversation
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
