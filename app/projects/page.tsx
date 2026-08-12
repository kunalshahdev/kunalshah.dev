import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of projects by Kunal Shah — dashboards, booking systems, and web apps built with React, PHP, and JavaScript.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-36 pb-24 sm:px-8 sm:pt-44 sm:pb-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Index</p>
        <h1 className="mt-6 font-display text-4xl font-medium tracking-tight text-balance sm:text-6xl">
          All projects.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
          Seven things I&apos;ve built and shipped — from a full-stack booking system to a live
          recipe search app.
        </p>
      </Reveal>

      <div className="mt-16">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i % 2 === 0 ? 0 : 60}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
