import { useState, useEffect, useRef, useMemo } from 'react'
import { useLanguage } from './LanguageContext.jsx'
import { PRODUCTS, HERO_SLIDES, REGION_DATA, getProductGalleryImages, FRUIT_IMAGES, VEGETABLE_IMAGES, DRY_FRUIT_IMAGES, TURMERIC_IMAGES, VERMICOMPOST_IMAGES } from './data/siteData.js'

import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import FounderSection from './components/FounderSection.jsx'
import ProductsSection from './components/ProductsSection.jsx'
import ExportProcessSection from './components/ExportProcessSection.jsx'
import WhyChooseUsSection from './components/WhyChooseUsSection.jsx'
import QualitySection from './components/QualitySection.jsx'
import ExportMarketsSection from './components/ExportMarketsSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import FAQSection from './components/FAQSection.jsx'
import Footer from './components/Footer.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'
import PhotoGallery from './components/PhotoGallery.jsx'
import LightboxModal from './components/LightboxModal.jsx'
import ProductDetailModal from './components/ProductDetailModal.jsx'
import GenericModal from './components/GenericModal.jsx'

export default function App() {
  const { lang, setLang, t } = useLanguage();

  const translatedProducts = useMemo(() => {
    return PRODUCTS.map(prod => {
      const trans = t(`productsData.${prod.id}`);
      return typeof trans === 'string' ? prod : { ...prod, ...trans };
    });
  }, [lang]);

  const translatedHeroSlides = useMemo(() => {
    const titles = t('heroSlides');
    return Array.isArray(titles)
      ? HERO_SLIDES.map((slide, i) => ({ ...slide, title: titles[i] || slide.title }))
      : HERO_SLIDES;
  }, [lang]);

  const translatedClonedHeroSlides = useMemo(() => {
    return [translatedHeroSlides[translatedHeroSlides.length - 1], ...translatedHeroSlides, translatedHeroSlides[0]];
  }, [translatedHeroSlides]);

  const translatedFaqItems = useMemo(() => {
    const items = t('faq.items');
    return Array.isArray(items) ? items : [];
  }, [lang]);

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const [activeDetailProduct, setActiveDetailProduct] = useState(null)
  const [sliderIndex, setSliderIndex] = useState(0)
  const [isProductPaused, setIsProductPaused] = useState(false)
  const [visibleCards, setVisibleCards] = useState(3)

  const [heroTrackIndex, setHeroTrackIndex] = useState(1)
  const [heroTransitionEnabled, setHeroTransitionEnabled] = useState(true)
  const [heroPaused, setHeroPaused] = useState(false)

  useEffect(() => {
    if (heroPaused) return;
    const timer = setInterval(() => {
      setHeroTrackIndex(prev => prev + 1)
    }, 3000)
    return () => clearInterval(timer)
  }, [heroPaused])

  useEffect(() => {
    if (heroTrackIndex > translatedHeroSlides.length + 1) {
      setHeroTransitionEnabled(false)
      setHeroTrackIndex(1)
    } else if (heroTrackIndex < 0) {
      setHeroTransitionEnabled(false)
      setHeroTrackIndex(translatedHeroSlides.length)
    } else if (heroTrackIndex === 0) {
      const timer = setTimeout(() => {
        setHeroTransitionEnabled(false)
        setHeroTrackIndex(translatedHeroSlides.length)
      }, 500)
      return () => clearTimeout(timer)
    } else if (heroTrackIndex === translatedHeroSlides.length + 1) {
      const timer = setTimeout(() => {
        setHeroTransitionEnabled(false)
        setHeroTrackIndex(1)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [heroTrackIndex, translatedHeroSlides.length])

  useEffect(() => {
    if (!heroTransitionEnabled) {
      const timer = setTimeout(() => {
        setHeroTransitionEnabled(true)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [heroTransitionEnabled])

  const heroSlideIndex = heroTrackIndex <= 0
    ? translatedHeroSlides.length - 1
    : heroTrackIndex >= translatedHeroSlides.length + 1
      ? 0
      : heroTrackIndex - 1

  const maxProductIndex = translatedProducts.length - visibleCards;
  useEffect(() => {
    if (isProductPaused) return;
    const timer = setInterval(() => {
      setSliderIndex(prev => (prev >= maxProductIndex ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(timer)
  }, [isProductPaused, maxProductIndex, visibleCards])

  useEffect(() => {
    const handleResize = () => {
      let cardsCount = 3;
      if (window.innerWidth <= 768) {
        cardsCount = 1;
      } else if (window.innerWidth <= 1024) {
        cardsCount = 2;
      }
      setVisibleCards(cardsCount)
      setSliderIndex(prev => Math.min(prev, Math.max(0, translatedProducts.length - cardsCount)))
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [activeGallery, setActiveGallery] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const [productTabs, setProductTabs] = useState({
    turmeric: 'specs',
    raisins: 'specs',
    vermicompost: 'specs',
    fruits: 'specs'
  })

  const [activeSteps, setActiveSteps] = useState([true, false, false, false])
  const [timelineHeight, setTimelineHeight] = useState(0)

  const [activeRegion, setActiveRegion] = useState(null)
  const [mapStats, setMapStats] = useState({
    ports: 'Dubai (Jebel Ali)',
    transit: '7 - 10 Days',
    products: 'Turmeric Fingers'
  })
  const [hoverRegion, setHoverRegion] = useState(null)

  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  const [openFaq, setOpenFaq] = useState(null)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState(null)

  const [formProduct, setFormProduct] = useState('')
  const [formName, setFormName] = useState('')
  const [formCompany, setFormCompany] = useState('')
  const [formCountry, setFormCountry] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formPhone, setFormPhone] = useState('')
  const [formQty, setFormQty] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const contactSectionRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null || !activeGallery) return
      const imagesList = activeGallery === 'fruits' ? [...FRUIT_IMAGES, ...VEGETABLE_IMAGES] : activeGallery === 'vegetables' ? VEGETABLE_IMAGES : activeGallery === 'raisins' ? DRY_FRUIT_IMAGES : activeGallery === 'turmeric' ? TURMERIC_IMAGES : VERMICOMPOST_IMAGES
      if (e.key === 'Escape') {
        setLightboxIndex(null)
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % imagesList.length : null))
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + imagesList.length) % imagesList.length : null))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, activeGallery])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      const timelineContainer = document.querySelector('.timeline-container')
      if (timelineContainer) {
        const triggerPoint = window.innerHeight * 0.7
        const stepsElements = document.querySelectorAll('.timeline-step')
        let activeStepsCount = 0

        stepsElements.forEach((step, idx) => {
          const stepRect = step.getBoundingClientRect()
          if (stepRect.top < triggerPoint) {
            activeStepsCount = idx + 1
          }
        })

        const nextActiveSteps = [true, false, false, false]
        for (let i = 0; i < activeStepsCount; i++) {
          nextActiveSteps[i] = true
        }
        setActiveSteps(nextActiveSteps)

        const totalSteps = stepsElements.length
        const progressPercent = ((activeStepsCount - 1) / (totalSteps - 1)) * 100
        setTimelineHeight(Math.max(0, progressPercent))
      }

      const sections = ['home', 'about', 'products', 'quality', 'why-choose-us', 'contact', 'faq']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const animatedElements = document.querySelectorAll('.about-card, .value-card, .feature-card, .quality-check-item, .cert-badge')
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        } else {
          entry.target.style.opacity = '0'
          entry.target.style.transform = 'translateY(25px)'
        }
      })
    }, observerOptions)

    animatedElements.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(25px)'
      el.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const handleProductTabChange = (product, tab) => {
    setProductTabs(prev => ({ ...prev, [product]: tab }))
  }

  const handleInquireClick = (productName) => {
    setFormProduct(productName)
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (!formName || !formCompany || !formCountry || !formEmail || !formPhone || !formProduct || !formQty || !formMessage) {
      triggerAlert(t('alerts.error'), t('alerts.errorFill'))
      return
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(String(formEmail).toLowerCase())) {
      triggerAlert(t('alerts.validationAlert'), t('alerts.invalidEmail'))
      return
    }

    if (formPhone.length < 10) {
      triggerAlert(t('alerts.validationAlert'), t('alerts.invalidPhone'))
      return
    }

    const message = `*New Commercial Inquiry*
----------------------------------------
*Name:* ${formName}
*Company:* ${formCompany}
*Country:* ${formCountry}
*Email:* ${formEmail}
*Phone/WhatsApp:* ${formPhone}
*Product:* ${formProduct}
*Quantity:* ${formQty}
*Specifications/Demands:* ${formMessage}
----------------------------------------
Sent from Aavira Global Axis website.`;

    const whatsappUrl = `https://wa.me/917304066350?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setModalTitle(t('alerts.inquirySuccess'))
    setModalContent(
      <div style={{ textAlign: 'center', padding: '20px 10px' }}>
        <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(30, 155, 90, 0.1)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2rem', margin: '0 auto 24px auto' }}>
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: '20px', lineHeight: '1.6' }}>
          {typeof t('alerts.thankYou') === 'function' ? t('alerts.thankYou')(formName, formCompany) : t('alerts.thankYou')}
        </p>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6' }}>
          {typeof t('alerts.inquiryDesc') === 'function' ? t('alerts.inquiryDesc')(formProduct, formQty, formEmail, formPhone) : t('alerts.inquiryDesc')}
        </p>
        <div style={{ fontSize: '0.8rem', color: 'var(--primary-green)', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
          <i className="fa-solid fa-globe"></i> {t('alerts.deliveringTrust')}
        </div>
      </div>
    )
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'

    setFormName('')
    setFormCompany('')
    setFormCountry('')
    setFormEmail('')
    setFormPhone('')
    setFormQty('')
    setFormProduct('')
    setFormMessage('')
  }

  const triggerAlert = (title, text) => {
    setModalTitle(title)
    setModalContent(
      <div style={{ textAlign: 'center', padding: '20px 10px' }}>
        <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(18, 61, 115, 0.05)', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2rem', margin: '0 auto 24px auto' }}>
          <i className="fa-solid fa-circle-exclamation"></i>
        </div>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: 0 }}>{text}</p>
      </div>
    )
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = ''
  }

  const openPolicyModal = (policyType) => {
    const policy = t(`policies.${policyType}`)
    if (!policy || typeof policy !== 'object') return

    setModalTitle(policy.title)
    setModalContent(
      <div className="policy-modal-body">
        {Array.isArray(policy.paragraphs) && policy.paragraphs.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
        {Array.isArray(policy.points) && (
          <ul className="policy-points-list">
            {policy.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    )
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const handleNavClick = (sectionId) => {
    setActiveGallery(null)
    setIsMenuOpen(false)
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    }
  }

  return (
    <>
      <Header
        isScrolled={isScrolled}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        lang={lang}
        setLang={setLang}
        t={t}
        handleNavClick={handleNavClick}
      />

      <main>
        <HeroSection
          translatedClonedHeroSlides={translatedClonedHeroSlides}
          translatedHeroSlides={translatedHeroSlides}
          heroTrackIndex={heroTrackIndex}
          heroTransitionEnabled={heroTransitionEnabled}
          setHeroTrackIndex={setHeroTrackIndex}
          setHeroTransitionEnabled={setHeroTransitionEnabled}
          heroSlideIndex={heroSlideIndex}
          setHeroPaused={setHeroPaused}
        />

        <FounderSection t={t} lang={lang} />

        <AboutSection t={t} />

        <ProductsSection
          translatedProducts={translatedProducts}
          sliderIndex={sliderIndex}
          setSliderIndex={setSliderIndex}
          isProductPaused={isProductPaused}
          setIsProductPaused={setIsProductPaused}
          maxProductIndex={maxProductIndex}
          visibleCards={visibleCards}
          setActiveDetailProduct={setActiveDetailProduct}
          t={t}
        />

        <ExportProcessSection
          activeSteps={activeSteps}
          timelineHeight={timelineHeight}
          t={t}
        />

        <QualitySection t={t} />

        <WhyChooseUsSection t={t} />

        <ExportMarketsSection
          activeRegion={activeRegion}
          setActiveRegion={setActiveRegion}
          hoverRegion={hoverRegion}
          setHoverRegion={setHoverRegion}
          mapStats={mapStats}
          setMapStats={setMapStats}
          REGION_DATA={REGION_DATA}
          t={t}
        />

        <ContactSection
          ref={contactSectionRef}
          formProduct={formProduct}
          setFormProduct={setFormProduct}
          formName={formName}
          setFormName={setFormName}
          formCompany={formCompany}
          setFormCompany={setFormCompany}
          formCountry={formCountry}
          setFormCountry={setFormCountry}
          formEmail={formEmail}
          setFormEmail={setFormEmail}
          formPhone={formPhone}
          setFormPhone={setFormPhone}
          formQty={formQty}
          setFormQty={setFormQty}
          formMessage={formMessage}
          setFormMessage={setFormMessage}
          handleFormSubmit={handleFormSubmit}
          t={t}
        />

        <FAQSection
          translatedFaqItems={translatedFaqItems}
          openFaq={openFaq}
          setOpenFaq={setOpenFaq}
          t={t}
        />
      </main>

      <Footer t={t} openPolicyModal={openPolicyModal} />

      <FloatingButtons t={t} handleNavClick={handleNavClick} />

      {activeGallery && (
        <PhotoGallery
          activeGallery={activeGallery}
          setActiveGallery={setActiveGallery}
          setLightboxIndex={setLightboxIndex}
          lang={lang}
          setLang={setLang}
          t={t}
        />
      )}

      <LightboxModal
        lightboxIndex={lightboxIndex}
        setLightboxIndex={setLightboxIndex}
        activeGallery={activeGallery}
        t={t}
      />

      <ProductDetailModal
        activeDetailProduct={activeDetailProduct}
        setActiveDetailProduct={setActiveDetailProduct}
        setActiveGallery={setActiveGallery}
        handleInquireClick={handleInquireClick}
        t={t}
      />

      <GenericModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        modalTitle={modalTitle}
        modalContent={modalContent}
      />
    </>
  )
}
