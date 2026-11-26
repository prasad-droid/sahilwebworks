import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.slug}`} className="block group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full">
        <div className="h-72 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div className="p-8">
          <h3 className="font-[Cormorant_Garamond] text-2xl font-semibold text-[#12372A]">
            {product.name}
          </h3>
          <p className="text-[#202522]/70 mt-3 text-sm leading-relaxed">
            {product.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {product.specs?.customizationOptions?.slice(0, 3).map((opt, i) => (
              <span key={i} className="text-xs bg-[#A8C3A0]/20 text-[#1F4D3A] px-3 py-1 rounded-full">
                {opt}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-[#1F4D3A] font-medium group-hover:gap-3 transition-all">
            Explore {product.name} <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}
