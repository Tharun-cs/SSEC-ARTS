'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { COLLEGE_INFO, NAV_ITEMS, PROGRAMMES } from '@/data/collegeData';
import { CollegeLogo } from '@/components/shared/CollegeLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#CF0003] text-white border-t-4 border-[#FFCB0B] mt-auto select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8">

          {/* COLUMN 1: Official Logo & College Intro */}
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-white p-2 sm:p-2.5 rounded-sm inline-block shadow-sm">
              <CollegeLogo />
            </div>
            <h3 className="text-sm font-bold text-white tracking-wide">
              Sree Sakthi College of Arts and Science
            </h3>
            <p className="text-xs text-red-100/85 leading-relaxed">
              Elite Campus — An autonomous higher education institution dedicated to academic distinction, cutting-edge computing laboratories, and comprehensive career empowerment in Sellappampalayam, Punjai Puliampatti.
            </p>
          </div>

          {/* COLUMN 2: Quick Links (8 Nav Tabs) */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FFCB0B] mb-3 sm:mb-4 pb-1.5 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-red-100/90 hover:text-[#FFCB0B] transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FFCB0B] shrink-0" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Our Programmes (All Seven Programmes) */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FFCB0B] mb-3 sm:mb-4 pb-1.5 border-b border-white/10">
              Our Programmes
            </h4>
            <ul className="space-y-2 text-xs">
              {PROGRAMMES.map((prog) => (
                <li key={prog.id}>
                  <Link
                    href={`/departments/${prog.slug}`}
                    className="text-red-100/90 hover:text-[#FFCB0B] transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FFCB0B] shrink-0" />
                    <span className="truncate">{prog.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Campus Contact Information */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FFCB0B] mb-3 sm:mb-4 pb-1.5 border-b border-white/10">
              Contact Campus
            </h4>
            <div className="space-y-2.5 sm:space-y-3 text-xs text-red-100/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFCB0B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Coimbatore Main Road, Sellappampalayam, Punjai Puliampatti – 641459, Tamil Nadu, India.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFCB0B] shrink-0" />
                <span>{COLLEGE_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFCB0B] shrink-0" />
                <a href={`mailto:${COLLEGE_INFO.email}`} className="hover:text-[#FFCB0B] transition-colors">
                  {COLLEGE_INFO.email}
                </a>
              </div>
              <div className="pt-1.5">
                <span className="inline-block px-2.5 py-1 bg-white/10 rounded text-[11px] font-semibold text-[#FFCB0B]">
                  Admissions Open 2026–2027
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Autonomous Status */}
        <div className="mt-10 sm:mt-12 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-red-200/80 text-center sm:text-left">
          <p>© 2026 Sree Sakthi College of Arts and Science – Elite Campus. All Rights Reserved.</p>
          <p className="text-[11px]">Approved by AICTE | Affiliated to Bharathiar University</p>
        </div>
      </div>
    </footer>
  );
};
