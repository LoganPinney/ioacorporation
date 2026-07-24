# IOA Corporation Website

First-draft corporate website for IOA Corporation, built with the Next.js App Router, React, TypeScript, and Tailwind CSS.

## Run locally

Use Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Validate a production build

```bash
npm run lint
npm run build
```

## Deploy with Vercel

This repository is configured as a standard Next.js project. Vercel will run `npm ci` and `npm run build`, which creates the required `.next` output directory automatically.

When importing the repository into Vercel, select the Next.js framework preset and leave **Output Directory** blank. Pushes to the production branch then trigger deployments automatically.

## Contact form

The contact form currently opens the visitor's email client with the message addressed to `hello@ioacorporation.com`. Replace that address in `app/page.tsx` when the final company inbox is ready.

## SEO basics

Site metadata is set in `app/layout.tsx`; the sitemap and robots rules are generated from `app/sitemap.ts` and `app/robots.ts`.
