'use client';

import React from 'react';
import { Award, Handshake, GraduationCap, BookOpen, Users, Shield, Landmark } from 'lucide-react';
import { ManagementMember } from '@/data/managementData';

interface ManagementCardProps {
  member: ManagementMember;
  className?: string;
}

export const ManagementCard: React.FC<ManagementCardProps> = ({ member, className = '' }) => {
  const renderIcon = () => {
    switch (member.iconType) {
      case 'leadership':
        return <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#CF0003] stroke-[2.5]" />;
      case 'handshake':
        return <Handshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#CF0003] stroke-[2.5]" />;
      case 'graduation':
        return <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#CF0003] stroke-[2.5]" />;
      case 'book':
        return <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#CF0003] stroke-[2.5]" />;
      case 'team':
        return <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#CF0003] stroke-[2.5]" />;
      case 'trustee':
        return <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#CF0003] stroke-[2.5]" />;
      case 'shield':
        return <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#CF0003] stroke-[2.5]" />;
      default:
        return <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#CF0003] stroke-[2.5]" />;
    }
  };

  return (
    <div
      className={`group relative flex flex-col bg-white rounded-[18px] sm:rounded-[20px] border-[1.5px] border-[#CF0003] shadow-md hover:shadow-xl transition-all duration-300 select-none overflow-hidden hover:-translate-y-1.5 ${className}`}
    >
      {/* 1. TOP: Portrait Image with Framed Rounded Top Corners */}
      <div className="p-1.5 sm:p-2 pb-0 bg-white">
        <div className="relative w-full aspect-[740/790] overflow-hidden rounded-t-[13px] sm:rounded-t-[15px] bg-[#f8f8f8]">
          <img
            src={member.image}
            alt={`${member.name} - ${member.designation}`}
            width={740}
            height={790}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center card-portrait-sharp transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* 2. MIDDLE: Downward Smiling Golden-Yellow Ribbon Separator & Circular Badge (Seamless Flush Overlap - Zero White Gap) */}
      <div className="relative w-full z-10 -mt-3.5 sm:-mt-4">
        <svg
          viewBox="0 0 240 24"
          fill="none"
          className="w-full h-5 sm:h-5.5 block"
          preserveAspectRatio="none"
        >
          {/* Golden-Yellow Curved Ribbon */}
          <path
            d="M0,0 Q120,18 240,0 L240,5 Q120,23 0,5 Z"
            fill="#FFCB0B"
          />
          {/* Deep Red panel background fill below curve */}
          <path
            d="M0,5 Q120,23 240,5 L240,24 L0,24 Z"
            fill="#CF0003"
          />
        </svg>

        {/* Circular Yellow Badge neatly centered on the curve */}
        <div className="absolute left-1/2 -top-1.5 sm:-top-2 -translate-x-1/2 w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#FFCB0B] border-2 border-white shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110 z-20">
          {renderIcon()}
        </div>
      </div>

      {/* 3. BOTTOM: Deep Red Information Panel (#CF0003) - Proper Clearance Below Badge & Side Ornamental Accents */}
      <div className="relative bg-[#CF0003] text-white pt-2.5 sm:pt-3 pb-3 sm:pb-3.5 px-6 sm:px-7 text-center flex flex-col items-center justify-center flex-1 rounded-b-[16px] sm:rounded-b-[18px] overflow-hidden">
        
        {/* Left Side Authentic Golden Wheat/Wing Motif */}
        <div className="absolute left-2 sm:left-2.5 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10 text-[#FFCB0B]">
          <svg
            className="w-2.5 h-6 sm:w-3 sm:h-7 block"
            viewBox="0 0 16 36"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M1 1C2.5 4 4.5 8 5.5 12C6.2 15 6.5 18 6.2 21C5.8 24 4.2 26.5 1 28C3.5 26.5 5.5 24 6 21.5C6.5 18.5 6.2 15 5.2 11.5C4.2 8 2.5 4.5 1 1Z" />
            <path d="M5.8 14C6.8 16 8.5 18 9 21C9.3 23 8.8 25.5 7 27.5C8.5 26 9.5 24 9.4 22C9.2 19.5 7.8 17 6.2 14.5Z" />
            <path d="M8.2 21.5C9.5 23.5 12 26 12.5 29C12.8 31.5 11.8 34 9.5 35.5C11.5 34.2 12.8 32 12.6 29.5C12.2 27 10 24.5 8.5 22Z" />
          </svg>
        </div>

        {/* Right Side Authentic Golden Wheat/Wing Motif (Mirrored) */}
        <div className="absolute right-2 sm:right-2.5 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10 text-[#FFCB0B] -scale-x-100">
          <svg
            className="w-2.5 h-6 sm:w-3 sm:h-7 block"
            viewBox="0 0 16 36"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M1 1C2.5 4 4.5 8 5.5 12C6.2 15 6.5 18 6.2 21C5.8 24 4.2 26.5 1 28C3.5 26.5 5.5 24 6 21.5C6.5 18.5 6.2 15 5.2 11.5C4.2 8 2.5 4.5 1 1Z" />
            <path d="M5.8 14C6.8 16 8.5 18 9 21C9.3 23 8.8 25.5 7 27.5C8.5 26 9.5 24 9.4 22C9.2 19.5 7.8 17 6.2 14.5Z" />
            <path d="M8.2 21.5C9.5 23.5 12 26 12.5 29C12.8 31.5 11.8 34 9.5 35.5C11.5 34.2 12.8 32 12.6 29.5C12.2 27 10 24.5 8.5 22Z" />
          </svg>
        </div>

        {/* Designation Text */}
        <span className="text-[11.5px] sm:text-[12.5px] font-bold tracking-tight text-white line-clamp-1 block">
          {member.designation}
        </span>

        {/* Member Full Name */}
        <h3 className="text-[13px] sm:text-[14px] font-extrabold text-white tracking-tight leading-snug line-clamp-1 mt-0.5">
          {member.name}
        </h3>

        {/* Small Golden-Yellow Horizontal Pill / Bar */}
        <div className="w-8 h-1 bg-[#FFCB0B] rounded-full mt-1.5" />
      </div>
    </div>
  );
};
