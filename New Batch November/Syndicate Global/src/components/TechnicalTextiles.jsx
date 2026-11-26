import { ArrowUpRight, Check, Layers3 } from 'lucide-react';
import Reveal from './Reveal.jsx';
import './TechnicalTextiles.css';

const specifications = [
  'Custom widths',
  'Custom colours',
  'Plain and patterned weaves',
  'Consistent weave density',
  'Width tolerance control',
  'Verified tensile strength',
  'Secure roll winding',
  'Moisture-resistant export packaging',
];

const applications = [
  'Plastic mat bordering',
  'Industrial applications',
  'Manufacturing requirements',
];

export default function TechnicalTextiles() {
  return (
    <section id="textiles" className="section section--dark textiles" aria-labelledby="textiles-title">
      <div className="container textiles__grid">
        <Reveal className="textiles__visual" image>
          <div className="textiles__main-image">
            <img
              src="/images/woven-tapes.webp"
              alt="Rolls of narrow fabric woven tape in beige and gold tones"
              width="1400"
              height="1050"
              loading="lazy"
            />
          </div>
          <div className="textiles__inset-image">
            <img
              src="/images/weaving-loom.webp"
              alt="Close-up of yarn being woven on an industrial loom"
              width="933"
              height="1400"
              loading="lazy"
            />
          </div>
          <span className="textiles__visual-label">
            <Layers3 aria-hidden="true" /> Precision narrow fabrics
          </span>
        </Reveal>

        <Reveal className="textiles__content" delay={120}>
          <p className="eyebrow">Flagship Range · Precision Technical Textiles</p>
          <h2 id="textiles-title" className="section-title">
            Narrow Fabric <span className="text-gold">Woven Tapes.</span>
          </h2>
          <p className="textiles__desc">
            We manufacture and export high-performance narrow fabric woven tapes
            designed to meet specific technical requirements of international B2B
            manufacturers.
          </p>

          <div className="textiles__block">
            <h3>Key Specifications</h3>
            <ul className="textiles__specs">
              {specifications.map((item) => (
                <li key={item}><Check aria-hidden="true" /> {item}</li>
              ))}
            </ul>
          </div>

          <div className="textiles__block">
            <h3>Primary Applications</h3>
            <div className="textiles__applications">
              {applications.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>

          <a className="btn btn--primary" href="#contact">
            Request Specifications <ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
