import React from 'react';
import type { Metadata } from 'next';
import { CourseCatalogSection } from '@/components/catalog/CourseCatalogSection';

export const metadata: Metadata = {
  title: 'Course Catalog & All Programmes | Sree Sakthi College of Arts and Science',
  description:
    'Explore our diverse range of undergraduate and postgraduate programmes across Computer Science, Commerce, Management, Science, Information Technology, and Arts.'
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      <CourseCatalogSection isHomePage={false} />
    </main>
  );
}

