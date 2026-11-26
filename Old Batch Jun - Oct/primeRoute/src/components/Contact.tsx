import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Globe } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: 'Spices (Turmeric, Fennel, etc.)',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen pt-20 lg:pt-28 bg-zinc-50 flex flex-col">
      <section className="relative w-full flex-grow flex items-center justify-center overflow-hidden py-16 lg:py-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2560&q=80" 
            alt="Premium Global Trade Business" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/85 backdrop-blur-md" />
        </div>

        <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 bg-white/10 backdrop-blur-3xl p-8 sm:p-12 rounded-[2.5rem] border border-white/20 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-gold" />
                <span className="font-sans text-gold font-bold tracking-[0.25em] uppercase text-xs">Direct Connectivity</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-6xl text-white leading-[1.1] tracking-tight mb-6 font-bold">
                Let's build <br />
                <span className="text-gold italic font-light">global connections.</span>
              </h1>
              
              <p className="font-sans text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-10">
                Whether sourcing export-grade agricultural commodities or seeking logistics solutions, our trade team is ready to respond promptly.
              </p>

              <div className="space-y-8">
                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4 sm:gap-6 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0 text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <div className="font-sans mb-1 flex items-center gap-2">
                      <span className="text-xs uppercase tracking-widest text-zinc-400">Call /</span>
                      <span className="text-[#25D366] font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                      </span>
                    </div>
                    <a href="tel:+917775011166" className="font-serif text-2xl sm:text-3xl text-white hover:text-gold transition-colors font-bold block">
                      +91 77750 11166
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 sm:gap-6 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0 text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="pt-1 min-w-0">
                    <p className="font-sans text-xs tracking-widest uppercase text-zinc-400 mb-1">Official Email</p>
                    <a 
                      href="mailto:info@primerouteagencies.com" 
                      className="font-sans text-base sm:text-xl font-medium text-white hover:text-gold transition-colors block truncate"
                    >
                      info@primerouteagencies.com
                    </a>
                  </div>
                </div>
                
                {/* Offices */}
                <div className="flex items-start gap-4 sm:gap-6 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0 text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <p className="font-sans text-xs tracking-widest uppercase text-zinc-400 mb-2">Registered Offices</p>
                    <div className="font-sans text-xs sm:text-sm font-light text-zinc-200 leading-relaxed space-y-3">
                      <p><strong className="text-gold font-bold">Office 1:</strong> 02, Sai Aadesh Apartment, Chehedi pumping, Nashik road, Nashik, Maharashtra, India</p>
                      <p><strong className="text-gold font-bold">Office 2:</strong> 908, Tower 11, Phase 1, Runwal Garden City, Dombivali East, Mumbai Suburb, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Direct Trade Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 bg-white p-8 sm:p-12 rounded-[2.5rem] border border-zinc-200 shadow-2xl relative"
            >
              <div className="mb-8">
                <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">Quick Trade Form</span>
                <h2 className="font-serif text-3xl font-bold text-navy">Send an Export Inquiry</h2>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy mb-2">Inquiry Received!</h3>
                  <p className="text-zinc-600 text-sm max-w-sm mb-6">
                    Thank you for reaching out. Our commodity export representative will get back to you within 12 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 bg-navy text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gold hover:text-navy transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Your Full Name *</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Alexander Wright"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-sm text-navy focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Email Address *</label>
                      <input 
                        type="email"
                        required
                        placeholder="alexander@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-sm text-navy focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                      <input 
                        type="tel"
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-sm text-navy focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Commodity Category</label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-sm text-navy focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="Spices (Turmeric, Fennel, etc.)">Spices (Turmeric, Fennel, etc.)</option>
                      <option value="Dry Fruits (Makhana)">Dry Fruits (Makhana)</option>
                      <option value="Fresh Produce (Pineapple, Onion, Jaggery)">Fresh Produce (Pineapple, Onion, Jaggery)</option>
                      <option value="Travel & Logistics (dmt vacations)">Travel & Logistics (dmt vacations)</option>
                      <option value="General Commercial Trade">General Commercial Trade</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Message / Requirement Details *</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Please specify your required quantity, target destination port, and packaging specifications..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-sm text-navy focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-navy hover:bg-gold text-white hover:text-navy text-xs font-bold uppercase tracking-wider rounded-2xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Submit Export Requirement</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
}

