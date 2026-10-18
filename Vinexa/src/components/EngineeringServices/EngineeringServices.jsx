import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import imgProductDesign from "../../assets/images/Website Images/Engineering Servises/Product Design.png";
import img2dDrafting from "../../assets/images/Website Images/Engineering Servises/2D Drafting.png";
import img3dCad from "../../assets/images/Website Images/Engineering Servises/3D CAD DESIGN.png";
import imgCae from "../../assets/images/Website Images/Engineering Servises/CAE Analysis.png";

const services = [
  {
    title: "Product Design",
    desc: "End-to-end product development support through experienced Indian design partners.",
    image: imgProductDesign,
  },
  {
    title: "2D Drafting",
    desc: "Accurate 2D drawings and manufacturing documentation as per your standards.",
    image: img2dDrafting,
  },
  {
    title: "3D CAD Design",
    desc: "Parametric 3D models and assemblies for visualization and production.",
    image: img3dCad,
  },
  {
    title: "CAE Analysis",
    desc: "Simulation-driven validation for performance, strength and reliability.",
    image: imgCae,
  },
];

/**
 * Engineering services offered to industrial customers.
 */
export default function EngineeringServices() {
  return (
    <section className="section section--light" aria-labelledby="services-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Engineering Services"
          title="Industrial Support from Experienced Indian Partners"
          sub="We offer engineering support services to industrial customers by connecting them with experienced Indian manufacturers and technical partners."
        />

        <div className="services__grid">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} className="service-card" delay={i * 110}>
              <div className="service-card__media">
                <img src={s.image} alt={s.title} loading="lazy" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link to="/request-quote" className="service-card__link">
                Discuss Your Requirement <FaArrowRight size={13} aria-hidden="true" />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-3">
          <Link to="/request-quote" className="btn btn--primary btn--lg">
            Discuss Your Requirement <FaArrowRight size={17} aria-hidden="true" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
