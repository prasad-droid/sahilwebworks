import '../styles/products.css';

export default function ProductCard({ product }) {
  const scrollToInquiry = (e) => {
    e.preventDefault();
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  const isPackaging = product.category === 'Corrugated Packaging';
  const ctaLabel = isPackaging ? 'Enquire Now' : 'Request Product Details';

  return (
    <article className={`product-card ${isPackaging ? 'packaging-card' : 'agri-card'}`}>
      <div className="product-card-image">
        <img
          src={product.image}
          alt={`${product.name} - ${isPackaging ? 'corrugated packaging' : 'agri food product'} from Nexabound Global`}
          loading="lazy"
        />
        <span className={`product-card-badge ${isPackaging ? 'packaging-badge' : 'agri-badge'}`}>
          {isPackaging ? 'Packaging' : 'Agri & Food'}
        </span>
      </div>
      <div className="product-card-body">
        <h4 className="product-card-name">{product.name}</h4>
        <p className="product-card-desc">{product.description}</p>
        <p className="product-card-specs">{product.specs}</p>
        <div className="product-card-footer">
          <a href="#inquiry" className="product-card-btn" onClick={scrollToInquiry}>
            {ctaLabel}
          </a>
          {product.customizable && (
            <span className="product-card-customize">
              <span className="product-card-customize-dot"></span>
              Customizable
            </span>
          )}
        </div>
      </div>
    </article>
  );
}