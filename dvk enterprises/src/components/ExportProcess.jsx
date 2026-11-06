import {
  ClipboardList,
  MessagesSquare,
  PackageCheck,
  Truck,
} from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Share Your Requirements",
    text: "Customers share product interests, specifications, and quantity requirements.",
  },
  {
    icon: MessagesSquare,
    title: "Product Discussion",
    text: "Discuss product availability, designs, packaging, and commercial expectations.",
  },
  {
    icon: PackageCheck,
    title: "Confirm Your Order",
    text: "Finalize the agreed product details, pricing, payment terms, and order conditions.",
  },
  {
    icon: Truck,
    title: "Order Coordination",
    text: "Coordinate the agreed sourcing, packaging, and delivery or export arrangements.",
  },
];

export default function ExportProcess() {
  return (
    <section className="process section" id="process" aria-labelledby="process-title">
      <div className="process__backdrop" aria-hidden="true">
        <span className="process__glow" />
        <span className="process__grid" />
      </div>

      <div className="container">
        <Reveal className="process__head">
          <p className="eyebrow eyebrow--light">
            <span>Our Business &amp; Export Process</span>
          </p>
          <h2 id="process-title" className="section-title">
            Simple Steps. Better Business Connections.
          </h2>
          <p className="section-lede">
            A clear path from your first enquiry to coordinated order
            arrangements.
          </p>
        </Reveal>

        <ol className="process__list">
          {STEPS.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              as="li"
              className="process__step"
              delay={index * 90}
              key={title}
            >
              <span className="process__number" aria-hidden="true">
                0{index + 1}
              </span>
              <span className="process__icon" aria-hidden="true">
                <Icon size={22} strokeWidth={1.7} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="process__footer" delay={120}>
          <p>
            Each enquiry is different. Share your requirements and we will take
            the conversation from there.
          </p>
          <a className="btn btn--gold" href="#inquiry">
            Start Your Enquiry
          </a>
        </Reveal>
      </div>
    </section>
  );
}
