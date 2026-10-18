import ProductCard from './ProductCard';
import '../styles/products.css';
import '../styles/agriculture.css';

export default function AgricultureProducts({ products }) {
  return (
    <div className="product-category agri-category">
      <div className="category-header">
        <div className="category-info">
          <h3 className="category-title">Agri &amp; Food Products</h3>
          <p className="category-description">
            Selected Indian agricultural and food products for international wholesale and distribution buyers.
          </p>
        </div>
      </div>

      <div className="product-grid agri-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}