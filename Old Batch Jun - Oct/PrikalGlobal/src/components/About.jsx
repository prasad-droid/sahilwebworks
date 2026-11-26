import { Leaf, ShieldCheck, TrendingUp, Handshake, Award } from "lucide-react";
import aboutImg from "@/assets/images/stock-about.jpg";
import Reveal from "./Reveal.jsx";

const FEATURES = [
  { icon: <Leaf size={20} />, text: "Environmentally responsible packaging" },
  { icon: <ShieldCheck size={20} />, text: "Superior manufacturing standards" },
  { icon: <TrendingUp size={20} />, text: "Competitive global pricing" },
  { icon: <Handshake size={20} />, text: "Professional export support" },
];

const About = () => (
  <section id="about" className="section about">
    <div className="container about-inner">
      <Reveal direction="left" className="about-media">
        <div className="about-img-wrap">
          <img src={aboutImg} alt="PRIKAL GLOBAL Kraft paper bag products" />
          <div className="about-badge">
            <Award size={26} />
            <div>
              <strong>Global Supplier</strong>
              <span>Trusted by buyers worldwide</span>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal direction="right" className="about-content">
        <span className="eyebrow">
          <Leaf size={14} /> About Us
        </span>
        <h2 className="section-title">
          About <span className="accent">PRIKAL GLOBAL</span>
        </h2>
        <p>
          PRIKAL GLOBAL is a trusted exporter of premium eco-friendly Kraft Paper Bags,
          delivering sustainable packaging solutions to customers worldwide. Our focus is
          on quality, reliability, innovation, and environmental responsibility.
        </p>
        <p>
          We work closely with global buyers to provide customized packaging products that
          meet modern business requirements. Through competitive pricing, superior
          manufacturing standards, and professional export support, we help businesses
          strengthen their brand image while reducing environmental impact.
        </p>
        <p>
          Our commitment is to become a preferred global supplier of sustainable packaging
          solutions and build long-term relationships based on trust and performance.
        </p>
        <div className="about-features">
          {FEATURES.map((f) => (
            <div className="about-feature" key={f.text}>
              <span className="about-feature-icon">{f.icon}</span>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
        <div className="about-actions">
          <a href="#inquiry" className="btn btn-secondary">
            Work With Us
          </a>
          <a href="#services" className="btn btn-ghost">
            Our Services
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;
