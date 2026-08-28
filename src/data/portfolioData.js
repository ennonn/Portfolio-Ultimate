export const portfolioData = {
  personal: {
    name: "Aljon Fernando",
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
      { label: "Projects Worked", value: "24 Completed", detail: "Web, mobile, & GovTech systems shipped" },
      { label: "Code Reliability", value: "100%", detail: "Production & academic deliverables" }
    ]
  },

  projects: [
    {
      id: "ua-labsign",
      title: "UA LabSign — Laboratory Attendance System",
      category: "Full-Stack",
      shortDesc: "Laboratory attendance platform combining device cryptographic signatures, GPS geofencing, and PIN verification.",
      videoUrl: "/video-walkthrough/ua-attendance-demo.mp4",
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
      videoUrl: "/video-walkthrough/accore-demo.mp4",
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
      videoUrl: "/video-walkthrough/ua-attendance-demo.mp4",
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
      videoUrl: "/video-walkthrough/accore-demo.mp4",
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
      videoUrl: "/video-walkthrough/ua-attendance-demo.mp4",
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
      videoUrl: "/video-walkthrough/accore-demo.mp4",
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
      videoUrl: "/video-walkthrough/ua-attendance-demo.mp4",
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
      videoUrl: "/video-walkthrough/accore-demo.mp4",
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
    },
    {
      id: "pulse-analytics",
      title: "PulseAnalytics — Realtime Web Metrics",
      category: "FinTech",
      shortDesc: "Privacy-focused analytics engine tracking website visitors, event funnels, and revenue metrics in real-time.",
      videoUrl: "/video-walkthrough/ua-attendance-demo.mp4",
      tags: ["Next.js", "ClickHouse", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://example.com/pulse",
      githubUrl: "https://github.com/example/pulse",
      details: {
        subtitle: "High-Throughput Telemetry Platform",
        description: "PulseAnalytics captures lightweight telemetry events and aggregates million-row datasets in milliseconds.",
        architecture: [
          { role: "Data Pipeline", text: "ClickHouse columnar store optimized for rapid aggregate metrics queries." }
        ],
        context: { type: "Analytics Engine", clients: "SaaS Platform", scope: "Telemetry" },
        deployment: { web: "AWS EC2", database: "ClickHouse", mobile: "Web Dashboard" }
      }
    },
    {
      id: "geo-guard",
      title: "GeoGuard — Dispatch & Emergency Tracking",
      category: "GovTech",
      shortDesc: "Geospatial emergency coordination software mapping active municipal responders and incident dispatch radius.",
      videoUrl: "/video-walkthrough/accore-demo.mp4",
      tags: ["Vue.js 3", "Express", "PostGIS", "Leaflet"],
      liveUrl: "https://example.com/geoguard",
      githubUrl: "https://github.com/example/geoguard",
      details: {
        subtitle: "Municipal Emergency Telemetry Dashboard",
        description: "GeoGuard provides city dispatchers with live GPS telemetry tracking for ambulance and fire department units.",
        architecture: [
          { role: "GIS Engine", text: "PostGIS backend calculating proximity radii and routing optimization." }
        ],
        context: { type: "Emergency Response", clients: "City Dispatch", scope: "GPS Telemetry" },
        deployment: { web: "Vercel", database: "PostgreSQL PostGIS", mobile: "Tablet Portal" }
      }
    },
    {
      id: "dev-stack",
      title: "DevStack — Container Orchestration UI",
      category: "Developer Tools",
      shortDesc: "Web dashboard for managing Docker containers, inspecting service logs, and monitoring CPU/RAM metrics.",
      videoUrl: "/video-walkthrough/ua-attendance-demo.mp4",
      tags: ["React", "Go", "Docker API", "Tailwind CSS"],
      liveUrl: "https://example.com/devstack",
      githubUrl: "https://github.com/example/devstack",
      details: {
        subtitle: "Local & Server Docker Management Studio",
        description: "DevStack replaces raw CLI commands with an interactive visual dashboard for restarting containers and streaming logs.",
        architecture: [
          { role: "Backend Daemon", text: "Go daemon interfacing with Docker Unix socket API." }
        ],
        context: { type: "DevOps Tool", clients: "Developer Desktop", scope: "Docker Engine" },
        deployment: { web: "Local Host", database: "SQLite", mobile: "Desktop App" }
      }
    },
    {
      id: "beacon-health",
      title: "BeaconHealth — Telemedicine Portal",
      category: "Full-Stack",
      shortDesc: "HIPAA-compliant telemedicine portal for scheduling doctor appointments, video consultations, and prescriptions.",
      videoUrl: "/video-walkthrough/accore-demo.mp4",
      tags: ["Next.js", "GraphQL", "PostgreSQL", "WebRTC"],
      liveUrl: "https://example.com/beaconhealth",
      githubUrl: "https://github.com/example/beaconhealth",
      details: {
        subtitle: "Patient Record & Video Consultation Suite",
        description: "BeaconHealth connects remote patients with certified medical specialists through encrypted WebRTC video sessions.",
        architecture: [
          { role: "Consultation Engine", text: "Peer-to-peer WebRTC video stream with end-to-end encryption." }
        ],
        context: { type: "Healthcare Suite", clients: "Web & Mobile", scope: "Telemedicine" },
        deployment: { web: "Vercel", database: "Neon Postgres", mobile: "iOS / Android" }
      }
    },
    {
      id: "sentinel-vault",
      title: "SentinelVault — Secrets & API Key Vault",
      category: "Developer Tools",
      shortDesc: "Zero-knowledge encryption vault for storing team API keys, environment variables, and SSH credentials.",
      videoUrl: "/video-walkthrough/ua-attendance-demo.mp4",
      tags: ["Rust", "Tauri", "WebCrypto", "React"],
      liveUrl: "https://example.com/sentinel",
      githubUrl: "https://github.com/example/sentinel",
      details: {
        subtitle: "Encrypted Team Environment Secret Manager",
        description: "SentinelVault encrypts API tokens locally using AES-GCM 256-bit keys before syncing to remote backup nodes.",
        architecture: [
          { role: "Encryption Suite", text: "Client-side AES-GCM 256 encryption via WebCrypto API." }
        ],
        context: { type: "Security Vault", clients: "Dev Teams", scope: "Secret Manager" },
        deployment: { web: "Desktop App", database: "Encrypted Sync", mobile: "Desktop App" }
      }
    },
    {
      id: "aero-flow",
      title: "AeroFlow — Flight Scheduling System",
      category: "Web App",
      shortDesc: "Aviation flight operations manager tracking aircraft maintenance schedules, pilot logs, and weather maps.",
      videoUrl: "/video-walkthrough/accore-demo.mp4",
      tags: ["Vue.js", "Django", "PostgreSQL", "Leaflet"],
      liveUrl: "https://example.com/aeroflow",
      githubUrl: "https://github.com/example/aeroflow",
      details: {
        subtitle: "Flight Operations & Crew Scheduling",
        description: "AeroFlow organizes charter flight schedules, passenger manifests, fuel consumption logs, and pilot duty hours.",
        architecture: [
          { role: "Schedule Engine", text: "Django REST API managing flight availability and maintenance intervals." }
        ],
        context: { type: "Aviation Portal", clients: "Airline Admin", scope: "Flight Ops" },
        deployment: { web: "AWS Amplify", database: "Postgres", mobile: "Web Portal" }
      }
    },
    {
      id: "nexus-mobile",
      title: "Nexus Mobile — Cross-Platform Messenger",
      category: "Mobile App",
      shortDesc: "End-to-end encrypted mobile chat application featuring voice messages, media sharing, and offline sync.",
      videoUrl: "/video-walkthrough/ua-attendance-demo.mp4",
      tags: ["React Native", "Expo", "SQLite", "WebSockets"],
      liveUrl: "https://example.com/nexus-mobile",
      githubUrl: "https://github.com/example/nexus-mobile",
      details: {
        subtitle: "Encrypted Mobile Messenger",
        description: "Nexus Mobile allows remote teams to stay connected on iOS and Android with instant messaging and offline queuing.",
        architecture: [
          { role: "Mobile Client", text: "React Native Expo client with SQLite local cache." }
        ],
        context: { type: "Mobile Application", clients: "iOS & Android", scope: "Messaging" },
        deployment: { web: "App Store / Play Store", database: "Postgres + Redis", mobile: "Mobile App" }
      }
    },
    {
      id: "prism-studio",
      title: "PrismStudio — CSS Gradient & Asset Generator",
      category: "Frontend",
      shortDesc: "Web-based design tool for creating CSS glassmorphism code, mesh gradients, and SVG icon exports.",
      videoUrl: "/video-walkthrough/accore-demo.mp4",
      tags: ["React", "HTML5 Canvas", "Tailwind CSS", "Vite"],
      liveUrl: "https://example.com/prism",
      githubUrl: "https://github.com/example/prism",
      details: {
        subtitle: "Visual CSS Asset & Canvas Studio",
        description: "PrismStudio generates ready-to-copy CSS backdrop filters, color palettes, and complex SVG geometric patterns.",
        architecture: [
          { role: "Canvas Renderer", text: "HTML5 Canvas engine rendering real-time mesh color gradients." }
        ],
        context: { type: "Design Tool", clients: "Web Designers", scope: "CSS Generator" },
        deployment: { web: "Vercel", database: "Local State", mobile: "Web Studio" }
      }
    },
    {
      id: "hyper-log",
      title: "HyperLog — Distributed Log Viewer",
      category: "Developer Tools",
      shortDesc: "Real-time log aggregation platform streaming server stdout/stderr console logs into a searchable interface.",
      videoUrl: "/video-walkthrough/ua-attendance-demo.mp4",
      tags: ["Go", "WebSockets", "React", "Elasticsearch"],
      liveUrl: "https://example.com/hyperlog",
      githubUrl: "https://github.com/example/hyperlog",
      details: {
        subtitle: "High-Volume Server Log Streaming",
        description: "HyperLog ingests thousands of server log lines per second, highlighting exceptions and alerting dev teams.",
        architecture: [
          { role: "Stream Ingest", text: "Go WebSocket server tailing system logs and indexing into Elasticsearch." }
        ],
        context: { type: "Logging System", clients: "DevOps", scope: "Telemetry Ingest" },
        deployment: { web: "Docker Container", database: "Elasticsearch", mobile: "Web Console" }
      }
    },
    {
      id: "cyber-shield",
      title: "CyberShield — Vulnerability Scanner",
      category: "Full-Stack",
      shortDesc: "Automated web security scanner probing web endpoints for header misconfigurations, SSL expirations, and XSS.",
      videoUrl: "/video-walkthrough/accore-demo.mp4",
      tags: ["Python", "FastAPI", "React", "PostgreSQL"],
      liveUrl: "https://example.com/cybershield",
      githubUrl: "https://github.com/example/cybershield",
      details: {
        subtitle: "Automated Pentesting & Compliance Portal",
        description: "CyberShield scans domain endpoints, generates PDF audit reports, and provides actionable remediation steps.",
        architecture: [
          { role: "Scan Engine", text: "Python async scanner evaluating OWASP Top 10 security vectors." }
        ],
        context: { type: "Security Scanner", clients: "Enterprise Admin", scope: "Audit Reports" },
        deployment: { web: "AWS ECS", database: "PostgreSQL", mobile: "Web Portal" }
      }
    },
    {
      id: "omni-cart",
      title: "OmniCart — E-Commerce Storefront",
      category: "Web App",
      shortDesc: "Headless e-commerce storefront with Stripe Checkout, inventory management, and customer order tracking.",
      videoUrl: "/video-walkthrough/ua-attendance-demo.mp4",
      tags: ["Next.js 15", "Stripe API", "Prisma", "Tailwind CSS"],
      liveUrl: "https://example.com/omnicart",
      githubUrl: "https://github.com/example/omnicart",
      details: {
        subtitle: "Headless E-Commerce Shopping Platform",
        description: "OmniCart provides ultra-fast product browsing, cart persistence, coupon codes, and automated Stripe webhooks.",
        architecture: [
          { role: "Payment Gateway", text: "Integrated Stripe Checkout with webhook signature validation." }
        ],
        context: { type: "E-Commerce", clients: "Online Store", scope: "Shopping Cart" },
        deployment: { web: "Vercel", database: "Neon Postgres", mobile: "Responsive Web" }
      }
    },
    {
      id: "terra-track",
      title: "TerraTrack — Agricultural Land Mapping",
      category: "GovTech",
      shortDesc: "GIS mapping tool for municipal agricultural offices to track crop yields, soil types, and irrigation channels.",
      videoUrl: "/video-walkthrough/accore-demo.mp4",
      tags: ["React", "Leaflet", "GeoJSON", "Express"],
      liveUrl: "https://example.com/terratrack",
      githubUrl: "https://github.com/example/terratrack",
      details: {
        subtitle: "Agricultural GIS Boundary Platform",
        description: "TerraTrack maps farm parcel boundaries, tracking seasonal harvest reports and irrigation water distribution.",
        architecture: [
          { role: "Spatial Mapping", text: "Leaflet GIS layer rendering high-resolution spatial GeoJSON boundary shapes." }
        ],
        context: { type: "GovTech GIS", clients: "Agri Dept", scope: "Parcel Mapping" },
        deployment: { web: "Netlify", database: "MongoDB GeoJSON", mobile: "Web Portal" }
      }
    },
    {
      id: "vortex-db",
      title: "VortexDB — Embedded Key-Value Store GUI",
      category: "Developer Tools",
      shortDesc: "Visual GUI client for querying embedded key-value databases, inspecting indexes, and managing snapshots.",
      videoUrl: "/video-walkthrough/ua-attendance-demo.mp4",
      tags: ["TypeScript", "Electron", "LevelDB", "React"],
      liveUrl: "https://example.com/vortex",
      githubUrl: "https://github.com/example/vortex",
      details: {
        subtitle: "Desktop Key-Value Database Explorer",
        description: "VortexDB allows database administrators to inspect binary key-value entries with JSON syntax formatting.",
        architecture: [
          { role: "Database Tool", clients: "DB Administrators", scope: "GUI Explorer" },
          { role: "Desktop Client", text: "Electron IPC bridge connected to local LevelDB database instances." }
        ],
        context: { type: "Database Tool", clients: "DB Administrators", scope: "GUI Explorer" },
        deployment: { web: "Desktop App", database: "LevelDB", mobile: "Desktop App" }
      }
    },
    {
      id: "lumen-pay",
      title: "LumenPay — Micro-Merchant POS & Payroll",
      category: "FinTech",
      shortDesc: "Payroll and point-of-sale app for small merchants, supporting QR payments, daily receipts, and salary logs.",
      videoUrl: "/video-walkthrough/accore-demo.mp4",
      tags: ["React Native", "Node.js", "PostgreSQL", "Tailwind"],
      liveUrl: "https://example.com/lumenpay",
      githubUrl: "https://github.com/example/lumenpay",
      details: {
        subtitle: "Point-of-Sale & Employee Payroll App",
        description: "LumenPay simplifies daily store sales reconciliation, employee timekeeping, and automated digital receipts.",
        architecture: [
          { role: "POS Engine", text: "Node.js API producing thermal printer receipt data and daily sales ledgers." }
        ],
        context: { type: "FinTech POS", clients: "Small Businesses", scope: "POS & Payroll" },
        deployment: { web: "AWS", database: "Postgres", mobile: "Tablet & Mobile" }
      }
    },
    {
      id: "cortex-ai",
      title: "CortexAI — Neural Document Summarizer",
      category: "AI & ML",
      shortDesc: "AI document intelligence tool extracting key takeaways, contracts terms, and action items from long PDFs.",
      videoUrl: "/video-walkthrough/ua-attendance-demo.mp4",
      tags: ["Python", "FastAPI", "Gemini API", "React"],
      liveUrl: "https://example.com/cortex",
      githubUrl: "https://github.com/example/cortex",
      details: {
        subtitle: "Document Extraction & Contract Parser",
        description: "CortexAI ingests multi-page PDF documents and produces structured bullet-point executive summaries.",
        architecture: [
          { role: "AI Pipeline", text: "FastAPI endpoint routing PDF text into Gemini API for structured summaries." }
        ],
        context: { type: "AI Tool", clients: "Legal & Corporate", scope: "PDF Parsing" },
        deployment: { web: "Vercel", database: "Supabase", mobile: "Web Studio" }
      }
    },
    {
      id: "quantum-hub",
      title: "QuantumHub — Integrated Project Management",
      category: "Full-Stack",
      shortDesc: "Enterprise workflow suite with Kanban boards, sprint velocity charts, time tracking, and Slack alerts.",
      videoUrl: "/video-walkthrough/accore-demo.mp4",
      tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "https://example.com/quantum",
      githubUrl: "https://github.com/example/quantum",
      details: {
        subtitle: "Agile Project & Sprint Management Platform",
        description: "QuantumHub combines drag-and-drop Kanban task columns with automatic burndown chart analytics.",
        architecture: [
          { role: "Task Board Engine", text: "Next.js server actions managing optimistic UI updates for Kanban cards." }
        ],
        context: { type: "Agile Suite", clients: "Software Teams", scope: "Sprint Manager" },
        deployment: { web: "Vercel", database: "Neon Postgres", mobile: "Responsive Web" }
      }
    }
  ],

  experience: [
    {
      id: "devpulse",
      company: "DevPulse Solutions",
      role: "Junior Full-Stack Software Engineer",
      period: "Jun 2024 - Present",
      location: "Clark Freeport Zone, Pampanga",
      logo: "Code2",
      bullets: [
        "Architected and deployed high-performance RESTful microservices and reactive React interfaces for client web platforms.",
        "Managed PostgreSQL schema migrations, Redis session caching, and automated CI/CD deployment pipelines on Vercel and Render.",
        "Optimized database query performance, reduced latency by 35%, and enforced OAuth2 security standards across APIs."
      ]
    },
    {
      id: "flyrank",
      company: "FlyRank AI",
      role: "Backend AI Engineer Intern",
      period: "Jan 2024 - May 2024",
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
      category: "GIS",
      items: [
        { name: "ArcGIS", icon: "Gis", desc: "A spatial GIS software platform used to map municipal boundaries and analyze geospatial data." },
        { name: "QGIS", icon: "Gis", desc: "An open-source desktop GIS application for editing vector layers and spatial shapefiles." },
        { name: "Leaflet.js", icon: "MapPin", desc: "A lightweight JavaScript mapping library for building interactive mobile-friendly web maps." },
        { name: "PostGIS", icon: "Database", desc: "A spatial database extender for PostgreSQL supporting geospatial queries and indexing." },
        { name: "Turf.js", icon: "Gis", desc: "A JavaScript engine for spatial analysis and geospatial geometry calculations." }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "Code", desc: "A frontend JavaScript library for building component-driven, reactive user interfaces." },
        { name: "Next.js", icon: "Globe", desc: "A full-stack React framework featuring App Router, Server Components, and SSR rendering." },
        { name: "TypeScript", icon: "FileCode", desc: "A typed superset of JavaScript providing static type definitions and code reliability." },
        { name: "Tailwind CSS", icon: "Palette", desc: "A utility-first CSS framework for rapidly building modern custom UI layouts." },
        { name: "HTML / CSS", icon: "Layout", desc: "Core web standards for semantic document structure and responsive CSS flexbox/grid." }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "Server", desc: "An asynchronous event-driven JavaScript runtime for building high-concurrency APIs." },
        { name: "Express.js", icon: "Cpu", desc: "A minimalist web framework for Node.js routing, middleware, and REST services." },
        { name: "Fastify", icon: "Zap", desc: "A high-performance low-overhead Node server framework optimized for speed." },
        { name: "Python", icon: "Terminal", desc: "A programming language used for backend scripting, microservices, and AI integrations." },
        { name: "Django", icon: "Server", desc: "A high-level Python web framework providing ORM security and admin interface." },
        { name: "Go", icon: "Terminal", desc: "A statically-typed compiled language used for concurrent network services and gateways." }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "PostgreSQL", icon: "Database", desc: "An enterprise-grade open-source relational database supporting SQL and JSON." },
        { name: "Prisma ORM", icon: "Layers", desc: "A type-safe database client for Node.js and TypeScript ORM query migrations." },
        { name: "MongoDB", icon: "HardDrive", desc: "A NoSQL document database storing scalable JSON-like collections." },
        { name: "Neon DB", icon: "Cloud", desc: "A serverless PostgreSQL platform with autoscaling and instant branching." },
        { name: "Redis", icon: "Zap", desc: "An in-memory key-value database used for lightning-fast caching and pub/sub." },
        { name: "ClickHouse", icon: "Database", desc: "A high-throughput columnar analytics database for processing telemetry events." }
      ]
    },
    {
      category: "Development",
      items: [
        { name: "Git & GitHub", icon: "GitBranch", desc: "Version control system and pull request collaboration platform." },
        { name: "Docker", icon: "Box", desc: "A containerization platform for building and shipping microservices." },
        { name: "Figma", icon: "Figma", desc: "A collaborative design tool for prototyping web interfaces and component systems." },
        { name: "Vercel", icon: "UploadCloud", desc: "A cloud platform optimized for automatic frontend deployment and edge functions." },
        { name: "Monaco Editor", icon: "Code", desc: "The browser-based code editor engine powering VS Code." }
      ]
    },
    {
      category: "Etc",
      items: [
        { name: "AWS Cloud", icon: "Cloud", desc: "Cloud infrastructure services including EC2, S3 storage, and ECS container tasks." },
        { name: "Stripe API", icon: "Shield", desc: "Payment infrastructure for recurring billing, subscriptions, and webhooks." },
        { name: "WebCrypto API", icon: "Shield", desc: "Browser-native cryptographic suite for AES-GCM and ECDSA signatures." },
        { name: "WebRTC", icon: "Globe", desc: "Real-time communication protocol for peer-to-peer audio and video streaming." },
        { name: "Expo", icon: "Box", desc: "A framework and platform for React Native app development on iOS and Android." }
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
