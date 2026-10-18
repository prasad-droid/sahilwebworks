import { Link } from "react-router-dom";
import ScrollReveal from "../../components/ui/ScrollReveal";
import SectionHeading from "../../components/ui/SectionHeading";
import { useTranslation } from "../../hooks/useTranslation";

export default function RFQPreview() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-forest text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t("rfqPreview.eyebrow")}
            title={t("rfqPreview.title")}
            light
          />

          <p className="text-white/80 max-w-2xl mx-auto mt-6">
            {t("rfqPreview.subtitle")}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 text-left">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder={t("rfqPreview.placeholder1")}
                  className="bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-sage"
                />
                <input
                  type="email"
                  placeholder={t("rfqPreview.placeholder2")}
                  className="bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-sage"
                />
                <input
                  type="tel"
                  placeholder={t("rfqPreview.placeholder3")}
                  className="bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-sage"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="bg-white/10 border border-white/20 text-white/50 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-sage">
                  <option value="" disabled selected>
                    {t("rfqPreview.categoryLabel")}
                  </option>
                  <option value="textile">{t("rfqPreview.categoryTextile")}</option>
                  <option value="dehydrated">{t("rfqPreview.categoryDehydrated")}</option>
                </select>
                <input
                  type="number"
                  placeholder={t("rfqPreview.quantity")}
                  className="bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-sage"
                />
              </div>

              <textarea
                rows={4}
                placeholder={t("rfqPreview.messagePlaceholder")}
                className="bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-sage resize-none"
              />

              <div className="text-center pt-2">
                <Link
                  to="/quote"
                  className="inline-block bg-white text-forest-deep hover:bg-sage px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  {t("rfqPreview.cta")}
                </Link>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
