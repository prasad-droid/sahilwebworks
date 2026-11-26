import { Gem, Droplets, Tag, Globe, Clock, Settings, Package, Users } from "lucide-react";

const FEATURES = [
  { icon: <Gem size={24} />, title: "Premium Quality Materials", desc: "Manufactured using high-quality cotton fibers." },
  { icon: <Droplets size={24} />, title: "Superior Absorbency", desc: "Excellent water absorption and quick drying performance." },
  { icon: <Tag size={24} />, title: "Competitive Pricing", desc: "Value-driven pricing for global buyers." },
  { icon: <Globe size={24} />, title: "Reliable Export Partner", desc: "Professional export support and documentation." },
  { icon: <Clock size={24} />, title: "Timely Delivery", desc: "Strong commitment to delivery schedules." },
  { icon: <Settings size={24} />, title: "Custom Manufacturing", desc: "Customization available based on customer requirements." },
  { icon: <Package size={24} />, title: "Bulk Order Capability", desc: "Efficient handling of large-scale orders." },
  { icon: <Users size={24} />, title: "Customer Satisfaction", desc: "Focused on long-term business relationships." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="why-us">
    <div className="container">
      <div className="section-head">
        <span className="section-tag reveal" data-animation="fade-up">Why Choose Us</span>
        <h2 className="reveal" data-animation="fade-up" data-delay="1">
          Why Choose <span>CHIKHALKAR ENTERPRISES</span>
        </h2>
        <p className="reveal" data-animation="fade-up" data-delay="2">
          A reliable partner built on quality, consistency, and export professionalism.
        </p>
      </div>

      <div className="why-us__grid">
        {FEATURES.map((feature, i) => (
          <div className="why-card reveal" data-animation="fade-up" data-delay={i % 4} key={feature.title}>
            <div className="why-card__icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
