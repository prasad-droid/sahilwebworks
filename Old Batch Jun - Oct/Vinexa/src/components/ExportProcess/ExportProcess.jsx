import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const steps = [
  { num: "01", title: "Share Requirement", desc: "Buyer submits product specifications and quantity." },
  { num: "02", title: "Product Sourcing", desc: "VINEXA identifies suitable suppliers." },
  { num: "03", title: "Quality & Specification Review", desc: "Product requirements are reviewed." },
  { num: "04", title: "Quotation", desc: "Buyer receives a competitive quotation." },
  { num: "05", title: "Order & Documentation", desc: "Order processing and export documentation are coordinated." },
  { num: "06", title: "Shipment", desc: "Goods are prepared and shipment logistics are coordinated." },
];

/**
 * Six-step export process — horizontal timeline on desktop, vertical on mobile.
 */
export default function ExportProcess({ eyebrow = "Export Process" }) {
  return (
    <section className="section section--tint process" aria-labelledby="process-heading">
      <div className="container">
        <SectionHeading
          eyebrow={eyebrow}
          title="How We Work With You"
          sub="A structured export process from first inquiry to final shipment."
        />
        <div className="process__track">
          <div className="process__grid">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} className="process-step" delay={i * 70}>
                <span className="process-step__num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
