-- ==============================================================================
-- SREE SAKTHI COLLEGE FOR ARTS AND SCIENCE
-- PostgreSQL / Supabase Production Database Schema
-- Address: Coimbatore Main Road, Sellappampalayam, Punjai Puliampatti – 641459
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROFILES (Staff / Administrator accounts)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'staff' CHECK (role IN ('superadmin', 'admin', 'staff')),
    department TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. SITE SETTINGS
CREATE TABLE IF NOT EXISTS public.site_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_name TEXT NOT NULL DEFAULT 'Sree Sakthi College for Arts and Science',
    address TEXT NOT NULL,
    phone TEXT,
    email TEXT,
    admissions_open BOOLEAN DEFAULT true,
    academic_year TEXT DEFAULT '2026-2027',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. ANNOUNCEMENTS
CREATE TABLE IF NOT EXISTS public.announcements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Admissions', 'Examinations', 'Events', 'General')),
    link TEXT,
    is_urgent BOOLEAN DEFAULT false,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. DEPARTMENTS
CREATE TABLE IF NOT EXISTS public.departments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    short_code TEXT NOT NULL,
    description TEXT NOT NULL,
    full_overview TEXT NOT NULL,
    vision TEXT,
    mission TEXT[],
    image_url TEXT,
    hod_name TEXT,
    hod_designation TEXT,
    hod_qualification TEXT,
    hod_message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. PROGRAMMES
CREATE TABLE IF NOT EXISTS public.programmes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    degree_type TEXT NOT NULL CHECK (degree_type IN ('UG', 'PG', 'Doctoral')),
    department_id UUID REFERENCES public.departments(id) ON DELETE SET NULL,
    department_name TEXT NOT NULL,
    duration TEXT NOT NULL,
    eligibility TEXT NOT NULL,
    description TEXT NOT NULL,
    curriculum_highlights TEXT[],
    career_outcomes TEXT[],
    intake_capacity TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. NEWS
CREATE TABLE IF NOT EXISTS public.news (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    summary TEXT NOT NULL,
    content TEXT,
    image_url TEXT,
    read_time TEXT DEFAULT '3 min read',
    published_date DATE DEFAULT CURRENT_DATE,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. EVENTS
CREATE TABLE IF NOT EXISTS public.events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    event_date DATE NOT NULL,
    time_slot TEXT NOT NULL,
    venue TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Academic', 'Cultural', 'Sports', 'Seminar')),
    description TEXT NOT NULL,
    image_url TEXT,
    registration_open BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. RECRUITERS
CREATE TABLE IF NOT EXISTS public.recruiters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    logo_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 9. GALLERY IMAGES
CREATE TABLE IF NOT EXISTS public.gallery_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Campus', 'Labs', 'Library', 'Sports', 'Events')),
    image_url TEXT NOT NULL,
    caption TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 10. ADMISSION ENQUIRIES (Private: Admin access only)
CREATE TABLE IF NOT EXISTS public.admission_enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    programme TEXT NOT NULL,
    qualification TEXT NOT NULL,
    preferred_contact TEXT NOT NULL CHECK (preferred_contact IN ('Phone', 'Email', 'WhatsApp')),
    message TEXT,
    status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Enrolled', 'Closed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 11. CONTACT ENQUIRIES (Private: Admin access only)
CREATE TABLE IF NOT EXISTS public.contact_enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.programmes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recruiters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admission_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;

-- Public can READ published institutional data
CREATE POLICY "Public can view published announcements"
    ON public.announcements FOR SELECT USING (is_published = true);

CREATE POLICY "Public can view departments"
    ON public.departments FOR SELECT USING (true);

CREATE POLICY "Public can view programmes"
    ON public.programmes FOR SELECT USING (true);

CREATE POLICY "Public can view published news"
    ON public.news FOR SELECT USING (is_published = true);

CREATE POLICY "Public can view events"
    ON public.events FOR SELECT USING (true);

CREATE POLICY "Public can view recruiters"
    ON public.recruiters FOR SELECT USING (true);

CREATE POLICY "Public can view gallery"
    ON public.gallery_images FOR SELECT USING (true);

-- Public can INSERT admission & contact enquiries
CREATE POLICY "Public can submit admission enquiries"
    ON public.admission_enquiries FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can submit contact enquiries"
    ON public.contact_enquiries FOR INSERT WITH CHECK (true);

-- Admins have full access to enquiries
CREATE POLICY "Admins can view and manage admission enquiries"
    ON public.admission_enquiries FOR ALL
    USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can view and manage contact enquiries"
    ON public.contact_enquiries FOR ALL
    USING (auth.role() = 'authenticated');

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_dept_slug ON public.departments(slug);
CREATE INDEX IF NOT EXISTS idx_prog_slug ON public.programmes(slug);
CREATE INDEX IF NOT EXISTS idx_admission_status ON public.admission_enquiries(status);
