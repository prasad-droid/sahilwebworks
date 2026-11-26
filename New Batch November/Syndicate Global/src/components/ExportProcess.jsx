import { FileText, MapPinned, Package, ScanSearch, Search, Ship } from 'lucide-react';
import Reveal from './Reveal.jsx';
import './ExportProcess.css';

const stages = [
  { number: '01', label: 'Product Sourcing', icon: Search },
  { number: '02', label: 'Quality Inspection & Grading', icon: ScanSearch },
  { number: '03', label: 'Export Packaging', icon: Package },
  { number: '04', label: 'Documentation & Compliance', icon: FileText },
  { number: '05', label: 'Shipment & Transit Management', icon: Ship },
  { number: '06', label: 'Delivery Coordination', icon: MapPinned },
];

export default function ExportProcess() {
  return (
    <section id="process" className="section section--tight export-process" aria-labelledby="process-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">The Export Journey</p>
          <h2 id="process-title" className="section-title">
            From Indian Sources to <span className="text-gold">Global Destinations.</span>
          </h2>
          <p className="section-lead">
            A clear, repeatable sequence that keeps quality, documentation and delivery
            aligned from the first conversation to the final handoff.
          </p>
        </Reveal>

        <div className="process__flow">
          {stages.map(({ number, label, icon: Icon }, index) => (
            <div className="process__pair" key={number}>
              <Reveal as="article" className="process__step" delay={index * 80}>
                <span className="process__number">{number}</span>
                <span className="process__icon" aria-hidden="true"><Icon /></span>
                <h3>{label}</h3>
              </Reveal>
              {index < stages.length - 1 && (
                <span className="process__connector" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
