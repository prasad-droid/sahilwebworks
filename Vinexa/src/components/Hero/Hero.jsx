import { Link } from "react-router-dom";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import heroBg from "../../assets/images/banner image.jpeg";
import { whatsappLink } from "../../data/siteConfig";

/**
 * Full-height hero for the home page.
 */
export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__bg">
        <img
          src={heroBg}
          alt="VINEXA GLOBAL ENTERPRISES — India's Premier Export House"
          fetchPriority="high"
        />
      </div>

      <div className="container hero__inner">
        <h1 className="hero__title anim-fade-up anim-delay-1">
          Taking India&apos;s Best <em>To Worldwide</em>
        </h1>

        <p className="hero__sub anim-fade-up anim-delay-2">
          Your Trusted Partner for Global Sourcing &amp; Export Solutions
        </p>

        <p className="hero__desc anim-fade-up anim-delay-3">
          VINEXA GLOBAL ENTERPRISES is an India-based merchant exporter specializing in premium
          agricultural products, engineering products, and engineering services. We connect global
          buyers with trusted Indian manufacturers, delivering reliable sourcing, assured quality,
          competitive pricing, and on-time delivery.
        </p>

        <div className="hero__actions anim-fade-up anim-delay-4">
          <Link to="/request-quote" className="btn btn--gold btn--lg">
            Request a Quote <FiArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link to="/products" className="btn btn--outline-light btn--lg">
            Explore Products
          </Link>
          <a href={whatsappLink()} className="btn btn--whatsapp btn--lg">
            <FaWhatsapp size={18} aria-hidden="true" /> WhatsApp
          </a>
        </div>

        <div className="hero__actions anim-fade-up anim-delay-5" style={{ marginTop: "0.4rem" }}>
          <Link to="/contact" className="hero__tertiary">
            Contact Us <FaArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
