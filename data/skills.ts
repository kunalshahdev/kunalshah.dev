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
      { name: "PHP" },
      { name: "MySQL" },
      { name: "UI/UX" },
    ],
  },
  {
    title: "Currently exploring",
    items: [
      {
        name: "React",
        note: "Building interactive UIs with reusable components and hooks.",
      },
      {
        name: "Next.js",
        note: "A full-stack React framework with routing and server rendering.",
      },
      {
        name: "TypeScript",
        note: "Type-safe JavaScript. Catches bugs early on bigger projects.",
      },
      {
        name: "Tailwind",
        note: "A utility-first CSS framework for building layouts faster.",
      },
    ],
  },
];

export const tools = ["Figma", "Vite", "Git", "React Router"];

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
