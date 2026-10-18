import { motion } from "framer-motion";
import { Ship, Package, FileCheck, Shield, ArrowRight, Globe, Clock, BarChart3 } from "lucide-react";
import heroImg from "@/assets/import-hero.jpg";
import customsImg from "@/assets/import-customs.jpg";
import freightImg from "@/assets/import-freight.jpg";
import warehouseImg from "@/assets/import-warehouse.jpg";
import complianceImg from "@/assets/import-compliance.jpg";
import step1Img from "@/assets/import-step1.jpg";
import step2Img from "@/assets/import-step2.jpg";
import step3Img from "@/assets/import-step3.jpg";
import electronicsImg from "@/assets/ind-electronics.jpg";
import textilesImg from "@/assets/ind-textiles.jpg";
import foodImg from "@/assets/ind-food.jpg";
import machineryImg from "@/assets/ind-machinery.jpg";
import pharmaImg from "@/assets/ind-pharma.jpg";
import automotiveImg from "@/assets/ind-automotive.jpg";
import ctaImg from "@/assets/import-cta.jpg";

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Site3 = () => (
  <div style={{ color: "#1E3A5F", fontFamily: "'Inter', sans-serif" }} className="min-h-screen">
    {/* Hero */}
    <div className="relative" style={{ minHeight: "100vh" }}>
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Import export containers" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(12,74,110,0.92) 0%, rgba(3,105,161,0.8) 50%, rgba(12,74,110,0.85) 100%)" }} />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-5 max-w-7xl mx-auto">
        <span className="text-xl font-bold flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans'" }}>
          <Ship size={22} style={{ color: "#7DD3FC" }} />
          <span className="text-white">Global</span><span style={{ color: "#7DD3FC" }}>Import Co.</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#how" className="hover:text-white transition">How It Works</a>
          <a href="#industries" className="hover:text-white transition">Industries</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <button className="px-5 py-2.5 rounded-lg text-sm font-semibold backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}>Get Started</button>
        </div>
      </nav>

      <motion.section initial="hidden" animate="visible" variants={fade} className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto pt-20 pb-24">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-6 backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.15)", color: "#E0F2FE" }}>
              🌍 Licensed Customs Broker & Importer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-6 text-white" style={{ fontFamily: "'Plus Jakarta Sans'" }}>
              Seamless Global<br /><span style={{ color: "#7DD3FC" }}>Importing</span> Made Simple
            </h1>
            <p className="text-lg mb-8 text-white/70">
              We handle customs clearance, compliance, logistics, and warehousing so you can focus on growing your business.
            </p>
            <div className="flex gap-4">
              <button className="px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2 text-white group" style={{ background: "#0369A1" }}>
                🚀 Let's Move Your Cargo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-7 py-3.5 rounded-lg font-semibold backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
                📦 Track Shipment
              </button>
            </div>
          </div>
          <div className="md:col-span-2 hidden md:block">
            <div className="rounded-2xl p-8 space-y-5 backdrop-blur-md" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <h3 className="font-bold text-sm text-white" style={{ fontFamily: "'Plus Jakarta Sans'" }}>📊 Quick Stats</h3>
              {[
                { label: "Shipments This Month", value: "1,240", emoji: "🚢" },
                { label: "Countries Connected", value: "65+", emoji: "🌎" },
                { label: "Avg. Clearance Time", value: "2.4 Days", emoji: "⚡" },
                { label: "Cost Savings", value: "32%", emoji: "💰" },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <div className="flex items-center gap-3 text-sm text-white/70"><span className="text-base">{s.emoji}</span> {s.label}</div>
                  <span className="font-bold text-sm" style={{ color: "#7DD3FC" }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>

    <div style={{ background: "#F0F9FF" }}>
      {/* Services with images */}
      <section id="services" className="px-6 md:px-16 max-w-7xl mx-auto py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Plus Jakarta Sans'", color: "#0C4A6E" }}>Import Services</h2>
          <p className="text-sm" style={{ color: "#64748B" }}>End-to-end solutions for your importing needs</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: <FileCheck size={18} />, title: "Customs Clearance", desc: "Full documentation and regulatory compliance handled for you.", img: customsImg },
            { icon: <Ship size={18} />, title: "Freight Forwarding", desc: "Ocean, air, and land freight at competitive rates.", img: freightImg },
            { icon: <Package size={18} />, title: "Warehousing", desc: "Bonded and general warehousing with inventory management.", img: warehouseImg },
            { icon: <Shield size={18} />, title: "Compliance", desc: "Stay compliant with import regulations and trade laws.", img: complianceImg },
          ].map((s, i) => (
            <motion.div key={i} variants={fade} className="rounded-xl overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1" style={{ background: "#fff" }}>
              <div className="relative h-44 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(255,255,255,1) 0%, transparent 60%)" }} />
                <div className="absolute bottom-3 left-4 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#DBEAFE", color: "#0369A1" }}>{s.icon}</div>
              </div>
              <div className="px-6 pb-6 pt-1">
                <h4 className="font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans'", color: "#0C4A6E" }}>{s.title}</h4>
                <p className="text-sm" style={{ color: "#64748B" }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works with images */}
      <section id="how" className="px-6 md:px-16 max-w-7xl mx-auto pb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <h2 className="text-3xl font-bold mb-3 text-center" style={{ fontFamily: "'Plus Jakarta Sans'", color: "#0C4A6E" }}>How It Works</h2>
          <p className="text-sm text-center mb-14" style={{ color: "#64748B" }}>Three simple steps to get your goods moving</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Share Your Needs", desc: "Tell us what you're importing, from where, and the volume.", img: step1Img, emoji: "📋" },
            { step: "02", title: "We Handle Everything", desc: "Customs docs, freight booking, compliance checks — all done.", img: step2Img, emoji: "⚙️" },
            { step: "03", title: "Receive Your Goods", desc: "Delivered to your warehouse or distribution center on time.", img: step3Img, emoji: "✅" },
          ].map((s, i) => (
            <motion.div key={i} variants={fade} className="rounded-2xl overflow-hidden group" style={{ background: "#fff", boxShadow: "0 4px 20px rgba(3,105,161,0.08)" }}>
              <div className="relative h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(12,74,110,0.7), rgba(3,105,161,0.4))" }} />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-xs text-white" style={{ background: "#0369A1" }}>{s.step}</div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans'", color: "#0C4A6E" }}>
                  <span>{s.emoji}</span> {s.title}
                </h4>
                <p className="text-sm" style={{ color: "#64748B" }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Industries with images */}
      <section id="industries" className="px-6 md:px-16 max-w-7xl mx-auto pb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <h2 className="text-3xl font-bold mb-3 text-center" style={{ fontFamily: "'Plus Jakarta Sans'", color: "#0C4A6E" }}>Industries We Serve</h2>
          <p className="text-sm text-center mb-12" style={{ color: "#64748B" }}>Trusted by businesses across diverse sectors worldwide</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { name: "Electronics", img: electronicsImg, emoji: "💻" },
            { name: "Textiles & Apparel", img: textilesImg, emoji: "👗" },
            { name: "Food & Beverages", img: foodImg, emoji: "🍎" },
            { name: "Machinery", img: machineryImg, emoji: "⚙️" },
            { name: "Pharmaceuticals", img: pharmaImg, emoji: "💊" },
            { name: "Automotive Parts", img: automotiveImg, emoji: "🚗" },
          ].map((ind, i) => (
            <motion.div key={i} variants={fade} className="rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1" style={{ background: "#fff" }}>
              <div className="relative h-40 overflow-hidden">
                <img src={ind.img} alt={ind.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,74,110,0.85) 0%, rgba(12,74,110,0.2) 60%, transparent 100%)" }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white font-semibold text-sm flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans'" }}>
                    <span className="text-base">{ind.emoji}</span> {ind.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA with container background */}
      <section id="contact" className="px-6 md:px-16 max-w-7xl mx-auto pb-16">
        <div className="rounded-2xl overflow-hidden relative">
          <img src={ctaImg} alt="Shipping containers at sunset" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(3,105,161,0.92) 0%, rgba(2,132,199,0.85) 50%, rgba(12,74,110,0.9) 100%)" }} />
          <div className="relative z-10 text-center px-6 py-20">
            <span className="text-3xl mb-4 block">🌐</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans'" }}>Start Importing Today</h2>
            <p className="text-white/70 mb-8 text-sm max-w-md mx-auto">Get a free consultation and customs assessment within 24 hours. Your cargo, our expertise.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-3.5 rounded-lg font-semibold flex items-center gap-2 group" style={{ background: "#fff", color: "#0369A1" }}>
                📞 Book a Free Consultation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3.5 rounded-lg font-semibold backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}>
                ✉️ Get a Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 text-xs" style={{ color: "#94A3B8" }}>© 2026 GlobalImport Co. All rights reserved.</footer>
    </div>
  </div>
);

export default Site3;
