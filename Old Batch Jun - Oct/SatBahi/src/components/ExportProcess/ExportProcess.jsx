import { Reveal } from "../../hooks/useScrollReveal";

const steps = [
  { step: "01", title: "Send Your Requirement", desc: "Buyer shares product specifications." },
  { step: "02", title: "Product Selection", desc: "Select suitable tote bag styles and materials." },
  { step: "03", title: "Customization", desc: "Finalize size, color, design and branding requirements." },
  { step: "04", title: "Quotation", desc: "Receive pricing based on specifications and order quantity." },
  { step: "05", title: "Order Confirmation", desc: "Finalize commercial terms and order details." },
  { step: "06", title: "Export & Delivery", desc: "Coordinate packaging, shipment and delivery." },
];

export default function ExportProcess() {
  return (
    <section className="section section--cream" id="export-process" aria-label="Export process">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Export Process</span>
          <h2 className="section__title">How It Works</h2>
          <p className="section__subtitle">
            A simple, transparent six-step process from requirement to delivery.
          </p>
        </Reveal>

        <div className="process__grid">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i % 3}>
              <article className="process-card">
                <div className="process-card__step">{s.step}</div>
                <h3 className="process-card__title">{s.title}</h3>
                <p className="process-card__desc">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
