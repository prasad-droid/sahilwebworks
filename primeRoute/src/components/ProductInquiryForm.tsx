import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';

export default function ProductInquiryForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formRef.current) return;
    setIsSubmitting(true);
    
    const formData = new FormData(formRef.current);

    const sheetsdbUrl = import.meta.env.VITE_SHEETSDB_API_URL;
    if (!sheetsdbUrl) {
      setErrorMessage("The inquiry form is not configured yet. Please email us at info@primerouteagencies.com.");
      return;
    }

    // Get the next serial number from the sheet's current row count
    let srNo = "";
    try {
      const countRes = await fetch(`${sheetsdbUrl}/count`);
      const countData = await countRes.json();
      srNo = String((Number(countData.rows) || 0) + 1);
    } catch {
      // Serial number is optional; submit without it if the count fails
    }

    const data = {
      "Sr. no": srNo,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      country: formData.get('country') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
      "submitted at": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    try {
      const response = await fetch(sheetsdbUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ data: [data] }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.created === 1) {
        setIsSuccess(true);
        formRef.current.reset();
      } else {
        setErrorMessage(result.message || result.error || "An error occurred while submitting your inquiry. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inquiry-form" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/40 backdrop-blur-3xl p-8 md:p-12 rounded-[2.5rem] border border-white/50 shadow-[0_30px_60px_-15px_rgba(11,27,54,0.15)] ring-1 ring-inset ring-white/50 relative overflow-hidden"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            Product <span className="text-gold">Inquiry</span>
          </h2>
          <p className="font-sans text-zinc-600 max-w-xl mx-auto">
            Interested in our products? Please fill out the form below and we will get back to you with details and quotations.
          </p>
        </div>

        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200"
          >
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3">Enquiry Submitted</h3>
            <p className="text-green-700 max-w-lg mx-auto text-lg">
              Thank you for your enquiry. We will contact you soon.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4">
              <button 
                onClick={() => {
                  setIsSuccess(false);
                  formRef.current?.reset();
                }}
                className="px-6 py-3 bg-green-600 text-white rounded-full font-medium tracking-wide hover:bg-green-700 transition-colors duration-300 shadow-md text-sm"
              >
                Send Another Inquiry
              </button>
            </div>
          </motion.div>
        ) : (
          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-navy/80 pl-1">Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  required
                  placeholder="Enter your full name" 
                  className="w-full px-5 py-4 rounded-xl md:rounded-2xl bg-white/70 border border-white/80 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all placeholder:text-zinc-400 text-navy shadow-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-navy/80 pl-1">Email <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  required
                  placeholder="Enter your email address" 
                  className="w-full px-5 py-4 rounded-xl md:rounded-2xl bg-white/70 border border-white/80 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all placeholder:text-zinc-400 text-navy shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-navy/80 pl-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone" 
                  placeholder="Enter your phone number (optional)" 
                  className="w-full px-5 py-4 rounded-xl md:rounded-2xl bg-white/70 border border-white/80 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all placeholder:text-zinc-400 text-navy shadow-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="country" className="text-sm font-medium text-navy/80 pl-1">Country <span className="text-red-500">*</span></label>
                <select 
                  id="country"
                  name="country" 
                  required
                  defaultValue=""
                  className="w-full px-5 py-4 rounded-xl md:rounded-2xl bg-white/70 border border-white/80 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all text-navy shadow-sm appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select your country</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="India">India</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Japan">Japan</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="company" className="text-sm font-medium text-navy/80 pl-1">Company Name</label>
              <input 
                type="text" 
                id="company"
                name="company" 
                placeholder="Enter your company name (optional)" 
                className="w-full px-5 py-4 rounded-xl md:rounded-2xl bg-white/70 border border-white/80 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all placeholder:text-zinc-400 text-navy shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-navy/80 pl-1">Your message <span className="text-red-500">*</span></label>
              <textarea 
                id="message"
                name="message" 
                required
                rows={4}
                placeholder="How can we help you?" 
                className="w-full px-5 py-4 rounded-xl md:rounded-2xl bg-white/70 border border-white/80 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all placeholder:text-zinc-400 text-navy shadow-sm resize-y"
              ></textarea>
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm font-medium text-center">{errorMessage}</div>
            )}

            <div className="flex justify-center pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="px-10 py-4 bg-navy text-white rounded-full font-medium tracking-wide hover:bg-gold transition-colors duration-300 shadow-md disabled:opacity-70 flex items-center justify-center min-w-[200px]"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Submit Inquiry'
                )}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}
