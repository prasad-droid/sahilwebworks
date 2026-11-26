import { Link } from "../router";
import { useSite } from "../store/SiteContext";
import "../styles/aboutSection.css";

// ==========================================================================
// HOME ABOUT SECTION — "Welcome to Sugi International".
// Image supplied in Homepage.docx (company's entire operations); override
// from Admin Panel > Website Content > About Us.
// ==========================================================================

import operationsImage from "../assets/brand/company-operations.jpg";

export default function AboutSection() {
  const { content } = useSite();
  const about = content?.about || {};
  const image = about.image || operationsImage;
  return (
    <section id="about" className="about-section section-pad">
      <div className="container about-section__grid">
        <div className="about-section__media reveal">
          <img
            src={image}
            alt="Sugi International Pvt. Ltd. operations — global trade, quality products, trusted partner"
            className="about-section__image"
            loading="lazy"
          />
          <div className="about-section__badge float-badge" aria-hidden="true">
            <span className="about-section__badge-top">{about.badgeTop}</span>
            <span className="about-section__badge-arrow">→</span>
            <span className="about-section__badge-bottom">{about.badgeBottom}</span>
          </div>
        </div>

        <div className="about-section__content reveal">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="section-title">{about.title}</h2>

          {(about.paragraphs || []).map((para, i) => (
            <p className="about-section__text" key={i}>
              {para}
            </p>
          ))}

          <Link to="/about" className="btn btn-dark-outline about-section__cta">
            {about.ctaLabel}
            <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
