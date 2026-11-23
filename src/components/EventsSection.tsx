'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const EVENTS = [
  {
    id: 'evt-1',
    day: '15',
    month: 'DEC',
    title: 'Technical Symposium',
    category: 'Department Event',
    href: '/campus-life#events'
  },
  {
    id: 'evt-2',
    day: '21',
    month: 'DEC',
    title: 'Cultural Fest',
    category: 'Student Activities',
    href: '/campus-life#events'
  },
  {
    id: 'evt-3',
    day: '05',
    month: 'JAN',
    title: 'Workshop on Emerging Technologies',
    category: 'Academic Event',
    href: '/campus-life#events'
  }
];

export const EventsSection: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-5 h-1 bg-[#CF0003] rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-extrabold text-[#242424] tracking-tight">
            Latest Events
          </h2>
        </div>
        <Link
          href="/campus-life#events"
          className="text-xs sm:text-sm font-bold text-[#CF0003] hover:text-[#B50004] transition-colors flex items-center gap-1 group"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* 3 Event Rows */}
      <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
        {EVENTS.map((event) => (
          <Link
            key={event.id}
            href={event.href}
            className="flex items-center justify-between py-3 px-2 group hover:bg-gray-50/80 transition-colors rounded-sm"
          >
            {/* Date Block */}
            <div className="flex items-center gap-4">
              <div className="text-center w-10 shrink-0">
                <span className="block text-base sm:text-lg font-black text-[#CF0003] leading-none">
                  {event.day}
                </span>
                <span className="block text-[10px] font-black tracking-wider text-gray-500 uppercase mt-0.5">
                  {event.month}
                </span>
              </div>

              {/* Title & Category */}
              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-[#242424] group-hover:text-[#CF0003] transition-colors leading-tight">
                  {event.title}
                </h4>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  {event.category}
                </p>
              </div>
            </div>

            {/* Right Arrow */}
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#CF0003] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
          </Link>
        ))}
      </div>
    </div>
  );
};
