import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Shield, Palette, Globe } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import assets from "../../data/assets";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" },
});

const trustIcons = [Leaf, Shield, Palette, Globe];
const trustKeys = ["hero.trust1", "hero.trust2", "hero.trust3", "hero.trust4"];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${assets.products[0]})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#12372A]/80 to-[#1F4D3A]/60" />

      {/* Content */}
      <div className="relative z-10 text-white max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.2)}
          className="uppercase tracking-[0.25em] text-[#A8C3A0] text-sm font-medium mb-6"
        >
          {t("hero.eyebrow")}
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          {...fadeUp(0.4)}
          className="font-heading text-5xl md:text-7xl font-bold leading-tight"
        >
          {t("hero.heading1")}
          <br />
          {t("hero.heading2")}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.6)}
          className="text-xl text-[#F8F7F2]/90 max-w-2xl mx-auto mt-6"
        >
          {t("hero.subheading")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.8)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Link
            to="/quote"
            className="bg-white text-[#12372A] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#A8C3A0] transition-colors duration-300"
          >
            {t("hero.cta1")}
          </Link>
          <Link
            to="/products"
            className="border border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
          >
            {t("hero.cta2")}
          </Link>
        </motion.div>

        {/* Trust Strip */}
        <motion.div
          {...fadeUp(1)}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-14 text-sm text-[#F8F7F2]/80"
        >
          {trustKeys.map((key, i) => (
            <span key={key} className="flex items-center gap-2">
              {(() => { const Icon = trustIcons[i]; return <Icon size={16} className="text-[#A8C3A0]" />; })()}
              {t(key)}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Floating Eco Badge */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 right-8 md:right-16 z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex items-center gap-3 text-white shadow-xl"
      >
        <Leaf size={24} className="text-[#A8C3A0]" />
        <span className="font-heading font-semibold text-sm">
          {t("hero.ecoBadge")}
        </span>
      </motion.div>
    </section>
  );
}
