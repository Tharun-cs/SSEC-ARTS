'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageBanner } from '@/components/shared/PageBanner';
import {
  Target,
  Compass,
  Sparkles,
  Award,
  BookOpen,
  Users,
  ShieldCheck,
  CheckCircle2,
  Heart,
  Globe,
  ArrowRight,
  PhoneCall,
  MapPin
} from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeData';

const CORE_VALUES = [
  {
    icon: Award,
    title: 'Excellence in Learning',
    description: 'Pursuing uncompromising standards in teaching, continuous curriculum modernism, and academic distinction.'
  },
  {
    icon: ShieldCheck,
    title: 'Integrity & Ethics',
    description: 'Inculcating deep moral consciousness, truthfulness, personal accountability, and ethical character.'
  },
  {
    icon: Sparkles,
    title: 'Innovation & Inquiry',
    description: 'Empowering intellectual freedom, scientific inquiry, technological creativity, and student research.'
  },
  {
    icon: Users,
    title: 'Inclusivity & Community',
    description: 'Fostering an equitable, nurturing, and collaborative campus culture that uplifts every learner.'
  },
  {
    icon: Globe,
    title: 'Social Responsibility',
    description: 'Nurturing conscious citizens dedicated to community welfare, environmental stewardship, and national development.'
  }
];

export default function VisionMissionPage() {
  return (
    <div className="bg-white min-h-screen select-none font-sans overflow-x-hidden">
      {/* 1. Page Banner */}
      <PageBanner
        title="Vision, Mission & Core Values"
        subtitle="The guiding philosophical foundations and ethical commitments driving educational distinction at Sree Sakthi."
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Vision & Mission' }
        ]}
      />

      {/* 2. Main Content Container */}
      <div className="py-14 sm:py-16 md:py-20 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Label matching home page pattern */}
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
                GUIDING FOUNDATIONS
              </span>
              <span className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-[#FFCB0B] rounded-full inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#171717] tracking-tight">
              Our Vision &amp; <span className="text-[#CF0003]">Mission</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mt-2 font-normal">
              Empowering students through value-based instruction, cutting-edge computing laboratories, and holistic professional mentorship.
            </p>
          </motion.div>

          {/* Vision & Mission Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16 sm:mb-20">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-2xl border border-amber-100 flex flex-col justify-between group hover:border-[#CF0003]/40 transition-all duration-300"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#CF0003] flex items-center justify-center mb-6 border border-red-100 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#CF0003] group-hover:text-white transition-all duration-300">
                  <Target className="w-7 h-7 stroke-[2]" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[#CF0003] block mb-1">
                  Institutional Vision
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#172C4F] tracking-tight mb-4 group-hover:text-[#CF0003] transition-colors">
                  Where Dreams Take Flight
                </h3>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-14 h-1.5 bg-[#FFCB0B] rounded-full mb-6 origin-left"
                />
                <p className="text-sm sm:text-[15px] text-[#172C4F]/85 leading-relaxed font-normal mb-6">
                  &ldquo;To evolve into a centre of excellence in arts, science, commerce, and collegiate education that nurtures intellectual curiosity, ethical character, creative innovation, and sustainable societal leadership.&rdquo;
                </p>
                <div className="space-y-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                  <div className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-[#CF0003]" />
                    <span>Holistic undergraduate academic transformation</span>
                  </div>
                  <div className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-[#CF0003]" />
                    <span>Bridge rural potential with global corporate opportunities</span>
                  </div>
                  <div className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-[#CF0003]" />
                    <span>Instill lifelong ethical discipline and societal values</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#CF0003] uppercase tracking-wider">
                <span>Excellence • Integrity • Vision</span>
                <Sparkles className="w-4 h-4 text-[#FFCB0B]" />
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-2xl border border-amber-100 flex flex-col justify-between group hover:border-[#FFCB0B]/70 transition-all duration-300"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center mb-6 border border-amber-200 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-[#FFCB0B] group-hover:text-[#172C4F] transition-all duration-300">
                  <Compass className="w-7 h-7 stroke-[2]" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[#172C4F] block mb-1">
                  Educational Mission
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#172C4F] tracking-tight mb-4 group-hover:text-[#CF0003] transition-colors">
                  Transforming Potential into Purpose
                </h3>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-14 h-1.5 bg-[#CF0003] rounded-full mb-6 origin-left"
                />

                <ul className="space-y-4 text-xs sm:text-sm text-[#172C4F]/85 font-normal leading-relaxed">
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                    <span className="w-5 h-5 rounded-full bg-[#CF0003] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      1
                    </span>
                    <span><strong>Pedagogical Rigor:</strong> Provide student-centered instruction with rigorous academic discipline, active learning methods, and continuous mentoring.</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                    <span className="w-5 h-5 rounded-full bg-[#CF0003] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      2
                    </span>
                    <span><strong>Modern Infrastructure:</strong> Establish state-of-the-art computing laboratories, science practical centers, and rich digital libraries bridging theory and execution.</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                    <span className="w-5 h-5 rounded-full bg-[#CF0003] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      3
                    </span>
                    <span><strong>Career Readiness:</strong> Partner with leading multinational corporations and financial institutions for internships, industrial certifications, and placements.</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                    <span className="w-5 h-5 rounded-full bg-[#CF0003] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      4
                    </span>
                    <span><strong>Holistic Citizenry:</strong> Inculcate moral consciousness, civic responsibility, and environmental stewardship through vibrant extracurricular clubs.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#172C4F] uppercase tracking-wider">
                <span>Nurture • Transform • Lead</span>
                <Sparkles className="w-4 h-4 text-[#FFCB0B]" />
              </div>
            </motion.div>
          </div>

          {/* 3. Core Values Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center justify-center gap-3 mb-2">
                <span className="w-8 sm:w-12 h-0.5 bg-[#FFCB0B] rounded-full inline-block" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#CF0003]">
                  PILLARS OF ETHICS
                </span>
                <span className="w-8 sm:w-12 h-0.5 bg-[#FFCB0B] rounded-full inline-block" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#171717] tracking-tight">
                Our Institutional <span className="text-[#CF0003]">Core Values</span>
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="bg-white p-6 rounded-2xl border border-amber-100 shadow-2xs hover:shadow-xl hover:border-[#CF0003]/40 transition-all duration-300 group cursor-default"
                  >
                    <div className="w-11 h-11 rounded-xl bg-red-50 text-[#CF0003] flex items-center justify-center mb-4 border border-red-100 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#CF0003] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#172C4F] group-hover:text-[#CF0003] transition-colors mb-2 tracking-tight">
                      {val.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* 4. Admissions Call to Action */}
      <section className="bg-gradient-to-r from-[#8C0002] via-[#CF0003] to-[#CF0003] text-white py-14 relative overflow-hidden select-none">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FFCB0B] text-[#171717] font-black text-xs uppercase px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#CF0003]" />
            Admissions Open for Academic Year 2026–2027
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white mb-3 tracking-tight">
            Begin Your College Journey with Us
          </h2>
          <p className="text-xs sm:text-sm text-red-100 max-w-xl mx-auto mb-6 leading-relaxed">
            Join Sree Sakthi College of Arts and Science in Punjai Puliampatti. Explore our 7 premier autonomous degree programmes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#171717] font-black text-xs uppercase tracking-wider px-7 py-3 rounded-full shadow-md transition-all"
            >
              <span>Apply for Admissions</span>
              <ArrowRight className="w-4 h-4 text-[#CF0003]" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-[#CF0003] border-2 border-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Admissions Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

