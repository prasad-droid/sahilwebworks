const trustItems = [
  { icon: "leaf", title: "Indian Agricultural Products", text: "Sourced from India" },
  { icon: "globe", title: "International Markets", text: "Built for global buyers" },
  { icon: "handshake", title: "Reliable Sourcing", text: "Trusted supplier network" },
  { icon: "ship", title: "Professional Export Support", text: "Documentation & logistics" },
];

function TrustIcon({ name }) {
  if (name === "globe") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
      </svg>
    );
  }
  if (name === "leaf") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M4 20c0-9 6-15 16-16-1 11-7 16-13 16" />
        <path d="M4 20c4-6 8-9 12-11" />
      </svg>
    );
  }
  if (name === "handshake") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M11 17 2 8l4-4 3 3" />
        <path d="m13 17 9-9-4-4-3 3" />
        <path d="M9 5.5 12 8l3-2.5M2 14l3 3M22 14l-3 3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M3 11.5 12 3l9 8.5" />
      <path d="M5 10.5V21h14v-10.5" />
      <path d="M10 21v-6h4v6" />
    </svg>
  );
}

export default function TrustBar() {
  return (
    <div className="hero__trust">
      {trustItems.map((item) => (
        <div className="hero__trust-item" key={item.title}>
          <span className="hero__trust-icon" aria-hidden="true">
            <TrustIcon name={item.icon} />
          </span>
          <div>
            <strong>{item.title}</strong>
            <span>{item.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}