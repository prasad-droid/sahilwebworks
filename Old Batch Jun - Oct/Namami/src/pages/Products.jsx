import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import products from '../data/products';
import ScrollReveal from '../components/ui/ScrollReveal';
import { useTranslation } from '../hooks/useTranslation';

const categories = ['textile', 'dehydrated'];

const specLabelMap = {
  material: 'material',
  gsm: 'gsm',
  source: 'source',
  moq: 'moq',
  moisture: 'moisture',
};

export default function Products() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const visibleCategories = activeCategory === 'all' ? categories : [activeCategory];

  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-[#12372A] h-[40vh] flex items-center justify-center text-white">
        <div className="text-center px-6">
          <h1 className="font-[Cormorant_Garamond] text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            {t('productsPage.heroTitle')}
          </h1>
          <p className="text-[#A8C3A0] text-lg md:text-xl tracking-wide">
            {t('productsPage.heroSub')}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-[#1F4D3A] text-white'
                : 'bg-white text-[#202522] border border-[#E8DDC8] hover:border-[#1F4D3A] hover:text-[#1F4D3A]'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#1F4D3A] text-white'
                  : 'bg-white text-[#202522] border border-[#E8DDC8] hover:border-[#1F4D3A] hover:text-[#1F4D3A]'
              }`}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </div>
      </section>

      {/* Products Listing */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {visibleCategories.map((cat) => {
          const list = products.filter((p) => p.category === cat);

          return (
            <div key={cat} className="mb-20 last:mb-0">
              <div className="border-t-2 border-[#E8DDC8]/40 pt-8 mb-12">
                <div className="flex items-center gap-4">
                  <h2 className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-semibold text-[#12372A]">
                    {t(`categories.${cat}`)}
                  </h2>
                  <span className="text-sm font-medium text-[#A8C3A0] bg-[#A8C3A0]/20 px-3 py-1 rounded-full">
                    {list.length}
                  </span>
                </div>
              </div>

              {list.map((product, index) => {
                const isEven = index % 2 === 0;
                const keyFeatures = (product.specs.usage || []).slice(0, 4);

                const keySpecs = Object.entries(specLabelMap)
                  .map(([key]) => (product.specs[key] ? { label: t(`specs.labels.${specLabelMap[key]}`), value: product.specs[key] } : null))
                  .filter(Boolean)
                  .slice(0, 3);

                const imageSide = (
                  <ScrollReveal>
                    <div className="rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </ScrollReveal>
                );

                const textSide = (
                  <ScrollReveal delay={200}>
                    <div>
                      <span className="inline-block uppercase tracking-[0.25em] text-xs font-semibold mb-3 text-[#A8C3A0]">
                        {product.slug.replace(/-/g, ' ')}
                      </span>
                      <h3 className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-semibold text-[#12372A] mb-4">
                        {product.name}
                      </h3>
                      <p className="text-[#202522]/70 leading-relaxed mb-6">
                        {product.description.split('\n\n')[0]}
                      </p>

                      {keyFeatures.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {keyFeatures.map((feature) => (
                            <div key={feature} className="flex items-start gap-2">
                              <Check size={16} className="text-[#1F4D3A] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-[#202522]/70">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="bg-[#F8F7F2] rounded-xl p-4 mb-6 border border-[#E8DDC8]/30">
                        <table className="w-full text-sm">
                          <tbody>
                            {keySpecs.map((spec) => (
                              <tr key={spec.label} className="border-b border-[#E8DDC8]/20 last:border-0">
                                <td className="py-1.5 font-medium text-[#202522]/60 pr-4">{spec.label}</td>
                                <td className="py-1.5 text-[#202522]">{spec.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to={`/products/${product.slug}`}
                          className="inline-flex items-center justify-center gap-2 bg-[#1F4D3A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#12372A] transition-colors"
                        >
                          {t('productsPage.viewDetails')}
                          <ArrowRight size={16} />
                        </Link>
                        <Link
                          to="/quote"
                          className="inline-flex items-center justify-center gap-2 border border-[#1F4D3A] text-[#1F4D3A] px-6 py-3 rounded-lg font-medium hover:bg-[#1F4D3A] hover:text-white transition-colors"
                        >
                          {t('productsPage.requestQuote')}
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                );

                return (
                  <div
                    key={product.id}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                  >
                    {isEven ? (
                      <>
                        {imageSide}
                        {textSide}
                      </>
                    ) : (
                      <>
                        {textSide}
                        {imageSide}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>
    </main>
  );
}