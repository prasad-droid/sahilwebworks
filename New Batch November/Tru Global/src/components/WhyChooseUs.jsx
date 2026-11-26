import {
  BadgeCheck,
  ShieldCheck,
  Scale,
  Package,
  Handshake,
} from 'lucide-react'
import SectionHeading from './SectionHeading'
import { whyChooseUs } from '../data/siteData'
import '../styles/WhyChooseUs.css'

const icons = {
  'badge-check': BadgeCheck,
  'shield-check': ShieldCheck,
  scale: Scale,
  package: Package,
  handshake: Handshake,
}

export default function WhyChooseUs() {
  return (
    <section className="section why section--warm" id="why-us">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Why Tru Source Global"
          title={<>More Than Trading. <span className="highlight-word">A Trusted Global Sourcing Partnership.</span></>}
        />

        <div className="why__grid">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[item.icon] || BadgeCheck
            return (
              <article className="why__card" key={item.number} data-reveal style={{ transitionDelay: `${index * 55}ms` }}>
                <span className="why__number">{item.number}</span>
                <div className="icon-box"><Icon aria-hidden="true" /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
