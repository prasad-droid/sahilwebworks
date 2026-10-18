import { useState } from 'react';
import { Send, Upload, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import company from '../data/company';
import { useTranslation } from '../hooks/useTranslation';

export default function Quote() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    quantity: '',
    estimatedMOQ: '',
    bagSize: '',
    material: '',
    printing: '',
    handleType: '',
    deliveryDate: '',
    message: '',
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    if (!formData.productCategory) newErrors.productCategory = 'Required';
    if (!formData.message.trim()) newErrors.message = 'Required';
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
  };

  const inputClass = (name) =>
    `w-full bg-white border rounded-lg px-4 py-3 text-[#202522] placeholder-[#202522]/40 focus:outline-none focus:border-[#1F4D3A] transition ${
      errors[name] ? 'border-red-400' : 'border-[#E8DDC8]'
    }`;

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-offwhite px-6">
        <div className="max-w-lg text-center bg-white rounded-2xl shadow-xl p-12">
          <div className="w-20 h-20 bg-[#A8C3A0]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-[#1F4D3A]" />
          </div>
          <h2 className="font-[Cormorant_Garamond] text-3xl font-semibold text-[#12372A] mb-4">
            {t('quotePage.success')}
          </h2>
          <p className="text-[#202522]/70 mb-6">
            {t('quotePage.successMsg')}
          </p>
          <p className="text-sm text-[#202522]/50">
            For urgent inquiries, call us at {company.phone}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#12372A] h-[40vh] flex items-center justify-center">
        <div className="text-center text-white px-6">
          <span className="uppercase tracking-[0.25em] text-xs text-[#A8C3A0] font-semibold">GET A QUOTE</span>
          <h1 className="font-[Cormorant_Garamond] text-4xl md:text-5xl font-bold mt-4">{t('quotePage.heroTitle')}</h1>
          <p className="text-white/70 mt-3 text-lg">{t('quotePage.heroSub')}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="font-[Cormorant_Garamond] text-2xl font-semibold text-[#12372A] mb-8">
                {t('quotePage.formTitle')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.fullName')} *</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClass('fullName')} placeholder={t('quotePage.fullName')} />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.companyName')}</label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className={inputClass('companyName')} placeholder={t('quotePage.companyName')} />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.email')} *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass('email')} placeholder="your@email.com" />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.phone')}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass('phone')} placeholder="+1 234 567 890" />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.country')}</label>
                  <input type="text" name="country" value={formData.country} onChange={handleChange} className={inputClass('country')} placeholder={t('quotePage.country')} />
                </div>

                {/* Product Category */}
                <div>
                  <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.productCategory')} *</label>
                  <select name="productCategory" value={formData.productCategory} onChange={handleChange} className={inputClass('productCategory')}>
                    <option value="">Select category</option>
                    <option value="textile">{t('quotePage.catTextile')}</option>
                    <option value="dehydrated">{t('quotePage.catDehydrated')}</option>
                    <option value="mixed">{t('quotePage.catMixed')}</option>
                  </select>
                </div>

                {/* Product Type (dehydrated) */}
                {formData.productCategory === 'dehydrated' && (
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.productType')}</label>
                    <select name="bagSize" value={formData.bagSize} onChange={handleChange} className={inputClass('bagSize')}>
                      <option value="">Select product</option>
                      {t('quotePage.dehydratedOptions').map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.quantity')}</label>
                  <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} className={inputClass('quantity')} placeholder={t('quotePage.quantityPlaceholder')} />
                </div>

                {/* MOQ */}
                <div>
                  <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.moq')}</label>
                  <input type="text" name="estimatedMOQ" value={formData.estimatedMOQ} onChange={handleChange} className={inputClass('estimatedMOQ')} placeholder="e.g. 500 pcs / 100 kg" />
                </div>

                {/* Bag-specific fields (textile) */}
                {formData.productCategory === 'textile' && (
                  <>
                    {/* Bag Size */}
                    <div>
                      <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.bagSize')}</label>
                      <input type="text" name="bagSize" value={formData.bagSize} onChange={handleChange} className={inputClass('bagSize')} placeholder="e.g. 15 x 16 inches" />
                    </div>

                    {/* Material */}
                    <div>
                      <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.material')}</label>
                      <input type="text" name="material" value={formData.material} onChange={handleChange} className={inputClass('material')} placeholder="e.g. 10 oz Jute" />
                    </div>

                    {/* Printing */}
                    <div>
                      <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.printing')}</label>
                      <input type="text" name="printing" value={formData.printing} onChange={handleChange} className={inputClass('printing')} placeholder="e.g. Logo screen print, 2 colors" />
                    </div>

                    {/* Handle Type */}
                    <div>
                      <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.handleType')}</label>
                      <select name="handleType" value={formData.handleType} onChange={handleChange} className={inputClass('handleType')}>
                        <option value="">Select handle type</option>
                        <option value="rope">{t('quotePage.handleRope')}</option>
                        <option value="flat">{t('quotePage.handleFlat')}</option>
                        <option value="die-cut">{t('quotePage.handleDieCut')}</option>
                        <option value="webbing">{t('quotePage.handleWebbing')}</option>
                        <option value="cross-body">{t('quotePage.handleCrossBody')}</option>
                        <option value="no-preference">{t('quotePage.handleNone')}</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Delivery Date */}
                <div>
                  <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.delivery')}</label>
                  <input type="date" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} className={inputClass('deliveryDate')} />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.refFile')}</label>
                  <label className={`flex items-center gap-2 px-4 py-3 bg-white border ${errors.file ? 'border-red-400' : 'border-[#E8DDC8]'} rounded-lg cursor-pointer hover:border-[#1F4D3A] transition`}>
                    <Upload size={16} className="text-[#1F4D3A]" />
                    <span className="text-sm text-[#202522]/60">{formData.file ? formData.file.name : 'Upload reference image or file'}</span>
                    <input type="file" name="file" onChange={handleChange} className="hidden" accept="image/*,.pdf,.ai,.psd" />
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-[#202522] mb-2">{t('quotePage.message')} *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={inputClass('message')}
                  placeholder="Describe your requirements, special instructions, or any other details..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-8 bg-[#1F4D3A] text-white px-10 py-4 rounded-lg font-medium hover:bg-[#12372A] transition-colors flex items-center gap-3 text-lg"
              >
                <Send size={20} />
                {t('quotePage.submit')}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#E8DDC8]/30 rounded-2xl p-8">
              <h3 className="font-[Cormorant_Garamond] text-xl font-semibold text-[#12372A] mb-6">{t('quotePage.contactTitle')}</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1F4D3A]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#1F4D3A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#202522]/60">Phone</p>
                    <p className="text-[#202522] font-medium">{company.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1F4D3A]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#1F4D3A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#202522]/60">Email</p>
                    <p className="text-[#202522] font-medium text-sm break-all">{company.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1F4D3A]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#1F4D3A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#202522]/60">Location</p>
                    <p className="text-[#202522] font-medium">{company.address}</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#E8DDC8]/30 shadow-sm mt-4">
                  <iframe
                    title="Namami Internationals Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74110073348574!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-48"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#1F4D3A] text-white rounded-2xl p-8">
              <h3 className="font-[Cormorant_Garamond] text-xl font-semibold mb-4">{t('quotePage.quickHelp')}</h3>
              <p className="text-white/80 text-sm mb-6">{t('quotePage.quickHelpDesc')}</p>
              <a
                href={`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#25D366] text-white py-3 rounded-lg font-medium hover:bg-[#20BD5A] transition-colors"
              >
                {t('quotePage.whatsappBtn')}
              </a>
            </div>

            <div className="bg-white border border-[#E8DDC8] rounded-2xl p-8">
              <h3 className="font-[Cormorant_Garamond] text-xl font-semibold text-[#12372A] mb-4">{t('quotePage.promiseTitle')}</h3>
              <ul className="space-y-3 text-sm text-[#202522]/70">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#A8C3A0] shrink-0" />
                  {t('quotePage.promise1')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#A8C3A0] shrink-0" />
                  {t('quotePage.promise2')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#A8C3A0] shrink-0" />
                  {t('quotePage.promise3')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#A8C3A0] shrink-0" />
                  {t('quotePage.promise4')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
