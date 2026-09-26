# Yashwant Singh (Shibbli Singh) — Public Information Profile

An independent, source-backed public-information website. This is a
content-first project: the code exists to present verified facts clearly and
to make it obvious, at a glance, when a claim is **not** publicly verified.

## ⚠️ Read this before publishing

This project was scaffolded against a brief that named specific claimed
events — a Gram Pradhan record, a District Panchayat record, the 2017
Didarganj assembly election, and a 2019 SBSP Azamgarh Lok Sabha candidacy —
for "Yashwant Singh" / "Shibbli Singh."

**During research, no independent, reliable source could be found
confirming any of these events for this specific individual.** In
particular:

- The confirmed candidate list for the **2017 Didarganj assembly
  election** (won by Sukhdev Rajbhar, BSP, defeating Adil Sheikh, SP) does
  **not** include a candidate under this name.
- No ADR/MyNeta affidavit, SBSP party statement, or established news
  report tying this name to the **2019 Azamgarh Lok Sabha** race was
  located.
- No verified photograph, date of birth, education record, or family
  information was located.

Per the project's own content rule, every one of these claims is rendered
on the site as **"Not publicly verified"** rather than presented as fact —
see `lib/data/profile.ts`. Do not edit that file to assert these events
happened unless you attach a real, checkable source. If you have such
sources, add them to the `sources` array first, then reference their `id`
from the relevant timeline/election/biography entry — see "Updating
content" below.

## Tech stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS (no component kit; hand-built editorial design system)
- next/font (self-hosted Google Fonts: Newsreader + Inter)
- lucide-react icons
- No database — content lives in `lib/data/profile.ts`

## Project structure

```
app/
  layout.tsx              Root layout, fonts, global <head> metadata
  page.tsx                Home
  biography/page.tsx
  political-journey/page.tsx
  elections/page.tsx
  2019-azamgarh-lok-sabha/page.tsx
  news/page.tsx
  sources/page.tsx
  about/page.tsx
  contact/page.tsx
  sitemap.ts              Dynamic sitemap.xml
  robots.ts               Dynamic robots.txt
  not-found.tsx
  globals.css
components/
  Navbar.tsx, Footer.tsx, Hero.tsx, ProfileCard.tsx, Timeline.tsx,
  ElectionTable.tsx, SourceCard.tsx, NewsCard.tsx, Breadcrumbs.tsx,
  Citation.tsx, ImageGallery.tsx, CorrectionForm.tsx
lib/data/profile.ts        Single source of truth for all content
```

## Local setup

```bash
npm install
cp .env.example .env.local   # then edit NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run build       # production build
npm run start        # serve the production build locally
npm run lint          # ESLint
npm run typecheck      # tsc --noEmit
```

> Note: `next/font` fetches Newsreader and Inter from Google Fonts at build
> time and self-hosts them (no runtime request to Google, no layout
> shift). This requires network access to fonts.googleapis.com /
> fonts.gstatic.com during `npm run build` — normal in any standard CI or
> local environment, and always available on Vercel.

## Updating content (the important part)

All facts live in **`lib/data/profile.ts`**. To add or correct something:

1. Add an entry to the `sources` array first: the claim (in your own
   words), the publication, the date, the URL, and a category.
2. Reference that source's `id` from the relevant `timeline`, `elections`,
   or `biographySections` entry, and set its `status` /
   `status_type` to `VERIFICATION_STATUS.VERIFIED`.
3. Only mark something verified if you attached a real, checkable source
   in step 1. If you don't have one yet, leave the status as
   `VERIFICATION_STATUS.PENDING` — the UI will render it as "Not publicly
   verified" automatically.
4. For `/news`, add entries to `newsItems` as **short, original
   summaries** with a link to the original publication — never paste in
   the full article text.
5. Photographs: `profile.images.profilePhotoAvailable` is `false` and the
   UI renders a typographic placeholder instead of a photo. Only flip this
   to `true` and wire in a real `<Image>` once you have a verified,
   rights-cleared photograph with a documented source/license — see
   `components/ProfileCard.tsx`.

Because content and UI are separated, none of the above requires touching
any component file.

## SEO implementation notes

- Every route sets its own `title` / `description` / `alternates.canonical`
  via the Next.js Metadata API (see each `page.tsx`).
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` dynamically from the same route list — add a new route to
  both places if you add a new page.
- JSON-LD: `Person` schema on the homepage, `Article` schema on content
  pages, `BreadcrumbList` schema in `components/Breadcrumbs.tsx`. The
  `Person` schema intentionally omits `birthDate`, `birthPlace`,
  `jobTitle`, `affiliation`, and family-member properties — add them only
  once they're backed by a real source in `sources`.
- Update `siteMeta.baseUrl` in `lib/data/profile.ts` (or wire it to
  `process.env.NEXT_PUBLIC_SITE_URL`) to your real production domain
  before deploying — canonical URLs, Open Graph URLs, and the sitemap all
  derive from it.

## Accessibility & performance

- Semantic landmarks (`header`, `nav`, `main`, `footer`), heading hierarchy
  per page, visible focus rings, skip-to-content link.
- Election table has a `<caption>` and scoped `<th>` headers for screen
  readers.
- Fonts are loaded via `next/font` (no CLS, self-hosted, no third-party
  runtime request).
- No client-side JavaScript on any page except the contact form
  (`CorrectionForm.tsx`, a small client component).

## Security notes for the contact form

`components/CorrectionForm.tsx` currently logs submissions to the console
as a placeholder. Before going live:

1. Add a server-side API route (e.g. `app/api/contact/route.ts`) or wire a
   form backend (Resend, Formspree, etc.).
2. Re-validate and sanitize every field **server-side** — client-side
   checks in the form are a UX convenience, not a security boundary.
3. Keep any API keys in `.env.local` (see `.env.example`) and read them
   only in server code — never prefix a secret with `NEXT_PUBLIC_`.
4. The form already includes a hidden honeypot field
   (`company_website`) for basic bot filtering; consider adding a
   rate limit or CAPTCHA at the API route if spam becomes an issue.

## Deploying to Vercel

1. Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel: **New Project** → import the repository → framework preset
   auto-detects **Next.js** → no extra build settings needed.
3. Add environment variables under **Project Settings → Environment
   Variables**: `NEXT_PUBLIC_SITE_URL` set to your production domain (and
   any contact-form provider keys, if you wired one in).
4. Deploy. Vercel builds with `npm run build` and serves the app
   automatically, including `/sitemap.xml` and `/robots.txt`.
5. After the first deploy, update `siteMeta.baseUrl` (or the
   `NEXT_PUBLIC_SITE_URL` env var it reads from) to match the real
   domain, then redeploy so canonical URLs and JSON-LD are correct.
6. Submit `https://your-domain/sitemap.xml` in Google Search Console.

## License / content responsibility

This codebase is provided as-is. The people who maintain the live content
are responsible for keeping every claim traceable to a real source and for
promptly correcting anything flagged through the `/contact` form.
