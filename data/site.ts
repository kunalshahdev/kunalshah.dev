export const site = {
  name: "Kunal Shah",
  role: "Web Developer & Graphic Designer",
  location: "Kathmandu, Nepal",
  email: "kunalshah1172@gmail.com",
  phone: "+977-9811724567",
  phoneHref: "tel:+9779811724567",
  github: "https://github.com/kunalshahdev",
  githubHandle: "kunalshahdev",
  linkedin: "https://www.linkedin.com/in/kunal-raj-shah-670183382/",
  cv: "/images/Kunal_Shah_CV.pdf",
  url: "https://www.kunalshah.dev",
  available: true,
  openTo: "Open to internships",
  education: {
    degree: "Bachelor of Computer Application",
    school: "Nepal Mega College",
    graduation: "2027",
  },
  certifications: [
    {
      title: "KODERS 30-Day Summer Bootcamp",
      issuer: "Koders",
      date: "June 2026",
      certificate: "/images/bootcamp-certificate.jpeg",
    },
  ],
  description:
    "I'm Kunal Shah, a web developer and graphic designer from Kathmandu, Nepal. I build websites, apps, and interfaces that are clean, fast, and actually work — two years of building for the web, still learning with every project.",
  stats: [
    { value: "2+", label: "Years building" },
    { value: "7", label: "Projects built" },
    { value: "8", label: "Technologies used" },
  ],
} as const;

export const about = [
  "I'm a web developer and graphic designer from Kathmandu, Nepal. I like building things for the web, frontend or backend, whatever it takes to make something that works and looks good.",
  "I've been at it for about two years, and I'm still learning something new with every project. These days I'm getting into React and enjoying how it changes the way I build interfaces. When I'm not coding, I'm probably designing in Figma or trying out some new tool I found.",
];

export const socials = [
  { label: "GitHub", href: site.github, handle: site.githubHandle },
  { label: "LinkedIn", href: site.linkedin, handle: "Kunal Raj Shah" },
  { label: "Email", href: `mailto:${site.email}`, handle: site.email },
] as const;
