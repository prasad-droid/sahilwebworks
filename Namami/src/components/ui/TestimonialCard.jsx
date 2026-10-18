import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E8DDC8]/50 hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < testimonial.rating ? 'fill-[#C6A77B] text-[#C6A77B]' : 'text-gray-200'}
          />
        ))}
      </div>
      <blockquote className="text-[#202522]/80 italic leading-relaxed flex-1">
        "{testimonial.text}"
      </blockquote>
      <div className="mt-6 pt-4 border-t border-[#E8DDC8]/30">
        <p className="font-[Cormorant_Garamond] font-semibold text-[#12372A]">{testimonial.name}</p>
        <p className="text-sm text-[#202522]/60">{testimonial.company}, {testimonial.country}</p>
      </div>
    </div>
  );
}
