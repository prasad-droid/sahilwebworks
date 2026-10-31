import PageHero from "../components/PageHero";
import ProductSection from "../components/ProductSection";
import QuoteCTA from "../components/QuoteCTA";
import useReveal from "../components/useReveal";
import { useProductsByGroup } from "../store/useAdminProducts";
import "../styles/productsPage.css";

// ==========================================================================
// PRODUCTS PAGE — full content supplied in Site Changes/Products.docx
// Each product shows slidable real images side by side with its details.
// ==========================================================================

const PACKAGING = [
  "Carton Boxes",
  "PP Mesh Bags",
  "Jute Bags",
  "Food Grade",
  "Customized Branding",
  "Private Label",
];

const QUALITY = [
  "Farm Selection",
  "Quality Inspection",
  "Sorting & Grading",
  "Hygienic Packing",
  "Cold Storage",
  "Container Loading",
];

export default function ProductsPage() {
  useReveal();
  const { indianGroups, importedGroup } = useProductsByGroup();

  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Premium Agro Commodities from India"
        intro="We export a wide variety of premium Indian origin agricultural products, and import premium dry fruits that are processed in our world class processing units and supplied across India and worldwide."
        crumbs={[{ label: "Products" }]}
      />

      {/* ---------- Indian origin ---------- */}
      <ProductSection
        id="indian-origin"
        eyebrow="Our Products"
        title="Indian Origin Products"
        intro="Sourced directly from carefully selected farms and certified growers across India."
        groups={indianGroups}
        layout="detail"
      />

      {/* ---------- imported ---------- */}
      <ProductSection
        id="imported"
        eyebrow="Our Products"
        title="Imported Products"
        intro="We Import Dry Fruits and process it in our world class processing units, repack it and re-export to various destinations and distribute in PAN India domestic market as well. "
        groups={[importedGroup]}
        layout="detail"
      />

      {/* ---------- export packaging ---------- */}
      <section className="ppack section-pad">
        <div className="container">
          <div className="ppack__head reveal">
            <p className="eyebrow">Export Packaging</p>
            <h2 className="section-title">Export Packaging</h2>
            <p className="section-sub">
              Packaging is selected to protect product quality in transit and to
              suit your destination market, branding and shelf requirements.
            </p>
          </div>

          <ul className="ppack__grid">
            {PACKAGING.map((p, i) => (
              <li
                className="ppack__item reveal"
                key={p}
                style={{ transitionDelay: `${(i % 4) * 0.05}s` }}
              >
                <span className="ppack__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z" strokeLinejoin="round" />
                    <path d="m3 7.5 9 4.5 9-4.5M12 12v9" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="ppack__name">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- quality assurance ---------- */}
      <section className="pquality section-pad">
        <div className="container pquality__grid">
          <div className="pquality__head reveal">
            <p className="eyebrow">Quality Assurance</p>
            <h2 className="section-title">Quality Assurance</h2>
            <p>
              Every shipment passes through a defined set of checks before it is
              released for export, so that the product that arrives at your
              port matches the product that left ours.
            </p>
            <a
              href={`${import.meta.env.BASE_URL}catalogue.pdf`}
              download
              className="btn btn-primary pquality__cta"
            >
              Download Catalogue
              <span className="btn-arrow" aria-hidden="true">↓</span>
            </a>
          </div>

          <ol className="pquality__steps">
            {QUALITY.map((step, i) => (
              <li
                className="pquality__step reveal"
                key={step}
                style={{ transitionDelay: `${(i % 6) * 0.05}s` }}
              >
                <span className="pquality__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="pquality__label">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>


      <QuoteCTA />
    </>
  );
}
