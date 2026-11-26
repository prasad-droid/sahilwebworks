import { FaQuoteLeft, FaStar, FaRegStar } from "react-icons/fa";
import Reveal from "../common/Reveal";
import SectionHead from "../common/SectionHead";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    quote:
      "Nilipar Enterprises supplies consistent, export-quality jute bags that our retail customers love. Reliable communication and on-time shipments every single time.",
    name: "Daniel Carter",
    role: "Purchasing Manager, Packaging Importer",
    country: "United Kingdom",
    initials: "DC",
  },
  {
    quote:
      "Their bagasse tableware has become a core part of our eco-friendly range. Great quality, competitive pricing, and a team that genuinely understands sustainability.",
    name: "Sophie Müller",
    role: "Category Buyer, Retail Chain",
    country: "Germany",
    initials: "SM",
  },
  {
    quote:
      "From custom branding to bulk container orders, the team handled everything professionally. A dependable export partner for our hotel group across Europe.",
    name: "Marco Rossi",
    role: "Procurement Director, Hospitality Group",
    country: "Italy",
    initials: "MR",
  },
];

function Stars() {
  return (
    <div className="testimonial__stars" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} aria-hidden="true" />
      ))}
      <FaRegStar aria-hidden="true" className="testimonial__star-empty" />
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section--tint">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="Testimonials"
            title="What Our Global Buyers Say"
            description="Trusted by importers, wholesalers and hospitality businesses across the USA and Europe."
          />
        </Reveal>

        <div className="testimonial__grid">
          {TESTIMONIALS.map(({ quote, name, role, country, initials }, index) => (
            <Reveal key={name} direction="up" delay={index * 120} className="testimonial__item">
              <figure className="testimonial__card">
                <FaQuoteLeft className="testimonial__quote" aria-hidden="true" />
                <Stars />
                <blockquote className="testimonial__text">“{quote}”</blockquote>
                <figcaption className="testimonial__person">
                  <span className="testimonial__avatar" aria-hidden="true">
                    {initials}
                  </span>
                  <span>
                    <strong>{name}</strong>
                    <small>
                      {role} · {country}
                    </small>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
