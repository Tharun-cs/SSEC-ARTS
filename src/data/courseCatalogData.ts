export interface DisciplineItem {
  id: string;
  title: string;
  pgTitle?: string;
  slug: string;
  image: string;
  pgImage?: string;
  iconType: 'monitor' | 'barChart' | 'chess' | 'flask' | 'book' | 'cpu' | 'sigma' | 'leaf';
  iconBg: 'red' | 'yellow';
  degreesDisplay: string;
  ugDegreesDisplay: string;
  pgDegreesDisplay: string;
  availableLevels: ('UG' | 'PG')[];
  departmentSlug: string;
  programmesCount: number;
  description: string;
  cornerAccent: 'yellow-red' | 'red-yellow';
}

export interface CourseDetail {
  id: string;
  title: string;
  slug: string;
  degreeType: 'UG' | 'PG';
  degreeCode: string;
  disciplineId: string;
  disciplineTitle: string;
  departmentName: string;
  departmentSlug: string;
  duration: string;
  eligibility: string;
  overview: string;
  curriculum: string[];
  skillsDeveloped: string[];
  careerOpportunities: string[];
  facilities: string[];
  image: string;
  isPublished: boolean;
  displayOrder: number;
}

export const DISCIPLINE_CATEGORIES: DisciplineItem[] = [
  {
    id: 'disc-cs',
    title: 'Computer Science',
    pgTitle: 'M.Sc. Computer Science',
    slug: 'computer-science',
    image: '/images/catalog/disc_cs.webp',
    pgImage: '/images/catalog/disc_pg_cs.webp',
    iconType: 'monitor',
    iconBg: 'red',
    degreesDisplay: 'B.Sc. | BCA | M.Sc.',
    ugDegreesDisplay: 'B.Sc. | BCA',
    pgDegreesDisplay: 'M.Sc. • 2 Years',
    availableLevels: ['UG', 'PG'],
    departmentSlug: 'computer-science',
    programmesCount: 3,
    description: 'Foundations in algorithms, modern full-stack computing, artificial intelligence, and cloud software engineering.',
    cornerAccent: 'yellow-red'
  },
  {
    id: 'disc-commerce',
    title: 'Commerce',
    pgTitle: 'M.Com. Corporate Commerce',
    slug: 'commerce',
    image: '/images/catalog/disc_commerce.webp',
    pgImage: '/images/catalog/disc_pg_commerce.webp',
    iconType: 'barChart',
    iconBg: 'yellow',
    degreesDisplay: 'B.Com. | M.Com.',
    ugDegreesDisplay: 'B.Com.',
    pgDegreesDisplay: 'M.Com. • 2 Years',
    availableLevels: ['UG', 'PG'],
    departmentSlug: 'commerce-computer-applications',
    programmesCount: 2,
    description: 'Mastery in corporate financial management, GST accounting, ERP applications, and business data analytics.',
    cornerAccent: 'yellow-red'
  },
  {
    id: 'disc-management',
    title: 'Management',
    pgTitle: 'MBA (Business Administration)',
    slug: 'management',
    image: '/images/catalog/disc_management.webp',
    pgImage: '/images/catalog/disc_pg_management.webp',
    iconType: 'chess',
    iconBg: 'red',
    degreesDisplay: 'BBA | MBA',
    ugDegreesDisplay: 'BBA',
    pgDegreesDisplay: 'MBA • 2 Years',
    availableLevels: ['UG', 'PG'],
    departmentSlug: 'management-studies',
    programmesCount: 2,
    description: 'Strategic leadership, marketing intelligence, human resources, and business operations excellence.',
    cornerAccent: 'red-yellow'
  },
  {
    id: 'disc-science',
    title: 'Science',
    pgTitle: 'M.Sc. Physical Sciences',
    slug: 'science',
    image: '/images/catalog/disc_science.webp',
    pgImage: '/images/catalog/disc_pg_science.webp',
    iconType: 'flask',
    iconBg: 'yellow',
    degreesDisplay: 'B.Sc. | M.Sc.',
    ugDegreesDisplay: 'B.Sc.',
    pgDegreesDisplay: 'M.Sc. • 2 Years',
    availableLevels: ['UG', 'PG'],
    departmentSlug: 'science',
    programmesCount: 2,
    description: 'Empirical research, advanced laboratory experimentation, analytical instrumentation, and scientific discovery.',
    cornerAccent: 'yellow-red'
  },
  {
    id: 'disc-arts',
    title: 'Arts & Humanities',
    pgTitle: 'M.A. English Literature',
    slug: 'arts-humanities',
    image: '/images/catalog/disc_arts.webp',
    pgImage: '/images/catalog/disc_pg_arts.webp',
    iconType: 'book',
    iconBg: 'yellow',
    degreesDisplay: 'B.A. | M.A.',
    ugDegreesDisplay: 'B.A.',
    pgDegreesDisplay: 'M.A. • 2 Years',
    availableLevels: ['UG', 'PG'],
    departmentSlug: 'english',
    programmesCount: 2,
    description: 'Literary scholarship, professional communications, media journalism, digital content strategy, and phonetics.',
    cornerAccent: 'yellow-red'
  },
  {
    id: 'disc-it',
    title: 'Information Technology',
    pgTitle: 'M.Sc. Information Technology',
    slug: 'information-technology',
    image: '/images/catalog/disc_it.webp',
    pgImage: '/images/catalog/disc_pg_it.webp',
    iconType: 'cpu',
    iconBg: 'red',
    degreesDisplay: 'B.Sc. (IT) | M.Sc. (IT)',
    ugDegreesDisplay: 'B.Sc. (IT)',
    pgDegreesDisplay: 'M.Sc. (IT) • 2 Years',
    availableLevels: ['UG', 'PG'],
    departmentSlug: 'information-technology',
    programmesCount: 2,
    description: 'Enterprise networking, cloud DevOps, cybersecurity architectures, internet of things, and database engineering.',
    cornerAccent: 'red-yellow'
  },
  {
    id: 'disc-maths',
    title: 'Mathematics',
    pgTitle: 'M.Sc. Applicable Mathematics',
    slug: 'mathematics',
    image: '/images/catalog/disc_maths.webp',
    pgImage: '/images/catalog/disc_pg_maths.webp',
    iconType: 'sigma',
    iconBg: 'yellow',
    degreesDisplay: 'B.Sc. | M.Sc.',
    ugDegreesDisplay: 'B.Sc.',
    pgDegreesDisplay: 'M.Sc. • 2 Years',
    availableLevels: ['UG', 'PG'],
    departmentSlug: 'mathematics',
    programmesCount: 2,
    description: 'Computational modeling, operations research, statistical analysis, cryptography, and analytical reasoning.',
    cornerAccent: 'yellow-red'
  },
  {
    id: 'disc-lifescience',
    title: 'Life Sciences',
    pgTitle: 'M.Sc. Biotechnology',
    slug: 'life-sciences',
    image: '/images/catalog/disc_lifescience.webp',
    pgImage: '/images/catalog/disc_pg_lifescience.webp',
    iconType: 'leaf',
    iconBg: 'red',
    degreesDisplay: 'B.Sc. | M.Sc.',
    ugDegreesDisplay: 'B.Sc.',
    pgDegreesDisplay: 'M.Sc. • 2 Years',
    availableLevels: ['UG', 'PG'],
    departmentSlug: 'science',
    programmesCount: 2,
    description: 'Cellular biology, molecular genetics, bioinformatics, microbiology, and environmental biotechnology.',
    cornerAccent: 'red-yellow'
  }
];

export const ALL_COURSES: CourseDetail[] = [
  {
    id: 'course-bsc-cs',
    title: 'B.Sc. Computer Science',
    slug: 'bsc-computer-science',
    degreeType: 'UG',
    degreeCode: 'B.Sc.',
    disciplineId: 'disc-cs',
    disciplineTitle: 'Computer Science',
    departmentName: 'Department of Computer Science',
    departmentSlug: 'computer-science',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in Higher Secondary Examination (10+2) with Mathematics / Computer Science as a core subject.',
    overview: 'Provides rigorous conceptual and hands-on software development training across core algorithms, systems programming, artificial intelligence, and database design.',
    curriculum: [
      'Data Structures & Advanced Algorithms',
      'Object Oriented Programming in Java & C++',
      'Database Management Systems with SQL/NoSQL',
      'Python for Machine Learning & Data Processing',
      'Computer Networks & Cybersecurity Fundamentals'
    ],
    skillsDeveloped: ['Full-Stack Engineering', 'Algorithm Optimization', 'Database Architecture', 'Python & Java Programming'],
    careerOpportunities: ['Software Engineer', 'Systems Programmer', 'Database Administrator', 'QA Automation Engineer', 'Cloud Developer'],
    facilities: ['Advanced Computing Labs', 'High-Speed Fiber Internet', 'Linux Virtualization Terminal', 'AI Project Workspace'],
    image: '/images/catalog/disc_cs.webp',
    isPublished: true,
    displayOrder: 1
  },
  {
    id: 'course-bca',
    title: 'BCA (Bachelor of Computer Applications)',
    slug: 'bca',
    degreeType: 'UG',
    degreeCode: 'BCA',
    disciplineId: 'disc-cs',
    disciplineTitle: 'Computer Science',
    departmentName: 'Department of Computer Applications',
    departmentSlug: 'computer-applications',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in 10+2 examination with Mathematics / Business Mathematics / Computer Science / Statistics or equivalent.',
    overview: 'Career-oriented computing degree structured around modern web frameworks, mobile applications, cloud deployments, and scalable enterprise software solutions.',
    curriculum: [
      'Full Stack Web Development (React, Next.js, Node.js)',
      'Mobile Application Development (Android / Flutter)',
      'Cloud Architecture & Virtualization Sandboxes',
      'Software Engineering & Agile Methodologies',
      'Capstone Live Industry Project in Final Semester'
    ],
    skillsDeveloped: ['Frontend & Backend Development', 'Mobile App Building', 'RESTful API Engineering', 'Agile Teamwork'],
    careerOpportunities: ['Full Stack Developer', 'Front-End Engineer', 'Mobile App Developer', 'Cloud Support Specialist', 'Technical Consultant'],
    facilities: ['Full Stack Coding Studio', 'Mobile App Testing Rig', 'Cloud Sandbox Access', 'Collaborative Innovation Hub'],
    image: '/images/catalog/disc_cs.webp',
    isPublished: true,
    displayOrder: 2
  },
  {
    id: 'course-msc-cs',
    title: 'M.Sc. Computer Science',
    slug: 'msc-computer-science',
    degreeType: 'PG',
    degreeCode: 'M.Sc.',
    disciplineId: 'disc-cs',
    disciplineTitle: 'Computer Science',
    departmentName: 'Department of Computer Science',
    departmentSlug: 'computer-science',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Recognized Bachelor Degree in B.Sc. CS / BCA / B.Sc. IT with minimum 50% aggregate marks.',
    overview: 'Advanced postgraduate specialization in deep learning, distributed computing systems, big data architectures, and high-performance algorithmic engineering.',
    curriculum: [
      'Deep Learning & Neural Network Architectures',
      'Distributed Cloud Systems & Microservices',
      'Big Data Analytics & Real-Time Stream Processing',
      'Advanced Cryptography & Information Security',
      'Master Research Thesis and Journal Publication'
    ],
    skillsDeveloped: ['Deep Learning Engineering', 'Distributed Systems Design', 'Big Data Analytics', 'Applied Research'],
    careerOpportunities: ['Senior Software Architect', 'Data Scientist', 'AI/ML Engineer', 'Research Scientist', 'University Faculty'],
    facilities: ['AI Research Laboratory', 'GPU Computing Server Cluster', 'High-Performance Research Workstations'],
    image: '/images/catalog/disc_cs.webp',
    isPublished: true,
    displayOrder: 3
  },
  {
    id: 'course-bcom-ca',
    title: 'B.Com. Computer Applications',
    slug: 'bcom-computer-applications',
    degreeType: 'UG',
    degreeCode: 'B.Com.',
    disciplineId: 'disc-commerce',
    disciplineTitle: 'Commerce',
    departmentName: 'Department of Commerce & Computer Applications',
    departmentSlug: 'commerce-computer-applications',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in Higher Secondary Examination (10+2) with Commerce, Accountancy, Mathematics, or Computer Science.',
    overview: 'Blends rigorous commerce, corporate accounting, taxation, and financial management with digital software tools, ERP systems, and business programming.',
    curriculum: [
      'Corporate Accounting, Costing & Management Accounting',
      'Computerized Accounting with Tally Prime & ERP',
      'Goods & Services Tax (GST) Law and Practice',
      'E-Commerce Frameworks & Web Design for Business',
      'Business Data Analytics and Spreadsheet Automation'
    ],
    skillsDeveloped: ['Corporate Accounting', 'Tally Prime & ERP Software', 'GST & Direct Tax Compliance', 'Financial Modeling'],
    careerOpportunities: ['Corporate Accountant', 'ERP / Tally Consultant', 'Financial Associate', 'GST Practitioner', 'Banking Operations Officer'],
    facilities: ['Digital Accounting Practice Laboratory', 'Tally Prime Simulation Software', 'Financial Market Analytics Terminal'],
    image: '/images/catalog/disc_commerce.webp',
    isPublished: true,
    displayOrder: 4
  },
  {
    id: 'course-mcom',
    title: 'M.Com. Corporate Commerce',
    slug: 'mcom-corporate-commerce',
    degreeType: 'PG',
    degreeCode: 'M.Com.',
    disciplineId: 'disc-commerce',
    disciplineTitle: 'Commerce',
    departmentName: 'Department of Commerce & Computer Applications',
    departmentSlug: 'commerce-computer-applications',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Pass in B.Com. / B.Com. CA / BBA / Corporate Secretaryship from any recognized University.',
    overview: 'Postgraduate research and corporate finance programme covering strategic financial management, international trade finance, forensic accounting, and securities law.',
    curriculum: [
      'Advanced Corporate Financial Strategy & Portfolio Management',
      'International Trade Financing & Foreign Exchange Markets',
      'Forensic Auditing, Fraud Detection & Risk Management',
      'Direct & Indirect Taxation Analytics',
      'Research Project & Corporate Internship'
    ],
    skillsDeveloped: ['Strategic Portfolio Management', 'Forensic Audit', 'Corporate Taxation Strategy', 'Risk Management'],
    careerOpportunities: ['Chief Financial Analyst', 'Audit Consultant', 'Corporate Tax Advisor', 'Investment Banking Analyst', 'Finance Executive'],
    facilities: ['Advanced Commerce Research Hub', 'FinTech Analytics Terminal', 'Corporate Boardroom Simulation Lab'],
    image: '/images/catalog/disc_commerce.webp',
    isPublished: true,
    displayOrder: 5
  },
  {
    id: 'course-bba-ca',
    title: 'BBA. Computer Applications',
    slug: 'bba-computer-applications',
    degreeType: 'UG',
    degreeCode: 'BBA',
    disciplineId: 'disc-management',
    disciplineTitle: 'Management',
    departmentName: 'Department of Management Studies',
    departmentSlug: 'management-studies',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in Higher Secondary Examination (10+2) in any stream from a recognized board.',
    overview: 'Combines organizational leadership, marketing strategy, and managerial analytics with modern enterprise computing and information systems.',
    curriculum: [
      'Principles of Modern Management & Organizational Dynamics',
      'Marketing Management & Digital Brand Strategy',
      'Business Intelligence & Management Information Systems (MIS)',
      'Human Resource Analytics & Industrial Relations',
      'Entrepreneurship Incubation & Startup Project'
    ],
    skillsDeveloped: ['Managerial Decision Making', 'Digital Brand Marketing', 'MIS & Business Analytics', 'Team Leadership'],
    careerOpportunities: ['Business Development Executive', 'Operations Analyst', 'Marketing Specialist', 'HR Recruiter', 'Entrepreneur / Business Owner'],
    facilities: ['Management Case Study Discussion Room', 'Business Incubation Sandbox', 'Digital Marketing Simulation Studio'],
    image: '/images/catalog/disc_management.webp',
    isPublished: true,
    displayOrder: 6
  },
  {
    id: 'course-mba',
    title: 'MBA (Master of Business Administration)',
    slug: 'mba',
    degreeType: 'PG',
    degreeCode: 'MBA',
    disciplineId: 'disc-management',
    disciplineTitle: 'Management',
    departmentName: 'Department of Management Studies',
    departmentSlug: 'management-studies',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Any recognized undergraduate degree with minimum 50% marks and valid national/state entrance score.',
    overview: 'Flagship executive management degree developing visionary corporate leaders through live case studies, global supply chain strategy, leadership simulations, and corporate residencies.',
    curriculum: [
      'Strategic Corporate Leadership & Global Business Policy',
      'Financial Engineering & Mergers and Acquisitions',
      'Digital Transformation & Omnichannel Marketing',
      'Supply Chain Logistics & Operations Strategy',
      'Executive Leadership Capstone & Corporate Residency'
    ],
    skillsDeveloped: ['Executive Leadership', 'Strategic Corporate Planning', 'Financial Valuation', 'Global Operations Management'],
    careerOpportunities: ['Management Consultant', 'Product Manager', 'Corporate Strategy Associate', 'Operations Director', 'Brand Manager'],
    facilities: ['Executive Boardroom Amphitheatre', 'Bloomberg Terminal Market Suite', 'Startup Accelerator Space'],
    image: '/images/catalog/disc_management.webp',
    isPublished: true,
    displayOrder: 7
  },
  {
    id: 'course-bsc-it',
    title: 'B.Sc. Information Technology',
    slug: 'bsc-information-technology',
    degreeType: 'UG',
    degreeCode: 'B.Sc.',
    disciplineId: 'disc-it',
    disciplineTitle: 'Information Technology',
    departmentName: 'Department of Information Technology',
    departmentSlug: 'information-technology',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in 10+2 examination with Mathematics / Computer Science / Information Practices.',
    overview: 'Focuses on enterprise networking, internet of things (IoT), cloud systems administration, cybersecurity protocols, and IT service management.',
    curriculum: [
      'Enterprise Network Administration & Protocols',
      'Cloud Computing Platforms & DevOps Basics',
      'Web Technologies, API Integration & Security',
      'Information Security & Cyber Defense Systems',
      'Internet of Things (IoT) & Embedded Computing'
    ],
    skillsDeveloped: ['Network Engineering', 'Cloud System Administration', 'IoT Device Prototyping', 'Cybersecurity Hardening'],
    careerOpportunities: ['Network Engineer', 'IT Infrastructure Specialist', 'DevOps Associate', 'Cybersecurity Analyst', 'System Administrator'],
    facilities: ['Cisco Networking Hardware Lab', 'Cloud Virtualization Lab', 'IoT Sensor Development Bench'],
    image: '/images/catalog/disc_it.webp',
    isPublished: true,
    displayOrder: 8
  },
  {
    id: 'course-msc-it',
    title: 'M.Sc. Information Technology',
    slug: 'msc-information-technology',
    degreeType: 'PG',
    degreeCode: 'M.Sc.',
    disciplineId: 'disc-it',
    disciplineTitle: 'Information Technology',
    departmentName: 'Department of Information Technology',
    departmentSlug: 'information-technology',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Graduation in B.Sc. IT / B.Sc. CS / BCA / B.Sc. Software Engineering from recognized university.',
    overview: 'Advanced technical education covering cloud infrastructure orchestration, cybersecurity threat intelligence, distributed blockchain frameworks, and enterprise IT governance.',
    curriculum: [
      'Cloud Orchestration (Kubernetes, Docker & CI/CD)',
      'Enterprise Cyber Threat Intelligence & Incident Response',
      'Modern Blockchain Architectures & Smart Contracts',
      'High-Availability Systems Engineering',
      'Capstone Enterprise Infrastructure Thesis'
    ],
    skillsDeveloped: ['Kubernetes & Cloud Orchestration', 'Threat Hunting & Cyber Defense', 'Enterprise IT Governance', 'Blockchain Architecture'],
    careerOpportunities: ['Cloud Solutions Architect', 'Senior Cybersecurity Consultant', 'Infrastructure Engineering Lead', 'DevOps Specialist'],
    facilities: ['Advanced Cyber Defense Sandbox', 'Containerized Cloud Computing Cluster', 'Industrial IoT Protocol Lab'],
    image: '/images/catalog/disc_it.webp',
    isPublished: true,
    displayOrder: 9
  },
  {
    id: 'course-bsc-maths',
    title: 'B.Sc. Mathematics',
    slug: 'bsc-mathematics',
    degreeType: 'UG',
    degreeCode: 'B.Sc.',
    disciplineId: 'disc-maths',
    disciplineTitle: 'Mathematics',
    departmentName: 'Department of Science & Humanities',
    departmentSlug: 'mathematics',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in 10+2 examination with Mathematics as a compulsory subject.',
    overview: 'Rigorous exploration of pure and computational mathematics, analytical reasoning, numerical algorithms, and statistical modeling.',
    curriculum: [
      'Differential Calculus, Trigonometry & Analytical Geometry',
      'Algebra, Real Analysis & Complex Variables',
      'Operations Research, Linear Programming & Optimization',
      'Computational Mathematics using Python & MATLAB',
      'Mathematical Statistics & Actuarial Basics'
    ],
    skillsDeveloped: ['Mathematical Logic', 'Statistical Modeling & Data Analytics', 'Optimization & Operations Research', 'Numerical Programming'],
    careerOpportunities: ['Data Analyst', 'Statistical Researcher', 'Operations Research Analyst', 'Actuarial Associate', 'Civil Services & Academic Careers'],
    facilities: ['Computational Mathematics Laboratory', 'MATLAB & Python Scientific Computing Lab', 'Maths Modeling Hub'],
    image: '/images/catalog/disc_maths.webp',
    isPublished: true,
    displayOrder: 10
  },
  {
    id: 'course-msc-maths',
    title: 'M.Sc. Applicable Mathematics',
    slug: 'msc-mathematics',
    degreeType: 'PG',
    degreeCode: 'M.Sc.',
    disciplineId: 'disc-maths',
    disciplineTitle: 'Mathematics',
    departmentName: 'Department of Science & Humanities',
    departmentSlug: 'mathematics',
    duration: '2 Years (4 Semesters)',
    eligibility: 'B.Sc. in Mathematics or Statistics with minimum 50% marks from a recognized university.',
    overview: 'Higher level analytical study focusing on modern applied mathematics, differential equations, cryptographic algorithms, fluid dynamics, and statistical machine learning.',
    curriculum: [
      'Partial Differential Equations & Boundary Value Problems',
      'Measure Theory, Functional Analysis & Topology',
      'Stochastic Processes & Financial Mathematics',
      'Cryptographic Mathematical Protocols',
      'Advanced Dissertation & Computational Simulation'
    ],
    skillsDeveloped: ['Stochastic Modeling', 'Mathematical Cryptography', 'Scientific Computing Simulation', 'Financial Mathematics'],
    careerOpportunities: ['Quantitative Financial Analyst', 'Algorithm Researcher', 'Cryptanalyst', 'Academic Lecturer / Researcher'],
    facilities: ['Cryptographic Simulation Lab', 'Advanced Statistical Computing Suite'],
    image: '/images/catalog/disc_maths.webp',
    isPublished: true,
    displayOrder: 11
  },
  {
    id: 'course-ba-english',
    title: 'B.A. English Literature',
    slug: 'ba-english-literature',
    degreeType: 'UG',
    degreeCode: 'B.A.',
    disciplineId: 'disc-arts',
    disciplineTitle: 'Arts & Humanities',
    departmentName: 'Department of English & Languages',
    departmentSlug: 'english',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in 10+2 examination in any stream with English as a subject.',
    overview: 'Linguistic mastery, global literature appreciation, digital media journalism, corporate communication, and professional writing.',
    curriculum: [
      'Classical & Modern British, American and World Literatures',
      'Phonetics, Advanced Linguistics & Audio-Visual Lab Training',
      'Journalism, Mass Communication & Digital Media Writing',
      'English for Competitive Examinations & Public Speaking',
      'Content Strategy, Copywriting & Corporate PR'
    ],
    skillsDeveloped: ['Professional Creative Writing', 'Phonetics & Pronunciation Mastery', 'Corporate Communication', 'Digital Media Editorial'],
    careerOpportunities: ['Corporate Communications Specialist', 'Content Strategist / Copywriter', 'Media Journalist & Editor', 'Public Relations Executive', 'Instructional Designer'],
    facilities: ['Digital Language Laboratory with Audio-Visual Consoles', 'Creative Media & Theatre Studio', 'Literary Reading Lounge'],
    image: '/images/catalog/disc_arts.webp',
    isPublished: true,
    displayOrder: 12
  },
  {
    id: 'course-ma-english',
    title: 'M.A. English Literature',
    slug: 'ma-english-literature',
    degreeType: 'PG',
    degreeCode: 'M.A.',
    disciplineId: 'disc-arts',
    disciplineTitle: 'Arts & Humanities',
    departmentName: 'Department of English & Languages',
    departmentSlug: 'english',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Undergraduate degree in B.A. English or any bachelor degree with English proficiency.',
    overview: 'Postgraduate exploration of critical literary theories, comparative world literature, post-colonial discourse, cultural studies, and academic research methodologies.',
    curriculum: [
      'Contemporary Critical Theories & Cultural Studies',
      'Post-Colonial & Commonwealth Literatures',
      'Stylistics, Semantics & Applied Sociolinguistics',
      'Translation Studies & Comparative Indian Literature',
      'Master Thesis & Academic Research Publication'
    ],
    skillsDeveloped: ['Literary Criticism', 'Research Methodology & Academic Publishing', 'Cross-Cultural Discourse', 'Advanced Communication'],
    careerOpportunities: ['Assistant Professor', 'Publishing Editor', 'Senior Corporate Communications Lead', 'Creative Director', 'Civil Services Officer'],
    facilities: ['Digital Audio-Visual Language Studio', 'Advanced Literary Research Archives'],
    image: '/images/catalog/disc_arts.webp',
    isPublished: true,
    displayOrder: 13
  },
  {
    id: 'course-bsc-science',
    title: 'B.Sc. Applied Science & Chemistry',
    slug: 'bsc-applied-science',
    degreeType: 'UG',
    degreeCode: 'B.Sc.',
    disciplineId: 'disc-science',
    disciplineTitle: 'Science',
    departmentName: 'Department of Science & Humanities',
    departmentSlug: 'science',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in 10+2 with Chemistry and Mathematics / Biology.',
    overview: 'Practical scientific fundamentals across organic, inorganic, analytical chemistry, instrumentation techniques, and industrial testing.',
    curriculum: [
      'Organic & Inorganic Chemistry Fundamentals',
      'Analytical Instrumentation & Spectroscopy',
      'Physical Chemistry & Thermodynamics',
      'Polymer Science & Industrial Quality Assurance',
      'Experimental Chemistry Laboratory Project'
    ],
    skillsDeveloped: ['Laboratory Instrumentation', 'Chemical Quality Testing', 'Spectral Data Analysis', 'Safe Laboratory Protocols'],
    careerOpportunities: ['Chemical Quality Analyst', 'Laboratory Scientific Officer', 'Pharmaceutical QC Chemist', 'Research Technician'],
    facilities: ['Wet Chemistry Laboratory', 'Analytical Instrumentation Suite', 'Spectrophotometer Workstation'],
    image: '/images/catalog/disc_science.webp',
    isPublished: true,
    displayOrder: 14
  },
  {
    id: 'course-msc-science',
    title: 'M.Sc. Applied Chemistry',
    slug: 'msc-applied-chemistry',
    degreeType: 'PG',
    degreeCode: 'M.Sc.',
    disciplineId: 'disc-science',
    disciplineTitle: 'Science',
    departmentName: 'Department of Science & Humanities',
    departmentSlug: 'science',
    duration: '2 Years (4 Semesters)',
    eligibility: 'B.Sc. Chemistry or Applied Sciences with minimum 50% marks from a recognized university.',
    overview: 'Advanced postgraduate chemical research covering nano-materials, medicinal chemistry, catalytic mechanisms, and environmental green chemistry.',
    curriculum: [
      'Nano-Materials & Solid State Chemistry',
      'Medicinal Chemistry & Drug Design Principles',
      'Advanced Chromatographic & Spectroscopic Analysis',
      'Green Chemistry & Sustainable Industrial Catalysis',
      'Research Project & Industrial Dissertation'
    ],
    skillsDeveloped: ['Drug Design & Formulation', 'Nano-Materials Synthesis', 'Chromatography & HPLC', 'Scientific Research Methodology'],
    careerOpportunities: ['R&D Research Scientist', 'Senior Analytical Chemist', 'Drug Formulation Associate', 'Chemical Plant Manager'],
    facilities: ['Chromatography HPLC Research Suite', 'Advanced Synthesis Hoods', 'Molecular Modeling Computing Rig'],
    image: '/images/catalog/disc_science.webp',
    isPublished: true,
    displayOrder: 15
  },
  {
    id: 'course-bsc-biotech',
    title: 'B.Sc. Biotechnology & Life Sciences',
    slug: 'bsc-biotechnology',
    degreeType: 'UG',
    degreeCode: 'B.Sc.',
    disciplineId: 'disc-lifescience',
    disciplineTitle: 'Life Sciences',
    departmentName: 'Department of Science & Humanities',
    departmentSlug: 'science',
    duration: '3 Years (6 Semesters)',
    eligibility: 'Pass in 10+2 examination with Biology / Botany / Zoology / Biotechnology.',
    overview: 'Exploration of recombinant DNA technology, cell biology, microbiology, bioinformatics, and agricultural biotechnology.',
    curriculum: [
      'Cell Biology & Molecular Genetics',
      'General Microbiology & Fermentation Technology',
      'Immunology & Medical Diagnostics',
      'Plant & Animal Tissue Culture Techniques',
      'Bioinformatics Fundamentals & Database Mining'
    ],
    skillsDeveloped: ['Aseptic Cell Culture', 'DNA/RNA Isolation & PCR', 'Microbiological Assays', 'Bioinformatics Alignment'],
    careerOpportunities: ['Biotechnology Research Associate', 'Clinical Diagnostics Technician', 'Bio-Process Operator', 'Quality Control Analyst'],
    facilities: ['Tissue Culture Cleanroom', 'Electrophoresis & PCR Suite', 'Microbiology Inoculation Facility'],
    image: '/images/catalog/disc_lifescience.webp',
    isPublished: true,
    displayOrder: 16
  },
  {
    id: 'course-msc-biotech',
    title: 'M.Sc. Biotechnology',
    slug: 'msc-biotechnology',
    degreeType: 'PG',
    degreeCode: 'M.Sc.',
    disciplineId: 'disc-lifescience',
    disciplineTitle: 'Life Sciences',
    departmentName: 'Department of Science & Humanities',
    departmentSlug: 'science',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Bachelor Degree in Biotechnology / Microbiology / Biochemistry / Life Sciences with minimum 50% marks.',
    overview: 'Postgraduate bio-engineering curriculum in gene editing, bioprocess engineering, proteomics, vaccine biology, and patent law in biotechnology.',
    curriculum: [
      'Advanced Genetic Engineering & Gene Editing (CRISPR)',
      'Bioprocess Engineering & Industrial Bioreactors',
      'Genomics, Proteomics & Structural Bioinformatics',
      'Bioethics, Biosafety & Intellectual Property Rights (IPR)',
      'Major Postgraduate Dissertation in Clinical / Industrial Biotech'
    ],
    skillsDeveloped: ['Recombinant Protein Expression', 'Bioreactor Operation', 'Structural Proteomics', 'Bio-Patent Drafting'],
    careerOpportunities: ['Senior Biotechnologist', 'Bioprocess Scientist', 'Bioinformatics Analyst', 'Clinical Research Associate', 'Patent Analyst'],
    facilities: ['Pilot-Scale Bioreactor Facility', 'High-Speed Refrigerated Centrifuges', 'Fluorescence Microscopy Lab'],
    image: '/images/catalog/disc_lifescience.webp',
    isPublished: true,
    displayOrder: 17
  }
];

export const WHY_CHOOSE_BENEFITS = [
  {
    id: 'benefit-1',
    title: 'Industry-Oriented Curriculum',
    description: 'Autonomous curriculum co-designed with IT giants and corporate partners to align with market demands and technological shifts.',
    iconName: 'GraduationCap'
  },
  {
    id: 'benefit-2',
    title: 'Experienced Faculty',
    description: 'Doctorate holders and seasoned industry veterans mentoring students with personalized guidance and project-based learning.',
    iconName: 'Users'
  },
  {
    id: 'benefit-3',
    title: 'Modern Learning Facilities',
    description: 'High-speed computing labs, Cisco networking suites, digital language studios, and automated libraries on a serene campus.',
    iconName: 'Building'
  },
  {
    id: 'benefit-4',
    title: 'Career & Placement Support',
    description: 'Comprehensive 3-year aptitude training, technical bootcamps, mock interviews, and 100+ top campus recruitment partners.',
    iconName: 'Briefcase'
  }
];

