import { motion } from "framer-motion";
import { ArrowRight, Phone, Award, Leaf, Globe2, PackageCheck, Sprout } from "lucide-react";
import turmericImg from "../assets/turmeric/image1.jpeg";
import moringaImg from "../assets/moringa/WhatsApp Image 2026-08-10 at 12.27.18 PM.jpeg";
import raisinImg from "../assets/raisin/golden raisin 2.jpeg";
import "../styles/hero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 34 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65 } },
};

const stats = [
  { icon: <Award size={20} />, value: "300+", label: "Farmers" },
  { icon: <Leaf size={20} />, value: "Premium", label: "Quality Products" },
  { icon: <Globe2 size={20} />, value: "Domestic & Export", label: "Supply" },
  { icon: <PackageCheck size={20} />, value: "Bulk Orders", label: "Accepted" },
];

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-deco hero-deco--one">
      <Leaf size={40} />
    </div>
    <div className="hero-deco hero-deco--two">
      <Sprout size={54} />
    </div>
    <div className="hero-deco hero-deco--three">
      <Leaf size={30} />
    </div>

    <div className="container">
      <div className="hero-grid">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hero-content">
          <span className="hero-badge">
            <Sprout size={14} />
            Farmer Producer Company · Sangli, Maharashtra
          </span>
          <h1 className="hero-title">
            From Farmers To <span className="text-gold">The World</span>
          </h1>
          <p className="hero-subtitle">
            Premium Quality Turmeric, Moringa and Raisins Directly From Farmer Producers.
          </p>
          <p className="hero-desc">
            Agrani Shivar Farmer Producer Company represents more than 300 dedicated farmers
            producing high-quality turmeric, moringa, and grapes. We supply premium agricultural
            products to domestic and international markets with complete quality assurance.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-gold">
              Explore Products <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              <Phone size={18} /> Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeRight} className="hero-media">
          <div className="hero-img-main">
            <img src={turmericImg} alt="Premium turmeric powder from Sangli" />
          </div>
          <div className="hero-img hero-img--moringa">
            <img src={moringaImg} alt="Nutrient-rich moringa powder" />
          </div>
          <div className="hero-img hero-img--raisin">
            <img src={raisinImg} alt="Golden raisins from Sangli grapes" />
          </div>
          <span className="hero-media-badge">
            <Award size={18} /> Export Quality Guaranteed
          </span>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="hero-stats"
      >
        {stats.map((s, i) => (
          <motion.div key={i} variants={fadeUp} className="hero-stat">
            <span className="hero-stat-icon">{s.icon}</span>
            <span className="hero-stat-value">{s.value}</span>
            <span className="hero-stat-label">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
