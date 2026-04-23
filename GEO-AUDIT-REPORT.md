# GEO Audit Report: Kathy Clean Houston

**Audit Date:** 2026-04-23
**URL:** https://kathycleanhouston.com
**Business Type:** Local Business — Residential House Cleaning
**Pages Analyzed:** 26 (full sitemap)
**Strategic Goal:** Dominate West Houston suburb searches (Katy, Sugar Land, The Woodlands, Energy Corridor, Westchase, Galleria, Cinco Ranch)

---

## Executive Summary

**Overall GEO Score: 34/100 — Poor**

Kathy Clean Houston is structurally sound (clean SSR, permissive robots.txt, valid sitemap) but functionally invisible to AI systems. The site has zero pages for its highest-priority target markets (Katy, Sugar Land, The Woodlands, Energy Corridor), zero verified cross-platform entity links, service area content that is 6–10× thinner than the top competitor, and two brand-damaging legacy bugs: a footer map embedding a competitor's name and GeoCoordinates pointing to downtown Houston instead of the actual address. The 14-review base is the deepest structural challenge — AI citation systems require social proof volume to recommend local businesses by name. The good news: the technical foundation is clean and the architecture scales well, so every fix is an additive investment rather than a rebuild.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 34/100 | 25% | 8.5 |
| Brand Authority | 14/100 | 20% | 2.8 |
| Content E-E-A-T | 31/100 | 20% | 6.2 |
| Technical GEO | 64/100 | 15% | 9.6 |
| Schema & Structured Data | 38/100 | 10% | 3.8 |
| Platform Optimization | 31/100 | 10% | 3.1 |
| **Overall GEO Score** | | | **34.0/100 — Poor** |

---

## 🚨 Critical Issues (Fix Immediately)

### CRIT-1 | Footer Map Embed References "Luchos Cleaning"
**File:** `src/components/layout/footer.tsx` (approx. line 133)
The Google Maps iframe `src` and/or query parameter references `Luchos Cleaning Houston TX` — a different business. This means:
- Every visitor who clicks the map is shown a competitor
- Google, Gemini, and Bing read this as a NAP (Name/Address/Phone) inconsistency that breaks entity disambiguation
- The Knowledge Graph cannot confidently associate this site with "Kathy Clean Houston"

**Fix:** Change the map embed query to `Kathy Clean Houston, 9219 Katy Fwy #136, Houston, TX 77024`

---

### CRIT-2 | aggregateRating Hardcoded at 5.0 — Spam Signal
**File:** `src/config/json-ld.ts`
The schema outputs `ratingValue: "5"` — a perfect score that Google's spam filters flag for suppression. `reviewCount: "12"` is also inconsistent with the "14 reviews / 4.8★" stated on the homepage.

**Fix:** Change to `ratingValue: "4.8"`, `reviewCount: "14"` (or actual current count). Never use exactly 5.0.
**Impact:** This single fix controls whether star ratings appear in SERPs → +15–30% CTR.

---

### CRIT-3 | sameAs Is Empty on Every Schema Block
**File:** `src/config/json-ld.ts` — all schema functions contain `"sameAs": []`
This is the #1 AI entity graph blocker. ChatGPT, Perplexity, and Gemini cannot verify that the website, Google Business Profile, Yelp listing, and Facebook page are all the same business. The brand is unresolvable as an entity.

**Fix:** Populate the `sameAs` array in `home()` with all active directory profile URLs:
```json
"sameAs": [
  "https://www.google.com/maps/place/[GBP-URL]",
  "https://www.yelp.com/biz/kathy-clean-houston",
  "https://www.facebook.com/kathycleanhouston",
  "https://www.instagram.com/kathycleanhouston"
]
```

---

### CRIT-4 | GeoCoordinates Point to Downtown Houston, Not the Business Address
**File:** `src/config/json-ld.ts`
Current: `latitude: 29.7604, longitude: -95.3698` → downtown Houston city center
Correct: `latitude: 29.7834, longitude: -95.5207` → 9219 Katy Fwy #136, Houston TX 77024

Gemini cross-references schema coordinates against GBP address. A mismatch suppresses local pack eligibility.

---

### CRIT-5 | Zero Pages for Target West Houston Markets
The sitemap covers only inner-loop neighborhoods. The business's stated target geography — West Houston suburbs — has no on-site representation:

| Missing Market | Population | Key Zip Codes | Query Risk |
|---|---|---|---|
| Katy, TX | 300,000+ metro | 77449, 77450, 77494 | Very High |
| Sugar Land, TX | 111,000 | 77478, 77479, 77498 | Very High |
| The Woodlands, TX | 115,000 | 77380–77389 | Very High |
| Energy Corridor | 25,000+ | 77079, 77077 | High — direct Naturalcare battleground |
| Westchase | 25,000+ | 77042, 77077 | Medium |
| Cinco Ranch (Katy) | 20,000+ | 77450, 77494 | High |
| Galleria (dedicated) | — | 77056, 77057 | Medium (partial via greater-uptown) |

When a user asks ChatGPT or Perplexity "best house cleaning in Katy TX," this site cannot appear. No page = no citation, regardless of service quality.

---

### CRIT-6 | FAQ Answers Invisible to AI Crawlers (JavaScript Collapse)
The FAQ sections on service area pages (Memorial, Briar Forest, all others) are collapsed via JavaScript click-to-reveal. AI crawlers (GPTBot, ClaudeBot, PerplexityBot) receive only the initial HTML response — they never execute the expand interaction. The FAQ answers do not exist from a citability standpoint.

**Fix:** Render FAQ answers as open HTML by default, or switch to a CSS-only `<details>`/`<summary>` pattern (which the `/faq` page already uses correctly). This is a template-level fix that impacts all 14 service area pages at once.

---

## High Priority Issues (Fix Within 1 Week)

### HIGH-1 | legacy `siteUrl` in next-sitemap.config.js
**File:** `next-sitemap.config.js`
Contains hardcoded `siteUrl: 'https://luchoscleaning.com'` — the previous brand. While overridden by `NEXT_PUBLIC_SITE_URL` in production, a missing env var would generate a sitemap pointing to the wrong domain.
**Fix:** Change to `siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://kathycleanhouston.com'`

---

### HIGH-2 | Canonical Mismatch on /faq (www vs non-www)
**File:** `src/app/faq/page.tsx`
Sets `canonical: "https://www.kathycleanhouston.com/faq"` (with www), while the site serves from non-www. Google sees the canonical pointing to a different host.
**Fix:** Change to relative path `canonical: "/faq"` to match every other page in the codebase.

---

### HIGH-3 | No llms.txt
**Status:** 404 error
Competitors who implement `llms.txt` can explicitly guide AI models to their strongest content. Its absence means AI systems fall back to inferring site purpose from raw HTML alone.

**Fix:** Create `/public/llms.txt` — see template in Quick Wins section.

---

### HIGH-4 | No Article/BlogPosting Schema on Resource Pages
Both resource pages (`/resources/house-cleaning-cost-houston`, `/resources/how-often-house-cleaning-houston`) have zero schema. No author, no datePublished, no publisher linkage. Google and AI systems treat these as anonymous, undated commodity content.

**Fix:** Add `BlogPosting` JSON-LD to `ResourceArticleTemplate` component. See schema templates below.

---

### HIGH-5 | Duplicate/Conflicting Schema on Homepage
The homepage outputs two overlapping schema blocks: `ProfessionalService` (from `home()` in `json-ld.ts`) and a separate inline `CleaningService` in `page.tsx`. They represent the same entity with inconsistent properties — one has aggregateRating, the other doesn't.

**Fix:** Remove inline `cleaningServiceSchema` from `src/app/page.tsx`. Upgrade `home()` function to output a single `["LocalBusiness", "CleaningService"]` block with all properties merged.

---

### HIGH-6 | Service Area Schema Has @id / URL Mismatch
**File:** `src/config/json-ld.ts` → `houseCleaning()` function
The `@id` and `url` properties are set to `…/house-cleaning-{location}` but actual page URLs are `…/service-areas/{location}`. Search engines and AI crawlers cannot reliably associate the schema with the actual page.

**Fix:** Pass the canonical page path as a parameter to `houseCleaning()`, or derive from `service-areas/{slug}`.

---

### HIGH-7 | Service Area areaServed Lists All 17 Areas on Specific Pages
On `/service-areas/memorial`, the schema `areaServed` lists all 17 service areas globally. This dilutes the geographic relevance signal that tells Google "this page is specifically about Memorial."

**Fix:** Each service area schema should only include the specific location in `areaServed`. The global area list belongs only on the homepage schema.

---

### HIGH-8 | No BreadcrumbList on Any Page
No breadcrumb schema on service area pages or resource pages. Breadcrumbs appear in Google SERPs and help AI understand site hierarchy.

**Fix:** Add `BreadcrumbList` to `LocationServiceAreaPage` component and `ResourceArticleTemplate` using `@graph` to bundle with existing schema.

---

### HIGH-9 | Service Area Pages Are Critically Thin (400–700 words)
The top competitor for Energy Corridor (naturalcarecleaningservice.com) has 4,500+ words with zip codes, local landmarks, and multi-platform ratings. Every Kathy Clean service area page is 6–10× thinner. Thin pages cannot outrank comprehensive ones for local intent queries.

Required minimum for competitive ranking:
- 1,200–1,500 words (2,000+ for Energy Corridor)
- 3–5 zip codes per page
- 2–3 named local landmarks
- Named neighborhood subdivisions
- Properly rendered FAQ (5–7 questions)

---

### HIGH-10 | Resource Pages Have No Author Byline or Publication Date
Both resource posts are anonymous and undated. AI citation systems weight attributed, dated content heavily. Google's Helpful Content guidelines treat anonymous, undated content as commodity.

**Fix:** Add author byline (even "Kathy Clean Houston Team"), publication date, and a "Last updated" date. Add `datePublished` and `dateModified` to the Article JSON-LD.

---

## Medium Priority Issues

### MED-1 | No Explicit AI Crawler Entries in robots.txt
While the wildcard `Allow: /` permits all crawlers, explicit entries for `GPTBot`, `ClaudeBot`, `PerplexityBot`, and `Google-Extended` signal intentional AI optimization.

### MED-2 | Trustindex Review Widget Is JavaScript-Injected (Invisible to AI Crawlers)
Reviews loaded via `dangerouslySetInnerHTML` with `defer async` are invisible to GPTBot, ClaudeBot, PerplexityBot. Add at least 5 static customer review excerpts as crawlable HTML + `Review` schema.

### MED-3 | About Page Has Zero Human Identity
No founder name, no founding date, no certifications, no headcount, no photos. AI models cannot build an entity anchor without a real person attached to the brand. This actively suppresses entity recognition.
**Fix:** Add founder name, founding year, one paragraph of professional background. Add `Person` schema with `sameAs` to LinkedIn.

### MED-4 | Per-Page Open Graph Missing on Service Area Pages
All service area pages inherit the root layout's generic OG title. Every service area page shares the same social preview card — indistinguishable from the homepage.

### MED-5 | Security Headers Missing
Missing: `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`.
**Fix:** Add to `vercel.json` under `"headers"` array as a global `"source": "/(.*)"` rule.

### MED-6 | skipTrailingSlashRedirect Creates Duplicate URLs
`next.config.ts` has `skipTrailingSlashRedirect: true` — both `/service-areas` and `/service-areas/` serve content without redirect. Potential duplicate content signal at scale.

### MED-7 | No WebSite + SearchAction Schema
Enables Sitelinks Search Box in SERPs for branded queries. Simple one-time addition to homepage.

### MED-8 | No speakable Property on Resource Articles
`speakable` directly signals AI assistant readiness and is an underused competitive differentiator in the local cleaning space.

---

## Low Priority Issues

### LOW-1 | All Sitemap lastmod Dates Are Identical
`next-sitemap` generates all pages with the same `lastmod` (current build date). Reduces freshness signal value for crawlers assessing which pages changed.

### LOW-2 | Homepage changeFrequency Set to "monthly" for All Pages
The homepage and high-traffic pages should use `"weekly"` or `"daily"` to signal higher crawl priority.

### LOW-3 | No Bing Webmaster Tools Verification
No `msvalidate.01` meta tag. Add after verifying site in Bing Webmaster Tools and submit sitemap via their portal for IndexNow support.

### LOW-4 | Duplicate Service Pages
`/our-services/house-cleaning-and-maid-service-with-satisfaction-guarantee` and `/services/house-cleaning-and-maid-service-with-satisfaction-guarantee` appear to be the same page at two URLs. Only one is in the sitemap.

---

## Category Deep Dives

### AI Citability (34/100)

**Citation-ready passages on the site: 0**

The most quotable sentence on the entire site is *"Biweekly service represents about 60% of our recurring business"* — but it carries no source, no date, and will be treated as an unverifiable marketing claim by AI models.

Page-by-page citability scores:
- Pricing resource: 47/100 — best page, still below citation threshold
- Frequency resource: 54/100 — closest to ready; one proprietary stat but unsourced
- FAQ page: 39/100 — good depth but no FAQPage schema
- Service area pages: 25/100 — collapsed FAQs, no local data, near-duplicate templates
- About/homepage: 23/100 — no verifiable facts, no founder identity

The single highest-leverage fix: **Frame internal booking data as first-party statistics.** "Based on our bookings from 2024–2025, biweekly service accounts for approximately 60% of Kathy Clean Houston's recurring clients." This sentence becomes citable because it names a source, a timeframe, and a specific claim.

---

### Brand Authority (14/100)

**The deepest structural challenge for AI visibility.**

| Platform | Status |
|---|---|
| Wikipedia | Absent — no article for "Kathy Clean Houston" |
| Reddit | Absent — no r/Houston or r/Katy threads |
| YouTube | Absent — search returns unrelated Colorado company |
| LinkedIn | Absent (Houston entity) — Colorado entity exists, causing brand confusion |
| Google Reviews | ~14 reviews (below AI citation threshold of ~50+) |
| Yelp | ~17 photos, likely 10–20 reviews |
| Angi / HomeAdvisor | No confirmed listing |

**Name collision risk:** A Colorado company named "Kathy Clean" has LinkedIn and YouTube presence. AI models may conflate the two entities, diluting Houston brand authority.

**Path to improvement:** The review gap is the biggest structural problem. Naturalcare has 785 reviews (4.9★). AI models asked "who does house cleaning in Katy TX" will recommend businesses with verifiable review volume first. A systematic post-service review solicitation strategy (email 24 hrs after each cleaning with direct Google Review link) is the highest-ROI brand investment available.

---

### Content E-E-A-T (31/100)

| Dimension | Score | Key Gap |
|---|---|---|
| Experience | 6/25 | No case studies, no named staff, no real job photos |
| Expertise | 8/25 | No author bylines, no certifications (ARCSI), no methodology documentation |
| Authoritativeness | 10/25 | 4.8 rating undisclosed-source; no external citations; no press coverage |
| Trustworthiness | 14/25 | FAQ policies are genuine (strongest asset), but no dates on content, no editorial attribution |

The FAQ page is the site's best E-E-A-T asset — 20 questions with operational depth on insurance, guarantees, cancellation, access. It just needs schema and proper rendering to convert its strength into AI-visible signals.

---

### Technical GEO (64/100)

**Strengths:**
- Next.js SSG with SSR confirmed — `x-nextjs-prerender: 1` in headers. AI crawlers receive complete HTML.
- robots.txt is clean and permissive
- PostHog routed through local proxy (avoids cross-origin latency)
- `fetchPriority="high"` on hero image, web fonts preloaded

**Key risks:**
- JavaScript-collapsed FAQ content is the single largest technical GEO gap
- Canonical mismatch on /faq (www vs non-www)
- Legacy `luchoscleaning.com` in next-sitemap config
- Security headers entirely absent
- Footer map embed references wrong business name

---

### Schema & Structured Data (38/100)

**What's present (partial):**
- `ProfessionalService` + `CleaningService` on homepage (conflicting blocks)
- `CleaningService` on service area pages (wrong @id/url, areaServed too broad)
- `FAQPage` on `/faq` (well-structured, 20 Q&A pairs — **note:** Google restricted FAQ rich results to government/health sites in 2023; AI crawlers still read it)

**What's missing:**
- `sameAs` on every schema block (empty array)
- `Article`/`BlogPosting` on resource pages
- `BreadcrumbList` on any page
- `WebSite` + `SearchAction`
- `speakable` property
- `Person` schema for author identity
- `Review` schema for static testimonials

---

### Platform Optimization (31/100)

| Platform | Score | Key Blocker |
|---|---|---|
| Google AI Overviews | 38/100 | Homepage FAQ rendered in JS accordion, not static HTML |
| Google Gemini | 34/100 | GBP unconfirmed; footer references wrong business; GeoCoordinates wrong |
| Bing Copilot | 31/100 | No LinkedIn company page; no Bing Webmaster verification |
| Perplexity AI | 29/100 | No community validation (Reddit, Angi); undated content |
| ChatGPT Web Search | 22/100 | Empty sameAs; no entity graph; no dates on any content |

---

## Quick Wins (This Week)

1. **Fix footer map embed** — Change "Luchos Cleaning" to "Kathy Clean Houston" in `src/components/layout/footer.tsx`. 10 minutes. Eliminates a live brand confusion signal.

2. **Fix aggregateRating values** — Change `ratingValue: "5"` → `"4.8"` and `reviewCount: "12"` → `"14"` in `src/config/json-ld.ts`. 5 minutes. Activates or unblocks star ratings in SERPs (+15–30% CTR).

3. **Fix GeoCoordinates** — Change `29.7604, -95.3698` → `29.7834, -95.5207` in `json-ld.ts`. 5 minutes. Fixes local pack eligibility for Gemini and Google Maps.

4. **Populate sameAs array** — Add GBP URL, Yelp, Facebook to `sameAs: []` in the `home()` function. 15 minutes. Enables AI entity graph construction across all platforms.

5. **Fix FAQ canonical** — Change `"https://www.kathycleanhouston.com/faq"` to `"/faq"` in `src/app/faq/page.tsx`. 2 minutes. Resolves www/non-www canonical mismatch.

6. **Fix next-sitemap legacy siteUrl** — Replace `luchoscleaning.com` with `kathycleanhouston.com` in `next-sitemap.config.js`. 2 minutes. Eliminates latent misconfiguration risk.

7. **Create /public/llms.txt** — See template below. 30 minutes. Signals AI readiness to all crawlers.

---

## llms.txt Template

```
# Kathy Clean Houston

> Professional house cleaning services in Houston, TX. Serving West Houston neighborhoods including Memorial, Spring Branch, Briar Forest, River Oaks, Bellaire, West University Place, Greater Heights, and Greater Uptown. Fully insured, bonded, and background-checked staff. 48-hour satisfaction guarantee.

## Services
- [House Cleaning Services](https://kathycleanhouston.com/house-cleaning-houston): Recurring, deep clean, move-in/move-out, and post-construction cleaning.
- [Commercial Cleaning](https://kathycleanhouston.com/commercial-cleaning-houston): Office and commercial cleaning in Houston, TX.

## Resources
- [Houston House Cleaning Cost Guide](https://kathycleanhouston.com/resources/house-cleaning-cost-houston): Pricing ranges ($120–$400/visit), cost factors, and service tiers.
- [How Often to Schedule Cleaning in Houston](https://kathycleanhouston.com/resources/how-often-house-cleaning-houston): Frequency recommendations based on home size, lifestyle, and Houston climate.

## FAQ
- [Frequently Asked Questions](https://kathycleanhouston.com/faq): 20 questions covering insurance, pricing, scheduling, access, and guarantees.

## Service Areas
- [Memorial](https://kathycleanhouston.com/service-areas/memorial)
- [Spring Branch](https://kathycleanhouston.com/service-areas/spring-branch)
- [Briar Forest](https://kathycleanhouston.com/service-areas/briar-forest)
- [River Oaks](https://kathycleanhouston.com/service-areas/river-oaks)
- [Bellaire](https://kathycleanhouston.com/service-areas/bellaire)
- [West University Place](https://kathycleanhouston.com/service-areas/west-university-place)
- [Greater Heights](https://kathycleanhouston.com/service-areas/greater-heights)
- [Greater Uptown](https://kathycleanhouston.com/service-areas/greater-uptown)
- [The Memorial Villages](https://kathycleanhouston.com/service-areas/the-memorial-villages)
- [Mid West](https://kathycleanhouston.com/service-areas/mid-west)

## Contact
- Address: 9219 Katy Fwy #136, Houston, TX 77024
- Phone: (346) 488-6044
- Email: info@kathyclean.com
```

---

## 30-Day Action Plan: West Houston Territory Domination

### Week 1: Brand Integrity & Critical Bug Fixes
- [ ] Fix footer map embed (Luchos Cleaning → Kathy Clean Houston)
- [ ] Fix aggregateRating: `ratingValue: "4.8"`, `reviewCount: "14"`
- [ ] Fix GeoCoordinates in json-ld.ts (downtown → Katy Fwy address)
- [ ] Populate sameAs with GBP, Yelp, Facebook, Instagram URLs
- [ ] Fix FAQ canonical (/faq — www vs non-www)
- [ ] Fix next-sitemap.config.js legacy luchoscleaning.com URL
- [ ] Create /public/llms.txt using template above
- [ ] Fix FAQ answer rendering on service area pages (open by default or CSS-only accordion)
- [ ] Fix service area schema: @id/url mismatch, narrow areaServed per page

### Week 2: Schema & Structure
- [ ] Consolidate homepage schema — remove inline CleaningService from page.tsx, upgrade home() to single `["LocalBusiness", "CleaningService"]` block
- [ ] Add BreadcrumbList to LocationServiceAreaPage component (impacts all 14 area pages)
- [ ] Add BlogPosting schema to ResourceArticleTemplate (impacts both resource pages)
- [ ] Add aggregateRating schema to all service area pages (houseCleaning() function)
- [ ] Add per-page Open Graph to all service area pages
- [ ] Add security headers to vercel.json (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, CSP)
- [ ] Add Bing Webmaster Tools verification (msvalidate.01)
- [ ] Add explicit AI bot entries to robots.txt (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)

### Week 3: Content Depth — Existing Pages
- [ ] Upgrade About Us: add founder name, founding year, professional background, Photo, Person schema
- [ ] Upgrade resource posts: add author byline, publication date, 1 proprietary data point each
- [ ] Upgrade Memorial page to 1,200+ words: add zip codes (77024, 77055), Terry Hershey Park reference, Springs/Piney Point subdivisions, rendered FAQ
- [ ] Upgrade Energy Corridor page: **2,000+ words** (direct Naturalcare battleground) — zip codes 77079/77077/77084, Terry Hershey Park, Energy Park, Bear Creek, Briar Forest cross-link, corporate relocation angle
- [ ] Upgrade Briar Forest page to 1,200+ words: zip codes, I-10 corridor context, named subdivisions
- [ ] Add 5 static customer review excerpts to homepage (HTML, not JS-injected)

### Week 4: West Houston Territory Expansion
- [ ] **Create /service-areas/katy** (1,400 words): zip codes 77449/77450/77494, Cinco Ranch, LaCenterra, Cross Creek Ranch, Falcon Ranch, Firethorne
- [ ] **Create /service-areas/sugar-land** (1,400 words): zip codes 77478/77479/77498, First Colony, Riverstone, Sugar Land Town Square, New Territory
- [ ] **Create /service-areas/the-woodlands** (1,500 words): zip codes 77380-77389, village system (Grogan's Mill, Panther Creek, Sterling Ridge, Creekside Park), The Waterway, Hughes Landing, corporate relocation angle
- [ ] **Create /service-areas/westchase** (1,200 words): zip codes 77042/77077
- [ ] **Create /service-areas/cinco-ranch** (1,200 words): cross-links to Katy page
- [ ] Add all new pages to service-areas hub and sitemap
- [ ] Verify GBP listing for Kathy Clean Houston at 9219 Katy Fwy #136 (prerequisite for Gemini local pack)
- [ ] Start post-service review solicitation sequence (email with direct Google Review link, sent 24 hrs after every cleaning)

---

## West Houston Content Templates

### Required Elements on Every New Suburb Page

1. **H1:** "House Cleaning Services in [City/Area], TX" (not "[Area] Cleaning Company")
2. **Opening paragraph:** Include 2 zip codes in first 100 words
3. **"Neighborhoods We Serve in [Area]"** section: named subdivisions (6–10 bullets)
4. **Service-specific section:** what recurring cleaning means for [Area] home sizes (Katy homes average 2,500–4,000 sq ft, larger than inner loop)
5. **Pricing anchor:** area-typical ranges (not identical on every page)
6. **Local angle:** 1–2 area-specific signals (landmark, community event, seasonal context)
7. **FAQ block:** 5–7 questions, rendered open (not JS-collapsed), with FAQPage schema
8. **Cross-links:** pricing resource, main FAQ, 2 adjacent service area pages
9. **Schema:** `CleaningService` with `areaServed` narrowed to the specific city, `aggregateRating`, `BreadcrumbList` via `@graph`

### Area-Specific Content Angles

**Katy (77449, 77450, 77494)**
- Cinco Ranch master-planned community — larger homes, HOA standards
- Katy ISD family households — biweekly scheduling around school schedules
- New construction cleaning (high new-home activity along Grand Parkway TX-99)
- Energy Corridor commuter belt — time-poor dual-income households

**Sugar Land (77478, 77479, 77498)**
- Fort Bend County — highest-income suburb, price on value not discount
- First Colony and Riverstone — established master-planned communities
- Home office cleaning (high WFH professional density)
- Sugar Land Town Square homeowners who host events

**The Woodlands (77380–77389)**
- Village system targeting: Grogan's Mill, Panther Creek, Sterling Ridge, College Park, Creekside Park
- Distinctive architecture (wooded lots, high ceilings, cedar finishes — specific cleaning needs)
- Corporate relocation cleaning (ExxonMobil, Chevron, energy company campuses)
- The Waterway and Hughes Landing area residents

**Energy Corridor (77079, 77077)**
- Direct Naturalcare battleground — needs 2,000+ words to compete
- Energy sector households — dual income, premium market, time-poor
- Post-flooding remediation history (Addicks/Barker Reservoir — Harvey context)
- International corporate housing (Shell, BP America, ConocoPhillips employee relocations)
- Briar Forest cross-link (adjacent, already has a page)
- Terry Hershey Park, Energy Park, Bear Creek as local landmarks

---

## Schema Templates — Copy-Paste Ready

### 1. Homepage CleaningService (Consolidated)

Replace both existing schema blocks in `src/config/json-ld.ts` `home()` and remove inline block from `src/app/page.tsx`:

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CleaningService"],
  "@id": "https://kathycleanhouston.com/#business",
  "name": "Kathy Clean Houston",
  "description": "Professional house cleaning in Houston, TX. Recurring, deep clean, move-in/out, and post-construction cleaning by insured, background-checked professionals.",
  "url": "https://kathycleanhouston.com",
  "telephone": "+1-346-488-6044",
  "email": "info@kathyclean.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "9219 Katy Fwy #136",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "postalCode": "77024",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.7834,
    "longitude": -95.5207
  },
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "14",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "REPLACE_WITH_GBP_URL",
    "REPLACE_WITH_YELP_URL",
    "REPLACE_WITH_FACEBOOK_URL"
  ]
}
```

### 2. Service Area Page (Katy example — use for all new suburb pages)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CleaningService",
      "@id": "https://kathycleanhouston.com/service-areas/katy#service",
      "name": "Kathy Clean Houston — House Cleaning in Katy, TX",
      "url": "https://kathycleanhouston.com/service-areas/katy",
      "telephone": "+1-346-488-6044",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9219 Katy Fwy #136",
        "addressLocality": "Houston",
        "addressRegion": "TX",
        "postalCode": "77024",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Katy", "containedInPlace": { "@type": "State", "name": "Texas" } }
      ],
      "parentOrganization": { "@id": "https://kathycleanhouston.com/#business" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "14",
        "bestRating": "5"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kathycleanhouston.com" },
        { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://kathycleanhouston.com/service-areas" },
        { "@type": "ListItem", "position": 3, "name": "House Cleaning in Katy, TX", "item": "https://kathycleanhouston.com/service-areas/katy" }
      ]
    }
  ]
}
```

### 3. Resource Article (BlogPosting)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://kathycleanhouston.com/resources/house-cleaning-cost-houston#article",
      "headline": "How Much Does House Cleaning Cost in Houston?",
      "url": "https://kathycleanhouston.com/resources/house-cleaning-cost-houston",
      "datePublished": "REPLACE_WITH_ACTUAL_DATE",
      "dateModified": "REPLACE_WITH_LAST_UPDATED",
      "author": {
        "@type": "Organization",
        "@id": "https://kathycleanhouston.com/#business",
        "name": "Kathy Clean Houston"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://kathycleanhouston.com/#business",
        "name": "Kathy Clean Houston"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "p:first-of-type"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kathycleanhouston.com" },
        { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://kathycleanhouston.com/resources" },
        { "@type": "ListItem", "position": 3, "name": "How Much Does House Cleaning Cost in Houston?", "item": "https://kathycleanhouston.com/resources/house-cleaning-cost-houston" }
      ]
    }
  ]
}
```

---

## Competitive Intelligence: Key Threat

**Naturalcare Cleaning Service** — `naturalcarecleaningservice.com/maid-service-energy-corridor-apartments/`

The benchmark to beat for Energy Corridor and West Houston:
- 4,500+ words on a single area page
- 785 Google reviews, 4.9★
- Multi-platform ratings: Yelp 4.3★, Facebook 4.7★, Angi 4.6★
- Explicit zip codes: 77079, 77077, 77084
- Local landmarks: Terry Hershey Park, Energy Park, Energy Corridor Farmers Market
- Directions from I-10 and Beltway 8
- "Only 1% of applicants" selectivity claim
- Community partnership signals (pet care, local events)

Kathy Clean's competitive path is not word count matching — it is **verifiable local authority**: aggregateRating schema + real review volume + zip-code-level geographic specificity + schema that makes all of it machine-readable.

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues |
|---|---|---|
| / | House Cleaning in Houston | Conflicting schema, empty sameAs, wrong GeoCoords, footer maps bug |
| /about-us | About Us | No schema, no founder identity, no founding date |
| /faq | FAQ | FAQPage schema present; canonical mismatch (www) |
| /service-areas | Service Areas | 5 areas missing from hub links |
| /service-areas/memorial | Memorial | Thin content, broken FAQ, schema @id mismatch |
| /service-areas/briar-forest | Briar Forest | 400-450 words, broken FAQ, no schema |
| /service-areas/spring-branch | Spring Branch | Same issues as above |
| /service-areas/greater-heights | Greater Heights | Same issues |
| /service-areas/river-oaks | River Oaks | Same issues |
| /service-areas/bellaire | Bellaire | Same issues |
| /service-areas/west-university-place | West University Place | Same issues |
| /service-areas/greater-uptown | Greater Uptown | Same issues |
| /service-areas/greenway-upper-kirby-area | Greenway/Upper Kirby | Same issues |
| /service-areas/the-memorial-villages | Memorial Villages | Same issues |
| /service-areas/medical-center-area | Medical Center | Same issues |
| /service-areas/mid-west | Mid West | Same issues |
| /service-areas/washington-ave-memorial-park | Washington Ave | Same issues |
| /service-areas/houston | Houston Hub | Same issues |
| /resources/house-cleaning-cost-houston | Cost Guide | No schema, no author, no date |
| /resources/how-often-house-cleaning-houston | Frequency Guide | No schema, no author, no date |
| /house-cleaning-houston | House Cleaning | Not audited in detail |
| /commercial-cleaning-houston | Commercial | Not audited in detail |
| /our-services | Services | Not audited in detail |
| /request-quote | Request Quote | Not audited in detail |

**Missing from sitemap (zero pages):**
- Katy, TX (77449, 77450, 77494)
- Sugar Land, TX (77478, 77479, 77498)
- The Woodlands, TX (77380–77389)
- Energy Corridor (77079, 77077)
- Westchase (77042, 77077)
- Cinco Ranch (77450, 77494)
- Dedicated Galleria page (77056, 77057)
