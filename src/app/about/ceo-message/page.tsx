'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageBanner } from '@/components/shared/PageBanner';
import { Building2, Sparkles, Award, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeData';

export default function CEOMessagePage() {
  return (
    <div className="bg-white min-h-screen select-none font-sans overflow-x-hidden">
      {/* 1. Page Banner */}
      <PageBanner
        title="CEO's Message"
        subtitle="Insights on institutional scalability, digital infrastructure expansion, and corporate recruitment ecosystems."
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Leaders', href: '/about/leaders' },
          { label: "CEO's Message" }
        ]}
      />

      {/* 2. Message Content */}
      <div className="py-14 sm:py-16 md:py-20 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: CEO Profile Card (Compact & Elegant) */}
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
                    src="/images/management/ceo_prasannan.webp"
                    alt="Dr. N. Prasannan - Chief Executive Officer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172C4F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#172C4F] mb-0.5">
                    Dr. N. Prasannan
                  </h3>
                  <p className="text-xs font-bold text-[#CF0003] uppercase tracking-wider mb-2.5">
                    Chief Executive Officer
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#172C4F] uppercase tracking-wider mb-2.5">
                    <Award className="w-3.5 h-3.5 text-[#FFCB0B] shrink-0" />
                    <span>Operational &amp; Corporate Excellence</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal mb-3">
                    Directing campus digital infrastructure, industry linkages, corporate recruitment drives, and strategic expansion.
                  </p>
                  <div className="p-3 rounded-xl bg-[#FFFDF8] border border-amber-100 text-[11px] text-[#172C4F] italic leading-relaxed">
                    &ldquo;Our vision is to build an agile, technology-driven campus where every student transitions seamlessly into high-impact corporate careers.&rdquo;
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
                  FROM THE DESK OF THE CHIEF EXECUTIVE OFFICER
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#171717] tracking-tight leading-tight mb-4">
                Scaling Standards, <span className="text-[#CF0003]">Accelerating Careers</span>
              </h2>

              <div className="w-14 h-1.5 bg-[#CF0003] rounded-full mb-6" />

              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                <p>
                  Greetings to our Aspirants, Students, and Corporate Partners,
                </p>
                <p>
                  At <strong>Sree Sakthi College of Arts and Science</strong>, our focus is squarely on operational excellence, futuristic infrastructure, and student outcome delivery. We view higher education as a high-value ecosystem where academic theory converges with corporate readiness.
                </p>
                <p>
                  Over the past few years, we have systematically upgraded our technological footprint at Punjai Puliampatti: introducing high-speed gigabit computing laboratories, smart interactive lecture rooms, advanced digital libraries, and specialized skill incubation suites. These resources ensure our students practice with the exact tools and workflows expected by multinational corporate recruiters.
                </p>
                <p>
                  Our dedicated Corporate Relations and Placement Cell works relentlessly throughout the year, cultivating active hiring partnerships with top tier MNCs like TCS, Infosys, Zoho, Cognizant, and major commercial banking institutions. We ensure that 100% of our eligible students receive systematic guidance, resume coaching, and mock interview preparations.
                </p>
                <p>
                  We are committed to continually modernizing our campus facilities, fostering entrepreneurial initiative, and making Sree Sakthi the premier choice for progressive collegiate education in Tamil Nadu.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6 pt-4 border-t border-amber-100">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">150+ Corporate Recruitment Partners</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">Digital Workstation Laboratories</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">Industry Certifications &amp; Bootcamps</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0" />
                  <span className="text-xs font-bold text-[#172C4F]">Campus Innovation Ecosystem</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

