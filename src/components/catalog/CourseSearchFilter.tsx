'use client';

import React from 'react';
import { Search, LayoutGrid, Award, X, RotateCcw } from 'lucide-react';

interface CourseSearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedDepartment: string;
  onDepartmentChange: (dept: string) => void;
  selectedDegree: string;
  onDegreeChange: (degree: string) => void;
  onSearchSubmit: () => void;
  onResetFilters: () => void;
  resultsCount: number;
  totalCount: number;
}

export const CourseSearchFilter: React.FC<CourseSearchFilterProps> = ({
  searchTerm,
  onSearchChange,
  selectedDepartment,
  onDepartmentChange,
  selectedDegree,
  onDegreeChange,
  onSearchSubmit,
  onResetFilters,
  resultsCount,
  totalCount
}) => {
  const isFiltered = Boolean(searchTerm || selectedDepartment || selectedDegree);

  return (
    <div className="w-full mb-6 sm:mb-8">
      {/* Search & Filter Bar Container - Warm Cream Rounded Bar */}
      <div className="bg-[#FFF8EE] border border-amber-100/60 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 shadow-xs">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearchSubmit();
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2.5 sm:gap-3 items-center"
        >
          {/* 1. Search Programmes Input (4 cols on lg) */}
          <div className="lg:col-span-4 relative flex items-center">
            <Search className="w-4 h-4 text-[#CF0003] absolute left-3.5 sm:left-4 pointer-events-none stroke-[2.5]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search Programmes..."
              className="w-full pl-10 sm:pl-11 pr-8 sm:pr-9 py-2.5 sm:py-3 h-11 sm:h-12 bg-white border border-gray-200/80 rounded-full text-xs sm:text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#CF0003] transition-all shadow-2xs"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-3.5 text-gray-400 hover:text-gray-600 p-0.5"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* 2. Department Dropdown (3 cols on lg) */}
          <div className="lg:col-span-3 relative flex items-center">
            <LayoutGrid className="w-4 h-4 text-[#CF0003] absolute left-3.5 sm:left-4 pointer-events-none stroke-[2.5]" />
            <select
              value={selectedDepartment}
              onChange={(e) => onDepartmentChange(e.target.value)}
              className="w-full pl-10 sm:pl-11 pr-8 sm:pr-9 py-2.5 sm:py-3 h-11 sm:h-12 bg-white border border-gray-200/80 rounded-full text-xs sm:text-sm font-medium text-gray-800 focus:outline-none focus:border-[#CF0003] appearance-none cursor-pointer transition-all shadow-2xs"
            >
              <option value="">All Departments</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Management">Management</option>
              <option value="Science">Science</option>
              <option value="Arts & Humanities">Arts &amp; Humanities</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Life Sciences">Life Sciences</option>
            </select>
            <div className="absolute right-4 pointer-events-none text-[#CF0003]">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* 3. Degree Dropdown (3 cols on lg) */}
          <div className="lg:col-span-3 relative flex items-center">
            <Award className="w-4 h-4 text-[#CF0003] absolute left-3.5 sm:left-4 pointer-events-none stroke-[2.5]" />
            <select
              value={selectedDegree}
              onChange={(e) => onDegreeChange(e.target.value)}
              className="w-full pl-10 sm:pl-11 pr-8 sm:pr-9 py-2.5 sm:py-3 h-11 sm:h-12 bg-white border border-gray-200/80 rounded-full text-xs sm:text-sm font-medium text-gray-800 focus:outline-none focus:border-[#CF0003] appearance-none cursor-pointer transition-all shadow-2xs"
            >
              <option value="">All Degrees</option>
              <option value="B.Sc.">B.Sc. (Bachelor of Science)</option>
              <option value="BCA">BCA (Computer Applications)</option>
              <option value="B.Com.">B.Com. (Commerce)</option>
              <option value="BBA">BBA (Management)</option>
              <option value="B.A.">B.A. (English Literature)</option>
              <option value="M.Sc.">M.Sc. (Master of Science)</option>
              <option value="M.Com.">M.Com. (Commerce)</option>
              <option value="MBA">MBA (Management)</option>
              <option value="M.A.">M.A. (English Literature)</option>
            </select>
            <div className="absolute right-4 pointer-events-none text-[#CF0003]">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* 4. Red Search Button (2 cols on lg) */}
          <div className="lg:col-span-2 flex items-center">
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 h-11 sm:h-12 px-5 bg-[#CF0003] hover:bg-[#b00003] active:scale-98 text-white font-bold text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <span>Search</span>
              <Search className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </form>
      </div>

      {/* Filter Status & Reset Line */}
      {isFiltered && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-gray-600 px-3 pt-2">
          <span>
            Found <strong>{resultsCount}</strong> matching disciplines (out of {totalCount})
          </span>
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-1 text-[#CF0003] font-bold hover:underline self-start sm:self-auto"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};
