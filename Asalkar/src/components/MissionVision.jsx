import { TargetIcon, EyeIcon } from "./icons.jsx";
import useReveal from "../hooks/useReveal.js";
import "../styles/about.css";

const MissionVision = () => {
  const ref = useReveal();

  return (
    <section className="section section-alt mission-vision">
      <div className="mv-bg" />
      <div className="container" ref={ref}>
        <div className="section-header reveal">
          <span className="section-eyebrow">Mission &amp; Vision</span>
          <h2 className="section-title">
            Our Purpose &amp; <span>Direction</span>
          </h2>
          <p className="section-subtitle">
            Driven by a clear mission and a forward-looking vision for international trade.
          </p>
        </div>

        <div className="mv-grid">
          <div className="mv-card mv-mission reveal">
            <span className="mv-icon">
              <TargetIcon />
            </span>
            <h3>Our Mission</h3>
            <p>
              To provide premium-quality Indian Cotton Terry Towels to customers worldwide while
              maintaining the highest standards of quality, reliability, and customer satisfaction.
            </p>
          </div>

          <div className="mv-card mv-vision reveal" style={{ "--delay": "0.15s" }}>
            <span className="mv-icon">
              <EyeIcon />
            </span>
            <h3>Our Vision</h3>
            <p>
              To become a globally trusted export partner recognized for quality, integrity,
              professionalism, and excellence in international trade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
