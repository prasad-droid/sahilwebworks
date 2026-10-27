import '../styles/products.css';

const Products = () => {
  const handleEnquire = (product) => {
    const element = document.querySelector('#inquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Preselect product in form after scroll
      setTimeout(() => {
        const productSelect = document.querySelector('#productInterest');
        if (productSelect) {
          productSelect.value = 'Terry Towels';
        }
      }, 500);
    }
  };

  const products = [
    {
      name: 'Bath Towel',
      image: '/src/assets/Bath Towel.jpeg',
      fallback: '/src/assets/Bath Towels in different colors.jpeg'
    },
    {
      name: 'Bath Sheet',
      image: '/src/assets/Bath Sheet.jpeg',
      fallback: '/src/assets/Bath Towel.jpeg'
    },
    {
      name: 'Bath Mat',
      image: '/src/assets/Bath mat.jpeg',
      fallback: '/src/assets/Bath Towel.jpeg'
    },
    {
      name: 'Face Towel',
      image: '/src/assets/Face Towel.jpeg',
      fallback: '/src/assets/Hand Towels.jpeg'
    },
    {
      name: 'Hand Towel',
      image: '/src/assets/Hand Towels.jpeg',
      fallback: '/src/assets/Face Towel.jpeg'
    },
    {
      name: 'Kitchen Towel',
      image: '/src/assets/Bath Towels in different colors 2.jpeg',
      fallback: '/src/assets/Bath Towel.jpeg'
    }
  ];

  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="section-header">
          <h2>Our Export Products</h2>
          <p>Premium 100% Cotton Terry Towels - Customizable in GSM range 350-700</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={`${product.name} - Premium 100% Cotton Terry Towel`} 
                  className="product-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = product.fallback;
                  }}
                />
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <p className="product-description">
                  Premium 100% cotton terry towel, fully customizable as per your requirements. 
                  Available in GSM range 350-700.
                </p>
                <div className="product-details">
                  <h4>Specifications:</h4>
                  <ul>
                    <li>Material: 100% Cotton</li>
                    <li>GSM: 350-700 GSM (as per requirement)</li>
                    <li>Fully customizable</li>
                  </ul>
                </div>
                <button 
                  className="product-btn" 
                  onClick={() => handleEnquire(product.name)}
                >
                  Enquire About {product.name}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem', padding: '2rem', backgroundColor: 'var(--soft-ivory)', borderRadius: '12px' }}>
          <h3 style={{ marginBottom: '0.75rem', color: 'var(--deep-navy)' }}>All Products - Customization Available</h3>
          <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
            Material: 100% Cotton | GSM: 350-700 GSM (as per requirement) | Fully customizable products
          </p>
          <button 
            className="btn btn-primary" 
            onClick={() => handleEnquire('Terry Towels')}
          >
            Request Quote for All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
