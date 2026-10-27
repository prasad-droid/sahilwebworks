const reasons = [
  {
    title: 'Reliable Sourcing',
    text: 'We work with manufacturing partners to source packaging according to buyer requirements.',
  },
  {
    title: 'Custom Specifications',
    text: 'Sizes, materials, handles, printing and packaging configurations can be discussed according to your requirements.',
  },
  {
    title: 'B2B Bulk Supply',
    text: 'We focus on commercial quantities and recurring business requirements.',
  },
  {
    title: 'Export-Oriented Approach',
    text: 'We understand the importance of specifications, documentation, shipping requirements and communication in international trade.',
  },
  {
    title: 'Recyclable Paper-Based Options',
    text: 'Our kraft paper bags are 100% recyclable, while corrugated packaging is a paper-based option that can be recycled through appropriate systems.',
  },
  {
    title: 'Long-Term Partnerships',
    text: 'Our objective is not simply to complete a transaction, but to build dependable, repeat business relationships.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section" id="why-choose-us">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">Why Choose Us</p>
          <h2 className="section__title">Your Packaging. Your Specifications. Our Sourcing.</h2>
          <p className="section__subtitle">
            Built around your requirements with a focus on consistency, quality and dependable supply.
          </p>
        </header>
        <div className="why__grid">
          {reasons.map((reason) => (
            <article key={reason.title} className="why-card">
              <h3 className="why-card__title">{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
