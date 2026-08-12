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
        "A responsive admin dashboard for managing HR operations — employee records, onboarding, and leave all in one place, with analytics to see how things are going.",
      features: [
        "Employee management — add, edit, and view employee records",
        "Onboarding tracking — keep an eye on new hires through the process",
        "Leave management — request, review, and track leave",
        "Analytics — a dashboard view of what's happening across the team",
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
        "A full-stack booking system for hotels — manage rooms, take reservations, and keep everything stored in a MySQL database with a PHP backend.",
      features: [
        "Room management — create and manage available rooms",
        "Reservations — book and track bookings end to end",
        "MySQL-backed data — rooms and reservations stored in a relational database",
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
    featured: true,
    detail: {
      intro:
        "A recipe search app powered by the Spoonacular API. Type in what's in your kitchen and get recipes you can actually make with it.",
      features: [
        "Search by ingredient — find recipes from what you already have",
        "Filter by diet, cuisine, or ingredient",
        "Pulls live data from the Spoonacular API",
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
    codeUrl: "https://github.com/kunalshahdev/portfolio",
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
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
