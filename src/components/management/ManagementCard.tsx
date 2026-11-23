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

      {/* 3. BOTTOM: Deep Red Information Panel (#CF0003) - Proper Clearance Below Badge */}
      <div className="bg-[#CF0003] text-white pt-2.5 sm:pt-3 pb-3 sm:pb-3.5 px-2 sm:px-2.5 text-center flex flex-col items-center justify-center flex-1 rounded-b-[16px] sm:rounded-b-[18px]">
        
        {/* Designation Flanked by Golden Laurel Leaves */}
        <div className="flex items-center justify-center gap-1 max-w-full">
          {/* Left Laurel Sprig */}
          <svg
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFCB0B] fill-current shrink-0"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C9.5 4.5 7.5 8 8 11.5c.3 2 1.3 3.8 2.5 4.8-1.8-.8-3.2-2.5-3.5-4.5-.4-2.8 1-5.7 3-8zm-3.5 5.5c-1.5 1.5-2.5 3.7-2.2 6 .2 1.4.9 2.6 1.8 3.4-1.3-.6-2.2-1.8-2.4-3.2-.3-2 .7-4.2 2-5.7zm-2.5 5.5c-1 1-1.7 2.5-1.5 4 .1 1 .6 1.8 1.2 2.4-.9-.4-1.5-1.2-1.6-2.2-.2-1.4.5-2.8 1.4-3.8z" />
          </svg>

          {/* Designation Text */}
          <span className="text-[11.5px] sm:text-[12.5px] font-bold tracking-tight text-white line-clamp-1">
            {member.designation}
          </span>

          {/* Right Laurel Sprig (Mirrored) */}
          <svg
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFCB0B] fill-current shrink-0 -scale-x-100"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C9.5 4.5 7.5 8 8 11.5c.3 2 1.3 3.8 2.5 4.8-1.8-.8-3.2-2.5-3.5-4.5-.4-2.8 1-5.7 3-8zm-3.5 5.5c-1.5 1.5-2.5 3.7-2.2 6 .2 1.4.9 2.6 1.8 3.4-1.3-.6-2.2-1.8-2.4-3.2-.3-2 .7-4.2 2-5.7zm-2.5 5.5c-1 1-1.7 2.5-1.5 4 .1 1 .6 1.8 1.2 2.4-.9-.4-1.5-1.2-1.6-2.2-.2-1.4.5-2.8 1.4-3.8z" />
          </svg>
        </div>

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
