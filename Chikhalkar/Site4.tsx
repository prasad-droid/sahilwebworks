import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Lightbulb, TrendingUp, Award, Briefcase } from "lucide-react";
import heroImg from "@/assets/vertex-hero.jpg";

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Site4 = () => (
  <div style={{ background: "#FFFFFF", color: "#1F2937", fontFamily: "'Inter', sans-serif" }} className="min-h-screen">
    {/* Nav */}
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-16 py-5 max-w-7xl mx-auto">
      <span className="text-xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans'" }}>
        <span className="text-white">Vertex</span><span style={{ color: "#A5B4FC" }}>Corp</span>
      </span>
      <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#services" className="hover:text-white transition">Services</a>
        <a href="#team" className="hover:text-white transition">Leadership</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
        <button className="px-5 py-2.5 rounded-lg text-sm font-semibold backdrop-blur-sm" style={{ background: "rgba(99,102,241,0.8)", color: "#fff" }}>Schedule a Call</button>
      </div>
    </nav>

    {/* Hero with Background Image */}
    <motion.section initial="hidden" animate="visible" variants={fade} className="relative min-h-[85vh] flex items-center overflow-hidden">
      <img src={heroImg} alt="Corporate skyline" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(17,24,39,0.85) 0%, rgba(99,102,241,0.6) 100%)" }} />
      <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-6 backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.15)", color: "#E0E7FF" }}>
            Fortune 500 Trusted Partner
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.08] mb-6 text-white" style={{ fontFamily: "'Plus Jakarta Sans'" }}>
            Strategic Growth.<br />Measurable <span style={{ color: "#A5B4FC" }}>Results.</span>
          </h1>
          <p className="text-lg mb-10 max-w-xl text-white/70">
            We partner with ambitious organizations to drive transformation, optimize operations, and unlock sustainable growth.
          </p>
          <div className="flex gap-4">
            <button className="px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-indigo-500/30" style={{ background: "#6366F1", color: "#fff" }}>
              Our Services <ArrowRight size={16} />
            </button>
            <button className="px-7 py-3.5 rounded-lg font-semibold border border-white/30 text-white backdrop-blur-sm hover:bg-white/10 transition">
              Case Studies
            </button>
          </div>
        </div>
      </div>
    </motion.section>

    {/* Stats Banner */}
    <section className="px-6 md:px-16 max-w-7xl mx-auto pb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {[
          { n: "$2.4B+", l: "Revenue Generated" },
          { n: "150+", l: "Enterprise Clients" },
          { n: "96%", l: "Client Retention" },
          { n: "12", l: "Global Offices" },
        ].map((s, i) => (
          <div key={i} className="rounded-xl p-6 text-center" style={{ background: "#F9FAFB" }}>
            <div className="text-2xl font-extrabold mb-1" style={{ color: "#6366F1", fontFamily: "'Plus Jakarta Sans'" }}>{s.n}</div>
            <div className="text-xs" style={{ color: "#9CA3AF" }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Services */}
    <section id="services" className="px-6 md:px-16 max-w-7xl mx-auto pb-24">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <h2 className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#6366F1" }}>What We Do</h2>
        <h3 className="text-3xl font-bold mb-12" style={{ fontFamily: "'Plus Jakarta Sans'", color: "#111827" }}>Our Core Services</h3>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="grid md:grid-cols-3 gap-6">
        {[
          { icon: <Target size={22} />, title: "Strategy Consulting", desc: "Data-driven strategies that align your vision with market opportunities." },
          { icon: <TrendingUp size={22} />, title: "Digital Transformation", desc: "Modernize operations with cutting-edge technology and processes." },
          { icon: <Lightbulb size={22} />, title: "Innovation Labs", desc: "Rapid prototyping and R&D to keep you ahead of the competition." },
        ].map((s, i) => (
          <motion.div key={i} variants={fade} className="rounded-xl p-8 border hover:shadow-md transition-shadow" style={{ borderColor: "#F3F4F6" }}>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: "#EEF2FF", color: "#6366F1" }}>{s.icon}</div>
            <h4 className="text-lg font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans'", color: "#111827" }}>{s.title}</h4>
            <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* Leadership */}
    <section id="team" className="px-6 md:px-16 max-w-7xl mx-auto pb-24">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: "'Plus Jakarta Sans'", color: "#111827" }}>Leadership Team</h2>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="grid md:grid-cols-4 gap-6">
        {[
          { name: "Sarah Chen", role: "CEO & Founder", icon: <Users size={20} /> },
          { name: "James Porter", role: "Chief Strategy Officer", icon: <Target size={20} /> },
          { name: "Amira Hassan", role: "VP of Innovation", icon: <Lightbulb size={20} /> },
          { name: "David Kim", role: "Chief Operating Officer", icon: <Briefcase size={20} /> },
        ].map((p, i) => (
          <motion.div key={i} variants={fade} className="text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `hsl(${240 + i * 8}, 60%, ${92 - i * 3}%)`, color: "#6366F1" }}>
              {p.icon}
            </div>
            <h4 className="font-bold text-sm" style={{ fontFamily: "'Plus Jakarta Sans'", color: "#111827" }}>{p.name}</h4>
            <p className="text-xs" style={{ color: "#9CA3AF" }}>{p.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* Testimonial */}
    <section className="px-6 md:px-16 max-w-7xl mx-auto pb-24">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="rounded-2xl p-10 md:p-16" style={{ background: "#F9FAFB" }}>
        <Award size={28} style={{ color: "#6366F1" }} className="mb-6" />
        <blockquote className="text-xl md:text-2xl font-semibold leading-snug mb-6" style={{ fontFamily: "'Plus Jakarta Sans'", color: "#111827" }}>
          "VertexCorp transformed how we operate. Their strategic insights helped us achieve 3x revenue growth in under two years."
        </blockquote>
        <div>
          <div className="font-bold text-sm" style={{ color: "#111827" }}>Michael Torres</div>
          <div className="text-xs" style={{ color: "#9CA3AF" }}>CEO, TechNova Inc.</div>
        </div>
      </motion.div>
    </section>

    {/* CTA */}
    <section id="contact" className="px-6 md:px-16 max-w-7xl mx-auto pb-16">
      <div className="rounded-2xl text-center px-6 py-20" style={{ background: "linear-gradient(135deg, #6366F1, #818CF8)" }}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans'" }}>Ready to Transform Your Business?</h2>
        <p className="text-white/70 mb-8 text-sm">Let's discuss how we can accelerate your growth trajectory.</p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3.5 rounded-lg font-semibold" style={{ background: "#fff", color: "#6366F1" }}>Schedule a Call</button>
          <button className="px-8 py-3.5 rounded-lg font-semibold border border-white/30 text-white">Download Brochure</button>
        </div>
      </div>
    </section>

    <footer className="text-center py-10 text-xs" style={{ color: "#9CA3AF" }}>© 2026 VertexCorp. All rights reserved.</footer>
  </div>
);

export default Site4;
