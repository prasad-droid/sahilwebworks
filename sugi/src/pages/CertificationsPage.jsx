import PageHero from "../components/PageHero";
import useReveal from "../components/useReveal";
import { Section } from "../store/SiteContext";
import QuoteCTA from "../components/QuoteCTA";
import { CERTIFICATIONS } from "../data/certifications";
import "../styles/certificationsPage.css";

// ==========================================================================
// CERTIFICATIONS PAGE
// Cards loop automatically like a marquee. The list is repeated six times
// and the track is translated by -50%, so the second half mirrors the first
// and the loop is seamless (three copies per half keeps it wider than any
// viewport). Hovering or focusing pauses the track.
//
// Only the first group of cards is exposed to assistive tech and the tab
// order; the repeated copies are visual duplicates.
//
// Download documents are placeholders in public/certificates/ — replace each
// PDF (keeping the same filename) with the official certificate.
// ==========================================================================

const COPIES = 6;

const LOOP = Array.from({ length: COPIES }, () => CERTIFICATIONS)
  .flat()
  .map((cert, i) => ({
    ...cert,
    key: `${cert.name}-${i}`,
    isClone: i >= CERTIFICATIONS.length,
  }));

const QUALITY_CHECKS = [
  "Farm Inspection",
  "Sorting",
  "Grading",
  "Cleaning",
  "Quality Testing",
  "Hygienic Packing",
  "Container Loading Inspection",
];

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
          <p className="certs-page__intro">
            At Sugi International Pvt. Ltd., quality is our highest priority.
            Every shipment is prepared following international food safety
            standards and export regulations. We work closely with certified
            growers and government-authorized agencies to ensure our products
            meet the requirements of global markets.
          </p>
        </div>

        <div className="certs-page__marquee">
          <ul className="certs-page__track">
            {LOOP.map((cert) => (
              <li
                key={cert.key}
                className={`certs-page__item${cert.isClone ? " certs-page__item--clone" : ""}`}
                aria-hidden={cert.isClone || undefined}
              >
                <div className="certs-page__logo">
                  <img src={cert.image} alt={cert.name} loading="lazy" />
                </div>
                <h2 className="certs-page__name">{cert.name}</h2>
                <p className="certs-page__desc">{cert.description}</p>
                {cert.file && (
                  <a
                    className="certs-page__download"
                    href={`${import.meta.env.BASE_URL}${cert.file}`}
                    download={cert.downloadName}
                    tabIndex={cert.isClone ? -1 : undefined}
                  >
                    Download Certificate
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
                      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                    </svg>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cert-quality section-pad">
        <div className="container cert-quality__grid">
          <article className="cert-quality__card reveal">
            <span className="cert-quality__icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 3h6a1 1 0 0 1 1 1v2H8V4a1 1 0 0 1 1-1Z" />
                <path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                <path d="m9 13 2 2 4-4" />
              </svg>
            </span>
            <h2 className="cert-quality__title">Quality Control</h2>
            <p className="cert-quality__lead">Every shipment passes through:</p>

            <ul className="cert-quality__steps">
              {QUALITY_CHECKS.map((step) => (
                <li key={step}>
                  <span className="cert-quality__check" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>
                  {step}
                </li>
              ))}
            </ul>

            <p className="cert-quality__text">
              Our experienced quality control team ensures that products
              maintain freshness, appearance, and shelf life throughout
              transportation.
            </p>
          </article>

          <article className="cert-quality__card cert-quality__card--safety reveal">
            <span className="cert-quality__icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </span>
            <h2 className="cert-quality__title">Food Safety</h2>
            <p className="cert-quality__text">
              We are committed to supplying safe, hygienic, and premium-quality
              agricultural products while meeting the import regulations of
              destination countries.
            </p>
            <p className="cert-quality__text">
              Our objective is to build long-term partnerships based on quality,
              trust, transparency, and customer satisfaction.
            </p>
          </article>
        </div>
      </section>

      <Section id="quoteCta"><QuoteCTA /></Section>
    </>
  );
}
