'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, GraduationCap, Clock, CheckCircle, ArrowRight, BookOpen } from 'lucide-react';
import { DisciplineItem, ALL_COURSES, CourseDetail } from '@/data/courseCatalogData';

interface DisciplineModalProps {
  isOpen: boolean;
  onClose: () => void;
  discipline: DisciplineItem | null;
}

export const DisciplineModal: React.FC<DisciplineModalProps> = ({
  isOpen,
  onClose,
  discipline
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !discipline) return null;

  const relevantCourses = ALL_COURSES.filter(
    (c) => c.disciplineId === discipline.id && c.isPublished
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="bg-[#CF0003] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFCB0B]" />
            <div>
              <h3 className="font-black text-base sm:text-lg tracking-tight uppercase">
                {discipline.title} Programmes
              </h3>
              <p className="text-[11px] text-white/80 font-medium">
                {discipline.degreesDisplay} • Department of {discipline.title}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Discipline Intro */}
          <div className="flex flex-col sm:flex-row gap-5 items-center bg-[#FFFDF8] p-4 rounded-2xl border border-amber-100">
            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 shadow-sm bg-gray-100">
              <picture className="w-full h-full block">
                <source srcSet={discipline.image} type="image/webp" />
                <img
                  src={discipline.image.replace('.webp', '.jpg')}
                  alt={discipline.title}
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            <div className="flex-1 text-left">
              <span className="inline-block px-2.5 py-0.5 bg-[#FFCB0B] text-black text-[10px] font-black uppercase rounded-full mb-1">
                Discipline Overview
              </span>
              <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                {discipline.description}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Approved by AICTE • Autonomous Curriculum • Affiliated to Anna / Bharathiar University
              </p>
            </div>
          </div>

          {/* Available Programmes Listing */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-gray-500 mb-3">
              Available Degree Programmes ({relevantCourses.length})
            </h4>

            <div className="space-y-3">
              {relevantCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-gray-200 hover:border-[#CF0003] rounded-2xl p-4 transition-all shadow-xs hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1 text-left flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                          course.degreeType === 'UG'
                            ? 'bg-red-50 text-[#CF0003] border border-red-200'
                            : 'bg-amber-50 text-amber-900 border border-amber-200'
                        }`}
                      >
                        {course.degreeType} Programme
                      </span>
                      <span className="text-xs text-gray-500 font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        {course.duration}
                      </span>
                    </div>

                    <h5 className="text-sm sm:text-base font-black text-gray-900 leading-snug">
                      {course.title}
                    </h5>

                    <p className="text-xs text-gray-600 line-clamp-2">
                      {course.overview}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="w-full sm:w-auto justify-center px-4 py-2 bg-[#CF0003] hover:bg-[#b00003] active:scale-98 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-2xs"
                    >
                      <span>Course Details</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3 sm:py-3.5 bg-gray-50 border-t border-gray-100 flex flex-col xs:flex-row items-center justify-between gap-2.5">
          <Link
            href={`/departments/${discipline.departmentSlug}`}
            className="text-xs font-bold text-[#CF0003] hover:underline flex items-center gap-1"
          >
            <span>Visit Full Department Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={onClose}
            className="w-full xs:w-auto px-5 py-2 bg-gray-200 hover:bg-gray-300 active:scale-98 text-gray-800 text-xs font-bold rounded-lg transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

