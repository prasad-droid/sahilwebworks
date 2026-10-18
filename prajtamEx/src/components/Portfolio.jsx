import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { portfolioAreas } from "../data/site";
import { scrollToSection } from "../lib/scroll";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <SectionHeading
          label="PORTFOLIO"
          title="OUR BUSINESS PORTFOLIO"
          subtitle="Three portfolio areas that shape the products, connections and opportunities PrajtamEx works on."
        />

        <div className="portfolio__grid">
          {portfolioAreas.map((area) => (
            <article className="portfolio-panel" key={area.id} data-reveal>
              <img src={area.image} alt={area.imageAlt} loading="lazy" decoding="async" />
              <span className="portfolio-panel__scrim" aria-hidden="true" />
              <div className="portfolio-panel__content">
                <span className="portfolio-panel__icon" aria-hidden="true">
                  <Icon
                    name={
                      area.title === "Agriculture"
                        ? "leaf"
                        : area.title === "Recycling"
                        ? "recycle"
                        : "ship"
                    }
                    size={22}
                  />
                </span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <button
                  type="button"
                  className="portfolio-panel__cta"
                  onClick={() => scrollToSection("contact")}
                >
                  Enquire
                  <Icon name="arrowRight" size={15} />
                </button>
              </div>
              {area.stock && <span className="img-note">Representative imagery</span>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
