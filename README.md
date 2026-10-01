# IOA Corporation Website

Corporate website for Integrated Operations Advisory Inc., built with Next.js, React, TypeScript and Tailwind CSS. The site describes operational architecture, implementation and governance, introduces a scoped operational diagnostic, and provides direct email contact.

## Run locally

Use Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Verify changes

```bash
npm run lint
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:browser
```

Asset tests validate the social preview dimensions and bundled font. Browser checks start the production server on `127.0.0.1:3100`, verify navigation at 1440, 820, 768, 390 and 320 pixels, check the enterprise systems section and absence of unpublished case studies, check the diagnostic and contact path, exercise copying the email address and its unavailable-clipboard fallback, verify motion controls, and check social metadata and local font delivery. They do not send email. Screenshots and server output are saved in `work/browser-checks/`; the server stops when the checks finish.

GitHub Actions runs lint, type checking, asset tests, a package audit, the production build and Chromium browser checks on pull requests and pushes to `main`. The workflow needs no credentials beyond read access to the repository. Configure required checks in repository settings if merge enforcement is desired.

## Contact

The confirmed public contact address is `contact@ioacorporation.com`. It is defined once in `lib/company.ts` and reused by the visible contact links and organization metadata.

Contact uses a standard email link with a subject and an optional copy-address button. It opens the visitor's email app; the visitor writes, reviews and sends their own introduction. There is no website submission form, message storage or delivery claim. If copying is unavailable, the address remains selectable and the email link remains usable.

## Initial engagement and credibility

The operational diagnostic describes the proposed scope, client involvement, deliverables and subsequent implementation decision. Timing and fees are agreed before work begins; the site does not promise fixed duration or quantified results.

For this release, credibility is established through positioning, methodology, capabilities and technical depth. The enterprise systems section describes operational architecture, workflow engineering, integration, internal tools, automation, governance, data architecture and decision systems. Selected engagements and implementation details are confidential. Individual profiles, client identities, project details, testimonials and case studies are omitted.

`components/EnterpriseSystems.tsx` renders the capability section independently of client evidence. It accepts optional verified case studies using the `PublishedCaseStudy` type in `lib/enterprise-systems.ts`, reusing the same responsive card layout when approved content is supplied. No case-study data is currently supplied or stored, and no empty case-study section appears on the site. Publication rules are in `docs/credibility-content.md`. Operational problems are engagement contexts; the outcomes panel describes design objectives rather than reported client results.

## Deploy with Vercel

Select the Next.js framework preset and leave **Output Directory** blank. Vercel uses `npm ci` and `npm run build` to create `.next`. Pushes to the connected production branch trigger deployments.

Set `IOA_STATIC_EXPORT=1` only for a private Sites preview; this produces `out/`. Production builds retain the standard Next.js output. Do not set this variable on the normal Vercel deployment.

## Fonts and social previews

Geist's Latin variable font is bundled in `public/fonts/` with its SIL Open Font License. `next/font/local` serves it without a build-time request to Google Fonts. The font was preserved from the site's existing Next.js font assets.

Both social-image tags use the 1200 × 630 PNG at `/og-ioa.png`, exported from the retained SVG source. Canonical metadata, organization metadata, sitemap and robots rules use `https://ioacorporation.com`. Validate live sharing previews after deployment; local checks verify the tags, file and response type.
