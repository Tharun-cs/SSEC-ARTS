'use client';

import React, { useState, useMemo } from 'react';
import { CourseCatalogHero } from './CourseCatalogHero';
import { CourseSearchFilter } from './CourseSearchFilter';
import { DisciplineGrid } from './DisciplineGrid';
import { DisciplineModal } from './DisciplineModal';
import { WhyChooseUs } from './WhyChooseUs';
import { CourseStatsBanner } from './CourseStatsBanner';
import { OurPlacementsSection } from './OurPlacementsSection';
import {
  DISCIPLINE_CATEGORIES,
  ALL_COURSES,
  DisciplineItem
} from '@/data/courseCatalogData';

interface CourseCatalogSectionProps {
  showWhyChooseUs?: boolean;
  showStatsBanner?: boolean;
}

export const CourseCatalogSection: React.FC<CourseCatalogSectionProps> = ({
  showWhyChooseUs = false,
  showStatsBanner = true
}) => {
  const [activeLevel, setActiveLevel] = useState<'UG' | 'PG'>('UG');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('');
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineItem | null>(null);

  // Filter disciplines based on level, search, department, and degree
  const filteredDisciplines = useMemo(() => {
    return DISCIPLINE_CATEGORIES.filter((disc) => {
      // 1. Level filter (UG or PG)
      if (!disc.availableLevels.includes(activeLevel)) {
        return false;
      }

      // 2. Department filter
      if (selectedDepartment && disc.title !== selectedDepartment) {
        return false;
      }

      // 3. Degree filter
      if (selectedDegree) {
        const matchesDegree = ALL_COURSES.some(
          (c) =>
            c.disciplineId === disc.id &&
            c.degreeType === activeLevel &&
            c.degreeCode.toLowerCase().includes(selectedDegree.toLowerCase())
        );
        if (!matchesDegree) return false;
      }

      // 4. Search query
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesDisc =
          disc.title.toLowerCase().includes(query) ||
          disc.degreesDisplay.toLowerCase().includes(query) ||
          disc.description.toLowerCase().includes(query);

        const matchesCourse = ALL_COURSES.some(
          (c) =>
            c.disciplineId === disc.id &&
            (c.title.toLowerCase().includes(query) ||
              c.overview.toLowerCase().includes(query))
        );

        return matchesDisc || matchesCourse;
      }

      return true;
    });
  }, [activeLevel, searchTerm, selectedDepartment, selectedDegree]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedDepartment('');
    setSelectedDegree('');
  };

  return (
    <section
      id="course-catalog"
      className="relative w-full bg-white text-[#171717] overflow-hidden pt-2 sm:pt-3 md:pt-4 pb-8 sm:pb-10 select-none border-b border-gray-100"
      aria-label="Course Catalog - All Programmes for Students"
    >
      {/* 1. TOP-LEFT YELLOW SIDE BORDER WAVE (Exact News & Updates Page Border Shape) */}
      <div className="absolute top-0 left-0 w-28 sm:w-36 md:w-44 lg:w-52 max-h-[42px] sm:max-h-[48px] pointer-events-none select-none z-0">
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

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Asymmetric Hero Section with interactive UG / PG Tabs */}
        <CourseCatalogHero
          activeLevel={activeLevel}
          onSelectLevel={setActiveLevel}
        />

        {/* 2. Wide Course Search & Filter Bar */}
        <CourseSearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedDepartment={selectedDepartment}
          onDepartmentChange={setSelectedDepartment}
          selectedDegree={selectedDegree}
          onDegreeChange={setSelectedDegree}
          onSearchSubmit={() => {}}
          onResetFilters={handleResetFilters}
          resultsCount={filteredDisciplines.length}
          totalCount={DISCIPLINE_CATEGORIES.length}
        />

        {/* 3. Programmes by Discipline (4 Desktop Columns × 2 Rows) */}
        <DisciplineGrid
          disciplines={filteredDisciplines}
          onSelectDiscipline={setActiveDiscipline}
          onResetFilters={handleResetFilters}
        />
      </div>

      {/* 2. RIGHT-SIDE YELLOW BORDER SWOOSH (Positioned on right side, UPPER / ABOVE the banner) */}
      <div className="w-full flex justify-end pointer-events-none select-none z-0 -mt-2 sm:-mt-3 mb-3 sm:mb-4">
        <div className="w-36 sm:w-48 md:w-56 lg:w-64 max-h-[44px] sm:max-h-[50px]">
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
      </div>

      {/* 3. Institutional Academic Milestones & Key Statistics Banner */}
      {showStatsBanner && (
        <div className="mt-6 sm:mt-8 md:mt-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <CourseStatsBanner />
        </div>
      )}

      {/* 4. Why Choose Sree Sakthi (SSEC) Section (includes 'Find the Right Programme for Your Future' Banner) */}
      <div className="mt-8 sm:mt-10 md:mt-12 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <WhyChooseUs />
      </div>

      {/* 5. Our Placements & Recruiters Section (Positioned Directly Below the 'Find the Right Programme' Banner) */}
      <div className="mt-8 sm:mt-10 md:mt-12 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <OurPlacementsSection />
      </div>

      {/* Interactive Discipline Programmes Modal */}
      <DisciplineModal
        isOpen={Boolean(activeDiscipline)}
        onClose={() => setActiveDiscipline(null)}
        discipline={activeDiscipline}
      />
    </section>
  );
};
