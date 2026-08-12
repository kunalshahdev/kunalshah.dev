import Link from "next/link";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-start justify-center px-5 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">404</p>
      <h1 className="mt-6 font-display text-4xl font-medium tracking-tight text-balance sm:text-6xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-2">
        The link might be old, or the page moved. Head back home or get in touch.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-all hover:translate-y-[-1px]"
        >
          Back home
        </Link>
        <a
          href={`mailto:${site.email}`}
          className="rounded-sm border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink-3"
        >
          Email me
        </a>
      </div>
    </div>
  );
}
