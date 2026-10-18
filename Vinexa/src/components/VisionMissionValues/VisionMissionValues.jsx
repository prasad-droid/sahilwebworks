import { FaEye, FaBullseye, FaHeart, FaCheckCircle } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import SectionHeading from "../SectionHeading/SectionHeading";

const coreValues = [
  "Customer-centricity",
  "Integrity",
  "Exporting Excellence",
  "Reliability",
  "Continuous Improvement",
];

/**
 * Vision, Mission & Core Values cards.
 */
export default function VisionMissionValues() {
  return (
    <section className="section section--tint" aria-labelledby="vmv-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Vision & Values"
          title="What Drives Us"
          sub="Clear principles that guide how we serve every customer and partner."
        />
        <div className="values__grid">
          <ScrollReveal className="values-card" delay={0}>
            <span className="values-card__icon">
              <FaEye size={24} aria-hidden="true" />
            </span>
            <h3>Our Vision</h3>
            <p>
              To become a globally trusted sourcing and export partner by delivering world-class
              products and creating long-term value for customers through quality, innovation, and
              reliability.
            </p>
          </ScrollReveal>
          <ScrollReveal className="values-card" delay={120}>
            <span className="values-card__icon">
              <FaBullseye size={24} aria-hidden="true" />
            </span>
            <h3>Our Mission</h3>
            <p>
              To help global buyers source premium-quality products from India with confidence by
              delivering reliable sourcing, assured quality, competitive pricing, and timely
              delivery.
            </p>
          </ScrollReveal>
          <ScrollReveal className="values-card" delay={240}>
            <span className="values-card__icon">
              <FaHeart size={24} aria-hidden="true" />
            </span>
            <h3>Our Core Values</h3>
            <ul>
              {coreValues.map((v) => (
                <li key={v}>
                  <FaCheckCircle size={15} aria-hidden="true" /> {v}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
