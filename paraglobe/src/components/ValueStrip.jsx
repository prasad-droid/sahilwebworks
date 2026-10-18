const items = [
  {
    title: "100% Biodegradable",
    text: "Tableware and packaging that naturally break down.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a7 7 0 0 0-4 12.7V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.3A7 7 0 0 0 12 2Z" />
        <path d="M9 22h6" />
        <path d="M12 11a3 3 0 0 1 3 3" />
      </svg>
    ),
  },
  {
    title: "Export Focused",
    text: "Built to serve distributors and buyers worldwide.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.6 3.8 5.8 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.8-3.8-9S9.5 5.6 12 3Z" />
      </svg>
    ),
  },
  {
    title: "Premium Quality",
    text: "Clean, refined product presentation for global buyers.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 7 9 18l-5-5" />
        <path d="M14 7h6v6" />
      </svg>
    ),
  },
  {
    title: "Eco-Conscious",
    text: "Greener alternatives for modern food-service businesses.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21c-4.6 0-8-3-8-7.3C4 8 12 3 12 3s8 5 8 10.7c0 4.3-3.4 7.3-8 7.3Z" />
        <path d="M12 21V3" />
      </svg>
    ),
  },
];

export default function ValueStrip() {
  return (
    <section className="value-strip" aria-label="Why businesses choose Paraglobe Exims">
      <div className="container value-strip__grid">
        {items.map((item) => (
          <div className="value-strip__item" key={item.title}>
            <span className="value-strip__icon">{item.icon}</span>
            <div>
              <h3 className="value-strip__title">{item.title}</h3>
              <p className="value-strip__text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}