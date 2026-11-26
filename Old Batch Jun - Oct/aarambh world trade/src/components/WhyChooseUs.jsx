import { SectionHeading } from './SectionHeading.jsx';
import { Reveal } from './Reveal.jsx';
import { Icon } from './Icons.jsx';
import { whyChooseUs } from '../data/services.js';
import { useEnquiry } from '../context/EnquiryContext.jsx';

export function WhyChooseUs() {
  const { startEnquiry } = useEnquiry();

  return (
    <section className="whyus section section--dark section--grain" id="why-choose-us" aria-labelledby="why-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Why buyers work with us"
          title="Why Choose AARAMBH WORLDTRADE?"
          titleId="why-heading"
          description="Six reasons international buyers choose us as their Indian sourcing partner."
          align="center"
          tone="dark"
        />

        <ul className="whyus__grid">
          {whyChooseUs.map((item, i) => (
            <Reveal as="li" key={item.id} className="whyus__cell" delay={i * 70}>
              <article className="why-card">
                <span className="why-card__icon" aria-hidden="true">
                  <Icon name={item.icon} size={24} />
                </span>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__text">{item.description}</p>
                <span className="why-card__glow" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="whyus__cta" delay={90}>
          <p className="whyus__cta-text">
            Ready to discuss your product, quantity and destination?
          </p>
          <div className="whyus__cta-actions">
            <button
              type="button"
              className="btn btn--accent"
              onClick={() => startEnquiry('', { anchor: '#bulk-order' })}
            >
              Request a Quote
              <Icon name="arrowRight" size={18} />
            </button>
            <a className="btn btn--on-dark" href="#faq">
              Read our FAQs
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default WhyChooseUs;
