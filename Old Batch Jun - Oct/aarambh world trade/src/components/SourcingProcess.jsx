import { SectionHeading } from './SectionHeading.jsx';
import { Reveal } from './Reveal.jsx';
import { Icon } from './Icons.jsx';
import { sourcingProcess } from '../data/services.js';
import { processImages } from '../data/gallery.js';

const STEP_ICONS = ['clipboard', 'network', 'shield', 'document', 'ship', 'headset'];

export function SourcingProcess() {
  return (
    <section className="process section section--cream" aria-labelledby="process-heading">
      <div className="container">
        <SectionHeading
          eyebrow="How an order works"
          title="Our Sourcing Process"
          titleId="process-heading"
          description="A clear six-step workflow, so you always know what is happening with your order."
          align="center"
        />

        <ol className="process__timeline">
          {sourcingProcess.map((step, i) => (
            <Reveal
              as="li"
              key={step.step}
              className="process__step"
              delay={i * 80}
            >
              <div className="process__marker" aria-hidden="true">
                <span className="process__marker-num">{step.step}</span>
                <span className="process__marker-icon">
                  <Icon name={STEP_ICONS[i] || 'check'} size={18} />
                </span>
              </div>

              <div className="process__card">
                <h3 className="process__title">{step.title}</h3>
                <p className="process__text">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="process__strip" delay={60}>
          {[
            { image: processImages.sourcing, title: 'Packaging coordination' },
            { image: processImages.bulk, title: 'Bulk quantity handling' },
            { image: processImages.logistics, title: 'Logistics coordination' },
          ].map((item) => (
            <figure className="process__strip-item" key={item.image.src}>
              <img
                src={item.image.src}
                alt={item.image.alt}
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>{item.image.credit}</span>
                <strong>{item.title}</strong>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default SourcingProcess;
