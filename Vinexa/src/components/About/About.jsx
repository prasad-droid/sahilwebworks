import { FaCheckCircle } from "react-icons/fa";
import aboutImg from "../../assets/images/office image.jpeg";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const highlights = [
  "Agricultural Products",
  "Engineering Products",
  "Engineering Services",
  "Customized Product Sourcing",
];

/**
 * About the company — media + content with highlights.
 */
export default function About() {
  return (
    <section className="section" aria-labelledby="about-heading">
      <div className="container about__grid">
        <ScrollReveal className="about__media">
          <div className="about__media-img">
            <img
              src={aboutImg}
              alt="VINEXA GLOBAL ENTERPRISES — Our Office"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <div className="about__content">
          <ScrollReveal>
            <span className="section-eyebrow">About Us</span>
            <h2 id="about-heading" className="section-title">
              Your Trusted Sourcing Partner from India
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p>
              VINEXA GLOBAL ENTERPRISES is a trusted merchant exporter based in India, committed to
              delivering premium-quality agricultural products, engineering products, and
              engineering services to customers across the globe.
            </p>
            <p>
              We work closely with reliable manufacturers and suppliers to provide products that
              meet international quality standards while ensuring cost-effective sourcing and
              dependable delivery.
            </p>
            <p>
              Our focus is on building long-term relationships through transparency, integrity, and
              customer satisfaction. By understanding each customer&apos;s unique requirements, we
              provide customized sourcing and export solutions that create lasting value.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <ul className="about__list">
              {highlights.map((h) => (
                <li key={h}>
                  <FaCheckCircle size={18} aria-hidden="true" /> {h}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
