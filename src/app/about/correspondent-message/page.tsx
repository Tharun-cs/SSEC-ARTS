'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageBanner } from '@/components/shared/PageBanner';
import { Sparkles, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeData';

export default function CorrespondentMessagePage() {
  return (
    <div className="bg-white min-h-screen select-none font-sans overflow-x-hidden">
      {/* 1. Page Banner */}
      <PageBanner
        title="Correspondent's Message"
        subtitle="Strategic perspectives on corporate industry linkages, experiential curriculum, and global student readiness."
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Leaders', href: '/about/leaders' },
          { label: "Correspondent's Message" }
        ]}
      />

      {/* 2. Message Content */}
      <div className="py-14 sm:py-16 md:py-20 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: Correspondent Profile Card (Compact & Elegant) */}
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
                    src="/images/management/correspondent.webp"
                    alt="Dr. S. Karthikeyan - Correspondent"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172C4F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#172C4F] mb-0.5">
                    Dr. S. Karthikeyan
                  </h3>
                  <p className="text-xs font-bold text-[#CF0003] uppercase tracking-wider mb-2.5">
                    Correspondent
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#172C4F] uppercase tracking-wider mb-2.5">
                    <Award className="w-3.5 h-3.5 text-[#FFCB0B] shrink-0" />
                    <span>Academic Innovation &amp; Industry Connect</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal mb-3">
                    Spearheading modern autonomous curricular framework, MoUs with multinational corporations, and student incubation.
                  </p>
                  <div className="p-3 rounded-xl bg-[#FFFDF8] border border-amber-100 text-[11px] text-[#172C4F] italic leading-relaxed">
                    &ldquo;Knowledge becomes impactful power only when translated into practical innovation, industrial collaboration, and ethical execution.&rdquo;
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
                  FROM THE DESK OF THE CORRESPONDENT
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#171717] tracking-tight leading-tight mb-4">
                Bridging Knowledge With <span className="text-[#CF0003]">Global Opportunities</span>
              </h2>

              <div className="w-14 h-1.5 bg-[#CF0003] rounded-full mb-6" />

              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                <p>
                  Warm Greetings to All,
                </p>
                <p>
                  At <strong>Sree Sakthi College of Arts and Science</strong>, our institutional trajectory is driven by a passionate commitment to progressive, industry-aligned education. As we navigate the demands of Industry 4.0 and digital transformation, we ensure that our collegiate programmes across Commerce, Computer Applications, Science, and Business Administration are continuously modern, interdisciplinary, and future-ready.
                </p>
                <p>
                  Our campus at Punjai Puliampatti offers state-of-the-art computational infrastructure, high-speed fiber connectivity, and dedicated corporate placement training cells. Through sustained industry partnerships, seminars, and live capstone projects, we bridge classroom instruction directly with real-world enterprise execution.
                </p>
                <p>
                  We are deeply proud of our vibrant student community, dedicated faculty, and expanding network of corporate recruiters who recognize the distinctive skill, humility, and rigor of Sree Sakthi graduates. We remain steadfast in our mission to open doors of opportunity, research, and global competitiveness for every student who joins our portals.
                </p>
              </div>

              {/* Strategic Priorities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6 pt-4 border-t border-amber-100">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">Industry-Integrated Laboratories</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">100% Dedicated Career Guidance</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">Global MoUs &amp; Certifications</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">Experiential Hands-On Curriculum</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

