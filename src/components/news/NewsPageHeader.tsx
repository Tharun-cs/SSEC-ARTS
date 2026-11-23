'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const NewsPageHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full text-left mb-3 lg:mb-3.5 select-none"
    >
      {/* Small yellow decorative horizontal bar above heading */}
      <div />

      {/* Main Heading: NEWS in White, UPDATES in Yellow */}
      <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black uppercase tracking-tight text-white leading-none">
        NEWS &amp; <span className="text-[#FFCB0B]">UPDATES</span>
      </h2>

      {/* Subtitle */}
      <p className="text-white/95 text-xs sm:text-[13px] font-normal mt-1 max-w-3xl leading-snug">
        Stay informed with the latest happenings, achievements, events and announcements at Sree Sakthi.
      </p>

      {/* Small yellow decorative horizontal bar below subtitle */}
      <div className="w-10 sm:w-12 h-1 bg-[#FFCB0B] rounded-full mt-1.5" />
    </motion.div>
  );
};
