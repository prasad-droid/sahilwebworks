import { FiTarget, FiGlobe, FiRefreshCw, FiAward } from "react-icons/fi";
import { SITE } from "../../data/siteData";
import juteVisual from "../../assets/gallery/p4_x10.jpg";
import bagasseVisual from "../../assets/gallery/p7_x19.jpg";
import Reveal from "../common/Reveal";
import SectionHead from "../common/SectionHead";
import "./About.css";

const STATS = [
  { icon: FiGlobe, value: "15+", label: "Export Markets" },
  { icon: FiAward, value: "100%", label: "Biodegradable Range" },
  { icon: FiRefreshCw, value: "Eco", label: "Plastic-Free Products" },
  { icon: FiTarget, value: "24/7", label: "Buyer Support" },
];

const PILLARS = [
  "Trusted export partner for importers, wholesalers and retail chains",
  "Renewable jute fibre and agricultural bagasse sourcing",
  "Responsible manufacturing with export-quality finishing",
];

export default function About() {
  return (
    <section id="about" className="section section--white">
      <div className="container about__grid">
        <Reveal direction="left" className="about__visual">
          <div className="about__stack">
            <figure className="about__card about__card--back">
              <img
                src={juteVisual}
                alt="Jute bags product page from the Nilipar Enterprises catalogue"
                loading="lazy"
              />
            </figure>
            <figure className="about__card about__card--front">
              <img
                src={bagasseVisual}
                alt="Bagasse tableware product page from the Nilipar Enterprises catalogue"
                loading="lazy"
              />
            </figure>
          </div>
          <span className="about__seal">Est. India</span>
        </Reveal>

        <div className="about__content">
          <SectionHead
            center={false}
            eyebrow="About Us"
            title="India's Trusted Exporter of Sustainable Alternatives"
          />
          <Reveal direction="up">
            <p className="about__lead">
              {SITE.name} is an Indian exporter dedicated to supplying eco-friendly jute bags and bagasse products
              to international markets. We believe sustainable products are essential for protecting the environment
              while meeting the growing demand for responsible packaging and lifestyle solutions.
            </p>
          </Reveal>
          <Reveal direction="up" delay={120}>
            <p className="about__text">
              Our mission is to help businesses replace plastic with renewable, biodegradable alternatives that
              combine durability, functionality, and environmental responsibility. From the golden fibre of jute to
              compostable bagasse tableware, every product is crafted to perform — and to give back to the planet.
            </p>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <ul className="about__pillars">
              {PILLARS.map((item) => (
                <li key={item}>
                  <span className="about__check" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={280}>
            <div className="about__stats">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="about__stat">
                  <Icon aria-hidden="true" className="about__stat-icon" />
                  <div className="about__stat-value">{value}</div>
                  <div className="about__stat-label">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
