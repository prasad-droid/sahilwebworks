import { Link } from "react-router-dom";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { Reveal } from "../../hooks/useScrollReveal";
import aboutImage from "../../assets/images/about.jpg";

const points = [
  "Durable, stylish and eco-friendly tote bags",
  "Multiple materials, sizes, colors and designs",
  "Customized options for international customers",
  "Timely delivery and reliable export services",
];

export default function About() {
  return (
    <section className="section about" aria-label="About SATBHAI EXIM">
      <div className="container">
        <div className="about__grid">
          <Reveal className="about__media">
            <img
              src={aboutImage}
              alt="SATBHAI EXIM premium tote bag for retail and export"
              loading="lazy"
            />
            <div className="about__card-float">
              <strong>Merchant Export</strong>
              <span>Company · Nashik, Maharashtra, India</span>
            </div>
          </Reveal>

          <Reveal className="about__body" delay={1}>
            <span className="section__eyebrow">About Us</span>
            <h2 className="section__title">About SATBHAI EXIM</h2>
            <p>
              SATBHAI EXIM is a merchant export company based in India specializing in
              the export of high-quality tote bags.
            </p>
            <p>
              We supply durable, stylish, and eco-friendly tote bags to wholesalers,
              importers, retailers, distributors, and private-label brands across
              international markets. Our focus is on building long-term business
              relationships through dependable service, consistent quality, and customer
              satisfaction.
            </p>
            <ul className="about__points">
              {points.map((p) => (
                <li key={p}>
                  <FiCheck aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <Link className="btn btn--primary" to="/about">
              Learn More About Us <FiArrowRight />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
