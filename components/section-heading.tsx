import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  className?: string;
};

export function SectionHeading({ index, label, title, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-14 sm:mb-20", className)}>
      <div className="flex items-center gap-5">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          {index} / {label}
        </span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
      <h2 className="mt-7 font-display text-4xl font-medium tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
