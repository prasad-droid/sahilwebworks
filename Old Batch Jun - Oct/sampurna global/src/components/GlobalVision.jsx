import React from "react";
import { useReveal } from "../hooks/useReveal.js";
import { IconGlobe, IconArrowRight, IconTruck } from "./Icons.jsx";
import "../styles/GlobalVision.css";

/**
 * Global Vision section.
 * Reserved space for verified export information. Values are explicitly marked
 * "To be confirmed" — no countries, volumes, offices or clients are invented.
 */
const GLOBAL_INFO = [
  { label: "Target Export Markets", value: "To be confirmed" },
  { label: "Countries Served", value: "To be confirmed" },
  { label: "International Buyer Enquiries", value: "Open" },
  { label: "Export Capabilities", value: "To be confirmed" },
  { label: "Shipping Arrangements", value: "To be confirmed" },
];

export default function GlobalVision({ onEnquire }) {
  const [ref, visible] = useReveal();

  return (
    <section
      id="global"
      className="global section section--ink"
      aria-labelledby="global-heading"
    >
      <div className="global__bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
          alt=""
          loading="lazy"
        />
      </div>

      <div className="container global__inner">
        <div className="global__copy">
          <p className="eyebrow eyebrow--light">Global Vision</p>
          <h2 id="global-heading">Taking T-Shirt Supply to Global Markets</h2>
          <p>
            Sampurnm Global aims to connect with customers through a professional
            product portfolio and an accessible wholesale and export enquiry
            process.
          </p>

          <div
            ref={ref}
            className={`global__info ${visible ? "is-visible" : ""}`}
          >
            {GLOBAL_INFO.map((item, i) => (
              <div
                key={item.label}
                className={`global__info-item reveal ${
                  visible ? "is-visible" : ""
                } reveal--delay-${i + 1}`}
              >
                <span className="global__info-label">{item.label}</span>
                <span
                  className={`global__info-value ${
                    item.value === "Open" ? "is-open" : ""
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="global__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => onEnquire?.("", "Export Enquiry")}
            >
              Make an Export Enquiry
              <IconArrowRight />
            </button>
            <span className="global__hint">
              <IconGlobe />
              International buyers welcome
            </span>
          </div>

          <p className="global__note">
            Export markets, countries served, volumes and shipping arrangements
            will be added from verified company information. Nothing here is a
            confirmed claim.
          </p>
        </div>

        <div className="global__badge">
          <span className="global__badge-ico">
            <IconTruck />
          </span>
          <div>
            <strong>Export Enquiries Open</strong>
            <span>Share your destination market &amp; requirements</span>
          </div>
        </div>
      </div>
    </section>
  );
}
