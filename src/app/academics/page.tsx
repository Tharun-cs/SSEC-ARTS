'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageBanner } from '@/components/shared/PageBanner';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { PROGRAMMES } from '@/data/collegeData';
import {
  GraduationCap,
  Clock,
  CheckCircle2,
  Calendar,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Laptop
} from 'lucide-react';

export default function AcademicsPage() {
  return (
    <div className="bg-white min-h-screen select-none">
      <PageBanner
        title="Academics & Programmes"
        subtitle="Holistic curriculum architecture, Choice Based Credit System (CBCS), and modern pedagogical methods at Sree Sakthi Elite Campus."
        breadcrumbs={[{ label: 'Academics' }]}
      />

      {/* Academic Overview */}
      <section className="py-14 sm:py-16 md:py-20 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <SectionHeading
                subtitle="Progressive Pedagogy"
                title="Choice Based Credit System (CBCS) & Regulations"
                align="left"
              />
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                <strong>Sree Sakthi College of Arts and Science</strong> operates with responsive academic regulations, empowering our faculty to frame cutting-edge syllabi responsive to corporate tech industry shifts, AI tool integration, and financial digitization.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Our Choice Based Credit System (CBCS) integrates core subject mastery, skill-based electives, hands-on computer lab instruction, mandatory summer internships, and continuous internal evaluations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FFFDF8] rounded-xl border-l-4 border-[#CF0003] shadow-2xs">
                  <span className="font-bold text-xs text-[#CF0003] block uppercase mb-1">
                    Theory & Laboratory Mix
                  </span>
                  <span className="text-xs text-gray-700 leading-relaxed">
                    Rigorous classroom concepts backed by weekly hands-on practicals in computing suites.
                  </span>
                </div>
                <div className="p-4 bg-yellow-50/70 rounded-xl border-l-4 border-[#FFCB0B] shadow-2xs">
                  <span className="font-bold text-xs text-yellow-900 block uppercase mb-1">
                    Continuous Assessment
                  </span>
                  <span className="text-xs text-gray-700 leading-relaxed">
                    Continuous assessment tests, seminars, code reviews, and model evaluations.
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="lg:col-span-5 bg-[#FFFDF8] p-6 sm:p-8 rounded-2xl border border-amber-100 shadow-sm"
            >
              <h3 className="text-base font-bold uppercase tracking-wider text-[#171717] mb-4 pb-2 border-b border-gray-200">
                Academic Calendar Highlights 2026
              </h3>
              <ul className="space-y-4 text-xs text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#CF0003] flex items-center justify-center shrink-0 border border-red-100">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-gray-900 text-xs sm:text-[13px]">Odd Semester Commencement:</strong>
                    <span className="text-gray-600">Third week of June (Seniors) & July (Freshmen Batch)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#CF0003] flex items-center justify-center shrink-0 border border-red-100">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-gray-900 text-xs sm:text-[13px]">Continuous Assessment Tests (CAT):</strong>
                    <span className="text-gray-600">August & September 2026</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#CF0003] flex items-center justify-center shrink-0 border border-red-100">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-gray-900 text-xs sm:text-[13px]">Autonomous Semester Examinations:</strong>
                    <span className="text-gray-600">November / December 2026</span>
                  </div>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/admissions"
                    className="w-full inline-block bg-[#CF0003] hover:bg-[#A30002] text-white py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Apply for Admissions 2026–2027
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The 7 Programmes Directory */}
      <section className="py-14 sm:py-16 md:py-20 bg-[#FFFDF8] border-t border-amber-100" id="programmes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Degree Offerings"
            title="All Seven Programmes"
            description="Explore our seven specialized undergraduate programmes formulated for corporate career readiness."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PROGRAMMES.map((prog, idx) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xs hover:shadow-xl border border-gray-100 hover:border-[#FFCB0B] transition-all flex flex-col justify-between group border-t-4 border-t-[#CF0003]"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-[#CF0003] border border-red-100">
                      {prog.degreeType} Degree
                    </span>
                    <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#CF0003]" />
                      {prog.duration}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#171717] group-hover:text-[#CF0003] transition-colors leading-tight mb-2">
                    {prog.name}
                  </h3>

                  <p className="text-[11px] font-semibold text-[#CF0003] mb-3">
                    {prog.department}
                  </p>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {prog.description}
                  </p>

                  <div className="bg-[#FFFDF8] p-3 rounded-xl text-[11px] text-gray-700 mb-4 border border-amber-100">
                    <strong className="block text-gray-900 mb-0.5">Eligibility:</strong>
                    <span className="line-clamp-2">{prog.eligibility}</span>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                  <Link
                    href={`/academics/${prog.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#CF0003] hover:text-[#A30002] transition-colors"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/admissions"
                    className="bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#171717] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-colors shadow-2xs"
                  >
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum & Regulations */}
      <section className="py-14 sm:py-16 bg-white" id="curriculum">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            subtitle="Academic Governance"
            title="Curricular Architecture & Regulations"
            description="Our curriculum balances core foundational competence, practical labs, and soft-skill development."
          />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-[#FFFDF8] border border-amber-100 rounded-3xl p-6 sm:p-8 md:p-10 max-w-4xl mx-auto text-left shadow-2xs"
          >
            <h4 className="text-base font-bold text-[#171717] mb-4">
              Standard Curricular Architecture:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0 mt-0.5" />
                <span>Part I: Language (Tamil / Hindi / French)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0 mt-0.5" />
                <span>Part II: Professional English & Digital Communication</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0 mt-0.5" />
                <span>Part III: Major Core Theory & Weekly Laboratory Practicals</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0 mt-0.5" />
                <span>Part IV: Skill-Based Electives & Environmental Science</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0 mt-0.5" />
                <span>Part V: Extension Activities (NSS / YRC / Sports / Clubs)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0 mt-0.5" />
                <span>Semester VI Capstone Industry Software / Business Project</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
