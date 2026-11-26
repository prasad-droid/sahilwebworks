import { Globe2, Handshake, MessagesSquare, TrendingUp, Crosshair } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { features } from '../data/features'
import '../styles/why.css'

const iconMap = {
  target: Crosshair,
  handshake: Handshake,
  messages: MessagesSquare,
  trending: TrendingUp,
  globe: Globe2,
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section why" aria-labelledby="why-title">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          titleId="why-title"
          title="Building Business Through Trust and Opportunities."
          description="A professional, buyer-focused approach to every business conversation."
          align="center"
        />

        <div className="why__grid">
          {features.map(({ number, title, description, icon }) => {
            const Icon = iconMap[icon]
            return (
              <article className="why-card" key={number} data-reveal>
                <div className="why-card__top">
                  <span className="why-card__icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="why-card__number">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
