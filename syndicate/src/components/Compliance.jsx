import { ArrowRight, FileCheck2, ShieldCheck } from 'lucide-react';
import { compliance } from '../data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './Compliance.css';

export default function Compliance() {
  return (
    <section id={compliance.id} className="section section--dark compliance">
      <div className="container">
        <div className="compliance__layout">
          <SectionHeading eyebrow={compliance.eyebrow} title={compliance.heading} intro={compliance.intro} />

          <Reveal className="compliance__documents" delay={100}>
            {compliance.documents.map((document, index) => (
              <div className="compliance-doc" key={document.title} style={{ '--stagger': `${index * 60}ms` }}>
                <span className="compliance-doc__icon">
                  <FileCheck2 size={19} strokeWidth={1.7} />
                </span>
                <div>
                  <strong>{document.title}</strong>
                  <p>{document.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="compliance__footer" delay={120}>
          <div className="compliance__note">
            <ShieldCheck size={22} strokeWidth={1.6} />
            <p>{compliance.note}</p>
          </div>
          <a className="btn btn-outline-light" href={compliance.cta.href}>
            {compliance.cta.label} <ArrowRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
