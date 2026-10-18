import { Target, Eye, TrendingUp } from "lucide-react";

const GOALS = [
  "Increase export revenue by 30%",
  "Acquire 15 new international customers",
  "Expand into 3 new countries",
  "Maintain 95% on-time delivery performance",
  "Launch 2 new export-focused product lines",
];

const MissionVision = () => (
  <section id="mission" className="mission-vision">
    <div className="container">
      <div className="section-head">
        <span className="section-tag reveal" data-animation="fade-up">Our Purpose</span>
        <h2 className="reveal" data-animation="fade-up" data-delay="1">
          Mission, Vision & <span>Growth</span>
        </h2>
        <p className="reveal" data-animation="fade-up" data-delay="2">
          Driving global textile trade with purpose, quality, and a clear growth roadmap.
        </p>
      </div>

      <div className="mv__cards">
        <div className="mv__card reveal" data-animation="fade-up">
          <div className="mv__icon">
            <Target size={26} />
          </div>
          <h3>Our Mission</h3>
          <p>
            To provide premium-quality Cotton Terry Towels that exceed customer expectations through superior
            craftsmanship, reliability, and exceptional service.
          </p>
        </div>
        <div className="mv__card reveal" data-animation="fade-up" data-delay="1">
          <div className="mv__icon">
            <Eye size={26} />
          </div>
          <h3>Our Vision</h3>
          <p>
            To become a globally recognized towel export brand by expanding into international markets, building
            long-term partnerships, and delivering world-class textile solutions.
          </p>
        </div>
      </div>

      <div className="mv__goals reveal" data-animation="fade-up">
        <div className="mv__goals-head">
          <div className="mv__icon">
            <TrendingUp size={22} />
          </div>
          <h3>Business Growth Goals</h3>
        </div>
        <div className="mv__goals-list">
          {GOALS.map((goal, i) => (
            <div className="mv__goal" key={goal}>
              <span className="goal-num">0{i + 1}</span>
              {goal}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MissionVision;
