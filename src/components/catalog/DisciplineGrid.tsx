'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DisciplineCard } from './DisciplineCard';
import { DisciplineItem } from '@/data/courseCatalogData';
import { BookOpen, RotateCcw } from 'lucide-react';

interface DisciplineGridProps {
  disciplines: DisciplineItem[];
  level?: 'UG' | 'PG';
  onSelectDiscipline?: (discipline: DisciplineItem) => void;
  onResetFilters?: () => void;
}

export const DisciplineGrid: React.FC<DisciplineGridProps> = ({
  disciplines,
  level,
  onSelectDiscipline,
  onResetFilters
}) => {
  if (disciplines.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full py-12 px-4 bg-[#FFFDF8] rounded-3xl border border-gray-200 text-center flex flex-col items-center justify-center my-6"
      >
        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#CF0003] mb-3">
          <BookOpen className="w-6 h-6 stroke-[2]" />
        </div>
        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
          No Programmes Match Your Search
        </h4>
        <p className="text-xs sm:text-sm text-gray-500 max-w-md mb-4">
          Try adjusting your search keywords, clearing department filters, or resetting the filter options.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#CF0003] hover:bg-[#b00003] text-white font-bold text-xs rounded-full transition-all shadow-sm active:scale-98"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 w-full">
      {disciplines.map((discipline, index) => (
        <motion.div
          key={discipline.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: (index % 4) * 0.08, ease: 'easeOut' }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="h-full"
        >
          <DisciplineCard
            discipline={discipline}
            level={level}
            onSelectDiscipline={onSelectDiscipline}
          />
        </motion.div>
      ))}
    </div>
  );
};
