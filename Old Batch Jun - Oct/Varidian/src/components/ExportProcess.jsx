import "../styles/process.css";
import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Sourcing",
    text: "Connect with reliable Indian agricultural suppliers.",
  },
  {
    number: "02",
    title: "Quality & Preparation",
    text: "Focus on appropriate product sourcing, grading and packaging.",
  },
  {
    number: "03",
    title: "Documentation & Coordination",
    text: "Support professional export documentation and logistics coordination.",
  },
  {
    number: "04",
    title: "Global Delivery",
    text: "Coordinate shipments and communication with international buyers.",
  },
];

export default function ExportProcess({ onRequestQuote }) {
  return (
    <section id="process" className="section process" aria-labelledby="process-title">
      <span className="blob process__blob" />
      <div className="container">
        <Reveal className="section-head center">
          <span className="section-label">How We Work</span>
          <h2 className="section-title" id="process-title">
            Our Export Approach
          </h2>
          <p className="section-subtitle">
            A clear, professional process built around dependable sourcing, careful
            preparation, and reliable delivery to international buyers.
          </p>
        </Reveal>

        <ol className="timeline">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={`reveal-delay-${(index % 4) + 1}`} className="timeline__item">
              <li className="timeline__node">
                <span className="timeline__number">{step.number}</span>
                <span className="timeline__dot" aria-hidden="true" />
                {index < steps.length - 1 && <span className="timeline__line" aria-hidden="true" />}
              </li>
              <div className="timeline__card">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="process__cta">
          <p>Ready to start a requirement?</p>
          <button type="button" className="btn btn-primary" onClick={onRequestQuote}>
            Request a Quote
          </button>
        </Reveal>
      </div>
    </section>
  );
}