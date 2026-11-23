'use client';

import React from 'react';
import Link from 'next/link';
import { Bell, Phone, Mail, MapPin, FileText } from 'lucide-react';
import { ANNOUNCEMENTS, COLLEGE_INFO } from '@/data/collegeData';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#CF0003] text-white text-xs border-b border-[#8C0002] relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-2 gap-2">
          
          {/* Left: Latest Announcement Ticker */}
          <div className="flex items-center w-full md:w-3/5 overflow-hidden">
            <span className="inline-flex items-center gap-1.5 bg-[#FFCB0B] text-[#242424] font-black text-[11px] uppercase px-2.5 py-0.5 rounded shrink-0 mr-3 shadow-xs">
              <Bell className="w-3.5 h-3.5 text-[#CF0003] animate-bounce" />
              Notices
            </span>
            <div className="relative overflow-hidden whitespace-nowrap w-full">
              <div className="inline-block animate-ticker">
                {ANNOUNCEMENTS.map((item, index) => (
                  <span key={item.id} className="inline-flex items-center mr-8">
                    <Link
                      href={item.link || '#'}
                      className="text-white hover:text-[#FFCB0B] transition-colors underline-offset-2 hover:underline font-medium"
                    >
                      {item.title}
                    </Link>
                    {index < ANNOUNCEMENTS.length - 1 && (
                      <span className="ml-8 text-[#FFCB0B] font-bold">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Location & Verified Institutional Contacts */}
          <div className="flex items-center gap-3.5 text-xs shrink-0 self-end md:self-center flex-wrap">
            <span className="hidden lg:flex items-center gap-1 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#FFCB0B]" />
              <span>Ooty Main Road, Coimbatore – 641104</span>
            </span>
            <span className="hidden lg:inline text-white/30">|</span>
            <a
              href={`mailto:${COLLEGE_INFO.email}`}
              className="hidden sm:flex items-center gap-1 text-white/90 hover:text-[#FFCB0B] transition-colors"
              title="Official Mail"
            >
              <Mail className="w-3.5 h-3.5 text-[#FFCB0B]" />
              <span>{COLLEGE_INFO.email}</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="flex items-center gap-1 text-white/90">
              <Phone className="w-3.5 h-3.5 text-[#FFCB0B]" />
              <span className="font-semibold">Helpdesk: +91 (0) 4254 262626</span>
            </span>
            <span className="text-white/30">|</span>
            <Link
              href="/admin"
              className="text-white/90 hover:text-[#FFCB0B] font-semibold transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5 text-[#FFCB0B]" />
              Portal
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
