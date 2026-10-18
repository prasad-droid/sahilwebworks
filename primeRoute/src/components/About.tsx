import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck, Plane, Award, MapPin, CheckCircle, Sparkles } from 'lucide-react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgLeftY = useTransform(scrollYProgress, [0, 1], [30, -60]);
  const imgTopRightY = useTransform(scrollYProgress, [0, 1], [-30, 60]);
  const imgBottomRightY = useTransform(scrollYProgress, [0, 1], [60, -30]);

  return (
    <div className="w-full min-h-screen pt-20 lg:pt-28 bg-zinc-50 relative" ref={containerRef}>
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-navy/10 rounded-full blur-[140px]" />
      </div>

      {/* Page Header */}
      <div className="w-full bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80" 
              alt="Spices context" 
              className="w-full h-full object-cover mix-blend-overlay"
           />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Export Legacy & Excellence</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl text-white mb-4 tracking-tight font-bold"
          >
            About Prime Route
          </motion.h1>

          <p className="font-sans text-zinc-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering India's finest agricultural commodities to international markets with uncompromising quality and trust.
          </p>

          <div className="w-24 h-[2px] bg-gold mx-auto opacity-80 mt-6" />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Content Column */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-zinc-200/80 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none" />
            <p className="font-serif text-2xl sm:text-3xl text-navy leading-snug">
              At <strong className="text-3xl sm:text-5xl block my-3 text-navy tracking-tight font-bold">Prime Route Agencies,</strong> we are dedicated to forging enduring global trade relationships anchored in trust, uncompromised quality, and steadfast reliability.
            </p>
          </div>
          
          <div className="space-y-6 font-sans text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-gold first-letter:font-bold first-letter:mr-3 first-letter:float-left">
              Strategically operating from the agricultural heartland of India and the vital logistical hubs of the Mumbai suburbs, we seamlessly bridge the gap between India’s finest producers and the global market.
            </p>
            
            <p>
              We specialize in the export of premium, carefully sourced agricultural and food commodities, including high-grade <span className="text-navy font-semibold italic">Fennel Seeds</span>, the finest <span className="text-navy font-semibold italic">Makhana</span>, <span className="text-navy font-semibold italic">Dehydrated Onion Products</span>, pure <span className="text-navy font-semibold italic">Jaggery Powder</span>, and fresh fruits especially <span className="text-navy font-semibold italic">Pineapples</span>.
            </p>
            
            <p>
              Our prime operational footprint allows us to maintain strict oversight over our entire supply chain. From ensuring rigorous international quality standards and secure, export-grade packaging to guaranteeing competitive pricing and timely worldwide shipments, our customer-centric approach is designed to add measurable value to your business. Guided by unwavering integrity, we do not just deliver products; we cultivate long-term, strategic partnerships with buyers worldwide.
            </p>
          </div>

          {/* dmt vacations Affiliation Card */}
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-br from-navy to-slate-900 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-white p-2 border border-gold/40 flex items-center justify-center shrink-0 shadow-md">
                <img 
                  src="./dmt-logo.jpg" 
                  alt="dmt vacations logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-wider block">Global Travel Services Partner</span>
                <h3 className="font-serif text-2xl font-bold text-white">dmt vacations</h3>
              </div>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              Beyond core export operations, we facilitate seamless travel and logistics in partnership with <strong className="text-white font-semibold">dmt vacations</strong>, an ISO-certified and award-winning travel agency specializing in elite travel solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-200 font-sans">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                <span>Expedited Dubai & Global Visas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                <span>Tailored Corporate & Leisure Itineraries</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                <span>Hotel & Luxury Cruise Bookings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                <span>End-to-End Airport Transfers</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-200">
            <p className="font-serif text-xl sm:text-2xl text-gold italic font-semibold">
              "Delivering Quality. Building Trust. Connecting Markets."
            </p>
          </div>
        </motion.div>

        {/* Images Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-4 lg:gap-6 aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[680px] order-first lg:order-last sticky top-32"
        >
           {/* Image 1: Export Quality Makhana */}
           <motion.div style={{ y: imgLeftY }} className="col-span-1 row-span-2 relative lg:mt-6 group">
             <div className="w-full h-full rounded-3xl bg-white p-3 shadow-xl border border-zinc-200/80">
               <div className="w-full h-full rounded-2xl overflow-hidden relative bg-zinc-100">
                 <img 
                   src="./makhana.jpg" 
                   alt="Export Quality Makhana" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                   <span className="text-white font-serif font-bold text-sm">Export Quality Makhana</span>
                 </div>
               </div>
             </div>
           </motion.div>
           
           {/* Image 2: Spices */}
           <motion.div style={{ y: imgTopRightY }} className="col-span-1 row-span-1 relative group">
             <div className="w-full h-full rounded-3xl bg-white p-3 shadow-xl border border-zinc-200/80">
               <div className="w-full h-full rounded-2xl overflow-hidden relative bg-zinc-100">
                 <img 
                   src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80" 
                   alt="Spices and commodities" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                   <span className="text-white font-serif font-bold text-sm">Aromatic Indian Spices</span>
                 </div>
               </div>
             </div>
           </motion.div>

           {/* Image 3: Premium Pineapples */}
           <motion.div style={{ y: imgBottomRightY }} className="col-span-1 row-span-1 relative group">
             <div className="w-full h-full rounded-3xl bg-white p-3 shadow-xl border border-zinc-200/80">
               <div className="w-full h-full rounded-2xl overflow-hidden relative bg-zinc-100">
                 <img 
                   src="./pineapple.jpg" 
                   alt="Fresh Produce Pineapples" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                   <span className="text-white font-serif font-bold text-sm">Fresh Harvest Fruits</span>
                 </div>
               </div>
             </div>
           </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

