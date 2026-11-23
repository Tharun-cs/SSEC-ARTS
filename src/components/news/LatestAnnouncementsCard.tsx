'use client';

import React from 'react';
import Link from 'next/link';
import { Megaphone, FileText, ChevronRight, ArrowRight } from 'lucide-react';
import { LATEST_ANNOUNCEMENTS, AnnouncementItem } from '@/data/newsUpdatesData';

interface LatestAnnouncementsCardProps {
  onSelectAnnouncement?: (item: AnnouncementItem) => void;
}

export const LatestAnnouncementsCard: React.FC<LatestAnnouncementsCardProps> = ({
  onSelectAnnouncement
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between h-full border border-white/80">
      {/* 1. Solid Red Heading Bar with Megaphone Icon */}
      <div className="bg-[#CF0003] text-white px-4 py-2.5 flex items-center gap-2 rounded-t-2xl shrink-0">
        <Megaphone className="w-4 h-4 text-white stroke-[2.5]" />
        <h3 className="font-extrabold text-xs sm:text-sm tracking-tight">
          Latest Announcements
        </h3>
      </div>

      {/* 2. Announcements List */}
      <div className="p-3 flex flex-col justify-between flex-1 divide-y divide-gray-100">
        {LATEST_ANNOUNCEMENTS.map((ann) => (
          <button
            key={ann.id}
            onClick={() => onSelectAnnouncement && onSelectAnnouncement(ann)}
            className="group w-full py-1.5 flex items-center justify-between text-left transition-colors hover:bg-gray-50/80 rounded px-1.5 focus:outline-none"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              {/* Red Document / Notice Icon */}
              <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors">
                <FileText className="w-4 h-4 text-[#CF0003] stroke-[2.5]" />
              </div>

              {/* Announcement Title */}
              <span className="text-xs font-bold text-gray-900 group-hover:text-[#CF0003] transition-colors truncate leading-snug">
                {ann.title}
              </span>
            </div>

            {/* Right Arrow Icon in Red */}
            <ChevronRight className="w-3.5 h-3.5 text-[#CF0003] shrink-0 group-hover:translate-x-0.5 transition-transform ml-1.5" />
          </button>
        ))}
      </div>

      {/* 3. Solid Yellow Bottom Button: View All Announcements */}
      <div className="p-3 pt-0 shrink-0">
        <Link
          href="/news-updates#announcements"
          className="w-full bg-[#FFCB0B] hover:bg-[#E5B50A] active:scale-99 text-black font-extrabold text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-2xs"
        >
          <span>View All Announcements</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </Link>
      </div>
    </div>
  );
};
