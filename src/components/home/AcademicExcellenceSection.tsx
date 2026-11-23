import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Award, BookOpen, CheckCircle2, Laptop, Users, Compass, ArrowRight } from 'lucide-react';

const EXCELLENCE_PILLARS = [
  {
    icon: <BookOpen className="w-6 h-6 text-[#CF0003]" />,
    title: 'Autonomous CBCS Curriculum',
    description: 'Choice Based Credit System aligned with modern industry trends in Full Stack Software, Cloud, Tally Prime, and Business Analytics.'
  },
  {
    icon: <Laptop className="w-6 h-6 text-[#CF0003]" />,
    title: 'Practical Laboratory Instruction',
    description: 'Equal emphasis on core theoretical concepts and hands-on laboratory practicals in high-speed computing and digital language labs.'
  },
  {
    icon: <Users className="w-6 h-6 text-[#CF0003]" />,
    title: 'Faculty Mentorship & Research',
    description: 'Experienced professors with Ph.D. and M.Phil. qualifications mentoring students in academic projects and state symposiums.'
  },
  {
    icon: <Compass className="w-6 h-6 text-[#CF0003]" />,
    title: 'Continuous Assessment & Support',
    description: 'Systematic internal assessment tests, assignments, seminar presentations, and remedial guidance for academic distinction.'
  }
];

export const AcademicExcellenceSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="academic-excellence">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Scholarly Eminence"
          title="Academic Excellence & Pedagogy"
          description="Fostering an intellectually stimulating autonomous environment that merges foundational depth with applied technical skills."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {EXCELLENCE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-[#CF0003] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 bg-red-50 text-[#CF0003] rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-[#242424] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center gap-1.5 text-xs font-bold text-[#CF0003]">
                <span>Rigorous Quality Standards</span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Banner */}
        <div className="bg-gradient-to-r from-[#CF0003] to-[#CF0003] rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#FFCB0B] block mb-1">
              Autonomous Academic Regulations
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
              Study at an Autonomous Technical Campus in Karamadai
            </h3>
            <p className="text-xs sm:text-sm text-red-100 mt-1 max-w-xl">
              Curriculum formulated to integrate industry certifications, internships, and capstone software projects for all degree programmes.
            </p>
          </div>

          <Link
            href="/academics"
            className="shrink-0 bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#242424] font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-md shadow-xs transition-colors flex items-center gap-2"
          >
            <span>Explore Academic Structure</span>
            <ArrowRight className="w-4 h-4 text-[#CF0003]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
