import { certifications } from '../data/data';
import Reveal from './Reveal';
import '../styles/certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="section-eyebrow">Credentials</span>
            <h2 className="section-title">Certifications &amp; Registrations</h2>
            <p className="section-subtitle">
              GOURI GLOBAL TRADE is registered with the key Indian authorities that
              govern domestic trade and exports — so buyers can source with confidence.
            </p>
          </Reveal>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 80} className="certifications__cell">
              <article className="certifications__card">
                <span className="certifications__logo">
                  <img src={cert.logo} alt={cert.logoAlt} loading="lazy" decoding="async" />
                </span>
                <h3 className="certifications__name">{cert.name}</h3>
                <span className="certifications__subtitle">{cert.subtitle}</span>
                <p className="certifications__desc">{cert.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
