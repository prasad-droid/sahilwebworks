import { useEffect, useRef } from 'react';
import products from '../data/products';
import PackagingProducts from './PackagingProducts';
import AgricultureProducts from './AgricultureProducts';
import '../styles/products.css';

export default function Products() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current ? sectionRef.current.querySelectorAll('.fade-up') : [];
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const packagingProducts = products.filter(p => p.category === 'Corrugated Packaging');
  const agriProducts = products.filter(p => p.category === 'Agriculture & Food');

  return (
    <section className="products section" id="products" ref={sectionRef}>
      <div className="container">
        <div className="products-header fade-up">
          <span className="section-label">Products</span>
          <h2 className="section-heading">Our Product Range</h2>
          <p className="section-subheading">
            Sourcing quality products from India for international and domestic B2B buyers.
          </p>
        </div>

        <div className="fade-up fade-up-delay-1">
          <PackagingProducts products={packagingProducts} />
        </div>

        <div className="fade-up fade-up-delay-2">
          <AgricultureProducts products={agriProducts} />
        </div>
      </div>
    </section>
  );
}