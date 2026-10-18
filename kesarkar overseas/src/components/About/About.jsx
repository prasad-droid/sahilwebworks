import { FaHandshake, FaAward, FaNetworkWired, FaHeadset } from "react-icons/fa6";
import Reveal from "../Reveal";
import { scrollToId } from "../../utils/config";
import aboutImg from "../../assets/images/cumin-powder.jpeg";

const features = [
  {
    icon: <FaHandshake />,
    title: "Trusted Export Partner",
    desc: "A dependable Indian merchant exporter built on integrity and long-term partnerships.",
  },
  {
    icon: <FaAward />,
    title: "Quality Products",
    desc: "Premium dehydrated fruits & vegetable powders meeting international quality standards.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Reliable Supply Chain",
    desc: "Consistent bulk sourcing from trusted manufacturers with dependable logistics.",
  },
  {
    icon: <FaHeadset />,
    title: "Customer-Focused Service",
    desc: "Professional, responsive communication and support at every stage.",
  },
];

const About = () => (
  <section className="section about" id="about">
    <div className="container">
      <div className="about-grid">
        <Reveal direction="left" className="about-visual-wrap">
          <div className="about-image-card">
            <img src={aboutImg} alt="Kesarkar Overseas premium dehydrated ingredients" loading="lazy" />
          </div>
          <div className="about-badge">
            <strong>India</strong>
            <span>Global Merchant Exporter</span>
          </div>
        </Reveal>

        <div className="about-content">
          <Reveal direction="right">
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              Exporting India's Finest <span className="accent">Food Ingredients</span>
            </h2>
            <p className="about-lead">
              Kesarkar Overseas is an Indian merchant exporter dedicated to supplying
              premium dehydrated fruits and vegetable powders to customers around the
              world.
            </p>
            <p className="about-text">
              We work closely with trusted manufacturers to deliver products that meet
              international quality expectations while ensuring reliable sourcing,
              competitive pricing, and dependable service.
            </p>
            <p className="about-text">
              Our vision is to become a globally trusted merchant exporter recognised
              for integrity, quality, and long-term partnerships while promoting the
              finest products made in India.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollToId("inquiry")}
            >
              Partner With Us
            </button>
          </Reveal>

          <div className="about-features">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 100} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
