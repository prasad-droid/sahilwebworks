const features = [
  {
    title: "Sustainable Focus",
    text: "Dedicated to biodegradable tableware and takeaway packaging.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21c-4.6 0-8-3-8-7.3C4 8 12 3 12 3s8 5 8 10.7c0 4.3-3.4 7.3-8 7.3Z" />
      </svg>
    ),
  },
  {
    title: "Global Orientation",
    text: "Focused on serving international distributors, suppliers and food-service businesses.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.6 3.8 5.8 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.8-3.8-9S9.5 5.6 12 3Z" />
      </svg>
    ),
  },
  {
    title: "Product-Focused Approach",
    text: "Present product details clearly so buyers can understand available solutions.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
        <path d="M3 8l9 5 9-5" />
        <path d="M12 13v8" />
      </svg>
    ),
  },
  {
    title: "Business-Friendly Communication",
    text: "Simple enquiries, clear product discussions and easy export communication.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
  },
  {
    title: "Quality & Presentation",
    text: "Products presented professionally for international buyers.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 7 9 18l-5-5" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Why Us</span>
          <h2 className="section-title">Why Choose Paraglobe Exims</h2>
          <p className="section-subtitle">
            A focused partner for businesses looking to source sustainable,
            export-ready tableware and packaging solutions.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <article className={`feature-card reveal reveal-visual reveal-delay-${i % 5}`} key={f.title}>
              <span className="feature-card__icon">{f.icon}</span>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__text">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}