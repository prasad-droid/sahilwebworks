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
            <span className="about-section__badge-top">GLOBAL</span>
            <span className="about-section__badge-arrow">→</span>
            <span className="about-section__badge-bottom">WORLD</span>
          </div>
        </div>

        <div className="about-section__content reveal">
          <p className="eyebrow">{about.eyebrow || "About Us"}</p>
          <h2 className="section-title">{about.title || "Welcome to Sugi International"}</h2>

          {(about.paragraphs?.length
            ? about.paragraphs
            : [
                "Sugi International Pvt. Ltd. is a leading exporter of Indian origin fresh fruits, vegetables, spices, Sweet Corn, Maize, Semi Husked Coconuts & Raisins and other agricultural products from India.",
                "We also import premium dry fruits from worldwide suppliers and process them in our world class processing units and export to the global market.",
                "We specialize in supplying premium-quality products to wholesalers, supermarkets, distributors, retailers, and importers across the world. We distribute our imported dry fruits in the PAN India market.",
                "With a strong network of experienced farmers, modern packing facilities, and efficient logistics, we ensure every shipment meets international quality and food safety standards. Our commitment to freshness, reliability, and customer satisfaction has made us a trusted export partner in the global agricultural industry.",
              ]
            ).map((para, i) => (
              <p className="about-section__text" key={i}>
                {para}
              </p>
            ))}

          <Link to="/about" className="btn btn-dark-outline about-section__cta">
            Discover More About Us
            <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
