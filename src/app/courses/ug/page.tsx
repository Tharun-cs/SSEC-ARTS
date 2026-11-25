import React from 'react';
import type { Metadata } from 'next';
import { ProgrammesListByLevel } from '@/components/catalog/ProgrammesListByLevel';

export const metadata: Metadata = {
  title: 'Undergraduate Programmes (UG) | Sree Sakthi College of Arts and Science',
  description:
    'Explore 3-year undergraduate degree programmes in Computer Science, BCA, B.Com, BBA, Information Technology, Mathematics, and Life Sciences at Sree Sakthi College of Arts and Science.'
};

export default function UGProgrammesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProgrammesListByLevel level="UG" />
    </main>
  );
}
