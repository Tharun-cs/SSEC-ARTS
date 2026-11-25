'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  Target,
  Users,
  GraduationCap,
  Award,
  ChevronRight
} from 'lucide-react';

const ABOUT_PAGES = [
  { label: 'Overview', href: '/about', icon: Compass },
  { label: 'Vision & Mission', href: '/about/vision-mission', icon: Target },
  { label: 'Board Members', href: '/about/leaders', icon: Users },
  { label: 'Academic Leaders', href: '/about/academic-leaders', icon: GraduationCap },
  { label: "Chairman's Address", href: '/about/chairman-message', icon: Award },
  { label: "Correspondent's Address", href: '/about/correspondent-message', icon: Award },
  { label: "Principal's Address", href: '/about/principal-message', icon: Award },
  { label: "CEO's Address", href: '/about/ceo-message', icon: Award },
  { label: "Dean's Address", href: '/about/dean-message', icon: Award },
];

export const AboutCategoryNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="w-full bg-[#FFFDF8] border-b border-amber-200/60 sticky top-16 sm:top-20 z-30 shadow-xs">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 overflow-x-auto no-scrollbar scroll-smooth">
          <span className="text-[11px] font-black uppercase tracking-wider text-[#CF0003] shrink-0 mr-1 sm:mr-2 flex items-center gap-1">
            <span>ABOUT SSEC</span>
            <ChevronRight className="w-3 h-3" />
          </span>

          {ABOUT_PAGES.map((page) => {
            const isActive = pathname === page.href;
            const Icon = page.icon;

            return (
              <Link
                key={page.href}
                href={page.href}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 select-none ${
                  isActive
                    ? 'bg-[#CF0003] text-white shadow-xs scale-102 ring-2 ring-[#CF0003]/20'
                    : 'bg-white border border-gray-200/90 text-gray-700 hover:text-[#CF0003] hover:border-[#CF0003]/50 hover:bg-red-50/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#FFCB0B]' : 'text-gray-400'}`} />
                <span>{page.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
