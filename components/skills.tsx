import { skillGroups, tools } from "@/data/skills";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Skills() {
  const [building, exploring] = skillGroups;

  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="04" label="Skills" title="What I build with." />

      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-ink-3">
              {building.title}
            </h3>
            <ul className="mt-7 grid grid-cols-2 gap-x-8">
              {building.items.map((item, i) => (
                <li key={item.name} className="border-b border-line py-5">
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-ink-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl font-medium tracking-tight">
                      {item.name}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-ink-3">
              {exploring.title}
            </h3>
            <ul className="mt-7 divide-y divide-line border-y border-line">
              {exploring.items.map((item) => (
                <li key={item.name} className="py-5">
                  <span className="font-display text-2xl font-medium tracking-tight">
                    {item.name}
                  </span>
                  {item.note && (
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-2">{item.note}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-3">
          Also reaching for
        </p>
        <p className="mt-3 font-mono text-sm text-ink-2">{tools.join(" · ")}</p>
      </Reveal>
    </section>
  );
}
