import {
  DollarSign,
  Tag,
  Package,
  Leaf,
  ShieldCheck,
  Clock,
  FileText,
  MessageCircle,
} from "lucide-react";
import ScrollReveal from "../../components/ui/ScrollReveal";
import SectionHeading from "../../components/ui/SectionHeading";
import { useTranslation } from "../../hooks/useTranslation";

const icons = [DollarSign, Tag, Package, Leaf, ShieldCheck, Clock, FileText, MessageCircle];

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const reasons = t("whyChooseUs.reasons").map((reason, i) => ({
    icon: icons[i],
    title: reason.title,
    description: reason.description,
  }));

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={t("whyChooseUs.eyebrow")}
          title={t("whyChooseUs.title")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {reasons.map(({ icon: Icon, title, description }) => (
            <ScrollReveal key={title}>
              <div className="bg-[#F8F7F2] rounded-xl p-6 hover:shadow-lg transition group h-full">
                <div className="w-12 h-12 bg-[#1F4D3A]/10 text-[#1F4D3A] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1F4D3A] group-hover:text-white transition">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#202522]">
                  {title}
                </h3>
                <p className="text-sm text-[#202522]/60 mt-2">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
