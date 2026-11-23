import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  GraduationCap,
  Clock,
  CheckCircle,
  Briefcase,
  Building,
  BookOpen,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Award
} from 'lucide-react';
import { ALL_COURSES, CourseDetail } from '@/data/courseCatalogData';

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = ALL_COURSES.find((c) => c.slug === slug);
  if (!course) {
    return { title: 'Course Not Found | Sree Sakthi College' };
  }
  return {
    title: `${course.title} | Sree Sakthi College of Arts and Science`,
    description: course.overview
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = ALL_COURSES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  // Related courses in the same discipline
  const relatedCourses = ALL_COURSES.filter(
    (c) => c.disciplineId === course.disciplineId && c.id !== course.id
  );

  return (
    <div className="bg-[#FFFDF8] min-h-screen py-10 sm:py-14 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Trail */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#CF0003] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/courses" className="hover:text-[#CF0003] transition-colors">
            Course Catalog
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#CF0003] font-bold">{course.title}</span>
        </nav>

        {/* Hero Card for Course */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-100 shadow-md mb-8 sm:mb-10 relative overflow-hidden">
          {/* 1. TOP-LEFT YELLOW CORNER WAVE (Exact News & Updates Page Border Shape) */}
          <div className="absolute top-0 left-0 w-28 sm:w-36 md:w-44 max-h-[38px] sm:max-h-[44px] pointer-events-none select-none z-0">
            <svg
              viewBox="0 0 160 45"
              fill="none"
              className="w-full h-auto block"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,0 L160,0 C85,6 20,12 0,44 Z"
                fill="#FFCB0B"
              />
            </svg>
          </div>

          {/* 2. BOTTOM-RIGHT YELLOW CORNER SWOOSH (Exact News & Updates Page Border Shape) */}
          <div className="absolute bottom-0 right-0 w-36 sm:w-48 md:w-56 max-h-[44px] sm:max-h-[50px] pointer-events-none select-none z-0">
            <svg
              viewBox="0 0 240 50"
              fill="none"
              className="w-full h-auto block"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M240,0 C220,25 150,42 0,50 L240,50 Z"
                fill="#FFCB0B"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 text-left">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="px-3 py-1 bg-[#FFCB0B] text-black text-xs font-black uppercase rounded-full tracking-wider shadow-2xs">
                  {course.degreeType} Programme
                </span>
                <span className="px-3 py-1 bg-red-50 text-[#CF0003] border border-red-200 text-xs font-bold rounded-full">
                  {course.departmentName}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#171717] tracking-tight mb-3">
                {course.title}
              </h1>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                {course.overview}
              </p>

              {/* Fast Meta Stats */}
              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-700 font-semibold pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#CF0003]" />
                  <span>Duration: <strong>{course.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#CF0003]" />
                  <span>Degree: <strong>{course.degreeCode}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#CF0003]" />
                  <span>Autonomous Campus</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 bg-[#FFFDF8] border border-amber-100 rounded-2xl p-6 text-center shadow-xs">
              <span className="text-xs font-black text-[#CF0003] uppercase tracking-wider block mb-1">
                Admissions Open 2026–27
              </span>
              <h3 className="text-lg font-black text-gray-900 mb-2">
                Apply for this Degree
              </h3>
              <p className="text-xs text-gray-600 mb-5">
                Merit scholarships and sports quota concessions available for qualified applicants.
              </p>
              <div className="flex flex-col gap-2.5">
                <Link
                  href="/admissions"
                  className="w-full py-3 bg-[#CF0003] hover:bg-[#b00003] text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Apply Online Now</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full py-2.5 bg-white border border-gray-300 hover:border-[#FFCB0B] text-gray-800 font-bold text-xs sm:text-sm rounded-xl transition-all"
                >
                  Admission Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info Columns (8 cols) */}
          <div className="lg:col-span-8 space-y-8 text-left">
            {/* 1. Eligibility Criteria */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-base sm:text-lg font-black text-[#171717] mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#CF0003]" />
                <span>Eligibility Criteria</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-[#FFFDF8] p-4 rounded-xl border border-amber-100/80">
                {course.eligibility}
              </p>
            </div>

            {/* 2. Key Curriculum Highlights */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-base sm:text-lg font-black text-[#171717] mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#CF0003]" />
                <span>Curriculum &amp; Semester Modules</span>
              </h3>
              <ul className="space-y-2.5">
                {course.curriculum.map((subj, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-red-50 text-[#CF0003] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{subj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Skills Developed & Career Opportunities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-sm font-black text-[#171717] mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFCB0B]" />
                  <span>Skills Developed</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {course.skillsDeveloped.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-amber-50 text-amber-900 text-xs font-semibold rounded-md border border-amber-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-sm font-black text-[#171717] mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#CF0003]" />
                  <span>Career Opportunities</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {course.careerOpportunities.map((career, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-red-50 text-[#CF0003] text-xs font-bold rounded-md border border-red-100"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Department Facilities */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-base sm:text-lg font-black text-[#171717] mb-3 flex items-center gap-2">
                <Building className="w-5 h-5 text-[#CF0003]" />
                <span>Dedicated Learning Laboratories &amp; Facilities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.facilities.map((fac, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-gray-50 rounded-xl text-xs sm:text-sm font-medium text-gray-800 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FFCB0B]" />
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Related Programmes & Department (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Related Courses */}
            {relatedCourses.length > 0 && (
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-left">
                <h4 className="text-xs font-black uppercase tracking-wider text-gray-500 mb-3">
                  Related Programmes in {course.disciplineTitle}
                </h4>
                <div className="space-y-2.5">
                  {relatedCourses.map((rc) => (
                    <Link
                      key={rc.id}
                      href={`/courses/${rc.slug}`}
                      className="p-3 rounded-xl border border-gray-100 hover:border-[#CF0003] hover:bg-[#FFFDF8] block transition-all"
                    >
                      <span className="text-[10px] font-black uppercase text-[#CF0003]">
                        {rc.degreeType} • {rc.duration}
                      </span>
                      <h5 className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
                        {rc.title}
                      </h5>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Department Link Box */}
            <div className="bg-[#CF0003] text-white rounded-2xl p-5 text-left shadow-md">
              <span className="text-[#FFCB0B] text-[11px] font-black uppercase tracking-wider block mb-1">
                Academic Faculty
              </span>
              <h4 className="text-base font-black uppercase leading-tight mb-2">
                {course.departmentName}
              </h4>
              <p className="text-xs text-white/90 leading-relaxed mb-4">
                Explore faculty profiles, research publications, state seminars, and syllabus structures.
              </p>
              <Link
                href={`/departments/${course.departmentSlug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-[#CF0003] font-bold text-xs rounded-xl hover:bg-gray-100 transition-colors"
              >
                <span>Department Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

