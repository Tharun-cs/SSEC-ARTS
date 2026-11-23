'use client';

import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { LatestNewsItem } from '@/data/newsUpdatesData';

interface LatestNewsCardProps {
  item: LatestNewsItem;
  onReadMore?: (item: LatestNewsItem) => void;
}

export const LatestNewsCard: React.FC<LatestNewsCardProps> = ({ item, onReadMore }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 hover:border-[#FFCB0B] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between overflow-hidden p-2 h-full group">
      {/* 1. College Event Photograph */}
      <div className="w-full aspect-[16/10] rounded-lg overflow-hidden bg-gray-100 shrink-0 relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* 2. Yellow Date Badge */}
      <div className="pt-1.5">
        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#FFCB0B] text-black text-[10px] font-extrabold rounded uppercase tracking-wider shadow-2xs">
          <Calendar className="w-2.5 h-2.5 text-black shrink-0" />
          <span>{item.date}</span>
        </span>
      </div>

      {/* 3. News Headline */}
      <div className="flex-1 my-1">
        <h4 className="text-[11px] font-black text-gray-900 group-hover:text-[#CF0003] transition-colors uppercase leading-snug line-clamp-2">
          {item.title}
        </h4>
      </div>

      {/* 4. Red Outlined Read More Button */}
      <div className="pt-1 mt-auto">
        <button
          onClick={() => onReadMore && onReadMore(item)}
          className="w-full border border-[#CF0003] text-[#CF0003] hover:bg-[#CF0003] hover:text-white active:scale-98 font-bold text-[10.5px] py-1 px-2 rounded-full flex items-center justify-center gap-1 transition-all"
        >
          <span>Read More</span>
          <ArrowRight className="w-3 h-3 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
