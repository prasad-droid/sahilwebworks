import "../styles/target.css";
import Reveal from "./Reveal";

const customers = [
  {
    icon: "importers",
    title: "International Importers",
    text: "For businesses sourcing agricultural products from India.",
  },
  {
    icon: "wholesalers",
    title: "Wholesalers",
    text: "For bulk distribution opportunities.",
  },
  {
    icon: "distributors",
    title: "Distributors",
    text: "For businesses looking to expand their agricultural product portfolio.",
  },
  {
    icon: "retailers",
    title: "Retailers",
    text: "For retailers seeking Indian agricultural products.",
  },
  {
    icon: "food",
    title: "Food Businesses",
    text: "For businesses requiring agricultural products for food-related operations.",
  },
  {
    icon: "trading",
    title: "Trading Companies",
    text: "For international businesses seeking reliable Indian suppliers.",
  },
];

function CustomerIcon({ name }) {
  if (name === "importers") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M3 11.5 12 3l9 8.5" />
        <path d="M5 10.5V21h14v-10.5" />
        <path d="M12 21v-8" />
      </svg>
    );
  }
  if (name === "wholesalers") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M4 7h16l-1.5 13H5.5L4 7Z" />
        <path d="M8 7a4 4 0 0 1 8 0" />
        <path d="M12 11v4m-2-2h4" />
      </svg>
    );
  }
  if (name === "distributors") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="5" cy="6" r="2.4" />
        <circle cx="19" cy="6" r="2.4" />
        <circle cx="12" cy="18" r="2.4" />
        <path d="M7 7l3.5 9M17 7l-3.5 9M7.4 6h9.2" />
      </svg>
    );
  }
  if (name === "retailers") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M4 11h16v9H4z" />
        <path d="M6 11V8a6 6 0 0 1 12 0v3" />
      </svg>
    );
  }
  if (name === "food") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M6 3v8a2 2 0 0 0 4 0V3" />
        <path d="M8 3v18" />
        <path d="M15 3c1 2 2 4 2 7s-1 5-2 6v5" />
        <path d="M15 10h2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

export default function TargetCustomers({ onRequestQuote }) {
  return (
    <section id="who-we-serve" className="section target" aria-labelledby="target-title">
      <span className="blob target__blob" />
      <div className="container">
        <Reveal className="section-head center">
          <span className="section-label">Who We Serve</span>
          <h2 className="section-title" id="target-title">
            Who We Serve
          </h2>
          <p className="section-subtitle">
            Varidian Exim partners with international businesses across the
            agricultural supply chain.
          </p>
        </Reveal>

        <div className="target__grid">
          {customers.map((customer, index) => (
            <Reveal key={customer.title} delay={`reveal-delay-${(index % 6) + 1}`}>
              <article className="target__card">
                <span className="target__icon" aria-hidden="true">
                  <CustomerIcon name={customer.icon} />
                </span>
                <h3>{customer.title}</h3>
                <p>{customer.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="target__cta">
          <p>Are you an international buyer looking for reliable Indian suppliers?</p>
          <button type="button" className="btn btn-primary btn-lg" onClick={onRequestQuote}>
            Get in Touch
          </button>
        </Reveal>
      </div>
    </section>
  );
}