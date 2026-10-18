import Reveal from './Reveal.jsx'
import { ShieldCheck, Tag, Truck, FileText, Printer, Users } from './Icons.jsx'

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Verified Quality',
    text: 'Every factory is audited and every shipment QC-checked before it leaves India.',
  },
  {
    icon: Tag,
    title: 'Transparent Pricing',
    text: 'Ex-factory clarity, MOQ transparency, and zero hidden commission layers.',
  },
  {
    icon: Truck,
    title: 'On-Time Delivery',
    text: 'Milestone-tracked production and reliable, scheduled dispatches to your port.',
  },
  {
    icon: FileText,
    title: 'Full Documentation',
    text: 'Complete export paperwork, compliance checks, and market-validated labelling.',
  },
  {
    icon: Printer,
    title: 'OEM & Private Label',
    text: 'Your brand, your packaging, your standards — developed and produced to spec.',
  },
  {
    icon: Users,
    title: 'Single-Point Support',
    text: 'One dedicated coordinator owns your order end-to-end, across every time zone.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section section--alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Why Importers Trust Us</span>
          <h2 className="section-title">
            Choosing Skyronix means <span className="accent">fewer headaches</span>, more shipments
          </h2>
          <p className="section-sub">
            We removed the guesswork from Indian toy sourcing. Here&apos;s what every partner gets,
            as a standard.
          </p>
        </Reveal>

        <div className="why-grid">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon
            return (
              <Reveal key={reason.title} as="article" className="why-card" delay={(i % 3) * 100}>
                <div className="why-card__icon">
                  <Icon size={24} />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}