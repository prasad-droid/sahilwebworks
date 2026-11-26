import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, Phone, MessageSquare, ArrowRight, Globe } from 'lucide-react';

interface NavbarProps {
  activeTab: 'home' | 'about' | 'products' | 'contact' | 'affiliations';
  setActiveTab: (tab: 'home' | 'about' | 'products' | 'contact' | 'affiliations') => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabClick = (tab: 'home' | 'about' | 'products' | 'contact' | 'affiliations') => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  const handleQuickInquire = () => {
    setActiveTab('products');
    setTimeout(() => {
      document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 inset-x-0 z-50 flex flex-col"
    >
      {/* Top Bar for Professional Global Trade Identity */}
      <div className="bg-navy text-zinc-300 py-1.5 px-6 border-b border-white/10 hidden lg:block text-xs font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-gold" />
              <span>Global Agricultural Commodity Exporters</span>
            </div>
            <div className="h-3 w-[1px] bg-white/20" />
            <a href="mailto:info@primerouteagencies.com" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span>info@primerouteagencies.com</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+917775011166" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>+91 77750 11166</span>
            </a>
            <div className="h-3 w-[1px] bg-white/20" />
            <a 
              href="https://api.whatsapp.com/message/XRYAYKJOSZOMG1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:brightness-125 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white/90 backdrop-blur-2xl border-b border-zinc-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          {/* Logo area */}
          <div 
            className="flex items-center gap-3 sm:gap-4 cursor-pointer group"
            onClick={() => handleTabClick('home')}
          >
            {/* Logo Image */}
            <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center shrink-0">
              <img 
                src="./logo.png" 
                alt="Prime Route Agencies Logo" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 rounded-full border-2 border-gold flex items-center justify-center overflow-hidden bg-white">
                <span className="font-serif font-bold text-xl md:text-2xl text-navy">PR</span>
              </div>
            </div>
            
            <div className="flex flex-col border-l-2 border-zinc-200 pl-3 md:pl-4">
              <span className="font-serif font-bold tracking-[0.05em] text-navy text-xl sm:text-2xl md:text-3xl leading-none mb-1 group-hover:text-gold transition-colors duration-300">
                PRIME <span className="text-gold group-hover:text-navy transition-colors duration-300">ROUTE</span>
              </span>
              <div className="flex items-center w-full">
                <div className="flex-grow h-[1px] bg-zinc-200 group-hover:bg-gold/50 transition-colors" />
                <span className="font-sans text-[8px] md:text-[9px] tracking-[0.35em] text-navy/70 font-semibold px-2 uppercase">
                  Agencies
                </span>
                <div className="flex-grow h-[1px] bg-zinc-200 group-hover:bg-gold/50 transition-colors" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            <button
              onClick={() => handleTabClick('home')}
              className={`font-sans tracking-wide text-sm font-medium transition-colors duration-300 relative py-1 ${
                activeTab === 'home' ? 'text-navy font-semibold' : 'text-zinc-600 hover:text-navy'
              }`}
            >
              Home
              {activeTab === 'home' && (
                <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
              )}
            </button>
            <button
              onClick={() => handleTabClick('about')}
              className={`font-sans tracking-wide text-sm font-medium transition-colors duration-300 relative py-1 ${
                activeTab === 'about' ? 'text-navy font-semibold' : 'text-zinc-600 hover:text-navy'
              }`}
            >
              About Us
              {activeTab === 'about' && (
                <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
              )}
            </button>
            <button
              onClick={() => handleTabClick('products')}
              className={`font-sans tracking-wide text-sm font-medium transition-colors duration-300 relative py-1 ${
                activeTab === 'products' ? 'text-navy font-semibold' : 'text-zinc-600 hover:text-navy'
              }`}
            >
              Products
              {activeTab === 'products' && (
                <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
              )}
            </button>
            <button
              onClick={() => handleTabClick('affiliations')}
              className={`font-sans tracking-wide text-sm font-medium transition-colors duration-300 relative py-1 ${
                activeTab === 'affiliations' ? 'text-navy font-semibold' : 'text-zinc-600 hover:text-navy'
              }`}
            >
              Affiliations
              {activeTab === 'affiliations' && (
                <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
              )}
            </button>
            <button
              onClick={() => handleTabClick('contact')}
              className={`font-sans tracking-wide text-sm font-medium transition-colors duration-300 relative py-1 ${
                activeTab === 'contact' ? 'text-navy font-semibold' : 'text-zinc-600 hover:text-navy'
              }`}
            >
              Contact Us
              {activeTab === 'contact' && (
                <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
              )}
            </button>

            {/* Quick Quote CTA */}
            <button
              onClick={handleQuickInquire}
              className="ml-2 px-5 py-2.5 rounded-full bg-navy hover:bg-gold text-white hover:text-navy text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1.5"
            >
              <span>Get Quotation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t border-zinc-200 overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-6 flex flex-col gap-3">
                <button
                  onClick={() => handleTabClick('home')}
                  className={`text-left font-sans tracking-wide text-base font-semibold py-2.5 border-b border-zinc-100 ${
                    activeTab === 'home' ? 'text-gold' : 'text-navy'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleTabClick('about')}
                  className={`text-left font-sans tracking-wide text-base font-semibold py-2.5 border-b border-zinc-100 ${
                    activeTab === 'about' ? 'text-gold' : 'text-navy'
                  }`}
                >
                  About Us
                </button>
                <button
                  onClick={() => handleTabClick('products')}
                  className={`text-left font-sans tracking-wide text-base font-semibold py-2.5 border-b border-zinc-100 ${
                    activeTab === 'products' ? 'text-gold' : 'text-navy'
                  }`}
                >
                  Products
                </button>
                <button
                  onClick={() => handleTabClick('affiliations')}
                  className={`text-left font-sans tracking-wide text-base font-semibold py-2.5 border-b border-zinc-100 ${
                    activeTab === 'affiliations' ? 'text-gold' : 'text-navy'
                  }`}
                >
                  Affiliations
                </button>
                <button
                  onClick={() => handleTabClick('contact')}
                  className={`text-left font-sans tracking-wide text-base font-semibold py-2.5 ${
                    activeTab === 'contact' ? 'text-gold' : 'text-navy'
                  }`}
                >
                  Contact Us
                </button>

                <button
                  onClick={handleQuickInquire}
                  className="mt-3 w-full py-3.5 bg-navy text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md flex items-center justify-center gap-2"
                >
                  <span>Request Product Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

