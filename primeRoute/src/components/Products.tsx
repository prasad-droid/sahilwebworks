import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Search, Filter, Sparkles, CheckCircle2, ArrowUpRight, X, Shield, Award, PackageCheck } from 'lucide-react';
import ProductInquiryForm from './ProductInquiryForm';

export interface ProductItem {
  name: string;
  image: string;
  category: string;
  specs?: string[];
  description?: string;
  badge?: string;
}

const categories = [
  {
    id: 'spices',
    name: 'Spices',
    description: 'Aromatic, rich, and high-purity Indian spices sourced directly from premier farming belts.',
    image: './spices.webp',
    products: [
      { 
        name: 'Turmeric', 
        image: './turmeric2.jpg',
        category: 'Spices',
        badge: 'High Curcumin',
        description: 'Vibrant golden turmeric with high natural curcumin content, processed under strict hygiene for global food and pharma industries.',
        specs: ['Purity: 99%+', 'Curcumin: High Content', 'Export Standard Packaging', 'Origin: India']
      },
      { 
        name: 'Black Pepper', 
        image: './black-pepper.webp',
        category: 'Spices',
        badge: 'King of Spices',
        description: 'Bold, pungent, and highly aromatic black peppercorns harvested at peak maturity and machine cleaned.',
        specs: ['Grade: Tellicherry/Garbled', 'Moisture: <12%', 'Density: 500-550 g/l', 'Origin: India']
      },
      { 
        name: 'Cloves', 
        image: './cloves.webp',
        category: 'Spices',
        badge: 'Hand-Picked',
        description: 'Sun-dried, whole spice cloves rich in essential oils and dark reddish-brown natural luster.',
        specs: ['Head Count: Whole Cloves', 'Essential Oil: >15%', 'Stem-free: Yes', 'Origin: India']
      },
      { 
        name: 'Dehydrated Red Onion Flakes', 
        image: './dehydrated-red-onion-flakes.png',
        category: 'Spices',
        badge: 'Premium Grade',
        description: 'Cryogenically dehydrated red onion flakes retaining authentic pungent flavor, crispness, and aroma.',
        specs: ['Size: 8-15mm Flakes', 'Moisture: <6%', 'Non-GMO', 'Origin: India']
      },
      { 
        name: 'Dehydrated White Onion Flakes', 
        image: './dehydrated-white-onion-flakes.webp',
        category: 'Spices',
        badge: 'Export Quality',
        description: 'Pure white dehydrated onion flakes widely used in instant soups, ready meals, and gourmet seasoning.',
        specs: ['Color: Creamy White', 'Moisture: <6%', 'Zero Additives', 'Origin: India']
      },
      { 
        name: 'Dried Garlic Flakes', 
        image: './dried-garlic-flakes.jpg',
        category: 'Spices',
        badge: 'Aromatic',
        description: 'Crisp, aromatic dried garlic flakes prepared from selected cloves for maximum flavor shelf-life.',
        specs: ['Size: Flakes / Slices', 'Moisture: <6%', 'Shelf Life: 24 Months', 'Origin: India']
      },
      { 
        name: 'Fennel Seed', 
        image: './fennel-seed.png',
        category: 'Spices',
        badge: 'Sweet & Aromatic',
        description: 'Greenish oval fennel seeds packed with sweet anise-like flavor, ideal for culinary and medicinal uses.',
        specs: ['Purity: 99%', 'Color: Natural Green/Light Brown', 'Volatile Oil: High', 'Origin: India']
      },
      { 
        name: 'Red Chilly Powder', 
        image: './red-chilly-powder.jpg',
        category: 'Spices',
        badge: 'Vibrant Color',
        description: 'Finely ground red chilly powder with uniform heat units (SHU) and vivid natural ASTA color value.',
        specs: ['Purity: 100% Pure', 'ASTA Color: 80-120', 'Pesticide Compliant', 'Origin: India']
      },
    ]
  },
  {
    id: 'dry-fruits',
    name: 'Dry Fruits & Superfoods',
    description: 'Nutritious, high-grade superfoods and dry fruits processed for international markets.',
    image: './dry-fruits.webp',
    products: [
      { 
        name: 'Makhana (Fox Nuts)', 
        image: './makhana.jpg',
        category: 'Dry Fruits',
        badge: 'Export Grade 5+/6+ Star',
        description: 'Puffed fox nuts (lotus seeds) known for their crisp texture, protein density, and mineral richness.',
        specs: ['Size: 5+ / 6+ Star (16mm+)', 'Grade: Hand-Sorted White', 'Moisture: <8%', 'Origin: India']
      },
    ]
  },
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    description: 'Naturally ripened, farm-fresh Indian fruits handled with cold-chain care.',
    image: './fruits.webp',
    products: [
      { 
        name: 'Pineapple', 
        image: './pineapple.jpg',
        category: 'Fresh Fruits',
        badge: 'Farm Fresh',
        description: 'Succulent, sweet Indian pineapples selected for optimal Brix levels and global shipping durability.',
        specs: ['Variety: Giant Kew / Queen', 'Brix Level: High Sweetness', 'Packaging: Ventilated Crates', 'Origin: India']
      },
    ]
  }
];

export default function Products() {
  const headerRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const headerOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0]);

  // Handle opening modal and pre-filling inquiry form if needed
  const handleInquireClick = (productName: string) => {
    setSelectedProduct(null);
    const inquirySection = document.getElementById('inquiry-form');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
      // Set message text in textarea
      setTimeout(() => {
        const messageInput = document.getElementById('message') as HTMLTextAreaElement;
        if (messageInput) {
          messageInput.value = `Hello, I am interested in placing an order/quotation request for "${productName}". Please share price, specifications, and minimum order quantity (MOQ).`;
          messageInput.focus();
        }
      }, 300);
    }
  };

  // Filter products by search and category
  const allProductsList: ProductItem[] = categories.flatMap(cat => cat.products);
  
  const filteredProducts = allProductsList.filter(prod => {
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (prod.description && prod.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCat = selectedCategory === 'all' || 
                       (selectedCategory === 'spices' && prod.category === 'Spices') ||
                       (selectedCategory === 'dry-fruits' && prod.category === 'Dry Fruits') ||
                       (selectedCategory === 'fruits' && prod.category === 'Fresh Fruits');
    return matchesSearch && matchesCat;
  });

  return (
    <div className="pt-24 min-h-screen bg-zinc-50/50 relative pb-20">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[-10%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-navy/5 rounded-full blur-[140px]" />
      </div>

      {/* Hero Header Section */}
      <section ref={headerRef} className="bg-navy text-white py-24 relative overflow-hidden">
        <motion.div 
          style={{ y: headerY, opacity: headerOpacity }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Export Quality Commodities</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-serif font-bold tracking-tight mb-6"
          >
            OUR EXPORT <span className="text-gold italic font-light">CATALOGUE</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto font-sans font-light leading-relaxed"
          >
            Discover our premium range of carefully harvested spices, dry fruits, and fresh produce — processed under stringent quality benchmarks for discerning international buyers.
          </motion.p>

          {/* Quick Certifications Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-zinc-300 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold" />
              <span>100% Quality Inspection</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-gold" />
              <span>APEDA & Spices Board Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <PackageCheck className="w-4 h-4 text-gold" />
              <span>Custom Export Packaging</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Bar Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white/80 backdrop-blur-2xl p-4 sm:p-6 rounded-2xl md:rounded-3xl border border-white/60 shadow-[0_20px_50px_-10px_rgba(11,27,54,0.08)] flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-navy text-white shadow-md'
                  : 'bg-zinc-100/80 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedCategory('spices')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                selectedCategory === 'spices'
                  ? 'bg-navy text-white shadow-md'
                  : 'bg-zinc-100/80 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              Spices
            </button>
            <button
              onClick={() => setSelectedCategory('dry-fruits')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                selectedCategory === 'dry-fruits'
                  ? 'bg-navy text-white shadow-md'
                  : 'bg-zinc-100/80 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              Dry Fruits
            </button>
            <button
              onClick={() => setSelectedCategory('fruits')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                selectedCategory === 'fruits'
                  ? 'bg-navy text-white shadow-md'
                  : 'bg-zinc-100/80 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              Fresh Fruits
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-zinc-100/80 border border-zinc-200/80 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none text-sm text-navy placeholder:text-zinc-400 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-navy text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Categories & Products Display */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-20">
        {selectedCategory === 'all' && !searchQuery ? (
          // Standard Category View
          categories.map((category) => (
            <motion.div 
              key={category.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col bg-white/40 backdrop-blur-3xl p-6 sm:p-10 md:p-12 rounded-[2.5rem] border border-white/60 shadow-[0_30px_60px_-15px_rgba(11,27,54,0.08)] ring-1 ring-inset ring-white/60 relative"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-10 text-center sm:text-left">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-gold/60 shadow-lg bg-zinc-100">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center py-1">
                  <span className="font-sans text-xs tracking-widest text-gold uppercase font-bold mb-1">Export Category</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-2">
                    {category.name}
                  </h2>
                  <p className="text-zinc-600 font-sans max-w-2xl text-base md:text-lg">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product, pIndex) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pIndex * 0.05 }}
                    onClick={() => setSelectedProduct(product)}
                    className="group cursor-pointer rounded-2xl overflow-hidden border border-white/50 bg-white/60 hover:bg-white shadow-sm hover:shadow-xl backdrop-blur-2xl ring-1 ring-inset ring-white/50 hover:border-gold/40 transition-all duration-300 flex flex-col relative"
                  >
                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 z-10 px-3 py-1 bg-navy/80 backdrop-blur-md text-gold text-[10px] font-bold tracking-wider uppercase rounded-full border border-gold/30">
                        {product.badge}
                      </span>
                    )}

                    <div className="aspect-square relative overflow-hidden bg-zinc-50 p-2 flex flex-col items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 will-change-transform"
                        onError={(e) => {
                          e.currentTarget.src = './spices.webp';
                        }}
                      />
                      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="bg-white text-navy px-4 py-2 rounded-full font-bold text-xs shadow-lg flex items-center gap-1.5">
                          View Details <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-grow flex flex-col justify-between text-center bg-white">
                      <h3 className="font-serif text-lg font-bold text-navy group-hover:text-gold transition-colors duration-300 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-zinc-500 font-sans line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))
        ) : (
          // Filtered Products View
          <div className="bg-white/40 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/60 shadow-[0_30px_60px_-15px_rgba(11,27,54,0.08)]">
            <h3 className="text-xl font-serif font-bold text-navy mb-6">
              Found {filteredProducts.length} product{filteredProducts.length === 1 ? '' : 's'}
            </h3>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-zinc-500 font-sans text-lg">No products matched your query "{searchQuery}".</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="mt-4 px-6 py-2 bg-navy text-white text-sm rounded-full"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.name}
                    onClick={() => setSelectedProduct(product)}
                    className="group cursor-pointer rounded-2xl overflow-hidden border border-white/50 bg-white/60 hover:bg-white shadow-sm hover:shadow-xl backdrop-blur-2xl ring-1 ring-inset ring-white/50 hover:border-gold/40 transition-all duration-300 flex flex-col relative"
                  >
                    {product.badge && (
                      <span className="absolute top-3 left-3 z-10 px-3 py-1 bg-navy/80 backdrop-blur-md text-gold text-[10px] font-bold tracking-wider uppercase rounded-full border border-gold/30">
                        {product.badge}
                      </span>
                    )}

                    <div className="aspect-square relative overflow-hidden bg-zinc-50 p-2">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-5 flex-grow flex flex-col justify-between text-center bg-white">
                      <h3 className="font-serif text-lg font-bold text-navy group-hover:text-gold transition-colors duration-300 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-zinc-500 font-sans line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Product Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-navy/70 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 my-8"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto bg-zinc-100">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover"
                  />
                  {selectedProduct.badge && (
                    <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-gold text-navy text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                      {selectedProduct.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-xs uppercase font-bold text-gold tracking-widest block mb-1">
                      {selectedProduct.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-navy font-bold mb-4">
                      {selectedProduct.name}
                    </h3>

                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                      {selectedProduct.description}
                    </p>

                    {selectedProduct.specs && (
                      <div className="mb-8">
                        <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-3">Key Export Specifications</h4>
                        <ul className="space-y-2">
                          {selectedProduct.specs.map((spec, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700">
                              <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleInquireClick(selectedProduct.name)}
                    className="w-full py-4 bg-navy hover:bg-gold text-white hover:text-navy font-bold text-sm tracking-wide rounded-2xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <span>Inquire About {selectedProduct.name}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Product Inquiry Form */}
      <ProductInquiryForm />
    </div>
  );
}

