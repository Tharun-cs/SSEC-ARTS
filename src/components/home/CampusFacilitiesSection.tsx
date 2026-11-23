import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Laptop, BookOpen, Trophy, Bus, Building, ArrowRight } from 'lucide-react';

const FACILITIES = [
  {
    icon: <Laptop className="w-6 h-6 text-[#CF0003]" />,
    title: 'High-Tech Computing Labs',
    description: 'Central air-conditioned laboratories with 150+ high-end workstations, gigabit fiber networking, and cloud sandboxes.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#CF0003]" />,
    title: 'Central Institutional Library',
    description: '18,000+ volumes, peer-reviewed journals, DELNET digital database, and quiet research study cabins.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: <Building className="w-6 h-6 text-[#CF0003]" />,
    title: 'Smart Multimedia Classrooms',
    description: 'Audio-visual equipped lecture halls fostering interactive learning, digital presentations, and seminars.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: <Trophy className="w-6 h-6 text-[#CF0003]" />,
    title: 'Sports & Athletic Grounds',
    description: 'Multi-acre sports campus with outdoor running tracks, volleyball courts, and cricket training nets.',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: <Bus className="w-6 h-6 text-[#CF0003]" />,
    title: 'Campus Bus Transportation',
    description: 'Extensive institutional bus fleet connecting Karamadai, Coimbatore, Mettupalayam, Annur, and Tirupur.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80'
  }
];

export const CampusFacilitiesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFF9F0]" id="campus-infrastructure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Modern Infrastructure"
          title="Campus Facilities & Environment"
          description="A purpose-built autonomous collegiate campus on Ooty Main Road, Karamadai, fostering academic focus, technical practice, and physical vitality."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {FACILITIES.map((facility) => (
            <div
              key={facility.title}
              className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-lg border border-gray-200 transition-all group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden bg-gray-900">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 p-2 bg-white rounded-lg shadow-sm">
                  {facility.icon}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#242424] mb-1.5 group-hover:text-[#CF0003] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/campus-life"
            className="inline-flex items-center gap-2 bg-[#CF0003] hover:bg-[#8C0002] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md transition-all shadow-sm"
          >
            <span>Explore All Campus Life & Facilities</span>
            <ArrowRight className="w-4 h-4 text-[#FFCB0B]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
