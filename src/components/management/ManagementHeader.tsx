'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ManagementHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="text-center max-w-4xl mx-auto px-3 sm:px-4 mb-4 sm:mb-6"
    >
      {/* 1. Uppercase Overline with Golden Yellow Lines on either side */}
      <div className="inline-flex items-center justify-center gap-2 sm:gap-4 mb-1.5 sm:mb-2.5">
        <span className="w-6 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-[#FFCB0B] rounded-full inline-block" />
        <span className="text-xs sm:text-base md:text-lg lg:text-[19px] font-black uppercase tracking-wider text-[#CF0003]">
          OUR MANAGEMENT
        </span>
        <span className="w-6 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-[#FFCB0B] rounded-full inline-block" />
      </div>

      {/* 2. Main Title: "The Leadership Behind Sree Sakthi" */}
      <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-black tracking-tight leading-tight mb-1.5 sm:mb-2.5">
        <span className="text-[#171717] font-serif">The Leadership Behind </span>
        <span className="text-[#CF0003] font-serif">Sree Sakthi</span>
      </h2>

      {/* 3. Subtitle */}
      <p className="text-xs sm:text-sm md:text-[15px] text-[#666666] leading-relaxed max-w-2xl mx-auto font-normal">
        Guided by visionary leadership, Sree Sakthi College of Arts and Science continues to foster academic excellence, holistic development and value-based education.
      </p>
    </motion.div>
  );
};
