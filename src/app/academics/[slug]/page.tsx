import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageBanner } from '@/components/shared/PageBanner';
import { PROGRAMMES } from '@/data/collegeData';
import {
  Clock,
  GraduationCap,
  CheckCircle2,
  Users,
  Briefcase,
  ArrowRight,
  Download,
  BookOpen,
  Award
} from 'lucide-react';

interface ProgrammePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROGRAMMES.map((prog) => ({
    slug: prog.slug
  }));
}

export async function generateMetadata({ params }: ProgrammePageProps): Promise<Metadata> {
  const { slug } = await params;
  const prog = PROGRAMMES.find((p) => p.slug === slug);

  if (!prog) {
    return { title: 'Programme Not Found' };
  }

  return {
    title: `${prog.name} | Sree Sakthi College`,
    description: prog.description
  };
}

export default async function ProgrammeDetailPage({ params }: ProgrammePageProps) {
  const { slug } = await params;
  const prog = PROGRAMMES.find((p) => p.slug === slug);

  if (!prog) {
    notFound();
  }

  return (
    <div>
      <PageBanner
        title={prog.name}
        subtitle={`${prog.degreeType} Programme affiliated to Bharathiar University`}
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: prog.name }
        ]}
      />

      <div className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Course Overview */}
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#CF0003] bg-red-50 px-2.5 py-1 rounded inline-block mb-2">
                  {prog.degreeType} Degree • {prog.department}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#222222] tracking-tight mb-3">
                  Course Overview
                </h2>
                <div className="w-16 h-1 bg-[#CF0003] rounded mb-4"></div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {prog.description}
                </p>
              </div>

              {/* Eligibility Criteria */}
              <div className="bg-gray-50 border-l-4 border-[#FFCC00] p-6 rounded-r-xl">
                <h3 className="text-base font-bold uppercase text-[#222222] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#CF0003]" />
                  Eligibility Criteria for Admission
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {prog.eligibility}
                </p>
              </div>

              {/* Key Curriculum Highlights */}
              <div>
                <h3 className="text-xl font-bold uppercase text-[#222222] mb-3">
                  Key Curriculum Highlights
                </h3>
                <div className="w-12 h-1 bg-[#CF0003] rounded mb-6"></div>

                <div className="space-y-3">
                  {prog.curriculumHighlights.map((topic, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-white border border-gray-200 shadow-xs flex items-start gap-3 hover:border-[#CF0003] transition-colors"
                    >
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#CF0003] text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-800 font-medium">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Opportunities & Placements */}
              <div>
                <h3 className="text-xl font-bold uppercase text-[#222222] mb-3">
                  Career Pathways & Employment Opportunities
                </h3>
                <div className="w-12 h-1 bg-[#CF0003] rounded mb-6"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {prog.careerOutcomes.map((career, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-2.5"
                    >
                      <Briefcase className="w-4 h-4 text-[#CF0003] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-800">
                        {career}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick Summary Card */}
              <div className="bg-[#F5F5F5] p-6 rounded-xl border border-gray-200">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#222222] mb-4 pb-2 border-b border-gray-200">
                  Course Snapshot
                </h4>

                <div className="space-y-3.5 text-xs text-gray-700">
                  <div>
                    <span className="text-gray-500 block">Degree Level:</span>
                    <strong className="text-gray-900">{prog.degreeType} (Undergraduate / Postgraduate)</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Course Duration:</span>
                    <strong className="text-gray-900">{prog.duration}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Affiliated University:</span>
                    <strong className="text-gray-900">Bharathiar University, Coimbatore</strong>
                  </div>
                  {prog.intakeCapacity && (
                    <div>
                      <span className="text-gray-500 block">Sanctioned Intake:</span>
                      <strong className="text-gray-900">{prog.intakeCapacity}</strong>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    href="/admissions#enquiry"
                    className="w-full inline-block bg-[#CF0003] hover:bg-[#B80000] text-white py-3 rounded font-bold text-xs uppercase tracking-wider text-center transition-colors shadow-sm"
                  >
                    Enquire for Admission
                  </Link>
                </div>
              </div>

              {/* Other Programmes in same college */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#222222] mb-3 pb-2 border-b border-gray-100">
                  Other Programmes
                </h4>
                <ul className="space-y-2 text-xs">
                  {PROGRAMMES.filter((p) => p.slug !== prog.slug).slice(0, 6).map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/academics/${p.slug}`}
                        className="text-gray-700 hover:text-[#CF0003] font-medium flex items-center justify-between group"
                      >
                        <span className="line-clamp-1">{p.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#CF0003] shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
