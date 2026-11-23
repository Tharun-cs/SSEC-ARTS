import React from 'react';
import { RECRUITERS } from '@/data/collegeData';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Briefcase } from 'lucide-react';

export const RecruitersShowcaseSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="recruiter-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Corporate Associations"
          title="Prominent Corporate Recruiters"
          description="Our graduates participate in on-campus recruitment and pooled placement drives conducted by leading software services, IT infrastructure, banking, and financial enterprises."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {RECRUITERS.map((rec) => (
            <div
              key={rec.id}
              className="bg-[#FFF9F0] rounded-xl p-5 border border-gray-200 shadow-xs hover:shadow-md transition-all flex flex-col items-center justify-center text-center h-28 group hover:border-[#CF0003]"
            >
              <span className="text-base font-black tracking-wider text-[#242424] group-hover:text-[#CF0003] transition-colors">
                {rec.name}
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">
                {rec.category}
              </span>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-center text-gray-400 mt-6 italic">
          *Organizations where student cohorts participate in recruitment, internship drives, and corporate interview processes.
        </p>
      </div>
    </section>
  );
};
