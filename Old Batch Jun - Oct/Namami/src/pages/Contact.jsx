import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import company from '../data/company';
import ScrollReveal from '../components/ui/ScrollReveal';
import { useTranslation } from '../hooks/useTranslation';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const contactCards = [
    { icon: Phone, label: "Phone Number", value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, label: t('Address'), value: company.address, href: null },
    { icon: Clock, label: t('Working Hours'), value: 'Mon - Sat: 9:00 AM - 6:00 PM IST', href: null },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim()) newErrors.email = true;
    if (!form.subject.trim()) newErrors.subject = true;
    if (!form.message.trim()) newErrors.message = true;
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setErrors({});
  };

  const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`;

  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-[#12372A] h-[40vh] flex items-center justify-center text-white">
        <div className="text-center px-6">
          <h1 className="font-[Cormorant_Garamond] text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            {t('contactPage.heroTitle')}
          </h1>
          <p className="text-[#A8C3A0] text-lg md:text-xl tracking-wide">
            {t('contactPage.heroSub')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <ScrollReveal>
            <div>
              <h2 className="font-[Cormorant_Garamond] text-3xl font-semibold text-[#12372A] mb-8">
                {t('contactPage.getTitle')}
              </h2>

              <div className="space-y-4 mb-8">
                {contactCards.map((card) => (
                  <div key={card.label} className="flex items-start gap-4">
                    <div className="bg-[#1F4D3A]/10 text-[#1F4D3A] p-3 rounded-lg flex-shrink-0">
                      <card.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#202522]/60 mb-0.5">{card.label}</p>
                      {card.href ? (
                        <a
                          href={card.href}
                          className="text-[#202522] hover:text-[#1F4D3A] transition-colors"
                        >
                          {card.value}
                        </a>
                      ) : (
                        <p className="text-[#202522]">{card.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20BD5A] transition-colors mb-8"
              >
                <MessageCircle size={20} />
                {t('contactPage.whatsappBtn')}
              </a>

              <div className="rounded-xl overflow-hidden border border-[#E8DDC8]/30 shadow-sm">
                <iframe
                  title="Namami Internationals Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74110073348574!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Contact Form */}
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-2xl p-8 border border-[#E8DDC8]/30 shadow-sm">
              <h2 className="font-[Cormorant_Garamond] text-2xl font-semibold text-[#12372A] mb-6">
                {t('contactPage.formTitle')}
              </h2>

              {submitted && (
                <div className="bg-[#A8C3A0]/20 text-[#1F4D3A] rounded-xl p-4 mb-6 flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">
                    {t('contactPage.formSuccess')}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#202522]/70 mb-1">
                    {t('contactPage.nameLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full bg-white border rounded-lg px-4 py-3 focus:outline-none focus:border-[#1F4D3A] transition ${
                      errors.name ? 'border-red-500' : 'border-[#E8DDC8]'
                    }`}
                    placeholder={t('contactPage.namePlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#202522]/70 mb-1">
                    {t('contactPage.emailLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full bg-white border rounded-lg px-4 py-3 focus:outline-none focus:border-[#1F4D3A] transition ${
                      errors.email ? 'border-red-500' : 'border-[#E8DDC8]'
                    }`}
                    placeholder={t('contactPage.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#202522]/70 mb-1">
                    {t('contactPage.phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#E8DDC8] rounded-lg px-4 py-3 focus:outline-none focus:border-[#1F4D3A] transition"
                    placeholder={t('contactPage.phonePlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#202522]/70 mb-1">
                    {t('contactPage.subjectLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full bg-white border rounded-lg px-4 py-3 focus:outline-none focus:border-[#1F4D3A] transition ${
                      errors.subject ? 'border-red-500' : 'border-[#E8DDC8]'
                    }`}
                    placeholder={t('contactPage.subjectPlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#202522]/70 mb-1">
                    {t('contactPage.messageLabel')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full bg-white border rounded-lg px-4 py-3 focus:outline-none focus:border-[#1F4D3A] transition resize-none ${
                      errors.message ? 'border-red-500' : 'border-[#E8DDC8]'
                    }`}
                    placeholder={t('contactPage.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#1F4D3A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#12372A] transition-colors w-full sm:w-auto"
                >
                  <Send size={18} />
                  {t('contactPage.send')}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
