import { Globe2, PackageCheck, MessagesSquare, Handshake } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { whyChooseUs } from '../data/siteData'
import '../styles/WhyChooseUs.css'

const iconMap = {
  globe: Globe2,
  package: PackageCheck,
  message: MessagesSquare,
  handshake: Handshake,
}

export default function WhyChooseUs() {
  return (
    <section className="section why" id="why-choose-us">
      <div className="container">
        <SectionHeading
          eyebrow="Our Approach"
          title="Why Partner With Sujata Global Exim?"
          subtitle="A clear, buyer-first approach to flexible cable trading."
          center
        />

        <div className="why__grid">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon] || Globe2
            return (
              <article className="why__card" key={item.title} data-reveal>
                <span className="why__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="why__icon" aria-hidden="true">
                  <Icon size={27} strokeWidth={1.8} />
                </span>
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
