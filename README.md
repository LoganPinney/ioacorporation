# IOA Corporation Website

Corporate website for Integrated Operations Advisory Inc., built with the Next.js App Router, React, TypeScript, and Tailwind CSS. The responsive design combines an operating-model diagram, service capabilities, engagement contexts, a four-stage approach, company information, and an email introduction form.

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
npm test
npm run build
```

## Deploy with Vercel

This repository is configured as a standard Next.js project. Vercel will run `npm ci` and `npm run build`, which creates the required `.next` output directory automatically.

When importing the repository into Vercel, select the Next.js framework preset and leave **Output Directory** blank. Pushes to the production branch then trigger deployments automatically.

## Contact form

The contact form validates the introduction and opens the visitor's email client with an encoded draft addressed to `contact@ioacorporation.com`. The visitor reviews and sends it themselves. The website does not send, persist, or claim to have delivered the message. A direct email link is available if no mail client is configured.

The confirmed public contact address is `contact@ioacorporation.com`. Keep it consistent in `lib/contact.ts`, `components/ContactForm.tsx`, and `app/page.tsx` if it changes in the future.

## Private review deployment

Set `IOA_STATIC_EXPORT=1` when running the build to create the `out/` directory for the private Sites preview. Normal Vercel builds retain their standard `.next` output. Existing social-preview assets and production canonical URLs are preserved.

## SEO basics

Site metadata is set in `app/layout.tsx`; the sitemap and robots rules are generated from `app/sitemap.ts` and `app/robots.ts`.
