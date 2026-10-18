import {
  FaBoxesStacked,
  FaPlaneUp,
  FaMagnifyingGlassDollar,
  FaCartFlatbed,
  FaBoxOpen,
  FaTruckFast,
  FaHeadset,
} from "react-icons/fa6";
import { useReveal } from "../../hooks/useReveal";

const services = [
  { icon: FaBoxesStacked, title: "Wholesale Supply", desc: "Consistent wholesale quantities for retailers, resellers, and distributors." },
  { icon: FaPlaneUp, title: "Export Services", desc: "Export-ready supply with compliant documentation for international buyers." },
  { icon: FaMagnifyingGlassDollar, title: "Product Sourcing", desc: "Reliable sourcing of quality products across categories and markets." },
  { icon: FaCartFlatbed, title: "Bulk Orders", desc: "Flexible bulk ordering with dedicated support from enquiry to dispatch." },
  { icon: FaBoxOpen, title: "Packaging Support", desc: "Secure, presentable packaging designed for transit and retail readiness." },
  { icon: FaTruckFast, title: "Dispatch Coordination", desc: "On-time dispatch coordination with tracking across supply routes." },
  { icon: FaHeadset, title: "Customer Support", desc: "Professional communication before, during, and after every order." },
];

const Services = () => {
  const ref = useReveal();

  return (
    <section className="section" id="services" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What We Offer</span>
          <h2 className="section-title">Services For Global Buyers</h2>
          <p className="section-subtitle">
            End-to-end merchant trading services that make sourcing from India
            simple, reliable, and professional.
          </p>
        </div>
        <div className="services__grid">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="service-card reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="service-card__icon">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__desc">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
