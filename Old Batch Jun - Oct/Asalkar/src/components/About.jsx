import { BadgeCheckIcon, ShieldIcon, GlobeIcon, CheckIcon, TruckIcon } from "./icons.jsx";
import useReveal from "../hooks/useReveal.js";
import aboutImage from "../assets/images/WhatsApp Image 2026-08-10 at 10.09.07 PM.jpeg";
import "../styles/about.css";

const ABOUT_POINTS = [
  "Trusted Indian manufacturers",
  "International quality standards",
  "Transparent business practices",
  "Customized sourcing solutions",
];

const About = () => {
  const ref = useReveal();

  return (
    <section className="section" id="about">
      <div className="container about-grid" ref={ref}>
        <div className="about-visual reveal">
          <div className="main">
           
            <div className="big">
              Quality Indian Textiles,
              <em>Delivered Worldwide</em>
            </div>
            <div className="ship">
              <span className="ship-icon">
                <TruckIcon />
              </span>
              Serving importers, wholesalers, hotels &amp; retailers across the globe
            </div>
          </div>
        </div>

        <div className="about-content reveal" style={{ "--delay": "0.15s" }}>
          <span className="section-eyebrow">About Us</span>
          <h2 className="section-title">
            About <span>Asalkaar Global Exim</span>
          </h2>
          <h3>
            <BadgeCheckIcon />
            Bridging Indian Manufacturers &amp; Global Buyers
          </h3>
          <p>
            Asalkaar Global Exim is an Indian export trading company specializing in
            premium-quality Cotton Terry Towels. We bridge the gap between reliable Indian
            manufacturers and global buyers by delivering high-quality textile products that meet
            international standards.
          </p>
          <p>
            Our commitment is built on quality, transparency, timely delivery, and long-term
            business relationships. We focus on understanding customer requirements and providing
            customized solutions that help businesses grow confidently in competitive markets.
          </p>
          <p>
            Whether serving wholesalers, distributors, retailers, hospitality suppliers, or
            healthcare providers, we strive to be a trusted sourcing partner for Cotton Terry
            Towels worldwide.
          </p>

          <ul className="about-points">
            {ABOUT_POINTS.map((point) => (
              <li key={point}>
                <span className="tick">
                  <CheckIcon />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
