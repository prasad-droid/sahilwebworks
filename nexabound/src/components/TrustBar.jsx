import '../styles/trustbar.css';

const trustItems = [
  { icon: '◆', label: 'Quality-Focused Sourcing' },
  { icon: '◧', label: 'Customization Options' },
  { icon: '▤', label: 'Bulk Orders' },
  { icon: '✈', label: 'Export Support' },
  { icon: '◉', label: 'Global Buyer Focus' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar" role="presentation">
      <div className="container">
        <div className="trust-bar-inner">
          {trustItems.map(item => (
            <div key={item.label} className="trust-bar-item">
              <span className="trust-bar-icon" aria-hidden="true">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}