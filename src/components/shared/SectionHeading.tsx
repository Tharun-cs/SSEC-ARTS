import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
  light = false
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 md:mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {subtitle && (
        <div className={`inline-flex items-center gap-2 mb-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="w-6 h-0.5 bg-[#CF0003]"></span>
          <span className="text-xs md:text-sm font-black uppercase tracking-widest text-[#CF0003]">
            {subtitle}
          </span>
          <span className="w-6 h-0.5 bg-[#CF0003]"></span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight ${
          light ? 'text-white' : 'text-[#242424]'
        }`}
      >
        {title}
      </h2>

      {/* Decorative Gold & Red Accent Underline */}
      <div className={`mt-3 flex items-center gap-1.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="w-12 h-1 bg-[#CF0003] rounded"></span>
        <span className="w-4 h-1 bg-[#FFCB0B] rounded"></span>
        <span className="w-2 h-1 bg-[#CF0003] rounded"></span>
      </div>

      {description && (
        <p
          className={`mt-3.5 text-sm sm:text-base leading-relaxed ${
            light ? 'text-gray-200' : 'text-gray-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
