import React from 'react';
import Link from 'next/link';
import { Briefcase, ArrowRight, TrendingUp, Award } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';

export const PlacementsPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFF9F0]" id="placements-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Career Empowerment"
          title="Training & Placements Overview"
          description="A proactive Career Guidance & Placement Cell bridging academic proficiency with corporate recruitment across Information Technology, Banking, and Corporate sectors."
        />

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border-t-4 border-[#CF0003] p-6 rounded-b-xl shadow-xs">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#CF0003] mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#242424] mb-2">Pre-Placement Training</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Structured modules in quantitative aptitude, logical reasoning, verbal communication, and mock HR interviews commencing from the second year.
            </p>
          </div>

          <div className="bg-white border-t-4 border-[#FFCB0B] p-6 rounded-b-xl shadow-xs">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-900 mb-3">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#242424] mb-2">Corporate Recruitment Drives</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              On-campus recruitment drives, pooled campus drives, and industry walkthroughs connecting students with prominent corporate companies.
            </p>
          </div>

          <div className="bg-white border-t-4 border-[#CF0003] p-6 rounded-b-xl shadow-xs">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#CF0003] mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#242424] mb-2">Internships & Live Projects</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Summer internships, semester capstone software projects, and industrial visits providing authentic exposure to real commercial workflows.
            </p>
          </div>
        </div>

        {/* Action Link to Full Placements Page */}
        <div className="text-center">
          <Link
            href="/placements"
            className="inline-flex items-center gap-2 bg-[#CF0003] hover:bg-[#8C0002] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md shadow-sm hover:shadow-md transition-all"
          >
            <span>Explore Placement Cell & Statistics</span>
            <ArrowRight className="w-4 h-4 text-[#FFCB0B]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
