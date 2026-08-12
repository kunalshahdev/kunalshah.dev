"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { CloseIcon, MenuIcon } from "@/components/icons";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5">
      <Image
        src="/images/nepal-flag.svg"
        alt="Flag of Nepal"
        width={16}
        height={20}
        className="h-5 w-auto"
      />
      <span className="font-display text-lg font-semibold tracking-tight">
        Kunal<span className="text-accent">.</span>
      </span>
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (href: string) =>
    cn(
      "rounded-sm px-3 py-1.5 text-sm text-ink-2 transition-colors hover:text-ink",
      isHome && active === href && "text-ink",
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex h-16 w-full max-w-5xl items-center justify-between border-b px-5 transition-colors duration-300 sm:px-8",
          scrolled ? "border-line bg-paper/90 backdrop-blur-sm" : "border-transparent bg-paper",
        )}
      >
        <Logo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={isHome ? link.href : `/${link.href}`} className={linkClass(link.href)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-sm border border-line text-ink-2 transition-colors hover:border-ink-3 hover:text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon className="size-4" /> : <MenuIcon className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 z-40 bg-paper md:hidden"
        >
          <nav aria-label="Mobile" className="px-6 pt-8">
            <ul className="flex flex-col divide-y divide-line">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-5"
                  >
                    <span className="font-mono text-xs text-ink-3">
                      {String(links.indexOf(link) + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-3xl font-medium tracking-tight">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${site.email}`}
              className="mt-10 inline-flex w-full items-center justify-between border-t border-line pt-6 text-sm text-ink-2"
            >
              <span>{site.email}</span>
              <span className="font-mono text-xs text-accent">↗</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
