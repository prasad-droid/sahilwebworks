import { FiTruck, FiSearch, FiFileText, FiPackage, FiGlobe, FiSettings, FiClipboard } from "react-icons/fi";
import { services } from "../../data/data";

const icons = [FiGlobe, FiClipboard, FiSearch, FiFileText, FiPackage, FiTruck, FiSettings];

const Services = () => (
  <section id="services" className="services section">
    <div className="container">
      <div className="section__head" data-reveal>
        <span className="section__eyebrow">Our Services</span>
        <h2 className="section__title">Complete Export Solutions</h2>
        <p className="section__sub">
          From sourcing to shipping, we manage the entire export journey for you.
        </p>
      </div>

      <div className="services__grid">
        {services.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <article className="service-card" key={s.title} data-reveal style={{ transitionDelay: `${(i % 4) * 100}ms` }}>
              <span className="service-card__icon">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
