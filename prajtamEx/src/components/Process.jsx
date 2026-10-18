import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/site";

export default function Process() {
  return (
    <section className="process section section--surface" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading
          id="process"
          label="HOW WE WORK"
          title="A Simple, Clear Process"
          subtitle="Four steps from understanding a requirement to building long-term market connections."
        />

        <ol className="process__list">
          {processSteps.map((step) => (
            <li className="process__step" key={step.id} data-reveal>
              <span className="process__number">{step.number}</span>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__text">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
