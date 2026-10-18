import { SectionHeading } from './SectionHeading.jsx';
import { Reveal } from './Reveal.jsx';
import { Icon } from './Icons.jsx';
import { services } from '../data/services.js';

export function Services() {
  return (
    <section className="services section" id="services" aria-labelledby="services-heading">
      <div className="container container--wide">
        <SectionHeading
          eyebrow="What we do"
          title="Our Export Services"
          titleId="services-heading"
          description="From sourcing in India to documentation and logistics coordination, our services are built around international B2B orders."
          align="center"
        />

        <ul className="services__grid">
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} className="services__cell" delay={Math.min(i, 7) * 60}>
              <article className="service-card">
                <span className="service-card__index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="service-card__icon" aria-hidden="true">
                  <Icon name={service.icon} size={26} />
                </span>

                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__text">{service.description}</p>

                <span className="service-card__rule" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
