# SEO/GEO Plan — Kathy Clean Houston (Q3 2026, 60–90 days)

_Created 2026-06-12. Phase 0 discovery based on: code audit of `kathycleanhouston` + Denver reference repo `kathy-clean-denver`, PostHog (project 253131 "KC Houston", live), Local Falcon (GBP), Google web search (competitors). **GSC pull pending a Chrome session** (see Notes)._

---

## Premise

Houston is **not** Denver's problem in miniature — it's an **earlier-stage, different** problem.

- Denver's bottleneck was **405 near-template programmatic pages Google won't index** → the fix there was *consolidate, don't publish*.
- Houston has **no programmatic engine at all**: 21 hand-written service-area pages (mostly genuinely unique — **not** doorway pages), 2 service pages, 6 resource pages. They are reasonable quality but **earn almost no organic traffic** (~80 organic sessions in 90 days, 66% landing on the homepage).

Houston's real bottlenecks are **off-site, not on-page**:
1. **Reviews:** 15 Google reviews vs. competitors with 100s–800s. This alone caps the local pack.
2. **Entity authority:** thin/zero presence on the sources LLMs and the local pack trust (Yelp, BBB, Angi, Reddit, Apple).
3. **Schema gaps:** no `FAQPage`, no `Organization`+`Person` (About-as-entity), no `ReserveAction` — the exact signals AI engines cite.
4. **Content depth:** the one resource page that exists (`house-cleaning-cost-houston`) is *already the #1 organic content entry* — proof that resource/pricing content is the winning vector, and we have almost none of it.

So the play is **replication of Denver's proven systems** (tiered sitemap, full schema graph incl. About-as-entity + FAQPage + ReserveAction, the `llms.txt` "Booking & Contact for AI Agents" section, and the content-uniqueness data layer) **+ a heavy off-site authority + reviews push.**

**Owner directive (2026-06-12): be aggressive on page creation — both locations and resources — to move organic hard.** We reconcile this with Denver's hard-won lesson as follows: Denver's failure was **template-swapped** pages, *not* page volume per se. The fix is to **scale aggressively *through the uniqueness engine*** — `location-profiles.ts` + `service-content/*` builders generate genuinely unique, fact-grounded copy per page, so volume ≠ thin. We clone Denver's `[slug]/page.tsx` programmatic engine adapted to **Harris-County neighborhoods** (owner's geographic focus — Harris covers ~all of Houston), and expand resources heavily (the cost guide is already the #1 organic content entry → resource depth is the proven vector). Every new page must clear the uniqueness bar before it ships.

---

## Baseline

### Live traffic & conversion — PostHog (project 253131, trailing 90 days, host `kathycleanhouston.com`)

| Metric | Value |
|---|---|
| Total pageviews (90d) | 1,799 |
| Sessions (90d, classified) | ~1,158 |
| `lead_submit` events (90d) | 80 |
| `cta_request_quote_click` (90d) | 64 |
| **Sessions by channel** | **paid/ads 599 (52%) · direct 438 (38%) · organic search 80 (7%) · referral 60 (5%)** |
| **Leads by channel** | **paid/ads 65 · direct 8 · organic 2 · referral 1** |
| Organic CVR (lead/session) | ~2.5% (2 leads / 80 sessions) |
| Paid CVR | ~10.9% |
| Organic sessions landing on homepage | **53 of 80 (66%)** — brand/navigational |
| #1 organic *content* entry | `/resources/house-cleaning-cost-houston` (18 sessions) |
| Service-area pages organic | ~1–2 sessions each (not ranking yet) |

**Read:** the business is ~90% paid+direct. Organic is a rounding error today → all upside, no cannibalization risk. The cost-guide resource outperforming every service-area page is the single clearest signal for content strategy.

### Google Search Console — **[PENDING — browser session required]**

No official GSC MCP exists. To be pulled via Chrome (see Notes) for the trailing-3-month baseline. Fill these rows:

| Metric | Value |
|---|---|
| Clicks | _[pull]_ |
| Impressions | _[pull]_ |
| CTR | _[pull]_ |
| Avg position | _[pull]_ |
| Indexed pages | _[pull]_ |
| Not indexed — Discovered vs Crawled | _[pull, classify]_ |
| % clicks from brand + home | _[pull]_ (PostHog suggests home-dominant) |

### Local Falcon — SoLV

First scan run **2026-06-12** (keyword `house cleaning service`, 7×7 grid, 7mi radius, Memorial HQ center, report `a328b79ddc5b207`):

| Metric | Value |
|---|---|
| **SoLV (Share of Local Voice)** | **4.08%** |
| Found in grid points | **10 of 49** |
| Avg rank position (where found) | 8.70 (ATRP 18.49) |
| Competitors in grid | 191 |
| **Top competitor SoLV** | **26.53%** (6.5× ahead) |

Weak footprint confirmed with a number. More keywords (`maid service`, `house cleaning near me`, `move out cleaning`) can be scanned to round out the geo picture (more credits).

### GBP (Google Business Profile) — live

| Field | Value |
|---|---|
| Name | Kathy Clean Houston |
| Address | 9219 Katy Fwy #136, Houston, TX 77024 |
| Phone | +1 (346) 488-6044 |
| Rating / Reviews | **4.9★ / 15 reviews** ⚠️ (competitors: 100s–800s) |
| Categories | House cleaning service · Cleaners (**only 2** — likely under-categorized) |
| Coordinates | 29.7832, −95.5185 |

---

## Technical health (code audit, 2026-06-12)

**Healthy:**
- SSR/SSG real — content in HTML. All pages statically rendered (App Router).
- Security headers present in `vercel.json`: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- `robots.ts` (native) — comprehensive AI-crawler allowlist: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Amazonbot, Applebot-Extended (all `Allow: /`); disallows `/api/`, `/admin/`.
- `llms.txt` exists (decent — business summary, services, 2 resources, FAQ link, 21 service areas with ZIP/persona notes, NAP).
- Schema: `LocalBusiness`+`CleaningService` on home + every service-area page; `AggregateRating` (4.8/14 — **stale**, GBP is 4.9/15); 5 `Review` nodes (home only); `BreadcrumbList` (service-areas + resources); `SpeakableSpecification` (resources); `BlogPosting` (resources).
- Tracking is sophisticated: GTM + Google Ads conversion with **LTV-adjusted value**, PostHog proxied via `/ingest`, Tally lead form firing `kc_quote_submit` + `lead_submit` with service/frequency/sqft/value. **Do not break these.**
- Service-area pages are genuinely differentiated (Heights bungalows, Energy Corridor offshore rotations, Katy Cinco Ranch, etc.) — **not** doorway pages.

**Gaps / issues (ranked):**
1. **`AggregateRating` is stale & inconsistent** — schema says 4.8/14; GBP is 4.9/15. NAP/ratings must be one source of truth. _(quick fix)_
2. **No `FAQPage` schema** — service-area & FAQ pages render `<details>`/`<summary>` natively (good) but emit no `FAQPage` JSON-LD → AI Overviews can't extract them. _(high GEO value)_
3. **No `Organization`+`Person` (About-as-entity)** — the #1 LLM-citability gap. No named leadership entity anywhere.
4. **No `ReserveAction`/`potentialAction`** on the business entity — the opt-in to Google Search Agents / automated booking. `WebSite` has a `SearchAction` pointing at a `/search?q=` route **that doesn't exist** (remove).
5. **No tiered sitemap** — single flat `src/app/sitemap.ts`; several resource pages are *missing from it entirely* (deep-cleaning, move-in-out, post-construction, what's-included). _(real coverage bug)_
6. **Trailing-slash inconsistency (3-way):** `next.config.ts` `skipTrailingSlashRedirect: true` + `canonical.ts` *appends* trailing slash + page `metadata.canonical` declared *without* trailing slash. Pick one form, make canonical + internal links + sitemap agree.
7. **`next-sitemap.config.js` is dead config** — no `postbuild` script runs it; it has `generateRobotsTxt: true` which would conflict if ever wired. **CLAUDE.md's claim that the sitemap is generated by next-sitemap is incorrect** — live mechanism is native `app/sitemap.ts`. Delete the dead config or wire it deliberately.
8. **Missing HSTS** (`Strict-Transport-Security`) header. CSP absent (nice-to-have).
9. **Stale/dead artifacts:** `src/app/metadata.ts` (orphan `ProfessionalService` schema, not imported), `src/config/routes.ts` (stub referencing nonexistent `/dashboard`/`/login`), duplicate route `/services/...` vs `/our-services/...`.
10. **No content-uniqueness data layer** — pages are hand-written prop blobs. Fine today, but no `location-profiles.ts` / `service-content/` to scale enrichment or feed schema consistently.
11. **`llms.txt` pricing is vague** (`$120–$400/visit`) and **out of sync** with the real grid (recurring biweekly $119–$375; deep clean $345–$945 + 8.25% tax). One canonical wording across `llms.txt` + cost resource page.

---

## Houston data — confirmed vs to-verify

**Confirmed (from code/GBP/PostHog — real):**
- **NAP** (consistent across `llms.txt`, footer, GBP): `Kathy Clean Houston · 9219 Katy Fwy #136, Houston, TX 77024 · (346) 488-6044 · info@kathyclean.com`.
- **Service areas (21, live):** Houston, Spring Branch, Greater Heights, Greenway/Upper Kirby, Memorial, Greater Uptown, Bellaire, Medical Center Area, The Memorial Villages, River Oaks, Mid West, Briar Forest, West University Place, Washington Ave/Memorial Park, Energy Corridor, Katy, Sugar Land, The Woodlands, Westchase, Rice Military, Oak Forest.
- **Pricing (canonical grid, `src/lib/pricing.ts`, ex-tax):** Recurring weekly $109–$325 · biweekly $119–$375 · monthly $149–$379. One-time: deep clean $345–$945, move-in/out $345–$945, single clean $225–$629. +8.25% TX sales tax. Post-construction / commercial / windows = manual quote.
- **Proven demand zones (CLAUDE.md ads, Apr 2026):** 77007 Rice Military (15.8% CVR), 77008 Heights (12.9%), 77079 Energy Corridor (12.2%). 77024 organic/direct only.

**Resolved with owner (2026-06-12):**
- **Tenure:** use **"15+ years"** experience (the *brand/company* tenure, à la Denver — Houston market is newer but the company is not; lead with the parent's experience). Frame honestly as company experience, not "Houston since 2010." Feeds `Organization.foundingDate`-equivalent messaging + `llms.txt`.
- **Geography:** **Harris County** focus (covers ~all of Houston) → go **deep on neighborhoods**, not multi-county hubs. Keep existing Sugar Land (Fort Bend) / The Woodlands (Montgomery) pages; expansion concentrates on Harris neighborhoods.
- **Email:** `info@kathyclean.com` shared with Denver = **intentional, OK.**
- **GBP env var:** `NEXT_PUBLIC_GBP_URL` is **not** set locally (no `.env`, no `.vercel` link) and `json-ld.ts` filters it out when undefined → GBP `sameAs` link is likely **absent in prod**. **Fix: hardcode the real GBP URL** (`https://maps.app.goo.gl/Cdb6ev9bjX2KPA6R6`) as the canonical constant with optional env override. (Denver hardcodes its `sameAs` links.)
- **GSC:** URL-prefix property `https://kathycleanhouston.com/`, Google account **u/1**. Browser-only (no MCP).

**Still [VERIFICAR] with owner:**
- **Named leadership** (real name, title, LinkedIn) for the `Person` entity on About — LLMs don't cite anonymous teams. (Blocks 2A only.)
- **Yelp/FB/IG URLs** in `sameAs` are assumed (`yelp.com/biz/kathy-clean-houston`, `facebook.com/kathycleanhouston`, `instagram.com/kathycleanhouston`) — confirm they're real/claimed.
- Insured/bonded wording valid in **Texas** (not CO).

---

## Expansion Blueprint (Houston taxonomy) — proposed, aggressive

The engine (`[slug]/page.tsx` + `location-seo.ts` + `location-profiles.ts` + `service-content/*`) lets us generate `{service}-{neighborhood}` pages, each with unique, fact-grounded copy. Proposed scope (confirm/adjust before mass-gen):

**Residential services for the matrix (5):** `house-cleaning`, `recurring-house-cleaning`, `deep-cleaning`, `move-in-move-out`, `cleaning-services` (umbrella). Post-construction / window = manual-quote, lower priority.

**Harris-County neighborhoods — tiers:**
- **Tier A (self-canonical, proven demand)** — Rice Military (77007), Greater Heights (77007/08), Energy Corridor (77079), Memorial (77024), Spring Branch (77080), Washington Ave/Memorial Park, Galleria/Uptown (77056), Briar Forest, Westchase (77042).
- **Tier B (inner-loop affluent, high intent)** — River Oaks, West University Place, Bellaire, Montrose, Midtown, Museum District, Upper Kirby/Greenway, Medical Center Area, Oak Forest/Garden Oaks, EaDo, Tanglewood.
- **Tier C (Harris suburbs + edge)** — Cypress, Spring, Tomball, Champions/Klein, Kingwood, Humble, Jersey Village, Pearland; keep existing Katy / Sugar Land / The Woodlands.

**Commercial verticals — only genuine B2B corridors** (avoid Denver's 136 thin pages): Medical Center Area (`medical-office-cleaning`), Energy Corridor, Galleria/Uptown, Westchase, Downtown (`office-cleaning` / `janitorial-services`).

**Resources — aggressive (the proven organic vector):** keep 6; add → `best-house-cleaning-service-houston` (buyer guide, matches top query), per-service cost guides (deep-clean, move-out, recurring), and **Houston-climate differentiators**: humidity & mold prevention, hard-water spots, **hurricane/flood move-out & post-storm cleanup**, allergy/pollen-season deep clean, plus checklists (move-out, what's-included per service) and a medical-office-cleaning guide.

---

## Competitors (initial — full teardown is a Week-1 task)

| Competitor | Signal | Notes |
|---|---|---|
| Detail Cleaning Services | **810+ 5★ reviews**, since 2009 | Review-volume leader; flat-rate guarantee messaging |
| MoreHands Maid Service | 26 yrs, Austin+Houston, from $149/visit | Inspector follow-up + 24h re-clean |
| Superb Maids Houston | "1 in 112 applicants" hiring angle, <10 min response | Strong differentiation copy |
| Ready Set Maids | 2 decades, background-checked/licensed/insured | |
| Maid in House / Maid to Change / Maid U Shine | Established local maid brands | |

**Implication:** competing on review *count* head-on is a multi-quarter effort — but their **on-site schema/GEO is likely weak** (to confirm). Our wedge is **GEO + AI-citability + niche zones** (Energy Corridor expats, Heights, medical-office) where intent is high and incumbents are generic. _Run skill prompts A1 (GBP categories), A2 (attributes), A3 (review velocity), A4 (keyword gap) in Week 1._

## Off-site / entity authority inventory — **[VERIFICAR — not yet crawled]**

Known: GBP live (4.9★/15). Everything below to be audited via the skill's L1 checklist (status/priority/effort per platform):

- **Yelp Houston** — exists? complete? duplicates? (Denver had orphan Yelp listings fracturing the entity — check for the same)
- **BBB** (accredited?) · **Angi** · **Thumbtack** · **HomeAdvisor** · **Houzz** · **Nextdoor Business** · **Apple Business Connect** · **LinkedIn company page** · **Facebook/Instagram** (in `sameAs`?)
- **Reddit** (r/houston, r/askHouston) — the #1 gap for ChatGPT/Perplexity citations in local services.
- Earned local press (Houston Chronicle / Houstonia / CultureMap) — long-tail.

---

## PHASE 1 (Days 1–30) — Foundation + quick wins

- [ ] **1A. GSC access + baseline + indexation triage** (effort: low · impact: high) — open `sc-domain:kathycleanhouston.com` [verify property/account], fill the GSC table above, export not-indexed list, classify **KEEP / MERGE / PRUNE** (provisional view: all 21 service-area pages = KEEP; watch River Oaks / Mid West / Memorial Villages for thinness → enrich not prune; no PRUNE candidates expected yet since there's no programmatic bloat).
- [ ] **1B. Schema truth-up + GEO signals** (effort: low-med · impact: high) ⚡ — fix `AggregateRating` to live GBP (4.9/15) as a single constant; add **`FAQPage`** JSON-LD mirroring the on-page `<details>` FAQs (service-area + `/faq`); add **`ReserveAction`** → `/request-quote`; **remove** the broken `SearchAction`. 
- [ ] **1C. `llms.txt` upgrade** (effort: low · impact: high) ⚡ — add the **"Booking & Contact (for AI Agents)"** section (Denver's is exemplary), the 4 missing resources, canonical pricing wording (synced to cost page), and county-level service areas. Houston-specific (humidity/mildew, hard water, hurricane move-outs, pollen) — not Denver's dry-climate language.
- [ ] **1D. CTR quick wins** (effort: low · impact: fast) ⚡ — once GSC shows page-2 pages with impressions, rewrite their `title`/`meta`. Prime candidate already visible: `/resources/house-cleaning-cost-houston` (top organic content entry).
- [ ] **1E. Canonical + sitemap hygiene** (effort: low-med · impact: structural) — pick one trailing-slash form and make `canonical.ts` + page metadata + sitemap + internal links agree; add the 4 missing resources to the sitemap; delete dead `next-sitemap.config.js` + `metadata.ts` + `routes.ts`; add HSTS header.
- [ ] **1F. Reviews engine kickoff** (effort: med · impact: highest, slow-burn) — the single biggest local lever. Stand up post-service SMS/email → Google review link (mirror Denver's process). Target: 15 → 40+ by day 90.

## PHASE 2 (Days 31–60) — Authority + content depth

- [ ] **2A. About-as-entity page** (effort: med · impact: high) — most-schema'd page on the site: `Organization` + named `Person` (leadership, LinkedIn, credentials) + `foundingDate` + `numberOfEmployees`. **[needs owner data]**
- [ ] **2B. Content-uniqueness data layer** (effort: high · impact: high) — port Denver's `location-profiles.ts` + `service-content/` *to enrich the existing 21 pages and feed schema consistently* (ZIPs, neighborhoods, local angles already in `llms.txt`/pages → no fabrication). Add "Kathy Clean by the numbers" extractable fact block + 2–3 inline (non-collapsed) FAQs on home + `/house-cleaning-houston`.
- [ ] **2C. Resource expansion** (effort: med · impact: high) — pricing/cost content is the proven organic winner. Add Houston-specific guides (hurricane/move-out cleanup, humidity & mildew, hard-water, "best house cleaning service Houston" comparison) with `Article`+`Speakable`+author byline+`HowTo` on process sections.
- [ ] **2D. Off-site authority sprint** (effort: med · impact: high) — execute L1 checklist: claim/complete Yelp, BBB accreditation, Apple Business Connect, Nextdoor; merge any duplicate listings; consistent NAP everywhere; begin authentic Reddit presence.
- [ ] **2E. Internal linking hub-and-spoke** (effort: med · impact: med) — resource pages ↔ relevant service-area pages; distribute authority off the home (66% of organic lands there).

## PHASE 3 (Days 61–90) — Tiered sitemap, measure, consolidate

- [ ] **3A. Tiered sitemap** (effort: med · impact: med) — replicate Denver's tiers (`core` / `location-priority` / `location-support` / `resources`) keyed to Houston taxonomy; list all in `robots.ts`. Only add new service×area combos where there's confirmed demand (no spray).
- [ ] **3B. Request indexing** for enriched/new pages (URL inspection) once content + schema land.
- [ ] **3C. GBP optimization** — add missing categories (vs competitor A1 audit) + attributes (A2); weekly GBP posts (skill G1).
- [ ] **3D. Measure recovery** (see KPIs) + first Local Falcon SoLV scan to set the geo baseline.

---

## Success KPIs (measure at day 90)

| Metric | Today | Target 90d |
|---|---|---|
| Organic sessions / 90d (PostHog) | ~80 | 250+ |
| Organic leads / 90d | 2 | 10+ |
| % non-brand organic (off homepage) | ~34% | >55% |
| Google reviews (GBP) | 15 | 40+ |
| Indexed pages (GSC) | _[baseline]_ | all valuable pages indexed |
| Avg position on target pages | _[baseline]_ | <10 |
| SoLV on generics (Local Falcon) | 4.08% | >20% |
| AI-citability (ChatGPT/Perplexity/AIO for "best house cleaning Houston") | likely absent | mentioned in ≥1 |

**Reality check:** code & content work lands in days; **indexation recovery, review accumulation, and ranking/citation moves take weeks-to-months** (crawl cycle + review velocity + off-site outreach). No immediate movement promised.

---

## Progress log

**2026-06-12 — Phase 0 discovery complete.**
- Mapped both repos. Houston is structurally behind Denver (no `[slug]` programmatic route, no tiered sitemap, no `location-profiles`/`service-content`, schema gaps) but its 21 service-area pages are genuinely unique (not doorway pages) — healthier indexation start than Denver had.
- Pulled live Houston baseline from PostHog (project 253131, after correcting that 136007 = Denver). Organic = 80 sessions/90d, 66% home-landing, cost-guide is #1 content entry, organic CVR ~2.5%. Business is ~90% paid+direct.
- GBP: 4.9★/15 reviews, 2 categories — review count is the dominant local-pack constraint.
- Identified entrenched competitors (Detail Cleaning 810+ reviews, MoreHands, Superb Maids, Ready Set Maids).
- Corrected stale CLAUDE.md claim (sitemap is native `app/sitemap.ts`, not next-sitemap).
- **Strategy decision:** selective replication (schema graph + llms.txt + content-uniqueness-to-enrich + tiered sitemap) **+ off-site authority & reviews push**, NOT mass page generation.
- **Awaiting:** (1) your OK on the plan; (2) GSC Chrome session for indexation/position baseline; (3) OK to spend Local Falcon credits for SoLV; (4) owner data for [VERIFICAR] items (founding year, leadership for entity schema, counties, TX legal wording).
- **Nothing committed/pushed/deployed.**

**2026-06-12 — Owner review + direction.**
- Decisions logged above (15+ yrs tenure, Harris/neighborhood focus, GBP hardcode, GSC u/1 URL-prefix, shared email OK).
- **Strategy upgraded to aggressive expansion via the uniqueness engine** (not "don't publish") — see Expansion Blueprint. Clone Denver's `[slug]` engine adapted to Harris neighborhoods + heavy resource expansion.
- Local Falcon scan submitted: keyword "house cleaning service", 7×7 grid, 7mi radius, centered on Memorial HQ (report key `a328b79ddc5b207`).
- Scope confirmed: Tier A+B (~20 Harris neighborhoods) × 4 core residential services; all 3 resource tracks.
- Local Falcon baseline captured: SoLV 4.08% (10/49 grid points), top competitor 26.53%.

**2026-06-12 — Phase 1 foundation built (local, not committed). `pnpm build` GREEN.**
- `json-ld.ts`: AggregateRating 4.8/14 → **4.9/15** (GBP truth); **hardcoded GBP URL** (no longer relies on unset env → sameAs link now guaranteed); replaced broken `SearchAction` with **`ReserveAction`** → /request-quote on the business entity + all 6 service builders (AI-booking opt-in); added **`buildFaqPageSchema`**, **`buildBreadcrumbSchema`**, and **`organization`** (About-entity, optional founder, 15+ yrs tenure) builders.
- `llms.txt`: full rewrite — added **"Booking & Contact (for AI Agents)"**, FAQ & Policies (incl. Houston humidity/mildew/hard-water + storm move-out), canonical pricing synced to `pricing.ts` (+8.25% tax noted), all 6 resources, 15+ yrs tenure.
- Hygiene: added 4 missing resources to `sitemap.ts` (+ `/resources` priority 0.8); added **HSTS** header to `vercel.json`; deleted dead files (`next-sitemap.config.js`, `src/app/metadata.ts`, `src/config/routes.ts`).
**2026-06-12 — Programmatic engine built + verified (local, not committed). `pnpm build` GREEN, 80 pages generated.**
- `src/config/location-profiles.ts`: 20 Harris-neighborhood profiles (real ZIPs, housing, landmarks, sub-areas) each with a distinct Houston climate angle (humidity/mildew, hard water, storm/flood, pollen). Keyed to existing `houstonLocations` slugs → reuse real images + maps (no broken/fabricated assets).
- `src/config/service-content.ts`: uniqueness engine — per-service builders (house-cleaning, recurring, deep, move-in/out) weaving each profile's facts into **service-specific** copy (hero, benefits, why, 2 unique content blocks, 5 FAQs, cross-links between the 4 services + /request-quote).
- `src/lib/location-seo.ts`: taxonomy + matrix enumeration + `parseServiceLocationSlug`.
- `src/app/[slug]/page.tsx`: programmatic route, `generateStaticParams` (80 combos), `dynamicParams=false` (ungenerated slugs 404), schema @id/url pinned to canonical.
- `LocationServiceAreaPage.tsx`: added `FAQPage` emission (now on **all 21 existing pages too**) + `breadcrumbName` override. `json-ld.ts`: added `recurringHouseCleaning` + `deepCleaning` builders.
- `sitemap.ts`: +80 matrix slugs.
- **Verified (dev server):** new pages 200 w/ service-specific H1 + FAQPage + ReserveAction + neighborhood ZIPs; bogus slug 404; existing pages + home 200 (no regression); home sameAs now has GBP URL + 4.9/15; prerender-manifest = 80 matrix pages.

**2026-06-12 — Resources + internal linking + About-entity (local, not committed). `pnpm build` GREEN, 141 pages.**
- **About-as-entity:** wired `organization()` schema into `/about-us` (no `Person` — owner's call: stays "Kathy Clean team", not fabricated). Removed a duplicate "A Brand Built to Grow" section (pre-existing content bug).
- **Internal linking:** added a "related services" block to `LocationServiceAreaPage` (auto-derives from canonical for hub pages, explicit prop on engine pages) → every neighborhood hub + engine page links to its 4 service pages. Distributes authority into the 80 engine pages. Verified on `/service-areas/rice-military` (links to deep/recurring/move-in-out).
- **Resources (3 new, Houston-unique, guardrail-safe):** `best-house-cleaning-service-houston` (buyer guide, featured — matches top organic query), `humidity-mold-cleaning-houston`, `storm-move-out-cleaning-houston`. Framed storm/mold as turnover-cleaning + prevention, explicitly pointing flood/water-damage + mold remediation to licensed specialists (no biohazard/remediation claims). Each carries BlogPosting + Speakable + Breadcrumb schema via the template.
- **Sitemap hardened:** now derives resource URLs from the registry (`getAllResourceArticles`) so future articles are auto-included.
- Verified: new resources 200 + schema; resources index lists them; About has Organization schema + single section; no regressions.

**REMAINING:**
- Remaining resources (track 1 + 3): `hard-water-cleaning-houston`, allergy/pollen deep-clean guide, move-out checklist, medical-office cleaning guide.
- Batch 2 neighborhoods (montrose, midtown, museum-district, eado, tanglewood) — need real images/maps first (+ service-area hub pages).
- Trailing-slash normalization (resources use canonicalPath w/ slash; rest don't) — standardize globally (Phase 1E).
- Then: **commit → deploy (await OK) → GSC request-indexing → measure recovery.**

## Notes

- **GSC access:** no official MCP — pull via Chrome. Verify the property (`sc-domain:kathycleanhouston.com` expected) and which Google account owns it. This blocks the indexation/position half of the baseline.
- **Hard rules honored:** no fabricated data (all [VERIFICAR] flagged); NAP single-source; no service-time claims; windows/post-construction/commercial = manual quote; "cleaning professionals/teams" language; price only on resource pages synced to `llms.txt`; **no publishing pages for the sake of volume.**
- Weekly cadence: run the "lunes de SEO" ritual (GSC + PostHog + reviews + 1–3 actions) and log here.
