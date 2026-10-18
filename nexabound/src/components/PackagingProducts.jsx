import ProductCard from './ProductCard';
import '../styles/products.css';
import '../styles/packaging.css';

export default function PackagingProducts({ products }) {
  return (
    <div className="product-category">
      <div className="category-header">
        <div className="category-info">
          <h3 className="category-title">Corrugated Packaging Solutions</h3>
          <p className="category-description">
            Reliable packaging solutions for businesses requiring practical, customizable and bulk packaging options.
          </p>
        </div>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}