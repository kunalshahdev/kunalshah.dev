import Image from "next/image";
import Link from "next/link";
import { site, socials } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { ArrowDownIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const socialIcons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: MailIcon,
} as const;

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 pt-36 pb-20 sm:px-8 sm:pt-44 sm:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div>
            <Reveal>
              <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-ink-2">
                <span
                  className="inline-block size-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                Web developer &amp; graphic designer — {site.location}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-8 font-display text-[clamp(3.25rem,10vw,6rem)] leading-[0.95] font-medium tracking-tight text-balance">
                Kunal Shah<span className="text-accent">.</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-xl font-display text-2xl leading-snug font-light text-ink-2 text-balance sm:text-3xl">
                I build websites and apps that are clean, functional, and made with care.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-all hover:translate-y-[-1px]"
                >
                  Get in touch
                </Link>
                <Link
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-sm border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink-3"
                >
                  View work
                </Link>
                <a
                  href={site.cv}
                  download
                  className="inline-flex items-center gap-2 px-3 py-3 text-sm font-medium text-ink-2 transition-colors hover:text-ink"
                >
                  Download CV
                  <ArrowDownIcon className="size-3.5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={210}>
              <p className="mt-8 flex items-center gap-2.5 font-mono text-xs text-ink-3">
                <span
                  className="inline-block size-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {site.openTo} — {site.education.degree} at {site.education.school} (
                {site.education.graduation})
              </p>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-10 flex items-center gap-6">
                {socials.map((social) => {
                  const Icon = socialIcons[social.label as keyof typeof socialIcons];
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 font-mono text-xs text-ink-2 transition-colors hover:text-ink"
                      >
                        <Icon className="size-4 text-ink-3 transition-colors group-hover:text-accent" />
                        {social.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:justify-self-end">
            <figure className="w-56 sm:w-64 lg:w-72">
              <div className="relative overflow-hidden rounded-sm border border-line p-2">
                <Image
                  src="/images/Kunal.jpg"
                  alt="Portrait of Kunal Shah"
                  width={896}
                  height={1195}
                  sizes="(min-width: 1024px) 18rem, 14rem"
                  className="aspect-[896/1195] w-full transition-transform duration-700 ease-out hover:scale-[1.02]"
                  priority
                />
                <span
                  className="absolute top-2 right-2 h-2.5 w-2.5 rounded-sm bg-accent"
                  aria-hidden="true"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between font-mono text-[0.7rem] text-ink-3">
                <span>profile — {site.location}</span>
                <span aria-hidden="true">/01</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
