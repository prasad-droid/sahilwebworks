import { useState } from 'react';
import { SectionHeading } from './SectionHeading.jsx';
import { Reveal } from './Reveal.jsx';
import { Icon } from './Icons.jsx';
import { faqs } from '../data/faqs.js';
import { useEnquiry } from '../context/EnquiryContext.jsx';

export function FAQ() {
  const [open, setOpen] = useState(0);
  const { startEnquiry } = useEnquiry();

  return (
    <section className="faq section" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Questions buyers ask"
          title="Frequently Asked Questions"
          titleId="faq-heading"
          description="If your question is not answered here, send it to us directly - we reply to every enquiry."
          align="center"
        />

        <Reveal className="faq__list" delay={60}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <div className={`faq__item${isOpen ? ' is-open' : ''}`} key={faq.id || faq.question}>
                <h3 className="faq__q">
                  <button
                    type="button"
                    className="faq__trigger"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="faq__trigger-text">
                      <span className="faq__num" aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {faq.question}
                    </span>
                    <span className="faq__icon" aria-hidden="true">
                      <Icon name="arrowRight" size={18} />
                    </span>
                  </button>
                </h3>

                {/* Grid-rows animation keeps the panel in the DOM for
                    screen readers while allowing a smooth height transition. */}
                <div className="faq__panel" id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
                  <div className="faq__answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>

        <Reveal className="faq__foot" delay={80}>
          <div>
            <strong>Still have a question?</strong>
            <p>
              Send it over. We will answer it honestly, even if the answer is &ldquo;not available
              for that product&rdquo;.
            </p>
          </div>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => startEnquiry('', { anchor: '#bulk-order' })}
          >
            Ask Your Question
            <Icon name="arrowRight" size={18} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export default FAQ;
