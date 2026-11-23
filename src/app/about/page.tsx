'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Check,
  Sparkles,
  ArrowRight,
  PhoneCall,
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  BookOpen,
  Users
} from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeData';

// 4 Statistics Columns matching reference layout & home page palette
const ABOUT_STATS = [
  {
    id: 'stat-founded',
    value: '2010',
    suffix: '',
    label: 'YEAR FOUNDED',
    sub: 'Established in Punjai Puliampatti'
  },
  {
    id: 'stat-programs',
    value: '26',
    suffix: '+',
    label: 'PROGRAMS OFFERED',
    sub: 'Arts, Science & Commerce'
  },
  {
    id: 'stat-students',
    value: '4,500',
    suffix: '+',
    label: 'ACTIVE STUDENTS',
    sub: 'Holistic Career Empowerment'
  },
  {
    id: 'stat-faculty',
    value: '300',
    suffix: '+',
    label: 'EXPERT FACULTY',
    sub: 'Dedicated Mentors & Scholars'
  }
];

// 6 Key Achievement Points (2 columns × 3 rows) matching reference specification
const ACHIEVEMENTS = [
  { id: 'ach-1', title: 'UGC Recognition' },
  { id: 'ach-2', title: 'ISO Certification' },
  { id: 'ach-3', title: 'Industry Partnerships' },
  { id: 'ach-4', title: 'Research-Driven Curriculum' },
  { id: 'ach-5', title: 'State-of-the-Art Labs' },
  { id: 'ach-6', title: 'Global MoU Network' }
];

// Milestones / Growth Journey matching reference specification
const MILESTONES = [
  {
    year: '2010',
    title: 'The Foundation',
    description:
      'Sree Sakthi College of Arts and Science was founded in 2010 with flagship undergraduate programmes and a vibrant campus designed to foster academic eminence, creative inquiry, and career readiness.'
  },
  {
    year: '2015',
    title: 'Academic Expansion',
    description:
      'Expanded our programme portfolio across computing, commerce, management, and physical sciences, significantly broadening higher education access and student opportunity.'
  },
  {
    year: '2020',
    title: 'Digital & Research Hub',
    description:
      'Established high-speed computing laboratories, multidisciplinary research hubs, and smart classrooms in collaboration with leading academic and industrial partners.'
  },
  {
    year: '2024',
    title: 'Global MoUs & Placements',
    description:
      'Formed strategic international academic MoUs, earned premier ISO and UGC recognitions, and achieved landmark 100% placement guidance across leading MNCs.'
  }
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-[#172C4F] select-none font-sans overflow-x-hidden">
      
      {/* ========================================================
          1. HERO SECTION – ABOUT SSEC (Animated & Rich Blue Shade)
          ======================================================== */}
      <section
        className="relative w-full overflow-hidden bg-[#0F2B56] flex flex-col justify-center min-h-[420px] sm:min-h-[460px] md:min-h-[490px] lg:min-h-[520px] py-12 sm:py-14 md:py-16 lg:py-18"
        aria-label="About SSEC Hero Section"
      >
        {/* Full-Width Campus Photograph Background with Subtle Ken-Burns Motion */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.01 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/ssec_campus_academic_block.jpg"
            alt="Sree Sakthi College of Arts and Science Campus"
            className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.04]"
          />
          {/* Rich Royal Navy Blue Shade Overlay Matching College Palette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F2B56]/82 via-[#18467D]/52 to-[#0F2B56]/86" />
        </motion.div>

        {/* Centered Hero Content with Rich Staggered Animations */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white my-auto">
          {/* Small Label: — ABOUT SSEC — with Home Page Style Flanking Yellow Lines */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-3.5"
          >
            <span className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-[#FFCB0B] rounded-full inline-block" />
            <span className="text-xs sm:text-sm md:text-[15px] font-black uppercase tracking-[0.25em] text-[#FFCB0B] drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
              ABOUT SSEC
            </span>
            <span className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-[#FFCB0B] rounded-full inline-block" />
          </motion.div>

          {/* Main Heading: A Legacy of Academic Excellence */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[60px] font-black tracking-tight leading-[1.12] mb-3.5 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          >
            <span className="text-white block sm:inline">A Legacy of </span>
            <span className="text-[#FFCB0B] italic font-serif">Academic Excellence</span>
          </motion.h1>

          {/* Description Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="text-white/95 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal mb-6 sm:mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
          >
            Sree Sakthi College of Arts and Science is committed to nurturing academic talent, fostering creative innovation and building skilled graduates for a better tomorrow.
          </motion.p>

          {/* Three Highlight / Accreditation Badges with Hover Micro-Interactions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5"
          >
            {/* Badge 1: UGC Recognized */}
            <motion.div
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F2B56]/70 backdrop-blur-md border border-white/35 text-white text-xs sm:text-[13px] font-semibold shadow-md hover:border-[#FFCB0B] hover:shadow-[0_4px_20px_rgba(255,203,11,0.25)] transition-all cursor-default"
            >
              <span className="w-4 h-4 rounded-full bg-[#FFCB0B] text-[#172C4F] flex items-center justify-center font-black text-[10px] shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>UGC Recognized</span>
            </motion.div>

            {/* Badge 2: ISO Certified */}
            <motion.div
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F2B56]/70 backdrop-blur-md border border-white/35 text-white text-xs sm:text-[13px] font-semibold shadow-md hover:border-[#FFCB0B] hover:shadow-[0_4px_20px_rgba(255,203,11,0.25)] transition-all cursor-default"
            >
              <span className="w-4 h-4 rounded-full bg-[#FFCB0B] text-[#172C4F] flex items-center justify-center font-black text-[10px] shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>ISO Certified</span>
            </motion.div>

            {/* Badge 3: Est. 2010 */}
            <motion.div
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F2B56]/70 backdrop-blur-md border border-white/35 text-white text-xs sm:text-[13px] font-semibold shadow-md hover:border-[#FFCB0B] hover:shadow-[0_4px_20px_rgba(255,203,11,0.25)] transition-all cursor-default"
            >
              <span className="w-4 h-4 rounded-full bg-[#FFCB0B] text-[#172C4F] flex items-center justify-center font-black text-[10px] shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>Est. 2010</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          2. KEY STATISTICS SECTION (Matching Home Page Palette)
          ======================================================== */}
      <section
        className="w-full bg-white py-12 sm:py-14 md:py-16 border-b border-gray-100 relative overflow-hidden"
        aria-label="Key College Statistics"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 items-center">
            {ABOUT_STATS.map((stat, index) => {
              const isLast = index === ABOUT_STATS.length - 1;

              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 35, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.25 } }}
                  className="relative flex flex-col items-center text-center px-4 sm:px-6 py-4 rounded-2xl transition-all duration-300 hover:bg-amber-50/50 hover:shadow-lg group cursor-default"
                >
                  {/* Large Number with Yellow Plus Suffix & Red Hover Glow */}
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#172C4F] group-hover:text-[#CF0003] transition-colors duration-300 leading-none mb-2 tracking-tight drop-shadow-xs"
                  >
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-[#FFCB0B] ml-0.5 group-hover:text-[#CF0003] transition-colors">{stat.suffix}</span>
                    )}
                  </motion.div>

                  {/* Small Uppercase Description */}
                  <h3 className="text-xs sm:text-[13px] font-black tracking-widest text-[#172C4F]/80 uppercase mb-1">
                    {stat.label}
                  </h3>

                  {/* Subtitle note */}
                  <p className="text-[11px] text-gray-500 font-medium">
                    {stat.sub}
                  </p>

                  {/* Golden Yellow Underline Accent with Scale Animation */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="w-12 h-1 bg-[#FFCB0B] group-hover:w-16 group-hover:bg-[#CF0003] transition-all duration-300 rounded-full mx-auto mt-3 origin-center"
                  />

                  {/* Thin Vertical Separator between columns on Desktop */}
                  {!isLast && (
                    <div
                      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-gray-200 pointer-events-none"
                      aria-hidden="true"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. OUR STORY SECTION (Home Page Color Pattern & Rich Motion)
          ======================================================== */}
      <section
        id="our-story"
        className="w-full bg-[#FFFDF8] py-16 sm:py-20 lg:py-24 overflow-hidden relative border-b border-amber-100/60"
        aria-label="Our Story"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Centered Section Label Matching Home Page Header Pattern */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14"
          >
            <span className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-[#FFCB0B] rounded-full inline-block" />
            <span className="text-xs sm:text-sm md:text-base font-black uppercase tracking-wider text-[#CF0003]">
              OUR STORY
            </span>
            <span className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-[#FFCB0B] rounded-full inline-block" />
          </motion.div>

          {/* Two-Column Arrangement: Left Image | Right Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT SIDE: Large Rectangular Campus Photograph with Hover Zoom */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 w-full"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-amber-100 bg-white aspect-[4/3] sm:aspect-[16/11] group">
                <img
                  src="/images/ssec_campus_academic_block.jpg"
                  alt="Sree Sakthi College of Arts and Science Academic Block"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle Hover Gradient Sheen */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#172C4F]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Established Pill Badge with Floating Motion */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-amber-200/80 text-xs font-bold text-[#172C4F]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#CF0003]" />
                  <span>Est. 2010 • Punjai Puliampatti</span>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: Heading, Description & 6 Achievement Points */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-center text-left"
            >
              {/* Heading: More than a College... Evolving Excellence Through Visionary Education */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#171717] tracking-tight leading-tight mb-3">
                <span className="text-[#171717]">More than a </span>
                <span className="text-[#FFCB0B] font-serif italic">College...</span>
                <span className="block text-xl sm:text-2xl lg:text-3xl text-[#172C4F] font-bold mt-1.5">
                  Evolving Excellence Through <span className="text-[#CF0003]">Visionary Education</span>
                </span>
              </h2>

              {/* SSEC Red Accent Bar */}
              <div className="w-14 h-1.5 bg-[#CF0003] rounded-full mb-5" />

              {/* Description Paragraphs */}
              <p className="text-[#172C4F]/85 text-sm sm:text-[15px] leading-relaxed font-normal mb-4">
                Founded in 2010 with an unyielding commitment to academic eminence, <strong>Sree Sakthi College of Arts and Science</strong> has evolved into a premier destination for progressive higher education, arts, commerce, and scientific innovation at Sellappampalayam, Punjai Puliampatti.
              </p>
              <p className="text-[#172C4F]/80 text-sm sm:text-[15px] leading-relaxed font-normal mb-7">
                Our institution blends rigorous multidisciplinary knowledge with practical laboratory and commerce learning, empowering students to transform learning into impactful research advancements, creative achievements, and successful professional careers.
              </p>

              {/* Six Achievement Points Arranged in Two Columns (2 cols × 3 rows) with Interactive Hover */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 pt-5 border-t border-amber-100">
                {ACHIEVEMENTS.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 + idx * 0.07 }}
                    whileHover={{ x: 6, scale: 1.02 }}
                    className="flex items-center gap-2.5 group/item cursor-default p-1.5 rounded-lg hover:bg-amber-50/70 transition-colors"
                  >
                    {/* Golden Yellow Circular Check Icon Matching Home Page */}
                    <span className="w-5 h-5 rounded-full bg-[#FFCB0B] text-[#172C4F] flex items-center justify-center font-black text-[10px] shrink-0 shadow-2xs group-hover/item:bg-[#CF0003] group-hover/item:text-white group-hover/item:rotate-12 transition-all duration-300">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#172C4F] group-hover/item:text-[#CF0003] transition-colors duration-200">
                      {item.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ========================================================
          4. MILESTONES / OUR GROWTH JOURNEY (Animated & Polished)
          ======================================================== */}
      <section
        id="growth-journey"
        className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-100 relative overflow-hidden"
        aria-label="Our Growth Journey"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header matching home page style: — MILESTONES — */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12 sm:mb-16"
          >
            {/* Small label: — MILESTONES — */}
            <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-2.5 sm:mb-3">
              <span className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-[#FFCB0B] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#CF0003]">
                MILESTONES
              </span>
              <span className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-[#FFCB0B] rounded-full inline-block" />
            </div>

            {/* Main Heading: Our Growth Journey */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#171717] tracking-tight leading-tight">
              Our <span className="text-[#CF0003]">Growth</span> Journey
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto mt-2">
              Key institutional milestones that shaped Sree Sakthi into a premier Arts and Science institution.
            </p>
          </motion.div>

          {/* Timeline Milestones List with Smooth Staggered Animations */}
          <div className="relative">
            {MILESTONES.map((item, index) => {
              const isLast = index === MILESTONES.length - 1;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-start pb-8 sm:pb-10 last:pb-0 group"
                >
                  {/* Left Column: Year Text with Interactive Animation */}
                  <div className="w-16 sm:w-20 pt-1 shrink-0 text-left sm:text-right pr-2 sm:pr-4">
                    <motion.span
                      whileHover={{ scale: 1.12, x: -3 }}
                      className="text-xl sm:text-2xl font-black text-[#CF0003] group-hover:text-[#FFCB0B] transition-colors duration-300 tracking-tight block cursor-default drop-shadow-xs"
                    >
                      {item.year}
                    </motion.span>
                  </div>

                  {/* Center Column: Node + Connecting Vertical Line with Animated Pulse */}
                  <div className="relative flex flex-col items-center pt-2.5 shrink-0 px-2 sm:px-3">
                    {/* Pulsing Glow Ring behind Node */}
                    <div className="relative flex items-center justify-center">
                      <span className="absolute -inset-1 rounded-full bg-[#FFCB0B]/50 animate-ping opacity-60 pointer-events-none" />
                      <div className="relative w-4 h-4 rounded-full border-2 border-[#CF0003] bg-white ring-4 ring-red-50 z-10 transition-all duration-300 group-hover:scale-130 group-hover:bg-[#FFCB0B] group-hover:ring-[#FFCB0B]/30" />
                    </div>
                    
                    {/* Vertical Connecting Line to Next Node */}
                    {!isLast && (
                      <div
                        className="absolute top-6 bottom-0 w-[2px] bg-gradient-to-b from-[#CF0003] via-[#FFCB0B]/60 to-[#CF0003]/30 group-hover:from-[#CF0003] group-hover:to-[#CF0003] transition-colors"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Right Column: White Card with Title & Description */}
                  <div className="flex-1 ml-3 sm:ml-6">
                    <motion.div
                      whileHover={{ y: -6, scale: 1.015, boxShadow: '0 12px 30px -5px rgba(207, 0, 3, 0.08)' }}
                      transition={{ duration: 0.25 }}
                      className="bg-[#FFFDF8] rounded-xl sm:rounded-2xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-amber-100/80 hover:border-[#CF0003]/50 transition-all duration-300 group-hover:bg-white"
                    >
                      <h3 className="text-lg sm:text-xl font-bold text-[#171717] mb-1.5 sm:mb-2 tracking-tight group-hover:text-[#CF0003] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-gray-600 font-normal leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          5. CALL TO ACTION (Matching Home Page Palette & Atmosphere)
          ======================================================== */}
      <section
        className="bg-gradient-to-r from-[#8C0002] via-[#CF0003] to-[#CF0003] text-white py-14 sm:py-16 md:py-20 relative overflow-hidden select-none"
        aria-label="Call to Action - Admissions"
      >
        {/* Decorative Golden Ambient Accent matching Home Page */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#FFCB0B]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#FFCB0B]/10 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Pill Badge with Gentle Breathing Motion */}
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center gap-2 bg-[#FFCB0B] text-[#171717] font-black text-xs uppercase px-4 py-1.5 rounded-full mb-4 shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#CF0003]" />
              <span>Admissions Open for Academic Year 2026–2027</span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-3 sm:mb-4 leading-tight drop-shadow-sm">
              Shape Your Future With Excellence.
            </h2>

            {/* Description Subtitle */}
            <p className="text-sm sm:text-base text-red-100 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              Enroll in Sree Sakthi College of Arts and Science, Punjai Puliampatti. Explore our diverse range of programmes in Computing, IT, Commerce, Management, and Literature.
            </p>

            {/* Action Buttons with Interactive Hover & Glow Animations */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -3, boxShadow: '0 12px 28px -5px rgba(255, 203, 11, 0.45)' }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/admissions"
                  className="w-full sm:w-auto bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#171717] font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Apply for Admissions Online</span>
                  <ArrowRight className="w-4 h-4 text-[#CF0003] group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -3, boxShadow: '0 12px 28px -5px rgba(255, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-transparent hover:bg-white text-white hover:text-[#CF0003] border-2 border-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3 rounded-full transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Campus Visit &amp; Helpdesk</span>
                </Link>
              </motion.div>
            </div>

            {/* Address Footer Strip */}
            <div className="mt-8 pt-6 border-t border-white/20 text-xs text-red-100 flex flex-wrap items-center justify-center gap-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FFCB0B]" />
                Coimbatore Main Road, Sellappampalayam, Punjai Puliampatti – 641459
              </span>
              <span className="hidden sm:inline">•</span>
              <span>Helpdesk: {COLLEGE_INFO.phone}</span>
              <span className="hidden sm:inline">•</span>
              <span>{COLLEGE_INFO.email}</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}