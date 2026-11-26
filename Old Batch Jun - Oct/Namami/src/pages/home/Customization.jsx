import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import ScrollReveal from "../../components/ui/ScrollReveal";
import SectionHeading from "../../components/ui/SectionHeading";
import { useTranslation } from "../../hooks/useTranslation";
import assets from "../../data/assets";

export default function Customization() {
  const { t } = useTranslation();

  const options = t("customization.options");

  return (
    <section className="py-24 bg-[#1F4D3A] text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Content */}
        <ScrollReveal>
          <div>
            <SectionHeading
              eyebrow={t("customization.eyebrow")}
              title={t("customization.title")}
              subtitle={t("customization.subtitle")}
              light
            />

            <div className="grid grid-cols-2 gap-3 mt-10">
              {options.map((option) => (
                <div key={option} className="flex items-center gap-3">
                  <Check size={18} className="text-[#A8C3A0] shrink-0" />
                  <span className="text-[#F8F7F2]/90 text-sm">{option}</span>
                </div>
              ))}
            </div>

            <Link
              to="/quote"
              className="inline-block bg-white text-[#12372A] px-8 py-3 rounded-lg font-semibold hover:bg-[#A8C3A0] transition mt-10"
            >
              {t("customization.cta")}
            </Link>
          </div>
        </ScrollReveal>

        {/* Right — Image */}
        <ScrollReveal>
          <div className="relative">
            <div className="absolute -inset-3 bg-[#A8C3A0]/20 rounded-3xl" />
            <img
              src={assets.products[7]}
              alt="Customized printed bags"
              className="relative rounded-2xl w-full h-auto object-cover shadow-2xl border-2 border-[#A8C3A0]/30"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
