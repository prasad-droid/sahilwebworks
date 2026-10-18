import React from "react";
import { useReveal } from "../hooks/useReveal.js";
import {
  IconLayers,
  IconChat,
  IconGlobe,
  IconUsers,
  IconPackage,
  IconTruck,
} from "./Icons.jsx";
import "../styles/WhyChooseUs.css";

/**
 * Why Choose Us — messaging themes only.
 * These describe business APPROACH, not verified certifications or guarantees.
 * Align final wording with the confirmed company profile.
 */
const FEATURES = [
  {
    icon: <IconLayers />,
    title: "T-Shirt Product Portfolio",
    text: "A focused, image-led portfolio that makes it easy for buyers to browse T-shirt categories and styles.",
  },
  {
    icon: <IconChat />,
    title: "Wholesale Enquiry Support",
    text: "A simple, direct enquiry process for wholesale buyers to share quantities and requirements.",
  },
  {
    icon: <IconGlobe />,
    title: "Export-Focused Approach",
    text: "Built around international buyer enquiries, with a clear route to start an export conversation.",
  },
  {
    icon: <IconUsers />,
    title: "Customer-Centric Communication",
    text: "Responsive, straightforward communication through WhatsApp, phone and the enquiry form.",
  },
  {
    icon: <IconPackage />,
    title: "Product Requirement Discussions",
    text: "Space to discuss particular styles, colours, quantities and custom requirements, subject to capability.",
  },
  {
    icon: <IconTruck />,
    title: "Long-Term Business Relationships",
    text: "An approach oriented towards repeat, trust-based relationships with wholesale and export buyers.",
  },
];

export default function WhyChooseUs() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="why"
      className="why section section--ink"
      aria-labelledby="why-heading"
    >
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow eyebrow--light">Why Choose Us</p>
          <h2 id="why-heading">Why Connect With Sampurnm Global?</h2>
          <p>
            A professional, enquiry-first approach to T-shirt supply for retail,
            wholesale and export buyers.
          </p>
        </div>

        <div ref={ref} className={`why__grid ${visible ? "is-visible" : ""}`}>
          {FEATURES.map((f, i) => (
            <article
              key={f.title}
              className={`why__card reveal ${
                visible ? "is-visible" : ""
              } reveal--delay-${(i % 3) + 1}`}
            >
              <span className="why__ico">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>

        <p className="why__note">
          These points describe our business approach. Verified company details
          and credentials will be aligned once the official profile is supplied.
        </p>
      </div>
    </section>
  );
}
