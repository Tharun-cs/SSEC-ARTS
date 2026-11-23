'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Building2,
  CheckCircle2,
  ArrowRight,
  Trophy,
  Sparkles
} from 'lucide-react';

interface RecruiterItem {
  id: string;
  name: string;
  category: string;
  logo: string;
}

const CORPORATE_RECRUITERS: RecruiterItem[] = [
  {
    id: 'rec-infosys',
    name: 'Infosys',
    category: 'Software Services',
    logo: '/images/recruiters/recruiter_infosys.svg'
  },
  {
    id: 'rec-tcs',
    name: 'TCS',
    category: 'Tata Consultancy Services',
    logo: '/images/recruiters/recruiter_tcs.svg'
  },
  {
    id: 'rec-avasoft',
    name: 'AVASOFT',
    category: 'Shaping Next Gen',
    logo: '/images/recruiters/recruiter_avasoft.svg'
  },
  {
    id: 'rec-zoho',
    name: 'ZOHO',
    category: 'SaaS & Enterprise Cloud',
    logo: '/images/recruiters/recruiter_zoho.svg'
  },
  {
    id: 'rec-deloitte',
    name: 'Deloitte',
    category: 'Consulting & Advisory',
    logo: '/images/recruiters/recruiter_deloitte.svg'
  },
  {
    id: 'rec-wipro',
    name: 'Wipro',
    category: 'Technology Solutions',
    logo: '/images/recruiters/recruiter_wipro.svg'
  },
  {
    id: 'rec-cognizant',
    name: 'Cognizant',
    category: 'Digital Engineering',
    logo: '/images/recruiters/recruiter_cognizant.svg'
  },
  {
    id: 'rec-accenture',
    name: 'Accenture',
    category: 'Strategy & Technology',
    logo: '/images/recruiters/recruiter_accenture.svg'
  },
  {
    id: 'rec-ibm',
    name: 'IBM',
    category: 'Cloud & Cognitive AI',
    logo: '/images/recruiters/recruiter_ibm.svg'
  },
  {
    id: 'rec-hcl',
    name: 'HCL Technologies',
    category: 'IT Infrastructure',
    logo: '/images/recruiters/recruiter_hcl.svg'
  },
  {
    id: 'rec-techm',
    name: 'Tech Mahindra',
    category: 'Digital Transformation',
    logo: '/images/recruiters/recruiter_techmahindra.svg'
  },
  {
    id: 'rec-capgemini',
    name: 'Capgemini',
    category: 'Cloud & Consulting',
    logo: '/images/recruiters/recruiter_capgemini.svg'
  },
  {
    id: 'rec-icici',
    name: 'ICICI Bank',
    category: 'Banking & Financial',
    logo: '/images/recruiters/recruiter_icici.svg'
  },
  {
    id: 'rec-axis',
    name: 'Axis Bank',
    category: 'Retail & Commercial',
    logo: '/images/recruiters/recruiter_axis.svg'
  }
];

const PLACEMENT_STATS = [
  {
    id: 'stat-highest',
    value: '12 LPA',
    label: 'Highest Package',
    subtitle: 'Top Tech & Product Offer',
    icon: Trophy,
    accent: 'yellow'
  },
  {
    id: 'stat-average',
    value: '4.8 LPA',
    label: 'Average Package',
    subtitle: 'Across Multi-Disciplines',
    icon: TrendingUp,
    accent: 'red'
  },
  {
    id: 'stat-companies',
    value: '150+',
    label: 'Recruiting MNCs',
    subtitle: 'Campus Recruitment Partners',
    icon: Building2,
    accent: 'yellow'
  },
  {
    id: 'stat-placement',
    value: '100%',
    label: 'Placement Guidance',
    subtitle: 'Pre-Placement Coaching',
    icon: CheckCircle2,
    accent: 'red'
  }
];

export const OurPlacementsSection: React.FC = () => {
  // Duplicate array for continuous infinite loop marquee
  const marqueeRecruiters = [...CORPORATE_RECRUITERS, ...CORPORATE_RECRUITERS];

  return (
    <section
      id="our-placements"
      className="w-full relative select-none py-6 sm:py-8"
      aria-label="Training and Placements at Sree Sakthi College of Arts and Science"
    >
      {/* 1. SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
      >
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black text-[#171717] tracking-tight leading-tight">
          Our Placements &amp; <span className="text-[#CF0003]">Corporate Recruiters</span>
        </h2>

        {/* Yellow Accent Bar */}
        <div className="w-12 h-1 bg-[#FFCB0B] rounded-full mx-auto mt-3 mb-2.5" />

        {/* Subtitle */}
        <p className="text-gray-600 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal">
          Empowering every student with industry-demanded skillsets, intensive aptitude coaching, and direct pathways to top-tier multinational corporations.
        </p>
      </motion.div>

      {/* 2. PLACEMENT KEY METRICS (4 CARDS) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
        {PLACEMENT_STATS.map((stat, index) => {
          const Icon = stat.icon;
          const isRed = stat.accent === 'red';

          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 hover:border-[#FFCB0B] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group cursor-default relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${
                  isRed ? 'bg-[#CF0003]' : 'bg-[#FFCB0B]'
                } transition-all duration-300 group-hover:h-1.5`}
              />

              {/* Icon Badge */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 shadow-2xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                  isRed
                    ? 'bg-red-50 text-[#CF0003] border border-red-100'
                    : 'bg-amber-50 text-[#9E0002] border border-amber-200'
                }`}
              >
                <Icon className="w-5 h-5 stroke-[2.2]" />
              </div>

              {/* Number Value */}
              <div className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#171717] group-hover:text-[#CF0003] transition-colors leading-none mb-1 font-sans">
                {stat.value}
              </div>

              {/* Primary Label */}
              <h3 className="text-xs sm:text-sm font-black text-gray-800 uppercase tracking-wide">
                {stat.label}
              </h3>

              {/* Subtitle */}
              <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                {stat.subtitle}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* 3. CORPORATE RECRUITERS HEADER - OUTSIDE THE RED BOX */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-4 sm:mb-5 px-1"
      >
        <div>
          <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-[#171717] tracking-tight">
            Our Esteemed <span className="text-[#CF0003]">Corporate Recruiters</span>
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-xl font-normal leading-relaxed">
            Top multinational corporations and premier banking institutions actively recruiting Sree Sakthi graduates.
          </p>
        </div>

        <Link
          href="/placements"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#CF0003] hover:bg-[#A30002] active:scale-98 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow-sm shrink-0 group/link"
        >
          <span>View All Recruiters</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#FFCB0B] group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      {/* 4. COMPACT RED CONTAINER BOX - ONLY COMPANY LOGOS SCROLLING SLOWLY ("looply go") */}
      {/* Box height reduced, borders removed, corner shapes removed, blur on both sides removed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55 }}
        className="w-full rounded-2xl sm:rounded-3xl bg-[#CF0003] py-4 sm:py-5 overflow-hidden relative mb-6 shadow-md select-none"
      >
        {/* Infinite Looping Horizontal Marquee - Slow and Smooth Glide */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-recruiter-loop gap-4 sm:gap-5 flex items-center">
            {marqueeRecruiters.map((rec, idx) => (
              <div
                key={`${rec.id}-${idx}`}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center w-44 sm:w-52 md:w-56 h-20 sm:h-24 shrink-0 group cursor-pointer hover:-translate-y-1 p-3 sm:p-4"
              >
                <img
                  src={rec.logo}
                  alt={`${rec.name} Official Logo`}
                  className="max-h-11 sm:max-h-13 max-w-[130px] sm:max-w-[160px] w-auto h-auto object-contain group-hover:scale-108 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 5. PLACEMENT DESK ACTION STRIP */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 bg-[#FFFDF8] rounded-2xl border border-amber-100 shadow-2xs"
      >
        <p className="text-xs sm:text-sm text-gray-700 font-medium text-center sm:text-left">
          Interested in corporate campus drives, recruiter partnerships, or hiring talent from Sree Sakthi?
        </p>

        <div className="flex flex-col xs:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              href="/placements"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#CF0003] hover:bg-[#A30002] active:scale-98 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow-xs"
            >
              <span>Explore Placements</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FFCB0B]" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white border border-gray-300 hover:border-[#CF0003] text-gray-800 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full transition-all"
            >
              <span>Contact Placement Desk</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
