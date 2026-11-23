'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#CF0003] text-white py-6 sm:py-7 md:py-8 border-b-4 border-[#FFCB0B] select-none shadow-md">
      {/* 1. College Campus Image with Low Opacity & Subtle Ken-Burns Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          src="/images/ssec_campus_academic_block.jpg"
          alt="Sree Sakthi Campus"
          className="w-full h-full object-cover object-center opacity-25 filter contrast-[1.1]"
          aria-hidden="true"
        />
        {/* Subtle Gradient Shade for Text Legibility while Keeping Campus Photo Clearly Visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8C0002]/70 via-[#CF0003]/50 to-[#8C0002]/70" />
        
        {/* Subtle Diagonal Shimmer Sweep Animation */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 7, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none"
        />
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Title in Bold Pure White */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black uppercase tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] leading-tight"
          >
            {title}
          </motion.h1>

          {/* Golden Yellow Underline Bar with ScaleX Animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="w-12 sm:w-16 h-1 bg-[#FFCB0B] rounded-full my-1.5 sm:my-2 shadow-xs origin-left"
          />

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="text-xs sm:text-[13px] text-white/95 max-w-3xl leading-relaxed font-normal drop-shadow-xs"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
