import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../../components/ui/ScrollReveal";
import SectionHeading from "../../components/ui/SectionHeading";
import TestimonialCard from "../../components/ui/TestimonialCard";
import testimonials from "../../data/testimonials";
import { useTranslation } from "../../hooks/useTranslation";

export default function TestimonialsPreview() {
  const { t } = useTranslation();
  const preview = testimonials.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t("testimonials.eyebrow")}
            title={t("testimonials.title")}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {preview.map((testimonial) => (
            <ScrollReveal key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-10">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-forest hover:text-forest-deep font-semibold transition-colors"
            >
              {t("testimonials.viewAll")}
              <ArrowRight size={18} />
            </Link>
          </div>
          <p className="text-xs text-charcoal/50 text-center mt-4">
            {t("testimonials.note")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
