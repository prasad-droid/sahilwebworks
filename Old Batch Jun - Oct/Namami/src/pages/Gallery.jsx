import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import galleryItems from '../data/gallery';
import ScrollReveal from '../components/ui/ScrollReveal';
import { useTranslation } from '../hooks/useTranslation';

export default function Gallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', ...new Set(galleryItems.map((item) => item.category))];

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (item) => setSelectedImage(item);
  const closeLightbox = () => setSelectedImage(null);

  const getPrev = () => {
    if (!selectedImage) return null;
    const idx = filteredItems.findIndex((i) => i.id === selectedImage.id);
    return filteredItems[idx === 0 ? filteredItems.length - 1 : idx - 1];
  };

  const getNext = () => {
    if (!selectedImage) return null;
    const idx = filteredItems.findIndex((i) => i.id === selectedImage.id);
    return filteredItems[idx === filteredItems.length - 1 ? 0 : idx + 1];
  };

  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-[#12372A] h-[40vh] flex items-center justify-center text-white">
        <div className="text-center px-6">
          <h1 className="font-[Cormorant_Garamond] text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            {t('galleryPage.heroTitle')}
          </h1>
          <p className="text-[#A8C3A0] text-lg md:text-xl tracking-wide">
            {t('galleryPage.heroSub')}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Category Filter */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#1F4D3A] text-white'
                    : 'bg-white text-[#202522] border border-[#E8DDC8] hover:border-[#1F4D3A] hover:text-[#1F4D3A]'
                }`}
              >
                {cat === 'All' ? t('galleryPage.all') : cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(item)}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-3">
                    <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
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

            {getPrev() && (
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedImage(getPrev()); }}
                className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors z-10"
              >
                <ChevronLeft size={40} />
              </button>
            )}

            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="text-center mt-3">
                <span className="text-white/70 text-sm">{selectedImage.category}</span>
                <p className="text-white/50 text-xs mt-1">{selectedImage.alt}</p>
              </div>
            </motion.div>

            {getNext() && (
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedImage(getNext()); }}
                className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors z-10"
              >
                <ChevronRight size={40} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <ScrollReveal>
          <div className="bg-[#F8F7F2] rounded-2xl p-12 text-center border border-[#E8DDC8]/30">
            <h2 className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-semibold text-[#12372A] mb-4">
              {t('galleryPage.ctaTitle')}
            </h2>
            <p className="text-[#202522]/70 mb-8 max-w-2xl mx-auto">
              {t('galleryPage.heroSub')}
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#1F4D3A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#12372A] transition-colors"
            >
              {t('galleryPage.cta')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
