import { Link } from "react-router-dom";
import ScrollReveal from "../../components/ui/ScrollReveal";
import SectionHeading from "../../components/ui/SectionHeading";
import { useTranslation } from "../../hooks/useTranslation";
import assets from "../../data/assets";

export default function AboutPreview() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <ScrollReveal>
          <div className="relative">
            {/* Decorative sage circle */}
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#A8C3A0]/30 rounded-full blur-xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#A8C3A0]/30">
              <img
                src={assets.products[3]}
                alt="Natural jute materials"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Content Side */}
        <ScrollReveal>
          <div>
            <SectionHeading
              eyebrow={t("aboutPreview.eyebrow")}
              title={t("aboutPreview.title")}
              subtitle=""
            />

            <p className="text-[#202522]/80 leading-relaxed mt-8">
              {t("aboutPreview.p1")}
            </p>

            <p className="text-[#202522]/80 leading-relaxed mt-4">
              {t("aboutPreview.p2")}
            </p>

            <Link
              to="/about"
              className="inline-block bg-[#1F4D3A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#12372A] transition-colors duration-300 mt-8"
            >
              {t("aboutPreview.cta")}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
