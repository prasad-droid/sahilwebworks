import {
  Handshake,
  HeartHandshake,
  Layers,
  Ship,
  SlidersHorizontal,
  Store,
} from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: Layers,
    title: "Diverse Product Categories",
    text: "Multiple product categories across agriculture, home décor, and fashion accessories.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Sourcing Approach",
    text: "Discuss product requirements and sourcing needs according to customer expectations.",
  },
  {
    icon: Store,
    title: "B2B & Retail Opportunities",
    text: "Business inquiries for wholesalers, distributors, retailers, and individual customers.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Focused Service",
    text: "A flexible approach to understanding different product and purchasing requirements.",
  },
  {
    icon: Ship,
    title: "Export-Oriented Business",
    text: "Focused on exploring international business and export opportunities.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    text: "Building meaningful relationships through the philosophy of shared growth.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why section" id="why-us" aria-labelledby="why-title">
      <div className="container">
        <div className="why__head">
          <Reveal>
            <p className="eyebrow">
              <span>Why DVK Enterprises</span>
            </p>
            <h2 id="why-title" className="section-title">
              Growing Together, Building Better Business Relationships
            </h2>
          </Reveal>
          <Reveal className="why__head-aside" delay={110}>
            <p>
              A practical, people-first approach to sourcing — with room for
              different products, markets and business models.
            </p>
            <a className="text-link" href="#inquiry">
              Tell us what you need
            </a>
          </Reveal>
        </div>

        <div className="why__grid">
          {FEATURES.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              as="article"
              className="why__card"
              delay={(index % 3) * 80}
              key={title}
            >
              <div className="why__card-top">
                <span className="why__icon" aria-hidden="true">
                  <Icon size={23} strokeWidth={1.6} />
                </span>
                <span className="why__index" aria-hidden="true">
                  0{index + 1}
                </span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
