export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  detail?: {
    intro: string;
    features: string[];
    builtWith: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "sarokarai",
    title: "SarokarAi",
    tagline: "Nepal ko kaam, aba sajilo — AI guidance for government services.",
    description:
      "A trilingual AI guide covering 50+ Nepali government services, plus K Cha Ta?, a Nepali news engine with AI summaries. Built with Next.js 16 and React 19.",
    technologies: ["Next.js", "React 19", "TypeScript", "Tailwind CSS"],
    image: "/images/sarokar-home.png",
    imageAlt: "SarokarAi homepage — AI guidance for Nepali government services",
    width: 1275,
    height: 799,
    liveUrl: "https://sarokarai.vercel.app/",
    codeUrl: "https://github.com/kunalshahdev/SarokarAi",
    featured: true,
    detail: {
      intro:
        "I kept watching people get stuck on the same things — renewing a passport, figuring out PAN paperwork, not knowing which office to visit or what to carry. The information exists, but it's scattered and rarely in the language people actually speak. So I built SarokarAi: ask in Nepali, Roman Nepali, or English, and get clear step-by-step guidance. Then I added K Cha Ta?, a news engine that pulls from 11 Nepali publishers and summarizes what's trending with AI.",
      features: [
        "Ask in your own words — trilingual AI chat covering 50+ government services, from passports to licences",
        "K Cha Ta? — live Nepali news with AI summaries, so you catch up in minutes instead of hours",
        "Answers you can trust — processes cross-checked across 12 departments, with documents and fees spelled out",
        "Built to stay up — streaming responses with multi-provider failover and abuse protection",
      ],
      builtWith: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vitest"],
    },
  },
  {
    slug: "clinic-booking-platform",
    title: "Swastha Nepal Clinic",
    tagline: "Appointment booking with a staff admin dashboard.",
    description:
      "A complete clinic appointment booking platform — online booking, a role-based staff dashboard, and patient management. Built with React, TypeScript, and Supabase.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    image:
      "https://raw.githubusercontent.com/kunalshahdev/clinic-booking-platform/main/public/screenshots/home-desktop.png",
    imageAlt: "Clinic booking platform home page",
    width: 1440,
    height: 900,
    liveUrl: "https://clinic-booking-platform.vercel.app",
    codeUrl: "https://github.com/kunalshahdev/clinic-booking-platform",
    featured: true,
    detail: {
      intro:
        "This one started as a real client project — a clinic in Kathmandu managing appointments over phone calls and paper. I built them a full booking platform: patients pick a doctor and a time slot online, and the staff runs everything from a dashboard. No more phone tag.",
      features: [
        "Book in seconds — patients browse services and doctors, then grab an open time slot",
        "A dashboard for the whole team — separate views for owners, receptionists, doctors, and viewers",
        "No double bookings — every reservation is checked at the database level",
        "Try it yourself — the live demo runs on fictional data, no login needed",
      ],
      builtWith: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Playwright"],
    },
  },
  {
    slug: "hr-dashboard",
    title: "HR Dashboard",
    tagline: "Admin dashboard for the daily work of running a team.",
    description:
      "A responsive HR admin dashboard with employee management, onboarding tracking, leave management, and analytics. Built with React 19 and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "Vite", "React Router"],
    image: "/images/hr-dashboard.png",
    imageAlt: "HR Dashboard showing employee management and analytics",
    width: 1600,
    height: 874,
    liveUrl: "https://hr-dashboard-three-eta.vercel.app",
    codeUrl: "https://github.com/kunalshahdev/HR-Dashboard",
    featured: true,
    detail: {
      intro:
        "I wanted to build the kind of dense, data-heavy dashboard real companies use every day — so I made one for HR teams. Employee records, onboarding, leave requests, and analytics, all in one responsive app.",
      features: [
        "Employee records — add, edit, and look up anyone on the team",
        "Onboarding pipeline — follow new hires from offer letter to day one",
        "Leave management — requests, approvals, and balances in one view",
        "Analytics — charts that show what's actually happening across the team",
      ],
      builtWith: ["React 19", "Tailwind CSS", "Vite", "React Router"],
    },
  },
  {
    slug: "hotel-management-system",
    title: "Hotel Management System",
    tagline: "Full-stack booking system for rooms and reservations.",
    description:
      "A full-stack booking system. PHP backend with a MySQL database for managing rooms and reservations.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    image: "/images/hotel-management-system.png",
    imageAlt: "Hotel Management System interface for rooms and reservations",
    width: 1600,
    height: 628,
    codeUrl: "https://github.com/kunalshahdev/hotel-management-system",
    featured: true,
    detail: {
      intro:
        "My first real full-stack project — a hotel booking system with a PHP backend and a MySQL database. It's where I learned how the frontend and backend actually talk to each other: forms, validation, sessions, and relational data.",
      features: [
        "Room management — add rooms, set types and availability",
        "Reservations end to end — book, view, and manage bookings",
        "Relational data done right — rooms and reservations linked in MySQL",
      ],
      builtWith: ["PHP", "MySQL", "JavaScript"],
    },
  },
  {
    slug: "recipe-finder",
    title: "Recipe Finder",
    tagline: "Find a recipe from what's already in your kitchen.",
    description:
      "Search thousands of recipes by what's in your kitchen. Uses the Spoonacular API. Filter by diet, cuisine, or ingredient.",
    technologies: ["HTML", "CSS", "JavaScript", "REST API"],
    image: "/images/recipe-finder.jpg",
    imageAlt: "Recipe Finder search interface showing recipe results",
    width: 1440,
    height: 936,
    liveUrl: "https://recipe-finder-ashy.vercel.app",
    codeUrl: "https://github.com/kunalshahdev/recipe-finder",
    detail: {
      intro:
        "We've all stared into the fridge wondering what to cook. This app takes whatever ingredients you have and finds recipes you can actually make — live data from the Spoonacular API, with filters for diet and cuisine.",
      features: [
        "Cook with what you have — search by the ingredients in your kitchen",
        "Filter by diet and cuisine — vegetarian, vegan, Italian, whatever you're in the mood for",
        "Live data — results pulled fresh from the Spoonacular API",
      ],
      builtWith: ["HTML", "CSS", "JavaScript", "Spoonacular API"],
    },
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    tagline: "The site you're looking at right now.",
    description:
      "A portfolio designed and built from scratch to present my work — projects, process, and a way to get in touch. Rebuilt with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/portfolio.png",
    imageAlt: "Kunal Shah's personal portfolio website",
    width: 1600,
    height: 872,
    codeUrl: "https://github.com/kunalshahdev/kunalshah.dev",
    detail: {
      intro:
        "You're looking at it. I designed and built this site from scratch to present my work the way I want it seen — then rebuilt it in Next.js when I outgrew the first version. Every project gets its own case-study page, like this one.",
      features: [
        "Case-study pages — each project gets room to tell its story",
        "Dark mode — because of course",
        "Working contact form — messages go straight to my inbox",
        "Deploys itself — every push to main ships via Vercel",
      ],
      builtWith: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    tagline: "See where your money actually goes.",
    description:
      "Track what you earn and spend. Category breakdowns and charts to see where your money goes.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/expense-tracker.png",
    imageAlt: "Expense Tracker showing spending categories and charts",
    width: 1600,
    height: 1040,
    liveUrl: "https://expense-tracker-one-rho-46.vercel.app",
    codeUrl: "https://github.com/kunalshahdev/expense-tracker",
    detail: {
      intro:
        "A money tracker I built to get comfortable with state management and data visualization. Log what you earn and spend, then see exactly where it goes with category breakdowns and charts.",
      features: [
        "Quick logging — add income and expenses in seconds",
        "Category breakdowns — see spending by category at a glance",
        "Charts — visual summaries of where your money actually goes",
      ],
      builtWith: ["HTML", "CSS", "JavaScript"],
    },
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    tagline: "A simple list that saves itself.",
    description:
      "Add tasks, mark them done, stay organized. Everything saves to localStorage so you don't lose your list.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/task-manager.png",
    imageAlt: "Task Manager showing a list of tasks",
    width: 1600,
    height: 1040,
    liveUrl: "https://task-manager-ten-ashen.vercel.app",
    codeUrl: "https://github.com/kunalshahdev/task-manager",
    detail: {
      intro:
        "Everyone builds a todo app — I built one to really understand client-side persistence. Everything saves to localStorage, so your list survives refreshes, with zero backend and zero loading spinners.",
      features: [
        "The essentials, done well — add, complete, and delete tasks",
        "Persists in localStorage — your list is still there after a refresh",
        "No backend — everything runs in the browser",
      ],
      builtWith: ["HTML", "CSS", "JavaScript"],
    },
  },
  {
    slug: "weather-app",
    title: "Weather App",
    tagline: "Live weather, at a glance.",
    description:
      "Fetches live weather from a public API. Clean interface that changes with the conditions.",
    technologies: ["HTML", "CSS", "JavaScript", "REST API"],
    image: "/images/weather-app.png",
    imageAlt: "Weather app showing current conditions",
    width: 924,
    height: 818,
    liveUrl: "https://weather-app-blush-nine.vercel.app",
    codeUrl: "https://github.com/kunalshahdev/weather-app",
    detail: {
      intro:
        "A weather app I built to practice working with third-party APIs. Search any city, get live conditions, and watch the interface shift with the weather.",
      features: [
        "Live conditions — current weather from a public API",
        "Search any city — instant results as you type",
        "Adaptive interface — the design changes with the conditions",
      ],
      builtWith: ["HTML", "CSS", "JavaScript", "REST API"],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
