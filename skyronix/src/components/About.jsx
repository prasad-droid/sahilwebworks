import Reveal from './Reveal.jsx'
import { img } from '../data/products.js'
import { Check, Package } from './Icons.jsx'

const HIGHLIGHTS = [
  'Verified and audited partner factories',
  'Fully documented export process',
  'Transparent pricing — no hidden margins',
  'On-time dispatch, every single shipment',
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal className="about-media">
          <div className="about-media__main">
            <img
              src={img('1581091226825-a6a2a5aee158', 900, 80)}
              alt="Portrait of a professional consulting with a client"
              loading="lazy"
            />
          </div>
          <div className="about-media__float">
            <span className="pulse-ring">
              <Package size={22} />
            </span>
            <div>
              <strong>ISO-aligned processes</strong>
              <small>QC on every single shipment</small>
            </div>
          </div>
          <span className="about-media__badge">ISO 9001-aligned</span>
        </Reveal>

        <Reveal className="about-copy" delay={120}>
          <div className="section-head section-head--left">
            <span className="eyebrow">About Skyronix</span>
            <h2 className="section-title">
              A trusted toy-sourcing bridge <span className="accent">from India</span> to the world
            </h2>
          </div>
          <p className="muted">
            Skyronix Overseas Pvt. Ltd. is an export and sourcing company based in Maharashtra,
            India. We connect global retailers, importers, and brands with India&apos;s finest toy
            manufacturers — handling everything from factory audits and sampling to export
            documentation and on-time dispatch.
          </p>
          <p className="muted">
            Our team has deep roots in the toy value chain, which means you get one accountable
            partner instead of juggling factories, agents, and logistics across time zones.
          </p>
          <ul className="check-list about-copy__list">
            {HIGHLIGHTS.map((item) => (
              <li key={item}>
                <span className="check-icon">
                  <Check size={12} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--primary">
            Start a Sourcing Conversation
          </a>
        </Reveal>
      </div>
    </section>
  )
}