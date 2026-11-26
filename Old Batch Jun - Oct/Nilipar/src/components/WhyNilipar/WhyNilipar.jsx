import {
  FiDroplet,
  FiSun,
  FiHome,
  FiShield,
  FiGlobe,
  FiRefreshCw,
  FiFeather,
  FiTruck,
  FiTag,
  FiClock,
  FiPackage,
  FiPenTool,
  FiHeadphones,
  FiShoppingBag,
  FiShoppingCart,
  FiKey,
  FiCoffee,
  FiBriefcase,
  FiGift,
  FiBox,
} from "react-icons/fi";
import Reveal from "../common/Reveal";
import "./WhyNilipar.css";

const SUSTAINABILITY = [
  { icon: FiDroplet, title: "Reduce Plastic Pollution", desc: "Every jute and bagasse product replaces a single-use plastic item in the economy." },
  { icon: FiSun, title: "Promote Renewable Materials", desc: "Jute fibre and sugarcane bagasse grow back season after season." },
  { icon: FiHome, title: "Support Sustainable Living", desc: "Compostable, reusable and recyclable products for everyday life." },
  { icon: FiRefreshCw, title: "Protect Natural Resources", desc: "Low-impact farming and cleaner manufacturing with less waste." },
  { icon: FiGlobe, title: "Responsible Global Trade", desc: "Ethical export practices built around environmental stewardship." },
];

const LIFECYCLE = [
  { step: "01", title: "Grown", desc: "Jute and sugarcane are farmed as renewable natural crops." },
  { step: "02", title: "Crafted", desc: "Fibres are spun, woven and pressed into finished products." },
  { step: "03", title: "Used", desc: "Durable, everyday products serve businesses and consumers." },
  { step: "04", title: "Returned", desc: "Fully biodegradable products safely return to the earth." },
];

const FEATURES = [
  { icon: FiFeather, title: "Eco-Friendly Products", desc: "Natural, renewable materials with full biodegradability." },
  { icon: FiShield, title: "Export Quality Standards", desc: "Consistent, inspection-ready quality for global buyers." },
  { icon: FiTruck, title: "Reliable Supply Chain", desc: "Structured sourcing and logistics you can depend on." },
  { icon: FiTag, title: "Competitive Pricing", desc: "Fair factory-based pricing built for wholesale volumes." },
  { icon: FiClock, title: "Timely Delivery", desc: "On-schedule dispatch to markets across the USA and Europe." },
  { icon: FiPackage, title: "Bulk Order Capability", desc: "Container-scale production for large importers." },
  { icon: FiPenTool, title: "Custom Branding", desc: "Printing, sizing and packaging tailored to your brand." },
  { icon: FiHeadphones, title: "Dedicated Support", desc: "A responsive export team for every order, start to finish." },
];

const INDUSTRIES = [
  { icon: FiShoppingBag, name: "Retail Chains", desc: "Branded jute shopping and carry bags" },
  { icon: FiShoppingCart, name: "Supermarkets", desc: "Grocery bags and produce carryalls" },
  { icon: FiKey, name: "Hotels", desc: "Bagasse tableware and guest amenities" },
  { icon: FiCoffee, name: "Restaurants", desc: "Compostable plates, bowls and cutlery" },
  { icon: FiTruck, name: "Food Delivery", desc: "Biodegradable containers and meal trays" },
  { icon: FiBriefcase, name: "Catering", desc: "Bulk serving and clamshell solutions" },
  { icon: FiFeather, name: "Eco Brands", desc: "Plastic-free packaging aligned to values" },
  { icon: FiGift, name: "Corporate Gifting", desc: "Custom printed promotional jute bags" },
  { icon: FiBox, name: "Packaging Companies", desc: "Wholesale jute and bagasse supplies" },
  { icon: FiGlobe, name: "Importers & Wholesalers", desc: "Container-scale reliable export supply" },
];

function SubHead({ eyebrow, title, desc }) {
  return (
    <div className="wn__subhead">
      <span className="eyebrow">{eyebrow}</span>
      <h3>{title}</h3>
      {desc && <p>{desc}</p>}
    </div>
  );
}

export default function WhyNilipar() {
  return (
    <section id="why-nilipar" className="section section--white">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">What We Stand For</span>
            <h2>Sustainable Excellence, Built for Export</h2>
            <p>
              Our values shape every order we ship — green by design, reliable in practice, and
              tailored to the industries that depend on us.
            </p>
          </div>
        </Reveal>

        {/* Why Choose Us */}
        <div id="why-choose-us" className="wn__block wn__block--panel">
          <Reveal>
            <SubHead
              eyebrow="Why Choose Us"
              title="A Partner You Can Trust at Every Step"
              desc="From first enquiry to final shipment, we build long-term export relationships around quality, transparency, and dependable service."
            />
          </Reveal>

          <div className="why__grid">
            {FEATURES.map(({ icon: Icon, title, desc }, index) => (
              <Reveal key={title} direction="up" delay={(index % 4) * 90} className="why__item">
                <article className="why__card">
                  <div className="why__icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Sustainability */}
        <div id="sustainability" className="wn__block">
          <Reveal>
            <SubHead
              eyebrow="Sustainability"
              title="Building a Greener Tomorrow"
              desc="Every product we export is a step away from plastic and toward a renewable, circular economy."
            />
          </Reveal>

          <div className="sustainability__grid">
            {SUSTAINABILITY.map(({ icon: Icon, title, desc }, index) => (
              <Reveal key={title} direction="up" delay={index * 80} className="sustainability__item">
                <div className="sustainability__card">
                  <div className="sustainability__icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" className="wn__infographic-wrap">
            <div className="sustainability__infographic">
              <h4 className="sustainability__infographic-title">The Lifecycle of Jute &amp; Bagasse</h4>
              <ol className="sustainability__lifecycle">
                {LIFECYCLE.map(({ step, title, desc }, index) => (
                  <li key={step} className="sustainability__life-item">
                    <span className="sustainability__step">{step}</span>
                    <div>
                      <h5>{title}</h5>
                      <p>{desc}</p>
                    </div>
                    {index < LIFECYCLE.length - 1 && <span className="sustainability__arrow" aria-hidden="true">→</span>}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        {/* Industries */}
        <div id="industries" className="wn__block">
          <Reveal>
            <SubHead
              eyebrow="Industries We Serve"
              title="Sustainable Solutions for Every Sector"
              desc="From supermarket shelves to hospitality tables, our products support businesses moving away from plastic — from single stores to container orders."
            />
          </Reveal>

          <div className="industries__grid">
            {INDUSTRIES.map(({ icon: Icon, name, desc }, index) => (
              <Reveal key={name} direction="up" delay={(index % 5) * 70} className="industries__item">
                <article className="industries__card">
                  <span className="industries__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h4>{name}</h4>
                  <p>{desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
