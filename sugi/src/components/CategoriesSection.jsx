import { useSite } from "../store/SiteContext";
import "../styles/categories.css";

// ==========================================================================
// CATEGORIES — product/service categories managed in Admin Panel > Categories.
// Renders nothing until at least one category is added.
// ==========================================================================

export default function CategoriesSection() {
  const { categories = [], content } = useSite();
  if (!categories.length) return null;

  const section = content?.home?.categories || {};

  return (
    <section className="categories section-pad">
      <div className="container">
        <header className="categories__head reveal">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 className="section-title">{section.title}</h2>
          {section.intro && <p className="section-sub">{section.intro}</p>}
        </header>

        <div className="categories__grid">
          {categories.map((category, i) => (
            <article
              className="categories__card reveal"
              key={category.id}
              style={{ transitionDelay: `${(i % 4) * 0.07}s` }}
            >
              <h3 className="categories__name">{category.name}</h3>
              {category.description && (
                <p className="categories__desc">{category.description}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
