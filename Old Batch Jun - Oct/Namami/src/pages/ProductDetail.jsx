import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import products from '../data/products';
import company from '../data/company';
import ScrollReveal from '../components/ui/ScrollReveal';
import { useTranslation } from '../hooks/useTranslation';

export default function ProductDetail() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!product) {
    return (
      <main>
        <section className="bg-[#12372A] h-[40vh] flex items-center justify-center text-white">
          <div className="text-center px-6">
            <h1 className="font-[Cormorant_Garamond] text-4xl md:text-5xl font-semibold">
              {t('common.notFound')}
            </h1>
          </div>
        </section>
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-[#202522]/70 text-lg mb-8">
            {t('common.notFoundDesc')}
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#1F4D3A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#12372A] transition-colors"
          >
            {t('common.backToProducts')}
          </Link>
        </section>
      </main>
    );
  }

  const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    `Hello, I am interested in ${product.name}. Please share more details.`
  )}`;

  const formatValue = (val) => (Array.isArray(val) ? val.join(', ') : val);

  const specRows = Object.entries(product.specs).map(([key, value]) => ({
    label: t(`specs.labels.${key}`),
    value: formatValue(value),
  }));

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = () =>
    setLightboxIndex((prev) => (prev === 0 ? product.gallery.length - 1 : prev - 1));

  const nextImage = () =>
    setLightboxIndex((prev) => (prev === product.gallery.length - 1 ? 0 : prev + 1));

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] bg-[#12372A]">
        <img
          src={product.gallery[0]}
          alt={product.name}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="font-[Cormorant_Garamond] text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
              {product.name}
            </h1>
            <p className="text-[#A8C3A0] text-lg max-w-2xl mx-auto">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Gallery */}
          <ScrollReveal>
            <div>
              <div
                className="rounded-2xl overflow-hidden shadow-xl cursor-pointer mb-4"
                onClick={() => openLightbox(0)}
              >
                <img
                  src={product.gallery[0]}
                  alt={`${product.name} main`}
                  className="w-full h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.slice(1).map((img, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden shadow-md cursor-pointer"
                    onClick={() => openLightbox(idx + 1)}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 2}`}
                      className="w-full h-24 lg:h-28 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Specs */}
          <ScrollReveal delay={200}>
            <div>
              <h2 className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-semibold text-[#12372A] mb-4">
                {product.name}
              </h2>
              <p className="text-[#202522]/70 leading-relaxed mb-8">
                {product.shortDescription}
              </p>

              <div className="rounded-xl border border-[#E8DDC8]/50 overflow-hidden mb-8">
                <table className="w-full">
                  <tbody>
                    {specRows.map((row, idx) => (
                      <tr
                        key={row.label}
                        className={idx % 2 === 0 ? 'bg-[#F8F7F2]' : 'bg-white'}
                      >
                        <td className="px-4 py-3 font-medium text-[#202522]/60 w-1/3 text-sm">
                          {row.label}
                        </td>
                        <td className="px-4 py-3 text-sm text-[#202522]">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#1F4D3A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#12372A] transition-colors"
                >
                  {t('specs.cta')}
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#1F4D3A] text-[#1F4D3A] px-8 py-3 rounded-lg font-medium hover:bg-[#1F4D3A] hover:text-white transition-colors"
                >
                  <MessageCircle size={18} />
                  {t('specs.whatsapp')}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors z-10"
            >
              <ChevronLeft size={40} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={product.gallery[lightboxIndex]}
                alt={`${product.name} ${lightboxIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors z-10"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
