import { useState } from "react";
import { MessageCircle } from "lucide-react";
import company from "../data/company";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  const waUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div
        className={`pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-charcoal px-3 py-1.5 text-xs font-medium text-offwhite shadow-lg transition-all duration-200 ${
          hovered ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
        }`}
      >
        Chat with us on WhatsApp
        <span className="absolute right-0 top-1/2 -mr-1 -translate-y-1/2 border-4 border-transparent border-l-charcoal" />
      </div>

      {/* Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex h-14 w-14 items-center justify-center rounded-full text-offwhite shadow-lg transition-transform duration-200 hover:scale-110 sm:h-16 sm:w-16"
        style={{
          backgroundColor: "#25D366",
          animation: "wa-pulse 2s ease-in-out infinite",
        }}
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>

      {/* Keyframe injected once */}
      <style>{`
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
          50% { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;
