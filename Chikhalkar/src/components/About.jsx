import { CheckCircle2, Factory } from "lucide-react";
import { IMAGES } from "@/assets/images";

const POINTS = [
  "Premium quality cotton fibers",
  "International quality standards",
  "Efficient supply chain management",
  "Reliable global delivery",
];

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <div className="about__grid">
        <div className="about__media reveal" data-animation="fade-right">
          <img src={IMAGES.aboutTowels} alt="Cotton terry towels manufactured by CHIKHALKAR ENTERPRISES" className="about__img-main" />
          <div className="about__badge">
            <Factory size={22} />
            <div>
              <strong>100%</strong>
              <span>Cotton Terry Towels</span>
            </div>
          </div>
          <img src={IMAGES.collectionTowels} alt="Terry towel collection" className="about__img-accent" />
        </div>

        <div className="about__content">
          <span className="section-tag reveal" data-animation="fade-up">About Us</span>
          <h2 className="reveal" data-animation="fade-up" data-delay="1">
            About <span>CHIKHALKAR ENTERPRISES</span>
          </h2>
          <p className="reveal" data-animation="fade-up" data-delay="2">
            CHIKHALKAR ENTERPRISES is a trusted supplier and exporter of premium Cotton Terry Towels designed for
            commercial and institutional use. Our products are crafted with a focus on quality, comfort, durability,
            and customer satisfaction.
          </p>
          <p className="reveal" data-animation="fade-up" data-delay="3">
            We serve diverse industries including hospitality, healthcare, fitness, wellness, and personal care
            sectors. By maintaining strict quality standards and efficient supply chain management, we ensure reliable
            delivery and long-term business partnerships with clients across international markets.
          </p>
          <p className="reveal" data-animation="fade-up" data-delay="4">
            Our goal is to represent Indian textile excellence globally through innovative products, professional
            service, and consistent quality.
          </p>
          <div className="about__points">
            {POINTS.map((point, i) => (
              <div className="about__point reveal" data-animation="fade-up" data-delay={i} key={point}>
                <CheckCircle2 size={18} />
                {point}
              </div>
            ))}
          </div>
          <a href="#contact" className="btn btn-primary reveal" data-animation="fade-up" data-delay="4">
            Partner With Us
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
