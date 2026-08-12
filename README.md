# Kunal Shah — Portfolio

Personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Stack

- Next.js 16 — App Router, Server Components, generated OG images
- TypeScript
- Tailwind CSS v4
- `next/font` (self-hosted Fraunces / Inter / JetBrains Mono)

## Structure

```
app/            routes, layouts, metadata, OG/Twitter images, favicon
components/     UI components (server by default, client only where needed)
data/           content — site, projects, skills
lib/            utils + shared OG image renderer
public/images/  screenshots, profile photo, CV, Nepal flag
```

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build
npm start        # serve production build
npm run lint     # eslint
```

## Content

All projects, links, contact details, skills, and copy come from the original
portfolio. No metrics or achievements were invented during the redesign.

## Deploy

Auto-deploys to Vercel from `main` (project: `portfolio`).
