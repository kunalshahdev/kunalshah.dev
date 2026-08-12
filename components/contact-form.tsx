"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/kunalshah1172@gmail.com", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-sm border border-line bg-paper-2 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-3 transition-colors focus:border-accent focus:outline-none";

  if (status === "success") {
    return (
      <div className="flex h-full min-h-72 flex-col items-center justify-center rounded-sm border border-line px-8 text-center">
        <span className="mb-4 flex size-10 items-center justify-center rounded-full bg-accent-soft font-mono text-lg text-accent">
          ✓
        </span>
        <p className="font-display text-2xl font-medium tracking-tight">Message sent.</p>
        <p className="mt-2 max-w-xs text-sm text-ink-2">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="contactName" className="block text-xs font-medium uppercase tracking-wider text-ink-2">
            Name
          </label>
          <input
            id="contactName"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="contactEmail" className="block text-xs font-medium uppercase tracking-wider text-ink-2">
            Email
          </label>
          <input
            id="contactEmail"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contactSubject" className="block text-xs font-medium uppercase tracking-wider text-ink-2">
          Subject
        </label>
        <input id="contactSubject" name="subject" type="text" required placeholder="Subject" className={inputClass} />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contactMessage" className="block text-xs font-medium uppercase tracking-wider text-ink-2">
          Message
        </label>
        <textarea
          id="contactMessage"
          name="message"
          rows={5}
          required
          placeholder="Your message…"
          className={cn(inputClass, "resize-none")}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-accent">
          Something went wrong. Email me directly at{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-all hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
