export type SkillGroup = {
  title: string;
  items: { name: string; note?: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Building with",
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      {
        name: "React",
        note: "Interactive UIs with reusable components and hooks.",
      },
      {
        name: "Next.js",
        note: "Full-stack React apps — routing, server rendering, API routes.",
      },
      {
        name: "TypeScript",
        note: "Type-safe JavaScript for bigger projects.",
      },
      {
        name: "Tailwind",
        note: "Utility-first styling for fast, responsive layouts.",
      },
      { name: "UI/UX" },
    ],
  },
  {
    title: "Also in the toolbox",
    items: [
      {
        name: "PHP",
        note: "Full-stack apps with MySQL backends.",
      },
      { name: "MySQL" },
      {
        name: "Supabase",
        note: "Postgres backend — auth, database, and storage.",
      },
      { name: "PostgreSQL" },
    ],
  },
];

export const tools = ["Figma", "Vite", "Git & GitHub", "React Router", "Supabase", "Playwright"];

export const services = [
  {
    title: "Web Development",
    glyph: "</>",
    description:
      "Custom websites and web apps that load fast, work reliably, and look good on any device.",
  },
  {
    title: "Graphic Design",
    glyph: "✦",
    description:
      "Logos, brand identity, social media graphics. Clean visuals that help your brand stand out.",
  },
  {
    title: "UI/UX Design",
    glyph: "◈",
    description:
      "Simple, intuitive interfaces designed for real people. Focused on usability, clarity, and making things easy to use.",
  },
] as const;