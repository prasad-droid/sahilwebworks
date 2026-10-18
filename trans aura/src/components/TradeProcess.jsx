import { ClipboardList, FileCheck2, HandCoins, MessagesSquare, SearchCheck } from 'lucide-react'
import '../styles/TradeProcess.css'

const steps = [
  {
    icon: ClipboardList,
    title: 'Share Your Requirement',
    text: 'Tell us the product category, required specifications, quantity, destination market, and other relevant details.'
  },
  {
    icon: SearchCheck,
    title: 'Requirement Review & Sourcing',
    text: 'We review your enquiry and coordinate sourcing discussions with suitable Indian supply sources.'
  },
  {
    icon: HandCoins,
    title: 'Quotation & Commercial Discussion',
    text: 'Discuss pricing, product requirements, order quantities, and applicable commercial terms.'
  },
  {
    icon: FileCheck2,
    title: 'Documentation & Shipment Coordination',
    text: 'Coordinate relevant export documentation and shipment arrangements according to the agreed transaction terms.'
  },
  {
    icon: MessagesSquare,
    title: 'Follow-Up & Business Relationship',
    text: 'Maintain communication regarding the enquiry and agreed supply arrangements.'
  }
]

export default function TradeProcess() {
  return (
    <section id="process" className="section section--soft process">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">How We Work</p>
          <h2 className="section-title">A Clear and Professional Import–Export Process</h2>
          <p className="section-sub">
            A structured approach to understanding your requirements and coordinating supply from
            India.
          </p>
        </div>

        <ol className="process__timeline">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li className="process__step reveal" style={{ '--reveal-delay': `${i * 0.09}s` }} key={title}>
              <span className="process__node" aria-hidden="true">
                <span className="process__num">{i + 1}</span>
                <span className="process__icwrap">
                  <Icon size={20} />
                </span>
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>

        <p className="process__note reveal">
          Timelines and final commercial terms depend on the product, the supplier and the agreed
          transaction conditions.
        </p>
      </div>
    </section>
  )
}