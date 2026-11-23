'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ChevronRight, ArrowRight } from 'lucide-react';
import { UPCOMING_EVENTS, UpcomingEventItem } from '@/data/newsUpdatesData';

interface UpcomingEventsCardProps {
  onSelectEvent?: (item: UpcomingEventItem) => void;
}

export const UpcomingEventsCard: React.FC<UpcomingEventsCardProps> = ({ onSelectEvent }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between h-full border border-white/80">
      {/* 1. Solid Red Heading Bar with Calendar Icon */}
      <div className="bg-[#CF0003] text-white px-4 py-2.5 flex items-center gap-2 rounded-t-2xl shrink-0">
        <Calendar className="w-4 h-4 text-white stroke-[2.5]" />
        <h3 className="font-extrabold text-xs sm:text-sm tracking-tight">
          Upcoming Events
        </h3>
      </div>

      {/* 2. Event List */}
      <div className="p-3 flex flex-col justify-between flex-1 divide-y divide-gray-100">
        {UPCOMING_EVENTS.map((event) => (
          <button
            key={event.id}
            onClick={() => onSelectEvent && onSelectEvent(event)}
            className="group w-full py-1.5 flex items-center justify-between text-left transition-colors hover:bg-gray-50/80 rounded px-1.5 focus:outline-none"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              {/* Yellow Date Block Badge */}
              <div className="w-9 h-9 bg-[#FFCB0B] rounded flex flex-col items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <span className="text-[8px] font-black uppercase text-black leading-none">
                  {event.month}
                </span>
                <span className="text-xs font-black text-black leading-tight">
                  {event.day}
                </span>
              </div>

              {/* Event Title */}
              <span className="text-xs font-bold text-gray-900 group-hover:text-[#CF0003] transition-colors truncate leading-snug">
                {event.title}
              </span>
            </div>

            {/* Right Arrow Icon in Red */}
            <ChevronRight className="w-3.5 h-3.5 text-[#CF0003] shrink-0 group-hover:translate-x-0.5 transition-transform ml-1.5" />
          </button>
        ))}
      </div>

      {/* 3. Solid Yellow Bottom Button: View All Events */}
      <div className="p-3 pt-0 shrink-0">
        <Link
          href="/news-updates#events"
          className="w-full bg-[#FFCB0B] hover:bg-[#E5B50A] active:scale-99 text-black font-extrabold text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-2xs"
        >
          <span>View All Events</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </Link>
      </div>
    </div>
  );
};
