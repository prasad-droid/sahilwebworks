import "../styles/why-us.css";
import Reveal from "./Reveal";

const features = [
  {
    icon: "quality",
    title: "Quality Focus",
    text: "Focused on supplying quality Indian agricultural products.",
  },
  {
    icon: "sourcing",
    title: "Reliable Sourcing",
    text: "Building relationships with Indian suppliers.",
  },
  {
    icon: "communication",
    title: "Transparent Communication",
    text: "Professional and responsive business communication.",
  },
  {
    icon: "export",
    title: "Export Coordination",
    text: "Attention to documentation and logistics coordination.",
  },
  {
    icon: "partnership",
    title: "Long-Term Partnerships",
    text: "Focused on building lasting relationships with international buyers.",
  },
];

function FeatureIcon({ name }) {
  if (name === "quality") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M12 3 15.5 7l5 .7-3.6 3.6.9 5-4.8-2.5-4.8 2.5.9-5L6 7.7 11 7 12 3Z" />
      </svg>
    );
  }
  if (name === "sourcing") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M4 20c0-9 6-15 16-16-1 11-7 16-13 16" />
        <path d="M4 20c4-6 8-9 12-11" />
      </svg>
    );
  }
  if (name === "communication") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.4 0-2.8-.3-4-1L3 20l1-5.5a8.5 8.5 0 1 1 17-3Z" />
        <path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "export") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M3 11.5 12 3l9 8.5" />
        <path d="M5 10.5V21h14v-10.5" />
        <path d="M10 21v-6h4v6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M11 17 2 8l4-4 3 3" />
      <path d="m13 17 9-9-4-4-3 3" />
      <path d="M9 5.5 12 8l3-2.5M2 14l3 3M22 14l-3 3" />
    </svg>
  );
}

export default function WhyChooseUs({ onRequestQuote }) {
  return (
    <section id="why-us" className="section why-us" aria-labelledby="why-title">
      <span className="blob why-us__blob" />
      <div className="container">
        <Reveal className="section-head center">
          <span className="section-label">Why Varidian Exim</span>
          <h2 className="section-title" id="why-title">
            Why Partner With Varidian Exim?
          </h2>
          <p className="section-subtitle">
            A dependable export partner focused on quality, transparency, and
            long-term relationships with international buyers.
          </p>
        </Reveal>

        <div className="why-us__grid">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={`reveal-delay-${(index % 5) + 1}`}>
              <article className="why-us__card">
                <span className="why-us__icon" aria-hidden="true">
                  <FeatureIcon name={feature.icon} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="why-us__cta">
          <button type="button" className="btn btn-accent" onClick={onRequestQuote}>
            Start a Partnership
          </button>
        </Reveal>
      </div>
    </section>
  );
}