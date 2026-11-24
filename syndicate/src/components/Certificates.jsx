import { useEffect, useState } from 'react';
import { FileText, LockKeyhole } from 'lucide-react';
import { certificates } from '../data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './Certificates.css';

function DocumentPreview({ file, title }) {
  const [status, setStatus] = useState(file ? 'checking' : 'empty');

  useEffect(() => {
    if (!file) return undefined;
    let cancelled = false;
    fetch(file, { method: 'HEAD' })
      .then((response) => {
        if (!cancelled) setStatus(response.ok ? 'ready' : 'empty');
      })
      .catch(() => {
        if (!cancelled) setStatus('empty');
      });
    return () => {
      cancelled = true;
    };
  }, [file]);

  if (status === 'ready') {
    return (
      <object className="certificate-card__preview" data={`${file}#toolbar=0`} type="application/pdf" aria-label={title}>
        <p className="certificate-card__preview-note">{title} document preview.</p>
      </object>
    );
  }

  return (
    <div className="certificate-card__placeholder">
      <LockKeyhole size={26} strokeWidth={1.4} />
      <span>Document details available upon request</span>
    </div>
  );
}

export default function Certificates() {
  return (
    <section id={certificates.id} className="section section--tint certificates">
      <div className="container">
        <SectionHeading
          eyebrow={certificates.eyebrow}
          title={certificates.heading}
          intro={certificates.intro}
          centered
        />

        <div className="certificates__grid">
          {certificates.cards.map((card, index) => (
            <Reveal key={card.title} className="certificate-card" delay={index * 80}>
              <div className="certificate-card__head">
                <span className="icon-tile">
                  <FileText size={20} strokeWidth={1.7} />
                </span>
                <h3>{card.title}</h3>
              </div>
              <DocumentPreview file={card.file} title={card.title} />
              <dl className="certificate-card__meta">
                <div>
                  <dt>Registration no.</dt>
                  <dd>{card.registrationNumber || 'Available upon request'}</dd>
                </div>
                <div>
                  <dt>Issue / verification</dt>
                  <dd>{card.issueDetails || 'Available upon request'}</dd>
                </div>
              </dl>
              <p className="certificate-card__note">{card.note}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="certificates__footnote">
          <span aria-hidden="true">※</span>
          <p>{certificates.footnote}</p>
        </Reveal>
      </div>
    </section>
  );
}
