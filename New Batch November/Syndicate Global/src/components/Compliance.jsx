import { Award, FileCheck2, Files, Landmark } from 'lucide-react';
import Reveal from './Reveal.jsx';
import './Compliance.css';

// Compliance is stated at a high level only. Official documents and registration
// numbers are shared directly with qualified buyers after KYC verification.
const documents = [
  {
    title: 'GST Registered',
    detail: 'Active Indian Goods & Services Tax Compliance',
    icon: Landmark,
    status: 'Active Compliance',
  },
  {
    title: 'DGFT / IEC Certified',
    detail: 'Registered Importer-Exporter Code (Government of India)',
    icon: FileCheck2,
    status: 'Active Registration',
  },
  {
    title: 'APEDA Registered',
    detail: 'Agricultural & Processed Food Products Export Development Authority',
    icon: Award,
    status: 'Active Registration',
  },
  {
    title: 'FIEO Membership',
    detail: 'Registration Under Process — Federation of Indian Export Organisations',
    icon: Files,
    status: 'Registration Under Process',
  },
];

export default function Compliance() {
  return (
    <section id="certifications" className="section compliance" aria-labelledby="compliance-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">Certifications &amp; Compliance</p>
          <h2 id="compliance-title" className="section-title">
            Trade with Confidence. <span className="text-gold">Export with Compliance.</span>
          </h2>
          <p className="section-lead">
            Transparent documentation and compliance coordination help create
            confidence at every stage of international trade.
          </p>
        </Reveal>

        <div className="compliance__grid">
          {documents.map(({ title, detail, icon: Icon, status }, index) => (
            <Reveal as="article" className="compliance-card" key={title} delay={index * 90}>
              <span className="compliance-card__icon" aria-hidden="true"><Icon /></span>
              <h3>{title}</h3>
              <p>{detail}</p>
              <span className="compliance-card__status">
                <span className="compliance-card__dot" aria-hidden="true" />
                {status}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="compliance__note">
          <FileCheck2 aria-hidden="true" />
          <p>
            All statutory registrations, RCMC certificates, and banking credentials are
            active and verified. Official copies are shared directly with qualified
            buyers upon formal inquiry and KYC verification.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
