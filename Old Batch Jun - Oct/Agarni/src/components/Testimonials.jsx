import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import "../styles/testimonials.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const testimonials = [
  {
    text: "Reliable supplier with excellent product quality and timely delivery.",
    name: "International Buyer",
    role: "UAE · Middle East",
  },
  {
    text: "Professional team and consistent agricultural products.",
    name: "Wholesale Distributor",
    role: "India",
  },
  {
    text: "Trusted partner for bulk procurement requirements.",
    name: "Procurement Head",
    role: "Europe",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="section testimonials">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        className="testimonials-head"
      >
        <span className="section-eyebrow">Testimonials</span>
        <h2 className="section-title">What Our Buyers Say</h2>
        <p className="section-subtitle">
          Trust built through consistent quality and dependable partnerships.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="testimonials-grid"
      >
        {testimonials.map((t, i) => (
          <motion.figure key={i} variants={fadeUp} className="testimonial-card">
            <span className="testimonial-quote">
              <Quote size={24} />
            </span>
            <div className="testimonial-stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={16} fill="currentColor" />
              ))}
            </div>
            <blockquote>{t.text}</blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
