import { CERTIFICATIONS } from "../data/certifications";
import "../styles/certifications.css";

// ==========================================================================
// CERTIFICATION LOGO AUTO-SLIDER
// The list is duplicated inside the track and CSS translates the track by
// -50%, producing a seamless loop. Hovering the strip pauses it; users who
// prefer reduced motion get a static, wrapped row instead.
// Logos live in src/data/certifications.js — drop a new file into
// src/assets/certifications/ and add an entry to extend the strip.
// ==========================================================================

export default function CertificationsSlider({ id }) {
  if (!CERTIFICATIONS.length) return null;

  const items = [...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section id={id} className="certs section-pad">
      <div className="container">
        <div className="certs__head reveal">
          <p className="eyebrow">Certifications</p>
          <h2 className="section-title">
            Registered with India&apos;s export authorities
          </h2>
        </div>
      </div>

      <div className="certs__mask">
        <div className="certs__track">
          {items.map((cert, i) => (
            <div className="certs__item" key={`${cert.name}-${i}`}>
              <img src={cert.image} alt={cert.name} loading="lazy" />
              <span className="certs__name">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
