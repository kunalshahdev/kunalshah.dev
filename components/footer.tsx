import Image from "next/image";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <p className="flex items-center gap-2 font-mono text-xs text-ink-3">
          <Image
            src="/images/nepal-flag.svg"
            alt="Flag of Nepal"
            width={11}
            height={14}
            className="h-3.5 w-auto"
          />
          © {year} {site.name} — designed &amp; built in {site.location}
        </p>

        <div className="flex items-center gap-5">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-3 transition-colors hover:text-ink"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-3 transition-colors hover:text-ink"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-ink-3 transition-colors hover:text-ink"
          >
            <span className="font-mono text-xs">email</span>
          </a>
          <a
            href="#top"
            className="font-mono text-xs text-ink-3 transition-colors hover:text-ink"
          >
            back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
