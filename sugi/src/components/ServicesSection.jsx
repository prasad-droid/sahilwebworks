import { useSite } from "../store/SiteContext";
import "../styles/services.css";

// ==========================================================================
// SERVICES — services managed in Admin Panel > Services.
// Renders nothing until at least one service is added.
// ==========================================================================

export default function ServicesSection() {
  const { services = [], content } = useSite();
  if (!services.length) return null;

  const section = content?.home?.services || {};

  return (
    <section className="services section-pad">
      <div className="container">
        <header className="services__head reveal">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 className="section-title">{section.title}</h2>
          {section.intro && <p className="section-sub">{section.intro}</p>}
        </header>

        <div className="services__grid">
          {services.map((service, i) => (
            <article
              className="services__card reveal"
              key={service.id}
              style={{ transitionDelay: `${(i % 4) * 0.07}s` }}
            >
              {service.image && (
                <div className="services__media">
                  <img src={service.image} alt={service.name} loading="lazy" />
                </div>
              )}
              <div className="services__body">
                <h3 className="services__name">{service.name}</h3>
                {service.description && (
                  <p className="services__desc">{service.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
