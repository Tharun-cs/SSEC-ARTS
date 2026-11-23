import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Laptop, Trophy, Users, HeartHandshake, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';

const CAMPUS_PILLARS = [
  {
    icon: <Laptop className="w-6 h-6 text-[#D90000]" />,
    title: 'Advanced Computing Labs',
    description: 'High-speed internet workstations with Linux/Windows platforms and software development sandboxes.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    link: '/campus-life#laboratories'
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#D90000]" />,
    title: 'Comprehensive Library',
    description: '15,000+ volumes, peer-reviewed journals, DELNET e-resources, and a peaceful reading environment.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80',
    link: '/campus-life#library'
  },
  {
    icon: <Trophy className="w-6 h-6 text-[#D90000]" />,
    title: 'Sports & Athletics Complex',
    description: 'Outdoor athletics tracks, cricket nets, volleyball and badminton courts promoting physical wellness.',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=600&q=80',
    link: '/campus-life#sports'
  },
  {
    icon: <Users className="w-6 h-6 text-[#D90000]" />,
    title: 'Student Clubs & NSS/YRC',
    description: 'Coding club, Literary forum, Fine Arts society, and active community outreach programmes.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
    link: '/campus-life#clubs'
  }
];

export const CampusLifeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F5F5F5]" id="campus-life-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Holistic Student Experience"
          title="Vibrant Campus Life & Facilities"
          description="Discover a serene, vibrant learning environment on Coimbatore Main Road designed to cultivate intellectual growth, physical vigor, and leadership."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAMPUS_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md border border-gray-200 transition-all group flex flex-col"
            >
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 bg-white p-2 rounded-md shadow-md">
                  {pillar.icon}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#222222] group-hover:text-[#D90000] transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <Link
                    href={pillar.link}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#D90000] group-hover:text-[#B80000]"
                  >
                    <span>Explore Facility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/campus-life"
            className="inline-flex items-center gap-2 bg-[#D90000] hover:bg-[#B80000] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded shadow-sm hover:shadow-md transition-all"
          >
            <span>Experience Full Campus Life & Facilities</span>
            <ArrowRight className="w-4 h-4 text-[#FFCC00]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
