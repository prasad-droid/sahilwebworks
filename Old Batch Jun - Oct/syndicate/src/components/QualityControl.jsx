import { quality } from '../data/site';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './QualityControl.css';

export default function QualityControl() {
  return (
    <section id={quality.id} className="section section--beige quality">
      <div className="container">
        <div className="quality__head-grid">
          <SectionHeading eyebrow={quality.eyebrow} title={quality.heading} intro={quality.intro} />
          <Reveal className="quality__image image-frame" image delay={100}>
            <img src={quality.image.src} alt={quality.image.alt} loading="lazy" />
          </Reveal>
        </div>

        <div className="quality__processes">
          {quality.processes.map((process, processIndex) => (
            <Reveal
              key={process.title}
              className={`quality-process quality-process--${process.accent}`}
              delay={processIndex * 130}
            >
              <div className="quality-process__head">
                <span className="icon-tile">
                  <Icon name={process.icon} size={22} strokeWidth={1.7} />
                </span>
                <h3>{process.title}</h3>
                <span className="quality-process__count">{process.steps.length} stages</span>
              </div>

              <ol className="quality-timeline">
                {process.steps.map((step, index) => (
                  <li key={step.title} style={{ '--stagger': `${index * 80}ms` }}>
                    <span className="quality-timeline__dot" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
