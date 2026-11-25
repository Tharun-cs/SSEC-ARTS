'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Layers } from 'lucide-react';

interface CourseCatalogHeroProps {
  activeLevel: 'UG' | 'PG';
  onSelectLevel: (level: 'UG' | 'PG') => void;
}

export const CourseCatalogHero: React.FC<CourseCatalogHeroProps> = ({
  activeLevel,
  onSelectLevel
}) => {
  return (
    <div className="w-full relative z-10 mb-6 sm:mb-10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
        {/* LEFT SIDE: Heading, Subtitle & Interactive UG/PG Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Overline Badge: Course Catalog */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-[#CF0003] font-bold text-xs sm:text-sm md:text-base mb-2 tracking-normal"
          >
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2] text-[#CF0003]" />
            <span>Course Catalog</span>
          </motion.div>

          {/* Dominant Main Heading: All Programmes for Students */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] font-black tracking-tight text-[#171717] leading-[1.18] sm:leading-[1.12] mb-2 sm:mb-3"
          >
            All Programmes <span className="text-[#CF0003]">for Students</span>
          </motion.h1>

          {/* Subline / Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-xs sm:text-[13px] md:text-sm leading-relaxed max-w-xl mb-5 sm:mb-6 font-normal"
          >
            Explore our diverse range of undergraduate and postgraduate programmes across multiple disciplines, designed for academic excellence and career success.
          </motion.p>

          {/* UG and PG Interactive Selector Tabs - Stacks neatly on small mobile screens */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto select-none"
          >
            {/* 1. Undergraduate Programmes (UG) Tab */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectLevel('UG')}
              className={`inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-extrabold text-xs sm:text-sm transition-all duration-200 shadow-sm active:scale-98 cursor-pointer ${
                activeLevel === 'UG'
                  ? 'bg-[#CF0003] text-white shadow-md'
                  : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-[#FFCB0B] hover:text-[#CF0003]'
              }`}
              aria-pressed={activeLevel === 'UG'}
            >
              <GraduationCap className={`w-4 h-4 shrink-0 ${activeLevel === 'UG' ? 'text-white' : 'text-[#CF0003]'}`} />
              <span>Undergraduate Programmes (UG)</span>
            </motion.button>

            {/* 2. Postgraduate Programmes (PG) Tab */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectLevel('PG')}
              className={`inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-extrabold text-xs sm:text-sm transition-all duration-200 shadow-sm active:scale-98 cursor-pointer ${
                activeLevel === 'PG'
                  ? 'bg-[#CF0003] text-white shadow-md'
                  : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-[#FFCB0B] hover:text-[#CF0003]'
              }`}
              aria-pressed={activeLevel === 'PG'}
            >
              <Layers className={`w-4 h-4 shrink-0 ${activeLevel === 'PG' ? 'text-white' : 'text-[#CF0003]'}`} />
              <span>Postgraduate Programmes (PG)</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: 3 Students Photo in a Clean, Proper Framed Card Shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end mt-2 lg:mt-0"
        >
          {/* Proper, Clean Rectangular Framed Card with Rounded Corners */}
          <div className="relative w-full max-w-[460px] mx-auto lg:mx-0 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group select-none">
            {/* Students Photograph Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50">
              <img
                src="/images/catalog/catalog_hero_students.webp"
                alt="Sree Sakthi Students Collaborating with Laptop in Library"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Gentle Vignette Gradient for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Dual Red & Yellow Swoosh Accent at Bottom-Right - Matching Discipline Cards */}
            <div className="absolute bottom-0 right-0 w-20 sm:w-24 h-14 sm:h-16 pointer-events-none z-10">
              <svg
                viewBox="0 0 100 65"
                fill="none"
                className="w-full h-full block"
                preserveAspectRatio="none"
              >
                {/* Yellow Arc */}
                <path
                  d="M100,0 C80,35 45,55 0,65 L100,65 Z"
                  fill="#FFCB0B"
                />
                {/* Red Inner Arc */}
                <path
                  d="M100,15 C85,42 55,58 18,65 L100,65 Z"
                  fill="#CF0003"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
