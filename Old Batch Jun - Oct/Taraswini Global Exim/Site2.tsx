import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  Globe,
  ShieldCheck,
  Package,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle2,
  Send,
  Menu,
  X,
  Compass,
  Layers,
  Award,
  Users,
  Anchor,
  Box,
  Truck,
  FileCheck,
  ShoppingBag,
  User,
  Clock,
  MapPin,
  Eye,
  Instagram,
  Facebook
} from "lucide-react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Business Information Constants
const BUSINESS_INFO = {
  name: "Taraswini Global Exim",
  tagline: "Exporting Quality, Building Trust",
  phone: "9503595379",
  phoneFormatted: "+91 95035 95379",
  email: "taraswiniglobal@gmail.com",
  whatsapp: "9503595379",
  whatsappFormatted: "+91 95035 95379",
  contactPerson: "Harshal Dhawle",
  contactPersonPhone: "9503595379",
  contactPersonPhoneFormatted: "+91 95035 95379",
  location: "India (Global Export Service)",
  logo: "/logo.jpeg",
  instagram: "https://www.instagram.com/taraswiniglobal?utm_source=qr&stkn=MTM1amVnZGQyNWc2dQ%3D%3D",
  facebook: "https://www.facebook.com/people/Taraswini-global-exim/61594259281029/?rdid=kYimMRBU7JobV0I1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19Rbhty7MX%2F",
};

// 6 Core Products with real product_catalogs images
const PRODUCTS = [
  {
    id: "jute-bags",
    name: "Jute Bags",
    category: "Jute Collection",
    shortDesc:
      "High-quality jute bags suitable for businesses, retailers, promotional requirements and sustainable packaging.",
    fullDesc:
      "Crafted from premium 100% natural Indian golden jute fiber, our export-grade jute bags feature reinforced stitching, heavy-duty load tolerance, and breathable structure. Perfect for grocery chains, bulk retail packaging, eco-friendly shopping, and export storage.",
    features: [
      "100% Natural Biodegradable Jute",
      "Reinforced Cotton Rope / Webbing Handles",
      "Laminated / Unlaminated Interior Options",
      "Heavy Load Capacity (10kg - 30kg)",
    ],
    idealFor: "Retailers, Supermarkets, Commodity Packaging & Brands",
    image: "/assets/product_catalogs/p5.jpeg",
    gallery: [
      "/assets/product_catalogs/p5.jpeg",
      "/assets/product_catalogs/p7.jpeg",
      "/assets/product_catalogs/p2.jpeg",
    ],
    badge: "Eco Bestseller",
    specs: {
      material: "Natural Golden Jute (10x10 / 14x15 Weave)",
      gsm: "280 - 380 GSM",
      sizes: "Customized & Standard (Small, Medium, Large, Jumbo)",
      minOrder: "Flexible B2B Minimums",
    },
  },
  {
    id: "eco-friendly-tote-bags",
    name: "Eco-Friendly Tote Bags",
    category: "Eco Totes",
    shortDesc:
      "Reusable and environmentally conscious tote bags for businesses and everyday applications.",
    fullDesc:
      "Modern, minimalist, and durable tote bags designed for sustainable lifestyle brands and daily commercial usage. Made with natural plant fibers and cotton trims that provide long-lasting reuse and zero plastic footprint.",
    features: [
      "Lightweight yet High Tensile Strength",
      "Ergonomic Shoulder Length Handles",
      "Washable & Reusable for Years",
      "Low Carbon Footprint Production",
    ],
    idealFor: "Corporate Merchandising, Boutiques, Daily Grocery & Lifestyle",
    image: "/assets/product_catalogs/p8.jpeg",
    gallery: [
      "/assets/product_catalogs/p8.jpeg",
      "/assets/product_catalogs/p1.jpeg",
      "/assets/product_catalogs/p12.jpeg",
    ],
    badge: "Sustainable Choice",
    specs: {
      material: "Jute & Cotton Canvas Blend",
      gsm: "220 - 320 GSM",
      sizes: "15x16 in / 16x18 in / Custom",
      minOrder: "Bulk B2B Lots",
    },
  },
  {
    id: "custom-printed-jute-bags",
    name: "Custom Printed Jute Bags",
    category: "Custom Branding",
    shortDesc:
      "Customizable jute bags suitable for branding, promotional campaigns, corporate requirements and events.",
    fullDesc:
      "Elevate your brand with precision screen, transfer, or azo-free pigment printing on premium jute surfaces. We incorporate custom logos, multi-color patterns, colored side gussets, zip closures, and branded hangtags according to buyer artwork.",
    features: [
      "Azo-Free Eco-Friendly Inks",
      "Edge-to-Edge Gusset & Handle Customization",
      "Custom Pantone Color Matching",
      "Water-resistant Inner PP/Food-Grade Lining Available",
    ],
    idealFor: "Marketing Campaigns, Brand Giveaways, Hospitality & Trade Fairs",
    image: "/assets/product_catalogs/p3.jpeg",
    gallery: [
      "/assets/product_catalogs/p3.jpeg",
      "/assets/product_catalogs/p1.jpeg",
      "/assets/product_catalogs/p10.jpeg",
    ],
    badge: "Custom Branding",
    specs: {
      material: "Bleached / Natural Jute + Canvas Trim",
      gsm: "300 - 400 GSM",
      sizes: "Bespoke to Client Blueprint",
      minOrder: "Custom Batch Ready",
    },
  },
  {
    id: "cotton-bags",
    name: "Cotton Bags",
    category: "Cotton & Canvas",
    shortDesc:
      "Reusable cotton bags suitable for retail, promotional and business applications.",
    fullDesc:
      "Supplied directly from Indian cotton manufacturing hubs, these breathable, unbleached, and organic cotton bags provide an ultra-soft feel and premium look. Available in drawstring pouches, market shoppers, and canvas carryalls.",
    features: [
      "100% Pure Natural Cotton Canvas & Calico",
      "Soft Foldable Design for Easy Storage",
      "Available with Drawstrings or Shoulder Straps",
      "Machine Washable & Long Lasting",
    ],
    idealFor: "Fashion Brands, Cosmetics, Bakery/Dry Food & Promotional Kits",
    image: "/assets/product_catalogs/p6.jpeg",
    gallery: [
      "/assets/product_catalogs/p6.jpeg",
      "/assets/product_catalogs/p14.jpeg",
      "/assets/product_catalogs/p12.jpeg",
    ],
    badge: "100% Natural Cotton",
    specs: {
      material: "Organic / Unbleached Cotton Canvas",
      gsm: "140 - 350 GSM (Light to Heavy Duck)",
      sizes: "Drawstring, Pouch, Tote & Custom",
      minOrder: "Commercial Export Batches",
    },
  },
  {
    id: "sustainable-packaging-products",
    name: "Sustainable Packaging Products",
    category: "Eco Packaging",
    shortDesc:
      "Eco-friendly packaging solutions designed for businesses looking for sustainable alternatives.",
    fullDesc:
      "Replace single-use plastic in your supply chain with our range of sustainable packaging products. From natural jute hessian sacks, biodegradable wraps, kraft paper combinations, to eco-twine cords and protective pouches tailored for global cargo requirements.",
    features: [
      "100% Compostable & Biodegradable",
      "High Breathability Prevents Moisture Trapping",
      "Industrial Tear & Puncture Resistance",
      "Tailored for Bulk B2B Shipping & Protective Wrap",
    ],
    idealFor: "Exporters, Agricultural Packaging, E-Commerce & Green Logistics",
    image: "/assets/product_catalogs/p13.jpeg",
    gallery: [
      "/assets/product_catalogs/p13.jpeg",
      "/assets/product_catalogs/p9.jpeg",
      "/assets/product_catalogs/p2.jpeg",
    ],
    badge: "Zero Plastic",
    specs: {
      material: "Hessian Jute, Kraft, Biodegradable Fiber",
      gsm: "Varied according to application",
      sizes: "Custom Roll, Sacks & Sheet Sizes",
      minOrder: "Volume Based Supply",
    },
  },
  {
    id: "customized-bags-businesses-events",
    name: "Customized Bags for Businesses and Events",
    category: "Bespoke & Events",
    shortDesc:
      "Custom-designed bags tailored to business branding, events, promotional campaigns and specific customer requirements.",
    fullDesc:
      "End-to-end bespoke bag manufacturing for international conferences, luxury weddings, exhibitions, and corporate gift hampers. We accommodate custom shapes, pocket inserts, metallic button fastenings, premium leather/cotton handles, and specialized labels.",
    features: [
      "Full Design Consultation & Prototyping",
      "Custom Pockets, Zippers & Magnetic Snaps",
      "Premium Hardware & Stitching Accents",
      "Individual Barcode & Tagging for Global Retail",
    ],
    idealFor: "Conferences, Seminars, Luxury Gift Packaging & Retail Chains",
    image: "/assets/product_catalogs/p10.jpeg",
    gallery: [
      "/assets/product_catalogs/p10.jpeg",
      "/assets/product_catalogs/p4.jpeg",
      "/assets/product_catalogs/p15.jpeg",
      "/assets/product_catalogs/p7.jpeg",
    ],
    badge: "Tailored Solutions",
    specs: {
      material: "Jute, Juco (Jute+Cotton), Canvas, Cotton Duck",
      gsm: "Custom Engineered",
      sizes: "Tailored to Exact Dimensions",
      minOrder: "Event & Seasonal Lots",
    },
  },
];

// Why Choose Us Cards
const WHY_CHOOSE_US = [
  {
    icon: Award,
    title: "Quality Focused",
    description:
      "We focus on maintaining consistent product quality and reliable sourcing across every batch.",
  },
  {
    icon: Leaf,
    title: "Sustainable Products",
    description:
      "We promote eco-friendly and sustainable products designed for modern, conscious businesses.",
  },
  {
    icon: CheckCircle2,
    title: "Reliable Sourcing",
    description:
      "We connect international buyers with carefully selected, verified Indian manufacturers.",
  },
  {
    icon: Globe,
    title: "Global Export Solutions",
    description:
      "We support businesses looking to source Indian products with complete international trade coordination.",
  },
  {
    icon: Layers,
    title: "Customized Solutions",
    description:
      "Products, dimensions, printing, and packaging solutions tailored to your exact business specifications.",
  },
  {
    icon: Users,
    title: "Long-Term Relationships",
    description:
      "We believe in building lasting, transparent relationships with global customers and business partners.",
  },
];

// Export Process Steps
const EXPORT_STEPS = [
  {
    step: "01",
    title: "Product Selection",
    desc: "Identify suitable products, fabric grades, and exact specifications according to buyer requirements.",
    icon: ShoppingBag,
  },
  {
    step: "02",
    title: "Quality & Sourcing",
    desc: "Work with reliable Indian manufacturers and enforce stringent product quality standards.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Customization & Packaging",
    desc: "Provide customized branding, sizing, labeling, and export-compliant protective packaging solutions.",
    icon: Box,
  },
  {
    step: "04",
    title: "Global Export",
    desc: "Coordinate export documentation, port logistics, and reliably deliver products to international buyers.",
    icon: Truck,
  },
];

const Site2: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Quote Form State
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "Jute Bags",
    quantity: "500 - 2,000 units",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  // Handle sticky header scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter products
  const categories = ["All", "Jute Collection", "Eco Totes", "Custom Branding", "Cotton & Canvas", "Eco Packaging", "Bespoke & Events"];
  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  // Form submit handler
  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.phone.trim()) {
      setFormError("Please fill in your Name, Email, and Phone / WhatsApp number.");
      return;
    }
    setFormError("");
    setFormStatus("submitting");

    // Simulate clean submission
    setTimeout(() => {
      setFormStatus("success");
    }, 800);
  };

  // Generate WhatsApp Direct Inquiry Link
  const generateWhatsAppLink = (customProduct?: string) => {
    const p = customProduct || formState.product || "Export Products";
    const text = encodeURIComponent(
      `Hello Harshal Dhawle / Taraswini Global Exim,\n\nI am interested in sourcing:\n- Product: ${p}\n- Name: ${formState.name || "Prospective Buyer"}\n- Company: ${formState.company || "International Business"}\n\nPlease share export quotation and catalog details.`
    );
    return `https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${text}`;
  };

  // Quick inquire button from product card
  const handleQuickEnquire = (productName: string) => {
    setFormState((prev) => ({ ...prev, product: productName }));
    const element = document.getElementById("quote-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Open modal with primary image
  const handleOpenSpecs = (product: any) => {
    setSelectedProduct(product);
    setActiveModalImage(product.image);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1D241E] font-sans selection:bg-[#1B4332] selection:text-[#FAF7F2]">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-[#1B4332] text-[#E8D7C2] text-xs py-2 px-4 md:px-12 border-b border-[#2D6A4F]/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D4A373] animate-pulse"></span>
            <span className="font-medium tracking-wide">
              Connecting Indian Manufacturers with Global B2B Buyers
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-xs flex-wrap justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={12} className="text-[#D4A373]" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={12} className="text-[#D4A373]" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#D4A373] font-semibold hover:text-white transition-colors"
            >
              <MessageCircle size={13} />
              <span>WhatsApp Quick Quote</span>
            </a>
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-[#2D6A4F]">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-md bg-[#143627] hover:bg-[#E1306C] text-[#FAF7F2] transition-colors"
                title="Follow Taraswini Global Exim on Instagram"
                aria-label="Instagram"
              >
                <Instagram size={13} />
              </a>
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-md bg-[#143627] hover:bg-[#1877F2] text-[#FAF7F2] transition-colors"
                title="Follow Taraswini Global Exim on Facebook"
                aria-label="Facebook"
              >
                <Facebook size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-header shadow-sm py-3" : "bg-[#FAF7F2]/95 py-4 border-b border-[#E8D7C2]/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Official Brand Logo */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <div className="h-12 md:h-14 flex items-center">
              <img
                src={BUSINESS_INFO.logo}
                alt="Taraswini Global Exim Official Logo"
                className="h-11 md:h-13 w-auto object-contain rounded-xl shadow-sm border border-[#E8D7C2] group-hover:scale-105 transition-transform bg-white"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-[#1B4332] font-display leading-tight">
                Taraswini <span className="text-[#946A42]">Global Exim</span>
              </span>
              <span className="text-[10px] md:text-[11px] font-medium tracking-wider uppercase text-[#755132]">
                Exporting Quality, Building Trust
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-[#4A4036]">
            <a href="#home" className="hover:text-[#1B4332] transition-colors py-1">
              Home
            </a>
            <a href="#about" className="hover:text-[#1B4332] transition-colors py-1">
              About Us
            </a>
            <a href="#products" className="hover:text-[#1B4332] transition-colors py-1">
              Products
            </a>
            <a href="#why-choose-us" className="hover:text-[#1B4332] transition-colors py-1">
              Why Choose Us
            </a>
            <a href="#global-reach" className="hover:text-[#1B4332] transition-colors py-1">
              Global Reach
            </a>
            <a href="#process" className="hover:text-[#1B4332] transition-colors py-1">
              Export Process
            </a>
            <a href="#testimonials" className="hover:text-[#1B4332] transition-colors py-1">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-[#1B4332] transition-colors py-1">
              Contact Us
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#quote-section"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1B4332] hover:bg-[#143627] text-[#FAF7F2] text-xs md:text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <span>Get a Quote</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-[#F4ECE1] text-[#1B4332] hover:bg-[#E8D7C2] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#FAF7F2] border-b border-[#E8D7C2] px-6 py-6 shadow-xl"
            >
              <div className="flex flex-col gap-4 text-sm font-semibold text-[#3D2A1A]">
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-[#F4ECE1] transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-[#F4ECE1] transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-[#F4ECE1] transition-colors"
                >
                  Products
                </a>
                <a
                  href="#why-choose-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-[#F4ECE1] transition-colors"
                >
                  Why Choose Us
                </a>
                <a
                  href="#global-reach"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-[#F4ECE1] transition-colors"
                >
                  Global Reach
                </a>
                <a
                  href="#process"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-[#F4ECE1] transition-colors"
                >
                  Export Process
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-[#F4ECE1] transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-[#F4ECE1] transition-colors"
                >
                  Contact Us
                </a>

                <div className="pt-4 border-t border-[#E8D7C2] flex flex-col gap-3">
                  <a
                    href="#quote-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-3 rounded-xl bg-[#1B4332] text-[#FAF7F2] font-semibold text-sm shadow-md"
                  >
                    Request a Quote
                  </a>
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-3 rounded-xl bg-[#2D6A4F] text-white font-semibold text-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Harshal Dhawle
                  </a>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={BUSINESS_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 border border-[#E1306C]/30 text-[#E1306C] font-semibold text-xs flex items-center justify-center gap-2"
                    >
                      <Instagram size={16} />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={BUSINESS_INFO.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-[#1877F2]/10 border border-[#1877F2]/30 text-[#1877F2] font-semibold text-xs flex items-center justify-center gap-2"
                    >
                      <Facebook size={16} />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D7BC9E]/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#BCE0CE]/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF0E4] border border-[#D7BC9E]/70 text-[#755132] text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
                <Leaf size={14} className="text-[#2D6A4F]" />
                <span>Sustainable Indian Exports • Direct Manufacturer Sourcing</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#143627] font-display tracking-tight leading-[1.12] mb-6">
                Exporting Quality, <br />
                <span className="text-[#946A42]">Building Trust.</span>
              </h1>

              {/* Supporting Subheading */}
              <div className="text-xl md:text-2xl font-semibold text-[#2D6A4F] mb-4">
                Sustainable Products. Reliable Global Export Solutions.
              </div>

              {/* Business Description */}
              <p className="text-[#5A4B3D] text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                Taraswini Global Exim connects quality Indian manufacturers with international buyers, supplying high-grade eco-friendly products such as jute bags, reusable tote bags, cotton bags, and sustainable packaging to global markets.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
                <a
                  href="#products"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1B4332] hover:bg-[#143627] text-[#FAF7F2] font-semibold text-sm shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2.5 group"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#quote-section"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-[#F4ECE1] text-[#1B4332] border border-[#D7BC9E] font-semibold text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
                >
                  <span>Get a Quote</span>
                </a>
              </div>

              {/* Core Pillars Mini-Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8D7C2]/80 w-full">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E8D7C2]/60 flex items-center justify-center text-[#2D6A4F]">
                    <ShieldCheck size={18} />
                  </div>
                  <div className="text-xs font-semibold text-[#3D2A1A]">
                    Consistent Quality
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E8D7C2]/60 flex items-center justify-center text-[#2D6A4F]">
                    <Leaf size={18} />
                  </div>
                  <div className="text-xs font-semibold text-[#3D2A1A]">
                    100% Eco-Friendly
                  </div>
                </div>
                <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <div className="w-8 h-8 rounded-lg bg-[#E8D7C2]/60 flex items-center justify-center text-[#2D6A4F]">
                    <Globe size={18} />
                  </div>
                  <div className="text-xs font-semibold text-[#3D2A1A]">
                    Worldwide Logistics
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#F4ECE1]">
                <img
                  src="/assets/product_catalogs/p5.jpeg"
                  alt="Taraswini Global Exim Sustainable Jute and Cotton Bags"
                  className="w-full h-[420px] md:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Card - Direct B2B Assurance */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E8D7C2] shadow-lg">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-1">
                        <CheckCircle2 size={14} className="text-[#2D6A4F]" />
                        Export Grade Sourcing
                      </div>
                      <p className="text-xs text-[#5A4B3D]">
                        Natural Jute, Tote Bags, Cotton Bags & Customized Packaging tailored for international buyers.
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20products`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-[#2D6A4F] hover:bg-[#1B4332] text-white rounded-xl transition-colors shrink-0"
                      title="Direct WhatsApp Inquiry"
                    >
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[#1B4332] text-[#E8D7C2] px-4 py-2.5 rounded-2xl shadow-xl border-2 border-white text-xs font-bold flex items-center gap-2">
                <Sparkles size={14} className="text-[#D4A373]" />
                <span>Indian Manufacturer Direct</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 md:py-28 bg-[#F4ECE1]/60 border-y border-[#E8D7C2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          {/* Section Heading */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D7BC9E] text-[#755132] text-xs font-bold uppercase tracking-wider mb-3">
              <Compass size={13} className="text-[#2D6A4F]" />
              Company Overview
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143627] font-display tracking-tight leading-tight mb-6">
              About Taraswini Global Exim
            </h2>
            <p className="text-base md:text-lg text-[#4A4036] leading-relaxed mb-4">
              Taraswini Global Exim is a global trading company focused on delivering high-quality, eco-friendly and sustainable products from India to international markets.
            </p>
            <p className="text-base text-[#5A4B3D] leading-relaxed">
              We connect reliable Indian manufacturers with international buyers and provide efficient sourcing and export solutions tailored to different business requirements. Our focus is on quality, integrity, customer satisfaction, reliable supply, and long-term business relationships.
            </p>
          </div>

          {/* Mission, Vision & Strategic Approach Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 border border-[#E8D7C2] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#F4ECE1] text-[#1B4332] flex items-center justify-center mb-6 font-bold">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#143627] mb-3 font-display">
                Our Mission
              </h3>
              <p className="text-sm text-[#5A4B3D] leading-relaxed">
                To connect reliable Indian manufacturers with international buyers, expand into global markets, maintain consistent product quality, and build enduring, trust-driven customer relationships.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 border border-[#E8D7C2] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#FAF0E4] text-[#946A42] flex items-center justify-center mb-6 font-bold">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#143627] mb-3 font-display">
                Our Vision
              </h3>
              <p className="text-sm text-[#5A4B3D] leading-relaxed">
                To promote sustainable Indian products worldwide while creating a strong, dependable, and highly respected export enterprise recognized for integrity and excellence.
              </p>
            </div>

            {/* Global Business Approach */}
            <div className="bg-white rounded-2xl p-8 border border-[#E8D7C2] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#DCEFE6] text-[#2D6A4F] flex items-center justify-center mb-6 font-bold">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#143627] mb-3 font-display">
                Global Business Approach
              </h3>
              <p className="text-sm text-[#5A4B3D] leading-relaxed">
                We combine deep grassroots manufacturer relationships across India with professional export logistics, clear communication, transparent pricing, and rigorous quality benchmarks.
              </p>
            </div>
          </div>

          {/* 4 Core Value Cards */}
          <div className="pt-8">
            <h3 className="text-xl font-bold text-[#143627] mb-6 font-display">
              Core Principles Guiding Our Trade
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Quality */}
              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#D7BC9E]/60 card-hover-effect">
                <div className="w-10 h-10 rounded-lg bg-[#1B4332] text-[#FAF7F2] flex items-center justify-center mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="font-bold text-base text-[#143627] mb-2 font-display">
                  Quality
                </h4>
                <p className="text-xs text-[#5A4B3D] leading-relaxed">
                  Maintaining consistent product quality across all raw material grades and finished products.
                </p>
              </div>

              {/* Trust */}
              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#D7BC9E]/60 card-hover-effect">
                <div className="w-10 h-10 rounded-lg bg-[#946A42] text-[#FAF7F2] flex items-center justify-center mb-4">
                  <Users size={20} />
                </div>
                <h4 className="font-bold text-base text-[#143627] mb-2 font-display">
                  Trust
                </h4>
                <p className="text-xs text-[#5A4B3D] leading-relaxed">
                  Building transparent, dependable, and long-term business relationships with global buyers.
                </p>
              </div>

              {/* Sustainability */}
              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#D7BC9E]/60 card-hover-effect">
                <div className="w-10 h-10 rounded-lg bg-[#2D6A4F] text-[#FAF7F2] flex items-center justify-center mb-4">
                  <Leaf size={20} />
                </div>
                <h4 className="font-bold text-base text-[#143627] mb-2 font-display">
                  Sustainability
                </h4>
                <p className="text-xs text-[#5A4B3D] leading-relaxed">
                  Promoting 100% natural, biodegradable, and eco-friendly products that reduce global plastic reliance.
                </p>
              </div>

              {/* Global Reach */}
              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#D7BC9E]/60 card-hover-effect">
                <div className="w-10 h-10 rounded-lg bg-[#3D2A1A] text-[#FAF7F2] flex items-center justify-center mb-4">
                  <Globe size={20} />
                </div>
                <h4 className="font-bold text-base text-[#143627] mb-2 font-display">
                  Global Reach
                </h4>
                <p className="text-xs text-[#5A4B3D] leading-relaxed">
                  Connecting premier Indian manufactured goods with international markets and supply chains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0E4] border border-[#D7BC9E] text-[#755132] text-xs font-bold uppercase tracking-wider mb-3">
              <Package size={13} className="text-[#2D6A4F]" />
              Official Export Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143627] font-display tracking-tight">
              Our Products
            </h2>
            <p className="text-[#755132] text-base md:text-lg font-medium mt-2">
              Eco-Friendly & Sustainable Products for Global Markets
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#1B4332] text-white shadow-sm"
                    : "bg-[#F4ECE1] text-[#5A4B3D] hover:bg-[#E8D7C2]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeIn}
              className="bg-white rounded-3xl overflow-hidden border border-[#E8D7C2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Product Image Box */}
              <div className="relative h-64 bg-[#F4ECE1] overflow-hidden cursor-pointer" onClick={() => handleOpenSpecs(product)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <span className="absolute top-3 left-3 bg-[#1B4332]/90 backdrop-blur-md text-[#FAF7F2] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.badge}
                </span>

                {/* Quick Details Trigger */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenSpecs(product);
                  }}
                  className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-[#1B4332] p-2 px-3 rounded-xl shadow-md text-xs font-semibold flex items-center gap-1.5 backdrop-blur-sm transition-all"
                  title="View Specs & Gallery"
                >
                  <Eye size={13} />
                  <span>View Details</span>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#946A42] mb-1">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-[#143627] mb-3 font-display">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4B3D] leading-relaxed mb-6 flex-grow">
                  {product.shortDesc}
                </p>

                {/* Mini Features List */}
                <div className="space-y-1.5 mb-6 pt-4 border-t border-[#F4ECE1]">
                  {product.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#3D2A1A]">
                      <CheckCircle2 size={13} className="text-[#2D6A4F] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => handleQuickEnquire(product.name)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#1B4332] hover:bg-[#143627] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight size={13} />
                  </button>

                  <a
                    href={generateWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#FAF0E4] hover:bg-[#E8D7C2] text-[#2D6A4F] transition-colors"
                    title="Inquire on WhatsApp"
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Product Specification & Gallery Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 md:p-8 border border-[#E8D7C2] shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#F4ECE1] text-[#3D2A1A] hover:bg-[#E8D7C2] transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#946A42] mb-1">
                <Package size={14} />
                <span>{selectedProduct.category}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#143627] mb-3 font-display">
                {selectedProduct.name}
              </h3>

              {/* Main Featured Image in Modal */}
              <div className="rounded-2xl overflow-hidden mb-3 border border-[#E8D7C2] bg-[#F4ECE1] h-64 sm:h-72">
                <img
                  src={activeModalImage || selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
              </div>

              {/* Gallery Thumbnails */}
              {selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
                <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-1">
                  {selectedProduct.gallery.map((imgUrl: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setActiveModalImage(imgUrl)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        (activeModalImage || selectedProduct.image) === imgUrl
                          ? "border-[#1B4332] shadow-md scale-105"
                          : "border-[#E8D7C2] opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`${selectedProduct.name} sample ${idx + 1}`}
                        className="w-full h-full object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              )}

              <p className="text-sm text-[#5A4B3D] leading-relaxed mb-6">
                {selectedProduct.fullDesc}
              </p>

              {/* Specs Table */}
              <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#E8D7C2] mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#143627] mb-3">
                  Technical Specifications & Options
                </h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[#888] block mb-0.5">Material Composition</span>
                    <span className="font-semibold text-[#143627]">{selectedProduct.specs.material}</span>
                  </div>
                  <div>
                    <span className="text-[#888] block mb-0.5">GSM / Thickness</span>
                    <span className="font-semibold text-[#143627]">{selectedProduct.specs.gsm}</span>
                  </div>
                  <div>
                    <span className="text-[#888] block mb-0.5">Dimensions & Sizing</span>
                    <span className="font-semibold text-[#143627]">{selectedProduct.specs.sizes}</span>
                  </div>
                  <div>
                    <span className="text-[#888] block mb-0.5">Export Supply Mode</span>
                    <span className="font-semibold text-[#143627]">{selectedProduct.specs.minOrder}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#143627] mb-2">
                  Key Features & Advantages
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs text-[#3D2A1A]">
                  {selectedProduct.features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#2D6A4F] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#F4ECE1]">
                <button
                  onClick={() => {
                    handleQuickEnquire(selectedProduct.name);
                    setSelectedProduct(null);
                  }}
                  className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-[#1B4332] text-white font-semibold text-xs md:text-sm hover:bg-[#143627] transition-colors"
                >
                  Request Quotation for {selectedProduct.name}
                </button>
                <a
                  href={generateWhatsAppLink(selectedProduct.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#2D6A4F] text-white font-semibold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-[#1B4332] transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 md:py-28 bg-[#1B4332] text-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D6A4F]/60 border border-[#D4A373]/40 text-[#E8D7C2] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck size={13} className="text-[#D4A373]" />
              Reliability & Integrity
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
              Why Choose Taraswini Global Exim?
            </h2>
            <p className="text-sm md:text-base text-[#DCEFE6] leading-relaxed">
              We bridge the gap between world-class Indian craftsmanship and international commercial demands with transparent, dedicated export management.
            </p>
          </div>

          {/* 6 Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-3xl bg-[#143627]/80 border border-[#2D6A4F] hover:border-[#D4A373]/60 transition-all duration-300 hover:-translate-y-1 hover:bg-[#143627] flex flex-col"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#2D6A4F] text-[#D4A373] flex items-center justify-center mb-6 shadow-inner">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#DCEFE6] leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section id="global-reach" className="py-20 md:py-28 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0E4] border border-[#D7BC9E] text-[#755132] text-xs font-bold uppercase tracking-wider mb-3">
                <Globe size={13} className="text-[#2D6A4F]" />
                International Trade Network
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143627] font-display tracking-tight leading-tight mb-6">
                Connecting India With Global Markets
              </h2>
              <p className="text-base text-[#5A4B3D] leading-relaxed mb-6">
                Taraswini Global Exim aims to connect reliable Indian manufacturers with international buyers and expand sustainable Indian products into global markets.
              </p>
              <p className="text-sm text-[#5A4B3D] leading-relaxed mb-8">
                Whether you require Full Container Loads (FCL) or Loose Container Loads (LCL), our dedicated export desk coordinates seamless freight from premier Indian maritime gateways directly to your destination port.
              </p>

              {/* Sourcing & Shipping Strengths */}
              <div className="space-y-3 mb-8">
                <div className="p-4 rounded-xl bg-white border border-[#E8D7C2] flex items-start gap-3.5">
                  <Anchor size={20} className="text-[#2D6A4F] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-[#143627]">
                      Major Indian Seaport Connectivity
                    </div>
                    <div className="text-xs text-[#5A4B3D]">
                      Direct routing via Nhava Sheva (JNPT Mumbai), Mundra, Kolkata, and Chennai ports.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8D7C2] flex items-start gap-3.5">
                  <FileCheck size={20} className="text-[#2D6A4F] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-[#143627]">
                      Comprehensive Trade Documentation
                    </div>
                    <div className="text-xs text-[#5A4B3D]">
                      Certificate of Origin, Bill of Lading, Packing Lists, Fumigation & IncoTerms (FOB, CIF, CFR).
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#quote-section"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1B4332] text-white text-xs md:text-sm font-semibold hover:bg-[#143627] transition-all shadow-md"
              >
                <span>Discuss Sourcing for Your Region</span>
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Right Visual Graphic / Map Card */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#143627] p-8 md:p-10 text-white shadow-2xl border border-[#2D6A4F] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D6A4F]/30 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#2D6A4F]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#D4A373]"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DCEFE6]">
                      Export Hub: India
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#D4A373] bg-[#2D6A4F]/60 px-3 py-1 rounded-full">
                    Global Destinations
                  </span>
                </div>

                {/* Sourcing Connection Flow */}
                <div className="space-y-6 relative">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#D4A373] text-[#1B4332] flex items-center justify-center font-bold text-xs shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Grassroots Indian Sourcing
                      </h4>
                      <p className="text-xs text-[#DCEFE6] mt-0.5">
                        Selected Indian manufacturers specializing in pure jute fiber and cotton weaving.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#2D6A4F] text-[#FAF7F2] border border-[#D4A373] flex items-center justify-center font-bold text-xs shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Batch Quality Verification
                      </h4>
                      <p className="text-xs text-[#DCEFE6] mt-0.5">
                        Inspection of stitching, GSM, print resolution, and export carton durability.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#2D6A4F] text-[#FAF7F2] border border-[#D4A373] flex items-center justify-center font-bold text-xs shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Export Logistics & Port Dispatch
                      </h4>
                      <p className="text-xs text-[#DCEFE6] mt-0.5">
                        Customs clearance, shipping line booking, and swift container dispatch.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#D4A373] text-[#1B4332] flex items-center justify-center font-bold text-xs shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Delivery to International Buyers
                      </h4>
                      <p className="text-xs text-[#DCEFE6] mt-0.5">
                        Reliable arrival at overseas ports and warehouses with complete documentation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#2D6A4F] flex items-center justify-between text-xs text-[#DCEFE6]">
                  <span>IncoTerms: FOB • CIF • CFR • EXW</span>
                  <span className="text-[#D4A373] font-semibold">Reliable Global Supply</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Process Section */}
      <section id="process" className="py-20 md:py-28 bg-[#F4ECE1]/60 border-y border-[#E8D7C2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D7BC9E] text-[#755132] text-xs font-bold uppercase tracking-wider mb-3">
              <Truck size={13} className="text-[#2D6A4F]" />
              Step-by-Step Workflow
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143627] font-display tracking-tight mb-4">
              Our Export Process
            </h2>
            <p className="text-sm md:text-base text-[#5A4B3D] leading-relaxed">
              A transparent, streamlined 4-step workflow from initial buyer inquiry to international delivery.
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {EXPORT_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-7 border border-[#E8D7C2] shadow-sm hover:shadow-md transition-all flex flex-col relative group"
                >
                  {/* Step Number Top Banner */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-[#946A42] font-display">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF0E4] text-[#2D6A4F] flex items-center justify-center group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#143627] mb-2 font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A4B3D] leading-relaxed flex-grow">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Testimonials & Partnership Commitment */}
      <section id="testimonials" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0E4] border border-[#D7BC9E] text-[#755132] text-xs font-bold uppercase tracking-wider mb-3">
            <Users size={13} className="text-[#2D6A4F]" />
            Partnership Commitment
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143627] font-display tracking-tight mb-4">
            Customer Testimonials
          </h2>
          <p className="text-lg md:text-xl text-[#755132] font-serif italic mb-3">
            “Trusted relationships are at the heart of our business.”
          </p>
          <p className="text-xs sm:text-sm text-[#5A4B3D] max-w-xl mx-auto">
            We are dedicated to building long-term, transparent partnerships with global buyers through dependable communication, honest sourcing, and uncompromising product quality.
          </p>
        </div>

        {/* Structured Testimonial & Partnership Assurance Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 border border-[#E8D7C2] shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-[#D4A373] text-2xl font-serif mb-3">“</div>
              <p className="text-sm text-[#4A4036] leading-relaxed mb-6 italic">
                Our priority is establishing dependable supply channels for international businesses looking to transition away from plastic toward sustainable Indian jute and cotton products.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F4ECE1] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1B4332] text-[#E8D7C2] font-bold text-xs flex items-center justify-center overflow-hidden">
                <img src={BUSINESS_INFO.logo} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#143627]">
                  Taraswini Global Exim
                </div>
                <div className="text-[11px] text-[#888]">
                  Export Trade Commitment
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 border border-[#E8D7C2] shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-[#D4A373] text-2xl font-serif mb-3">“</div>
              <p className="text-sm text-[#4A4036] leading-relaxed mb-6 italic">
                Every buyer inquiry receives personal attention from our management. We ensure specifications, samples, and export terms are aligned before order dispatch.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F4ECE1] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#946A42] text-white font-bold text-xs flex items-center justify-center">
                HD
              </div>
              <div>
                <div className="text-xs font-bold text-[#143627]">
                  Harshal Dhawle
                </div>
                <div className="text-[11px] text-[#888]">
                  Operations & Buyer Relations
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Placeholder for New Partner Feedback */}
          <div className="bg-[#FAF7F2] rounded-3xl p-8 border-2 border-dashed border-[#D7BC9E] flex flex-col justify-between">
            <div>
              <div className="inline-block px-2.5 py-1 rounded-md bg-[#F4ECE1] text-[10px] font-bold text-[#755132] uppercase tracking-wider mb-4">
                Partner with Us
              </div>
              <h4 className="text-base font-bold text-[#143627] mb-2 font-display">
                Looking for a Reliable Sourcing Partner?
              </h4>
              <p className="text-xs text-[#5A4B3D] leading-relaxed mb-6">
                Start your trade relationship with Taraswini Global Exim today. Share your product specifications and let us deliver excellence.
              </p>
            </div>
            <a
              href="#quote-section"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#1B4332] hover:text-[#946A42] transition-colors"
            >
              <span>Connect with Our Export Desk</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Quote / Contact Form Section */}
      <section id="quote-section" className="py-20 md:py-28 bg-[#FAF0E4]/70 border-t border-[#E8D7C2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Details & Direct Callouts */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D7BC9E] text-[#755132] text-xs font-bold uppercase tracking-wider mb-3">
                  <Mail size={13} className="text-[#2D6A4F]" />
                  Direct B2B Inquiries
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#143627] font-display tracking-tight mb-4">
                  Looking for Reliable Export Solutions?
                </h2>
                <p className="text-base text-[#5A4B3D] leading-relaxed mb-8">
                  Tell us what you need and our team will help you find the right products, customized dimensions, and sourcing solution.
                </p>

                {/* Direct Contact Cards */}
                <div className="space-y-4 mb-8">
                  {/* Company Phone */}
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="p-4 rounded-2xl bg-white border border-[#E8D7C2] hover:border-[#946A42] transition-all flex items-center gap-4 group shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#1B4332] text-[#FAF7F2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-[#755132] font-medium">Main Office Line / WhatsApp</div>
                      <div className="text-base font-bold text-[#143627]">{BUSINESS_INFO.phoneFormatted}</div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="p-4 rounded-2xl bg-white border border-[#E8D7C2] hover:border-[#946A42] transition-all flex items-center gap-4 group shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#946A42] text-[#FAF7F2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-[#755132] font-medium">Direct Email Inquiries</div>
                      <div className="text-sm font-bold text-[#143627] break-all">{BUSINESS_INFO.email}</div>
                    </div>
                  </a>

                  {/* Contact Person */}
                  <div className="p-4 rounded-2xl bg-white border border-[#E8D7C2] flex items-center justify-between gap-4 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#2D6A4F] text-[#FAF7F2] flex items-center justify-center shrink-0">
                        <User size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-[#755132] font-medium">Contact Person</div>
                        <div className="text-base font-bold text-[#143627]">{BUSINESS_INFO.contactPerson}</div>
                        <div className="text-xs text-[#5A4B3D]">{BUSINESS_INFO.contactPersonPhoneFormatted}</div>
                      </div>
                    </div>
                    <a
                      href={`tel:${BUSINESS_INFO.contactPersonPhone}`}
                      className="p-2.5 rounded-xl bg-[#F4ECE1] text-[#1B4332] hover:bg-[#E8D7C2] transition-colors"
                      title="Call Harshal Dhawle"
                    >
                      <Phone size={16} />
                    </a>
                  </div>

                  {/* Social Media Connect Channels */}
                  <div className="p-4 rounded-2xl bg-white border border-[#E8D7C2] shadow-sm">
                    <div className="text-xs text-[#755132] font-medium mb-3">Connect On Official Channels</div>
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={BUSINESS_INFO.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-gradient-to-r hover:from-[#833ab4]/10 hover:via-[#fd1d1d]/10 hover:to-[#fcb045]/10 border border-[#E8D7C2] hover:border-[#E1306C] text-[#143627] hover:text-[#E1306C] transition-all group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#E1306C]/10 text-[#E1306C] group-hover:bg-[#E1306C] group-hover:text-white flex items-center justify-center transition-colors">
                          <Instagram size={17} />
                        </div>
                        <div>
                          <div className="text-[11px] text-[#755132]">Instagram</div>
                          <div className="text-xs font-bold text-[#143627] group-hover:text-[#E1306C]">@taraswiniglobal</div>
                        </div>
                      </a>
                      <a
                        href={BUSINESS_INFO.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#1877F2]/10 border border-[#E8D7C2] hover:border-[#1877F2] text-[#143627] hover:text-[#1877F2] transition-all group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#1877F2]/10 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white flex items-center justify-center transition-colors">
                          <Facebook size={17} />
                        </div>
                        <div>
                          <div className="text-[11px] text-[#755132]">Facebook</div>
                          <div className="text-xs font-bold text-[#143627] group-hover:text-[#1877F2]">Official Page</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="p-4 rounded-2xl bg-[#1B4332] text-[#E8D7C2] text-xs flex items-center gap-3">
                <Clock size={18} className="text-[#D4A373] shrink-0" />
                <span>We respond to international B2B inquiries within 24 business hours.</span>
              </div>
            </div>

            {/* Right Column: Interactive B2B Quote Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#E8D7C2] shadow-xl">
                <h3 className="text-2xl font-bold text-[#143627] font-display mb-2">
                  Request an Export Quotation
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4B3D] mb-6">
                  Provide your target quantity and specifications to receive a customized price proposal.
                </p>

                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center rounded-2xl bg-[#DCEFE6] border border-[#2D6A4F] text-[#143627]"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={28} />
                    </div>
                    <h4 className="text-xl font-bold font-display mb-2">
                      Inquiry Received Successfully!
                    </h4>
                    <p className="text-sm text-[#2D6A4F] mb-6 max-w-md mx-auto">
                      Thank you, <span className="font-semibold">{formState.name}</span>. Our export specialist Harshal Dhawle will review your requirements for <span className="font-semibold">{formState.product}</span> and contact you shortly.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={generateWhatsAppLink(formState.product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-[#1B4332] text-white text-xs font-semibold flex items-center gap-2"
                      >
                        <MessageCircle size={16} />
                        <span>Continue via WhatsApp</span>
                      </a>
                      <button
                        onClick={() => {
                          setFormStatus("idle");
                          setFormState({
                            name: "",
                            company: "",
                            email: "",
                            phone: "",
                            product: "Jute Bags",
                            quantity: "500 - 2,000 units",
                            message: "",
                          });
                        }}
                        className="px-6 py-3 rounded-xl bg-white border border-[#2D6A4F] text-[#1B4332] text-xs font-semibold"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} className="space-y-4">
                    {formError && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                        {formError}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#143627] uppercase tracking-wider mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8D7C2] text-sm text-[#1D241E] focus:outline-none focus:border-[#1B4332] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#143627] uppercase tracking-wider mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Global Imports Ltd."
                          value={formState.company}
                          onChange={(e) =>
                            setFormState({ ...formState, company: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8D7C2] text-sm text-[#1D241E] focus:outline-none focus:border-[#1B4332] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#143627] uppercase tracking-wider mb-1.5">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8D7C2] text-sm text-[#1D241E] focus:outline-none focus:border-[#1B4332] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#143627] uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+Country Code Phone"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({ ...formState, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8D7C2] text-sm text-[#1D241E] focus:outline-none focus:border-[#1B4332] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#143627] uppercase tracking-wider mb-1.5">
                          Product Interested In
                        </label>
                        <select
                          value={formState.product}
                          onChange={(e) =>
                            setFormState({ ...formState, product: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8D7C2] text-sm text-[#1D241E] focus:outline-none focus:border-[#1B4332] focus:bg-white transition-colors"
                        >
                          {PRODUCTS.map((p) => (
                            <option key={p.id} value={p.name}>
                              {p.name}
                            </option>
                          ))}
                          <option value="Custom Bag Specifications">
                            Other / Custom Specification
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#143627] uppercase tracking-wider mb-1.5">
                          Estimated Quantity
                        </label>
                        <select
                          value={formState.quantity}
                          onChange={(e) =>
                            setFormState({ ...formState, quantity: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8D7C2] text-sm text-[#1D241E] focus:outline-none focus:border-[#1B4332] focus:bg-white transition-colors"
                        >
                          <option value="500 - 1,000 units">500 - 1,000 units</option>
                          <option value="1,000 - 5,000 units">1,000 - 5,000 units</option>
                          <option value="5,000 - 20,000 units">5,000 - 20,000 units</option>
                          <option value="Full Container Load (FCL)">Full Container Load (20ft / 40ft FCL)</option>
                          <option value="Custom Requirement">Custom Requirement / Sample Request</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#143627] uppercase tracking-wider mb-1.5">
                        Message / Custom Requirements
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Please specify bag dimensions, print requirements, destination port, or specific questions..."
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8D7C2] text-sm text-[#1D241E] focus:outline-none focus:border-[#1B4332] focus:bg-white transition-colors resize-none"
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#1B4332] hover:bg-[#143627] text-[#FAF7F2] font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        {formStatus === "submitting" ? (
                          <span>Processing...</span>
                        ) : (
                          <>
                            <span>Send Quotation Request</span>
                            <Send size={15} />
                          </>
                        )}
                      </button>

                      <a
                        href={generateWhatsAppLink(formState.product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                      >
                        <MessageCircle size={16} />
                        <span>Send via WhatsApp</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#143627] text-[#FAF7F2] pt-16 pb-12 border-t border-[#2D6A4F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2D6A4F]/60">
            {/* Column 1: Brand & Bio */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="bg-white p-1.5 rounded-xl shadow-md border border-[#2D6A4F] shrink-0">
                  <img
                    src={BUSINESS_INFO.logo}
                    alt="Taraswini Global Exim Official Logo"
                    className="h-10 md:h-12 w-auto object-contain rounded-md"
                  />
                </div>
                <div>
                  <span className="text-xl font-extrabold text-white font-display block leading-tight">
                    Taraswini Global Exim
                  </span>
                  <span className="text-xs text-[#D4A373] font-medium">
                    “Exporting Quality, Building Trust”
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#DCEFE6] leading-relaxed mb-6">
                A dedicated Indian export-import enterprise supplying premium jute bags, eco-friendly tote bags, cotton bags, and sustainable packaging products to global businesses.
              </p>
              <div className="flex items-center gap-3 text-xs text-[#D4A373] font-medium mb-5">
                <MapPin size={14} />
                <span>India • Global Export Distribution</span>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-[#2D6A4F]/60">
                <span className="text-[11px] font-bold text-[#D4A373] uppercase tracking-wider block mb-2.5">
                  Follow Our Socials
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={BUSINESS_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1B4332] hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] text-white border border-[#2D6A4F] hover:border-transparent text-xs font-semibold transition-all duration-300 shadow-sm"
                    aria-label="Follow Taraswini Global Exim on Instagram"
                  >
                    <Instagram size={14} />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1B4332] hover:bg-[#1877F2] text-white border border-[#2D6A4F] hover:border-[#1877F2] text-xs font-semibold transition-all duration-300 shadow-sm"
                    aria-label="Follow Taraswini Global Exim on Facebook"
                  >
                    <Facebook size={14} />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Navigation Links */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4A373] mb-4 font-display">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs text-[#DCEFE6]">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#why-choose-us" className="hover:text-white transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#global-reach" className="hover:text-white transition-colors">
                    Global Reach
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-white transition-colors">
                    Export Process
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Products Quick Index */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4A373] mb-4 font-display">
                Products
              </h4>
              <ul className="space-y-2.5 text-xs text-[#DCEFE6]">
                {PRODUCTS.map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => handleQuickEnquire(p.name)}
                      className="hover:text-white transition-colors text-left"
                    >
                      {p.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Shortcuts */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4A373] mb-4 font-display">
                Contact Desk
              </h4>
              <div className="space-y-3 text-xs text-[#DCEFE6]">
                <div>
                  <span className="text-[#8FCAB0] block text-[11px]">Direct Phone & WhatsApp:</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="font-bold text-white hover:text-[#D4A373] transition-colors"
                  >
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                </div>

                <div>
                  <span className="text-[#8FCAB0] block text-[11px]">Email:</span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="font-bold text-white hover:text-[#D4A373] transition-colors break-all"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>

                <div>
                  <span className="text-[#8FCAB0] block text-[11px]">Contact Person:</span>
                  <div className="font-bold text-white">
                    {BUSINESS_INFO.contactPerson} ({BUSINESS_INFO.contactPersonPhoneFormatted})
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#2D6A4F] text-white font-semibold hover:bg-[#25D366] transition-colors"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 rounded-lg bg-[#2D6A4F] text-white hover:bg-[#E1306C] transition-colors"
                    title="Instagram"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href={BUSINESS_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 rounded-lg bg-[#2D6A4F] text-white hover:bg-[#1877F2] transition-colors"
                    title="Facebook"
                    aria-label="Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8FCAB0]">
            <div>
              © 2026 <span className="text-white font-semibold">Taraswini Global Exim</span>. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <a
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <Instagram size={13} />
                  <span>Instagram</span>
                </a>
                <span>•</span>
                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <Facebook size={13} />
                  <span>Facebook</span>
                </a>
              </div>
              <span className="hidden sm:inline">|</span>
              <span>Sourcing & Export from India</span>
              <a href="#home" className="hover:text-white transition-colors">
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
        aria-label="Chat on WhatsApp with Taraswini Global Exim"
      >
        <MessageCircle size={26} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out group-hover:ml-2 text-xs font-bold">
          Chat with Us
        </span>
      </a>
    </div>
  );
};

export default Site2;
