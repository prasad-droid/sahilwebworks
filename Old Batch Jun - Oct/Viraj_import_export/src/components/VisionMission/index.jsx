import { FiEye, FiTarget, FiShield } from "react-icons/fi";

const cards = [
  {
    icon: FiTarget,
    title: "Our Mission",
    points: [
      "Deliver premium products worldwide",
      "Maintain international quality standards",
      "Ensure timely shipments on every order",
      "Build long-term customer relationships",
      "Promote Indian craftsmanship globally",
    ],
  },
  {
    icon: FiEye,
    title: "Our Vision",
    desc: "To become a globally recognized exporter known for quality, reliability, and customer satisfaction.",
  },
  {
    icon: FiShield,
    title: "Our Commitment",
    points: [
      "Quality in every product",
      "Integrity in every deal",
      "Ethical sourcing from artisans",
      "Transparent communication",
      "Dependable service always",
    ],
  },
];

const VisionMission = () => (
  <section className="vision section">
    <div className="container">
      <div className="section__head" data-reveal>
        <span className="section__eyebrow">Why We Exist</span>
        <h2 className="section__title">Vision, Mission &amp; Commitment</h2>
        <p className="section__sub">
          The principles that guide every shipment we send across borders.
        </p>
      </div>

      <div className="vision__grid">
        {cards.map((c, i) => (
          <article className="vision__card" key={c.title} data-reveal style={{ transitionDelay: `${i * 120}ms` }}>
            <span className="vision__icon">
              <c.icon aria-hidden="true" />
            </span>
            <h3 className="vision__title">{c.title}</h3>
            {c.desc && <p className="vision__desc">{c.desc}</p>}
            {c.points && (
              <ul className="vision__list">
                {c.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default VisionMission;
