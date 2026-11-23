import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeData';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="college-intro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Campus Photograph with Decorative Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
                alt="Sree Sakthi Engineering College Karamadai Campus"
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-[#FFCB0B] uppercase tracking-wider block">
                  Karamadai Technical Campus
                </span>
                <p className="text-sm font-semibold text-white/95">
                  Ooty Main Road, Coimbatore – 641104, Tamil Nadu
                </p>
              </div>
            </div>

            {/* Floating Deep-Maroon Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#CF0003] text-white p-4 sm:p-5 rounded-lg shadow-xl border-2 border-[#FFCB0B] max-w-[240px]">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-[#FFCB0B]" />
                <span className="text-[11px] font-black uppercase tracking-wider text-[#FFCB0B]">
                  Autonomous Status
                </span>
              </div>
              <p className="text-xs font-bold leading-tight">
                Technical Campus – Karamadai | Approved by AICTE, New Delhi
              </p>
            </div>
          </div>

          {/* Right Column: Institutional Introduction */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#CF0003]"></span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#CF0003]">
                College Introduction
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#242424] leading-tight mb-4">
              Nurturing Technical Mastery & Wholesome Character
            </h2>

            <div className="w-16 h-1 bg-[#FFCB0B] rounded mb-6"></div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              <strong className="text-[#242424] font-bold">{COLLEGE_INFO.name}</strong>, situated prominently along the scenic Ooty Main Road in Karamadai, Coimbatore, functions as an Autonomous Technical Campus committed to elevating technical, commercial, and computational proficiency.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Approved by the All India Council for Technical Education (AICTE), New Delhi, our collegiate institution provides 7 high-impact undergraduate programmes spanning Computer Science, Computer Applications, Information Technology, Commerce, Business Administration, Mathematics, and Literature.
            </p>

            {/* Vision and Mission Highlights */}
            <div className="space-y-3 mb-8 bg-[#FFF9F0] p-5 rounded-lg border-l-4 border-[#CF0003]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#CF0003] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-gray-800">
                  <strong className="text-[#242424]">Vision:</strong> To be a centre of excellence in higher technical and collegiate education, producing globally capable, morally grounded, and innovative professionals.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#CF0003] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-gray-800">
                  <strong className="text-[#242424]">Mission:</strong> Impart rigorous, industry-relevant curriculum backed by modern laboratories, experienced faculty guidance, active corporate recruitment drives, and ethical values.
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#CF0003] hover:bg-[#CF0003] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded shadow-sm hover:shadow-md transition-all"
              >
                <span>Learn More About SSEC</span>
                <ArrowRight className="w-4 h-4 text-[#FFCB0B]" />
              </Link>

              <Link
                href="/departments"
                className="text-xs sm:text-sm font-bold text-[#CF0003] hover:text-[#CF0003] uppercase tracking-wider underline-offset-4 hover:underline"
              >
                View 7 Programmes →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
