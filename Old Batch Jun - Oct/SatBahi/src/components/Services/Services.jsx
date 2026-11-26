import {
  FiTruck,
  FiSearch,
  FiSliders,
  FiTag,
  FiPackage,
  FiGlobe,
} from "react-icons/fi";
import { Reveal } from "../../hooks/useScrollReveal";

const services = [
  {
    icon: FiTruck,
    title: "Export Supply",
    desc: "Reliable bulk tote bag supply for international buyers.",
  },
  {
    icon: FiSearch,
    title: "Product Sourcing",
    desc: "Tote bags based on customer requirements.",
  },
  {
    icon: FiSliders,
    title: "Customization",
    desc: "Different materials, sizes, colors and designs.",
  },
  {
    icon: FiTag,
    title: "Private Label",
    desc: "Support for brands looking for customized tote bag products.",
  },
  {
    icon: FiPackage,
    title: "Bulk Orders",
    desc: "Solutions for wholesalers, retailers and distributors.",
  },
  {
    icon: FiGlobe,
    title: "Export Support",
    desc: "Professional coordination throughout the export process.",
  },
];

export default function Services() {
  return (
    <section className="section section--cream" aria-label="Our services">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Services</span>
          <h2 className="section__title">What We Offer</h2>
          <p className="section__subtitle">
            Complete support for global buyers — from product sourcing to export delivery.
          </p>
        </Reveal>

        <div className="services__grid">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i % 3}>
                <article className="service-card">
                  <div className="service-card__icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
