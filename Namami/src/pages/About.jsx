import { Link } from 'react-router-dom';
import { Target, Eye, Leaf, Shield, Handshake, Lightbulb, Factory, Clock, Globe, Users, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import { useTranslation } from '../hooks/useTranslation';
import assets from '../data/assets';

const iconMap = [Leaf, Shield, Handshake, Lightbulb];

export default function About() {
  const { t } = useTranslation();
  const whatsappUrl = `https://wa.me/918097939724?text=${encodeURIComponent('Hello Namami Internationals, I would like to know more about your company and products.')}`;

  const translatedValues = t('aboutPage.values');
  const translatedStats = t('aboutPage.stats');
  const statsIcons = [Factory, Clock, Globe, Users];

  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-[#12372A] h-[50vh] flex items-center justify-center text-white">
        <div className="text-center px-6">
          <h1 className="font-[Cormorant_Garamond] text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            {t('aboutPage.heroTitle')}
          </h1>
          <p className="text-[#A8C3A0] text-lg md:text-xl tracking-wide">
            {t('aboutPage.heroSub')}
          </p>
        </div>
      </section>

      {/* Section 1: Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={assets.products[2]}
                  alt="Indian artisans at work"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <span className="inline-block uppercase tracking-[0.25em] text-xs font-semibold mb-4 text-[#A8C3A0]">
                  {t('aboutPage.storyEyebrow')}
                </span>
                <h2 className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-semibold text-[#202522] mb-6">
                  {t('aboutPage.storyTitle')}
                </h2>
                <div className="space-y-4 text-[#202522]/70 leading-relaxed">
                  <p>
                    {t('aboutPage.storyP1')}
                  </p>
                  <p>
                    {t('aboutPage.storyP2')}
                  </p>
                  <p>
                    {t('aboutPage.storyP3')}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2: Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={t('aboutPage.missionVisionEyebrow')}
            title={t('aboutPage.missionVisionTitle')}
            subtitle={t('aboutPage.missionVisionSub')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-[#F8F7F2] rounded-2xl p-8 border border-[#E8DDC8]/50 h-full">
                <div className="w-14 h-14 bg-[#1F4D3A]/10 rounded-xl flex items-center justify-center mb-6">
                  <Target size={28} className="text-[#1F4D3A]" />
                </div>
                <h3 className="font-[Cormorant_Garamond] text-2xl font-semibold text-[#12372A] mb-4">
                  {t('aboutPage.missionTitle')}
                </h3>
                <p className="text-[#202522]/70 leading-relaxed">
                  {t('aboutPage.missionDesc')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-[#F8F7F2] rounded-2xl p-8 border border-[#E8DDC8]/50 h-full">
                <div className="w-14 h-14 bg-[#1F4D3A]/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye size={28} className="text-[#1F4D3A]" />
                </div>
                <h3 className="font-[Cormorant_Garamond] text-2xl font-semibold text-[#12372A] mb-4">
                  {t('aboutPage.visionTitle')}
                </h3>
                <p className="text-[#202522]/70 leading-relaxed">
                  {t('aboutPage.visionDesc')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3: Our Values */}
      <section className="py-20 bg-[#F8F7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={t('aboutPage.valuesEyebrow')}
            title={t('aboutPage.valuesTitle')}
            subtitle={t('aboutPage.valuesSub')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.isArray(translatedValues) && translatedValues.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 text-center border border-[#E8DDC8]/30 hover:shadow-md transition-shadow h-full">
                  <div className="w-14 h-14 bg-[#1F4D3A]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {(() => { const Icon = iconMap[index]; return Icon ? <Icon size={28} className="text-[#1F4D3A]" /> : null; })()}
                  </div>
                  <h3 className="font-[Cormorant_Garamond] text-xl font-semibold text-[#12372A] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#202522]/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Manufacturing Capability */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={t('aboutPage.infraEyebrow')}
            title={t('aboutPage.infraTitle')}
            subtitle={t('aboutPage.infraSub')}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {Array.isArray(translatedStats) && translatedStats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="bg-[#F8F7F2] rounded-2xl p-6 text-center border border-[#E8DDC8]/30">
                  {(() => { const Icon = statsIcons[index]; return Icon ? <Icon size={32} className="text-[#1F4D3A] mx-auto mb-3" /> : null; })()}
                  <p className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-bold text-[#12372A]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#202522]/60 mt-1">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <img
                  src={assets.products[5]}
                  alt="Manufacturing process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <img
                  src={assets.products[6]}
                  alt="Quality inspection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <img
                  src={assets.products[3]}
                  alt="Skilled artisans"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="py-20 bg-[#1F4D3A] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-semibold mb-6">
              {t('aboutPage.ctaTitle')}
            </h2>
            <p className="text-[#A8C3A0] text-lg mb-8 max-w-2xl mx-auto">
              {t('aboutPage.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1F4D3A] px-8 py-3 rounded-lg font-medium hover:bg-[#F8F7F2] transition-colors"
              >
                {t('aboutPage.cta1')}
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                {t('aboutPage.cta2')}
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
