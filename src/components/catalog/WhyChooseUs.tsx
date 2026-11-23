'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Users,
  Building2,
  Briefcase,
  ArrowRight,
  Sparkles,
  FileText
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="why-choose-ssec"
      className="w-full relative select-none pt-2 sm:pt-4 pb-8 sm:pb-10 bg-white overflow-hidden"
      aria-label="Why Choose Sree Sakthi College of Arts and Science"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. SECTION HEADER WITH ENTRANCE ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          {/* Header Mortarboard Cap & Flanking Tapered Red Lines */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            {/* Left Tapered Line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-12 sm:w-20 md:w-28 h-[2px] bg-gradient-to-r from-transparent via-[#CF0003]/60 to-[#CF0003] rounded-full origin-right"
            />

            {/* Mortarboard Icon with Golden Yellow Tassel */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ rotate: [-2, 2, -2], transition: { duration: 0.5 } }}
              className="relative w-12 h-10 sm:w-14 sm:h-11 flex items-center justify-center cursor-pointer"
            >
              <svg viewBox="0 0 64 48" fill="none" className="w-full h-full drop-shadow-xs">
                {/* Cap Diamond Top */}
                <polygon points="32,6 60,18 32,30 4,18" fill="#0F172A" />
                <polygon points="32,9 56,18 32,27 8,18" fill="#1E293B" />
                {/* Cap Skull Base */}
                <path
                  d="M16,23 L16,33 C16,39 23,43 32,43 C41,43 48,39 48,33 L48,23 C43,26 37,28 32,28 C27,28 21,26 16,23 Z"
                  fill="#0F172A"
                />
                {/* Golden Yellow Tassel Button & String */}
                <circle cx="32" cy="18" r="2.5" fill="#FFCB0B" />
                <path
                  d="M32,18 C38,19 44,22 47,26 L47,36"
                  stroke="#FFCB0B"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Tassel Fringe */}
                <rect x="45" y="36" width="4" height="7" rx="1.5" fill="#FFCB0B" />
              </svg>
            </motion.div>

            {/* Right Tapered Line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-12 sm:w-20 md:w-28 h-[2px] bg-gradient-to-l from-transparent via-[#CF0003]/60 to-[#CF0003] rounded-full origin-left"
            />
          </div>

          {/* Main Title: "Why Choose SSEC?" */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171717] leading-tight text-center">
            Why Choose <span className="text-[#CF0003]">SSEC?</span>
          </h2>

          {/* Dual-Color Horizontal Pill: Left Red, Right Yellow */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-center gap-1.5 mt-3"
          >
            <span className="w-8 sm:w-10 h-1.5 bg-[#CF0003] rounded-full" />
            <span className="w-8 sm:w-10 h-1.5 bg-[#FFCB0B] rounded-full" />
          </motion.div>
        </motion.div>

        {/* 2. FOUR BENEFIT CARDS (Alternating RED & WHITE Cards with Staggered Scroll Reveal) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-14">
          {/* ================= CARD 01 (RED CARD) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="relative rounded-3xl bg-gradient-to-b from-[#CF0003] via-[#BA0002] to-[#990002] p-7 sm:p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group min-h-[430px]"
          >
            {/* Bottom-right yellow organic curve */}
            <div className="absolute bottom-0 right-0 w-28 h-24 pointer-events-none select-none z-0">
              <svg viewBox="0 0 120 90" fill="none" className="w-full h-full block">
                <path d="M120,0 C105,45 55,75 0,100 L120,100 Z" fill="#FFCB0B" />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Top Row: Icon Badge & Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#CF0003] group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                </div>
                <span className="px-4 py-1.5 rounded-full bg-white text-[#171717] font-black text-sm sm:text-base shadow-sm">
                  01
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-[22px] font-black text-white leading-tight mb-3">
                Industry-Oriented<br />Curriculum
              </h3>

              {/* Description */}
              <p className="text-white/95 text-xs sm:text-[13px] leading-relaxed font-normal">
                Autonomous curriculum continuously updated with global IT leaders and market-ready competencies.
              </p>
            </div>

            {/* Bottom Action Button */}
            <div className="pt-6 relative z-10">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-gray-100 active:scale-98 text-[#CF0003] font-bold text-xs sm:text-sm shadow-md transition-all group/btn"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-[#CF0003] group-hover/btn:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* ================= CARD 02 (WHITE CARD) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="relative rounded-3xl bg-white p-7 sm:p-8 text-[#171717] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group min-h-[430px]"
          >
            <div className="relative z-10">
              {/* Top Row: Icon Badge & Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FFF9E6] shadow-2xs flex items-center justify-center text-[#CF0003] group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                </div>
                <span className="px-4 py-1.5 rounded-full bg-[#FFCB0B] text-[#171717] font-black text-sm sm:text-base shadow-sm">
                  02
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-[22px] font-black text-[#171717] leading-tight mb-1">
                Experienced<br />Faculty &amp; Mentors
              </h3>

              {/* Small Yellow Accent Line under first line */}
              <div className="w-8 h-1 bg-[#FFCB0B] rounded-full mb-3" />

              {/* Description */}
              <p className="text-gray-700 text-xs sm:text-[13px] leading-relaxed font-normal">
                Doctorate scholars, dedicated researchers, and corporate veterans nurturing students through personalized mentorship.
              </p>
            </div>

            {/* Bottom Action Button */}
            <div className="pt-6 relative z-10">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-red-50/50 active:scale-98 border border-[#CF0003] text-[#CF0003] font-bold text-xs sm:text-sm shadow-2xs transition-all group/btn"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-[#CF0003] group-hover/btn:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* ================= CARD 03 (RED CARD) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="relative rounded-3xl bg-gradient-to-b from-[#CF0003] via-[#BA0002] to-[#990002] p-7 sm:p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group min-h-[430px]"
          >
            {/* Bottom-right yellow organic curve */}
            <div className="absolute bottom-0 right-0 w-28 h-24 pointer-events-none select-none z-0">
              <svg viewBox="0 0 120 90" fill="none" className="w-full h-full block">
                <path d="M120,0 C105,45 55,75 0,100 L120,100 Z" fill="#FFCB0B" />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Top Row: Icon Badge & Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#CF0003] group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                  <Building2 className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                </div>
                <span className="px-4 py-1.5 rounded-full bg-white text-[#171717] font-black text-sm sm:text-base shadow-sm">
                  03
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-[22px] font-black text-white leading-tight mb-3">
                Modern<br />Learning Facilities
              </h3>

              {/* Description */}
              <p className="text-white/95 text-xs sm:text-[13px] leading-relaxed font-normal">
                High-speed Wi-Fi campus, advanced computing systems, digital seminar halls, and a rich automated library.
              </p>
            </div>

            {/* Bottom Action Button */}
            <div className="pt-6 relative z-10">
              <Link
                href="/campus-life"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-gray-100 active:scale-98 text-[#CF0003] font-bold text-xs sm:text-sm shadow-md transition-all group/btn"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-[#CF0003] group-hover/btn:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* ================= CARD 04 (WHITE CARD) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="relative rounded-3xl bg-white p-7 sm:p-8 text-[#171717] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group min-h-[430px]"
          >
            <div className="relative z-10">
              {/* Top Row: Icon Badge & Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FFF9E6] shadow-2xs flex items-center justify-center text-[#CF0003] group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                  <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                </div>
                <span className="px-4 py-1.5 rounded-full bg-[#FFCB0B] text-[#171717] font-black text-sm sm:text-base shadow-sm">
                  04
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-[22px] font-black text-[#171717] leading-tight mb-1">
                Career &amp;<br />Placement Support
              </h3>

              {/* Small Yellow Accent Line under first line */}
              <div className="w-8 h-1 bg-[#FFCB0B] rounded-full mb-3" />

              {/* Description */}
              <p className="text-gray-700 text-xs sm:text-[13px] leading-relaxed font-normal">
                Structured career readiness program with aptitude training, soft skills development, mock interviews, and placement assistance.
              </p>
            </div>

            {/* Bottom Action Button */}
            <div className="pt-6 relative z-10">
              <Link
                href="/placements"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-red-50/50 active:scale-98 border border-[#CF0003] text-[#CF0003] font-bold text-xs sm:text-sm shadow-2xs transition-all group/btn"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-[#CF0003] group-hover/btn:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 3. FIND THE RIGHT PROGRAMME FOR YOUR FUTURE BANNER WITH ENTRANCE ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#CF0003] text-white p-6 sm:p-8 md:p-10 shadow-xl select-none"
        >
          {/* Signature Top-Left Yellow Corner Wave */}
          <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-36 max-h-[32px] sm:max-h-[38px] pointer-events-none select-none z-10">
            <svg
              viewBox="0 0 160 45"
              fill="none"
              className="w-full h-auto block"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0,0 L160,0 C85,6 20,12 0,44 Z" fill="#FFCB0B" />
            </svg>
          </div>

          {/* Signature Bottom-Right Yellow Corner Swoosh */}
          <div className="absolute bottom-0 right-0 w-28 sm:w-36 md:w-44 max-h-[36px] sm:max-h-[42px] pointer-events-none select-none z-10">
            <svg
              viewBox="0 0 240 50"
              fill="none"
              className="w-full h-auto block"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M240,0 C220,25 150,42 0,50 L240,50 Z" fill="#FFCB0B" />
            </svg>
          </div>

          <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            {/* Left Text Column */}
            <div className="text-center lg:text-left max-w-2xl">

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                Find the Right Programme for Your Future
              </h3>

              <p className="text-white/90 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                Speak directly with our academic admissions advisors for course selection, fee concessions, sports quota eligibility, and seamless online enrollment.
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
              {/* Primary ENQUIRE NOW Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFCB0B] hover:bg-[#E5B50A] active:scale-98 text-[#171717] font-black text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
                >
                  <span>ENQUIRE NOW</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </motion.div>

              {/* Secondary Apply Online Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="/admissions"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:scale-98 text-white border border-white/30 font-bold text-xs sm:text-sm px-5 sm:px-6 py-3 rounded-full transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Apply Online</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
