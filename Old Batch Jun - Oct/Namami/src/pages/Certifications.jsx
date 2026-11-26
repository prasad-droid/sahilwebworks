import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import certifications from '../data/certifications';
import CertificationCard from '../components/ui/CertificationCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import { useTranslation } from '../hooks/useTranslation';

export default function Certifications() {
  const { t } = useTranslation();

  const translatedQualityPoints = t('certificationsPage.qualityPoints');

  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-[#12372A] h-[40vh] flex items-center justify-center text-white">
        <div className="text-center px-6">
          <h1 className="font-[Cormorant_Garamond] text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            {t('certificationsPage.heroTitle')}
          </h1>
          <p className="text-[#A8C3A0] text-lg md:text-xl tracking-wide">
            {t('certificationsPage.heroSub')}
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Standards"
            title={t('certificationsPage.subtitle')}
            subtitle={t('certificationsPage.heroSub')}
          />
        </ScrollReveal>

        {/* Disclaimer */}
        <ScrollReveal delay={100}>
          <div className="bg-[#E8DDC8]/30 rounded-xl p-6 mb-12">
            <p className="text-sm text-[#202522]/70 text-center leading-relaxed">
              {t('certificationsPage.disclaimer')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.id} delay={index * 100}>
              <CertificationCard cert={cert} />
            </ScrollReveal>
          ))}
        </div>

        {/* Quality Promise */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#A8C3A0]/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={28} className="text-[#1F4D3A]" />
                  <h2 className="font-[Cormorant_Garamond] text-3xl font-semibold text-[#12372A]">
                    {t('certificationsPage.qualityTitle')}
                  </h2>
                </div>
                <p className="text-[#202522]/70 leading-relaxed mb-6">
                  {t('certificationsPage.qualityDesc1')}
                </p>
                <p className="text-[#202522]/70 leading-relaxed">
                  {t('certificationsPage.qualityDesc2')}
                </p>
              </div>
              <div>
                <div className="space-y-3">
                  {Array.isArray(translatedQualityPoints) && translatedQualityPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#1F4D3A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[#202522]/70">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <ScrollReveal>
          <div className="bg-[#1F4D3A] rounded-2xl p-12 text-center text-white">
            <h2 className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-semibold mb-4">
              {t('certificationsPage.ctaTitle')}
            </h2>
            <p className="text-[#A8C3A0] mb-8 max-w-2xl mx-auto">
              {t('certificationsPage.ctaDesc')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1F4D3A] px-8 py-3 rounded-lg font-medium hover:bg-[#F8F7F2] transition-colors"
            >
              {t('certificationsPage.cta')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
