import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-zinc-400 py-16 border-t border-white/10 mt-auto relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 relative flex-shrink-0 bg-white rounded-full p-1 border-2 border-gold shadow-md">
               <img 
                 src="./logo.png" 
                 alt="Prime Route Agencies" 
                 className="w-full h-full object-contain"
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                 }}
               />
            </div>
            <div className="flex flex-col items-start border-l-2 border-white/20 pl-4">
              <span className="font-serif font-bold tracking-[0.05em] text-white text-3xl leading-none mb-1">
                PRIME <span className="text-gold">ROUTE</span>
              </span>
              <div className="flex items-center w-full">
                <div className="flex-grow h-[1px] bg-white/20" />
                <span className="font-sans text-[9px] tracking-[0.35em] text-zinc-300 font-bold px-2 uppercase">
                  Agencies
                </span>
                <div className="flex-grow h-[1px] bg-white/20" />
              </div>
            </div>
          </div>
          
          <p className="font-serif italic text-base text-zinc-300 mt-2">
            "Delivering Quality. Building Trust. Connecting Markets."
          </p>

          <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-sm">
            Government recognized premier exporter of Indian agricultural commodities, spices, dry fruits, and fresh produce. Dedicated to uncompromised quality and global trade integrity.
          </p>
        </div>
        
        {/* Hubs & Office Locations */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <h4 className="font-sans font-bold tracking-widest text-gold uppercase text-xs">Registered Hubs</h4>
          <div className="text-xs text-zinc-300 space-y-3 font-sans leading-relaxed">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-medium">Office 1</strong>
                02, Sai Aadesh Apartment, Chehedi pumping, Nashik road, Nashik, Maharashtra, India
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-medium">Office 2</strong>
                908, Tower 11, Phase 1, Runwal Garden City, Dombivali East, Mumbai Suburb, Maharashtra, India
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Social Links */}
        <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end gap-6">
          <div>
            <h4 className="font-sans font-bold tracking-widest text-gold uppercase text-xs mb-3 md:text-right">Export Desk</h4>
            <div className="text-xs text-zinc-300 space-y-2 md:text-right">
              <a href="mailto:info@primerouteagencies.com" className="hover:text-gold transition-colors block font-medium">
                info@primerouteagencies.com
              </a>
              <a href="tel:+917775011166" className="hover:text-gold transition-colors block font-bold text-white text-sm">
                +91 77750 11166
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://api.whatsapp.com/message/XRYAYKJOSZOMG1?autoload=1&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 text-[#25D366]"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/prime-route-agencies-a6283a414" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-300 text-[#0A66C2]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-[11px] tracking-wider text-zinc-500 md:text-right">
            &copy; {new Date().getFullYear()} Prime Route Agencies.<br/>All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

