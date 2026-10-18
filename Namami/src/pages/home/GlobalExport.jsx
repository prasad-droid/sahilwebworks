import { Link } from "react-router-dom";
import { Factory, Ship, FileCheck, CheckCircle } from "lucide-react";
import ScrollReveal from "../../components/ui/ScrollReveal";
import SectionHeading from "../../components/ui/SectionHeading";
import { useTranslation } from "../../hooks/useTranslation";
import worldMap from "../../assets/world.svg";

const icons = [Factory, Ship, FileCheck, CheckCircle];

const regions = [
  { label: "Europe", top: "18%", left: "50%", size: "w-2.5 h-2.5" },
  { label: "North America", top: "20%", left: "20%", size: "w-2.5 h-2.5" },
  { label: "Middle East", top: "39%", left: "60%", size: "w-2.5 h-2.5" },
  { label: "Australia", top: "75%", left: "88%", size: "w-2.5 h-2.5" },
  { label: "Africa", top: "40%", left: "52%", size: "w-2.5 h-2.5" },
];

export default function GlobalExport() {
  const { t } = useTranslation();

  const featureTitles = t("globalExport.features");
  const features = [
    { icon: Factory, title: Array.isArray(featureTitles) ? featureTitles[0] : "Indian Manufacturing" },
    { icon: Ship, title: Array.isArray(featureTitles) ? featureTitles[1] : "Global Shipping" },
    { icon: FileCheck, title: Array.isArray(featureTitles) ? featureTitles[2] : "Export Documentation" },
    { icon: CheckCircle, title: Array.isArray(featureTitles) ? featureTitles[3] : "Quality Assured" },
  ];

  return (
    <section className="py-24 bg-[#12372A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t("globalExport.eyebrow")}
            title={t("globalExport.title")}
            light
          />
          <p className="text-center text-[#F8F7F2]/70 max-w-3xl mx-auto mt-6 leading-relaxed">
            {t("globalExport.description")}
          </p>
        </ScrollReveal>

        {/* World Map Visual */}
        <ScrollReveal>
          <div className="relative mt-16 mx-auto max-w-4xl aspect-[2/1] rounded-3xl bg-[#1F4D3A]/60 border border-[#A8C3A0]/10 overflow-hidden">
            {/* World Map */}
            <img
              src={worldMap}
              alt="World map showing export regions"
              className="absolute inset-0 w-full h-full object-contain opacity-30"
            />

            {/* Region dots */}
            {regions.map((region) => (
              <div
                key={region.label}
                className="absolute group cursor-default z-10"
                style={{ top: region.top, left: region.left }}
              >
                <div
                  className={`${region.size} rounded-full bg-[#A8C3A0]/70 shadow-[0_0_10px_rgba(168,195,160,0.5)]`}
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#F8F7F2]/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
                  {region.label}
                </span>
              </div>
            ))}

            {/* India — pulsing dot */}
            <div
              className="absolute z-10"
              style={{ top: "41%", left: "70%" }}
            >
              <span className="absolute -top-5 left-4 text-xs font-medium text-[#A8C3A0] whitespace-nowrap">
                India
              </span>
              <span className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-[#A8C3A0]/20 animate-ping" />
              <div className="relative w-4 h-4 rounded-full bg-[#A8C3A0] shadow-[0_0_16px_rgba(168,195,160,0.6)]" />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#12372A]/40" />
          </div>
        </ScrollReveal>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {features.map(({ icon: Icon, title }) => (
            <ScrollReveal key={title}>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <Icon size={32} className="text-[#A8C3A0] mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg">{title}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center mt-16">
            <p className="text-[#F8F7F2]/80 text-lg mb-6">
              {t("globalExport.ctaQuestion")}
            </p>
            <Link
              to="/quote"
              className="inline-block bg-white text-[#12372A] px-8 py-3 rounded-lg font-semibold hover:bg-[#A8C3A0] transition"
            >
              {t("globalExport.cta")}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
