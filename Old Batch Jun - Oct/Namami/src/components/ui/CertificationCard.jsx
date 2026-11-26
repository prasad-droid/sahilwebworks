import * as Icons from 'lucide-react';

export default function CertificationCard({ cert }) {
  if (!cert) return null;
  const IconComponent = Icons[cert.icon] || Icons.ShieldCheck;

  return (
    <div className="bg-white border border-[#A8C3A0]/30 rounded-xl p-6 text-center hover:shadow-md transition-shadow relative group">
      {cert.placeholder && (
        <span className="absolute top-2 right-2 text-[10px] bg-[#E8DDC8] text-[#202522]/60 px-2 py-0.5 rounded-full">
          Placeholder
        </span>
      )}
      <div className="w-14 h-14 bg-[#1F4D3A]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1F4D3A] group-hover:text-white transition-colors">
        <IconComponent size={28} className="text-[#1F4D3A] group-hover:text-white transition-colors" />
      </div>
      <h3 className="font-[Cormorant_Garamond] text-lg font-semibold text-[#12372A]">{cert.name}</h3>
      <p className="text-xs text-[#202522]/60 mt-2">{cert.description}</p>
    </div>
  );
}
