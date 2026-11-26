import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { faqs } from "../../data/faq";
import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

/**
 * Accessible FAQ accordion (single open item).
 */
export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section className="section" aria-labelledby="faq-heading">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          sub="Quick answers for international buyers exploring VINEXA's sourcing services."
        />

        <div className="faq">
          {faqs.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <ScrollReveal
                key={item.id}
                delay={i * 60}
                className={`faq__item${isOpen ? " faq__item--open" : ""}`}
              >
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  id={`faq-button-${item.id}`}
                  onClick={() => toggle(item.id)}
                >
                  <span>{item.question}</span>
                  <span className="faq__icon" aria-hidden="true">
                    <FaPlus size={15} />
                  </span>
                </button>
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-button-${item.id}`}
                  className="faq__answer-wrap"
                >
                  <div className="faq__answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
