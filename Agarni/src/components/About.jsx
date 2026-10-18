import { motion } from "framer-motion";
import {
  Users,
  Handshake,
  BadgeCheck,
  Truck,
  Leaf,
  Package,
} from "lucide-react";
import aboutImg from "../assets/raisin/golden rasin.jpeg";
import "../styles/about.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const features = [
  { icon: <Users size={22} />, label: "300+ Farmer Members" },
  { icon: <Handshake size={22} />, label: "Direct Farmer Sourcing" },
  { icon: <BadgeCheck size={22} />, label: "Export Quality Products" },
  { icon: <Truck size={22} />, label: "Reliable Supply Chain" },
  { icon: <Leaf size={22} />, label: "Sustainable Farming Practices" },
  { icon: <Package size={22} />, label: "Bulk Quantity Available" },
];

const About = () => (
  <section id="about" className="section about">
    <div className="container">
      <div className="about-grid">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="about-copy"
        >
          <span className="section-eyebrow">About Us</span>
          <h2 className="section-title">About Agrani Shivar Farmer Producer Company</h2>
          <p>
            Agrani Shivar Farmer Producer Company is a collective of more than 300 farmer members
            from Maharashtra, India. Our farmers specialize in the cultivation of turmeric, grapes,
            and moringa.
          </p>
          <p>
            Traditionally, agricultural produce is sold through intermediaries who export products
            and earn higher profits, while farmers receive limited returns. Our mission is to bridge
            this gap by directly connecting farmers with domestic and international buyers.
          </p>
          <p>
            We focus on quality, reliability, transparency, and sustainable agricultural practices
            while ensuring better income opportunities for our farming community.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="about-media"
        >
          <img src={aboutImg} alt="Premium raisins produced from Agrani Shivar grapes" loading="lazy" />
          <span className="about-media-badge">From Farm to Market</span>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="about-features"
      >
        {features.map((f, i) => (
          <motion.div key={i} variants={fadeUp} className="about-feature">
            <span className="about-feature-icon">{f.icon}</span>
            {f.label}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
