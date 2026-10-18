import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { whyItems } from "../data/site";

export default function WhyPrajtamEx() {
  return (
    <section className="why section" aria-labelledby="why-title">
      <div className="container">
        <SectionHeading
          id="why"
          label="WHY PRAJTAMEX"
          title="Why Connect With PrajtamEx?"
          subtitle="Clear areas of focus for buyers, sellers and business partners looking for the right connection."
        />

        <div className="why__grid">
          {whyItems.map((item) => (
            <article className="why-card" key={item.id} data-reveal>
              <span className="why-card__icon" aria-hidden="true">
                <Icon name={item.icon} size={22} />
              </span>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__text">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
