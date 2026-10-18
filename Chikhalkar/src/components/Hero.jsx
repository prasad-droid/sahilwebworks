import { ArrowRight, BadgeCheck, Globe, Truck, Award, ChevronDown } from "lucide-react";
import { IMAGES } from "@/assets/images";

const STATS = [
  { icon: <BadgeCheck size={22} />, title: "Export Quality Products", desc: "International standards" },
  { icon: <Globe size={22} />, title: "Global Business Focus", desc: "Markets worldwide" },
  { icon: <Truck size={22} />, title: "Reliable Supply Chain", desc: "On-time every time" },
  { icon: <Award size={22} />, title: "Customer Satisfaction", desc: "Long-term partnerships" },
];

const Hero = () => (
  <section id="home" className="hero">
    <img src={IMAGES.heroTowel} alt="Premium Cotton Terry Towels by CHIKHALKAR ENTERPRISES" className="hero__bg" />
    <div className="hero__overlay" />

    <div className="hero__content container">
      <span className="hero__badge">
        <span className="dot" />
        Premium Cotton Terry Towel Exporter From India
      </span>
      <h1 className="hero__title">
        Premium Cotton Terry Towels For <span>Global Businesses</span>
      </h1>
      <p className="hero__subtitle">
        Delivering high-quality Terry Towels to hotels, healthcare institutions, spas, fitness centers, and commercial
        buyers worldwide.
      </p>
      <p className="hero__desc">
        CHIKHALKAR ENTERPRISES is committed to supplying premium-quality Cotton Terry Towels that combine softness,
        durability, absorbency, and international quality standards. We help businesses enhance customer experience
        through reliable textile solutions and professional export services.
      </p>
      <div className="hero__actions">
        <a href="#products" className="btn btn-primary">
          Explore Products <ArrowRight size={17} />
        </a>
        <a href="#contact" className="btn btn-outline-white">
          Request A Quote
        </a>
      </div>
    </div>

    <div className="hero__stats container">
      <div className="hero__stats-grid">
        {STATS.map((stat, i) => (
          <div className="hero__stat reveal" data-animation="fade-up" data-delay={i} key={stat.title}>
            <div className="hero__stat-icon">{stat.icon}</div>
            <h3>{stat.title}</h3>
            <p>{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <a href="#about" className="hero__scroll" aria-label="Scroll down">
      <ChevronDown size={26} />
    </a>
  </section>
);

export default Hero;
