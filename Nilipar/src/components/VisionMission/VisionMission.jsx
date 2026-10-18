import { FiEye, FiTarget } from "react-icons/fi";
import Reveal from "../common/Reveal";
import "./VisionMission.css";

const VISION =
  "To become a globally trusted Indian exporter of sustainable products, connecting quality Indian craftsmanship with customers worldwide while building a greener and more responsible future.";

const MISSION =
  "Our mission is to deliver high-quality, eco-friendly jute and natural products to international markets with competitive pricing, reliable service, customization, and on-time delivery. We aim to support sustainable living, empower Indian manufacturers and artisans, and build long-term relationships with customers across the world.";

export default function VisionMission() {
  return (
    <section id="vision-mission" className="section section--tint">
      <div className="container">
        <div className="vision__panel">
          <Reveal direction="up" className="vision__card vision__card--vision">
            <div className="vision__icon">
              <FiEye aria-hidden="true" />
            </div>
            <h3>Our Vision</h3>
            <p>{VISION}</p>
          </Reveal>

          <Reveal direction="up" delay={150} className="vision__card vision__card--mission">
            <div className="vision__icon">
              <FiTarget aria-hidden="true" />
            </div>
            <h3>Our Mission</h3>
            <p>{MISSION}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
