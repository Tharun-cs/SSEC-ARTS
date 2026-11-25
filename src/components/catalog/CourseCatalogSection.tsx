'use client';

import React, { useState, useMemo } from 'react';
import { CourseCatalogHero } from './CourseCatalogHero';
import { CourseSearchFilter } from './CourseSearchFilter';
import { DisciplineGrid } from './DisciplineGrid';
import { DisciplineModal } from './DisciplineModal';
import {
  DISCIPLINE_CATEGORIES,
  ALL_COURSES,
  DisciplineItem
} from '@/data/courseCatalogData';

interface CourseCatalogSectionProps {
  showWhyChooseUs?: boolean;
  showStatsBanner?: boolean;
}

export const CourseCatalogSection: React.FC<CourseCatalogSectionProps> = () => {
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

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 sm:pb-12">
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
          onSearchSubmit={() => { }}
          onResetFilters={handleResetFilters}
          resultsCount={filteredDisciplines.length}
          totalCount={DISCIPLINE_CATEGORIES.length}
        />

        {/* 3. Programmes by Discipline (4 Desktop Columns × 2 Rows) */}
        <DisciplineGrid
          disciplines={filteredDisciplines}
          level={activeLevel}
          onSelectDiscipline={setActiveDiscipline}
          onResetFilters={handleResetFilters}
        />
      </div>

      {/* Interactive Discipline Programmes Modal */}
      <DisciplineModal
        isOpen={Boolean(activeDiscipline)}
        onClose={() => setActiveDiscipline(null)}
        discipline={activeDiscipline}
        level={activeLevel}
      />
    </section>
  );
};
