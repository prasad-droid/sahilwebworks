import Reveal from "./Reveal";
import { certifications } from "../data/certifications";
import { IconShield, IconCheck } from "./Icons";
import "../styles/certifications.css";

export default function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <Reveal className="certifications__header">
          <p className="section-label">Compliance</p>
          <h2 className="section-title">Certifications &amp; Compliance</h2>
          <p className="section-subtitle">
            Transparency on certifications and compliance matters for
            international buyers.
          </p>
        </Reveal>

        <Reveal className="certifications__content">
          {certifications.length > 0 ? (
            <div className="certifications__grid">
              {certifications.map((cert) => (
                <article className="certifications__card" key={cert.id}>
                  <span className="certifications__icon">
                    <IconShield />
                  </span>
                  <h3>{cert.name}</h3>
                  {cert.issuer && <p>{cert.issuer}</p>}
                </article>
              ))}
            </div>
          ) : (
            <div className="certifications__empty">
              <span className="certifications__icon certifications__icon--large">
                <IconShield />
              </span>
              <h3>Information will be added here</h3>
              <p>
                Verified certifications and compliance information will be added
                here as applicable.
              </p>
              <span className="certifications__pending">
                <IconCheck /> Compliance details pending
              </span>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}