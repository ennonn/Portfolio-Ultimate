import accoreDemo from '../../video-walkthrough/accore-demo.mp4';
import uaAttendanceDemo from '../../video-walkthrough/ua-attendance-demo.mp4';

export const portfolioData = {
  personal: {
    name: "Ian Macabulos",
    title: "Full-Stack Developer",
    location: "Pampanga, Philippines",
    nationality: "Filipino",
    education: "BS Information Technology (Web Dev)",
    email: "ianmacabulos@gmail.com",
    resumeUrl: "#resume",
    bio: "Full-Stack Developer focused on building practical web applications, robust backend services, and clean user interfaces.",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    socials: [
      { name: "GitHub", icon: "Github", url: "https://github.com" },
      { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com" },
      { name: "Email", icon: "Mail", url: "mailto:ianmacabulos@gmail.com" }
    ]
  },

  mission: {
    tagline: "Building User-Centered Applications & Software Systems",
    subtitle: "Focused on clean code architecture, practical software workflows, and reliable system performance.",
    stats: [
      { label: "Experience", value: "3+ Years", detail: "Full-stack development experience" },
      { label: "Projects Worked", value: "15+ Completed", detail: "Web and mobile systems shipped" },
      { label: "Code Reliability", value: "100%", detail: "Production & academic deliverables" }
    ]
  },

  projects: [
    {
      id: "ua-labsign",
      title: "UA LabSign — Laboratory Attendance System",
      category: "Full-Stack",
      shortDesc: "Laboratory attendance platform combining device cryptographic signatures, GPS geofencing, and PIN verification.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
      videoUrl: uaAttendanceDemo,
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "React Native", "Expo"],
      liveUrl: "https://example.com/labsign",
      githubUrl: "https://github.com/example/labsign",
      mobileUrl: "https://github.com/example/labsign-mobile",
      details: {
        subtitle: "Laboratory Attendance Tracking & Security System",
        description: "UA LabSign is a centralized web and mobile laboratory attendance system designed to eliminate proxy attendance. It combines device-bound ECDSA P-256 signatures, GPS geofencing, institutional Google authentication, and single-use session PINs.",
        architecture: [
          { role: "Web Portal & Backend", text: "Built with Next.js App Router, React, and TypeScript. Prisma manages PostgreSQL models on Neon DB." },
          { role: "Mobile Client", text: "React Native and Expo app utilizing TypeScript, SecureStore, and native cryptographic APIs." },
          { role: "Verification Gates", text: "5 verification gates: University Identity, Authorized Device, Valid Signature, Geofence Radius, and PIN." }
        ],
        context: { type: "University Platform", clients: "Web + Mobile", scope: "Attendance Verification" },
        deployment: { web: "Vercel", database: "Neon PostgreSQL", mobile: "Expo / Android" }
      }
    },
    {
      id: "ac-core",
      title: "AC-CORE — City Center for Operational Reporting",
      category: "GovTech",
      shortDesc: "GovTech platform featuring Geospatial Signal Routing (GSR) to track municipal maintenance issues and route emergency reports.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      videoUrl: accoreDemo,
      tags: ["MEAN Stack", "Leaflet.js", "Express", "GeoJSON", "Turf.js"],
      liveUrl: "https://example.com/ac-core",
      githubUrl: "https://github.com/example/ac-core",
      details: {
        subtitle: "Operational Reporting and Engineering System",
        description: "A proactive GovTech platform engineered for city governments to receive citizen reports, track infrastructure maintenance in real-time, and route emergency responders using spatial GIS data.",
        architecture: [
          { role: "Geospatial Routing", text: "Integrates Leaflet.js with Turf.js algorithms for spatial boundary analysis and location tagging." },
          { role: "Backend API", text: "Express API endpoints managing incident logs and status updates." }
        ],
        context: { type: "GovTech System", clients: "Web Portal", scope: "Municipal Reporting" },
        deployment: { web: "Vercel", database: "MongoDB Atlas", mobile: "Responsive Web" }
      }
    },
    {
      id: "grit-ai",
      title: "Grit — Career Intelligence & Resume Tracker",
      category: "Web App",
      shortDesc: "Career management platform to score resumes against job descriptions, parse application history, and track interviews.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      videoUrl: uaAttendanceDemo,
      tags: ["Laravel 11", "Livewire 3", "Neon Postgres", "Tailwind CSS"],
      liveUrl: "https://example.com/grit",
      githubUrl: "https://github.com/example/grit",
      details: {
        subtitle: "Job Application Tracking & Resume Matcher",
        description: "Grit eliminates manual spreadsheet tracking by parsing job offers, extracting key requirements, scoring candidate fit, and suggesting tailored cover letters.",
        architecture: [
          { role: "Parsing Engine", text: "Structured output extraction for key resume requirements and job skills." },
          { role: "Frontend Engine", text: "Laravel Livewire 3 reactive interfaces with Tailwind UI components." }
        ],
        context: { type: "Web Application", clients: "Web App", scope: "Resume Analysis" },
        deployment: { web: "Render", database: "Neon Postgres", mobile: "Responsive Web" }
      }
    },
    {
      id: "kodasync",
      title: "KodaSync — Searchable Code Snippet Hub",
      category: "Developer Tools",
      shortDesc: "Developer intelligence hub combining Monaco Editor with searchable neural code snippet storage.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      videoUrl: accoreDemo,
      tags: ["Next.js 15", "FastAPI", "pgvector", "Monaco Editor"],
      liveUrl: "https://example.com/kodasync",
      githubUrl: "https://github.com/example/kodasync",
      details: {
        subtitle: "Semantic Code Snippet Repository",
        description: "KodaSync indexes code repositories and custom snippets into vector embeddings, enabling developers to search their codebase efficiently.",
        architecture: [
          { role: "Vector Search", text: "FastAPI service connected to pgvector embeddings database." },
          { role: "Editor UI", text: "Monaco Code Editor embedded into Next.js 15 App Router." }
        ],
        context: { type: "Developer Tool", clients: "Web Studio", scope: "Code Search" },
        deployment: { web: "Vercel", database: "Supabase Vector", mobile: "Desktop & Web" }
      }
    },
    {
      id: "subvantage",
      title: "SubVantage — Subscription Dashboard",
      category: "Full-Stack",
      shortDesc: "Financial dashboard for tracking recurring software subscriptions, fortified with 2FA security and spending charts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      videoUrl: uaAttendanceDemo,
      tags: ["Next.js 15", "Neon Postgres", "Prisma", "2FA Security", "Recharts"],
      liveUrl: "https://example.com/subvantage",
      githubUrl: "https://github.com/example/subvantage",
      details: {
        subtitle: "Recurring Expense Tracking Dashboard",
        description: "SubVantage provides users with clear visual insights into active subscriptions, renewal dates, price changes, and monthly budget trends.",
        architecture: [
          { role: "Security Layer", text: "TOTP-based 2FA authentication built with WebCrypto API." },
          { role: "Data Visualization", text: "Interactive monthly spending velocity charts using Recharts." }
        ],
        context: { type: "FinTech Dashboard", clients: "Web Portal", scope: "Subscription Tracker" },
        deployment: { web: "Vercel", database: "Neon Postgres", mobile: "Responsive Web" }
      }
    },
    {
      id: "mama-rs",
      title: "Mama R's — Sales & Inventory Operations",
      category: "Frontend",
      shortDesc: "Inventory and sales management system featuring real-time stock tracking and printable POS receipts.",
      image: "https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&w=1200&q=80",
      videoUrl: accoreDemo,
      tags: ["TypeScript", "MERN Stack", "Tailwind CSS"],
      liveUrl: "https://example.com/mamars",
      githubUrl: "https://github.com/example/mamars",
      details: {
        subtitle: "Retail POS & Daily Reconciliation Dashboard",
        description: "Mama R's streamlines store sales transactions, barcode item tracking, inventory alerts, and daily ledger reporting.",
        architecture: [
          { role: "POS System", text: "Cashier receipt generator with thermal printer support." },
          { role: "Inventory Sync", text: "Real-time stock deduction and reorder threshold alerts." }
        ],
        context: { type: "Retail POS", clients: "Web Desktop", scope: "Inventory & POS" },
        deployment: { web: "Netlify", database: "MongoDB Atlas", mobile: "Tablet & Desktop" }
      }
    },
    {
      id: "cloud-gate",
      title: "CloudGate — API Access & Key Manager",
      category: "Developer Tools",
      shortDesc: "Developer API gateway service managing key generation, rate limiting, and analytics headers.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
      videoUrl: uaAttendanceDemo,
      tags: ["Go", "Redis", "Docker", "PostgreSQL"],
      liveUrl: "https://example.com/cloudgate",
      githubUrl: "https://github.com/example/cloudgate",
      details: {
        subtitle: "API Rate Limiting & Gateway Dashboard",
        description: "CloudGate secures microservices with token bucket rate limiting, Redis caching, and real-time developer API usage analytics.",
        architecture: [
          { role: "Gateway proxy", text: "High throughput Go proxy with Redis token bucket rate limiting." }
        ],
        context: { type: "API Gateway", clients: "Developer API", scope: "Security & Analytics" },
        deployment: { web: "Fly.io", database: "Redis + Postgres", mobile: "Web Dashboard" }
      }
    },
    {
      id: "nexus-chat",
      title: "Nexus — Realtime Collaborative Workspace",
      category: "Web App",
      shortDesc: "Team collaboration suite featuring Markdown document sync, presence indicators, and WebRTC video.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      videoUrl: accoreDemo,
      tags: ["React", "WebSockets", "Node.js", "Tailwind CSS"],
      liveUrl: "https://example.com/nexus",
      githubUrl: "https://github.com/example/nexus",
      details: {
        subtitle: "Realtime Collaboration Platform",
        description: "Nexus connects remote development teams with shared document channels, live cursor synchronization, and video rooms.",
        architecture: [
          { role: "Realtime Engine", text: "Socket.io websockets cluster supporting document CRDTs." }
        ],
        context: { type: "Collaboration Tool", clients: "Web Suite", scope: "Document Sync" },
        deployment: { web: "Vercel", database: "Postgres", mobile: "Responsive Web" }
      }
    }
  ],

  experience: [
    {
      id: "flyrank",
      company: "FlyRank AI",
      role: "Backend AI Engineer Intern",
      period: "Jan 2024 - Jun 2024",
      location: "San Francisco, CA (Remote)",
      logo: "Server",
      bullets: [
        "Engineered a TypeScript/Fastify usage metering and billing service, implementing tenant quotas, token tracking, and database micro-cent pricing.",
        "Integrated Stripe test-mode billing and webhook processing with automated unit and integration tests covering quota enforcement.",
        "Optimized database indexing and query latency by 42%."
      ]
    },
    {
      id: "sortr",
      company: "Sortr",
      role: "Full-Stack Web Developer Intern",
      period: "Jul 2023 - Dec 2023",
      location: "Manila, Philippines",
      logo: "FolderKanban",
      bullets: [
        "Built an internal IT service desk ticketing system for 50+ employees within the company domain, centralizing issue reporting and ticket status routing.",
        "Redesigned and optimized WordPress production pages, improving responsive layouts, technical SEO, and page load speeds.",
        "Collaborated with design team to convert wireframes into responsive React components."
      ]
    },
    {
      id: "freelance",
      company: "Freelance Work",
      role: "Freelance Full-Stack Developer",
      period: "Jan 2022 - Present",
      location: "Remote / Client Projects",
      logo: "Code2",
      bullets: [
        "Built and deployed custom full-stack web applications for local business and academic clients.",
        "Managed projects end-to-end: requirements gathering, architecture, database schema design, authentication, testing, and deployment.",
        "Delivered solutions actively used by hundreds of registered users across academic and business workflows."
      ]
    }
  ],

  techStack: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: "Advanced", desc: "State management, custom hooks, component libraries", website: "https://react.dev", icon: "Code" },
        { name: "Next.js", level: "Advanced", desc: "App Router, Server Components, SSR, static generation", website: "https://nextjs.org", icon: "Globe" },
        { name: "TypeScript", level: "Proficient", desc: "Interfaces, generics, type-safe development", website: "https://www.typescriptlang.org", icon: "FileCode" },
        { name: "Tailwind CSS", level: "Advanced", desc: "Responsive layouts, utility classes", website: "https://tailwindcss.com", icon: "Palette" },
        { name: "HTML / CSS", level: "Expert", desc: "Semantic HTML5, CSS Grid, Flexbox", website: "https://developer.mozilla.org", icon: "Layout" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: "Advanced", desc: "Asynchronous APIs, NPM ecosystem", website: "https://nodejs.org", icon: "Server" },
        { name: "Express.js", level: "Advanced", desc: "RESTful API routes, middleware, authentication", website: "https://expressjs.com", icon: "Cpu" },
        { name: "Fastify", level: "Intermediate", desc: "High-performance Node server framework", website: "https://fastify.dev", icon: "Zap" },
        { name: "Python", level: "Intermediate", desc: "FastAPI, backend scripting", website: "https://python.org", icon: "Terminal" }
      ]
    },
    {
      category: "Databases & Cloud",
      items: [
        { name: "PostgreSQL", level: "Advanced", desc: "Relational queries, database indexing, pgvector", website: "https://www.postgresql.org", icon: "Database" },
        { name: "Prisma ORM", level: "Advanced", desc: "Type-safe database queries and migrations", website: "https://www.prisma.io", icon: "Layers" },
        { name: "MongoDB", level: "Intermediate", desc: "NoSQL document stores and collections", website: "https://mongodb.com", icon: "HardDrive" },
        { name: "Neon DB", level: "Advanced", desc: "Serverless Postgres scaling", website: "https://neon.tech", icon: "Cloud" }
      ]
    },
    {
      category: "Tools & Software",
      items: [
        { name: "Git & GitHub", level: "Advanced", desc: "Version control, branching, PR reviews", website: "https://github.com", icon: "GitBranch" },
        { name: "Docker", level: "Intermediate", desc: "Containerization and Dockerfile setup", website: "https://www.docker.com", icon: "Box" },
        { name: "Figma", level: "Proficient", desc: "UI wireframing and prototyping", website: "https://figma.com", icon: "Figma" },
        { name: "Vercel", level: "Expert", desc: "Continuous deployment and hosting", website: "https://vercel.com", icon: "UploadCloud" }
      ]
    }
  ],

  certifications: [
    {
      title: "CompTIA IT Fundamentals (ITF+)",
      issuer: "CompTIA",
      date: "Nov 2023",
      credentialUrl: "https://www.comptia.org"
    },
    {
      title: "AWS Cloud Foundations",
      issuer: "AWS Academy",
      date: "Apr 2024",
      credentialUrl: "https://aws.amazon.com/training"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Sep 2024",
      credentialUrl: "https://freecodecamp.org"
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "Mar 2025",
      credentialUrl: "https://freecodecamp.org"
    }
  ],

  education: {
    institution: "Holy Angel University",
    degree: "Bachelor of Science in Information Technology",
    major: "Major in Web Development",
    period: "2023 – Expected Graduation: 2027",
    honors: "Academic Honors: Consistent Dean's and President's Lister, A.Y. 2023–2026"
  }
};
