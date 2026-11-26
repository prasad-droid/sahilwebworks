import Reveal from './Reveal.jsx'
import { Ship, Heart, Store } from './Icons.jsx'

const CARDS = [
  {
    icon: Ship,
    title: 'For Importers & Retailers',
    text: 'Long-term supply, seasonal planning, and flexible order sizes — we scale with your demand.',
  },
  {
    icon: Heart,
    title: 'For Brands & Startups',
    text: 'From idea to shelf with OEM, private label, and compliance support built into every step.',
  },
  {
    icon: Store,
    title: 'For E-commerce Sellers',
    text: 'Catalogue-ready products, reliable dispatch schedules, and quality your reviews will thank you for.',
  },
]

export default function Partnership() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Who We Partner With</span>
          <h2 className="section-title">
            Built for the <span className="accent">way you sell</span>
          </h2>
        </Reveal>

        <div className="partnership-grid">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <Reveal key={card.title} as="article" className="partnership-card" delay={i * 110}>
                <div className="partnership-card__icon">
                  <Icon size={26} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <p className="partnership-note">
            We don&apos;t publish testimonials — we&apos;d rather you experience the service
            first-hand. Let&apos;s build a track record together.
          </p>
        </Reveal>
      </div>
    </section>
  )
}