@AGENTS.md

# Internet Cable TV Offers — Project Architecture

> Single source of truth for how this website is built. Read this before changing anything.

## 1. Project brief

| Item | Decision |
|---|---|
| **Brand** | Internet Cable TV Offers (the main website — all footer rights, copy and descriptions belong to this brand) |
| **Reference** | broadbandsearch.net — used for *structure and topic coverage only*. All copy is original. |
| **Goal** | A clean, modern, professional and "crispy" internet & TV comparison site that is SEO + GEO (Generative Engine Optimization) ready. |
| **Theme** | Blue & white, professional, clean, unique. Primary `#1d4ed8` family, deep navy `#0b1b3f`, white surfaces, soft sky tints. |
| **Out of scope (for now)** | State / city / location pages. Do **not** add location pages until asked. |
| **Deploy** | GitHub `victoriousvijay/internetcabletvoffer` → Vercel. |

## 2. Page map

```
/                                   Home — "Internet Cable TV Offers"
/internet-providers                 Internet Providers hub (compare all providers)
/internet/fiber                     Fiber Internet
/internet/5g-home-internet          5G Home Internet
/internet/cable                     Cable Internet
/internet/dsl                       DSL Internet
/internet/fixed-wireless            Fixed Wireless Internet
/internet/satellite                 Satellite Internet
/internet/no-contract               No-Contract Internet Plans
/providers/[slug]                   Provider landing pages:
    att · earthlink · spectrum · kinetic · brightspeed · verizon · frontier · hughesnet · optimum
/faqs                               FAQs
/about                              About us
/contact                            Contact
/privacy-policy                     Privacy Policy
/terms-and-conditions               Terms & Conditions
/disclaimer                         Advertising & trademark disclosure
/sitemap.xml  /robots.txt  /llms.txt
```

## 3. Tech stack

- **Next.js 16 (App Router, TypeScript)** — static generation for every page (`generateStaticParams`). Note: `params` is a **Promise** in Next 16 — always `await params`.
- **Tailwind CSS v4** — design tokens declared in `src/app/globals.css` under `@theme`.
- **motion** (`motion/react`) — scroll reveals, navbar sliding pill, mega-menu, mobile drawer, page transitions.
- **lucide-react** — icons.
- **next/image** — remote images from `images.unsplash.com` (configured in `next.config.ts`).

## 4. Folder structure

```
src/
  app/
    layout.tsx               Root layout: fonts, Navbar, Footer, global JSON-LD, mobile CTA bar
    template.tsx             Page-transition wrapper (fade/slide on route change)
    page.tsx                 Home
    internet-providers/      Providers hub
    internet/[type]/         Internet-type pages (data driven)
    providers/[slug]/        Provider landing pages (data driven)
    faqs/ about/ contact/ privacy-policy/ terms-and-conditions/ disclaimer/
    sitemap.ts robots.ts not-found.tsx
  components/
    layout/                  Navbar, MobileMenu, Footer, MobileCtaBar
    ui/                      Reveal, SectionHeading, FAQ accordion, Breadcrumbs, ZipSearch, badges…
    sections/                Reusable page sections (Hero, ProviderGrid, CompareTable, TypeGrid, CTA…)
    seo/JsonLd.tsx           Structured data helper
  data/
    providers.ts             9 providers: logo, blurb, loader colors, plans, pros/cons, features, ratings, FAQs, images
    internetTypes.ts         7 internet types: summary, how it works, pros/cons, speeds, FAQs
    faqs.ts                  General FAQs
  lib/
    site.ts                  Brand name, URL, nav, footer links, disclaimer text
```

**Rule:** content lives in `src/data/*`. Pages are templates. To add a provider or internet type, add an entry to the data file — the route, sitemap, nav and JSON-LD update automatically.

## 5. SEO + GEO rules

**SEO**
- Every page exports `metadata` / `generateMetadata` with unique `title`, `description`, `alternates.canonical`, Open Graph and Twitter tags.
- One `<h1>` per page, logical `h2/h3` hierarchy, descriptive alt text on every image.
- JSON-LD: `Organization` + `WebSite` (global), `BreadcrumbList` (every inner page), `FAQPage` (pages with FAQs), `ItemList` (hub pages), `Service`/`Offer` data on provider pages.
- Auto `sitemap.xml` and `robots.txt`; internal linking between types ↔ providers ↔ hubs.

**GEO (AI answer engines)**
- Every inner page opens with a **"Quick answer"** box: 2–3 factual sentences that directly answer the page's core query.
- **Key facts** lists (speed range, price range, contract, data caps) in scannable, quotable form.
- Question-style H2s ("Is fiber internet worth it?") that mirror how people ask AI assistants.
- "Last reviewed" date on data pages; clear entity naming (provider, technology, speed units).
- `/llms.txt` summarises the site for LLM crawlers.

## 6. Design system

- **Colors:** `brand-50…950` blue scale, `navy` for dark sections, white cards with `ring-1 ring-slate-200/70`, soft shadows (`shadow-card`).
- **Type:** Plus Jakarta Sans (headings + body). Tight tracking on headings, generous line-height on body.
- **Radius:** 2xl/3xl cards, full-round buttons and pills.
- **Motion:** content reveals on scroll (fade + 24px rise, staggered), hover lift on cards, spring mobile drawer with staggered links, page-transition fade. Respect `prefers-reduced-motion`.
- **Navbar:** floating white bar; center "rail" (slate pill track) with a white sliding pill that follows hover/active item; dropdowns anchored under their item (icon rows for Internet, logo grid for Providers, list for Company); shimmer CTA; scroll-progress line along the bottom edge.
- **Home hero:** deep-blue layered background (`HeroBackground.tsx`): gradient mesh, drifting aurora blobs, masked grid, pulsing signal rings, animated fiber light streaks, twinkles, curved edge into the page. No "deals updated" label.
- **Page loader:** 3D assembling-boxes loader (`components/layout/PageLoader.tsx`, CSS in `globals.css`). Shows on first load and on internal navigation. Color = site blue on home / internet-type / other pages; on `/providers/[slug]` it uses that provider's `loader.primary/light` from `providers.ts` (e.g. EarthLink orange, Verizon black).
- **Provider cards** (`sections/ProviderCard.tsx`): profile-style hover card. Brand-gradient band on top, logo inside a white circle, name + 2–5 word `blurb` + types/top speed, "View plans" button. On hover the band floods the card, the logo circle scales up and slides to the top-left corner, text lifts. No pricing on cards.
- **No pill "eyebrow" labels** above headings anywhere — headings stand alone.
- **Per-page themes** (`src/data/themes.ts`): every provider page and internet-type page has its own palette (`acc`, `acc2`, `ink`, `soft`, `onAcc`, optional `accText`), hero background, hero layout (`split | centered | immersive | editorial`), plans layout (`cards | rows`), features layout (`bento | list`), decorative motif and section order. The page wrapper sets CSS vars (`--acc`, `--acc-2`, `--acc-ink`, `--acc-soft`, `--on-acc`, `--acc-text`); shared components use the matching Tailwind colors (`bg-acc`, `text-acc-ink`, `text-acc-text`…), so they pick up the page theme automatically and default to site blue elsewhere.
- **Provider pages are self-contained:** nothing about other providers (no alternatives section; the ZIP search stays on the page via `<ZipSearch provider=…>`). Only the global navbar lists other providers.
- **Themed components:** `components/themed/ThemedHero.tsx` (4 hero layouts), `Motif.tsx` (brand patterns), `ProviderSections.tsx` (Plans, Features, Ratings, TV).
- **Mobile specifics:** themed sticky bottom bar (`MobileCtaBar`) with page-specific actions/colors; plan cards become a swipeable snap carousel; plan rows stack; big line-art motifs hidden below `lg`; `.grid > * { min-width: 0 }` and `overflow-x: clip` on html/body so nothing ever scrolls sideways. Test at 360px width.
- **Home sections:**
  - Stats = mac-window tiles (`sections/StatCards.tsx`): dark navy card, traffic-light dots, big number, blue on hover; 2×2 on phones.
  - Internet types = accordion gallery (`sections/AccordionGallery.tsx`, used by `TypeGrid`): hover-expands to 52% on desktop (defaultIndex 2), vertical tap-to-open stack on phones.
  - Speed guide = stepper quiz (`ui/Stepper.tsx` + `sections/SpeedGuide.tsx`): household → activities → devices → recommendation; final button goes to the matching internet-type page.
  - "Three simple steps" = scroll-driven timeline (`sections/ScrollSteps.tsx`, art in `StepIllustrations.tsx`): center line fills on scroll, steps alternate sides with keywords opposite; phones show line on the left with illustration + headline only.
- **Mobile menu:** all accordions start closed.
- **Photos:** never use photos showing third-party brands (TV UIs, gaming logos) on provider pages.
- **Images:** relevant photography (Unsplash) on every major section — never a wall of text. Keep paragraphs short; prefer cards, icons, stats, tables.
- **Mobile:** dedicated layout — hamburger → full-height drawer with accordions, sticky bottom CTA bar, horizontally scrollable tables, 16px gutters, touch targets ≥ 44px.

## 7. Legal / compliance

- The site is an **independent comparison site**. Provider names, logos and trademarks belong to their owners and are shown for identification only.
- Provider logos live in `public/logos/*.png` (sourced from the reference site). **Never use logo variants that say "Authorized Retailer / Reseller / Agent"** — we are not an authorized reseller, so those taglines were cropped off. Keep it that way for any new logo.
- Every data page shows the pricing disclaimer from `site.ts` ("representative starting rates… confirm with provider").
- Footer: © Internet Cable TV Offers, disclosure, legal links.

## 8. Commands

```bash
npm run dev      # local dev at http://localhost:3000
npm run build    # production build (must pass before pushing)
npm run lint
```

## 9. Deployment

1. Push `main` to `https://github.com/victoriousvijay/internetcabletvoffer`.
2. Vercel project imports the repo (framework preset: Next.js, no env vars required).
3. Optional env `NEXT_PUBLIC_SITE_URL` sets the canonical domain (defaults to the value in `src/lib/site.ts`).
