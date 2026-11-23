'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageBanner } from '@/components/shared/PageBanner';
import { Quote, Sparkles, Award, ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeData';

export default function ChairmanMessagePage() {
  return (
    <div className="bg-white min-h-screen select-none font-sans overflow-x-hidden">
      {/* 1. Page Banner */}
      <PageBanner
        title="Chairman's Message"
        subtitle="A personal message from our Founder and Chairman on visionary education, character building, and academic eminence."
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Leaders', href: '/about/leaders' },
          { label: "Chairman's Message" }
        ]}
      />

      {/* 2. Message Content */}
      <div className="py-14 sm:py-16 md:py-20 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: Chairman Profile Card (Compact & Elegant) */}
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
                    src="/images/management/chairman.webp"
                    alt="Shri. N. Dharmalingam - Chairman"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172C4F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#172C4F] mb-0.5">
                    Shri. N. Dharmalingam
                  </h3>
                  <p className="text-xs font-bold text-[#CF0003] uppercase tracking-wider mb-2.5">
                    Founder &amp; Chairman
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#172C4F] uppercase tracking-wider mb-2.5">
                    <Award className="w-3.5 h-3.5 text-[#FFCB0B] shrink-0" />
                    <span>Visionary Educational Leadership</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal mb-3">
                    Founded in 2010 with a steadfast commitment to accessible, world-class education for young aspirants across Tamil Nadu.
                  </p>
                  <div className="p-3 rounded-xl bg-[#FFFDF8] border border-amber-100 text-[11px] text-[#172C4F] italic leading-relaxed">
                    &ldquo;True education empowers not only the intellect, but also moral courage, compassion, and purposeful service to society.&rdquo;
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
              {/* Header Label matching home page pattern */}
              <div className="inline-flex items-center gap-3 mb-2">
                <span className="w-8 sm:w-12 h-0.5 sm:h-1 bg-[#FFCB0B] rounded-full inline-block" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#CF0003]">
                  FROM THE DESK OF THE CHAIRMAN
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#171717] tracking-tight leading-tight mb-4">
                Inspiring Minds, <span className="text-[#CF0003]">Igniting Dreams</span>
              </h2>

              <div className="w-14 h-1.5 bg-[#CF0003] rounded-full mb-6" />

              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                <p>
                  Dear Students, Parents, and Well-Wishers,
                </p>
                <p>
                  It gives me immense pride and joy to welcome you to <strong>Sree Sakthi College of Arts and Science</strong>. When we founded this institution in 2010 at Punjai Puliampatti, our foundational vision was simple yet profound: to create an educational sanctuary where rural and semi-urban talent could access premier higher education on par with metropolitan institutions.
                </p>
                <p>
                  Over the past decade and a half, our campus has blossomed into an autonomous centre of collegiate excellence. We have continually expanded modern computing laboratories, modern science facilities, and research-led libraries to ensure that our students are nurtured with both foundational wisdom and emerging technological competencies.
                </p>
                <p>
                  In a rapidly evolving global economy, higher education must transcend textbooks. At Sree Sakthi, our pedagogical approach focuses on experiential problem-solving, moral integrity, and professional leadership. We emphasize value-based learning so that our graduates emerge not merely as skilled degree-holders, but as empathetic, visionary leaders equipped to uplift their communities.
                </p>
                <p>
                  I invite every young learner to step onto our vibrant green campus, dream ambitiously, and embark on a transformative journey of lifelong discovery and triumph.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

