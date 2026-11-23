'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface ProgrammeCardProps {
  id: string;
  name: string;
  slug: string;
  image: string;
  href: string;
}

export const ProgrammeCard: React.FC<ProgrammeCardProps> = ({ name, image, href }) => {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-lg border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden hover:-translate-y-1 flex flex-col justify-between"
    >
      {/* Programme Photograph */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Body */}
      <div className="p-2.5 sm:p-3 flex items-end justify-between gap-1.5 flex-1 bg-white">
        <h3 className="text-[11.5px] sm:text-[12px] font-bold text-[#242424] leading-snug line-clamp-2 group-hover:text-[#CF0003] transition-colors">
          {name}
        </h3>

        {/* Circular Golden-Yellow Arrow Button */}
        <span
          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FFCB0B] group-hover:bg-[#E5B50A] text-[#242424] flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 shadow-xs"
          aria-hidden="true"
        >
          <ArrowRight className="w-3 h-3 text-[#242424]" />
        </span>
      </div>
    </Link>
  );
};

export const PROGRAMMES_LIST: ProgrammeCardProps[] = [
  {
    id: 'prog-1',
    name: 'B.Com. Computer Applications',
    slug: 'commerce-computer-applications',
    image: '/images/prog_1.jpg',
    href: '/departments/commerce-computer-applications'
  },
  {
    id: 'prog-2',
    name: 'B.BA. Computer Applications',
    slug: 'management-studies',
    image: '/images/prog_2.jpg',
    href: '/departments/management-studies'
  },
  {
    id: 'prog-3',
    name: 'B.Sc. Computer Science',
    slug: 'computer-science',
    image: '/images/prog_3.jpg',
    href: '/departments/computer-science'
  },
  {
    id: 'prog-4',
    name: 'BCA',
    slug: 'computer-applications',
    image: '/images/prog_4.jpg',
    href: '/departments/computer-applications'
  },
  {
    id: 'prog-5',
    name: 'B.Sc. Information Technology',
    slug: 'information-technology',
    image: '/images/prog_5.jpg',
    href: '/departments/information-technology'
  },
  {
    id: 'prog-6',
    name: 'B.Sc. Mathematics',
    slug: 'mathematics',
    image: '/images/prog_6.jpg',
    href: '/departments/mathematics'
  },
  {
    id: 'prog-7',
    name: 'B.A. English Literature',
    slug: 'english',
    image: '/images/prog_7.jpg',
    href: '/departments/english'
  }
];

export const ProgrammesSection: React.FC = () => {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="w-5 h-1 bg-[#CF0003] rounded-full inline-block" />
            <h2 className="text-lg sm:text-xl font-extrabold text-[#242424] tracking-tight">
              Our Programmes
            </h2>
          </div>
          <Link
            href="/departments"
            className="text-xs sm:text-sm font-bold text-[#CF0003] hover:text-[#B50004] transition-colors flex items-center gap-1 group"
          >
            <span>View All Departments</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 7 Horizontal Programme Cards (7 columns on desktop matching screenshot) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3">
          {PROGRAMMES_LIST.map((prog) => (
            <ProgrammeCard key={prog.id} {...prog} />
          ))}
        </div>

      </div>
    </section>
  );
};
