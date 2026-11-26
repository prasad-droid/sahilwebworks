import {
  ArrowRight,
  Leaf,
  Globe2,
  Factory,
  Truck,
  ShieldCheck,
} from "lucide-react";
import heroBg from "@/assets/images/stock-hero.jpg";
import Reveal from "./Reveal.jsx";

const STATS = [
  { icon: <Leaf size={20} />, title: "Eco-Friendly Packaging", desc: "Sustainable & compostable Kraft solutions" },
  { icon: <Globe2 size={20} />, title: "Global Export Supply", desc: "Shipping worldwide with USA focus" },
  { icon: <Factory size={20} />, title: "Custom Manufacturing", desc: "OEM, private label & bespoke printing" },
  { icon: <Truck size={20} />, title: "Fast Delivery Support", desc: "Reliable production & shipment schedules" },
];

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-bg">
      <img src={heroBg} alt="Eco-friendly Kraft paper bags manufacturing and export" />
      <div className="hero-overlay" />
    </div>

    <div className="container hero-inner">
      <div className="hero-content">
        <Reveal>
          <span className="hero-badge">
            <ShieldCheck size={16} /> Trusted Kraft Paper Bag Exporter From India
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="hero-title">
            Sustainable <span className="hero-highlight">Kraft Paper Bags</span> For Global Businesses
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="hero-subtitle">
            Premium eco-friendly paper bag solutions designed for retailers, brands,
            wholesalers, and distributors worldwide.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="hero-desc">
            PRIKAL GLOBAL supplies high-quality Kraft Paper Bags that combine durability,
            sustainability, and customization. We help businesses transition to
            environmentally responsible packaging solutions while maintaining premium
            quality and cost efficiency.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="hero-actions">
            <a href="#inquiry" className="btn btn-primary">
              Request A Quote <ArrowRight size={18} />
            </a>
            <a href="#products" className="btn btn-outline">
              Explore Products
            </a>
          </div>
        </Reveal>
      </div>

      <div className="hero-stats">
        {STATS.map((s, i) => (
          <Reveal key={s.title} delay={i * 120}>
            <div className="hero-stat">
              <div className="hero-stat-icon">{s.icon}</div>
              <div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
