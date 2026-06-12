# GEO Audit Report: Kathy Clean Houston

**Audit Date:** 2026-06-12
**URL:** https://kathycleanhouston.com/
**Business Type:** Local Business (residential + commercial house cleaning, Houston TX / Harris County)
**Pages Analyzed:** ~12 (homepage, /house-cleaning-houston, service-area + programmatic pages, resource guides, /about-us, /llms.txt, /robots.txt, sitemap)
**Method:** Live fetch + 5 parallel category subagents (AI-visibility, platform, technical, content E-E-A-T, schema)

---

## Executive Summary

**Overall GEO Score: 59/100 (Poor — at the Fair boundary)**

Kathy Clean Houston has a **genuinely strong on-site GEO foundation** — exemplary AI-crawler access, a high-quality `llms.txt`, full server-side rendering, a rich schema graph (LocalBusiness/CleaningService + FAQPage + BreadcrumbList + Review + AggregateRating + ReserveAction), highly citable flat-rate pricing tables, and ~100 unique programmatic location pages. The score is dragged down almost entirely by **off-site brand authority (28/100)** — too few reviews and virtually no third-party citation mass (no Wikipedia/LinkedIn/BBB/Reddit/YouTube) — and **content E-E-A-T (56/100)**, where the absence of any named human (founder/author) caps entity quality. The most impactful technical issue is **mobile LCP of 8.9s**.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 74/100 | 25% | 18.5 |
| Brand Authority | 28/100 | 20% | 5.6 |
| Content E-E-A-T | 56/100 | 20% | 11.2 |
| Technical GEO | 71/100 | 15% | 10.65 |
| Schema & Structured Data | 74/100 | 10% | 7.4 |
| Platform Optimization | 59/100 | 10% | 5.9 |
| **Overall GEO Score** | | | **59/100** |

**The headline:** on-site work is largely done well; the ceiling is **off-site authority + a named human + LCP**. Off-site authority is owner-managed (reviews/listings); the rest is code-fixable.

---

## Critical Issues (Fix Immediately)

1. **Mobile LCP 8.9s** (Technical). Real PageSpeed field data: Performance 57, FCP 1.7s, **LCP 8.9s (Poor)**, TBT 580ms, CLS 0. On mobile the hero image is `hidden md:block` (not rendered), so LCP is **text delayed by main-thread JS** (251 KiB unused JS, 6 long tasks) — not the hero image. _Action:_ get the exact "LCP element" from PSI, then reduce/defer JS (further `optimizePackageImports`, lazy-load below-fold client components, map facade). Already shipped: `next/image` on location pages, `optimizePackageImports`, modern `browserslist`.

2. **Brand entity not corroborated off-site** (Brand Authority = 28). To AI models, Kathy Clean Houston exists almost only via its own site. No Wikipedia/Wikidata, no LinkedIn, no BBB, no Reddit, no YouTube, no earned press; Google reviews are few (schema says 15). AI "best cleaner in Houston" answers favor businesses with hundreds of cross-platform reviews + third-party references. _Owner-managed; see 30-day plan._

> Note: no truly "site-breaking" criticals (no blocked crawlers, no noindex, SSR is solid, schema is valid). The criticals above are ceiling-raisers, not outages.

---

## High Priority Issues (Fix Within 1 Week)

- **No named human anywhere** (E-E-A-T). About page has no founder/owner name or photo; resource bylines are "Kathy Clean Houston Team" (Organization, not Person). This caps Experience/Expertise/Authoritativeness across content + schema. The `organization()` builder already accepts a `founder` param that's never populated. _Needs owner: a real first name + title (+ photo/LinkedIn)._
- **Schema entity split** (Schema). Homepage emits `LocalBusiness @id #business`; `/about-us` emits a separate `Organization @id #organization` with no link between them → AI entity resolution sees two entities. _Fix: merge to one `@id`, or reference Organization → #business._
- **No price in schema** (Schema). The cost page publishes a full flat-rate table in prose, but `hasOfferCatalog` Offers carry no `price`/`priceSpecification`. AI "how much does it cost" queries can't extract structured prices. _Fix: add `Service` + `Offer` + `UnitPriceSpecification` (min/max per visit) on the cost page + `houseCleaning()` catalog._
- **`sameAs` is thin** (Schema/Platform). Only GBP (a `maps.app.goo.gl` shortlink), Yelp, Facebook, Instagram. Missing LinkedIn, BBB, YouTube, Wikidata. _Fix: create LinkedIn + BBB, add canonical GBP CID URL + new profiles to `SAME_AS_URLS`._
- **Bing not verified + no IndexNow** (Platform). No `msvalidate.01`, no IndexNow → Bing/Copilot index passively (new pages lag weeks). _Fix: Bing Webmaster verify + IndexNow key/ping on deploy._

---

## Medium Priority Issues (Fix Within 1 Month)

- **Main-page FAQ extractability** (Citability). The homepage + `/house-cleaning-houston` FAQ is a Radix accordion (client) — a non-JS fetch returned only question titles. The **FAQPage JSON-LD already carries the full Q&A** (so AI/Google can extract it), but the service-area pages' native `<details>` pattern is more robust. _Consider switching the main FAQ to native `<details>`._
- **Declarative H2s, not questions** (Platform/AIO). Service-page H2s ("Why … Households Choose…") aren't query-shaped. _Add 2–3 question-form H2s ("How much does house cleaning cost in Houston?", "Is Kathy Clean insured and bonded?") with a 40–60 word direct answer immediately under each._
- **`AggregateRating` reviewCount (15) vs 5 embedded** + **verify true count** (Schema/Brand). One subagent saw "214 via Trustindex" while schema/GBP say 15 — reconcile the real current Google count and sync the schema.
- **No external citations in resources** (E-E-A-T). Pricing/humidity claims are unsourced. _Add 1–2 authoritative outbound links per guide (e.g., NOAA for Houston humidity)._
- **`speakable` only on the cost page** (Schema). _Add to homepage + `/house-cleaning-houston`._
- **No HowTo schema** on the 3-step process (Schema/Platform).
- **Resource depth/cross-linking** (E-E-A-T). Two guides are ~650–700 words and self-promotional; Greater Heights (best page) doesn't link to the relevant humidity/mold guide. _Expand thin guides to 1,200–1,500 words; cross-link neighborhood ↔ resource._
- **Sitemap `lastmod` identical on all URLs** (Technical) — build timestamp, not content date.
- **No CSP header** (Technical/security) — add (report-only first).
- **No visible `dateModified` on service/landing pages** (Platform freshness).

---

## Low Priority Issues (Optimize When Possible)

- Title on `/house-cleaning-houston` ~76 chars (truncates in SERP) — trim to <60.
- `WebSite` schema has no `SearchAction` (optional for a small site).
- `openingHoursSpecification` uses plain day strings (valid in practice; schema.org prefers URL day values).
- `areaServed` Places are name-only (could add `PostalCode`/ZIP typing).
- Brand heading font name mismatch (`'allRoundGothic'` vs `"All Round Gothic"`) → brand font silently not loading (cosmetic).
- Add `llms-full.txt` with the full pricing table embedded.

> **Corrected subagent assumptions:** `/service-areas` **does** exist (real hub, in sitemap) — the "phantom breadcrumb 404" finding does **not** apply. The home hero image **already** has `priority` + responsive `sizes` (so the LCP fix is JS/main-thread, not the hero). `robots.txt` allows all major AI crawlers (verified live).

---

## Category Deep Dives

### AI Citability (74/100)
Strong. The flat-rate pricing table on `/resources/house-cleaning-cost-houston` is the single most AI-citable asset (self-contained, original, answers "how much does cleaning cost in Houston"). The cost-savings comparison and the "by the numbers" block on `/house-cleaning-houston` are highly quotable. `llms.txt` (incl. the AI-agent booking section) is excellent. Gaps: the main FAQ's answers live in a JS accordion (schema carries them, but native `<details>` would be safer), and testimonials lack citable specificity. Add `llms-full.txt` with the pricing table.

### Brand Authority (28/100) — the score's biggest drag
Near-zero earned third-party signal. Google reviews are few (verify exact count; schema=15), Yelp is thin, and BBB / Angi / Thumbtack / Reddit / Nextdoor / YouTube / LinkedIn / Wikipedia / local press are effectively absent. AI models that recommend local services lean on this exact corroboration layer. **Owner-managed** and the highest-leverage non-code work.

### Content E-E-A-T (56/100)
Trustworthiness is decent (HTTPS, insured/bonded/background-checked, 48-hr guarantee, honest scope limits like the mold→specialist referral). Experience/Expertise are weak: no named founder, no first-person story, organizational bylines, thin self-promotional guides, no external citations. The Greater Heights page is the standout (real ZIPs, sub-neighborhoods, landmarks, ~1,600w) — replicate that depth and cross-link it.

### Technical GEO (71/100)
Excellent SSR (all content + JSON-LD in raw HTML — AI crawlers see everything), exemplary robots.txt AI-crawler allowlist, high-quality llms.txt, HSTS + core security headers. Held back by **LCP 8.9s** and missing CSP + flat sitemap `lastmod`.

### Schema & Structured Data (74/100)
Broad, valid, server-rendered JSON-LD. GEO-critical types present (LocalBusiness, FAQPage, Breadcrumb, Review/AggregateRating, ReserveAction, Speakable on resources, Organization on About). Top gaps: `#business`/`#organization` entity split, no `price`/`Offer` schema despite published prices, thin `sameAs`, Organization `founder` never populated.

### Platform Optimization (59/100)
Best on **Google AI Overviews (67)** — FAQPage + native FAQ + answer-style cost content + GSC verified. Weakest on **ChatGPT (52)** and **Bing Copilot (55)** — no Wikipedia/LinkedIn entity, no Bing verification/IndexNow. **Gemini (62)** and **Perplexity (58)** gated by review volume + (Perplexity) zero Reddit presence.

---

## Quick Wins (Implement This Week — mostly code, I can do these)

1. **Merge the schema entity** (`#business` ⟷ `#organization`) so AI resolves one entity. _(code)_
2. **Add `Offer` + `UnitPriceSpecification` price schema** on the cost page + `houseCleaning()` catalog. High AI-citation value for "cost" queries. _(code)_
3. **Add `speakable` to home + `/house-cleaning-houston`**; add **HowTo** schema to the 3-step process. _(code)_
4. **Bing Webmaster verify (`msvalidate.01`) + IndexNow** on deploy. _(code + 15-min setup)_
5. **Add `llms-full.txt`** with the full pricing table + a `dateModified`/"Last updated" line on service pages. _(code)_

## 30-Day Action Plan

### Week 1 — Schema + crawl/index quick wins (code)
- [ ] Merge `#business`/`#organization`; add canonical GBP CID + (once live) LinkedIn/BBB to `sameAs`.
- [ ] Add `Offer`/`UnitPriceSpecification` price schema on the cost page + house-cleaning catalog.
- [ ] Add `speakable` (home + main landing) + `HowTo` (process) schema.
- [ ] Bing Webmaster verification + IndexNow; trim the `/house-cleaning-houston` title to <60 chars.

### Week 2 — Performance + freshness (code)
- [ ] Get the exact LCP element from PSI; reduce/defer main-thread JS (lazy-load below-fold client components, map facade); re-measure toward LCP <2.5s.
- [ ] Add CSP (report-only → enforce); fix sitemap per-page `lastmod`; add visible "Last updated" dates.
- [ ] Reconcile real Google review count → sync `AggregateRating`.

### Week 3 — Content E-E-A-T (code + owner input)
- [ ] Add a **named founder/owner** to About (name, photo, first-person paragraph, founding year) + populate Organization `founder` (Person) + switch resource `author` to a Person. **[needs owner]**
- [ ] Add 1–2 authoritative external citations per resource; expand the two thin guides; cross-link Greater Heights ↔ humidity/mold + cost.
- [ ] Add 2–3 question-form H2s + 40–60w answer blocks on `/house-cleaning-houston`.

### Week 4 — Off-site authority (owner-managed)
- [ ] Reviews push (post-service SMS/email → Google review link); target 50+.
- [ ] Create/claim LinkedIn, BBB (free TX), Angi, Thumbtack; add URLs to `sameAs`.
- [ ] Authentic Reddit (r/houston) presence; pitch one local-press placement (CultureMap/Chronicle "best cleaners" angle).
- [ ] (Optional) 2–3 short YouTube process videos; add channel to `sameAs`.

---

## Appendix: Pages Analyzed

| URL | Type | Notable GEO state |
|---|---|---|
| `/` | Home | LocalBusiness+WebSite+Review+AggregateRating+ReserveAction; reviews carousel |
| `/house-cleaning-houston` | Main service | LocalBusiness+FAQPage+Breadcrumb+Review; by-the-numbers; FAQ in JS accordion |
| `/service-areas/greater-heights` | Area hub | Breadcrumb+FAQPage+service schema; deepest content (~1,600w) |
| `/deep-cleaning-rice-military` | Programmatic | Breadcrumb+FAQPage+service schema; unique copy |
| `/recurring-house-cleaning-energy-corridor` | Programmatic | unique copy; resource links |
| `/resources/house-cleaning-cost-houston` | Resource | BlogPosting+Speakable+Breadcrumb; top citable asset (price table); no Offer schema |
| `/resources/best-house-cleaning-service-houston` | Resource | thin/self-promotional; no external citations |
| `/resources/humidity-mold-cleaning-houston` | Resource | best-written guide; unsourced climate claim |
| `/about-us` | Entity | Organization schema; **no named person** |
| `/llms.txt` | AI file | excellent; add llms-full.txt + pricing table |
| `/robots.txt` | Crawl | exemplary AI-crawler allowlist |
| `/sitemap.xml` | Crawl | ~146–181 URLs; identical `lastmod` |
