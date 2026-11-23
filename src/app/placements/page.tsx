'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageBanner } from '@/components/shared/PageBanner';
import { SectionHeading } from '@/components/shared/SectionHeading';
import {
  TrendingUp,
  Award,
  Users,
  Building,
  Target,
  ArrowRight,
  Sparkles,
  Trophy,
  CheckCircle2,
  Code2,
  Briefcase,
  Layers,
  GraduationCap
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
    logo: '/images/recruiters/recruiter_infosys_clean.png'
  },
  {
    id: 'rec-tcs',
    name: 'TCS',
    category: 'Tata Consultancy Services',
    logo: '/images/recruiters/recruiter_tcs_clean.png'
  },
  {
    id: 'rec-avasoft',
    name: 'AVASOFT',
    category: 'Shaping Next Gen',
    logo: '/images/recruiters/recruiter_avasoft.png'
  },
  {
    id: 'rec-zoho',
    name: 'ZOHO',
    category: 'SaaS & Enterprise Cloud',
    logo: '/images/recruiters/recruiter_zoho.png'
  },
  {
    id: 'rec-deloitte',
    name: 'Deloitte',
    category: 'Consulting & Advisory',
    logo: '/images/recruiters/recruiter_deloitte.png'
  },
  {
    id: 'rec-wipro',
    name: 'Wipro',
    category: 'Technology Solutions',
    logo: '/images/recruiters/recruiter_wipro.png'
  },
  {
    id: 'rec-cognizant',
    name: 'Cognizant',
    category: 'Digital Engineering',
    logo: '/images/recruiters/recruiter_cognizant.png'
  },
  {
    id: 'rec-accenture',
    name: 'Accenture',
    category: 'Strategy & Technology',
    logo: '/images/recruiters/recruiter_accenture.png'
  },
  {
    id: 'rec-ibm',
    name: 'IBM',
    category: 'Cloud & Cognitive AI',
    logo: '/images/recruiters/recruiter_ibm.png'
  },
  {
    id: 'rec-hcl',
    name: 'HCL Technologies',
    category: 'IT Infrastructure',
    logo: '/images/recruiters/recruiter_hcl.png'
  },
  {
    id: 'rec-techm',
    name: 'Tech Mahindra',
    category: 'Digital Transformation',
    logo: '/images/recruiters/recruiter_techmahindra.png'
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
    color: 'text-[#CF0003]'
  },
  {
    id: 'stat-average',
    value: '4.8 LPA',
    label: 'Average Package',
    subtitle: 'Across Multi-Disciplines',
    icon: TrendingUp,
    color: 'text-[#E5B50A]'
  },
  {
    id: 'stat-companies',
    value: '150+',
    label: 'Recruiting MNCs',
    subtitle: 'Campus Recruitment Partners',
    icon: Building,
    color: 'text-[#CF0003]'
  },
  {
    id: 'stat-placement',
    value: '100%',
    label: 'Placement Guidance',
    subtitle: 'Pre-Placement Coaching',
    icon: CheckCircle2,
    color: 'text-[#E5B50A]'
  }
];

const SKILL_PILLARS = [
  {
    id: 'pillar-tech',
    icon: Code2,
    title: 'Technical & Computational Rigor',
    description:
      'Full-stack software engineering, modern Python, Java, SQL database management, and emerging cloud computing competencies.'
  },
  {
    id: 'pillar-comm',
    icon: Users,
    title: 'Aptitude & Verbal Mastery',
    description:
      'Quantitative mathematics, analytical data interpretation, corporate communication, and articulate business presentation.'
  },
  {
    id: 'pillar-interviews',
    icon: Briefcase,
    title: 'Mock HR & Technical Panels',
    description:
      'Simulated group discussions, 1-on-1 behavioral HR interviews, resume screening, and portfolio building with industry experts.'
  },
  {
    id: 'pillar-industry',
    icon: Layers,
    title: 'Industry Certifications & Seminars',
    description:
      'Recognized technical certifications, live corporate guest lectures, and semester-long internships with technology pioneers.'
  }
];

export default function PlacementsPage() {
  const marqueeRecruiters = [...CORPORATE_RECRUITERS, ...CORPORATE_RECRUITERS];

  return (
    <div className="bg-white min-h-screen select-none">
      <PageBanner
        title="Training & Placements"
        subtitle="Empowering graduates with professional dexterity, soft skills, and direct career pathways to premier corporate employers."
        breadcrumbs={[{ label: 'Placements' }]}
      />

      {/* 1. Placement Cell Overview */}
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
                subtitle="Career Development Cell"
                title="Bridging Academic Mastery with Corporate Opportunities"
                align="left"
              />
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                The Training &amp; Placement Cell at <strong>Sree Sakthi College of Arts and Science</strong> serves as the vital bridge between emerging student talent and leading multinational employers. Situated on Coimbatore Main Road, our cell liaises with top software service providers, banks, fintech enterprises, and corporate organizations across the region.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                From foundational aptitude bootcamps and group discussion simulations to mock HR interviews, students across our undergraduate programmes are systematically prepared to excel in competitive placement drives.
              </p>

              {/* 4 Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {PLACEMENT_STATS.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="p-4 rounded-2xl bg-[#FFFDF8] border border-amber-100 shadow-2xs hover:shadow-md transition-all"
                    >
                      <Icon className={`w-5 h-5 mx-auto mb-1.5 ${stat.color}`} />
                      <span className="text-xl sm:text-2xl font-black text-[#171717] block">
                        {stat.value}
                      </span>
                      <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wide block mt-0.5">
                        {stat.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white group">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                  alt="Career Guidance and Interview Session"
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-black text-[#FFCB0B] uppercase tracking-wider block mb-1">
                    Pre-Placement Coaching
                  </span>
                  <p className="text-sm font-medium leading-snug">
                    Hands-on aptitude training and mock interviews conducted by corporate specialists.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE RECRUITERS SHOWCASE */}
      <section className="py-10 bg-white" id="recruiters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Subline placed OUTSIDE the Red Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-4 sm:mb-5 px-1"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#CF0003] border border-red-100 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FFCB0B]" />
                <span>Campus Recruitment Partners • 150+ Recruiting MNCs</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#171717] tracking-tight">
                Our Esteemed <span className="text-[#CF0003]">Corporate Recruiters</span>
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-xl font-normal leading-relaxed">
                Leading multinational corporations, product engineering firms, and commercial banks recruiting Sree Sakthi graduates.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#FFCB0B] text-[#171717] font-black text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-xs shrink-0">
              <span>150+ Corporate Partners</span>
            </div>
          </motion.div>

          {/* Compact Red Box: Only Company Logos Scrolling Slowly, No Blur on Sides, No Borders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="w-full rounded-2xl sm:rounded-3xl bg-[#CF0003] py-4 sm:py-5 overflow-hidden relative shadow-md select-none"
          >
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
        </div>
      </section>

      {/* 3. Skill & Training Pillars */}
      <section className="py-14 sm:py-16 bg-[#FFFDF8] border-t border-amber-100" id="training">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Training Pillars"
            title="Comprehensive Skill Development Program"
            description="Equipping students with industry-demanded problem-solving skills, interpersonal communication, and interview readiness."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white p-6 rounded-2xl shadow-2xs hover:shadow-lg border border-gray-100 hover:border-[#FFCB0B] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#CF0003] border border-red-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#CF0003] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3 className="text-base font-bold text-[#171717] mb-2 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Placement Enquiry CTA */}
      <section className="bg-[#CF0003] text-white py-14 sm:py-16 select-none relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 text-white tracking-tight">
              Connect with our Placement Desk
            </h3>
            <p className="text-xs sm:text-sm text-white/90 mb-8 max-w-xl mx-auto leading-relaxed font-normal">
              Are you a prospective corporate recruiter or student seeking placement details? Reach out to our training and placement coordinator today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#FFCB0B] text-[#171717] font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3 rounded-full hover:bg-[#E5B50A] transition-all shadow-md"
                >
                  <span>Contact Placement Cell</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-white hover:text-[#CF0003] transition-all"
                >
                  <span>Admission Enquiry</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
