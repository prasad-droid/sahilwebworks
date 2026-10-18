import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import AssetImage from "./AssetImage";
import { company, suppliedAssets } from "../data/assets";
import { scrollToSection } from "../lib/scroll";

const aboutPoints = [
  "Agriculture-related markets",
  "Recycling companies and the recycling sector",
  "Import, export and business services",
  "A growing product and service portfolio",
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__grid">
        <div className="about__media" data-reveal>
          <div className="about__frame">
            <AssetImage
              src={suppliedAssets.image1.local}
              driveId={suppliedAssets.image1.driveId}
              alt="PrajtamEx supplied business image"
            />
          </div>
          <figure className="about__card">
            <img
              src="/images/trade/warehouse.jpg"
              alt="Workers inside a logistics warehouse — representative industry imagery"
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
            title="Connecting Businesses Across Markets"
          />
          <p className="about__lead" data-reveal>
            {company.position}
          </p>
          <p className="about__text" data-reveal>
            The company is built to sell products while showcasing a portfolio of products and
            services for buyers, sellers and business partners across markets.
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
            <a className="btn btn--primary" href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
              Enquire Now
              <Icon name="arrowRight" size={16} />
            </a>
            <a className="btn btn--outline" href="#products" onClick={(e) => { e.preventDefault(); scrollToSection("products"); }}>
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
