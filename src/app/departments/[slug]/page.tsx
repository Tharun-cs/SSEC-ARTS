import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageBanner } from '@/components/shared/PageBanner';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { DEPARTMENTS } from '@/data/collegeData';
import {
  CheckCircle2,
  BookOpen,
  Laptop,
  Users,
  Briefcase,
  Award,
  ArrowRight,
  GraduationCap
} from 'lucide-react';

interface DepartmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DEPARTMENTS.map((dept) => ({
    slug: dept.slug
  }));
}

export async function generateMetadata({ params }: DepartmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const dept = DEPARTMENTS.find((d) => d.slug === slug);

  if (!dept) {
    return { title: 'Department Not Found' };
  }

  return {
    title: `${dept.name} | Sree Sakthi College`,
    description: dept.description
  };
}

export default async function DepartmentDetailPage({ params }: DepartmentPageProps) {
  const { slug } = await params;
  const dept = DEPARTMENTS.find((d) => d.slug === slug);

  if (!dept) {
    notFound();
  }

  return (
    <div>
      <PageBanner
        title={dept.name}
        subtitle={dept.description}
        breadcrumbs={[
          { label: 'Departments', href: '/departments' },
          { label: dept.shortCode }
        ]}
      />

      <div className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Overview & Image */}
              <section id="overview">
                <div className="rounded-xl overflow-hidden shadow-md mb-6 border border-gray-200">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-72 sm:h-96 object-cover"
                  />
                </div>
                <h2 className="text-2xl font-black uppercase text-[#222222] tracking-tight mb-3">
                  Department Overview
                </h2>
                <div className="w-16 h-1 bg-[#CF0003] rounded mb-4"></div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {dept.fullOverview}
                </p>
              </section>

              {/* Vision & Mission */}
              <section id="vision-mission" className="bg-[#F5F5F5] p-6 sm:p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold uppercase text-[#222222] mb-3">
                  Vision & Mission
                </h3>
                <div className="w-12 h-1 bg-[#FFCC00] rounded mb-6"></div>

                <div className="mb-6">
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#CF0003] mb-1">
                    Department Vision
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                    "{dept.vision}"
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#CF0003] mb-2">
                    Department Mission
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                    {dept.mission.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#CF0003] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Programmes Offered */}
              <section id="programmes">
                <h3 className="text-xl font-bold uppercase text-[#222222] mb-3">
                  Academic Programmes Offered
                </h3>
                <div className="w-12 h-1 bg-[#CF0003] rounded mb-6"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dept.programmesOffered.map((prog) => (
                    <div
                      key={prog}
                      className="p-4 rounded-lg border border-gray-200 bg-white shadow-xs hover:border-[#CF0003] transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="w-5 h-5 text-[#CF0003]" />
                        <h4 className="font-bold text-sm text-[#222222]">{prog}</h4>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">
                        Affiliated to Bharathiar University. Admissions open for 2026–2027.
                      </p>
                      <Link
                        href="/admissions#enquiry"
                        className="text-xs font-bold text-[#CF0003] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Apply / Enquire</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              </section>

              {/* Laboratories & Infrastructure */}
              <section id="laboratories">
                <h3 className="text-xl font-bold uppercase text-[#222222] mb-3">
                  Laboratory & Practical Facilities
                </h3>
                <div className="w-12 h-1 bg-[#CF0003] rounded mb-6"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dept.laboratories.map((lab) => (
                    <div
                      key={lab}
                      className="p-4 rounded-lg bg-gray-50 border border-gray-200 flex items-start gap-3"
                    >
                      <Laptop className="w-5 h-5 text-[#CF0003] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#222222]">{lab}</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          Equipped with state-of-the-art workstations, high-speed networking, and licensed software packages.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Faculty Directory */}
              <section id="faculty">
                <h3 className="text-xl font-bold uppercase text-[#222222] mb-3">
                  Department Faculty Members
                </h3>
                <div className="w-12 h-1 bg-[#CF0003] rounded mb-6"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dept.facultyMembers.map((fac) => (
                    <div
                      key={fac.name}
                      className="p-4 rounded-lg border border-gray-200 bg-white flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-red-100 text-[#CF0003] flex items-center justify-center font-bold text-sm shrink-0">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#222222]">{fac.name}</h4>
                        <p className="text-xs text-[#CF0003] font-semibold">{fac.designation}</p>
                        <p className="text-[11px] text-gray-500">{fac.qualification} • {fac.experience} Exp.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Career Prospects */}
              <section id="careers">
                <h3 className="text-xl font-bold uppercase text-[#222222] mb-3">
                  Career Pathways & Job Roles
                </h3>
                <div className="w-12 h-1 bg-[#CF0003] rounded mb-6"></div>

                <div className="flex flex-wrap gap-2">
                  {dept.careerProspects.map((career) => (
                    <span
                      key={career}
                      className="text-xs font-semibold bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full border border-gray-200"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </section>

            </div>

            {/* Sidebar Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Head of Department Card */}
              <div className="bg-[#F5F5F5] rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-20 h-20 rounded-full bg-[#CF0003] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                  <GraduationCap className="w-10 h-10 text-[#FFCC00]" />
                </div>
                <h4 className="text-base font-bold text-[#222222]">{dept.headOfDepartment.name}</h4>
                <p className="text-xs font-semibold text-[#CF0003]">{dept.headOfDepartment.designation}</p>
                <p className="text-[11px] text-gray-500 mb-4">{dept.headOfDepartment.qualification}</p>

                {dept.headOfDepartment.message && (
                  <p className="text-xs text-gray-600 italic bg-white p-3 rounded border border-gray-200 text-left">
                    &ldquo;{dept.headOfDepartment.message}&rdquo;
                  </p>
                )}
              </div>

              {/* Department Highlights */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-xs">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#222222] mb-3 pb-2 border-b border-gray-100">
                  Key Department Strengths
                </h4>
                <ul className="space-y-2.5 text-xs text-gray-700">
                  {dept.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#CF0003] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Action Box */}
              <div className="bg-[#CF0003] text-white rounded-xl p-6 shadow-md text-center">
                <h4 className="text-base font-bold uppercase mb-2 text-white">
                  Interested in this Department?
                </h4>
                <p className="text-xs text-red-100 mb-4">
                  Talk to our academic counsellors regarding admissions, fee structure, and scholarships.
                </p>
                <Link
                  href="/admissions#enquiry"
                  className="w-full inline-block bg-[#FFCC00] hover:bg-[#E6B800] text-[#222222] font-black text-xs uppercase tracking-wider py-2.5 rounded shadow transition-colors"
                >
                  Apply Online 2026–2027
                </Link>
              </div>

              {/* Other Departments Links */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#222222] mb-3 pb-2 border-b border-gray-100">
                  Other Departments
                </h4>
                <ul className="space-y-2 text-xs">
                  {DEPARTMENTS.filter((d) => d.slug !== dept.slug).map((d) => (
                    <li key={d.id}>
                      <Link
                        href={`/departments/${d.slug}`}
                        className="text-gray-700 hover:text-[#CF0003] font-medium flex items-center justify-between group"
                      >
                        <span>{d.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#CF0003] transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
