import { Globe } from "lucide-react";
import useTranslation from "../../hooks/useTranslation";

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useTranslation();

  return (
    <select
      onInput={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium border border-[#1F4D3A]/20 text-[#1F4D3A] hover:bg-[#1F4D3A] hover:text-white transition-all"
      title={lang === "en" ? "मराठी मध्ये बदला" : "Switch to English"}
    >
      <option value="en">English</option>
      <option value="en">मराठी</option>
      {lang === "en" ? "EN | मराठी" : "मराठी | EN"}
    </select>
  );
}
