import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "../../components/ui/ScrollReveal";
import SectionHeading from "../../components/ui/SectionHeading";
import products from "../../data/products";
import { useTranslation } from "../../hooks/useTranslation";

const formatValue = (val) => {
  if (Array.isArray(val)) return val.join(", ");
  return val;
};

const specKeys = [
  "material",
  "source",
  "gsm",
  "form",
  "sizes",
  "colors",
  "handleTypes",
  "printingOptions",
  "closureType",
  "moisture",
  "usage",
  "moq",
  "shelfLife",
  "customizationOptions",
  "packaging",
  "productionTime",
];

export default function ProductSpecs() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const activeProduct = products[activeTab];

  const specLabels = specKeys.reduce((acc, key) => {
    acc[key] = t(`specs.labels.${key}`);
    return acc;
  }, {});

  return (
    <section className="py-24 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={t("specs.eyebrow")}
          title={t("specs.title")}
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mt-14 mb-12">
          {products.map((product, idx) => (
            <button
              key={product.slug}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2.5 rounded-lg font-medium transition ${
                activeTab === idx
                  ? "bg-[#1F4D3A] text-white"
                  : "bg-white text-[#202522] border border-[#E8DDC8]"
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {Object.entries(activeProduct.specs).map(([key, value], idx) => (
                <div
                  key={key}
                  className={`grid grid-cols-1 md:grid-cols-[260px_1fr] border-b border-[#E8DDC8]/60 last:border-b-0 ${
                    idx % 2 === 0 ? "bg-white" : "bg-[#F8F7F2]"
                  }`}
                >
                  <span className="px-6 py-4 font-medium text-[#202522]/70 text-sm">
                    {specLabels[key]}
                  </span>
                  <span className="px-6 py-4 text-[#202522] text-sm">
                    {formatValue(value)}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                to="/quote"
                className="bg-[#1F4D3A] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#12372A] transition"
              >
                {t("specs.cta")}
              </Link>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#1F4D3A] text-[#1F4D3A] px-6 py-2.5 rounded-lg font-medium hover:bg-[#1F4D3A] hover:text-white transition flex items-center gap-2"
              >
                <MessageCircle size={16} />
                {t("specs.whatsapp")}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
