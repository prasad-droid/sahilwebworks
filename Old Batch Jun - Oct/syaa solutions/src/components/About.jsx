import { CheckCircle2 } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';
import { aboutHighlights, brand } from '../data/site.js';

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-media" data-reveal>
          <div className="about-image-frame">
            <ImageWithFallback
              src="/images/about-packaging.jpg"
              alt="Assortment of kraft boxes, paper and twine packaging materials"
              width="1080"
              height="860"
            />
          </div>
          <div className="about-badge">
            <span className="about-badge-value">02</span>
            <span className="about-badge-label">Business categories</span>
          </div>
          <p className="about-image-caption">{brand.name} — packaging supply & agricultural export</p>
        </div>

        <div className="about-content" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            About Us
          </p>
          <h2 id="about-title">Practical Solutions. Reliable Business Connections.</h2>
          <p className="section-lead">
            {brand.name} provides packaging materials for businesses across different industries
            while also offering fresh banana leaves for export markets.
          </p>
          <p className="body-copy">
            Our product portfolio includes corrugated boxes, honeycomb paper, printed gift boxes,
            and fresh banana leaves. We aim to support businesses with suitable product solutions,
            responsive communication, and dependable trade relationships across domestic and
            international markets.
          </p>

          <ul className="about-list">
            {aboutHighlights.map((item) => (
              <li key={item.title}>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.detail}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
