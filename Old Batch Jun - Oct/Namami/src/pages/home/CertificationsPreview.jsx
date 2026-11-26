import ScrollReveal from "../../components/ui/ScrollReveal";
import SectionHeading from "../../components/ui/SectionHeading";
import CertificationCard from "../../components/ui/CertificationCard";
import certifications from "../../data/certifications";
import { useTranslation } from "../../hooks/useTranslation";

export default function CertificationsPreview() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t("certifications.eyebrow")}
            title={t("certifications.title")}
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-14">
          {certifications.map((cert) => (
            <ScrollReveal key={cert.id}>
              <CertificationCard cert={cert} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-sm text-charcoal/50 italic text-center mt-8">
            {t("certifications.disclaimer")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
