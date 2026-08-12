import Link from "next/link";
import { services } from "@/data/skills";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ArrowRightIcon } from "@/components/icons";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="05" label="Services" title="How I can help." />

      <Reveal>
        <ul className="divide-y divide-line border-y border-line">
          {services.map((service, i) => (
            <li key={service.title}>
              <Link
                href="#contact"
                className="group grid items-center gap-4 py-9 sm:grid-cols-[auto_1fr_auto] sm:gap-8"
              >
                <span className="flex size-11 items-center justify-center rounded-sm border border-line font-mono text-sm text-accent">
                  {service.glyph}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-2">
                    {service.description}
                  </p>
                </div>
                <span className="hidden items-center gap-2 font-mono text-xs text-ink-3 transition-colors group-hover:text-accent sm:inline-flex">
                  {String(i + 1).padStart(2, "0")}
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
