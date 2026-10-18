import { useState } from 'react'
import { faqs } from '../data/faq.js'

function Answer({ answer }) {
  return answer.map((block, i) => {
    if (block.kind === 'list') {
      return (
        <ul className="tag-list" key={i}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    }
    return <p key={i}>{block.text}</p>
  })
}

function FaqItem({ faq, index, open, onToggle }) {
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="faq-btn"
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        id={`faq-button-${index}`}
        onClick={onToggle}
      >
        <span>{faq.q}</span>
        <span className="faq-btn__icon">
          <FaQPlus />
        </span>
      </button>
      <div
        id={`faq-panel-${index}`}
        className="faq-panel"
        role="region"
        aria-labelledby={`faq-button-${index}`}
      >
        <div className="faq-panel__inner">
          <div className="faq-answer">
            <Answer answer={faq.a} />
          </div>
        </div>
      </div>
    </div>
  )
}

const FaQPlus = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section section--alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">
            Questions importers <span className="accent">ask us most</span>
          </h2>
        </div>

        <div className="faq">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}