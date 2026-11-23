'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageBanner } from '@/components/shared/PageBanner';
import {
  ArrowRight,
  Sparkles,
  Award,
  GraduationCap,
  Building2,
  BookOpen,
  CheckCircle2,
  Users
} from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeData';

export const ACADEMIC_LEADERS = [
  {
    id: 'principal',
    name: 'Dr. G. Jayaprakash',
    designation: 'Principal',
    department: 'Office of the Principal',
    image: '/images/management/principal_jayaprakash.webp',
    icon: GraduationCap,
    focus: 'Academic Excellence & Research Mentorship',
    roleDescription:
      'Directing academic architecture, outcome-based education (OBE), multidisciplinary laboratory research, faculty scholarship, and student intellectual growth across all undergraduate disciplines.',
    keyPillars: [
      'Outcome-Based Education (OBE)',
      'Research & Innovation Mentorship',
      'Autonomous Curricular Framework',
      'Faculty Development Programmes'
    ],
    messageHref: '/about/principal-message'
  },
  {
    id: 'ceo',
    name: 'Dr. N. Prasannan',
    designation: 'Chief Executive Officer',
    department: 'Executive Administration',
    image: '/images/management/ceo_prasannan.webp',
    icon: Building2,
    focus: 'Corporate Partnerships & Campus Infrastructure',
    roleDescription:
      'Overseeing digital campus infrastructure, multinational corporate tie-ups, industry-ready placement pathways, strategic campus expansions, and alumni network synergy.',
    keyPillars: [
      'Multinational Corporate Alliances',
      'High-Speed Digital Campus Infrastructure',
      'Pre-Placement Training & Hackathons',
      'Entrepreneurship & Incubation'
    ],
    messageHref: '/about/ceo-message'
  },
  {
    id: 'dean',
    name: 'Prof. P. Malarvizhi',
    designation: 'Dean',
    department: 'Academic & Student Affairs',
    image: '/images/management/dean_malarvizhi.webp',
    icon: BookOpen,
    focus: 'Curricular Rigor & Student Welfare',
    roleDescription:
      'Orchestrating Choice Based Credit System (CBCS), continuous internal evaluations, student advisory councils, co-curricular societies, and holistic personality development.',
    keyPillars: [
      'Choice Based Credit System (CBCS)',
      'Continuous Internal Evaluation (CIE)',
      'Multidisciplinary Clubs & Societies',
      'Student Welfare & Academic Mentoring'
    ],
    messageHref: '/about/dean-message'
  }
];

export default function AcademicLeadersPage() {
  return (
    <div className="bg-white min-h-screen select-none font-sans overflow-x-hidden">
      {/* 1. Page Banner */}
      <PageBanner
        title="Academic Leaders"
        subtitle="Meet the distinguished academic heads directing pedagogical excellence, institutional administration, and student empowerment."
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Academic Leaders' }
        ]}
      />

      {/* 2. Main Content Area */}
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
                ACADEMIC LEADERSHIP
              </span>
              <span className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-[#FFCB0B] rounded-full inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#171717] tracking-tight">
              Collegiate <span className="text-[#CF0003]">Academic Heads</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto mt-2 font-normal leading-relaxed">
              Senior academic and executive officers steering Sree Sakthi College of Arts and Science toward educational distinction, student intellectual curiosity, and professional triumph.
            </p>
          </motion.div>

          {/* Academic Leaders Grid (Order: 1. Principal, 2. CEO, 3. Dean) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto mb-16">
            {ACADEMIC_LEADERS.map((leader, idx) => {
              const IconComponent = leader.icon;

              return (
                <motion.div
                  key={leader.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.14, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  className="bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-2xs hover:shadow-2xl hover:border-[#CF0003]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Leader Portrait Photograph – Clean with NO text overlay */}
                    <div className="relative aspect-[4/4] overflow-hidden bg-gray-100 border-b border-gray-100">
                      <img
                        src={leader.image}
                        alt={`${leader.name} - ${leader.designation}`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#172C4F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Leader Details */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-black text-[#CF0003] uppercase tracking-wider">
                          {leader.designation}
                        </span>
                        <div className="w-8 h-8 rounded-xl bg-red-50 text-[#CF0003] flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#CF0003] group-hover:text-white transition-all duration-300">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-[#172C4F] group-hover:text-[#CF0003] transition-colors leading-snug mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-xs text-gray-400 font-medium mb-3">
                        {leader.department}
                      </p>

                      {/* Key Focus Tag */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFDF8] border border-amber-200 text-[#172C4F] text-[11px] font-bold mb-3.5 group-hover:border-[#CF0003]/30 transition-colors">
                        <Award className="w-3.5 h-3.5 text-[#FFCB0B] shrink-0" />
                        <span>{leader.focus}</span>
                      </div>

                      <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal mb-5">
                        {leader.roleDescription}
                      </p>

                      {/* Key Pillars */}
                      <div className="space-y-1.5 pt-3 border-t border-amber-100/70">
                        {leader.keyPillars.map((pillar, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#CF0003] shrink-0" />
                            <span className="text-xs text-gray-700 font-medium">
                              {pillar}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Read Message Action Button */}
                  <div className="p-6 pt-0">
                    <Link
                      href={leader.messageHref}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-red-50 text-[#CF0003] hover:bg-[#CF0003] hover:text-white text-xs font-bold transition-all duration-200 shadow-2xs hover:shadow-md group/btn"
                    >
                      <span>Read Official Message</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 3. Link back to Governing Board & Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#172C4F] to-[#0A1C38] text-white p-6 sm:p-8 md:p-10 shadow-lg border-t-2 border-[#FFCB0B] flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FFCB0B] mb-1.5">
                <Users className="w-4 h-4" />
                <span>BOARD MEMBERS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Institutional Management &amp; Board Members
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl mt-1 font-normal leading-relaxed">
                Learn more about our visionary founders, chairman, and board members guiding the governance of Sree Sakthi College of Arts and Science.
              </p>
            </div>
            <Link
              href="/about/leaders"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#CF0003] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shrink-0 shadow-md"
            >
              <span>View Board Members</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

