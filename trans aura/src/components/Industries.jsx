import { Boxes, ClipboardCheck, Cog, FlaskConical, Globe2, Truck } from 'lucide-react'
import '../styles/Industries.css'

const industries = [
  {
    icon: Cog,
    title: 'Industrial Manufacturing',
    text: 'Manufacturers sourcing raw materials and process inputs who value clear requirement communication and reliable supplier coordination from India.'
  },
  {
    icon: FlaskConical,
    title: 'Chemical Processing',
    text: 'Chemical processors seeking suitable industrial chemical sourcing support with specification-focused coordination and dependable communication.'
  },
  {
    icon: Boxes,
    title: 'Wholesale Distribution',
    text: 'Wholesale and distribution businesses looking to source commercial products and industrial supplies from Indian suppliers at competitive value.'
  },
  {
    icon: ClipboardCheck,
    title: 'Industrial Procurement',
    text: 'Procurement teams managing supplier discovery, quotation discussions and export coordination for sourcing requirements from India.'
  },
  {
    icon: Globe2,
    title: 'Trading & Import Distribution',
    text: 'Traders and importers who need dependable Indian supply sources and professional export documentation and shipment coordination.'
  },
  {
    icon: Truck,
    title: 'Commercial Supply',
    text: 'Businesses requiring selected commercial products with consistent communication, requirement-based quotations and dependable sourcing support.'
  }
]

export default function Industries() {
  return (
    <section id="industries" className="section industries">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Who We Support</p>
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-sub">
            We work to support business buyers across industrial and commercial sectors that require
            dependable sourcing and international supply coordination.
          </p>
        </div>

        <div className="industries__grid">
          {industries.map(({ icon: Icon, title, text }, i) => (
            <article className="industries__card reveal" style={{ '--reveal-delay': `${(i % 3) * 0.1}s` }} key={title}>
              <span className="industries__icon" aria-hidden="true">
                <Icon size={24} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <p className="industries__note reveal">
          The sectors above represent the types of business buyers we aim to support. Specific
          supply arrangements are established on a case-by-case enquiry basis.
        </p>
      </div>
    </section>
  )
}