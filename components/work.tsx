import Image from "next/image";
import Link from "next/link";
import { featuredProjects, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs">
      {project.detail && (
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
  );
}

function FeaturedRow({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <article className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
        <div className={cn("md:col-span-7", reversed && "md:order-2")}>
          <Link
            href={project.detail ? `/projects/${project.slug}` : project.liveUrl ?? project.codeUrl ?? "#"}
            target={project.detail ? undefined : "_blank"}
            rel={project.detail ? undefined : "noopener noreferrer"}
            className="group block overflow-hidden rounded-sm border border-line bg-paper-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={project.width}
                height={project.height}
                sizes="(min-width: 768px) 58vw, 92vw"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </Link>
        </div>

        <div className={cn("md:col-span-5", reversed && "md:order-1")}>
          <p className="font-mono text-xs text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 text-sm text-ink-2 text-balance">{project.description}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-sm border border-line px-2.5 py-1 font-mono text-xs text-ink-2"
              >
                {tech}
              </li>
            ))}
          </ul>

          <ProjectLinks project={project} />
        </div>
      </article>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="01" label="Selected work" title="Work that ships." />
      <div className="space-y-20 sm:space-y-28">
        {featuredProjects.map((project, i) => (
          <FeaturedRow key={project.slug} project={project} index={i} />
        ))}
      </div>

      <Reveal className="mt-20 border-t border-line pt-8">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-3 font-display text-xl font-medium tracking-tight text-ink transition-colors hover:text-accent sm:text-2xl"
        >
          See all projects
          <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}
