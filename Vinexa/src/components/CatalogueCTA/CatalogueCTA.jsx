import { FaFileDownload } from "react-icons/fa";
import ctaBg from "../../assets/images/cta-bg.svg";
import { catalogues, whatsappLink } from "../../data/siteConfig";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

/**
 * Product catalogue download CTA.
 * Real category catalogues are wired from src/data/siteConfig.js.
 */
export default function CatalogueCTA() {
  return (
    <section className="catalogue-cta section" aria-labelledby="catalogue-heading">
      <div className="catalogue-cta__bg">
        <img src={ctaBg} alt="" aria-hidden="true" loading="lazy" />
      </div>
      <div className="container catalogue-cta__inner">
        <ScrollReveal>
          <span className="section-eyebrow">Product Catalogue</span>
          <h2 id="catalogue-heading">Download Our Product Catalogue</h2>
          <p>
            Explore our product range across rice &amp; dal, spices and engineering products —
            conveniently compiled for international buyers.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={120} className="catalogue-cta__actions">
          {catalogues.map((cat) => (
            <a
              key={cat.id}
              href={cat.url}
              download={cat.fileName}
              className="btn btn--gold btn--lg"
            >
              <FaFileDownload size={18} aria-hidden="true" /> {cat.label} Catalogue
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline-light btn--lg"
          >
            Request Catalogue on WhatsApp
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
