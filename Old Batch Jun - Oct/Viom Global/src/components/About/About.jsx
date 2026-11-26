import { FaAward, FaHandshake, FaGlobeAsia, FaUsers } from "react-icons/fa";
import { IMAGES } from "@/assets/images";
import "@/styles/about.css";

const FEATURES = [
  {
    icon: <FaAward />,
    title: "International Quality Standards",
    desc: "Products sourced and verified to meet global healthcare compliance and safety norms.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Global Export Expertise",
    desc: "Deep knowledge of export procedures, documentation, and international trade.",
  },
  {
    icon: <FaUsers />,
    title: "Reliable Supply Chain",
    desc: "A strong network of trusted Indian manufacturers and efficient logistics partners.",
  },
  {
    icon: <FaHandshake />,
    title: "Customer-Centric Service",
    desc: "Transparent communication and support at every stage of your order.",
  },
];

const About = () => (
  <section id="about" className="about section">
    <div className="container">
      <div className="about__grid">
        <div className="about__media reveal" data-animation="fade-right">
          <div className="about__img">
            <img src={IMAGES.aboutImg} alt="ViOm Global Exim medical disposable products" loading="lazy" />
          </div>
        </div>

        <div className="about__content reveal" data-animation="fade-left">
          <span className="section-tag">About Us</span>
          <h2>
            Your Reliable Partner for <span>Medical Disposable Supplies</span> from India
          </h2>
          <p>
            ViOm Global Exim is a professional Indian exporter and supplier of high-quality medical
            disposables and healthcare products, committed to serving global markets with reliability,
            integrity, and excellence.
          </p>
          <p>
            Based in Navi Mumbai, India, we specialize in sourcing and supplying a wide range of medical and
            healthcare consumables — including alcohol swabs, gloves, infusion set products, urology and
            catheter products, patient care and protection items, wound care and dressings, and other general
            medical disposables — all meeting international quality standards.
          </p>
          <div className="about__mission">
            <h3>Our Mission</h3>
            <p>
              Connect India&apos;s manufacturing excellence with global healthcare needs while building
              long-term partnerships based on trust and transparency.
            </p>
          </div>
        </div>
      </div>

      <div className="about__features">
        {FEATURES.map((f, i) => (
          <div className="about__feature reveal" data-animation="fade-up" data-delay={i} key={f.title}>
            <span className="about__feature-icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
