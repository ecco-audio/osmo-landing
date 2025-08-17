# Osmosis Messaging Strategy & Implementation Plan

## 📋 Project To-Dos

### 🚨 0. Critical: SEO/Security - Prevent Pricing Exposure
**Status:** URGENT
- Check robots.txt to exclude sensitive pages/sections
- Ensure pricing proposals and sensitive content are not indexed
- Add noindex meta tags where appropriate
- Review all public-facing content for accidental data exposure

### 🎨 1. Add Favicon
**Status:** Pending
- Add favicon.ico to public directory
- Include various sizes for different devices
- Update HTML head with favicon links

### 🔗 2. Solutions Page Integration
**Status:** In Progress
- **Option A:** Direct Links - Simple `href="https://solutions.osmosis.fm"` links
- **Option B:** Integrated Experience - Pass user data via URL params, maintain session continuity
- **Option C:** Embedded Components - Iframe or API integration for seamless UX

**Key Decisions Needed:**
- Pass user context to solutions page?
- Track conversion from landing → solutions?
- Maintain consistent styling/branding across both pages?

### 📊 3. PostHog Analytics Integration
**Status:** Pending
- Set up PostHog tracking across landing page
- Implement conversion funnel tracking (landing → solutions → signup)
- Add event tracking for key user interactions (CTA clicks, form submissions, etc.)
- Configure A/B testing for messaging variants

### ✍️ 4. Copy Cleanup & Refinement
**Status:** Partially Complete
- ✅ Implement centralized messaging system with JSON
- ⏳ Final copy review and polish based on messaging strategy
- ⏳ Update remaining sections (testimonials, social proof, etc.)
- ⏳ Implement "Who it's for" section by role

### 🎨 5. Solutions Page Visual Alignment
**Status:** Out of Scope (Future Phase)
- Align solutions.osmosis.fm look and feel with landing page
- Ensure consistent typography, colors, and component styling
- Unified design system across both properties

---

## 🎯 Strategic Overview

Love the direction. Your Solutions page nails the ROI story; the Landing page has strong brand voice but hides the money. Below is a practical plan to keep the poetry and surface the payoff—plus drop‑in copy you can paste today.

---

## 🚀 Quick Wins (Priority Fixes)

### 1. Lead with outcomes, not mechanics
- Keep "Osmosis listens" as a brand line, but make the H1 about winning mandates

### 2. Name the buyer above the fold
- IR / capital formation / institutional sales

### 3. Show proof immediately
- Put 3–4 hard numbers right under the hero (meetings, plans, opps/month, win-rate, $100M+ sourced quote)

### 4. Collapse overlapping sections
- "Features / Conversations / Hidden Insights" → single "What you can do" block tied to outcomes

### 5. Unify CTAs
- Primary: "View live opportunities" (Landing + Solutions)
- Secondary: "Book demo"
- Remove "Free trial" unless self‑serve is ready

### 6. Route by role
- Add "Who it's for" section (IR, Sales, PM/Strategy, Consulting) with one outcome each

### 7. Reduce cognitive load
- Shorten sentences
- Swap passive "monitor/track" language for active "win/meet/source" language

---

## 📋 Recommended Information Architecture

### Landing Page Structure:
1. **Hero** (Outcome + Role + Proof)
2. **Social proof strip** (logos or "Trusted by leading…")
3. **What you can do with Osmosis** (3–4 outcome cards)
4. **How it works** (3 steps)
5. **Proof & coverage** (metrics + sources covered)
6. **Use cases by role** (IR, Sales, PM/Research, Consulting)
7. **Testimonials** (short, punchy)
8. **FAQ** (sources, update cadence, coverage, pricing, security)
9. **Primary CTA footer** ("Your next mandate is already in motion")

---

Drop‑in copy (paste‑ready)

Note: Replace bracketed numbers with your current metrics (keep them consistent across both pages). If needed, add “as of Q[##]” in light gray microcopy.

1) Hero

Pre‑headline: Allocator Intelligence
H1 (default): Intelligence that wins mandates
Subhead: Osmosis turns public allocator meetings and documents into a real‑time opportunity feed—so IR and distribution teams know who’s buying, what they want, and when to act.
Primary CTA: View live opportunities
Secondary CTA: See how it works

Proof bar (under CTAs):

[4,000+] active allocator meetings this quarter

[360] public plans tracked

[160] new opportunities / month

[20%] presentation hit rate

Brand line (keep the poetry, but demote it):
The world is speaking. Osmosis listens.

A/B alt hero (Hybrid):
H1: Win your next mandate
Subhead: The world is speaking. Osmosis listens. We index allocator meetings in real time and route actionable asks to your team.

2) Social proof strip

Trusted by leading hedge funds, credit managers, and consulting firms.
(Swap in logos where you have permission.)

3) What you can do with Osmosis (outcomes, not features)

Turn allocator signals into pipeline

See live mandates form across public plans, consultants, and committees.

Prioritized feed of allocators matching your strategy.

Be first to the meeting

Alerts when a plan’s priorities shift or a new sleeve opens.

Guidance on who to contact and why now.

Spend time where it matters

Thousands of meetings distilled into clear asks, timing, and constraints.

Route insights to the right person on your team.

Prove your edge

Track presentations, hit rates, and coverage by plan.

Show management the meetings and dollars Osmosis influences.

(CTA under this block: “View live opportunities”)

4) How it works (3 simple steps)

Listen to everything
We monitor public board, IC, and staff meetings, presentations, minutes, and filings across [360+] plans and related entities—updated daily.

Extract the ask
We distill what allocators want (mandate size, strategy, constraints, timing) and map it to your coverage.

Route & act
We send role‑aware alerts and one‑page briefs to IR and sales so the right person reaches out with the right message—first.

5) Proof & coverage

Coverage that compounds

[4,000+] active allocator meetings this quarter

[360] public plans tracked

[500k+] historical meetings & documents indexed

Daily and hourly updates

Customer outcomes

“I’ve sourced two $100M+ opportunities from Osmosis in the past month.” — IR Executive, $30B hedge fund

“Raising capital is harder than ever. Osmosis keeps our sales team in front of the right investors.” — Head of Distribution, Global Investment Firm

(CTA: “See coverage map”)—optional link to a coverage page/section.

6) Use cases by role

IR / Capital Formation

Prioritize allocators who are actively looking for your strategy.

Enter meetings with verbatim asks and recent context.

Sales / Distribution

Hit quota with fewer, better meetings.

Replace generic outreach with allocator‑specific messages.

PM / Strategy

Watchlist of plans that fit your mandate.

Know when mandates expand, contract, or add sleeves.

Consulting / Research

Track policy shifts and investment beliefs across plans.

Rapidly brief partners with meeting‑ready summaries.

7) Product surface (rename “Features” → “Platform”)

Allocator alerts (real time)
Meeting & presentation search
Allocator dashboards
Document & transcript archive
Meeting calendar tracking

(One sentence each if you want tooltips; keep copy terse on the page.)

8) Testimonials (tighten to results)

“I’ve sourced two $100M+ opportunities from Osmosis in the past month.”

“These insights keep our sales team in front of the right investors—more quality at‑bats, less wasted time.”

(Consider a third from consulting or multi‑asset if you have it.)

9) FAQ (most‑asked, short answers)

What sources do you cover?
Public meetings (boards, ICs), presentations, minutes, agendas, and related documents from public plans and allocators.

How fresh is the data?
Updates daily (many hourly); alerts fire as soon as new content is processed.

Which plans are included?
[360+] U.S. public plans today, expanding quarterly. Ask about specific plans.

How do teams get started?
We set up your watchlists and alert rules in a 15‑minute onboarding.

Is there a free trial?
We offer short pilots for qualified teams. Request access to see live opportunities.

10) Footer CTA

Your next mandate is already in motion
See where allocators are leaning today—and act first.
[View live opportunities]   [Book a 15‑minute demo]

Navigation & CTA strategy

Nav: Solutions · Coverage · Customers · Resources · Pricing (optional) · Sign in

CTA (persistent): View live opportunities

If self‑serve isn’t ready, swap any “Start free trial” to Request access (microcopy: “We’ll confirm coverage for your strategy and set up a live feed.”)

Microcopy improvements

Buttons: “View live opportunities” / “See how it works” / “Create my watchlist”

Form header (if you keep a form on Landing): “Get access to live allocator activity”

Helper text: “No spam. We’ll tailor your watchlist in a 15‑minute call.”

Visual/layout notes (quick wins)

Compress hero height and move the proof bar above the fold.

Replace long paragraphs with one‑line value + 2 bullets.

Keep numbers in numerals (e.g., 4,000+, 360) for scanning.

Use role icons for the Role section to aid orientation.

If logos aren’t cleared, use an industry row (“Top‑10 hedge funds”, “Top consulting firms”).

What to reuse from the Solutions page (on Landing)

The phrase “Intelligence that wins mandates.”

The 4 KPI counters (allocator meetings, plans, opps/month, hit rate).

The two testimonials (use the shorter versions).

The Platform feature names (keep 5; don’t list everything).

A/B tests worth running

Hero wording:
A: “Intelligence that wins mandates” vs. B: “Win your next mandate”

Primary CTA:
A: “View live opportunities” vs. B: “See allocator activity now”

Proof bar position:
A: under CTAs vs. B: above H1 (left‑justified, compact)

SEO essentials

Title: Osmosis — Allocator Intelligence That Wins Mandates

Meta description: Osmosis turns public allocator meetings and documents into a real‑time opportunity feed. See who’s buying, what they want, and when to act.

H1: Intelligence that wins mandates

H2s: What you can do · How it works · Coverage & proof · Use cases · Testimonials · FAQ




# Osmosis Messaging Comparison
## Landing Page vs Solutions Page

---

## 🎯 Main Headlines

| **Landing Page (Current)** | **Solutions Page** |
|------------------------|-----------------|
| **The world is speaking.**<br>**Osmosis listens.** | **Intelligence that wins mandates** |
| *Poetic, abstract* | *Direct, ROI-focused* |

---

## 📝 Value Propositions

| **Landing Page** | **Solutions Page** |
|-----------------|------------------|
| Osmosis tracks public records from pension funds, corporations, governments, and nonprofits. We monitor meetings, earnings, interviews, and key documents, alerting you whenever a narrative shifts. | Users regularly source $100M+ mandates<br><br>One mandate pays for everything<br><br>Attend thousands of allocator meetings in real-time<br><br>Personalized insights into allocator priorities |

---

## 📊 Metrics & Proof Points

| **Landing Page** | **Solutions Page** |
|-----------------|------------------|
| **$6T** in AUM tracked<br>**500K** meetings and interviews<br>**Daily and hourly updates** | **4,000+** active allocator meetings<br>**360** public plans tracked<br>**20%** presentation hit rate<br>**160** opportunities per month |

---

## 🎯 Target Audience

| **Landing Page** | **Solutions Page** |
|-----------------|------------------|
| *Implied:* Investment professionals<br>*Not explicitly stated* | **Explicit:** Institutional investors and fundraising teams |

---

## 🔥 Feature Descriptions

### Landing Page Features:
1. **Monitor Key Entities**
   - "Osmosis continuously scans meetings, documents and press releases for changes in strategy"

2. **Centralize & Summarize**
   - "We consolidate relevant insights into an easy-to-navigate hub, complete with highlights, summaries, and actionable next steps"

3. **Act on Real-Time Signals**
   - "The moment an entity you follow modifies their strategy, you get an immediate notification on why it matters to you and your team"

### Solutions Page Features:
- Full platform access
- Real-time allocator alerts
- Meeting & presentation search
- Allocator dashboards
- Document & transcript archive
- Meeting calendar tracking

---

## 💬 Customer Testimonials

| **Landing Page** | **Solutions Page** |
|-----------------|------------------|
| "I've sourced two $100M+ opportunities from Osmosis in the past month."<br>- IR Executive, $30B Hedge Fund | "I've sourced two $100M+ opportunities from Osmosis"<br>*(Same testimonial, simplified)* |
| "Raising capital is harder than ever. These insights allow our sales people to spend more time in front of the right investors getting quality at bats."<br>- Head of Distribution, $400B Global Investment Firm | "Raising capital is harder than ever. These insights allow our sales people to spend more time in front of the right investors"<br>*(Same testimonial, simplified)* |

---

## 🚀 Calls to Action

| **Landing Page** | **Solutions Page** |
|-----------------|------------------|
| **Primary:** GET STARTED<br>**URL:** https://osmosis.fm/enter | **Primary:** View live opportunities<br>**Secondary:** Start Free Trial<br>**Tertiary:** Learn More |
| **Contact Form:** "Start your free trial" | **Pricing:** Contact sales for each tier |

---

## 📱 Section Headers/Pills

| **Landing Page** | **Solutions Page** |
|-----------------|------------------|
| FEATURES | Intelligence that wins mandates |
| CONVERSATIONS DISTILLED | Prove the edge / Scale your advantage / Dominate the market |
| HIDDEN INSIGHTS | |
| FUNDRAISING INTEL | |
| READY TO STREAMLINE? | |

---

## 🎨 Tone & Style

| **Landing Page** | **Solutions Page** |
|-----------------|------------------|
| **Tone:** Sophisticated, abstract, monitoring-focused<br>**Style:** Feature-oriented, descriptive | **Tone:** Direct, ROI-focused, action-oriented<br>**Style:** Results-oriented, specific |

---

## 💡 Key Messaging Themes

### Landing Page Themes:
- **Listening & Monitoring** - Passive observation
- **Tracking & Scanning** - Data collection
- **Alerts & Notifications** - Information delivery
- **Real-time Intelligence** - Speed of information

### Solutions Page Themes:
- **Winning Mandates** - Active results
- **Sourcing Opportunities** - Direct value creation
- **ROI Focus** - "One mandate pays for everything"
- **Competitive Advantage** - "Prove the edge", "Dominate the market"

---

## 🔄 Overlapping Messages

Both pages share:
- Same customer testimonials (though edited on solutions)
- Focus on allocator intelligence
- Real-time monitoring capabilities
- Meeting and document tracking

---

## 📈 Positioning Evolution

**Landing Page Position:**
> We are a monitoring and intelligence platform that tracks public records and alerts you to changes.

**Solutions Page Position:**
> We are a mandate-winning platform that helps you source $100M+ opportunities.

---

## 🎯 Recommendations for Alignment

### Option 1: Keep Differentiated
- Landing page = Top of funnel, educational
- Solutions page = Bottom of funnel, conversion-focused

### Option 2: Align on ROI Messaging
- Update landing to match "Intelligence that wins mandates"
- Use specific metrics across both
- Unify CTAs to "View live opportunities"

### Option 3: Hybrid Approach
- Keep poetic headline on landing
- Add ROI metrics and "wins mandates" as subheading
- Update CTAs to point to solutions.osmosis.fm
- Remove "free trial" language in favor of "View live opportunities"