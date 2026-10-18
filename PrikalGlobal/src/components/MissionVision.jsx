import { Compass, Eye } from "lucide-react";
import Reveal from "./Reveal.jsx";

const MissionVision = () => (
  <section className="section mission-vision">
    <div className="container">
      <Reveal className="mv-grid">
        <div className="mv-card mv-mission">
          <div className="mv-icon">
            <Compass size={28} />
          </div>
          <h3>Our Mission</h3>
          <p>
            To provide high-quality, eco-friendly Kraft Paper Bags that help businesses
            adopt sustainable packaging practices while ensuring exceptional value,
            reliability, and customer satisfaction.
          </p>
        </div>
        <div className="mv-card mv-vision">
          <div className="mv-icon">
            <Eye size={28} />
          </div>
          <h3>Our Vision</h3>
          <p>
            To become a globally recognized supplier of sustainable packaging solutions and
            contribute to a greener future through innovation and responsible business
            practices.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default MissionVision;
