import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck, ArrowRight, Leaf, Globe2, Sparkles, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

interface HomeProps {
  onLearnMore: () => void;
  onNavigateToProducts: () => void;
}

const featuredProducts = [
  { name: 'Turmeric', category: 'Spices', image: './turmeric2.jpg', tag: 'High Curcumin' },
  { name: 'Makhana (Fox Nuts)', category: 'Dry Fruits', image: './makhana.jpg', tag: '5+ Star Export Grade' },
  { name: 'Fennel Seed', category: 'Spices', image: './fennel-seed.png', tag: 'Aromatic & Pure' },
  { name: 'Pineapple', category: 'Fresh Fruits', image: './pineapple.jpg', tag: 'Hand-Picked Fresh' },
];

export default function Home({ onLearnMore, onNavigateToProducts }: HomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div className="w-full flex flex-col min-h-screen pt-20 lg:pt-28 bg-zinc-50 relative overflow-hidden" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] py-12 lg:py-16 flex items-center justify-center overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <motion.div 
           style={{ scale: scaleHero }}
           className="absolute inset-0"
        >
          <img 
             src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80" 
             alt="Lush agricultural fields at golden hour" 
             className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-navy/30" />
        </motion.div>

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              style={{ y: yHeroText, opacity: opacityHero }}
              className="lg:col-span-8 bg-white/10 backdrop-blur-3xl p-8 sm:p-12 md:p-14 rounded-[2.5rem] border border-white/20 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.7)] ring-1 ring-inset ring-white/20 relative overflow-hidden"
            >
             <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
             
             <div className="relative z-10">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-6"
               >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Export House</span>
             </motion.div>

             <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight mb-6"
             >
               Prime Route <br />
               <span className="text-gold italic font-light tracking-normal">Agencies</span>
             </motion.h1>
             
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-serif text-lg sm:text-2xl text-zinc-100 italic font-light mb-6 leading-relaxed opacity-95"
             >
               "Delivering Quality. Building Trust. Connecting Markets."
             </motion.p>
             
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="font-sans text-sm sm:text-base md:text-lg text-zinc-300 font-light mb-10 max-w-2xl leading-relaxed"
             >
               Bridging India’s finest agricultural producers with international markets. We export premium spices, dry fruits, and fresh produce backed by uncompromised quality standards.
             </motion.p>
             
             <div className="flex flex-col sm:flex-row items-center gap-4">
               <motion.button
                  onClick={onNavigateToProducts}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="group flex items-center justify-center gap-3 bg-gold hover:bg-white text-navy font-bold px-8 py-4 sm:px-9 sm:py-4.5 rounded-full transition-all duration-300 w-full sm:w-fit shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)]"
               >
                 <span className="tracking-wider uppercase text-xs sm:text-sm">Explore Products</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </motion.button>
               
               <motion.button
                  onClick={onLearnMore}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="group flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-4 sm:px-9 sm:py-4.5 rounded-full transition-all duration-300 w-full sm:w-fit backdrop-blur-md"
               >
                 <span className="tracking-wider uppercase text-xs sm:text-sm">About Us</span>
               </motion.button>
             </div>
             </div>
          </motion.div>

          {/* Quick Floating Badge Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-4 hidden lg:flex flex-col gap-5"
          >
            <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-3xl border border-white/20 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-white">Government Recognized</h4>
                  <p className="text-xs text-zinc-300 font-sans">APEDA, Spices Board & FSSAI Compliant</p>
                </div>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                Certified quality management ensuring every shipment meets international residue limits and purity norms.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-3xl border border-white/20 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-white">Global Export Reach</h4>
                  <p className="text-xs text-zinc-300 font-sans">Middle East, Europe, Asia & Beyond</p>
                </div>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                Streamlined logistics and customized export packaging tailored to sea and air freight requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy border-y border-white/10 py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-1">100%</span>
            <span className="font-sans text-xs sm:text-sm text-zinc-300 uppercase tracking-wider font-medium">Export Standard Quality</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1">4+</span>
            <span className="font-sans text-xs sm:text-sm text-zinc-300 uppercase tracking-wider font-medium">Apex Accreditations</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-1">10+</span>
            <span className="font-sans text-xs sm:text-sm text-zinc-300 uppercase tracking-wider font-medium">Premium Commodities</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1">24/7</span>
            <span className="font-sans text-xs sm:text-sm text-zinc-300 uppercase tracking-wider font-medium">Dedicated Client Support</span>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-24 bg-zinc-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-sans text-xs tracking-widest text-gold uppercase font-bold mb-2 block">Featured Exports</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-navy font-bold">Premium Products Range</h2>
            </div>
            <button
              onClick={onNavigateToProducts}
              className="group flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((prod, idx) => (
              <motion.div
                key={prod.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={onNavigateToProducts}
                className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-zinc-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="aspect-square relative overflow-hidden bg-zinc-100">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = './spices.webp';
                    }}
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-navy/80 backdrop-blur-md text-gold text-[10px] font-bold uppercase tracking-wider rounded-full border border-gold/30">
                    {prod.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                      {prod.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-navy group-hover:text-gold transition-colors">
                      {prod.name}
                    </h3>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-navy">
                    <span>Inquire Now</span>
                    <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Highlights */}
      <section className="py-24 bg-white relative border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="font-sans text-xs tracking-widest text-gold uppercase font-bold mb-2 block">Our Pillars</span>
            <h2 className="font-serif text-4xl text-navy font-bold mb-4">Why Global Buyers Trust Prime Route</h2>
            <div className="w-16 h-[2px] bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-gold" />}
              title="Steadfast Reliability"
              description="Unwavering integrity in every trade transaction, ensuring transparent pricing, contract honors, and punctual dispatch schedules."
            />
            <FeatureCard 
              icon={<Leaf className="w-8 h-8 text-gold" />}
              title="Uncompromised Quality"
              description="Carefully selected agricultural commodities tested for purity, moisture content, and international food safety compliance."
            />
            <FeatureCard 
              icon={<Globe2 className="w-8 h-8 text-gold" />}
              title="Seamless Trade Network"
              description="Connecting India's agricultural heartlands to worldwide ports through expert freight handling and customs logistics."
            />
          </div>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="p-10 pb-12 border border-zinc-200/80 rounded-[2.5rem] bg-zinc-50/80 backdrop-blur-2xl hover:bg-white hover:border-gold/40 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.2)] transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" />
      <div className="w-16 h-16 bg-white border border-zinc-200 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-navy group-hover:border-navy transition-all duration-500 shadow-md relative z-10">
        <div className="group-hover:scale-110 group-hover:text-gold transition-transform duration-500">
          {icon}
        </div>
      </div>
      <h3 className="font-serif text-2xl font-bold text-navy mb-4 relative z-10">{title}</h3>
      <p className="font-sans text-zinc-600 leading-relaxed font-light text-base relative z-10">{description}</p>
    </motion.div>
  );
}

