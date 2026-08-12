import { about, site } from "@/data/site";
import { tools } from "@/data/skills";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="02" label="About" title="From Kathmandu, building for the web." />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-ink-2">
            {about.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-ink" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={100}>
            <dl className="grid grid-cols-3 divide-x divide-line border-y border-line">
              {site.stats.map((stat) => (
                <div key={stat.label} className="px-4 py-6 first:pl-0">
                  <dd className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-2 font-mono text-[0.7rem] tracking-wide text-ink-3 uppercase">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={160}>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-3">
                In my toolbox
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-sm border border-line px-3 py-1.5 font-mono text-xs text-ink-2"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
