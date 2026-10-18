import PageHero from "../components/PageHero";
import useReveal from "../components/useReveal";
import { Link } from "../router";
import { CERTIFICATIONS } from "../data/certifications";
import "../styles/certificationsPage.css";

// ==========================================================================
// CERTIFICATIONS PAGE — placeholder.
// No certification documents were supplied, so this page only lists the
// registration bodies whose logos were provided in the brief. Drop real
// certificates into src/assets/certifications/ and add entries to
// src/data/certifications.js to extend it.
// ==========================================================================

export default function CertificationsPage() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title="Certifications & Registrations"
        intro="Sugi International Pvt. Ltd. is registered with India's export and food safety authorities."
        crumbs={[{ label: "Certifications" }]}
      />

      <section className="certs-page section-pad">
        <div className="container">
          <ul className="certs-page__grid">
            {CERTIFICATIONS.map((c, i) => (
              <li
                className="certs-page__item reveal"
                key={c.name}
                style={{ transitionDelay: `${(i % 4) * 0.05}s` }}
              >
                <div className="certs-page__logo">
                  <img src={c.image} alt={c.name} loading="lazy" />
                </div>
                <h2 className="certs-page__name">{c.name}</h2>
                <p className="certs-page__desc">{c.description}</p>
              </li>
            ))}
          </ul>

          <div className="certs-page__notice reveal">
            <h2>Supporting documents</h2>
            <p>
              Scanned certificates, registration numbers and test reports will be
              published on this page once they are shared with us. If you need
              documentation for a shipment, please request it with your enquiry
              and our team will provide the relevant files.
            </p>
            <Link to="/quote" className="btn btn-primary">
              Request Documentation
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
