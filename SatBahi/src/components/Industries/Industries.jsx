import {
  FiShoppingCart,
  FiShoppingBag,
  FiScissors,
  FiSmile,
  FiGift,
  FiBriefcase,
  FiTrendingUp,
  FiTag,
  FiPackage,
  FiLayers,
} from "react-icons/fi";
import { Reveal } from "../../hooks/useScrollReveal";

const industries = [
  { icon: FiShoppingCart, name: "Retail" },
  { icon: FiShoppingBag, name: "Supermarkets" },
  { icon: FiScissors, name: "Fashion Brands" },
  { icon: FiSmile, name: "Lifestyle Brands" },
  { icon: FiGift, name: "Promotional Products" },
  { icon: FiBriefcase, name: "Corporate Gifting" },
  { icon: FiTrendingUp, name: "E-commerce" },
  { icon: FiTag, name: "Private Label" },
  { icon: FiPackage, name: "Distribution" },
  { icon: FiLayers, name: "Wholesale" },
];

export default function Industries() {
  return (
    <section className="section section--dark" aria-label="Industries we serve">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Industries</span>
          <h2 className="section__title">Industries We Serve</h2>
          <p className="section__subtitle">
            Trusted tote bag supply for businesses across retail, promotional and
            corporate sectors.
          </p>
        </Reveal>

        <div className="industries__grid">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.name} delay={i % 5}>
                <div className="industry-card">
                  <div className="industry-card__icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <div className="industry-card__name">{ind.name}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
