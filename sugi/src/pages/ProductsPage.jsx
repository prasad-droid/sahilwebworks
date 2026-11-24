import PageHero from "../components/PageHero";
import ProductSection from "../components/ProductSection";
import QuoteCTA from "../components/QuoteCTA";
import useReveal from "../components/useReveal";
import { useSite } from "../store/SiteContext";
import { useProductsByGroup } from "../store/useAdminProducts";
import "../styles/productsPage.css";

// ==========================================================================
// PRODUCTS PAGE — headings, packaging list and quality steps are editable in
// Admin Panel > Website Content > Products Page. Product cards themselves
// come from the Products module.
// ==========================================================================

export default function ProductsPage() {
  useReveal();
  const { indianGroups, importedGroup } = useProductsByGroup();
  const { content } = useSite();
  const page = content?.pages?.products || {};
  const hero = page.hero || {};
  const indian = page.indian || {};
  const imported = page.imported || {};
  const packaging = page.packaging || {};
  const quality = page.quality || {};

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        intro={hero.intro}
        titleClassName="page-hero__title--one-line"
        introClassName="page-hero__intro--two-lines"
        crumbs={[{ label: "Products" }]}
      />

      {/* ---------- Indian origin ---------- */}
      <ProductSection
        id="indian-origin"
        eyebrow={indian.eyebrow}
        title={indian.title}
        intro={indian.intro}
        groups={indianGroups}
        layout="detail"
        introOneLine
      />

      {/* ---------- imported ---------- */}
      <ProductSection
        id="imported"
        eyebrow={imported.eyebrow}
        title={imported.title}
        intro={imported.intro}
        groups={[importedGroup]}
        layout="detail"
      />

      {/* ---------- export packaging ---------- */}
      <section className="ppack section-pad">
        <div className="container">
          <div className="ppack__head reveal">
            <p className="eyebrow">{packaging.eyebrow}</p>
            <h2 className="section-title">{packaging.title}</h2>
            {packaging.intro && <p className="section-sub">{packaging.intro}</p>}
          </div>

          <ul className="ppack__grid">
            {(packaging.items || []).map((p, i) => (
              <li
                className="ppack__item reveal"
                key={`${p}-${i}`}
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
            <p className="eyebrow">{quality.eyebrow}</p>
            <h2 className="section-title">{quality.title}</h2>
            <p>{quality.text}</p>
            <a
              href={`${import.meta.env.BASE_URL}catalogue.pdf`}
              download
              className="btn btn-primary pquality__cta"
            >
              {quality.ctaLabel || "Download Catalogue"}
              <span className="btn-arrow" aria-hidden="true">↓</span>
            </a>
          </div>

          <ol className="pquality__steps">
            {(quality.items || []).map((step, i) => (
              <li
                className="pquality__step reveal"
                key={`${step}-${i}`}
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
