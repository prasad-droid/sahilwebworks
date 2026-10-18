import { FiCheck, FiPenTool } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Reveal } from "../../hooks/useScrollReveal";
import { whatsappLink } from "../../data/site";
import customImage from "../../assets/products/product-7.jpg";

const options = ["Materials", "Sizes", "Colors", "Designs", "Printing", "Branding", "Packaging"];

export default function Customization() {
  return (
    <section className="section custom" aria-label="Customization">
      <div className="container">
        <div className="custom__grid">
          <Reveal>
            <span className="section__eyebrow">Customization</span>
            <h2 className="custom__title">Made to Match Your Brand</h2>
            <p className="custom__text">
              SATBHAI EXIM can offer tote bags according to your requirement. Share your
              specifications and our team will help you find the right solution for your
              business.
            </p>
            <ul className="custom__list">
              {options.map((o) => (
                <li key={o}>
                  <FiCheck aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
            <div className="hero__actions">
              <Link className="btn btn--accent" to="/contact">
                <FiPenTool /> Discuss Your Custom Requirement
              </Link>
              <a
                className="btn btn--whatsapp"
                href={whatsappLink(
                  "Hello SATBHAI EXIM, I have a custom tote bag requirement. Can we discuss?"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </Reveal>

          <Reveal className="custom__media" delay={1}>
            <img
              src={customImage}
              alt="Customized tote bag made to match brand requirements"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
