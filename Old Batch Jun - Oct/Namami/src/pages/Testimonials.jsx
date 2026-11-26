import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import testimonials from '../data/testimonials';
import TestimonialCard from '../components/ui/TestimonialCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import { useTranslation } from '../hooks/useTranslation';

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-[#12372A] h-[40vh] flex items-center justify-center text-white">
        <div className="text-center px-6">
          <h1 className="font-[Cormorant_Garamond] text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            {t('testimonialsPage.heroTitle')}
          </h1>
          <p className="text-[#A8C3A0] text-lg md:text-xl tracking-wide">
            {t('testimonialsPage.heroSub')}
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Disclaimer */}
        <ScrollReveal>
          <div className="bg-[#E8DDC8]/50 rounded-xl p-4 text-center mb-12">
            <p className="text-sm text-[#202522]/70">
              {t('testimonialsPage.note')}
            </p>
          </div>
        </ScrollReveal>

        <SectionHeading
          eyebrow="Client Voices"
          title="Trusted by Businesses Worldwide"
          subtitle="Hear from our partners across 15+ countries"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 100}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <ScrollReveal>
          <div className="bg-[#F8F7F2] rounded-2xl p-12 text-center border border-[#E8DDC8]/30">
            <h2 className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-semibold text-[#12372A] mb-4">
              {t('testimonialsPage.ctaTitle')}
            </h2>
            <p className="text-[#202522]/70 mb-8 max-w-2xl mx-auto">
              {t('testimonialsPage.heroSub')}
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#1F4D3A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#12372A] transition-colors"
            >
              {t('testimonialsPage.cta')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
