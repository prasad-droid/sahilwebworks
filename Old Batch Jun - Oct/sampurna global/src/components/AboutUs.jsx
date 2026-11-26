import React from "react";
import { useReveal } from "../hooks/useReveal.js";
import { siteConfig } from "../data/siteConfig.js";
import { IconArrowRight, IconLayers, IconPackage, IconGlobe } from "./Icons.jsx";
import "../styles/AboutUs.css";

/**
 * About Us — premium two-column layout.
 * The text below is editable placeholder content. Replace with the
 * verified company profile when the official PDF is supplied.
 */
export default function AboutUs() {
  const [headRef, headVisible] = useReveal();
  const [bodyRef, bodyVisible] = useReveal();

  const pillars = [
    {
      icon: <IconLayers />,
      title: "T-Shirt Supply Capabilities",
      text: "Space reserved for verified details about the T-shirt styles, ranges and supply capability the company provides.",
    },
    {
      icon: <IconPackage />,
      title: "Wholesale & Retail Operations",
      text: "A dedicated block for how Sampurnm Global serves wholesale buyers and, where applicable, retail customers.",
    },
    {
      icon: <IconGlobe />,
      title: "Export Activities",
      text: "Placeholder for confirmed export operations, buyer onboarding and international T-shirt sourcing information.",
    },
  ];

  return (
    <section id="about" className="about section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about__grid">
          <div
            ref={bodyRef}
            className={`about__copy reveal ${bodyVisible ? "is-visible" : ""}`}
          >
            <p className="eyebrow">About Sampurnm Global</p>
            <h2 id="about-heading" className="about__heading">
              About {siteConfig.brand.name}
            </h2>
            <p className="about__subheading">{siteConfig.brand.tagline}</p>

            <p className="about__lead">
              <span className="badge badge--muted">Placeholder content</span>
              <br />
              {siteConfig.brand.name} is an apparel business focused on T-shirt
              supply, wholesale and export. This introduction is placeholder text
              pending the official company profile — it will be replaced with the
              verified company introduction, background and positioning once the
              detailed PDF is provided.
            </p>

            <ul className="about__pillars" role="list">
              {pillars.map((p, i) => (
                <li
                  key={p.title}
                  className={`about__pillar reveal reveal--delay-${i + 1} ${
                    bodyVisible ? "is-visible" : ""
                  }`}
                >
                  <span className="about__pillar-ico">{p.icon}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="about__vision">
              <div>
                <h3>Vision</h3>
                <p>
                  Placeholder — the company's vision and mission statements will
                  be inserted here from the verified profile.
                </p>
              </div>
              <div>
                <h3>Mission</h3>
                <p>
                  Placeholder — reserved for the company's confirmed mission and
                  approach to serving wholesale and export buyers.
                </p>
              </div>
            </div>

            <a
              className="about__link"
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a conversation
              <IconArrowRight />
            </a>
          </div>

          <div
            ref={headRef}
            className={`about__visual reveal reveal--right ${
              headVisible ? "is-visible" : ""
            }`}
          >
            <div className="about__img about__img--main">
              <img
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80"
                alt="Neatly folded and arranged T-shirts representing an apparel supply business"
                loading="lazy"
              />
            </div>
            <div className="about__img about__img--sub">
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
                alt="Close-up of fabric texture on a contemporary T-shirt"
                loading="lazy"
              />
            </div>
            <div className="about__stat">
              <span className="about__stat-value">T-Shirt</span>
              <span className="about__stat-label">Supply • Wholesale • Export</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
