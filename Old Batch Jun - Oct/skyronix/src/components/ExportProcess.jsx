import Reveal from './Reveal.jsx'
import { Clipboard, Search, Tag, Package, Layers, Truck } from './Icons.jsx'

const STEPS = [
  {
    icon: Clipboard,
    title: 'Share your requirement',
    text: 'Tell us the category, quantity, and target price. No obligation to switch suppliers.',
  },
  {
    icon: Search,
    title: 'Factory shortlist & audit',
    text: 'We match verified, audited factories that fit your brief and quality standards.',
  },
  {
    icon: Tag,
    title: 'Quotation & negotiation',
    text: 'Transparent landed quotes, clear MOQ clarity, and rates negotiated on your behalf.',
  },
  {
    icon: Package,
    title: 'Sample & approval',
    text: 'We source and courier samples for your sign-off before any bulk production begins.',
  },
  {
    icon: Layers,
    title: 'Bulk production',
    text: 'Your order moves into production with POs, timelines, and milestone updates.',
  },
  {
    icon: Truck,
    title: 'QC & dispatch',
    text: 'Multi-stage inspection, complete documentation, and on-time dispatch to your port.',
  },
]

export default function ExportProcess() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">How It Works</span>
          <h2 className="section-title">
            From brief to dispatch in <span className="accent">six clear steps</span>
          </h2>
          <p className="section-sub">
            A documented, repeatable process — so every order runs the same reliable way.
          </p>
        </Reveal>

        <div className="process-grid">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal key={step.title} as="article" className="process-card" delay={(i % 6) * 80}>
                <div className="process-card__num">{String(i + 1).padStart(2, '0')}</div>
                <span className="process-card__icon">
                  <Icon size={30} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}