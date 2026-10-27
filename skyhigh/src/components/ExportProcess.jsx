import { FileText, MessageSquare, CheckCircle, Truck } from 'lucide-react';
import '../styles/sections.css';

const ExportProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Share Your Requirement',
      description: 'Tell us which product you need, the quantity, specifications, and destination.',
      icon: <FileText size={24} />
    },
    {
      number: '02',
      title: 'Discuss Product Details',
      description: 'Review product requirements, packaging preferences, and commercial expectations.',
      icon: <MessageSquare size={24} />
    },
    {
      number: '03',
      title: 'Confirm the Order',
      description: 'Discuss quotation, payment terms, documentation, and shipment arrangements.',
      icon: <CheckCircle size={24} />
    },
    {
      number: '04',
      title: 'Coordinate the Shipment',
      description: 'Coordinate the agreed export process and delivery arrangements.',
      icon: <Truck size={24} />
    }
  ];

  return (
    <section id="process" className="export-process section">
      <div className="container">
        <div className="section-header">
          <h2>A Clearer Way to Source from India</h2>
        </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-number">{step.number}</div>
              <div className="process-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExportProcess;
