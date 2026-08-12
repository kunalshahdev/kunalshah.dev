import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";
import { ArrowUpRightIcon } from "@/components/icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.filter((p) => p.detail).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.detail) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "website",
      url: `${site.url}/projects/${project.slug}`,
      title: `${project.title} — ${site.name}`,
      description: project.description,
      images: [{ url: project.image, width: project.width, height: project.height }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.detail) notFound();

  const currentIndex = projects.indexOf(project);
  const next = projects.filter((p) => p.detail).find((p) => p.slug !== project.slug);

  return (
    <article className="mx-auto max-w-5xl px-5 pt-36 pb-24 sm:px-8 sm:pt-44 sm:pb-32">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 font-mono text-xs text-ink-3 transition-colors hover:text-ink"
      >
        ← All projects
      </Link>

      <header className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {String(currentIndex + 1).padStart(2, "0")} / Case study
          </p>
          <h1 className="mt-5 font-display text-4xl font-medium tracking-tight text-balance sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">{project.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper transition-all hover:translate-y-[-1px]"
            >
              Visit live site
              <ArrowUpRightIcon className="size-4" />
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink-3"
            >
              View code
              <ArrowUpRightIcon className="size-4" />
            </a>
          )}
        </div>
      </header>

      <div className="relative mt-14 overflow-hidden rounded-sm border border-line bg-paper-2">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={project.width}
          height={project.height}
          sizes="100vw"
          className="h-auto w-full"
          priority
        />
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-ink-3">
            What it does
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink">{project.detail.intro}</p>
        </section>

        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-ink-3">
            Key features
          </h2>
          <ul className="mt-5 space-y-3">
            {project.detail.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-14 border-t border-line pt-8">
        <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-ink-3">Built with</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.detail.builtWith.map((tech) => (
            <li
              key={tech}
              className="rounded-sm border border-line px-3 py-1.5 font-mono text-xs text-ink-2"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {next && (
        <nav className="mt-20 border-t border-line pt-8">
          <Link
            href={`/projects/${next.slug}`}
            className="group inline-flex flex-col gap-1 transition-colors hover:text-accent"
          >
            <span className="font-mono text-xs text-ink-3">Next project</span>
            <span className="font-display text-3xl font-medium tracking-tight">
              {next.title}
              <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </nav>
      )}
    </article>
  );
}
