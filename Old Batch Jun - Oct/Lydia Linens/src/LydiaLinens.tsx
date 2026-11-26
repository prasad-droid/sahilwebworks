import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, MessageCircle, ArrowRight, Star, Shield, Settings, Truck, Users, ChevronRight, Sparkles, Heart, Award, BadgeCheck, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import "./index.css";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } } };

const Wave = ({ fill }: { fill: string }) => (
  <div className="wave" aria-hidden="true">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" focusable="false">
      <path d="M0,0 L1440,0 L1440,80 C960,28 480,28 0,80 Z" fill={fill} />
      <path d="M0,80 C480,28 960,28 1440,80" fill="none" stroke="var(--gold)" strokeWidth="2.5" />
    </svg>
  </div>
);

const LydiaLinens = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">

      {/* ─── STICKY HEADER ─── */}
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`} aria-label="Main navigation">
        <div className="container nav__inner">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }} className="nav__logo">
            <img src="/logo.jpeg" alt="Lydia Linens" className="nav__logo-img" />
          </a>

          <div className="nav__links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }} className="nav__link">
                {l.label}
              </a>
            ))}
            <a href="https://wa.me/919922191180" target="_blank" rel="noopener noreferrer" className="nav__whatsapp">
              <MessageCircle size={15} /> WhatsApp Us
            </a>
          </div>

          <button className="nav__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={26} color="var(--purple)" /> : <Menu size={26} color="var(--purple)" />}
          </button>
        </div>

        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="nav__mobile">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }} className="nav__mobile-link">
                {l.label}
              </a>
            ))}
            <a href="https://wa.me/919922191180" target="_blank" rel="noopener noreferrer" className="nav__mobile-wa">
              WhatsApp Us
            </a>
          </motion.div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section id="home" className="hero">
        <div className="hero__glow hero__glow--top" aria-hidden="true" />
        <div className="hero__glow hero__glow--bottom" aria-hidden="true" />
        <div className="hero__glow hero__glow--center" aria-hidden="true" />

        {/* Floating decorative gold ornaments */}
        <div className="hero__ornament hero__ornament--line" style={{ top: "22%", left: "6%", width: "90px" }} aria-hidden="true" />
        <div className="hero__ornament hero__ornament--vl" style={{ top: "18%", right: "12%", height: "70px" }} aria-hidden="true" />
        <div className="hero__ornament hero__ornament--dot" style={{ top: "30%", right: "9%" }} aria-hidden="true" />
        <div className="hero__ornament hero__ornament--line" style={{ bottom: "26%", left: "42%", width: "60px" }} aria-hidden="true" />
        <div className="hero__ornament hero__ornament--dot" style={{ bottom: "24%", left: "40%" }} aria-hidden="true" />

        <div className="container hero__content">
          <div className="hero__left">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="hero__badge">
                <Sparkles size={16} /> Premium Hospitality Linen
              </div>

              <h1 className="hero__title">
                Woven with Grace,<br />
                Serving with <span>Purpose</span>
              </h1>

              <p className="hero__subtitle">
                India's trusted supplier of premium hospitality linens — crafted for hotels, resorts, spas, and healthcare institutions worldwide.
              </p>

              <div className="hero__buttons">
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("#services"); }} className="btn btn--primary">
                  View Products <ArrowRight size={16} />
                </a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }} className="btn btn--outline">
                  Contact Us <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } } }} className="hero__stats">
              {[
                { num: 500, suffix: "+", label: "Clients Served" },
                { num: 15, suffix: "+", label: "Years Experience" },
                { num: 20, suffix: "+", label: "Countries Exported" },
                { num: 100, suffix: "%", label: "Quality Assured" },
              ].map((s, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div className="hero__stat-number"><Counter value={s.num} suffix={s.suffix} /></div>
                  <div className="hero__stat-label">{s.label}</div>
                </motion.div>
              ))}
            </motion.div> */}
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hero__right">
            <div className="hero__bento">
              <div className="hero__bento-item hero__bento-item--1">
                <img src="/images/bath_towel_1.webp" alt="Premium cotton terry hotel towels in India" width="600" height="360" fetchPriority="high" decoding="async" />
              </div>
              <div className="hero__bento-item hero__bento-item--2">
                <img src="/images/face_towel_1.webp" alt="Premium face towels for hotels and resorts" width="566" height="622" loading="lazy" decoding="async" />
              </div>
              <div className="hero__bento-item hero__bento-item--3">
                <img src="/images/robe_1.webp" alt="Luxury waffle bathrobe for spa and hotel" width="448" height="668" loading="lazy" decoding="async" />
              </div>
              <div className="hero__bento-item hero__bento-item--4">
                <img src="/images/pool_towel_1.webp" alt="Oversized resort pool towels for hotels" width="600" height="386" loading="lazy" decoding="async" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Wave Divider */}
        <div className="hero__wave" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" focusable="false">
            <path d="M0,80 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="var(--ivory)" />
            <path d="M0,100 C480,60 960,80 1440,40 L1440,120 L0,120 Z" fill="var(--purple)" opacity="0.04" />
            <path d="M0,80 C360,120 1080,0 1440,60" fill="none" stroke="var(--gold)" strokeWidth="2.5" />
          </svg>
        </div>
      </section>

      {/* ─── ABOUT US ─── */}
      <section id="about" className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="section__header">
              <span className="section__label">Our Story</span>
              <h2 className="section__title">About Lydia Linens</h2>
              <div className="gold-divider">
                <span className="gold-divider__line" />
                <span className="gold-divider__diamond" />
                <span className="gold-divider__line" />
              </div>
            </div>

            <div className="about__grid">
              <div>
                <h3 className="about__subtitle">
                  Woven with Grace. Crafted for Hospitality. Exported with Excellence.
                </h3>
                <p className="about__text">
                  At Lydia Linens, we believe that every exceptional guest experience begins with quality. We are an Indian supplier of premium hospitality textiles, committed to providing hotels, resorts, hospitals, spas, serviced apartments, and hospitality distributors with high-quality linen products that combine comfort, durability, and elegance.
                </p>
                <p className="about__text">
                  Our product range is carefully selected to meet the demanding standards of the hospitality industry. From luxurious cotton towels to bathrobes, bath mats, waffle products, and customized linen solutions, every product is designed to deliver superior performance, exceptional softness, and long-lasting value.
                </p>
                <div className="about__tags">
                  {["Premium Quality", "Global Export", "Custom Solutions"].map((tag) => (
                    <span key={tag} className="why__title">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="about__card">
                <div className="about__card-glow" />
                <div className="about__card-list">
                  <h4 className="about__card-title">Our Commitment</h4>
                  {[
                    { icon: <Star size={18} />, text: "Uncompromising quality standards" },
                    { icon: <Shield size={18} />, text: "Ethical sourcing & fair trade" },
                    { icon: <Truck size={18} />, text: "Reliable global supply chain" },
                    { icon: <Heart size={18} />, text: "Client-first approach" },
                  ].map((item, i) => (
                    <div key={i} className="about__card-item">
                      <div className="about__card-icon">{item.icon}</div>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── BROCHURE CONTENT ─── */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="brochure">
            <div className="brochure__header">
              <div className="gold-divider">
                <span className="gold-divider__line" />
                <span className="gold-divider__diamond" />
                <span className="gold-divider__line" />
              </div>
              <h3 className="brochure__title">Why Lydia Linens?</h3>
            </div>

            <div className="brochure__features">
              {[
                { icon: <Award size={20} />, title: "Premium Cotton Quality", desc: "Ensures unmatched softness and comfort." },
                { icon: <Shield size={20} />, title: "Superior Absorbency", desc: "Quick drying and highly absorbent for ultimate convenience." },
                { icon: <Settings size={20} />, title: "Durable & Long Lasting", desc: "Built to withstand frequent washing without losing quality." },
                { icon: <BadgeCheck size={20} />, title: "Hospitality Grade Products", desc: "Trusted by hotels and resorts for exceptional performance." },
                { icon: <Truck size={20} />, title: "Bulk Order Capability", desc: "Reliable supply for businesses of all sizes." },
                { icon: <Globe size={20} />, title: "Pan India Supply", desc: "Timely delivery across India, every time." },
              ].map((f, i) => (
                <div key={i} className="brochure__feature">
                  <div className="brochure__feature-icon">{f.icon}</div>
                  <div>
                    <div className="brochure__feature-title">{f.title}</div>
                    <div className="brochure__feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Mission & Vision ── */}
            <div className="brochure__mv-grid">
              <div className="brochure__mv-card brochure__mv-card--mission">
                <span className="brochure__mv-label">Our Mission</span>
                <h4 className="brochure__mv-title">To Elevate Hospitality</h4>
                <p className="brochure__mv-text">
                  To deliver premium quality linens that elevate comfort, enhance guest experiences, and set the standard for luxury hospitality.
                </p>
              </div>
              <div className="brochure__mv-card brochure__mv-card--vision">
                <span className="brochure__mv-label">Our Vision</span>
                <h4 className="brochure__mv-title">Global Excellence</h4>
                <p className="brochure__mv-text">
                  To be India's most trusted partner in hospitality linens — known for quality, reliability, and timeless elegance.
                </p>
              </div>
            </div>

            {/* ── Industries Served ── */}
            <div className="brochure__industries">
              <h4 className="brochure__industries-title">Industries We Serve</h4>
              <div className="brochure__industries-tags">
                {["Hotels", "Resorts", "Spas", "Hospitals", "Guest Houses"].map((ind, i) => (
                  <span key={i} className="brochure__industries-tag">{ind}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES / PRODUCTS ─── */}
      <section id="services" className="section" style={{ background: "var(--white)" }}>
        <Wave fill="var(--ivory)" />
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section__header">
            <span className="section__label">What We Offer</span>
            <h2 className="section__title">Our Products</h2>
            <div className="gold-divider">
              <span className="gold-divider__line" />
              <span className="gold-divider__diamond" />
              <span className="gold-divider__line" />
            </div>
            <p className="section__subtitle">
              Premium hospitality linen products for hotels, resorts, spas and healthcare — bulk towels, bathrobes, bath mats and custom solutions.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="products__grid">
            {[
              { name: "Cotton Terry Towels", desc: "Bath, Hand & Face Towels", img: "/images/bath_towel_1.webp", w: 600, h: 360, alt: "Hotel-grade cotton terry towels supplier India" },
              { name: "Pool Towels", desc: "Oversized & resort-grade", img: "/images/pool_towel_1.webp", w: 600, h: 386, alt: "Oversized resort pool towels for hotels and spas" },
              { name: "Face Towels", desc: "Lightweight & textured", img: "/images/face_towel_1.webp", w: 566, h: 622, alt: "Premium hospitality face towels" },
              { name: "Waffle Bathrobes", desc: "Spa & hotel luxury", img: "/images/robe_1.webp", w: 448, h: 668, alt: "Luxury waffle bathrobe manufacturer for spas" },
              { name: "Terry Bathrobes", desc: "Plush & absorbent", img: "/images/robe_2.webp", w: 320, h: 322, alt: "Plush terry bathrobes for hotels" },
              { name: "Bath Mats", desc: "Non-slip & durable", img: "/images/bath_mat_1.webp", w: 600, h: 372, alt: "Non-slip hotel bath mats wholesale" },
              { name: "Hospitality Linen", desc: "Complete solutions", img: "/images/hand_towel_1.webp", w: 600, h: 390, alt: "Complete hospitality linen solutions for hotels" },
              { name: "Custom Solutions", desc: "Sizes, GSM & branding", img: "/images/Towel_1.webp", w: 574, h: 576, alt: "Custom private label hotel linen with branding" },
            ].map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="product__card">
                <div className="product__img-wrap">
                  <img src={p.img} alt={p.alt} width={p.w} height={p.h} className="product__img" loading="lazy" decoding="async" />
                </div>
                <h3 className="product__name">{p.name}</h3>
                <p className="product__desc">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="products__cta">
            <a href="https://wa.me/919922191180" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <MessageCircle size={15} /> Request Product Catalog
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="section">
        <Wave fill="var(--white)" />
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section__header">
            <span className="section__label">Why Us</span>
            <h2 className="section__title">Why Choose Lydia Linens</h2>
            <div className="gold-divider">
              <span className="gold-divider__line" />
              <span className="gold-divider__diamond" />
              <span className="gold-divider__line" />
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="why__grid">
            {[
              { title: "Premium Quality", desc: "We source hospitality-grade textiles manufactured using high-quality cotton for excellent absorbency, softness, and durability.", icon: <Star size={24} /> },
              { title: "Customization", desc: "We offer tailored solutions including custom sizes, GSM options, logo embroidery, woven labels, and private branding.", icon: <Settings size={24} /> },
              { title: "Reliable Supply", desc: "Whether small commercial quantities or large bulk orders, we are committed to timely deliveries and consistent product quality.", icon: <Truck size={24} /> },
              { title: "Customer-Focused Service", desc: "We work closely with every client to understand their requirements and provide personalized solutions with responsive support.", icon: <Users size={24} /> },
            ].map((f, i) => (
              <motion.div key={i} variants={fadeUp} className="why__card">
                <div className="why__icon">{f.icon}</div>
                <h3 className="why__title">{f.title}</h3>
                <p className="why__desc">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE ─── */}
      <section className="section industries">
        <Wave fill="var(--ivory)" />
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section__header">
            <span className="section__label">Our Reach</span>
            <h2 className="section__title section__title--white">Industries We Serve</h2>
            <div className="gold-divider">
              <span className="gold-divider__line" />
              <span className="gold-divider__diamond" />
              <span className="gold-divider__line" />
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="industries__grid">
            {[
              "Hotels & Luxury Resorts",
              "Hospitals & Healthcare",
              "Spas & Wellness Centres",
              "Guest Houses & Boutique Hotels",
              "Service Apartments",
              "Holiday Homes & Vacation Rentals",
              "Hospitality Suppliers & Distributors",
            ].map((ind, i) => (
              <motion.div key={i} variants={fadeUp} className="industry__tag">{ind}</motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="testimonials" className="section" style={{ background: "var(--white)" }}>
        <Wave fill="var(--purple)" />
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section__header">
            <span className="section__label">Testimonials</span>
            <h2 className="section__title">What Our Clients Say</h2>
            <div className="gold-divider">
              <span className="gold-divider__line" />
              <span className="gold-divider__diamond" />
              <span className="gold-divider__line" />
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="testimonials__grid">
            {[
              { quote: "Excellent quality and reliable service. Lydia Linens understood our hospitality needs perfectly and delivered beyond expectations.", name: "Rajesh M.", role: "Procurement Head, Grand Horizon Hotels" },
              { quote: "Premium products, smooth communication, and dependable delivery. We've been working with Lydia Linens for over three years now.", name: "Anita S.", role: "Director, Serenity Spa & Resort" },
              { quote: "The custom embroidery and private labeling service is outstanding. Lydia Linens truly understands the hospitality brand experience.", name: "Vikram T.", role: "Owner, The Grand Boutique Stay" },
            ].map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="testimonial__card">
                <div className="testimonial__quote-mark">"</div>
                <p className="testimonial__text">{t.quote}</p>
                <div>
                  <div className="testimonial__author-name">{t.name}</div>
                  <div className="testimonial__author-role">{t.role}</div>
                </div>
                <div className="testimonial__stars">
                  {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="var(--gold)" color="var(--gold)" />)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="section--sm">
        <Wave fill="var(--white)" />
        <div className="container">
          <div className="cta">
            <h2 className="cta__title">Ready to Elevate Your Hospitality Experience?</h2>
            <p className="cta__subtitle">
              Get a custom quote tailored to your volume and delivery needs.
            </p>
            <div className="cta__buttons">
              <a href="https://wa.me/919922191180" target="_blank" rel="noopener noreferrer" className="btn btn--white">
                <MessageCircle size={15} /> Chat on WhatsApp
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }} className="btn btn--outline-white">
                Contact Us <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="section" style={{ background: "var(--white)" }}>
        <Wave fill="var(--beige)" />
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section__header">
            <span className="section__label">FAQs</span>
            <h2 className="section__title">Hospitality Linen FAQs</h2>
            <div className="gold-divider">
              <span className="gold-divider__line" />
              <span className="gold-divider__diamond" />
              <span className="gold-divider__line" />
            </div>
            <p className="section__subtitle">
              Common questions from hotels, resorts and spas about bulk towels, bathrobes and custom linen sourcing.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.05 } } }} className="faq__list">
            {[
              { q: "What GSM cotton towels are best for hotels?", a: "Most premium hotels use terry towels between 400 GSM and 650 GSM. Higher GSM towels are thicker, heavier and more absorbent — ideal for 5-star properties and spas. We can supply custom GSM options for any hospitality requirement." },
              { q: "Do you export hospitality linen to other countries?", a: "Yes. Lydia Linens exports premium hospitality linen worldwide, serving hotels, resorts, spas, hospitals and hospitality distributors across India and international markets." },
              { q: "Can you provide custom hotel linen with logo embroidery or private labeling?", a: "Yes. We offer custom sizes, GSM options, logo embroidery, woven labels and complete private branding so your linen matches your property's brand identity." },
              { q: "What is the minimum order quantity for bulk hotel towels?", a: "We support both small commercial quantities and large bulk orders. Share your volume and delivery requirements on WhatsApp and we will provide a tailored quote and timeline." },
              { q: "Do you supply a complete hotel linen package?", a: "Yes. We supply complete hospitality linen packages including cotton terry towels, bath mats, bathrobes, waffle products and custom solutions as one coordinated order." },
              { q: "How long does delivery take within India and for exports?", a: "We provide timely deliveries across India and reliable global supply chains for export orders. Exact timelines depend on order size and destination, and are confirmed with every quotation." },
            ].map((f, i) => (
              <motion.div key={i} variants={fadeUp} className={`faq__item ${openFaq === i ? "faq__item--open" : ""}`}>
                <button
                  type="button"
                  className="faq__question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="faq__question-text">{f.q}</span>
                  <span className="faq__icon" aria-hidden="true">{openFaq === i ? <X size={18} /> : <ChevronRight size={18} />}</span>
                </button>
                <div id={`faq-answer-${i}`} className="faq__answer">
                  <p>{f.a}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT US ─── */}
      <section id="contact" className="section">
        <Wave fill="var(--beige)" />
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section__header">
            <span className="section__label">Get in Touch</span>
            <h2 className="section__title">Contact Us</h2>
            <div className="gold-divider">
              <span className="gold-divider__line" />
              <span className="gold-divider__diamond" />
              <span className="gold-divider__line" />
            </div>
          </motion.div>

          <div className="contact__grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="contact__card">
              <h3 className="contact__card-title">Send Us a Message</h3>
              <form className="contact__form" onSubmit={(e) => { e.preventDefault(); window.open("https://wa.me/919922191180", "_blank"); }}>
                <div className="contact__form-row">
                  <input type="text" placeholder="Your Name" required className="contact__input" />
                  <input type="email" placeholder="Email Address" required className="contact__input" />
                </div>
                <input type="text" placeholder="Company Name" className="contact__input" />
                <select className="contact__input contact__input--select">
                  <option>Interested In...</option>
                  <option>Cotton Terry Towels</option>
                  <option>Waffle Products</option>
                  <option>Bathrobes</option>
                  <option>Bath Mats</option>
                  <option>Custom / Private Label</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Your Message" rows={4} className="contact__input contact__textarea" />
                <button type="submit" className="btn btn--purple">
                  Send Message <ArrowRight size={15} />
                </button>
              </form>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="contact__right">
              <div className="contact__card">
                <h3 className="contact__card-title">Business Details</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    { icon: <Phone size={18} />, label: "Phone", value: "+91 99221 91180", href: "tel:+919922191180" },
                    { icon: <MessageCircle size={18} />, label: "WhatsApp", value: "+91 99221 91180", href: "https://wa.me/919922191180" },
                    { icon: <Mail size={18} />, label: "Email", value: "lydialinens05@gmail.com", href: "mailto:lydialinens05@gmail.com" },
                    { icon: <MapPin size={18} />, label: "Address", value: "Viman Nagar, Pune, India", href: null },
                  ].map((c, i) => (
                    <div key={i} className="contact__info-item">
                      <div className="contact__info-icon">{c.icon}</div>
                      <div>
                        <div className="contact__info-label">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="contact__info-link">
                            {c.value}
                          </a>
                        ) : (
                          <div className="contact__info-value">{c.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact__cta">
                <h4 className="contact__cta-title">Inspired by Luxury.</h4>
                <p className="contact__cta-subtitle">Crafted for Hospitality.</p>
                <a href="https://wa.me/919922191180" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  <MessageCircle size={15} /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        {/* Footer Wave */}
        <div className="footer__wave" aria-hidden="true">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" focusable="false">
            <path d="M0,0 L1440,0 L1440,60 C960,20 480,20 0,60 Z" fill="var(--ivory)" />
            <path d="M0,60 C480,20 960,20 1440,60" fill="none" stroke="var(--gold)" strokeWidth="2.5" />
          </svg>
        </div>

        <div className="footer__content">
          <div className="container">
            <div className="footer__grid">
              {/* Brand Column */}
              <div className="footer__col footer__col--brand">
                <img src="/logo.jpeg" alt="Lydia Linens" className="nav__logo-img" />
                <p className="footer__tagline">Woven with Grace, serving with purpose.</p>
                <p className="footer__col-text">
                  India's trusted supplier of premium hospitality linens — crafted for hotels, resorts, spas, and healthcare institutions worldwide.
                </p>
              </div>

              {/* Quick Links */}
              <div className="footer__col">
                <h4 className="footer__col-title">Quick Links</h4>
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }} className="footer__link">
                    {l.label}
                  </a>
                ))}
              </div>

              {/* Contact */}
              <div className="footer__col">
                <h4 className="footer__col-title">Contact</h4>
                <div className="footer__contact-item">
                  <div className="footer__contact-icon"><Phone size={14} /></div>
                  <a href="tel:+919922191180" className="footer__contact-link">+91 99221 91180</a>
                </div>
                <div className="footer__contact-item">
                  <div className="footer__contact-icon"><Mail size={14} /></div>
                  <a href="mailto:lydialinens05@gmail.com" className="footer__contact-link">lydialinens05@gmail.com</a>
                </div>
                <div className="footer__contact-item">
                  <div className="footer__contact-icon"><MapPin size={14} /></div>
                  <span>Viman Nagar, Pune, India</span>
                </div>
              </div>

              {/* Connect */}
              <div className="footer__col">
                <h4 className="footer__col-title">Connect</h4>
                <div className="footer__social">
                  <a href="https://wa.me/919922191180" target="_blank" rel="noopener noreferrer" className="footer__social-icon">
                    <MessageCircle size={16} />
                  </a>
                  <a href="mailto:lydialinens05@gmail.com" className="footer__social-icon">
                    <Mail size={16} />
                  </a>
                </div>
                <a href="https://wa.me/919922191180" target="_blank" rel="noopener noreferrer" className="footer__wa">
                  <MessageCircle size={14} /> WhatsApp Us
                </a>
              </div>
            </div>

            <div className="footer__divider" />
            <div className="footer__bottom">
              <p>&copy; 2026 Lydia Linens. All rights reserved.</p>
              <div className="footer__bottom-links">
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }} className="footer__bottom-link">Home</a>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("#about"); }} className="footer__bottom-link">About</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }} className="footer__bottom-link">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LydiaLinens;
