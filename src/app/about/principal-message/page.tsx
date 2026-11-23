'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageBanner } from '@/components/shared/PageBanner';
import { GraduationCap, Sparkles, Award, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeData';

export default function PrincipalMessagePage() {
  return (
    <div className="bg-white min-h-screen select-none font-sans overflow-x-hidden">
      {/* 1. Page Banner */}
      <PageBanner
        title="Principal's Message"
        subtitle="Insights from the academic head on student-centric teaching, intellectual curiosity, and holistic professional transformation."
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Leaders', href: '/about/leaders' },
          { label: "Principal's Message" }
        ]}
      />

      {/* 2. Message Content */}
      <div className="py-14 sm:py-16 md:py-20 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: Principal Profile Card (Compact & Elegant) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-4 max-w-sm mx-auto lg:max-w-[320px] w-full"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-2xl hover:border-[#CF0003]/30 transition-all duration-300 sticky top-28 group">
                <div className="relative aspect-[4/3.8] overflow-hidden bg-gray-100 border-b border-gray-100">
                  <img
                    src="/images/management/principal_jayaprakash.webp"
                    alt="Dr. G. Jayaprakash - Principal"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172C4F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#172C4F] mb-0.5">
                    Dr. G. Jayaprakash
                  </h3>
                  <p className="text-xs font-bold text-[#CF0003] uppercase tracking-wider mb-2.5">
                    Principal
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#172C4F] uppercase tracking-wider mb-2.5">
                    <Award className="w-3.5 h-3.5 text-[#FFCB0B] shrink-0" />
                    <span>Academic Leadership &amp; Research</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal mb-3">
                    Guiding student-centered pedagogy, multidisciplinary laboratory research, faculty scholarship, and autonomous curricular rigor.
                  </p>
                  <div className="p-3 rounded-xl bg-[#FFFDF8] border border-amber-100 text-[11px] text-[#172C4F] italic leading-relaxed">
                    &ldquo;Collegiate education at Sree Sakthi equips young scholars not merely with degrees, but with versatile competence and moral integrity.&rdquo;
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Full Message Letter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-8 flex flex-col justify-center text-left"
            >
              <div className="inline-flex items-center gap-3 mb-2">
                <span className="w-8 sm:w-12 h-0.5 sm:h-1 bg-[#FFCB0B] rounded-full inline-block" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#CF0003]">
                  FROM THE DESK OF THE PRINCIPAL
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#171717] tracking-tight leading-tight mb-4">
                Empowering Students for <span className="text-[#CF0003]">Lifelong Leadership</span>
              </h2>

              <div className="w-14 h-1.5 bg-[#CF0003] rounded-full mb-6" />

              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                <p>
                  A Warm Welcome to Sree Sakthi College of Arts and Science!
                </p>
                <p>
                  Higher education is an extraordinary phase of intellectual awakening and personal transformation. At <strong>Sree Sakthi College of Arts and Science</strong>, our educational architecture is thoughtfully engineered to inspire critical thinking, analytical agility, and moral character.
                </p>
                <p>
                  Our academic offerings span vibrant undergraduate domains including Computer Applications, Computer Science, Information Technology, Business Administration, Commerce, Mathematics, and English Literature. Through Choice Based Credit System (CBCS) and outcome-based education (OBE), we challenge our students to question, explore, and innovate.
                </p>
                <p>
                  Beyond traditional classroom lectures, our faculty members serve as active research mentors. Through structured pre-placement aptitude coaching, coding marathons, commerce symposiums, and literary fests, we prepare students to confidently enter premier corporate organizations, pursue advanced postgraduate research, or pioneer entrepreneurial ventures.
                </p>
                <p>
                  I warmly encourage each student to take full advantage of our modern laboratory facilities, library resources, and student development cells, building a career characterized by competence and character.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6 pt-4 border-t border-amber-100">
                <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-red-50/60 hover:translate-x-1.5 transition-all duration-200">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">Outcome-Based Education (OBE)</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-red-50/60 hover:translate-x-1.5 transition-all duration-200">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">Research &amp; Innovation Mentorship</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-red-50/60 hover:translate-x-1.5 transition-all duration-200">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">Pre-Placement Training &amp; Soft Skills</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-red-50/60 hover:translate-x-1.5 transition-all duration-200">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">Active Student Clubs &amp; Sports</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

