import {
  Eye,
  Target,
  Globe,
  Award,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  MessageCircle,
  CheckCircle,
  Users,
} from 'lucide-react';
import '../styles/company.css';

const CompanyValues = () => {
  const goals = [
    {
      icon: <Globe size={28} />,
      title: 'Expand Global Reach',
      description: 'Grow our network of importers, wholesalers, hotels, resorts and distributors across international markets.',
    },
    {
      icon: <Award size={28} />,
      title: 'Deliver Consistent Quality',
      description: 'Supply quality-assured terry towels that meet agreed specifications, GSM and finishing standards.',
    },
    {
      icon: <Sparkles size={28} />,
      title: 'Offer Flexible Customisation',
      description: 'Support buyer-specific sizes, colours, packaging and private labelling requirements.',
    },
    {
      icon: <HeartHandshake size={28} />,
      title: 'Build Lasting Partnerships',
      description: 'Support buyers with transparent communication and dependable service from enquiry to repeat orders.',
    },
  ];

  const coreValues = [
    {
      icon: <ShieldCheck size={28} />,
      title: 'Quality First',
      description: 'Careful sourcing, checking and finishing in every product we supply.',
    },
    {
      icon: <MessageCircle size={28} />,
      title: 'Trust & Transparency',
      description: 'Clear, honest and timely communication at every stage of an order.',
    },
    {
      icon: <CheckCircle size={28} />,
      title: 'Reliability',
      description: 'Commitments honoured and shipments coordinated with care.',
    },
    {
      icon: <Users size={28} />,
      title: 'Buyer Focus',
      description: 'Solutions shaped around the needs of each customer and market.',
    },
  ];

  return (
    <section id="company" className="company-values section">
      <div className="container">
        <div className="section-header">
          <h2>Our Company Goals, Vision, Mission &amp; Core Values</h2>
          <p>The principles that guide how we source, serve and grow with our partners worldwide.</p>
        </div>

        <div className="vision-mission-grid">
          <article className="vm-card vm-card-vision">
            <div className="vm-icon"><Eye size={32} /></div>
            <h3>Our Vision</h3>
            <p>
              To become a globally recognised and trusted Indian export brand, delivering high-quality textile
              and home-linen products to international markets while building long-term partnerships based on
              trust, quality and reliability.
            </p>
          </article>

          <article className="vm-card vm-card-mission">
            <div className="vm-icon"><Target size={32} /></div>
            <h3>Our Mission</h3>
            <p>
              To connect India's manufacturing excellence with global market opportunities by supplying
              quality-assured terry towels and hospitality textile products that meet the evolving needs of
              international importers, wholesalers, hotels, resorts and distributors.
            </p>
          </article>
        </div>

        <div className="company-block">
          <div className="company-block-heading">
            <span className="company-block-icon"><Globe size={26} /></span>
            <h3>Our Goals</h3>
          </div>
          <div className="company-grid">
            {goals.map((goal, index) => (
              <div key={index} className="company-card">
                <div className="company-card-icon">{goal.icon}</div>
                <h4>{goal.title}</h4>
                <p>{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="company-block">
          <div className="company-block-heading">
            <span className="company-block-icon"><HeartHandshake size={26} /></span>
            <h3>Our Core Values</h3>
          </div>
          <div className="company-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="company-card">
                <div className="company-card-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
