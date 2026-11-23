import React from 'react';
import { COLLEGE_STATS } from '@/data/collegeData';
import { Award, BookOpen, Users, Building, Laptop, Library, ShieldCheck } from 'lucide-react';

const STAT_ICONS = [
  <ShieldCheck key="shield" className="w-8 h-8 text-[#FFCB0B]" />,
  <BookOpen key="book" className="w-8 h-8 text-[#FFCB0B]" />,
  <Building key="building" className="w-8 h-8 text-[#FFCB0B]" />,
  <Laptop key="laptop" className="w-8 h-8 text-[#FFCB0B]" />,
  <Award key="award" className="w-8 h-8 text-[#FFCB0B]" />,
  <Library key="lib" className="w-8 h-8 text-[#FFCB0B]" />
];

export const StatisticsSection: React.FC = () => {
  return (
    <section className="bg-[#CF0003] text-white py-14 border-y-4 border-[#FFCB0B] relative overflow-hidden">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#FFCB0B] bg-black/30 px-3.5 py-1 rounded">
            Key Institutional Milestones & Highlights
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-2">
            Committed to Collegiate & Technical Eminence
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 text-center">
          {COLLEGE_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-black/20 p-4 rounded-xl border border-red-300/20 hover:bg-black/30 transition-colors flex flex-col items-center justify-center group"
            >
              <div className="mb-2 p-2.5 rounded-full bg-red-950/60 group-hover:scale-110 transition-transform">
                {STAT_ICONS[idx % STAT_ICONS.length]}
              </div>
              <div className="text-xl sm:text-2xl font-black text-[#FFCB0B] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mt-1">
                {stat.label}
              </div>
              <p className="text-[11px] text-red-100/80 mt-1 leading-snug line-clamp-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
