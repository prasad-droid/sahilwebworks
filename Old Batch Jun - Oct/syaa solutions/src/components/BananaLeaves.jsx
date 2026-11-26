import { ArrowUpRight, Check, Leaf, PackageCheck, Ship } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';
import { bananaLeaves } from '../data/site.js';

const highlightIcons = [Leaf, Ship, PackageCheck];

export default function BananaLeaves({ onEnquire }) {
  return (
    <section id="banana-leaves" className="section banana-section" aria-labelledby="banana-title">
      <div className="container banana-grid">
        <div className="banana-media" data-reveal>
          <div className="banana-image-main">
            <ImageWithFallback
              src={bananaLeaves.image}
              alt={bananaLeaves.imageAlt}
              width="1200"
              height="900"
            />
          </div>
          <div className="banana-leaf-tag">
            <Leaf size={18} aria-hidden="true" />
            <span>Fresh Indian Banana Leaves</span>
          </div>
        </div>

        <div className="banana-content" data-reveal>
          <p className="eyebrow eyebrow-light">
            <span className="eyebrow-line" aria-hidden="true" />
            Agricultural Export
          </p>
          <h2 id="banana-title">Fresh Indian Banana Leaves for Global Markets.</h2>
          <p className="section-lead">
            SYAA SOLUTION exports fresh banana leaves for buyers seeking Indian agricultural
            products for food-related, hospitality, and other suitable applications.
          </p>

          <ul className="banana-highlights">
            {bananaLeaves.highlights.map((highlight, index) => {
              const Icon = highlightIcons[index] || Check;
              return (
                <li key={highlight}>
                  <Icon size={18} aria-hidden="true" />
                  {highlight}
                </li>
              );
            })}
          </ul>

          <p className="banana-note">{bananaLeaves.note}</p>

          <button
            type="button"
            className="btn btn-sand"
            onClick={() => onEnquire('Fresh Banana Leaves')}
          >
            {bananaLeaves.cta} <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
