import { PROCESS_STEPS } from '../data/site';

const Process = () => {
  return (
    <section className="section process" id="process">
      <div className="shell">
        <div className="section-heading">
          <p className="eyebrow"><span className="eyebrow-dot" /> Sourcing to shipment</p>
          <h2>Four steps, one clear chain of custody.</h2>
          <p className="section-lead">
            A repeatable process that keeps origin, specification and documentation
            aligned from farm to container.
          </p>
        </div>

        <ol className="process-steps">
          {PROCESS_STEPS.map((step) => (
            <li className="process-step" key={step.id}>
              <span className="process-number">{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
