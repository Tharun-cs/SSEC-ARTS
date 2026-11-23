# Sree Sakthi College of Arts and Science — Official Institutional Website

> **Institution:** Sree Sakthi College of Arts and Science  
> **Campus:** Elite Campus – Punjai Puliampatti, Coimbatore  
> **Address:** Coimbatore Main Road, Sellappampalayam, Punjai Puliampatti – 641459, Tamil Nadu, India.  
> **Approval:** UGC / AICTE Approved | Affiliated to Bharathiar University  

---

## 🏛️ Official Institutional Identity

- **College Logo:** Original `SSEC_Technical_LOGO_RED.png` prominently showcased in header and footer without duplicate secondary text.
- **Autonomous Technical Campus:** Karamadai, Coimbatore on Ooty Main Road (NH 181).
- **Core Educational Focus:** Seven specialized, high-impact career programmes combining Computing, Commerce, Information Technology, Management, and Literature.

---

## 🎨 Official Color Palette

| Token | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary Red** | `#E51C2A` | Core brand identity, prominent CTA buttons, highlighted titles, icons |
| **Deep Maroon** | `#8F1020` | Slim announcement strip, pre-header accents, card borders, footer background |
| **Secondary Red** | `#B51224` | Hover states, gradient blends, active accents |
| **Golden Yellow** | `#FFC928` | Primary **Apply Now** button, badge highlights, ticker pills, icons |
| **Light Gold** | `#FFE28A` | Subtle gold hover effects and borders |
| **Warm Cream** | `#FFF9F0` | Alternate section backgrounds, cards, high-contrast reading panels |
| **Dark Text** | `#242424` | Primary high-contrast body typography |
| **Pure White** | `#FFFFFF` | Main header, cards, content panels |

---

## 🎓 The Seven (7) Autonomous Programmes

Sree Sakthi Engineering College displays exactly these seven career-focused degree programmes:

1. **B.Com. Computer Applications** — Corporate accounting, computerized ERP / Tally Prime, GST laws, and business programming.
2. **BBA. Computer Applications** — Business administration, management information systems (MIS), marketing strategy, and startup incubation.
3. **B.Sc. Computer Science** — Algorithms, object-oriented software engineering (Java/C++), cloud databases, and machine learning basics.
4. **BCA (Bachelor of Computer Applications)** — Full-stack web development (React, Node.js), mobile applications, and final-semester software capstone.
5. **B.Sc. Information Technology** — Enterprise networking, cloud computing, cybersecurity defense protocols, and Internet of Things (IoT).
6. **B.Sc. Mathematics** — Pure and applied mathematics, operations research, statistical modeling, and computational programming (Python/MATLAB).
7. **B.A. English Literature** — Global literature, linguistic mastery in digital language laboratories, corporate communication, and media journalism.

---

## 🏛️ Eight (8) Functional Pages

Every page shares the same header, footer, color system, and responsive design:

1. **Home (`/`)**: All **17 structured sections** in the exact specified order:
   - Announcement strip and navigation
   - Full-width cinematic campus video hero with fallback poster
   - College introduction with image and Learn More
   - College highlights and statistics (verified figures only)
   - Department/programme showcase (the 7 programmes)
   - Academic excellence section
   - College achievements and events
   - Student life and activities
   - Campus photo gallery
   - Placements overview
   - Campus video tour
   - Recruiter showcase (verified recruiters only)
   - Campus facilities and infrastructure
   - Student achievements
   - Admissions call-to-action
   - Interactive AI chatbot
   - Contact section
   - Professional deep-maroon footer
2. **About Us (`/about`)**: Karamadai campus overview, vision, mission, educational objectives, values, and Principal's message.
3. **Departments (`/departments`)**: Full directory with live search filtering across the seven programmes + dynamic detail pages (`/departments/[slug]`).
4. **Academics (`/academics`)**: Autonomous Choice Based Credit System (CBCS), 7 programme curriculum models, academic calendar + dynamic course detail pages (`/academics/[slug]`).
5. **Placements (`/placements`)**: Career guidance cell, 3-year progression training roadmap, verified recruiter directory, and pre-placement bootcamps.
6. **Admissions (`/admissions`)**: Programme selection, eligibility guidelines, 4-step procedure, merit scholarships, FAQs, and **Validated Admission Enquiry Form**.
7. **Campus Life (`/campus-life`)**: Computing labs, central library, sports complex, student clubs (BitWise, NSS, YRC), and **Photo Gallery with Lightbox Viewer**.
8. **Contact Us (`/contact`)**: Verified campus address (*Ooty Main Road, Coimbatore – 641104*), phone, email, Google Maps embed, travel directions, and **Validated Contact Enquiry Form**.

---

## 🤖 Interactive Features

- **Interactive AI Chatbot (`AIChatbotWidget`)**: Floating assistant that answers visitor questions regarding programmes, admissions, eligibility, location, timings, and facilities.
- **Cinematic Hero Video (`HeroVideoBanner`)**: HTML5 video with `autoPlay`, `muted`, `loop`, `playsInline`, dark gradient overlay, and poster fallback.
- **Campus Video Tour (`CampusVideoTour`)**: Embedded interactive video player modal.
- **Photo Lightbox Modal (`LightboxModal`)**: Accessible full-screen photo viewer with category tabs, next/prev, and keyboard navigation.
- **Mega-Menu Dropdowns**: Multi-column desktop menus with smooth transitions.
- **Sticky Navigation**: Slides smoothly into view on scroll with white background and quick action buttons.
- **Back-to-Top Button (`BackToTopButton`)**: Smooth floating button to return to top.
- **Admin Management Console (`/admin`)**: Real-time admission enquiry lead manager (filter by status, update status, delete) and announcement publisher.

---

## 🚀 Local Development & Build

```bash
# Navigate to project directory
cd "ssec arts"

# Run development server
npm run dev

# Run production build
npm run build

# Start production server
npm run start
```

Server will run at [http://localhost:3000](http://localhost:3000).

---

## 🗄️ Supabase PostgreSQL Integration

The website is fully functional out of the box using server-side API handlers (`/api/enquiry`, `/api/contact`). To link an external Supabase database:
1. Run `supabase/schema.sql` in your Supabase SQL editor.
2. Provide `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`.

---

*Official website developed for Sree Sakthi Engineering College (Autonomous Technical Campus – Karamadai).*
