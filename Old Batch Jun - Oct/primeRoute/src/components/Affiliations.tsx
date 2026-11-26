import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const affiliations = [
  { 
    name: 'APEDA', 
    fullName: 'Agricultural and Processed Food Products Export Development Authority',
    info: 'APEDA is an Indian apex-export trade promotion active government body. It is responsible for the promotion of export of scheduled products, including fruits, vegetables, meat products, dairy products, and more.',
    src: '/apeda.jpg' 
  },
  { 
    name: 'Spices Board India', 
    fullName: 'Spices Board of India',
    info: 'The Spices Board is the Indian government regulatory and export promotion agency for Indian spices. It acts as a link between Indian exporters and importers abroad and conducts quality control and certification.',
    src: '/spice_board.avif' 
  },
  { 
    name: 'FSSAI', 
    fullName: 'Food Safety and Standards Authority of India',
    info: 'FSSAI is a statutory body established under the Ministry of Health & Family Welfare, Government of India. It is responsible for protecting and promoting public health through the regulation and supervision of food safety.',
    src: '/fssai.png' 
  },
  { 
    name: 'MSME', 
    fullName: 'Ministry of Micro, Small and Medium Enterprises',
    info: 'MSME is a branch of the Government of India, acting as the apex executive body for the formulation and administration of rules, regulations, and laws relating to micro, small and medium enterprises in India.',
    src: '/msme.png' 
  },
  { 
    name: 'dmt vacations', 
    fullName: 'ISO-Certified Global Travel & Logistics Partner',
    info: 'dmt vacations is an ISO-certified, award-winning travel agency specializing in elite travel solutions, expedited Dubai tourist visas, corporate & leisure holiday packages, luxury cruise bookings, and global logistics.',
    src: '/dmt-logo.jpg' 
  },
];

export default function Affiliations() {
  const [selectedAffiliation, setSelectedAffiliation] = useState<typeof affiliations[0] | null>(null);

  return (
    <div className="w-full min-h-screen pt-24 bg-zinc-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-navy/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 md:w-12 bg-gold" />
            <span className="font-sans text-navy font-semibold tracking-[0.2em] uppercase text-xs">Accreditations & Memberships</span>
            <div className="h-[1px] w-8 md:w-12 bg-gold" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-navy leading-[1.1] tracking-tight mb-8"
          >
            A Heritage of <span className="text-gold italic font-light">Excellence.</span><br />
            Recognized by the Best.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-lg md:text-xl text-zinc-500 font-light leading-relaxed"
          >
            Our commitment to unwavering quality and global commerce standards is certified by India's most prestigious trade and agricultural boards.
          </motion.p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {affiliations.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedAffiliation(logo)}
            >
              <div className="absolute inset-0 bg-white rounded-3xl shadow-[0_10px_40px_rgba(8,112,184,0.06)] group-hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)] transition-shadow duration-500" />
              
              <div className="relative h-48 md:h-64 rounded-3xl p-8 flex items-center justify-center overflow-hidden border border-zinc-100 group-hover:border-gold/30 transition-colors duration-500 bg-white">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedAffiliation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
              onClick={() => setSelectedAffiliation(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className="relative w-full max-w-xl bg-white rounded-3xl p-8 sm:p-10 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <button 
                  onClick={() => setSelectedAffiliation(null)}
                  className="p-2 text-zinc-400 hover:text-navy transition-colors rounded-full hover:bg-zinc-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="h-32 mb-8 flex items-center justify-center">
                <img 
                  src={selectedAffiliation.src} 
                  alt={selectedAffiliation.name} 
                  className="max-h-full w-auto object-contain"
                />
              </div>
              
              <div className="text-center">
                <h3 className="font-serif text-2xl sm:text-3xl text-navy mb-2">
                  {selectedAffiliation.name}
                </h3>
                <p className="font-sans text-sm tracking-wide uppercase text-gold font-semibold mb-6">
                  {selectedAffiliation.fullName}
                </p>
                <div className="w-12 h-[1px] bg-gold/50 mx-auto mb-6" />
                <p className="font-sans text-zinc-600 leading-relaxed text-sm sm:text-base">
                  {selectedAffiliation.info}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
