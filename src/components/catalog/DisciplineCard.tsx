'use client';

import React from 'react';
import Link from 'next/link';
import {
  Monitor,
  BarChart3,
  Users,
  FlaskConical,
  BookOpen,
  Cpu,
  Calculator,
  Leaf,
  ArrowRight
} from 'lucide-react';
import { DisciplineItem } from '@/data/courseCatalogData';

interface DisciplineCardProps {
  discipline: DisciplineItem;
  onSelectDiscipline?: (discipline: DisciplineItem) => void;
}

export const DisciplineCard: React.FC<DisciplineCardProps> = ({
  discipline,
  onSelectDiscipline
}) => {
  const renderIcon = () => {
    const iconClass = 'w-4 h-4 sm:w-4.5 sm:h-4.5 text-white';
    switch (discipline.iconType) {
      case 'monitor':
        return <Monitor className={iconClass} />;
      case 'barChart':
        return <BarChart3 className={iconClass} />;
      case 'chess':
        return <Users className={iconClass} />;
      case 'flask':
        return <FlaskConical className={iconClass} />;
      case 'book':
        return <BookOpen className={iconClass} />;
      case 'cpu':
        return <Cpu className={iconClass} />;
      case 'sigma':
        return <span className="font-black text-sm text-white leading-none select-none">Σ</span>;
      case 'leaf':
        return <Leaf className={iconClass} />;
      default:
        return <BookOpen className={iconClass} />;
    }
  };

  const iconBgClass =
    discipline.iconBg === 'red' ? 'bg-[#CF0003]' : 'bg-[#FFCB0B]';

  return (
    <div className="relative bg-white hover:bg-white rounded-2xl sm:rounded-3xl border border-gray-100/90 hover:border-[#FFCB0B] shadow-xs hover:shadow-md transition-all duration-300 p-2.5 sm:p-3 flex items-center justify-between overflow-hidden group select-none">
      {/* 1. Left: Discipline Photograph */}
      <div className="w-[34%] sm:w-[36%] aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 shrink-0 relative shadow-2xs">
        <picture className="w-full h-full block">
          <source srcSet={discipline.image} type="image/webp" />
          <img
            src={discipline.image.replace('.webp', '.jpg')}
            alt={discipline.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </picture>
      </div>

      {/* 2. Right: Content Details */}
      <div className="w-[62%] sm:w-[60%] flex flex-col justify-between h-full pl-2 sm:pl-3 py-1 relative z-10">
        <div>
          {/* Department Icon Badge */}
          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${iconBgClass} flex items-center justify-center shadow-xs mb-1.5`}
          >
            {renderIcon()}
          </div>

          {/* Department Title */}
          <h3 className="text-xs sm:text-[13px] lg:text-sm font-black text-[#171717] group-hover:text-[#CF0003] transition-colors leading-tight line-clamp-1">
            {discipline.title}
          </h3>

          {/* Available Degrees Subtitle */}
          <p className="text-[10px] sm:text-[11px] text-gray-500 font-semibold mt-0.5 line-clamp-1">
            {discipline.degreesDisplay}
          </p>
        </div>

        {/* View Programmes Button */}
        <div className="pt-2 mt-auto">
          <Link
            href={`/departments/${discipline.departmentSlug}`}
            onClick={(e) => {
              if (onSelectDiscipline) {
                e.preventDefault();
                onSelectDiscipline(discipline);
              }
            }}
            className="inline-flex items-center gap-1.5 bg-white border border-[#CF0003] text-[#CF0003] hover:bg-[#CF0003] hover:text-white active:scale-98 font-bold text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-1 rounded-full transition-all shadow-2xs"
          >
            <span>View Programmes</span>
            <ArrowRight className="w-3 h-3 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* 3. Bottom-Right Curved Corner Swoosh Decoration - Matches Master Poster */}
      <div className="absolute -bottom-1 -right-1 w-16 h-12 pointer-events-none z-0">
        <svg
          viewBox="0 0 80 50"
          fill="none"
          className="w-full h-full block"
          preserveAspectRatio="none"
        >
          {discipline.iconBg === 'yellow' ? (
            /* Yellow Corner Swoosh */
            <path
              d="M80,0 C65,25 35,42 0,50 L80,50 Z"
              fill="#FFCB0B"
            />
          ) : (
            /* Red Corner Swoosh */
            <path
              d="M80,0 C65,25 35,42 0,50 L80,50 Z"
              fill="#CF0003"
            />
          )}
        </svg>
      </div>
    </div>
  );
};

