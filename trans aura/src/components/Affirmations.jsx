import { BadgeCheck, Gem, Handshake, PhoneCall, Scale } from 'lucide-react'
import '../styles/Affirmations.css'

const commitments = [
  { icon: Gem, title: 'Quality in Every Sourcing Decision' },
  { icon: Scale, title: 'Transparency in Every Discussion' },
  { icon: BadgeCheck, title: 'Reliability in Every Business Relationship' },
  { icon: PhoneCall, title: 'Professionalism in Every Interaction' },
  { icon: Handshake, title: 'Long-Term Value for Every Partnership' }
]

export default function Affirmations() {
  return (
    <section className="section section--navy affirmations" aria-labelledby="affirmations-title">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Our Values</p>
          <h2 id="affirmations-title" className="section-title" style={{ color: '#fff' }}>
            Our Commitment to Global Trade
          </h2>
          <p className="section-sub">
            The principles that guide how we approach sourcing, communication and partnerships.
          </p>
        </div>

        <ul className="affirmations__list">
          {commitments.map(({ icon: Icon, title }, i) => (
            <li className="reveal" style={{ '--reveal-delay': `${i * 0.08}s` }} key={title}>
              <span className="affirmations__icon" aria-hidden="true">
                <Icon size={20} />
              </span>
              <span className="affirmations__text">{title}</span>
              <span className="affirmations__mark" aria-hidden="true">
                &ldquo;
              </span>
            </li>
          ))}
        </ul>

        <p className="affirmations__foot reveal">
          These statements reflect our internal brand principles and values, and are not claimed as
          independently verified performance guarantees.
        </p>
      </div>
    </section>
  )
}