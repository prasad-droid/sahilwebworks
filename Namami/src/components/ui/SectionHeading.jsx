export default function SectionHeading({ eyebrow, title, subtitle, alignment = 'center', light = false }) {
  return (
    <div className={`${alignment === 'center' ? 'text-center' : 'text-left'} mb-12 md:mb-16`}>
      {eyebrow && (
        <span className={`inline-block uppercase tracking-[0.25em] text-xs font-semibold mb-4 ${light ? 'text-[#A8C3A0]' : 'text-[#A8C3A0]'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-[Cormorant_Garamond] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${light ? 'text-[#F8F7F2]' : 'text-[#202522]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''} ${light ? 'text-[#F8F7F2]/80' : 'text-[#202522]/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
