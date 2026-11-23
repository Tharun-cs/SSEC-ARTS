import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';
import { STUDENT_ACHIEVEMENTS } from '@/data/collegeData';
import { SectionHeading } from '@/components/shared/SectionHeading';

export const AchievementsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="achievements-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Student Distinctions"
          title="Student & Faculty Achievements"
          description="Celebrating outstanding academic laurels, hackathon victories, and athletic championship honors earned by our students."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STUDENT_ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-lg transition-all flex flex-col group border-t-4 border-t-[#CF0003]"
            >
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute bottom-3 left-3 bg-[#FFCB0B] text-[#242424] text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded flex items-center gap-1 shadow-xs">
                  <Trophy className="w-3.5 h-3.5 text-[#CF0003]" />
                  {item.award}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span className="font-bold text-[#CF0003]">{item.department}</span>
                    <span>Year: {item.year}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#242424] group-hover:text-[#CF0003] transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>

                  <div className="mb-3 text-xs font-semibold text-gray-700 flex items-center gap-1">
                    <Medal className="w-3.5 h-3.5 text-[#FFCB0B] shrink-0" />
                    <span>Recipient: {item.recipient}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 text-[11px] text-gray-500">
                  Organized by: <strong className="text-gray-800">{item.eventOrOrg}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
