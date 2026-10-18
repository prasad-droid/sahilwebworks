import {
  ShoppingBag,
  Building2,
  Shirt,
  ShoppingCart,
  Hotel,
  Coffee,
  CalendarDays,
  Heart,
  GraduationCap,
  Package,
} from "lucide-react";
import ScrollReveal from "../../components/ui/ScrollReveal";
import SectionHeading from "../../components/ui/SectionHeading";
import industries from "../../data/industries";
import { useTranslation } from "../../hooks/useTranslation";

const iconMap = {
  ShoppingBag,
  Building2,
  Shirt,
  ShoppingCart,
  Hotel,
  Coffee,
  CalendarDays,
  Heart,
  GraduationCap,
  Package,
};

export default function TargetIndustries() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t("targetIndustries.eyebrow")}
            title={t("targetIndustries.title")}
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-14">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] || Package;
            return (
              <ScrollReveal key={industry.id}>
                <div className="bg-offwhite rounded-xl p-6 text-center hover:shadow-md transition group cursor-default h-full">
                  <Icon
                    size={36}
                    className="text-forest mb-3 group-hover:text-sage transition mx-auto"
                  />
                  <h3 className="font-heading text-lg font-semibold text-charcoal">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-charcoal/60 mt-2">
                    {industry.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="bg-beige/50 rounded-xl p-6 text-center mt-10">
            <p className="font-heading text-xl text-forest-deep">
              {t("targetIndustries.highlight")}
            </p>
            <p className="text-sm text-charcoal/70 mt-3">
              {t("targetIndustries.highlightDesc")}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
