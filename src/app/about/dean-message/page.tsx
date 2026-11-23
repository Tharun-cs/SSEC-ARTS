'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageBanner } from '@/components/shared/PageBanner';
import { BookOpen, Sparkles, Award, ArrowRight, CheckCircle2, Compass } from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeData';

export default function DeanMessagePage() {
  return (
    <div className="bg-white min-h-screen select-none font-sans overflow-x-hidden">
      {/* 1. Page Banner */}
      <PageBanner
        title="Dean's Message"
        subtitle="Perspectives on curricular architecture, faculty mentorship, student welfare, and multidisciplinary academic culture."
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Leaders', href: '/about/leaders' },
          { label: "Dean's Message" }
        ]}
      />

      {/* 2. Message Content */}
      <div className="py-14 sm:py-16 md:py-20 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: Dean Profile Card (Compact & Elegant) */}
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
                    src="/images/management/dean_malarvizhi.webp"
                    alt="Prof. P. Malarvizhi - Dean"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172C4F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#172C4F] mb-0.5">
                    Prof. P. Malarvizhi
                  </h3>
                  <p className="text-xs font-bold text-[#CF0003] uppercase tracking-wider mb-2.5">
                    Dean
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#172C4F] uppercase tracking-wider mb-2.5">
                    <Award className="w-3.5 h-3.5 text-[#FFCB0B] shrink-0" />
                    <span>Curricular Modernism &amp; Mentorship</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal mb-3">
                    Orchestrating Choice Based Credit System (CBCS), continuous internal evaluations, student advisory boards, and multidisciplinary clubs.
                  </p>
                  <div className="p-3 rounded-xl bg-[#FFFDF8] border border-amber-100 text-[11px] text-[#172C4F] italic leading-relaxed">
                    &ldquo;Curiosity is the spark of genius. Our academic ecosystem provides every student with the mentorship and tools to explore without boundaries.&rdquo;
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
                  FROM THE DESK OF THE DEAN
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#171717] tracking-tight leading-tight mb-4">
                Fostering Curiosity, <span className="text-[#CF0003]">Nurturing Excellence</span>
              </h2>

              <div className="w-14 h-1.5 bg-[#CF0003] rounded-full mb-6" />

              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                <p>
                  Dear Young Scholars, Faculty, and Visitors,
                </p>
                <p>
                  It is a profound privilege to share my thoughts as the Dean of Academic Affairs at <strong>Sree Sakthi College of Arts and Science</strong>. Our academic mission revolves around one central commitment: ensuring that every student experiences an inspiring, rigorous, and supportive intellectual journey.
                </p>
                <p>
                  Our curriculum is structured in accordance with contemporary autonomous academic regulations, blending foundational disciplines in Science, Mathematics, English Literature, and Commerce with advanced computational electives, data analytics, and digital business tools. We believe that true academic excellence comes from active participation, debate, laboratory experimentation, and independent project work.
                </p>
                <p>
                  We have instituted a proactive student mentoring system where faculty members provide continuous academic guidance, career counsel, and moral support to every pupil. Through co-curricular activities, seminars, inter-collegiate paper presentations, and cultural societies, we foster well-rounded graduates capable of thriving in complex real-world situations.
                </p>
                <p>
                  I warmly welcome you to explore our academic framework, engage deeply with our dedicated faculty, and make the most of every learning opportunity offered at Sree Sakthi.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6 pt-4 border-t border-amber-100">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">Choice Based Credit System (CBCS)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">Proactive 1-on-1 Student Mentoring</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">Inter-Disciplinary Electives</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">Continuous Formative Evaluations</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

