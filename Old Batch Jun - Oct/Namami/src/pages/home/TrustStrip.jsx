import { Leaf, Palette, DollarSign, Package, Globe } from "lucide-react";
import ScrollReveal from "../../components/ui/ScrollReveal";
import { useTranslation } from "../../hooks/useTranslation";

const icons = [Leaf, Palette, DollarSign, Package, Globe];
const keys = [
  "trustStrip.eco",
  "trustStrip.branding",
  "trustStrip.pricing",
  "trustStrip.moq",
  "trustStrip.export",
];

export default function TrustStrip() {
  const { t } = useTranslation();

  const items = keys.map((key, i) => ({ icon: icons[i], text: t(key) }));

  return (
    <section className="bg-[#12372A] py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 pb-1">
          {items.map(({ icon: Icon, text }) => (
            <ScrollReveal key={text}>
              <div className="flex items-center gap-3 text-[#F8F7F2] whitespace-nowrap">
                <Icon size={18} className="text-[#A8C3A0]" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
