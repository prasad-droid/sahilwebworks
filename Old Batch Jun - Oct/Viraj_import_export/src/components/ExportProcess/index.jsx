import { processSteps } from "../../data/data";

const ExportProcess = () => (
  <section id="process" className="process section">
    <div className="container">
      <div className="section__head" data-reveal>
        <span className="section__eyebrow">Export Process</span>
        <h2 className="section__title">From Inquiry to Delivery</h2>
        <p className="section__sub">
          A streamlined six-step journey designed for complete transparency.
        </p>
      </div>

      <div className="process__timeline">
        {processSteps.map((s, i) => (
          <div className="process__step" key={s.title} data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
            <span className="process__num">{s.step}</span>
            <div className="process__card">
              <h3 className="process__title">{s.title}</h3>
              <p className="process__desc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExportProcess;
