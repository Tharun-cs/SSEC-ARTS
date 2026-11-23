'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const WelcomeSection: React.FC = () => {
  return (
    <>
      <section
        id="welcome-section"
        className="relative w-full bg-[#CF0003] text-white overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24 select-none"
        aria-label="Welcome to Sree Sakthi Elite Campus"
      >
        {/* Top-Left Yellow Corner Wave (Exact News & Updates Page Border Shape) */}
        <div className="absolute top-0 left-0 w-28 sm:w-36 md:w-44 lg:w-52 max-h-[42px] sm:max-h-[48px] pointer-events-none select-none z-0">
          <svg
            viewBox="0 0 160 45"
            fill="none"
            className="w-full h-auto block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,0 L160,0 C85,6 20,12 0,44 Z"
              fill="#FFCB0B"
            />
          </svg>
        </div>

        {/* Bottom-Right Yellow Corner Wave (Exact News & Updates Page Border Shape) */}
        <div className="absolute bottom-0 right-0 w-36 sm:w-48 md:w-56 lg:w-64 max-h-[48px] sm:max-h-[55px] pointer-events-none select-none z-0">
          <svg
            viewBox="0 0 240 50"
            fill="none"
            className="w-full h-auto block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M240,0 C220,25 150,42 0,50 L240,50 Z"
              fill="#FFCB0B"
            />
          </svg>
        </div>

        {/* Main Content Container */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* LEFT COLUMN: Welcome Institutional Content (~58% width on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >

              {/* Small horizontal yellow decorative line */}
              <div />

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black uppercase tracking-tight text-white leading-[1.15]">
                Welcome to <span className="text-[#FFCB0B]">SREE SAKTHI</span>
                <span className="block mt-1">ELITE CAMPUS</span>
              </h2>

              {/* Short yellow underline below heading */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-14 h-1.5 bg-[#FFCB0B] rounded-full mt-3 mb-6 origin-left"
              />

              {/* Description Paragraph 1 */}
              <p className="text-white/95 text-sm sm:text-[15px] md:text-base leading-relaxed mb-4 font-normal max-w-2xl">
                Sree Sakthi College of Arts and Science is a premier institution committed to providing quality education, holistic development and industry–ready skills to students.
              </p>

              {/* Description Paragraph 2 */}
              <p className="text-white/95 text-sm sm:text-[15px] md:text-base leading-relaxed mb-8 font-normal max-w-2xl">
                Established with a vision to create competent and responsible graduates, the college offers a wide range of undergraduate programmes in Computer Applications, Computer Science, Information Technology, Commerce, Management, Mathematics and English Literature.
              </p>

              {/* Learn More About Us Button */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#FFCB0B] hover:bg-[#E5B50A] active:scale-98 text-[#CF0003] font-bold text-sm sm:text-[15px] px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 select-none"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </motion.div>

            </motion.div>

            {/* RIGHT COLUMN: Official College Campus Image Card (White Theme) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 w-full"
            >
              <div className="relative w-full max-w-lg lg:max-w-none mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white border-2 border-white/80 group">

                {/* 1. Header Bar: College Seal & Institutional Identity (White) */}
                <div className="bg-white p-3 sm:p-3.5 flex items-center justify-between border-b border-gray-100 z-10">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/ssec_seal_transparent.png"
                      alt="College Seal"
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0"
                    />
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-extrabold text-[#171717] leading-tight">
                        Sree Sakthi Elite Campus
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-[#666666] leading-tight font-medium">
                        College of Arts and Science • Coimbatore
                      </p>
                    </div>
                  </div>
                  <span className="text-[10.5px] font-extrabold text-[#CF0003] bg-[#FFCB0B] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    Campus
                  </span>
                </div>

                {/* 2. Official College Campus Photograph */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] overflow-hidden bg-gray-50">
                  <img
                    src="/images/ssec_campus_academic_block.jpg"
                    alt="Sree Sakthi College of Arts and Science - Elite Campus"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* 3. Bottom Institutional Identification Bar (White) */}
                <div className="bg-white px-4 py-2.5 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="font-medium text-[#444444]">
                    Coimbatore Main Road, Sellappampalayam, Punjai Puliampatti
                  </span>
                  <span className="text-[#CF0003] font-bold text-[11px] uppercase tracking-wide">
                    Elite Campus
                  </span>
                </div>

              </div>
            </motion.div>

          </div>
        </div>

      </section>
    </>
  );
};

