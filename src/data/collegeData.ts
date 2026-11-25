import {
  Announcement,
  Department,
  Programme,
  NewsItem,
  CollegeEvent,
  StudentAchievement,
  Recruiter,
  GalleryItem
} from '@/lib/types';

export const COLLEGE_INFO = {
  name: 'Sree Sakthi College of Arts and Science',
  campusType: 'Elite Campus',
  tagline: 'Where Dreams Take Flight',
  address: 'Coimbatore Main Road, Sellappampalayam, Punjai Puliampatti – 641459, Tamil Nadu, India.',
  location: 'Sellappampalayam, Punjai Puliampatti – 641459',
  phone: '+91 (0) 4254 262626',
  phoneAdmissions: '+91 94425 00000 / +91 98422 00000',
  email: 'info@ssec.ac.in',
  admissionsEmail: 'admissions@ssec.ac.in',
  officeHours: 'Monday – Saturday: 8:45 AM – 5:00 PM',
  affiliation: 'Autonomous Institution | Approved by UGC / AICTE, New Delhi | Affiliated to Bharathiar University',
  logoUrl: '/images/ssec_official_logo_transparent.png',
  mapCoordinates: {
    lat: 11.3533,
    lng: 77.1725
  }
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    title: 'Admissions Open 2026–2027: Apply Online for Premier Programmes at Punjai Puliampatti Campus.',
    date: 'March 2026',
    category: 'Admissions',
    link: '/admissions',
    isUrgent: true,
  },
  {
    id: 'ann-2',
    title: 'Campus Placement Drive 2026: Top IT and Corporate Recruiters Participating.',
    date: 'March 2026',
    category: 'Events',
    link: '/placements',
  },
  {
    id: 'ann-3',
    title: 'Semester Examinations Schedule Released for All Autonomous Degree Programmes.',
    date: 'February 2026',
    category: 'Examinations',
    link: '/academics',
  },
  {
    id: 'ann-4',
    title: 'Merit Scholarships & Sports Concessions Announced for Academic Year 2026–27.',
    date: 'February 2026',
    category: 'Admissions',
    link: '/admissions',
  }
];

// The exactly 7 programmes requested by the user
export const PROGRAMMES: Programme[] = [
  {
    id: 'prog-bcom-ca',
    slug: 'bcom-computer-applications',
    name: 'B.Com. Computer Applications',
    degreeType: 'UG',
    department: 'Department of Commerce & Computer Applications',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in Higher Secondary Examination (10+2) with Commerce, Accountancy, Mathematics, or Computer Science.',
    description: 'Blends rigorous commerce, corporate accounting, and financial management with digital software tools, ERP systems, and business programming.',
    curriculumHighlights: [
      'Corporate Accounting, Costing & Management Accounting',
      'Computerized Accounting with Tally Prime & ERP',
      'Goods & Services Tax (GST) Law and Practice',
      'E-Commerce Frameworks & Web Design for Business',
      'Business Data Analytics and Spreadsheet Automation'
    ],
    careerOutcomes: ['Corporate Accountant', 'ERP / Tally Consultant', 'Financial Associate', 'GST Practitioner', 'Banking Operations Officer'],
    intakeCapacity: '60 Seats',
    syllabusAvailable: true
  },
  {
    id: 'prog-bba-ca',
    slug: 'bba-computer-applications',
    name: 'BBA. Computer Applications',
    degreeType: 'UG',
    department: 'Department of Management Studies',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in Higher Secondary Examination (10+2) in any stream from a recognized board.',
    description: 'Combines organizational leadership, marketing strategy, and managerial analytics with modern enterprise computing and information systems.',
    curriculumHighlights: [
      'Principles of Modern Management & Organizational Dynamics',
      'Marketing Management & Digital Brand Strategy',
      'Business Intelligence & Management Information Systems (MIS)',
      'Human Resource Analytics & Industrial Relations',
      'Entrepreneurship Incubation & Startup Project'
    ],
    careerOutcomes: ['Business Development Executive', 'Operations Analyst', 'Marketing Specialist', 'HR Recruiter', 'Entrepreneur / Business Owner'],
    intakeCapacity: '60 Seats',
    syllabusAvailable: true
  },
  {
    id: 'prog-bsc-cs',
    slug: 'bsc-computer-science',
    name: 'B.Sc. Computer Science',
    degreeType: 'UG',
    department: 'Department of Computer Science',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in 10+2 examination with Mathematics / Computer Science as a core subject.',
    description: 'Provides strong foundations in algorithms, system architecture, database engineering, cloud infrastructure, and intelligent software systems.',
    curriculumHighlights: [
      'Data Structures & Advanced Algorithms',
      'Object Oriented Programming in Java & C++',
      'Database Management Systems with SQL/NoSQL',
      'Python for Machine Learning & Data Processing',
      'Computer Networks & Cybersecurity Fundamentals'
    ],
    careerOutcomes: ['Software Engineer', 'Systems Programmer', 'Database Administrator', 'QA Engineer', 'Higher Studies (M.Sc. / MCA)'],
    intakeCapacity: '60 Seats',
    syllabusAvailable: true
  },
  {
    id: 'prog-bca',
    slug: 'bca',
    name: 'BCA (Bachelor of Computer Applications)',
    degreeType: 'UG',
    department: 'Department of Computer Applications',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in 10+2 examination with Mathematics / Business Mathematics / Computer Science / Statistics or equivalent.',
    description: 'A career-oriented computing degree structured around full-stack software development, mobile applications, cloud platforms, and enterprise solutions.',
    curriculumHighlights: [
      'Full Stack Web Development (React, Node.js, Next.js, REST APIs)',
      'Mobile Application Development (Android / Flutter)',
      'Cloud Architecture & Virtualization Sandboxes',
      'Software Engineering & Agile Methodologies',
      'Industry Capstone Live Project in Final Semester'
    ],
    careerOutcomes: ['Full Stack Developer', 'Front-End Engineer', 'Mobile App Developer', 'Cloud Support Specialist', 'Technical Consultant'],
    intakeCapacity: '60 Seats',
    syllabusAvailable: true
  },
  {
    id: 'prog-bsc-it',
    slug: 'bsc-information-technology',
    name: 'B.Sc. Information Technology',
    degreeType: 'UG',
    department: 'Department of Information Technology',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in 10+2 examination with Mathematics / Computer Science / Information Practices.',
    description: 'Focuses on enterprise networking, internet of things (IoT), cloud systems administration, cybersecurity protocols, and IT service management.',
    curriculumHighlights: [
      'Enterprise Network Administration & Protocols',
      'Cloud Computing Platforms & DevOps Basics',
      'Web Technologies, API Integration & Security',
      'Information Security & Cyber Defense Systems',
      'Internet of Things (IoT) & Embedded Computing'
    ],
    careerOutcomes: ['Network Engineer', 'IT Infrastructure Specialist', 'DevOps Associate', 'Cybersecurity Analyst', 'System Administrator'],
    intakeCapacity: '60 Seats',
    syllabusAvailable: true
  },
  {
    id: 'prog-bsc-maths',
    slug: 'bsc-mathematics',
    name: 'B.Sc. Mathematics',
    degreeType: 'UG',
    department: 'Department of Science & Humanities',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in 10+2 examination with Mathematics as a compulsory subject.',
    description: 'Rigorous exploration of pure and computational mathematics, analytical reasoning, numerical algorithms, and statistical modeling.',
    curriculumHighlights: [
      'Differential Calculus, Trigonometry & Analytical Geometry',
      'Algebra, Real Analysis & Complex Variables',
      'Operations Research, Linear Programming & Optimization',
      'Computational Mathematics using Python & MATLAB',
      'Mathematical Statistics & Actuarial Basics'
    ],
    careerOutcomes: ['Data Analyst', 'Statistical Researcher', 'Operations Research Analyst', 'Actuarial Associate', 'Civil Services & Academic Careers'],
    intakeCapacity: '50 Seats',
    syllabusAvailable: true
  },
  {
    id: 'prog-ba-english',
    slug: 'ba-english-literature',
    name: 'B.A. English Literature',
    degreeType: 'UG',
    department: 'Department of English & Languages',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in 10+2 examination in any stream with English as a subject.',
    description: 'Linguistic mastery, global literature appreciation, digital media journalism, corporate communication, and professional writing.',
    curriculumHighlights: [
      'Classical & Modern British, American and World Literatures',
      'Phonetics, Advanced Linguistics & Audio-Visual Lab Training',
      'Journalism, Mass Communication & Digital Media Writing',
      'English for Competitive Examinations & Public Speaking',
      'Content Strategy, Copywriting & Corporate PR'
    ],
    careerOutcomes: ['Corporate Communications Specialist', 'Content Strategist / Copywriter', 'Media Journalist & Editor', 'Public Relations Executive', 'Instructional Designer'],
    intakeCapacity: '50 Seats',
    syllabusAvailable: true
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'dept-commerce',
    slug: 'commerce-computer-applications',
    name: 'Department of Commerce & Computer Applications',
    shortCode: 'B.Com CA',
    description: 'Empowering future financial analysts, corporate accountants, and commercial tech specialists.',
    fullOverview: 'The Department of Commerce & Computer Applications integrates core corporate accounting with modern financial software and enterprise resource planning. Students train on Tally Prime, GST compliance, and data analytics to graduate ready for banking and commerce industries.',
    vision: 'To emerge as a premier centre of excellence producing ethical, technologically competent, and industry-ready commerce professionals.',
    mission: [
      'Deliver rigorous conceptual understanding in corporate accounting, taxation, and business laws.',
      'Provide hands-on training in computerized financial accounting software.',
      'Instil entrepreneurial initiative and high corporate ethical values.'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    headOfDepartment: {
      name: 'Dr. R. Natarajan, Ph.D.',
      designation: 'Head of Department & Professor',
      qualification: 'M.Com., M.Phil., Ph.D., PGDCA',
      message: 'We combine financial acumen with digital tools to build resilient corporate careers.'
    },
    programmesOffered: ['B.Com. Computer Applications'],
    keyHighlights: [
      'Digital Accounting Practice Laboratory with Tally Prime & ERP',
      'Workshops with Chartered Accountants and GST Practitioners',
      'Stock Market Simulation and Investment Analysis Club',
      'Active semester internship placements across Western Tamil Nadu'
    ],
    laboratories: ['Commerce Computer Applications Lab', 'Digital Accounting Practice Lab'],
    careerProspects: ['Corporate Accountant', 'ERP / Tally Consultant', 'Financial Associate', 'GST Practitioner', 'Banking Operations Officer'],
    facultyMembers: [
      { name: 'Dr. R. Natarajan', designation: 'Professor & HOD', qualification: 'M.Com., Ph.D.', experience: '18 Years' },
      { name: 'Mrs. V. Meenakshi', designation: 'Associate Professor', qualification: 'M.Com., M.Phil.', experience: '12 Years' },
      { name: 'Mr. P. Vijay', designation: 'Assistant Professor', qualification: 'M.Com., NET', experience: '8 Years' }
    ]
  },
  {
    id: 'dept-management',
    slug: 'management-studies',
    name: 'Department of Management Studies',
    shortCode: 'BBA CA',
    description: 'Fostering strategic leadership, business innovation, and digital management agility.',
    fullOverview: 'The Department of Management Studies provides an experiential learning ecosystem combining organizational leadership, digital marketing, enterprise resource management, and startup incubation.',
    vision: 'To nurture transformative business leaders and ethical entrepreneurs driving sustainable industrial advancement.',
    mission: [
      'Foster strategic decision-making and interpersonal managerial prowess.',
      'Facilitate live industry projects, executive mentoring, and industrial visits.',
      'Promote innovation through business plan pitching and startup incubation.'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    headOfDepartment: {
      name: 'Dr. G. Lakshmi, Ph.D.',
      designation: 'Head of Department & Associate Professor',
      qualification: 'MBA, M.Phil., Ph.D.',
      message: 'Practical leadership, business communication, and analytical agility form the heart of our curriculum.'
    },
    programmesOffered: ['BBA. Computer Applications'],
    keyHighlights: [
      'Executive Leadership Talks with Coimbatore industrial leaders',
      'Compulsory summer internship in reputed commercial organizations',
      'Business Simulation and Entrepreneurship Incubation Cell',
      'Soft skills, group discussion, and interview mastery sessions'
    ],
    laboratories: ['Business Simulation & Analytics Lab', 'Management Communication Lab'],
    careerProspects: ['Business Development Executive', 'Operations Analyst', 'Marketing Specialist', 'HR Recruiter', 'Entrepreneur'],
    facultyMembers: [
      { name: 'Dr. G. Lakshmi', designation: 'Associate Professor & HOD', qualification: 'MBA, Ph.D.', experience: '14 Years' },
      { name: 'Mr. A. Balaji', designation: 'Assistant Professor', qualification: 'MBA, NET', experience: '9 Years' }
    ]
  },
  {
    id: 'dept-cs',
    slug: 'computer-science',
    name: 'Department of Computer Science',
    shortCode: 'B.Sc CS',
    description: 'Excellence in computing theory, software engineering, algorithms, and intelligent systems.',
    fullOverview: 'Equipped with air-conditioned computing laboratories and gigabit fiber connectivity, the Department of Computer Science prepares students for careers in software engineering, cloud systems, and data analytics.',
    vision: 'To be a premier centre of education and innovation in computing sciences, nurturing technically sound and globally competitive IT professionals.',
    mission: [
      'Provide rigorous foundation in computer science principles and software engineering.',
      'Bridge industry-academia gaps through workshops, hackathons, and certifications.',
      'Cultivate problem-solving mindsets and ethical technological leadership.'
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    headOfDepartment: {
      name: 'Dr. M. Senthil Kumar, Ph.D.',
      designation: 'Head of Department & Professor',
      qualification: 'M.Sc., M.Phil., Ph.D.',
      message: 'Our priority is to equip students with the technical dexterity and algorithmic problem-solving required by top technology companies.'
    },
    programmesOffered: ['B.Sc. Computer Science'],
    keyHighlights: [
      'Air-conditioned Central Computing Lab with 120+ Core i7 Workstations',
      'Dedicated Cloud & Web Development Sandbox',
      'MoUs with regional IT companies for semester internships',
      'Active Student Coding Club "BitWise" organizing weekly challenges'
    ],
    laboratories: ['Advanced Programming Lab', 'Database & Cloud Lab'],
    careerProspects: ['Software Engineer', 'Systems Programmer', 'Database Administrator', 'QA Engineer', 'Full Stack Developer'],
    facultyMembers: [
      { name: 'Dr. M. Senthil Kumar', designation: 'Professor & HOD', qualification: 'Ph.D.', experience: '16 Years' },
      { name: 'Mrs. K. Priya', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., SET', experience: '9 Years' },
      { name: 'Mr. R. Karthik', designation: 'Assistant Professor', qualification: 'MCA, M.Phil.', experience: '7 Years' }
    ]
  },
  {
    id: 'dept-ca',
    slug: 'computer-applications',
    name: 'Department of Computer Applications',
    shortCode: 'BCA',
    description: 'Delivering full-stack development, mobile apps, database design, and cloud solutions.',
    fullOverview: 'The Department of Computer Applications emphasizes applied software development. Students gain deep hands-on expertise in React, Node.js, database management, and mobile application frameworks.',
    vision: 'To nurture industry-ready software developers and technology innovators through applied computing pedagogy.',
    mission: [
      'Deliver practical software development skills aligned with modern IT company expectations.',
      'Foster innovation through collaborative coding projects and hackathons.',
      'Prepare graduates for global technology recruitment drives.'
    ],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    headOfDepartment: {
      name: 'Prof. K. Rajasekaran, M.Phil.',
      designation: 'Head of Department & Associate Professor',
      qualification: 'MCA, M.Phil., (Ph.D.)',
      message: 'We focus on practical code architecture and software craftsmanship that translate directly to industry careers.'
    },
    programmesOffered: ['BCA'],
    keyHighlights: [
      'Full-Stack Web Development Sandbox & Mobile App Testing Rig',
      'Collaborative Hackathon events and peer coding sprints',
      'Semester VI live industrial software capstone projects',
      'High placement success in IT service and product organizations'
    ],
    laboratories: ['Web Technology & Mobile Apps Lab', 'Enterprise Software Lab'],
    careerProspects: ['Full Stack Developer', 'Front-End Engineer', 'Mobile App Developer', 'Cloud Support Specialist', 'Technical Consultant'],
    facultyMembers: [
      { name: 'Prof. K. Rajasekaran', designation: 'Associate Professor & HOD', qualification: 'MCA, M.Phil.', experience: '15 Years' },
      { name: 'Ms. S. Deepa', designation: 'Assistant Professor', qualification: 'M.Sc., NET', experience: '6 Years' }
    ]
  },
  {
    id: 'dept-it',
    slug: 'information-technology',
    name: 'Department of Information Technology',
    shortCode: 'B.Sc IT',
    description: 'Advancing network engineering, cloud systems, cyber defense, and IoT architecture.',
    fullOverview: 'The Department of Information Technology prepares students for enterprise networking, cloud systems administration, cybersecurity protocols, and internet of things (IoT) development.',
    vision: 'To develop proficient IT professionals skilled in modern networks, cloud ecosystems, and information security.',
    mission: [
      'Provide comprehensive instruction in enterprise networking, system administration, and cyber defense.',
      'Maintain modern network hardware and virtualization testbeds.',
      'Bridge industry expectations through specialized technical certifications.'
    ],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    headOfDepartment: {
      name: 'Dr. T. Sivaraman, Ph.D.',
      designation: 'Head of Department & Professor',
      qualification: 'M.Sc. (IT), Ph.D.',
      message: 'Information Technology is the backbone of global digital operations. Our students build real systems from day one.'
    },
    programmesOffered: ['B.Sc. Information Technology'],
    keyHighlights: [
      'Cisco / Juniper Network Simulation & Hardware Testbed',
      'Cloud Server Administration & Cyber Defense Sandbox',
      'IoT Sensor Interfacing and Microcontroller Prototyping Lab',
      'Industry certification guidance (CompTIA, AWS, Cisco)'
    ],
    laboratories: ['Networking & Cyber Security Lab', 'Cloud & IoT Systems Lab'],
    careerProspects: ['Network Engineer', 'IT Infrastructure Specialist', 'DevOps Associate', 'Cybersecurity Analyst', 'System Administrator'],
    facultyMembers: [
      { name: 'Dr. T. Sivaraman', designation: 'Professor & HOD', qualification: 'Ph.D.', experience: '17 Years' },
      { name: 'Mr. N. Praveen', designation: 'Assistant Professor', qualification: 'M.Tech, SET', experience: '8 Years' }
    ]
  },
  {
    id: 'dept-maths',
    slug: 'mathematics',
    name: 'Department of Mathematics',
    shortCode: 'B.Sc Maths',
    description: 'Rigorous analytical reasoning, mathematical modeling, numerical computation, and statistics.',
    fullOverview: 'The Department of Mathematics instills logical deduction, abstract thinking, mathematical computation (MATLAB/Python), and statistical modeling unlocking versatile careers in data science, finance, and research.',
    vision: 'To build mathematical intuition, analytical competence, and research temperament in students.',
    mission: [
      'Deliver deep grounding in pure and applied mathematics.',
      'Equip students with MATLAB and Python for mathematical computation.',
      'Conduct state-level math symposiums and Ramanujan Club activities.'
    ],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
    headOfDepartment: {
      name: 'Dr. S. Sivakumar, Ph.D.',
      designation: 'Head of Department & Associate Professor',
      qualification: 'M.Sc., M.Phil., Ph.D.',
      message: 'Mathematics is both an art and a universal science. We empower our students to unravel complex problems with clarity and precision.'
    },
    programmesOffered: ['B.Sc. Mathematics'],
    keyHighlights: [
      'Mathematical Computing Lab equipped with MATLAB and Python',
      'Ramanujan Mathematics Association organizing Math Olympiads and quizzes',
      'Specialized training for competitive examinations and data science foundations',
      'Interdisciplinary research projects in operations research and graph theory'
    ],
    laboratories: ['Mathematical Computing & Statistical Lab'],
    careerProspects: ['Data Analyst', 'Statistical Researcher', 'Operations Research Analyst', 'Actuarial Associate', 'Civil Services & Teaching'],
    facultyMembers: [
      { name: 'Dr. S. Sivakumar', designation: 'Associate Professor & HOD', qualification: 'M.Sc., Ph.D.', experience: '15 Years' },
      { name: 'Mrs. K. Malathi', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.', experience: '10 Years' }
    ]
  },
  {
    id: 'dept-english',
    slug: 'english',
    name: 'Department of English & Languages',
    shortCode: 'B.A. English',
    description: 'Elevating global communication skills, literary appreciation, journalism, and corporate writing.',
    fullOverview: 'The Department of English caters to linguistic, communicative, and literary development. Featuring an interactive digital language laboratory, the department trains students in phonetics, business communication, and media writing.',
    vision: 'To develop confident global communicators, critical thinkers, and culturally enriched graduates through linguistic mastery.',
    mission: [
      'Enhance English language proficiency, verbal presentation, and professional writing.',
      'Foster appreciation for world literatures, cultural diversity, and humanistic values.',
      'Prepare students for media, content writing, publishing, and competitive examinations.'
    ],
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80',
    headOfDepartment: {
      name: 'Prof. J. Mary Suganthi, M.Phil.',
      designation: 'Head of Department & Assistant Professor',
      qualification: 'M.A., M.Phil., SET',
      message: 'Effective communication is the master key to personal confidence and global career opportunities.'
    },
    programmesOffered: ['B.A. English Literature'],
    keyHighlights: [
      'Interactive 60-seater Digital Multimedia Language Laboratory',
      'Literary Association hosting dramatic productions, debates, and poetry slams',
      'Business English Certificate (BEC) training modules',
      'Content writing, journalism, and corporate PR workshops'
    ],
    laboratories: ['Digital English Language & Audio-Visual Lab'],
    careerProspects: ['Corporate Communications Specialist', 'Content Strategist / Copywriter', 'Media Journalist & Editor', 'Public Relations Executive', 'Instructional Designer'],
    facultyMembers: [
      { name: 'Prof. J. Mary Suganthi', designation: 'Assistant Professor & HOD', qualification: 'M.A., M.Phil., SET', experience: '12 Years' },
      { name: 'Mr. P. Anand', designation: 'Assistant Professor', qualification: 'M.A., M.Phil.', experience: '8 Years' }
    ]
  }
];

export const COLLEGE_STATS = [
  { label: 'Autonomous Status', value: 'Arts & Science', description: 'Sellappampalayam, Punjai Puliampatti — academic autonomy and progressive curriculum' },
  { label: 'Premier Programmes', value: '7 Degrees', description: 'Curriculum structured in Computing, Commerce, IT, Management & Literature' },
  { label: 'Campus Perimeter', value: 'Green Campus', description: 'Serene campus on Coimbatore Main Road, Sellappampalayam, Punjai Puliampatti – 641459' },
  { label: 'Computing Labs', value: '150+ Systems', description: 'High-speed Core i7 workstations with gigabit fiber network' },
  { label: 'Placement Support', value: '100% Guidance', description: 'Structured 3-year career readiness, aptitude drills & recruitment drives' },
  { label: 'Library Resources', value: '18,000+ Books', description: 'Textbooks, peer-reviewed journals, DELNET access & digital e-resources' }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Admissions Open 2026–2027: UG Degree Programmes at Autonomous Arts & Science Campus',
    date: 'March 18, 2026',
    category: 'Admissions',
    summary: 'Sree Sakthi College of Arts and Science announces online and on-campus admissions for all degree programmes with attractive merit concessions.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    readTime: '3 min read'
  },
  {
    id: 'news-2',
    title: 'SSEC Students Win Championship at State-Level Inter-Collegiate Hackathon',
    date: 'March 02, 2026',
    category: 'Achievements',
    summary: 'The Department of Computer Science & Applications won the Overall Championship trophy at the State-Level IT Fest held in Coimbatore.',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80',
    readTime: '2 min read'
  },
  {
    id: 'news-3',
    title: 'National Seminar on "Cloud Architecture & AI Innovations" Organized',
    date: 'February 20, 2026',
    category: 'Academics',
    summary: 'Distinguished industry leaders and cloud architects delivered keynote addresses on modern DevOps, generative AI, and enterprise data solutions.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read'
  },
  {
    id: 'news-4',
    title: 'Annual Sports Meet 2026 Celebrates Athletic Excellence and Team Spirit',
    date: 'January 28, 2026',
    category: 'Sports',
    summary: 'Over 700 students participated in track and field events, volleyball, cricket, and badminton tournaments on the college grounds.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    readTime: '3 min read'
  }
];

export const COLLEGE_EVENTS: CollegeEvent[] = [
  {
    id: 'event-1',
    title: 'SSEC TechConclave 2026 – State-Level Coding & Web Innovation Challenge',
    date: 'April 12, 2026',
    time: '9:30 AM – 4:30 PM',
    venue: 'Auditorium & Central Computing Lab',
    category: 'Academic',
    description: 'An open inter-collegiate hackathon and technical competition featuring live coding, blind debugging, web crafting, and IT quiz.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    registrationOpen: true
  },
  {
    id: 'event-2',
    title: 'Career Genesis: Pre-Placement Campus Readiness & Mock Interview BootCamp',
    date: 'April 22, 2026',
    time: '10:00 AM – 3:30 PM',
    venue: 'College Seminar Hall',
    category: 'Seminar',
    description: 'Comprehensive soft skills, resume building, and HR mock interview sessions conducted by experienced corporate trainers.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    registrationOpen: true
  },
  {
    id: 'event-3',
    title: 'Sakthi Sangamam 2026: Annual Cultural Carnival & Talent Extravaganza',
    date: 'May 06, 2026',
    time: '9:00 AM – 5:00 PM',
    venue: 'Open Air Amphitheatre',
    category: 'Cultural',
    description: 'A vibrant celebration of music, classical & folk dances, theatrical drama, fashion presentation, and visual art exhibitions.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    registrationOpen: false
  }
];

export const STUDENT_ACHIEVEMENTS: StudentAchievement[] = [
  {
    id: 'ach-1',
    title: '1st Prize in State-Level Web App Hackathon',
    recipient: 'K. Vignesh & Team (III BCA)',
    department: 'Computer Applications',
    award: 'Cash Award ₹25,000 & Winner Trophy',
    eventOrOrg: 'Tamil Nadu Collegiate Tech Conclave',
    year: '2025–2026',
    description: 'Developed an innovative offline-first rural health management web application using React and progressive web technologies.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ach-2',
    title: 'Gold Medal in Inter-Collegiate Athletics Championship',
    recipient: 'S. Divya (II B.Com CA)',
    department: 'Commerce & Computer Applications',
    award: 'Gold Medal & Best Athlete Title',
    eventOrOrg: 'University Sports Board',
    year: '2025–2026',
    description: 'Clinched top honours in 400m sprint and 4x100m relay, setting a regional collegiate record.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ach-3',
    title: 'Best Research Paper in National Finance Conclave',
    recipient: 'P. Rahul (III BBA CA)',
    department: 'Management Studies',
    award: 'Best Research Paper Award',
    eventOrOrg: 'National Management Research Forum',
    year: '2025–2026',
    description: 'Presented a data-backed research paper on "Adoption of UPI and FinTech in Semi-Urban Markets across Coimbatore Corridor".',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  }
];

export const RECRUITERS: Recruiter[] = [
  { id: 'rec-1', name: 'TCS', category: 'IT & ITES', logoText: 'TCS', logoBg: 'bg-blue-900 text-white' },
  { id: 'rec-2', name: 'Wipro', category: 'Technology', logoText: 'WIPRO', logoBg: 'bg-emerald-800 text-white' },
  { id: 'rec-3', name: 'Infosys', category: 'Software Services', logoText: 'Infosys', logoBg: 'bg-blue-700 text-white' },
  { id: 'rec-4', name: 'Cognizant', category: 'Digital Solutions', logoText: 'Cognizant', logoBg: 'bg-indigo-900 text-white' },
  { id: 'rec-5', name: 'HCL Technologies', category: 'IT Infrastructure', logoText: 'HCL', logoBg: 'bg-cyan-800 text-white' },
  { id: 'rec-6', name: 'Zoho Corporation', category: 'SaaS & Enterprise', logoText: 'ZOHO', logoBg: 'bg-red-700 text-white' },
  { id: 'rec-7', name: 'Tech Mahindra', category: 'Digital Engineering', logoText: 'TechM', logoBg: 'bg-red-900 text-white' },
  { id: 'rec-8', name: 'Capgemini', category: 'Cloud & Consulting', logoText: 'Capgemini', logoBg: 'bg-sky-800 text-white' },
  { id: 'rec-9', name: 'ICICI Bank', category: 'Banking & Finance', logoText: 'ICICI Bank', logoBg: 'bg-amber-800 text-white' },
  { id: 'rec-10', name: 'Axis Bank', category: 'Financial Services', logoText: 'Axis Bank', logoBg: 'bg-rose-900 text-white' },
  { id: 'rec-11', name: 'L&T Technology Services', category: 'Engineering Tech', logoText: 'LTTS', logoBg: 'bg-blue-950 text-white' },
  { id: 'rec-12', name: 'Muthoot Finance', category: 'NBFC Services', logoText: 'Muthoot', logoBg: 'bg-yellow-800 text-white' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Academic Building, Punjai Puliampatti Campus',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    caption: 'Front elevation of Sree Sakthi College of Arts and Science located on Coimbatore Main Road, Sellappampalayam, Punjai Puliampatti – 641459.'
  },
  {
    id: 'gal-2',
    title: 'Central High-Speed Computing Laboratory',
    category: 'Labs',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    caption: 'Modern workstations with gigabit internet connectivity supporting student software practicals.'
  },
  {
    id: 'gal-3',
    title: 'Central Institutional Library & Digital Reading Corner',
    category: 'Library',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    caption: 'Extensive repository of textbooks, reference works, magazines, research journals, and digital e-resources.'
  },
  {
    id: 'gal-4',
    title: 'Interactive Smart Multimedia Lecture Hall',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    caption: 'Audio-visual equipped classrooms facilitating multimedia instruction, seminars, and group discussions.'
  },
  {
    id: 'gal-5',
    title: 'Athletic Track and Multi-Sports Ground',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=80',
    caption: 'Spacious outdoor grounds for cricket, football, volleyball, athletics, and physical education.'
  },
  {
    id: 'gal-6',
    title: 'College Auditorium & Cultural Amphitheatre',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    caption: 'Venue for state seminars, graduation day ceremonies, talent shows, and guest lectures.'
  },
  {
    id: 'gal-7',
    title: 'Digital Language Laboratory',
    category: 'Labs',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
    caption: 'Dedicated English audio-visual software for phonetics practice, listening skills, and presentation prep.'
  },
  {
    id: 'gal-8',
    title: 'Student Innovation and Coding Project Workspace',
    category: 'Labs',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    caption: 'Collaborative space where students build software prototypes and business plan models.'
  }
];

export const NAV_ITEMS = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'About Us',
    href: '/about',
    submenu: [
      { title: 'Overview', href: '/about' },
      { title: 'Vision and Mission', href: '/about/vision-mission' },
      { title: 'Board Members', href: '/about/leaders' },
      { title: 'Academic Leaders', href: '/about/academic-leaders' },
      { title: "Chairman's Message", href: '/about/chairman-message' },
      { title: "Correspondent's Message", href: '/about/correspondent-message' },
      { title: "Principal's Message", href: '/about/principal-message' },
      { title: "CEO's Message", href: '/about/ceo-message' },
      { title: "Dean's Message", href: '/about/dean-message' }
    ]
  },
  {
    title: 'Courses',
    href: '/courses',
    submenu: [
      { title: 'All Programmes Catalog', href: '/courses' },
      { title: 'Undergraduate Programmes (UG)', href: '/courses/ug' },
      { title: 'Postgraduate Programmes (PG)', href: '/courses/pg' },
      { title: 'Department Directory', href: '/departments' }
    ]
  },
  {
    title: 'Academics',
    href: '/academics',
    submenu: [
      { title: 'Academic Framework & CBCS', href: '/academics#overview' },
      { title: 'All Programmes', href: '/academics#programmes' },
      { title: 'Curricular Architecture', href: '/academics#curriculum' }
    ]
  },
  {
    title: 'Research',
    href: '/about#research',
    submenu: [
      { title: 'Research & Innovation Cell', href: '/about#research' },
      { title: 'Industry Partnerships & MoUs', href: '/about#our-story' },
      { title: 'Laboratories & Facilities', href: '/campus-life#facilities' }
    ]
  },
  {
    title: 'Campus Life',
    href: '/campus-life',
    submenu: [
      { title: 'Campus Facilities', href: '/campus-life#facilities' },
      { title: 'Central Library', href: '/campus-life#library' },
      { title: 'Computing Laboratories', href: '/campus-life#laboratories' },
      { title: 'Sports & Athletics', href: '/campus-life#sports' },
      { title: 'Photo Gallery', href: '/campus-life#gallery' }
    ]
  },
  {
    title: 'Placements',
    href: '/placements',
    submenu: [
      { title: 'Placement Cell Overview', href: '/placements#overview' },
      { title: 'Corporate Recruiters', href: '/placements#recruiters' },
      { title: 'Training & Skill Pillars', href: '/placements#training' }
    ]
  },
  {
    title: 'Contact',
    href: '/contact',
    submenu: [
      { title: 'Campus Address & Helpdesk', href: '/contact#details' },
      { title: 'Location & Travel Directions', href: '/contact#directions' },
      { title: 'Admission Enquiry Form', href: '/contact#form' }
    ]
  }
];
