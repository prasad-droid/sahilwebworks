import { motion } from "framer-motion";
import {
  Award,
  Handshake,
  Warehouse,
  BadgeDollarSign,
  Users2,
  Globe2,
} from "lucide-react";
import "../styles/why-choose.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const reasons = [
  {
    icon: <Award size={26} />,
    title: "Premium Quality",
    desc: "Strict quality control from farm to packaging.",
  },
  {
    icon: <Handshake size={26} />,
    title: "Direct From Farmers",
    desc: "Products sourced directly from farmer producers.",
  },
  {
    icon: <Warehouse size={26} />,
    title: "Bulk Supply Capability",
    desc: "Able to fulfill large domestic and export orders.",
  },
  {
    icon: <BadgeDollarSign size={26} />,
    title: "Competitive Pricing",
    desc: "Better value through direct sourcing.",
  },
  {
    icon: <Users2 size={26} />,
    title: "Trusted Partnership",
    desc: "Long-term business relationships.",
  },
  {
    icon: <Globe2 size={26} />,
    title: "Global Export Vision",
    desc: "Connecting Indian farmers with worldwide markets.",
  },
];

const WhyChooseUs = () => (
  <section className="section why">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        className="why-head"
      >
        <span className="section-eyebrow">Why Agrani</span>
        <h2 className="section-title">Why Choose Agrani</h2>
        <p className="section-subtitle">
          A partner built on quality, trust and a global vision for Indian farmers.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="why-grid"
      >
        {reasons.map((r, i) => (
          <motion.div key={i} variants={fadeUp} className="why-card">
            <span className="why-icon">{r.icon}</span>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUs;
