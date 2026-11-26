import {
  FaGem,
  FaSackDollar,
  FaBoxOpen,
  FaTruck,
  FaBoxesStacked,
  FaLink,
  FaComments,
  FaHandshake,
} from "react-icons/fa6";
import { useReveal } from "../../hooks/useReveal";

const reasons = [
  { icon: FaGem, title: "Premium Quality", desc: "Export-grade finishing and consistent design quality on every order." },
  { icon: FaSackDollar, title: "Competitive Wholesale Pricing", desc: "Direct merchant trading keeps pricing sharp for your margins." },
  { icon: FaBoxOpen, title: "Export Ready Packaging", desc: "Carefully packed shipments built to travel safely across borders." },
  { icon: FaTruck, title: "Worldwide Shipping", desc: "Reliable dispatch to domestic and international destinations." },
  { icon: FaBoxesStacked, title: "Bulk Order Support", desc: "Dedicated handling of large volume orders without compromise." },
  { icon: FaLink, title: "Reliable Supply Chain", desc: "Trusted sourcing network for consistent, dependable supply." },
  { icon: FaComments, title: "Professional Communication", desc: "Clear, responsive updates from enquiry to delivery." },
  { icon: FaHandshake, title: "Long-Term Relationships", desc: "We grow with partners who value trust and repeat business." },
];

const WhyChooseUs = () => {
  const ref = useReveal();

  return (
    <section className="section why" id="why" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-title">A Partner You Can Rely On</h2>
          <p className="section-subtitle">
            From first enquiry to final delivery, we are built around reliability,
            quality, and long-term business relationships.
          </p>
        </div>
        <div className="why__grid">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="why-card reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="why-card__icon">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="why-card__title">{title}</h3>
              <p className="why-card__desc">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
