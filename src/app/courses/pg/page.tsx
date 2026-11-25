import React from 'react';
import type { Metadata } from 'next';
import { ProgrammesListByLevel } from '@/components/catalog/ProgrammesListByLevel';

export const metadata: Metadata = {
  title: 'Postgraduate Programmes (PG) | Sree Sakthi College of Arts and Science',
  description:
    'Explore 2-year advanced master degree programmes in M.Sc. Computer Science, M.Com, MBA, M.Sc. Information Technology, and Applicable Mathematics at Sree Sakthi College of Arts and Science.'
};

export default function PGProgrammesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProgrammesListByLevel level="PG" />
    </main>
  );
}
