import { motion } from "framer-motion";
import { Package, Globe, ShieldCheck, ArrowRight, CheckCircle, Phone, Mail, MessageCircle } from "lucide-react";
import heroImg from "@/assets/steelforge-hero.jpg";
import steelComponentsImg from "@/assets/steel-components.jpg";
import cncPartsImg from "@/assets/cnc-parts.jpg";
import customFabImg from "@/assets/custom-fabrication.jpg";
import whyImg from "@/assets/steelforge-why.jpg";
import ctaImg from "@/assets/steelforge-cta.jpg";

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const BRAND_COLOR = "#801217"; // Maroon from Shreimani Impex logo
const BRAND_HOVER = "#991b22";

const Site1 = () => (
  <div style={{ color: "#E2E8F0", fontFamily: "'Inter', sans-serif" }} className="min-h-screen">
    {/* Hero with background image */}
    <div className="relative" style={{ background: "#0D0D0D" }}>
      <div className="absolute inset-0">
        <img src={heroImg} alt="Trading and Export unit" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.85) 50%, rgba(128,18,23,0.2) 100%)" }} />
      </div>
      <div className="relative z-10">
    <nav className="flex items-center justify-between px-6 md:px-16 py-5 max-w-7xl mx-auto">
      <span className="text-xl font-bold flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
        <span style={{ color: BRAND_COLOR, fontSize: "1.8rem" }}>SI</span>
        <span style={{ color: "#F8FAFC", letterSpacing: "1px" }}>SHREIMANI</span><span style={{ color: BRAND_COLOR, letterSpacing: "1px" }}>IMPEX</span>
      </span>
      <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide" style={{ color: "#A1A1AA" }}>
        <a href="#about" className="hover:text-white transition">About Us</a>
        <a href="#products" className="hover:text-white transition">Services/Products</a>
        <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
        <a href="#contact" className="hover:text-white transition">Contact Us</a>
        <a href="#contact" className="px-5 py-2.5 rounded-lg text-sm font-semibold transition hover:opacity-90 cursor-pointer" style={{ background: BRAND_COLOR, color: "#FFFFFF" }}>Get Quote</a>
      </div>
    </nav>

    <motion.section initial="hidden" animate="visible" variants={fade} className="px-6 md:px-16 max-w-7xl mx-auto pt-20 pb-28">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: "rgba(128,18,23,0.15)", color: "#E57373" }}>
            🌍 Domestic Trading & Export Import
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.08] mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#F8FAFC" }}>
            Premium<br />Products,<br />Proven <span style={{ color: BRAND_COLOR }}>Performance</span>
          </h1>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "#A1A1AA" }}>
            Creating an empire of trading products domestically and internationally. We provide premium quality products throughout the world, building trust, faith, and integrity.
          </p>
          <div className="flex gap-4">
            <a href="#products" className="px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition hover:opacity-90" style={{ background: BRAND_COLOR, color: "#FFFFFF" }}>
              Explore Services <ArrowRight size={16} />
            </a>
            <a href="#contact" className="px-7 py-3.5 rounded-lg font-semibold border transition hover:bg-white/5" style={{ borderColor: "#333333", color: "#E2E8F0" }}>
              Contact Us
            </a>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-2 gap-4">
          {[
            { n: "100%", l: "Premium Quality" },
            { n: "Global", l: "Export Network" },
            { n: "Trust", l: "Faith & Integrity" },
            { n: "24/7", l: "Reliable Support" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl p-6 text-center" style={{ background: "rgba(20,20,20,0.7)", backdropFilter: "blur(8px)", border: "1px solid #333333" }}>
              <div className="text-2xl font-extrabold mb-1" style={{ color: BRAND_COLOR, fontFamily: "'Playfair Display', serif" }}>{s.n}</div>
              <div className="text-xs uppercase tracking-wider" style={{ color: "#A1A1AA" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
      </div>
    </div>

    <div style={{ background: "#0A0A0A" }}>
    {/* Products Section with Images */}
    <section id="products" className="px-6 md:px-16 max-w-7xl mx-auto pb-28 pt-16">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <h2 className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: BRAND_COLOR }}>Our Services / Products</h2>
        <h3 className="text-3xl font-bold mb-12" style={{ fontFamily: "'Playfair Display', serif", color: "#F8FAFC" }}>Trading Excellence Worldwide</h3>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="grid md:grid-cols-3 gap-5">
        {[
          { title: "Domestic Trading", desc: "Reliable supply chain and distribution of premium products across the domestic market.", icon: <Package size={24} />, img: steelComponentsImg },
          { title: "Export & Import", desc: "Bringing high-quality export grade products to potential buyers and importers globally.", icon: <Globe size={24} />, img: cncPartsImg },
          { title: "Quality Assurance", desc: "Every product is meticulously sourced, guaranteeing proven performance and reliability.", icon: <ShieldCheck size={24} />, img: customFabImg },
        ].map((p, i) => (
          <motion.div key={i} variants={fade} className="rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform" style={{ background: "#111111", border: "1px solid #222222" }}>
            <div className="relative h-48 overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17,17,17,0.9) 0%, transparent 60%)" }} />
              <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(128,18,23,0.2)", color: BRAND_COLOR, backdropFilter: "blur(8px)" }}>{p.icon}</div>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#F8FAFC" }}>{p.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#A1A1AA" }}>{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* Why Choose Us - with image */}
    <section id="about" className="px-6 md:px-16 max-w-7xl mx-auto pb-28">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #222222" }}>
        <div className="grid md:grid-cols-2">
          <div className="relative">
            <img src={whyImg} alt="Global logistics and trade" className="w-full h-full object-cover min-h-[300px]" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 50%, #111111 100%)" }} />
            <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(to bottom, transparent 50%, #111111 100%)" }} />
          </div>
          <div className="p-10 md:p-14 flex flex-col justify-center" style={{ background: "#111111" }}>
            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif", color: "#F8FAFC" }}>Why Choose Shreimani Impex?</h2>
            <div className="grid gap-5">
              {[
                "Uncompromising Premium Quality Standards",
                "Extensive Global Network for Export/Import",
                "Transparent & Reliable Domestic Trading",
                "Fostering Faith and Integrity in Business",
                "Dedicated Customer Support for Buyers",
                "Timely Deliveries Across Borders",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} style={{ color: BRAND_COLOR, flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "#CBD5E1" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
    
    {/* Testimonials */}
    <section id="testimonials" className="px-6 md:px-16 max-w-7xl mx-auto pb-28 text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <h2 className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: BRAND_COLOR }}>Testimonials</h2>
        <h3 className="text-3xl font-bold mb-12" style={{ fontFamily: "'Playfair Display', serif", color: "#F8FAFC" }}>What Our Clients Say</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          {[
            { quote: "Shreimani Impex delivered exactly what we needed. The premium quality of their export products speaks volumes about their commitment to excellence in the global market.", author: "Global Importer" },
            { quote: "Their team built a relationship of absolute trust. A highly reliable domestic trading partner that truly delivers proven performance and integrity.", author: "Domestic Content Buyer" }
          ].map((t, i) => (
            <div key={i} className="p-8 rounded-xl" style={{ background: "#111111", border: "1px solid #222222" }}>
              <p className="text-sm italic mb-6 leading-relaxed" style={{ color: "#A1A1AA" }}>"{t.quote}"</p>
              <p className="font-bold text-sm" style={{ color: "#F8FAFC" }}>- {t.author}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>

    {/* CTA with background image */}
    <section id="contact" className="px-6 md:px-16 max-w-7xl mx-auto pb-16">
      <div className="rounded-2xl overflow-hidden relative">
        <img src={ctaImg} alt="Logistics Network" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(82,0,0,0.92) 0%, rgba(128,18,23,0.85) 50%, rgba(82,0,0,0.9) 100%)" }} />
        <div className="relative z-10 text-center px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF" }}>Ready to Start Trading?</h2>
          <p className="mb-8 text-sm opacity-90 max-w-xl mx-auto" style={{ color: "#F8FAFC" }}>Contact us today to explore high-quality export grade products and build a relationship of trust.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+919119559758" className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition hover:-translate-y-1" style={{ background: "#FFFFFF", color: BRAND_COLOR }}>
              <Phone size={14} /> +91 9119559758
            </a>
            <a href="https://wa.me/919119559758" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition hover:-translate-y-1 border-2 border-white" style={{ color: "#FFFFFF" }}>
              <MessageCircle size={14} /> WhatsApp Us
            </a>
            <a href="mailto:shreimaniimpex@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition hover:-translate-y-1 border-2 border-white" style={{ color: "#FFFFFF" }}>
              <Mail size={14} /> shreimaniimpex@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer className="text-center py-10 text-xs" style={{ color: "#475569", borderTop: "1px solid #222222" }}>© {new Date().getFullYear()} Shreimani Impex. All rights reserved.</footer>
    </div>
  </div>
);

export default Site1;
