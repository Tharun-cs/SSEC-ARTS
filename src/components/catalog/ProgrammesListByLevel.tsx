'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Layers,
  Search,
  Clock,
  CheckCircle,
  ArrowRight,
  BookOpen,
  ChevronRight
} from 'lucide-react';
import { ALL_COURSES, CourseDetail, DISCIPLINE_CATEGORIES, DisciplineItem } from '@/data/courseCatalogData';
import { DisciplineGrid } from './DisciplineGrid';
import { DisciplineModal } from './DisciplineModal';
import { OurPlacementsSection } from './OurPlacementsSection';
import { WhyChooseUs } from './WhyChooseUs';

interface ProgrammesListByLevelProps {
  level: 'UG' | 'PG';
  title?: string;
  subtitle?: string;
}

export const ProgrammesListByLevel: React.FC<ProgrammesListByLevelProps> = ({
  level,
  title,
  subtitle
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState('');
  const [activeDisciplineModal, setActiveDisciplineModal] = useState<DisciplineItem | null>(null);

  // Available disciplines for this level
  const availableDisciplines = useMemo(() => {
    return DISCIPLINE_CATEGORIES.filter((disc) => disc.availableLevels.includes(level));
  }, [level]);

  // Filter courses by level, discipline, and search query
  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      // Must match the requested level (UG or PG)
      if (course.degreeType !== level) return false;

      // Discipline filter
      if (selectedDiscipline && course.disciplineId !== selectedDiscipline) {
        return false;
      }

      // Search term filter
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesCode = course.degreeCode.toLowerCase().includes(query);
        const matchesDiscipline = course.disciplineTitle.toLowerCase().includes(query);
        const matchesDepartment = course.departmentName.toLowerCase().includes(query);
        const matchesOverview = course.overview.toLowerCase().includes(query);

        return matchesTitle || matchesCode || matchesDiscipline || matchesDepartment || matchesOverview;
      }

      return true;
    });
  }, [level, selectedDiscipline, searchTerm]);

  const otherLevel = level === 'UG' ? 'PG' : 'UG';
  const otherLevelLabel = level === 'UG' ? 'Postgraduate (PG)' : 'Undergraduate (UG)';
  const otherLevelHref = level === 'UG' ? '/courses/pg' : '/courses/ug';

  const defaultTitle =
    level === 'UG'
      ? 'Undergraduate Programmes (UG)'
      : 'Postgraduate Programmes (PG)';

  const defaultSubtitle =
    level === 'UG'
      ? 'Explore our premier 3-year bachelor degree courses designed to establish strong academic foundations, technical mastery, and career readiness.'
      : 'Advance your career with our specialized 2-year master degree programmes featuring research thesis opportunities, industry projects, and executive leadership.';

  return (
    <div className="w-full bg-[#FFFDF8] min-h-screen pb-16 select-none font-sans">
      {/* 1. HERO BANNER FOR THIS LEVEL */}
      <section className="relative w-full bg-gradient-to-b from-[#FFFDF8] via-white to-[#FFFDF8] border-b border-gray-100 pt-8 sm:pt-12 pb-10 sm:pb-14 overflow-hidden">
        {/* Top-Left Yellow Accent Corner Wave */}
        <div className="absolute top-0 left-0 w-28 sm:w-44 max-h-[44px] pointer-events-none select-none z-0">
          <svg viewBox="0 0 160 45" fill="none" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0,0 L160,0 C85,6 20,12 0,44 Z" fill="#FFCB0B" />
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mb-4 sm:mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#CF0003] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/courses" className="hover:text-[#CF0003] transition-colors">Courses</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#CF0003] font-bold">{level === 'UG' ? 'Undergraduate (UG)' : 'Postgraduate (PG)'}</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            {/* Header Text & Badges */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#CF0003] text-xs font-black uppercase tracking-wider mb-3">
                {level === 'UG' ? (
                  <GraduationCap className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  <Layers className="w-4 h-4 stroke-[2.5]" />
                )}
                <span>{level === 'UG' ? '3-Year Bachelor Degrees' : '2-Year Master Specializations'}</span>
              </div>

              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#171717] tracking-tight leading-tight mb-3">
                {title || defaultTitle}
              </h1>

              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                {subtitle || defaultSubtitle}
              </p>
            </div>

            {/* Quick-Switch Toggle to Other Level */}
            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
              <Link
                href={otherLevelHref}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border-2 border-[#CF0003] text-[#CF0003] hover:text-[#B00003] px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-98"
              >
                <span>Switch to {otherLevelLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#172C4F] px-5 py-2.5 rounded-full font-black text-xs sm:text-sm shadow-xs transition-all active:scale-98 uppercase tracking-wide"
              >
                <span>Apply for {level} Admission</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 8 DISCIPLINE CARDS GRID SPECIFICALLY FOR THIS LEVEL (UG OR PG) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="mb-5 sm:mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200/80 pb-3">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#171717] tracking-tight">
              {level === 'UG' ? 'Undergraduate Disciplines & Degree Streams' : 'Postgraduate Disciplines & Degree Streams'}
            </h2>
            <p className="text-xs sm:text-[13px] text-gray-500 mt-0.5">
              {level === 'UG'
                ? 'All 8 academic disciplines offering 3-year bachelor degree courses.'
                : 'All 8 academic disciplines offering 2-year advanced master degree courses.'}
            </p>
          </div>
          <div className="text-xs font-bold text-[#CF0003] shrink-0">
            {availableDisciplines.length} Disciplines Available
          </div>
        </div>

        {/* 8 Discipline Cards in 4 Desktop Columns × 2 Rows matching the user reference */}
        <DisciplineGrid
          disciplines={availableDisciplines}
          level={level}
          onSelectDiscipline={(disc) => setActiveDisciplineModal(disc)}
        />
      </section>

      {/* 3. SEARCH & DISCIPLINE FILTER BAR FOR PROGRAMMES */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="bg-white rounded-2xl border border-gray-200/90 shadow-md p-3.5 sm:p-5 flex flex-col md:flex-row items-center gap-3 sm:gap-4">
          {/* Keyword Search */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Search ${level} courses (e.g. Computer Science, Accounting, BBA, MBA)...`}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#CF0003] focus:ring-2 focus:ring-red-100 text-[#171717] placeholder-gray-400"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold px-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Discipline Category Filter Dropdown */}
          <div className="w-full md:w-72 shrink-0">
            <select
              value={selectedDiscipline}
              onChange={(e) => setSelectedDiscipline(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#CF0003] focus:ring-2 focus:ring-red-100 text-[#171717]"
            >
              <option value="">All Disciplines ({availableDisciplines.length})</option>
              {availableDisciplines.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.title}
                </option>
              ))}
            </select>
          </div>

          {/* Results Badge */}
          <div className="text-xs font-bold text-gray-500 whitespace-nowrap px-2">
            Showing <span className="text-[#CF0003] font-black">{filteredCourses.length}</span> {level} programmes
          </div>
        </div>

        {/* Quick Filter Chips */}
        <div className="flex items-center gap-2 mt-3.5 overflow-x-auto no-scrollbar pb-1">
          <button
            type="button"
            onClick={() => setSelectedDiscipline('')}
            className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
              selectedDiscipline === ''
                ? 'bg-[#CF0003] text-white shadow-xs'
                : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
            }`}
          >
            All {level}
          </button>
          {availableDisciplines.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setSelectedDiscipline(d.id)}
              className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                selectedDiscipline === d.id
                  ? 'bg-[#CF0003] text-white shadow-xs'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              {d.title}
            </button>
          ))}
        </div>
      </section>

      {/* 4. DETAILED PROGRAMME CARDS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-red-50 text-[#CF0003] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-[#171717]">No {level} programmes match your search</h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Try adjusting your search terms or clearing discipline filters to see all available programmes.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedDiscipline('');
              }}
              className="inline-flex items-center gap-2 bg-[#CF0003] text-white px-5 py-2 rounded-full text-xs font-bold shadow-xs hover:bg-[#B00003] transition-colors"
            >
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course: CourseDetail) => (
              <div
                key={course.id}
                className="group bg-white rounded-2xl border border-gray-200/90 hover:border-[#CF0003]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                {/* Course Header Banner */}
                <div className="p-5 sm:p-6 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-red-50 text-[#CF0003] border border-red-200">
                      <span>{course.degreeCode}</span>
                      <span>•</span>
                      <span>{course.degreeType}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11.5px] font-bold text-gray-500">
                      <Clock className="w-3.5 h-3.5 text-[#CF0003]" />
                      <span>{course.duration}</span>
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#171717] group-hover:text-[#CF0003] transition-colors line-clamp-1 tracking-tight">
                    {course.title}
                  </h3>

                  {/* Discipline / Department */}
                  <p className="text-xs font-bold text-[#666666] mt-1 mb-3">
                    {course.departmentName}
                  </p>

                  {/* Overview Text */}
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {course.overview}
                  </p>

                  {/* Key Highlights / Curriculum Pills */}
                  <div className="space-y-1.5 pt-3 border-t border-gray-100">
                    <div className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                      Core Curriculum
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {course.curriculum.slice(0, 3).map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2 py-0.5 rounded bg-gray-50 border border-gray-100 text-gray-700 text-[11px] font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Eligibility Pill */}
                  <div className="mt-3.5 pt-3 border-t border-gray-100 text-xs text-gray-600 flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">
                      <strong className="text-gray-800">Eligibility:</strong> {course.eligibility}
                    </span>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="bg-[#FFFDF8] px-5 sm:px-6 py-3.5 border-t border-gray-100 flex items-center justify-between gap-3">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#CF0003] hover:underline"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-1 bg-[#CF0003] hover:bg-[#B00003] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-2xs hover:shadow transition-all active:scale-95"
                  >
                    <span>Apply Now</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. WHY CHOOSE SSEC SECTION */}
      <div className="mt-12 sm:mt-16 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <WhyChooseUs />
      </div>

      {/* 6. OUR PLACEMENTS & RECRUITERS */}
      <div className="mt-10 sm:mt-14 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <OurPlacementsSection />
      </div>

      {/* 7. BOTTOM ADMISSIONS CALLOUT */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <div className="bg-gradient-to-r from-[#CF0003] to-[#8C0002] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#FFCB0B]/15 blur-2xl pointer-events-none" />

          <div className="space-y-2 max-w-2xl relative z-10 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFCB0B] text-[#172C4F] text-xs font-black uppercase tracking-wider">
              {level} Admissions 2026–2027
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready to begin your journey at Sree Sakthi?
            </h2>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
              Explore scholarships, hostel facilities, college bus routes, and get direct assistance from our admissions helpdesk.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full md:w-auto">
            <Link
              href="/admissions"
              className="w-full sm:w-auto text-center bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#172C4F] font-black px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all active:scale-98"
            >
              Apply Online
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center bg-white/15 hover:bg-white/25 border border-white/40 text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm transition-all"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Discipline Programmes Modal */}
      <DisciplineModal
        isOpen={Boolean(activeDisciplineModal)}
        onClose={() => setActiveDisciplineModal(null)}
        discipline={activeDisciplineModal}
        level={level}
      />
    </div>
  );
};
