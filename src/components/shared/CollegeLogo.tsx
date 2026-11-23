'use client';

import React from 'react';
import Link from 'next/link';

interface CollegeLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  imgClassName?: string;
}

export const CollegeLogo: React.FC<CollegeLogoProps> = ({
  variant = 'light',
  className = '',
  imgClassName = 'h-9 xs:h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[190px] xs:max-w-[230px] sm:max-w-none'
}) => {
  const isDark = variant === 'dark';

  if (isDark) {
    return (
      <Link
        href="/"
        className={`inline-block select-none group ${className}`}
        aria-label="Sree Sakthi College of Arts and Science - Elite Campus"
      >
        <div className="bg-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-sm shadow-sm inline-flex items-center transition-transform duration-200 group-hover:scale-102">
          <img
            src="/images/ssec_official_logo.png"
            alt="Sree Sakthi College of Arts and Science - Elite Campus"
            className={`${imgClassName} object-contain`}
          />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none group py-0.5 sm:py-1 ${className}`}
      aria-label="Sree Sakthi College of Arts and Science - Elite Campus"
    >
      <img
        src="/images/ssec_official_logo_transparent.png"
        alt="Sree Sakthi College of Arts and Science - Elite Campus"
        className={`${imgClassName} object-contain transition-transform duration-200 group-hover:scale-101`}
      />
    </Link>
  );
};
