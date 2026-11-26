import { useState } from "react";
import { FAQS } from "../data/faq";
import "../styles/faq.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq section-pad">
      <div className="container faq__inner">
        <div className="faq__head reveal">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Common Questions</h2>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.id} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                <button
                  className="faq-item__button"
                  id={`faq-button-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="faq-item__question">{item.question}</span>
                  <span className="faq-item__icon" aria-hidden="true" />
                </button>
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-button-${item.id}`}
                  className="faq-item__panel"
                  style={{ maxHeight: isOpen ? "300px" : "0px" }}
                >
                  <p className="faq-item__answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
