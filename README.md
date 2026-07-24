# IOA Corporation website

First-draft corporate website for **Integrated Operations Architecture Inc.**, publicly presented as **IOA Corporation**.

The site is a focused, responsive corporate homepage built with Next.js, React, TypeScript, Tailwind CSS, and the Sites vinext runtime.

## Local development

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

Use `npm run build`, `npm run lint`, and `npm test` to validate the production build, code quality, and rendered homepage.

## Contact form configuration

The first-draft contact form is intentionally **not connected**. It validates the supplied fields in the browser, then clearly confirms that no information was transmitted or stored.

Before enabling production submissions:

1. Confirm the corporate contact address currently shown as `contact@ioacorporation.com`.
2. Add a secure server-side form endpoint or approved email service.
3. Keep service credentials server-side and out of the repository.
4. Add server-side validation, rate limiting or approved spam protection, consent handling, an appropriate retention policy, and clear success and failure responses.
5. Update the on-page disclosure only after the complete submission path has been tested.

Do not remove the current draft disclosure or present the form as operational until those steps are complete.

## Metadata and domain

Canonical, Open Graph, X card, sitemap, robots, favicon, and Organization structured data are configured for `https://ioacorporation.com`. The generated social card is stored at `public/og.png`.

## Deployment

Sites hosting settings live in `.openai/hosting.json`. The application emits a Cloudflare Worker-compatible vinext build under `dist/`.
