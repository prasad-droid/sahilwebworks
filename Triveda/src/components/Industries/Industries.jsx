import {
  FaHotel,
  FaUmbrellaBeach,
  FaBuilding,
  FaHospitalAlt,
  FaClinicMedical,
  FaShoppingBag,
  FaStore,
  FaGlobe,
  FaWarehouse,
} from 'react-icons/fa'
import Reveal from '../Reveal'
import './Industries.css'

const INDUSTRIES = [
  { icon: <FaHotel />, name: 'Hotels', desc: 'Bathroom and guest-room linen programs' },
  { icon: <FaUmbrellaBeach />, name: 'Resorts', desc: 'Pool, spa, and leisure towel supplies' },
  { icon: <FaBuilding />, name: 'Hospitality Chains', desc: 'Multi-property standardized sourcing' },
  { icon: <FaHospitalAlt />, name: 'Hospitals', desc: 'Hygienic, high-absorbency patient linen' },
  { icon: <FaClinicMedical />, name: 'Healthcare Institutions', desc: 'Compliant textiles for care facilities' },
  { icon: <FaShoppingBag />, name: 'Retail Brands', desc: 'Private label towel collections' },
  { icon: <FaStore />, name: 'Supermarkets', desc: 'Consumer towel ranges in bulk volume' },
  { icon: <FaGlobe />, name: 'Importers', desc: 'Dependable India-to-world sourcing' },
  { icon: <FaWarehouse />, name: 'Wholesale Distributors', desc: 'Large-volume supply with consistency' },
]

const Industries = () => (
  <section id="industries" className="section industries">
    <div className="container">
      <Reveal className="section-head">
        <span className="eyebrow">Industries We Serve</span>
        <h2 className="section-title">
          Trusted by Businesses <span>Across the World</span>
        </h2>
        <p className="section-sub">
          Serving hotels, hospitals, distributors, and retail brands in the UAE, Saudi Arabia, Qatar, Oman, Kuwait,
          Australia, Singapore, the UK, the US, Canada, Europe, and Africa.
        </p>
      </Reveal>

      <div className="industries-grid">
        {INDUSTRIES.map((ind, i) => (
          <Reveal key={ind.name} delay={(i % 3) * 90}>
            <div className="card industry-card">
              <span className="industry-icon">{ind.icon}</span>
              <h3>{ind.name}</h3>
              <p>{ind.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Industries
