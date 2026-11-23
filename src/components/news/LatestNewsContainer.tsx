'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LATEST_NEWS, LatestNewsItem } from '@/data/newsUpdatesData';
import { LatestNewsCard } from './LatestNewsCard';

interface LatestNewsContainerProps {
  onReadMore?: (item: LatestNewsItem) => void;
}

export const LatestNewsContainer: React.FC<LatestNewsContainerProps> = ({ onReadMore }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4 flex flex-col justify-between h-full border border-white/80">
      {/* 1. Header Bar: Title with Red Bar & View All Link */}
      <div className="shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#CF0003] rounded-full inline-block" />
            <h3 className="text-sm sm:text-base font-black text-[#171717] tracking-tight">
              Latest News
            </h3>
          </div>

          <Link
            href="/news-updates#latest-news"
            className="inline-flex items-center gap-1 text-xs font-extrabold text-[#CF0003] hover:text-[#9e0002] transition-colors"
          >
            <span>View All News</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
        </div>

        {/* Yellow Horizontal Decorative Rule */}
        <div className="w-full h-0.5 bg-[#FFCB0B] rounded-full mt-1.5 mb-2.5" />
      </div>

      {/* 2. 4 Equal News Cards in Desktop Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 flex-1 items-stretch">
        {LATEST_NEWS.map((item) => (
          <LatestNewsCard
            key={item.id}
            item={item}
            onReadMore={onReadMore}
          />
        ))}
      </div>
    </div>
  );
};
