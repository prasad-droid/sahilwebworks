import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'

const items = [
  { icon: 'shield', title: 'Quality', text: 'Quality-focused sourcing' },
  { icon: 'drop', title: 'Purity', text: 'Natural ingredient focus' },
  { icon: 'repeat', title: 'Consistency', text: 'Reliable product supply' },
  { icon: 'globe', title: 'Global', text: 'International market focus' },
]

export default function TrustStrip() {
  return (
    <section className="trust-strip" id="trust" aria-label="Company principles">
      <div className="container">
        <Reveal className="trust-strip__grid">
          {items.map((item, i) => (
            <div className="trust-strip__item" key={item.title}>
              <span className="trust-strip__icon">
                <Icon name={item.icon} size={26} />
              </span>
              <div className="trust-strip__text">
                <p className="trust-strip__title">{item.title}</p>
                <p className="trust-strip__desc">{item.text}</p>
              </div>
              {i < items.length - 1 && <span className="trust-strip__sep" aria-hidden="true" />}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}