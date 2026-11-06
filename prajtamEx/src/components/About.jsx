import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { company } from "../data/assets";
import { scrollToSection } from "../lib/scroll";

const aboutPoints = [
  "Connecting buyers and suppliers",
  "Product sourcing and trade opportunities",
  "Long-term business relationships",
  "Professional import-export and related services",
];

export default function About() {
  const go = (id) => (event) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <section id="about" className="about section">
      <div className="container about__grid">
        <div className="about__media" data-reveal>
          <div className="about__frame">
            <img
              src="/images/agriculture/farmer-field.jpg"
              alt="Farmer walking through a green agricultural field"
              loading="lazy"
              decoding="async"
            />
          </div>
          <figure className="about__card">
            <img
              src="/images/agriculture/coco-pith-2.jpg"
              alt="Coco pith product imagery supplied by PrajtamEx"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span className="about__card-label">Import • Export • Services</span>
              <p>Products, businesses and opportunities connected across markets.</p>
            </figcaption>
          </figure>
          <span className="about__pattern" aria-hidden="true" />
        </div>

        <div className="about__content">
          <SectionHeading
            align="left"
            label="ABOUT PRAJTAMEX"
            title="Building Connections. Creating Opportunities."
          />
          <p className="about__lead" data-reveal>
            {company.position}
          </p>
          <p className="about__text" data-reveal>
            The business is focused on connecting buyers and suppliers, supporting product sourcing
            and trade opportunities, and building long-term relationships through professional
            import-export and related services.
          </p>

          <ul className="about__points" data-reveal>
            {aboutPoints.map((point) => (
              <li key={point}>
                <span className="about__check" aria-hidden="true">
                  <Icon name="check" size={14} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="about__actions" data-reveal>
            <a className="btn btn--primary" href="#contact" onClick={go("contact")}>
              Send an Enquiry
              <Icon name="arrowRight" size={16} />
            </a>
            <a className="btn btn--outline" href="#products" onClick={go("products")}>
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
