import React from "react";
import { siteConfig } from "../data/siteConfig.js";
import { IconArrowRight, IconWhatsApp, IconGlobe, IconTruck } from "./Icons.jsx";
import "../styles/Hero.css";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Hero() {
  const { brand } = siteConfig;

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero__media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1920&q=80"
          alt=""
          loading="eager"
          fetchpriority="high"
        />
        <span className="hero__scrim" />
      </div>

      <div className="hero__inner container">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light hero__eyebrow">
            T-SHIRT SUPPLY • WHOLESALE • EXPORT
          </p>

          <h1 id="hero-heading" className="hero__title">
            Complete Solution.
            <span className="hero__title-accent">
              Global VISION<span>.</span>
            </span>
          </h1>

          <p className="hero__text">
            Discover {brand.name}, your destination for T-shirt supply and
            apparel sourcing. Explore our portfolio and connect with us for
            wholesale requirements and international T-shirt export enquiries.
          </p>

          <div className="hero__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => scrollTo("portfolio")}
            >
              Explore Our Portfolio
              <IconArrowRight />
            </button>
            <button
              type="button"
              className="btn btn--ghost-light"
              onClick={() => scrollTo("enquiry")}
            >
              Discuss Your Requirements
            </button>
          </div>
        </div>

        <aside className="hero__card" aria-label="Business overview">
          <div className="hero__card-row">
            <span className="hero__card-ico">
              <IconTruck />
            </span>
            <div>
              <span className="hero__card-label">Business Type</span>
              <strong>{brand.businessType}</strong>
            </div>
          </div>
          <div className="hero__card-row">
            <span className="hero__card-ico">
              <IconGlobe />
            </span>
            <div>
              <span className="hero__card-label">Primary Focus</span>
              <strong>{brand.primaryGoal}</strong>
            </div>
          </div>
          <a
            className="hero__card-wa"
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp />
            WhatsApp Us
          </a>
        </aside>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="hero__marquee-group">
              <span>Wholesale T-Shirts</span>
              <span aria-hidden="true">•</span>
              <span>Apparel Sourcing</span>
              <span aria-hidden="true">•</span>
              <span>Export Enquiries</span>
              <span aria-hidden="true">•</span>
              <span>Bulk Supply</span>
              <span aria-hidden="true">•</span>
              <span>Custom Requirements</span>
              <span aria-hidden="true">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
