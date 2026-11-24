import { exportProcess } from '../data/site';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './ExportProcess.css';

export default function ExportProcess() {
  return (
    <section id={exportProcess.id} className="section section--tint export-process">
      <div className="container">
        <SectionHeading
          eyebrow={exportProcess.eyebrow}
          title={exportProcess.heading}
          intro={exportProcess.intro}
          centered
        />

        <div className="export-flow">
          {exportProcess.steps.map((step, index) => (
            <Reveal key={step.title} className="export-step" delay={index * 70}>
              <div className="export-step__rail" aria-hidden="true">
                <span className="export-step__node">
                  <Icon name={step.icon} size={20} strokeWidth={1.7} />
                </span>
                {index < exportProcess.steps.length - 1 && <span className="export-step__line" />}
              </div>
              <span className="export-step__number">Step {String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="export-process__note">
          <span className="pill">Transparent by design</span>
          <p>{exportProcess.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
