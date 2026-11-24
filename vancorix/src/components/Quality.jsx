import { FlaskConical, PackageCheck, ScanLine, ShieldCheck } from 'lucide-react';
import { QUALITY_POINTS } from '../data/site';

const pointIcons = [FlaskConical, ShieldCheck, ScanLine, PackageCheck];

const Quality = () => {
  return (
    <section className="section quality" id="quality">
      <div className="shell quality-grid">
        <div className="quality-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Quality assurance</p>
          <h2>Every batch accounted for, before it leaves the plant.</h2>
          <p className="section-lead">
            Each lot is milled, tested and sealed under a documented chain of custody —
            with the paperwork to match.
          </p>
          <blockquote className="testimonial">
            <p>“Uniform mesh, honest specs, on-time containers.”</p>
            <footer>— Importer, Rotterdam</footer>
          </blockquote>
        </div>

        <div className="quality-points">
          {QUALITY_POINTS.map((point, index) => {
            const Icon = pointIcons[index];
            return (
              <div className="quality-point" key={point.value + point.label}>
                <span className="quality-icon"><Icon size={21} strokeWidth={1.8} /></span>
                <div>
                  <strong>{point.value}</strong>
                  <span>{point.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Quality;
