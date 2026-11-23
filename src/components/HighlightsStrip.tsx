'use client';

import React from 'react';
import { GraduationCap, Users, Building2, Lightbulb, TrendingUp, Sparkles } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title1: 'Academic',
    title2: 'Excellence'
  },
  {
    icon: Users,
    title1: 'Experienced',
    title2: 'Faculty'
  },
  {
    icon: Building2,
    title1: 'Modern',
    title2: 'Infrastructure'
  },
  {
    icon: Lightbulb,
    title1: 'Holistic',
    title2: 'Development'
  },
  {
    icon: TrendingUp,
    title1: 'Placement',
    title2: 'Support'
  },
  {
    icon: Sparkles,
    title1: 'Vibrant',
    title2: 'Campus Life'
  }
];

export const HighlightsStrip: React.FC = () => {
  return (
    <section className="bg-[#FFFDF9] border-y border-[#EAE6DF] py-3.5 sm:py-4 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-3 px-3 py-2 sm:py-1 hover:bg-red-50/30 transition-colors"
              >
                <div className="p-2 rounded-full bg-red-50/80 shrink-0 text-[#CF0003]">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#CF0003]" />
                </div>
                <div className="text-left leading-tight">
                  <span className="block text-xs sm:text-[13px] font-bold text-[#242424]">
                    {item.title1}
                  </span>
                  <span className="block text-xs sm:text-[13px] font-bold text-[#242424]">
                    {item.title2}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
