import { FaBullseye, FaCheckCircle, FaEye, FaGem, FaMedal } from "react-icons/fa";
import aboutImg from "../assets/images/women hand bag 2.jpeg";
import Reveal from "./Reveal";

const CARDS = [
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    text: "To provide world-class leather products with competitive pricing, reliable service, and timely delivery while building long-term business relationships.",
  },
  {
    icon: <FaEye />,
    title: "Our Vision",
    text: "To become a globally recognized exporter of premium leather products known for quality, trust, and customer satisfaction.",
  },
  {
    icon: <FaGem />,
    title: "Our Values",
    text: "Quality, Integrity, Customer Satisfaction, Reliability and Innovation guide every product we craft and every partnership we build.",
  },
];

const VALUES = ["Quality", "Integrity", "Customer Satisfaction", "Reliability", "Innovation"];

const About = () => (
  <section id="about" className="section about">
    <div className="container">
      <div className="about-grid">
        <Reveal type="fade-left" className="about-media">
          <div className="img-frame">
            <img
              className="main"
              src={aboutImg}
              alt="Handcrafted premium leather bags by Ovaa Enterprises"
              loading="lazy"
            />
          </div>
          <div className="about-badge">
            <div className="num">100%</div>
            <div className="lbl">Export Quality</div>
          </div>
          <div className="about-experience">
            <FaMedal /> Made in India
          </div>
        </Reveal>

        <Reveal type="fade-right" className="about-content">
          <div className="section-head">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">
              About <span className="accent">Ovaa Enterprises</span>
            </h2>
          </div>
          <p className="about-copy">
            Ovaa Enterprises is a trusted Indian export company specializing in{" "}
            <strong>premium leather bags and leather accessories</strong>. We are committed to
            delivering products that combine style, durability, and exceptional craftsmanship.
          </p>
          <p className="about-copy">
            Our mission is to connect <strong>Indian manufacturing excellence with global buyers</strong>{" "}
            by offering high-quality products and dependable export services. We work closely with
            reliable manufacturing partners to ensure every product meets international quality
            standards.
          </p>
          <div className="about-values">
            {VALUES.map((v) => (
              <span key={v} className="about-value">
                <FaCheckCircle /> {v}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="about-cards">
        {CARDS.map((c, i) => (
          <Reveal key={c.title} type="fade-up" delay={i * 120}>
            <div className="about-card">
              <div className="icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default About;
