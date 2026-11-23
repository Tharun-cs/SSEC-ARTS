'use client';

import React, { useState, useEffect } from 'react';
import { PageBanner } from '@/components/shared/PageBanner';
import {
  ShieldAlert,
  Users,
  Bell,
  BookOpen,
  Mail,
  Trash2,
  CheckCircle,
  Plus,
  Lock,
  LogOut,
  Clock,
  Check,
  Search,
  Filter
} from 'lucide-react';
import { StoredEnquiry } from '@/lib/storage';
import { ALL_COURSES, CourseDetail } from '@/data/courseCatalogData';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState<'enquiries' | 'announcements' | 'catalog' | 'settings'>('enquiries');
  const [enquiries, setEnquiries] = useState<StoredEnquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  // New Announcement state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'Admissions' | 'Examinations' | 'Events' | 'General'>('Admissions');
  const [announcements, setAnnouncements] = useState<any[]>([]);

  // Course Catalog Admin state
  const [courses, setCourses] = useState<CourseDetail[]>(ALL_COURSES);
  const [newCourseTitle, setNewCourseTitle] = useState('');
  const [newCourseType, setNewCourseType] = useState<'UG' | 'PG'>('UG');
  const [newCourseCode, setNewCourseCode] = useState('B.Sc.');
  const [newCourseDept, setNewCourseDept] = useState('Computer Science');
  const [newCourseDuration, setNewCourseDuration] = useState('3 Years (6 Semesters)');
  const [newCourseEligibility, setNewCourseEligibility] = useState('');
  const [newCourseOverview, setNewCourseOverview] = useState('');

  // Check login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123' || password === 'sakthi@2026') {
      setIsAuthenticated(true);
      setLoginError('');
      fetchData();
    } else {
      setLoginError('Invalid Administrator credentials. Hint: use admin123');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/enquiry');
      const data = await res.json();
      if (data.success) {
        setEnquiries(data.data);
      }
    } catch {
      console.error('Failed to load enquiries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const handleUpdateStatus = (id: string, newStatus: StoredEnquiry['status']) => {
    setEnquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const handleDeleteEnquiry = (id: string) => {
    if (confirm('Are you sure you want to delete this enquiry record?')) {
      setEnquiries((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleAddAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const newItem = {
      id: `ann-${Date.now()}`,
      title: newTitle,
      date: 'Just now',
      category: newCategory,
      link: '/admissions'
    };

    setAnnouncements((prev) => [newItem, ...prev]);
    setNewTitle('');
    alert('Announcement published successfully.');
  };

  const handleTogglePublishCourse = (id: string) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isPublished: !c.isPublished } : c))
    );
  };

  const handleDeleteCourse = (id: string) => {
    if (confirm('Are you sure you want to delete this course from the catalog?')) {
      setCourses((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourseTitle) return;

    const newCourse: CourseDetail = {
      id: `course-${Date.now()}`,
      title: newCourseTitle,
      slug: newCourseTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      degreeType: newCourseType,
      degreeCode: newCourseCode,
      disciplineId: 'disc-cs',
      disciplineTitle: newCourseDept,
      departmentName: `Department of ${newCourseDept}`,
      departmentSlug: newCourseDept.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      duration: newCourseDuration,
      eligibility: newCourseEligibility || 'Pass in Higher Secondary Examination (10+2) with relevant core subjects.',
      overview: newCourseOverview || `Professional ${newCourseType} degree programme in ${newCourseTitle}.`,
      curriculum: ['Core Theory & Practicals', 'Industry Internship', 'Capstone Research Project'],
      skillsDeveloped: ['Core Competencies', 'Practical Training', 'Analytical Thinking'],
      careerOpportunities: ['Professional Specialist', 'Corporate Associate', 'Higher Studies'],
      facilities: ['Modern Specialized Laboratories', 'High-Speed Computing Facilities'],
      image: '/images/catalog/disc_cs.webp',
      isPublished: true,
      displayOrder: courses.length + 1
    };

    setCourses((prev) => [newCourse, ...prev]);
    setNewCourseTitle('');
    setNewCourseEligibility('');
    setNewCourseOverview('');
    alert(`Course "${newCourseTitle}" added and published successfully.`);
  };

  const filteredEnquiries = enquiries.filter((e) => {
    const matchesSearch =
      e.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.programme.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.phone.includes(searchTerm);

    const matchesStatus = statusFilter === 'ALL' || e.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (!isAuthenticated) {
    return (
      <div>
        <PageBanner
          title="Administrative Portal"
          subtitle="Authorized personnel only. Sree Sakthi Engineering College (Autonomous Technical Campus – Karamadai)."
          breadcrumbs={[{ label: 'Admin Login' }]}
        />

        <div className="py-20 bg-[#FFF9F0]">
          <div className="max-w-md mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 border-t-4 border-t-[#CF0003]">
              <div className="w-12 h-12 rounded-full bg-red-100 text-[#CF0003] flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6" />
              </div>

              <h2 className="text-xl font-bold uppercase text-center text-[#242424] mb-1">
                Administrator Login
              </h2>
              <p className="text-xs text-gray-500 text-center mb-6">
                Enter your administrative key to access the SSEC college management console.
              </p>

              {loginError && (
                <div className="mb-4 p-3 rounded bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                  {loginError}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Admin Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter admin password (hint: admin123)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full text-sm px-3.5 py-2.5 rounded border border-gray-300 focus:border-[#CF0003] focus:ring-1 focus:ring-[#CF0003] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#CF0003] hover:bg-[#8C0002] text-white font-bold py-3 rounded uppercase text-xs tracking-wider transition-colors"
                >
                  Sign In to Dashboard
                </button>
              </form>

              <div className="mt-6 pt-4 border-t border-gray-100 text-center text-[11px] text-gray-400">
                Demo Credentials: Password is <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded font-mono font-bold">admin123</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[#CF0003] text-white py-6 border-b-4 border-[#FFCB0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFCB0B]">
              Autonomous Technical Campus – Karamadai
            </span>
            <h1 className="text-xl sm:text-2xl font-black uppercase text-white">
              Sree Sakthi Engineering College — Admin Console
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-red-200">Logged in as Administrator</span>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="py-8 bg-[#FFF9F0] min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Metrics Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase">Total Enquiries</span>
                <span className="text-2xl font-black text-[#242424] block mt-1">{enquiries.length}</span>
              </div>
              <div className="p-3 rounded-lg bg-red-50 text-[#CF0003]">
                <Users className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase">New Leads</span>
                <span className="text-2xl font-black text-amber-600 block mt-1">
                  {enquiries.filter((e) => e.status === 'New').length}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-amber-50 text-amber-600">
                <Clock className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase">Enrolled</span>
                <span className="text-2xl font-black text-emerald-600 block mt-1">
                  {enquiries.filter((e) => e.status === 'Enrolled').length}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-emerald-50 text-emerald-600">
                <CheckCircle className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase">Catalog Programmes</span>
                <span className="text-2xl font-black text-[#242424] block mt-1">{courses.length}</span>
              </div>
              <div className="p-3 rounded-lg bg-yellow-50 text-yellow-900">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 mb-6 bg-white p-2 rounded-lg shadow-xs">
            <button
              onClick={() => setActiveTab('enquiries')}
              className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'enquiries'
                  ? 'bg-[#CF0003] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Admission Enquiries ({enquiries.length})
            </button>
            <button
              onClick={() => setActiveTab('catalog')}
              className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'catalog'
                  ? 'bg-[#CF0003] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Course Catalog ({courses.length})
            </button>
            <button
              onClick={() => setActiveTab('announcements')}
              className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'announcements'
                  ? 'bg-[#CF0003] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Manage Announcements
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'settings'
                  ? 'bg-[#CF0003] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Database Integration
            </button>
          </div>

          {/* Tab 1: Admission Enquiries */}
          {activeTab === 'enquiries' && (
            <div className="bg-white rounded-xl shadow-xs border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search candidate, course..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full text-xs pl-9 pr-3 py-1.5 border border-gray-300 rounded outline-none focus:border-[#CF0003]"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-xs text-gray-500">Status:</span>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="text-xs border border-gray-300 rounded px-2.5 py-1.5 bg-white outline-none"
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Enrolled">Enrolled</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 font-bold uppercase">
                      <th className="py-3 px-4">Ref ID</th>
                      <th className="py-3 px-4">Candidate Details</th>
                      <th className="py-3 px-4">Programme</th>
                      <th className="py-3 px-4">Qualification</th>
                      <th className="py-3 px-4">Preferred Mode</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredEnquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-gray-700">
                          {enq.id}
                        </td>
                        <td className="py-3.5 px-4">
                          <strong className="block text-gray-900 text-sm">{enq.studentName}</strong>
                          <span className="text-gray-500 block">{enq.email}</span>
                          <span className="text-[#CF0003] font-semibold">{enq.phone}</span>
                        </td>
                        <td className="py-3.5 px-4 font-medium text-gray-800">
                          {enq.programme}
                        </td>
                        <td className="py-3.5 px-4 text-gray-600">
                          {enq.qualification}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-semibold text-[10px]">
                            {enq.preferredContact}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={enq.status}
                            onChange={(e) =>
                              handleUpdateStatus(enq.id, e.target.value as StoredEnquiry['status'])
                            }
                            className={`text-xs font-bold rounded px-2 py-1 outline-none border ${
                              enq.status === 'New'
                                ? 'bg-amber-50 text-amber-800 border-amber-200'
                                : enq.status === 'Contacted'
                                ? 'bg-blue-50 text-blue-800 border-blue-200'
                                : enq.status === 'Enrolled'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                : 'bg-gray-100 text-gray-700 border-gray-200'
                            }`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Enrolled">Enrolled</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => handleDeleteEnquiry(enq.id)}
                            className="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors"
                            title="Delete Enquiry"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredEnquiries.length === 0 && (
                  <div className="p-8 text-center text-gray-500 text-xs">
                    No admission enquiries match the current filters.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 2: Manage Announcements */}
          {activeTab === 'announcements' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5 bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
                <h3 className="text-base font-bold text-[#242424] mb-1">Publish New Announcement</h3>
                <p className="text-xs text-gray-500 mb-4">
                  This notice will appear in the top maroon announcement bar across all pages.
                </p>

                <form onSubmit={handleAddAnnouncement} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Announcement Title / Text
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="e.g. Autonomous end-semester examination hall tickets available for download."
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full text-xs p-3 border border-gray-300 rounded focus:border-[#CF0003] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Category</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full text-xs p-2.5 border border-gray-300 rounded bg-white outline-none"
                    >
                      <option value="Admissions">Admissions</option>
                      <option value="Examinations">Examinations</option>
                      <option value="Events">Events</option>
                      <option value="General">General Notice</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#CF0003] hover:bg-[#8C0002] text-white font-bold py-2.5 rounded text-xs uppercase tracking-wider transition-colors"
                  >
                    Publish Announcement
                  </button>
                </form>
              </div>

              <div className="md:col-span-7 bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
                <h3 className="text-base font-bold text-[#242424] mb-1">Active Notices</h3>
                <p className="text-xs text-gray-500 mb-4">Live items on the website ticker:</p>

                <div className="space-y-3">
                  {announcements.map((ann) => (
                    <div
                      key={ann.id}
                      className="p-3 bg-gray-50 rounded border border-gray-200 flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-bold text-[#CF0003] mr-2">[{ann.category}]</span>
                        <span className="text-gray-800">{ann.title}</span>
                      </div>
                      <span className="text-[10px] text-gray-400 shrink-0 ml-2">{ann.date}</span>
                    </div>
                  ))}
                  <div className="p-3 bg-gray-50 rounded border border-gray-200 text-xs text-gray-700">
                    <span className="font-bold text-[#CF0003] mr-2">[Admissions]</span>
                    Admissions Open 2026–2027: Apply Online for 7 Premier Programmes at Karamadai Campus.
                  </div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-200 text-xs text-gray-700">
                    <span className="font-bold text-[#CF0003] mr-2">[Events]</span>
                    Campus Placement Drive 2026: Top IT and Corporate Recruiters Participating.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Course Catalog Management */}
          {activeTab === 'catalog' && (
            <div className="space-y-6">
              {/* Add New Programme Form */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
                <h3 className="text-base font-bold text-[#242424] mb-1">Add New Academic Programme</h3>
                <p className="text-xs text-gray-500 mb-4">
                  Publish a new undergraduate or postgraduate degree to the online Course Catalog.
                </p>

                <form onSubmit={handleAddCourse} className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-5">
                    <label className="block text-xs font-bold text-gray-700 mb-1">Course Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. B.Sc. Artificial Intelligence & Data Science"
                      value={newCourseTitle}
                      onChange={(e) => setNewCourseTitle(e.target.value)}
                      className="w-full text-xs p-2.5 border border-gray-300 rounded focus:border-[#CF0003] outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-700 mb-1">Level *</label>
                    <select
                      value={newCourseType}
                      onChange={(e) => setNewCourseType(e.target.value as any)}
                      className="w-full text-xs p-2.5 border border-gray-300 rounded bg-white outline-none"
                    >
                      <option value="UG">Undergraduate (UG)</option>
                      <option value="PG">Postgraduate (PG)</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-700 mb-1">Degree Code *</label>
                    <select
                      value={newCourseCode}
                      onChange={(e) => setNewCourseCode(e.target.value)}
                      className="w-full text-xs p-2.5 border border-gray-300 rounded bg-white outline-none"
                    >
                      <option value="B.Sc.">B.Sc.</option>
                      <option value="BCA">BCA</option>
                      <option value="B.Com.">B.Com.</option>
                      <option value="BBA">BBA</option>
                      <option value="B.A.">B.A.</option>
                      <option value="M.Sc.">M.Sc.</option>
                      <option value="M.Com.">M.Com.</option>
                      <option value="MBA">MBA</option>
                      <option value="M.A.">M.A.</option>
                    </select>
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-xs font-bold text-gray-700 mb-1">Department *</label>
                    <select
                      value={newCourseDept}
                      onChange={(e) => setNewCourseDept(e.target.value)}
                      className="w-full text-xs p-2.5 border border-gray-300 rounded bg-white outline-none"
                    >
                      <option value="Computer Science">Computer Science</option>
                      <option value="Commerce">Commerce</option>
                      <option value="Management">Management</option>
                      <option value="Science">Science</option>
                      <option value="Arts & Humanities">Arts &amp; Humanities</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Life Sciences">Life Sciences</option>
                    </select>
                  </div>

                  <div className="md:col-span-4">
                    <label className="block text-xs font-bold text-gray-700 mb-1">Duration</label>
                    <input
                      type="text"
                      value={newCourseDuration}
                      onChange={(e) => setNewCourseDuration(e.target.value)}
                      className="w-full text-xs p-2.5 border border-gray-300 rounded focus:border-[#CF0003] outline-none"
                    />
                  </div>

                  <div className="md:col-span-8">
                    <label className="block text-xs font-bold text-gray-700 mb-1">Eligibility Criteria</label>
                    <input
                      type="text"
                      placeholder="e.g. Pass in 10+2 with Mathematics / Computer Science."
                      value={newCourseEligibility}
                      onChange={(e) => setNewCourseEligibility(e.target.value)}
                      className="w-full text-xs p-2.5 border border-gray-300 rounded focus:border-[#CF0003] outline-none"
                    />
                  </div>

                  <div className="md:col-span-12">
                    <label className="block text-xs font-bold text-gray-700 mb-1">Course Overview</label>
                    <textarea
                      rows={2}
                      placeholder="Summary of course structure and practical focus..."
                      value={newCourseOverview}
                      onChange={(e) => setNewCourseOverview(e.target.value)}
                      className="w-full text-xs p-2.5 border border-gray-300 rounded focus:border-[#CF0003] outline-none"
                    />
                  </div>

                  <div className="md:col-span-12">
                    <button
                      type="submit"
                      className="bg-[#CF0003] hover:bg-[#8C0002] text-white font-bold py-2.5 px-6 rounded text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Publish to Course Catalog</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Programmes Table */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-base font-bold text-[#242424]">Published Programmes ({courses.length})</h3>
                    <p className="text-xs text-gray-500">Manage course visibility, descriptions, and direct details pages.</p>
                  </div>
                  <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    Live Catalog Synchronized
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gray-50 text-gray-600 uppercase border-y border-gray-200">
                      <tr>
                        <th className="py-2.5 px-3">Programme Title</th>
                        <th className="py-2.5 px-3">Level</th>
                        <th className="py-2.5 px-3">Department</th>
                        <th className="py-2.5 px-3">Duration</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {courses.map((course) => (
                        <tr key={course.id} className="hover:bg-gray-50/80 transition-colors">
                          <td className="py-2.5 px-3 font-bold text-gray-900">
                            <div>{course.title}</div>
                            <span className="text-[10px] text-gray-400 font-normal">slug: {course.slug}</span>
                          </td>
                          <td className="py-2.5 px-3">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                                course.degreeType === 'UG'
                                  ? 'bg-red-50 text-[#CF0003] border border-red-200'
                                  : 'bg-amber-50 text-amber-900 border border-amber-200'
                              }`}
                            >
                              {course.degreeType}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 text-gray-700">{course.disciplineTitle}</td>
                          <td className="py-2.5 px-3 text-gray-500">{course.duration}</td>
                          <td className="py-2.5 px-3">
                            <button
                              onClick={() => handleTogglePublishCourse(course.id)}
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors ${
                                course.isPublished
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                                  : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200'
                              }`}
                            >
                              {course.isPublished ? 'Published' : 'Draft'}
                            </button>
                          </td>
                          <td className="py-2.5 px-3 text-right space-x-2">
                            <a
                              href={`/courses/${course.slug}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs text-blue-600 hover:underline font-semibold"
                            >
                              View Page
                            </a>
                            <button
                              onClick={() => handleDeleteCourse(course.id)}
                              className="text-xs text-red-600 hover:text-red-800 p-1"
                              title="Delete Course"
                            >
                              <Trash2 className="w-3.5 h-3.5 inline" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Settings */}
          {activeTab === 'settings' && (
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-xs max-w-3xl">
              <h3 className="text-lg font-bold text-[#242424] mb-2">Supabase PostgreSQL Integration</h3>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                The application operates with in-memory state API routes. To link an external Supabase database, provide the following variables in <code className="bg-gray-100 px-1 py-0.5 rounded font-mono">.env.local</code>:
              </p>

              <div className="bg-gray-900 text-emerald-400 p-4 rounded-lg font-mono text-xs overflow-x-auto mb-6">
                <code>
                  NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co<br />
                  NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...<br />
                  SUPABASE_SERVICE_ROLE_KEY=your_service_role_secret
                </code>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
