import { FiCheckCircle } from "react-icons/fi";
import { whyChooseUs } from "../../data/data";

const WhyChooseUs = () => (
  <section id="why" className="why section">
    <div className="container">
      <div className="section__head" data-reveal>
        <span className="section__eyebrow">Why Choose Us</span>
        <h2 className="section__title">The Viraj Advantage</h2>
        <p className="section__sub">
          What makes global buyers partner with us again and again.
        </p>
      </div>

      <div className="why__grid">
        {whyChooseUs.map((w, i) => (
          <article className="why-card" key={w.title} data-reveal style={{ transitionDelay: `${(i % 4) * 100}ms` }}>
            <span className="why-card__icon">
              <FiCheckCircle aria-hidden="true" />
            </span>
            <div>
              <h3 className="why-card__title">{w.title}</h3>
              <p className="why-card__desc">{w.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
