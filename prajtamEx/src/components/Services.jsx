import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { services } from "../data/services";

export default function Services({ onRequestQuote }) {
  const list = services.filter((service) => service.available !== false);

  return (
    <section id="services" className="services section section--dark">
      <div className="container">
        <SectionHeading
          light
          label="OUR SERVICES"
          title="Import Export and Services"
          subtitle="Broad service categories that can grow with the company's product and business portfolio."
        />

        <div className="services__grid">
          {list.map((service) => (
            <article className="service-card" key={service.id} data-reveal>
              <div className="service-card__top">
                <span className="service-card__icon" aria-hidden="true">
                  <Icon name={service.icon || "business"} size={24} />
                </span>
                {service.image && (
                  <img className="service-card__image" src={service.image} alt="" loading="lazy" />
                )}
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__text">{service.description}</p>
              <button
                type="button"
                className="service-card__link"
                onClick={() => onRequestQuote({ requirement: "Business Service", product: service.title })}
              >
                Discuss this service
                <Icon name="arrowRight" size={15} />
              </button>
            </article>
          ))}
        </div>

        <p className="services__footnote" data-reveal>
          Additional services can be added as the company's portfolio grows. Share your requirement
          and we will respond with the relevant details.
        </p>
      </div>
    </section>
  );
}
