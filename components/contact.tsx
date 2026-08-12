import { site } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: MailIcon,
  },
  {
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    icon: PhoneIcon,
  },
  {
    label: "LinkedIn",
    value: "Kunal Raj Shah",
    href: site.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: site.githubHandle,
    href: site.github,
    icon: GitHubIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="06" label="Contact" title="Let's build something that works." />

      <Reveal>
        <p className="max-w-xl text-lg leading-relaxed text-ink-2">
          Got a project in mind or just want to say hi? I&apos;d love to hear from you.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal delay={80}>
          <ul className="divide-y divide-line border-y border-line">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span className="flex items-center gap-4">
                      <Icon className="size-4 shrink-0 text-ink-3 transition-colors group-hover:text-accent" />
                      <span>
                        <span className="block font-mono text-xs tracking-wide text-ink-3 uppercase">
                          {channel.label}
                        </span>
                        <span className="block text-sm font-medium text-ink">{channel.value}</span>
                      </span>
                    </span>
                    <ArrowUpRightIcon className="size-4 text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
