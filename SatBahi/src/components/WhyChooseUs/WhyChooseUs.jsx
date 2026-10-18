import {
  FiAward,
  FiTrendingDown,
  FiShield,
  FiFeather,
  FiSliders,
  FiPackage,
  FiTruck,
  FiHeart,
} from "react-icons/fi";
import { Reveal } from "../../hooks/useScrollReveal";

const reasons = [
  {
    icon: FiAward,
    title: "Superior Product Quality",
    desc: "High-quality tote bags designed for durability and everyday use.",
  },
  {
    icon: FiTrendingDown,
    title: "Competitive Pricing",
    desc: "Value-focused solutions for international bulk buyers.",
  },
  {
    icon: FiShield,
    title: "Durable Products",
    desc: "Tote bags built to handle retail, travel and daily usage.",
  },
  {
    icon: FiFeather,
    title: "Eco-Friendly Options",
    desc: "Sustainable and reusable tote bag options for conscious brands.",
  },
  {
    icon: FiSliders,
    title: "Customizable Designs",
    desc: "Materials, sizes, colors and designs tailored to your needs.",
  },
  {
    icon: FiPackage,
    title: "Bulk Order Capability",
    desc: "Support for wholesalers, retailers and distributors.",
  },
  {
    icon: FiTruck,
    title: "Reliable Export Services",
    desc: "Professional coordination and timely delivery.",
  },
  {
    icon: FiHeart,
    title: "Long-Term Business Focus",
    desc: "We build partnerships built on consistency and trust.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section" id="why-choose-us" aria-label="Why choose SATBHAI EXIM">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Why Choose Us</span>
          <h2 className="section__title">Why Choose SATBHAI EXIM?</h2>
          <p className="section__subtitle">
            A dependable export partner for global tote bag buyers.
          </p>
        </Reveal>

        <div className="why__grid">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={i % 4}>
                <article className="why-card">
                  <div className="why-card__icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <h3 className="why-card__title">{r.title}</h3>
                  <p className="why-card__desc">{r.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
