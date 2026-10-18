import React from "react";
import { useReveal } from "../hooks/useReveal.js";
import { IconPackage, IconUsers, IconTruck, IconSparkles, IconArrowRight } from "./Icons.jsx";
import "../styles/ExportSolutions.css";

/**
 * Wholesale & Export Solutions — "T-Shirt Supply for Business Buyers".
 * All service blocks are clearly marked as editable placeholders. No service
 * is promised unless it is confirmed by the company.
 */
const SOLUTIONS = [
  {
    icon: <IconPackage />,
    title: "Wholesale Supply",
    text: "A space to describe bulk-order requirements, product selection and the wholesale enquiry process once confirmed by the company.",
  },
  {
    icon: <IconUsers />,
    title: "Retail Supply",
    text: "A space to explain the retail offering, if applicable to the company's actual business model.",
  },
  {
    icon: <IconTruck />,
    title: "T-Shirt Export",
    text: "Focused on enquiries from international buyers interested in sourcing T-shirts, with a clear route to begin the conversation.",
  },
  {
    icon: <IconSparkles />,
    title: "Custom Requirements",
    text: "Accommodates buyer requests for particular styles, colours, quantities or customisation, subject to actual company capabilities.",
  },
];

export default function ExportSolutions({ onEnquire }) {
  const [ref, visible] = useReveal();

  return (
    <section
      id="services"
      className="solutions section"
      aria-labelledby="solutions-heading"
    >
      <div className="container">
        <div className="solutions__grid">
          <div className="solutions__visual">
            <div className="solutions__img">
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=80"
                alt="Shipping containers representing international export and supply operations"
                loading="lazy"
              />
            </div>
            <div className="solutions__cta-card">
              <p className="eyebrow eyebrow--light">Export Enquiry</p>
              <h3>Ready to source T-shirts?</h3>
              <p>
                Share your market, styles and quantities and start an export
                conversation with Sampurnm Global.
              </p>
              <button
                type="button"
                className="btn btn--primary btn--block"
                onClick={() => onEnquire?.("", "Export Enquiry")}
              >
                Make an Export Enquiry
                <IconArrowRight />
              </button>
            </div>
          </div>

          <div className="solutions__content">
            <div className="section-head">
              <p className="eyebrow">Wholesale &amp; Export</p>
              <h2 id="solutions-heading">
                T-Shirt Supply for Business Buyers
              </h2>
              <p>
                Sampurnm Global serves retail, wholesale and export buyers. The
                blocks below are editable placeholders to be completed with the
                company's verified service details.
              </p>
            </div>

            <div
              ref={ref}
              className={`solutions__list ${visible ? "is-visible" : ""}`}
            >
              {SOLUTIONS.map((s, i) => (
                <article
                  key={s.title}
                  className={`solutions__item reveal ${
                    visible ? "is-visible" : ""
                  } reveal--delay-${i + 1}`}
                >
                  <span className="solutions__item-ico">{s.icon}</span>
                  <div>
                    <div className="solutions__item-head">
                      <h3>{s.title}</h3>
                      <span className="badge badge--muted">Editable</span>
                    </div>
                    <p>{s.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="solutions__note">
              Placeholder content — services will be confirmed and finalised with
              the company's verified information. We do not promise services that
              have not been confirmed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
