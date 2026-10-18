import { Icon } from './Icons.jsx';
import { trustStrip } from '../data/services.js';
import { Reveal } from './Reveal.jsx';

/**
 * Value / trust strip directly under the hero.
 *
 * These are the ways we work, not certifications: nothing here is presented as
 * an award, standard or third-party accreditation.
 */
export function TrustStrip() {
  return (
    <section className="trust" aria-labelledby="trust-heading">
      <h2 className="sr-only" id="trust-heading">
        What AARAMBH WORLDTRADE focuses on
      </h2>

      <div className="container container--wide">
        <Reveal className="trust__grid" variant="fade">
          {trustStrip.map((item, i) => (
            <div className="trust__item" key={item.id}>
              <span className="trust__icon" aria-hidden="true">
                <Icon name={item.icon} size={22} />
              </span>
              <span className="trust__text">
                <strong className="trust__title">{item.title}</strong>
                <span className="trust__caption">{item.caption}</span>
              </span>
              <span className="trust__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default TrustStrip;
