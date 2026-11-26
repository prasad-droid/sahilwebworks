import Reveal from './Reveal.jsx'
import { Target, Eye } from './Icons.jsx'

const CARDS = [
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To make Indian toy exports the first choice of retailers, importers, and brands around the world—through trust, consistent quality, and scale.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To simplify global toy sourcing with transparent pricing, verified factories, and on-time deliveries, so our partners can grow without logistical friction.',
  },
]

export default function VisionMission() {
  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">What Drives Us</span>
          <h2 className="section-title">
            Vision &amp; <span className="accent">mission</span>, clearly stated
          </h2>
        </Reveal>
        <div className="vm-grid">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <Reveal key={card.title} as="article" className="vm-card" delay={i * 120}>
                <div className="vm-card__icon">
                  <Icon size={26} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}