import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { focusPillars } from "../data/site";

export default function BusinessFocus() {
  return (
    <section className="focus section section--surface" aria-labelledby="focus-title">
      <div className="container">
        <SectionHeading
          id="focus"
          label="BUSINESS FOCUS"
          title="Agriculture & Recycling"
          subtitle="Two core areas of focus that shape the products, markets and connections PrajtamEx works with."
        />

        <div className="focus__grid">
          {focusPillars.map((pillar) => (
            <article className="focus-card" key={pillar.id} data-reveal>
              <div className="focus-card__media">
                <img
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="focus-card__number">{pillar.number}</span>
                {pillar.stock && <span className="img-note">Representative imagery</span>}
              </div>
              <div className="focus-card__body">
                <h3 className="focus-card__title">{pillar.title}</h3>
                <p className="focus-card__text">{pillar.description}</p>
                <ul className="focus-card__points">
                  {pillar.points.map((point) => (
                    <li key={point}>
                      <Icon name="arrowRight" size={15} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
