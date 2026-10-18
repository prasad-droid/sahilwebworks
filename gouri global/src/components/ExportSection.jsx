import { waLink } from '../utils/whatsapp';
import Reveal from './Reveal';
import '../styles/export.css';

// World map placed on the equirectangular prime-meridian projection, with
// India subtly highlighted and connection arcs radiating outward to major
// markets. Map image: "World map - low resolution.svg" by Al MacDonald (CC BY-SA 3.0).
function WorldVisual() {
  return (
    <div className="world-map">
      <img
        src="/images/world-map.svg"
        alt="World map showing India as an export origin with connections to global markets"
        className="world-map__img"
        loading="lazy"
      />
      <svg
        className="world-map__overlay"
        viewBox="0 0 950 620"
        preserveAspectRatio="xMidYMid meet"
        role="presentation"
      >
        {/* India highlight */}
        <circle cx="678.9" cy="270.1" r="20" className="world-map__india" />
        <circle cx="678.9" cy="270.1" r="34" className="world-map__india-halo" />

        {/* Connection arcs from India */}
        <path d="M678.9,270.1 Q560,210 479.9,177.7" className="world-map__arc" />
        <path d="M678.9,270.1 Q430,225 206.3,208.2" className="world-map__arc" />
        <path d="M678.9,270.1 Q760,360 813.9,434.6" className="world-map__arc" />
        <path d="M678.9,270.1 Q710,272 734.9,294.5" className="world-map__arc" />

        <circle cx="479.9" cy="177.7" r="7" className="world-map__point" />
        <circle cx="206.3" cy="208.2" r="7" className="world-map__point" />
        <circle cx="813.9" cy="434.6" r="7" className="world-map__point" />
        <circle cx="734.9" cy="294.5" r="7" className="world-map__point" />

        <text x="678.9" y="270.1" textAnchor="middle" className="world-map__label">
          IN
        </text>
      </svg>
    </div>
  );
}

export default function ExportSection() {
  const handleEnquiry = () => {
    const message =
      'Hello GOURI GLOBAL TRADE, I would like to start a buyer enquiry for your Indian products.';
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="export" className="section export">
      <div className="container export__container">
        <Reveal className="export__heading">
          <span className="section-eyebrow export__eyebrow">Global Reach</span>
          <h2 className="export__title">From India to the World</h2>
          <p className="export__tagline">Sourcing Locally. Serving Globally.</p>
        </Reveal>

        <Reveal className="export__visual">
          <WorldVisual />
        </Reveal>

        <Reveal className="export__copy">
          <p>
            Connecting international buyers with premium Indian products — quality,
            food safety and reliable sourcing at the heart of everything we do.
          </p>
          <button className="btn btn--accent export__cta" onClick={handleEnquiry}>
            Start a Buyer Enquiry
          </button>
        </Reveal>
      </div>
    </section>
  );
}