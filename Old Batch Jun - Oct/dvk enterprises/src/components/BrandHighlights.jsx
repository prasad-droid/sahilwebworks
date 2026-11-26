import { Boxes, HeartHandshake, Ship, Store } from "lucide-react";
import Reveal from "./Reveal";

const HIGHLIGHTS = [
  {
    icon: Boxes,
    title: "Diverse Product Portfolio",
    text: "Agriculture, home décor and fashion accessories.",
  },
  {
    icon: Store,
    title: "B2B & Retail Opportunities",
    text: "Open to buyers, distributors and individual customers.",
  },
  {
    icon: Ship,
    title: "Merchant Trading & Export",
    text: "Sourcing and trade conversations with a global outlook.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Focused Approach",
    text: "Requirements discussed around your priorities.",
  },
];

export default function BrandHighlights() {
  return (
    <section className="highlights" aria-label="DVK Enterprises at a glance">
      <div className="container">
        <div className="highlights__panel">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              className="highlights__item"
              delay={index * 70}
              key={title}
            >
              <span className="highlights__icon" aria-hidden="true">
                <Icon size={22} strokeWidth={1.7} />
              </span>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
