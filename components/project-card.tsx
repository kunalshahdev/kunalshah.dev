import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/data/projects";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasDetail = Boolean(project.detail);
  const cardHref = hasDetail
    ? `/projects/${project.slug}`
    : project.liveUrl ?? project.codeUrl ?? "#";
  const external = !hasDetail;

  return (
    <article className="grid gap-6 border-b border-line py-10 first:border-t sm:grid-cols-12 sm:items-center sm:gap-8">
      <Link
        href={cardHref}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group block overflow-hidden rounded-sm border border-line bg-paper-2 sm:col-span-4"
        aria-label={`${project.title}${hasDetail ? " — view case study" : " — open project"}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={project.width}
            height={project.height}
            sizes="(min-width: 640px) 32vw, 92vw"
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div className="sm:col-span-8">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
          <p className="hidden font-mono text-xs text-ink-3 sm:block">
            {project.technologies.join(" · ")}
          </p>
        </div>

        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
          {hasDetail ? (
            <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-accent">
              {project.title}
            </Link>
          ) : (
            <a
              href={project.liveUrl ?? project.codeUrl ?? "#"}
              target={project.liveUrl ? "_blank" : undefined}
              rel={project.liveUrl ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-accent"
            >
              {project.title}
            </a>
          )}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-2 text-balance">{project.description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs">
          {hasDetail && (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-accent underline-offset-4 hover:underline"
            >
              Case study
              <ArrowRightIcon className="size-3.5" />
            </Link>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-2 underline-offset-4 hover:text-ink hover:underline"
            >
              Live
              <ArrowUpRightIcon className="size-3.5" />
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-2 underline-offset-4 hover:text-ink hover:underline"
            >
              Code
              <ArrowUpRightIcon className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
