import '../styles/heritage.css'

const promises = [
  {
    title: 'Authenticity',
    text: 'We don\u2019t want to make Indian food look traditional. We want it to feel traditional, taste traditional and remain connected to its roots.',
  },
  {
    title: 'Quality',
    text: 'From ingredient selection to preparation and packaging, we believe every detail matters.',
  },
  {
    title: 'Transparency',
    text: 'We want our customers to know what they are eating, where it comes from and what makes it special.',
  },
  {
    title: 'Responsible Growth',
    text: 'As Rasavaani grows, we aim to create opportunities for traditional food makers, local communities and people who carry India\u2019s culinary knowledge forward.',
  },
]

export default function BrandPromise() {
  return (
    <section id="promise" className="section section--cream promise">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <p className="eyebrow eyebrow--center">The Rasavaani Promise</p>
          <h2>What We Stand For</h2>
        </div>

        <div className="promise__grid">
          {promises.map((item, index) => (
            <article
              key={item.title}
              className="promise__card"
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <span className="promise__motif" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
