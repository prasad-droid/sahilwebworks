import { useState } from 'react'
import { faqs } from '../data/faq.js'
import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId((current) => (current === id ? null : id))

  return (
    <section className="faq section section--cream" id="faq">
      <div className="container faq__grid">
        <Reveal className="faq__head">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Questions Buyers Ask</h2>
          <p className="section-subtitle">
            Common questions about products, supply and requirements. Anything
            more specific — share it through the enquiry form.
          </p>
        </Reveal>

        <Reveal className="faq__list" delay={120}>
          {faqs.map((item) => {
            const open = openId === item.id
            return (
              <div className={`faq-item${open ? ' is-open' : ''}`} key={item.id}>
                <h3 className="faq-item__title">
                  <button
                    type="button"
                    className="faq-item__trigger"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${item.id}`}
                    id={`faq-button-${item.id}`}
                    onClick={() => toggle(item.id)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-item__icon" aria-hidden="true">
                      <Icon name="plus" size={18} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-button-${item.id}`}
                  className="faq-item__panel"
                >
                  <div className="faq-item__content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}