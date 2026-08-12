import Image from "next/image";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ArrowUpRightIcon } from "@/components/icons";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="03" label="Education" title="Studying what I love." />

      <Reveal>
        <ul className="divide-y divide-line border-y border-line">
          <li className="flex flex-col justify-between gap-3 py-8 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-ink-3">01</span>
              <div>
                <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  {site.education.degree}
                </h3>
                <p className="mt-1.5 text-sm text-ink-2">{site.education.school}</p>
              </div>
            </div>
            <span className="pl-8 font-mono text-xs text-ink-3 sm:pl-0">
              Class of {site.education.graduation}
            </span>
          </li>
        </ul>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8 grid items-center gap-8 md:grid-cols-[auto_1fr]">
          {site.certifications.map((cert) => (
            <div key={cert.title} className="grid items-center gap-6 sm:grid-cols-[auto_1fr] md:contents">
              <a
                href={cert.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-52 sm:w-60"
                aria-label={`View ${cert.title} certificate`}
              >
                <div className="relative overflow-hidden rounded-sm border border-line p-2">
                  <Image
                    src={cert.certificate}
                    alt={`${cert.title} certificate`}
                    width={1056}
                    height={816}
                    sizes="(min-width: 640px) 15rem, 13rem"
                    className="aspect-[1056/816] w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <span
                    className="absolute top-2 right-2 h-2.5 w-2.5 rounded-sm bg-accent"
                    aria-hidden="true"
                  />
                </div>
              </a>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-3">
                  Certification
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-2">
                  {cert.issuer} · {cert.date}
                </p>
                <a
                  href={cert.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-accent underline-offset-4 hover:underline"
                >
                  View certificate
                  <ArrowUpRightIcon className="size-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-8 text-sm leading-relaxed text-ink-2">
          {site.openTo} — currently {site.education.degree} at {site.education.school}.
        </p>
      </Reveal>
    </section>
  );
}
