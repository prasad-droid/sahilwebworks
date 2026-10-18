import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ScrollReveal from "../../components/ui/ScrollReveal";
import SectionHeading from "../../components/ui/SectionHeading";
import company from "../../data/company";
import { useTranslation } from "../../hooks/useTranslation";

export default function ContactPreview() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: company.phone,
    },
    {
      icon: Mail,
      label: "Email",
      value: company.email,
    },
    {
      icon: MapPin,
      label: "Address",
      value: company.address,
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: t("contactPreview.businessHours"),
    },
  ];

  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side */}
        <ScrollReveal>
          <div>
            <SectionHeading
              eyebrow={t("contactPreview.eyebrow")}
              title={t("contactPreview.title")}
            />

            <div className="space-y-5 mt-10">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="bg-forest/10 text-forest p-3 rounded-lg shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-charcoal/50">{label}</p>
                    <p className="text-charcoal font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-semibold hover:bg-forest-deep transition-colors duration-300 mt-10"
            >
              {t("contactPreview.cta")}
            </Link>
          </div>
        </ScrollReveal>

        {/* Right Side */}
        <ScrollReveal>
          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder={t("contactPreview.placeholder1")}
                className="bg-white border border-beige rounded-lg px-4 py-3 w-full focus:outline-none focus:border-forest transition-colors"
              />
              <input
                type="email"
                placeholder={t("contactPreview.placeholder2")}
                className="bg-white border border-beige rounded-lg px-4 py-3 w-full focus:outline-none focus:border-forest transition-colors"
              />
              <input
                type="tel"
                placeholder={t("contactPreview.placeholder3")}
                className="bg-white border border-beige rounded-lg px-4 py-3 w-full focus:outline-none focus:border-forest transition-colors"
              />
              <textarea
                rows={4}
                placeholder={t("contactPreview.placeholder4")}
                className="bg-white border border-beige rounded-lg px-4 py-3 w-full focus:outline-none focus:border-forest transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-forest text-white px-8 py-3 rounded-lg font-semibold hover:bg-forest-deep transition-colors duration-300"
              >
                {t("contactPreview.send")}
              </button>
            </form>

            <div className="rounded-xl overflow-hidden border border-beige/30 shadow-sm mt-6">
              <iframe
                title="Namami Internationals Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74110073348574!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-48"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
