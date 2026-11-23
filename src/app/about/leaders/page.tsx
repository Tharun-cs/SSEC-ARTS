'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageBanner } from '@/components/shared/PageBanner';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { MANAGEMENT_MEMBERS } from '@/data/managementData';

export default function LeadersPage() {
  return (
    <div className="bg-white min-h-screen select-none font-sans overflow-x-hidden">
      {/* 1. Page Banner */}
      <PageBanner
        title="Board Members"
        subtitle="Meet the visionary founders, chairman, and board members steering Sree Sakthi toward educational excellence."
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Board Members' }
        ]}
      />

      {/* 2. Management & Governing Body */}
      <div className="py-14 sm:py-16 md:py-20 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
              <span className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-[#FFCB0B] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#CF0003]">
                BOARD MEMBERS
              </span>
              <span className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-[#FFCB0B] rounded-full inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#171717] tracking-tight">
              Institutional <span className="text-[#CF0003]">Board Members</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mt-2 font-normal">
              Dedicated board members guiding Sree Sakthi College of Arts and Science with vision, integrity, and philanthropic devotion.
            </p>
          </motion.div>

          {/* Management Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 mb-16">
            {MANAGEMENT_MEMBERS.map((member, idx) => {
              const hasMessage =
                member.id === 'chairman'
                  ? '/about/chairman-message'
                  : member.id === 'correspondent'
                  ? '/about/correspondent-message'
                  : null;

              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  className="bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-2xs hover:shadow-2xl hover:border-[#CF0003]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Member Image with Soft Zoom */}
                    <div className="relative aspect-[4/4] overflow-hidden bg-gray-100 border-b border-gray-100">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.designation}`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#172C4F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Member Details */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg font-bold text-[#172C4F] group-hover:text-[#CF0003] transition-colors leading-snug mb-1">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-[#CF0003] uppercase tracking-wider mb-2.5">
                        {member.designation}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed font-normal">
                        {member.roleDescription}
                      </p>
                    </div>
                  </div>

                  {hasMessage && (
                    <div className="p-5 pt-0">
                      <Link
                        href={hasMessage}
                        className="inline-flex items-center justify-between w-full px-4 py-2 rounded-xl bg-red-50 text-[#CF0003] hover:bg-[#CF0003] hover:text-white text-xs font-bold transition-all duration-200 group/btn"
                      >
                        <span>Read Message</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* 3. Dedicated Academic Leaders Page Link Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#172C4F] to-[#0A1C38] text-white p-6 sm:p-8 md:p-10 shadow-lg border-t-2 border-[#FFCB0B] flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FFCB0B] mb-1.5">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC LEADERSHIP</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Collegiate Academic Leaders
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl mt-1 font-normal leading-relaxed">
                Meet the Principal, Chief Executive Officer, and Dean steering daily academic framework, curriculum rigor, and student success.
              </p>
            </div>
            <Link
              href="/about/academic-leaders"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#CF0003] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shrink-0 shadow-md"
            >
              <span>View Academic Leaders</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
