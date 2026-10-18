import { whyChooseUs } from '../data/data';
import Reveal from './Reveal';
import Icon from './Icon';
import '../styles/why-us.css';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="section-eyebrow">The Gouri Difference</span>
            <h2 className="section-title">Why Choose GOURI GLOBAL TRADE?</h2>
            <p className="section-subtitle">
              A focused merchant exporter built on quality, food safety, reliable
              sourcing and professional business practices.
            </p>
          </Reveal>
        </div>

        <div className="why-us__grid">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="why-us__cell">
              <article className="why-us__card">
                <span className="why-us__icon-wrap">
                  <Icon name={item.icon} size={28} />
                </span>
                <h3 className="why-us__title">{item.title}</h3>
                <p className="why-us__desc">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}