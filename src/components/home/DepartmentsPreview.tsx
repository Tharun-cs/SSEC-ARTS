import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, ChevronRight, GraduationCap } from 'lucide-react';
import { PROGRAMMES } from '@/data/collegeData';
import { SectionHeading } from '@/components/shared/SectionHeading';

const PROGRAMME_IMAGES: Record<string, string> = {
  'bcom-computer-applications': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  'bba-computer-applications': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  'bsc-computer-science': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
  'bca': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  'bsc-information-technology': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
  'bsc-mathematics': 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
  'ba-english-literature': 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80'
};

export const DepartmentsPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFF9F0]" id="programmes-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Autonomous Degree Offerings"
          title="Our Seven Premier Programmes"
          description="Sree Sakthi Engineering College offers seven career-driven undergraduate programmes formulated for academic excellence and corporate readiness."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROGRAMMES.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-200 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Thumbnail Image */}
              <div className="relative h-44 overflow-hidden bg-gray-900">
                <img
                  src={PROGRAMME_IMAGES[prog.slug] || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'}
                  alt={prog.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 bg-[#CF0003] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-xs">
                  {prog.degreeType} Degree
                </span>
                <span className="absolute bottom-2.5 left-3 text-xs font-bold text-[#FFCB0B] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {prog.duration}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#242424] group-hover:text-[#CF0003] transition-colors leading-snug mb-1.5">
                    {prog.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-[#CF0003] mb-2.5">
                    {prog.department}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {prog.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/academics/${prog.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#CF0003] group-hover:text-[#CF0003] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/admissions"
                    className="text-[11px] font-bold bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#242424] px-2.5 py-1 rounded transition-colors"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 bg-[#CF0003] hover:bg-[#8C0002] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all"
          >
            <span>Explore All Departments & Laboratories</span>
            <ChevronRight className="w-4 h-4 text-[#FFCB0B]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
