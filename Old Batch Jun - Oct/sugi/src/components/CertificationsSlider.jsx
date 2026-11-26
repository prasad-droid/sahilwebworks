import { useSite } from "../store/SiteContext";
import { CERTIFICATIONS } from "../data/certifications";
import "../styles/certifications.css";

// ==========================================================================
// CERTIFICATION LOGO AUTO-SLIDER
// The list is duplicated inside the track and CSS translates the track by
// -50%, producing a seamless loop. Hovering the strip pauses it; users who
// prefer reduced motion get a static, wrapped row instead.
// Logos & names are editable in Admin Panel > Website Content.
// ==========================================================================

export default function CertificationsSlider({ id }) {
  const { content } = useSite();
  const section = content?.home?.certifications || {};
  const certs = content?.certifications?.items?.length
    ? content.certifications.items
    : CERTIFICATIONS;
  const visible = certs.filter((cert) => cert.name || cert.image);

  if (!visible.length) return null;

  const items = [...visible, ...visible];

  return (
    <section id={id} className="certs section-pad">
      <div className="container">
        <div className="certs__head reveal">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 className="section-title">{section.title}</h2>
        </div>
      </div>

      <div className="certs__mask">
        <div className="certs__track">
          {items.map((cert, i) => (
            <div className="certs__item" key={`${cert.name}-${i}`}>
              {cert.image && <img src={cert.image} alt={cert.name} loading="lazy" />}
              <span className="certs__name">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
