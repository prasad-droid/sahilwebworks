import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import MoringaProducts from "./MoringaProducts";
import CarpetsAndRugs from "./CarpetsAndRugs";
import HairAccessories from "./HairAccessories";
import RubberBands from "./RubberBands";

const QUICK_LINKS = [
  { label: "Moringa Powder", href: "#moringa" },
  { label: "Carpets & Rugs", href: "#carpets" },
  { label: "Hair Clips", href: "#hair-accessories" },
  { label: "Rubber Bands", href: "#rubber-bands" },
];

export default function ProductCategories({ onInquire }) {
  return (
    <div className="portfolio" id="products">
      <section className="portfolio__intro section" aria-labelledby="products-title">
        <div className="container">
          <div className="portfolio__head">
            <Reveal className="portfolio__head-copy">
              <p className="eyebrow">
                <span>Our Product Portfolio</span>
              </p>
              <h2 id="products-title" className="section-title">
                Explore Our Product Portfolio
              </h2>
              <p className="section-lede">
                Discover our diverse product range, bringing together natural
                products, home décor, and fashion accessories for different
                customer and business requirements.
              </p>
            </Reveal>

            <Reveal className="portfolio__head-aside" delay={120}>
              <span className="portfolio__aside-icon" aria-hidden="true">
                <Sparkles size={18} strokeWidth={1.7} />
              </span>
              <p>
                Four distinct categories, one relationship-first approach to
                sourcing and trade.
              </p>
              <a className="text-link" href="#inquiry">
                Discuss your requirement
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <Reveal className="portfolio__quick" delay={160}>
            <span className="portfolio__quick-label">
              Jump to a category
              <ArrowDown size={14} aria-hidden="true" />
            </span>
            <nav className="portfolio__chips" aria-label="Product categories">
              {QUICK_LINKS.map(({ label, href }) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      <MoringaProducts onInquire={onInquire} />
      <CarpetsAndRugs onInquire={onInquire} />
      <HairAccessories onInquire={onInquire} />
      <RubberBands onInquire={onInquire} />

      <div className="portfolio__closing">
        <div className="container">
          <Reveal className="portfolio__closing-inner">
            <div>
              <p className="eyebrow">
                <span>Mixed or multiple products?</span>
              </p>
              <h2>One conversation can cover your full requirement.</h2>
            </div>
            <a className="btn btn--light" href="#inquiry">
              Start an enquiry
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
