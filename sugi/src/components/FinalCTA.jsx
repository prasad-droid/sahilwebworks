import "../styles/finalCTA.css";

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1800&q=70";

const WHATSAPP_URL = `https://wa.me/919405000111?text=${encodeURIComponent(
  "Hello SUGI INTERNATIONAL PRIVATE LIMITED, I would like to discuss an agro commodity sourcing requirement."
)}`;

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div
        className="final-cta__bg"
        style={{ backgroundImage: `url(${CTA_IMAGE})` }}
        aria-hidden="true"
      />
      <div className="final-cta__overlay" aria-hidden="true" />

      <div className="container final-cta__content reveal">
        <h2 className="final-cta__title">
          Looking for Agro Commodity Supply From India?
        </h2>
        <p className="final-cta__text">
          Let's discuss your requirement and explore the right opportunity for
          your market.
        </p>
        <div className="final-cta__actions">
          <a href="#enquiry" className="btn btn-gold">
            Send Enquiry
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
