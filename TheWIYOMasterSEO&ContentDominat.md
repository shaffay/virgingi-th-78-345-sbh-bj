🔥 The WIYO Master SEO & Content Domination Prompt
Here is your complete, production-ready prompt to give directly to Claude Code. Copy everything below the divider:

# WIYO.AE — COMPLETE WEBSITE SEO & CONTENT OVERHAUL PROMPT
# TARGET: #1 CRM for UAE Real Estate on Google
# MISSION: Make every visitor fall in love. Make every competitor irrelevant.

---

## CONTEXT — WHO WIYO IS (Read this before touching a single line of code)

WIYO is the Real Estate Operating System for the UAE. Not a generic CRM. Not another WhatsApp tool. A full-stack, AI-powered, multi-tenant enterprise platform built specifically for UAE real estate brokerages — the first of its kind, built from the ground up in the UAE, for the UAE.

**What WIYO replaces:**
A WIYO-equipped agency replaces 6+ standalone paid subscriptions in a single workspace:
- Bayut leads pull
- Property Finder API subscription
- Standalone CRM (e.g. Salesforce, Zoho, HubSpot)
- Separate WhatsApp automation tool
- Separate social media / marketing hub
- Separate billing and contracts system

**Core Modules (7 Engines):**
1. **Intelligent WhatsApp Engine** — Two-way WhatsApp Business API, AI-drafted replies, pre-approved Meta templates, full lead activity sync
2. **AI Lead Qualification Engine** — GPT-4o powered scoring (0-100 hotness), 5-second brief, next best action, auto-drafted outreach (WhatsApp/Email/SMS)
3. **CRM & Leads Pipeline** — 7-stage Kanban (New → Contacted → Qualified → Viewing → Negotiating → Won → Lost), SLA pills (15-min contact SLA), color-coded by lead age (hot/warm/stale), full activity timeline
4. **Off-Plan Pillar (Flagship)** — Map + grid project catalogue, AI Project Match (GPT-4o ranks projects against a lead's brief), AI Project Comparison (2-4 projects side-by-side with AI verdict), Unit Availability Board, full reservation lifecycle (inquiry → holding → reserved → booked → completed), Oqood/escrow capture, document vault
5. **Lead Sourcing (11 Connectors)** — Meta Lead Ads, Google Forms, Google Ads, Google Sheets, Bayut webhook, Property Finder webhook, Dubizzle, JamesEdition (luxury), Zapier, Custom Landing Page, Company Website
6. **Marketing Hub** — Outbound broadcast campaigns, scheduled posts, drip flows, multi-platform scheduling (Meta, LinkedIn, TikTok), brand-voice AI content generation
7. **Listings & Inventory** — Title Deed OCR (GPT-4o Vision auto-fills all DLD fields), passport/Emirates ID OCR for owner verification, AI-generated listing titles + descriptions, drag-and-drop workflow, status pipeline (draft → active → sold)

**Plans & Pricing (AED):**
- WIYO STARTER: AED 2,650/month (5 agents, unlimited leads & inventory)
- WIYO PRO: AED 5,500/month (15 agents, -27% Limited Time)
- WIYO ENTERPRISE: AED 9,900/month (50 agents, -34%)
- Solo Agent CRM: AED 1,000/month (1 agent)

**Current Customers (DO NOT MENTION BY NAME in public SEO content — use only as social proof anchors):**
Real estate agencies in Dubai and the UAE are already live on WIYO PRO and STARTER plans.

**Founder:** Shaffay Bajwa — 5 years in UAE, software engineer, built WIYO after witnessing the same fragmented-tools problem repeatedly across UAE real estate brokerages.

**Tech differentiators (safe to mention publicly):**
- Built in UAE, data hosted in UAE
- Multi-tenant architecture with strict data isolation (each brokerage's data stays its own)
- GPT-4o Vision for Title Deed OCR — scans DLD documents and auto-fills every field
- 15-minute SLA enforcement on the pipeline (automatic red alert if lead not contacted)
- Connects to Bayut, Property Finder, Dubizzle, JamesEdition, Meta, Google — all natively

**SENSITIVE — DO NOT PUBLISH ANYWHERE:**
- Specific revenue figures from the admin panel
- Number of current subscribers/customers
- Any individual customer company names without their explicit consent
- Internal engineering specs, database schema, API keys, deployment details
- Roadmap features marked Confidential
- Admin panel screenshots or URLs

---

## TASK: FULL WEBSITE CONTENT & SEO OVERHAUL

Update `wiyo.ae` (the public marketing website) with the following. The website currently has: a hero section, features section, modules section, pricing section, FAQ section, and a footer. Expand it dramatically with the content below.

---

## 1. PAGE-LEVEL SEO: META TAGS & STRUCTURED DATA

### Homepage (`/`)
```html
<title>WIYO | #1 Real Estate CRM UAE — AI-Powered CRM for Dubai Brokerages</title>
<meta name="description" content="WIYO is the UAE's most advanced AI-powered Real Estate CRM. Built for Dubai brokerages — manage leads from Bayut, Property Finder & Dubizzle, automate WhatsApp, close more off-plan deals. From AED 2,650/month.">
<meta name="keywords" content="real estate CRM UAE, CRM Dubai real estate, property CRM Dubai, real estate software UAE, Bayut CRM integration, Property Finder CRM, off-plan CRM Dubai, WhatsApp CRM UAE, AI CRM real estate, lead management real estate Dubai">
<link rel="canonical" href="https://www.wiyo.ae/">
<meta property="og:title" content="WIYO — The Real Estate Operating System for UAE">
<meta property="og:description" content="Replace 6 tools with one. AI-powered CRM built for UAE real estate agencies. Bayut + Property Finder + WhatsApp + Off-Plan, unified.">
<meta property="og:image" content="https://www.wiyo.ae/og-image.jpg">
<meta property="og:url" content="https://www.wiyo.ae/">
<meta name="twitter:card" content="summary_large_image">
```

Add JSON-LD structured data:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "WIYO",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI-powered Real Estate CRM and Operating System built for UAE brokerages. Integrates Bayut, Property Finder, Dubizzle, WhatsApp and off-plan project management in one platform.",
  "offers": [
    {
      "@type": "Offer",
      "name": "WIYO Starter",
      "price": "2650",
      "priceCurrency": "AED",
      "priceSpecification": { "@type": "UnitPriceSpecification", "billingDuration": "P1M" }
    },
    {
      "@type": "Offer",
      "name": "WIYO Pro",
      "price": "5500",
      "priceCurrency": "AED"
    },
    {
      "@type": "Offer",
      "name": "WIYO Enterprise",
      "price": "9900",
      "priceCurrency": "AED"
    }
  ],
  "creator": {
    "@type": "Organization",
    "name": "WIYO",
    "url": "https://www.wiyo.ae",
    "foundingLocation": "Dubai, UAE",
    "sameAs": ["https://www.instagram.com/wiyo.ae"]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "12"
  }
}
```

Also add:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WIYO",
  "url": "https://www.wiyo.ae",
  "logo": "https://www.wiyo.ae/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AE",
    "addressRegion": "Dubai"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@wiyo.ae",
    "contactType": "sales"
  }
}
```

---

## 2. HERO SECTION — Rewrite

Replace the current hero with this:

**Headline (H1):**
The Real Estate Operating System
Built for the UAE.

**Subheadline:**
Stop juggling Bayut, Property Finder, WhatsApp, your CRM, and your marketing tools as five separate bills.
WIYO is one login, one platform, one source of truth — powered by AI that never sleeps.

**Social proof bar (below CTA):**
✓ Bayut + Property Finder + Dubizzle, connected natively
✓ GPT-4o AI built in — not bolted on
✓ Off-plan & secondary inventory in one view
✓ Built in UAE 🇦🇪 · Data stays in UAE 🇦🇪

**Primary CTA:** "Book a Live Demo" → links to booking/contact
**Secondary CTA:** "See How It Works" → smooth scroll to features

**Trust badges row:**
[Dubai Real Estate] [UAE-Built] [GPT-4o Powered] [RERA-Aware] [WhatsApp API Certified]

---

## 3. THE PAIN SECTION — Rewrite with stronger copy

**Section heading (H2):**
UAE Real Estate Runs on 6 Separate Tools. That Ends Now.

**Body:**
The average Dubai brokerage pays for Bayut leads, a Property Finder subscription, a WhatsApp tool, a CRM, a marketing platform, and something just to handle invoices.
That's six passwords, six support teams, six monthly bills — and six places for your leads to fall through the cracks.
WIYO replaces all of them.

**Pain cards (keep the format, upgrade the copy):**

Card 1 — **The 15-Minute Rule**
78% of buyers sign with the first agent who responds. In Dubai's market, that window is 15 minutes — not hours.
WIYO's pipeline puts a red SLA alert on every lead that hasn't been contacted in 15 minutes. No lead goes cold on your watch.

Card 2 — **The Tool-Juggling Tax**
Your agents open Bayut. Then Property Finder. Then WhatsApp. Then your CRM. Then they update a spreadsheet.
That's 45 minutes of admin before a single deal is worked. WIYO collapses all of it into one screen.

Card 3 — **Off-Plan is Won or Lost on Data**
When a buyer asks "which project is best for me?" — your agent shouldn't be guessing.
WIYO's AI scans every off-plan project in your catalogue, scores it against the buyer's budget and brief, and tells your agent exactly what to pitch. In seconds.

Card 4 — **Leads That Vanish Without a Trace**
Leads from Meta Ads land in one place. Property Finder leads in another. WhatsApp leads in a different chat.
WIYO pulls from 11 sources — Bayut, Property Finder, Dubizzle, Meta, Google, JamesEdition, and more — and lands them all in one pipeline. Zero lead leakage.

---

## 4. FEATURES / MODULES SECTION — Full Rewrite

**Section heading (H2):**
Seven Engines. One Operating System.
Everything your brokerage needs — nothing you don't.

**Section subheading:**
Most CRMs are built for generic sales teams, then awkwardly adapted for real estate.
WIYO was designed from day one for UAE property professionals.

### Module Cards — write each one in full:

---

**Module 1: CRM & Leads Pipeline**
*Icon: pipeline/funnel*
Headline: Your Entire Pipeline, Visible in One Board
Every lead from every source — Bayut, Property Finder, Meta Ads, WhatsApp walk-ins — lands on a single Kanban board with 7 deal stages: New · Contacted · Qualified · Viewing · Negotiating · Won · Lost.
The moment a new lead arrives and isn't contacted within 15 minutes, a red SLA alert fires. Lead cards colour-code automatically: hot (under 2 hours), warm (under 24 hours), stale (over 24 hours). Every team member sees the same truth.
What's inside every lead:
→ Full activity timeline: calls, WhatsApp chats, viewings, stage changes, AI insights, tasks
→ Buyer profile: budget, preferred areas, unit types, language, nationality, pinned notes
→ AI Co-pilot: lead score, 5-second brief, next best action, one-tap message draft
→ Task management: to-dos with due dates, overdue flags
→ Source trace: which campaign, which ad, which platform brought this lead

---

**Module 2: Off-Plan Pillar — The Flagship**
*Icon: buildings/city*
Headline: The Smartest Off-Plan Toolkit in the UAE
Every off-plan project your brokerage sells, on one intelligent screen — map view, grid view, live availability board, and an AI that tells your agents exactly which project to pitch.
The Off-Plan Pillar has four surfaces:
→ Project Catalogue: Map + grid with developer brochures, unit breakdown, price ranges, and availability heatmaps
→ AI Project Match: Feed a buyer's brief (budget, area preference, lifestyle). GPT-4o scores and ranks every project in your catalogue — best match first, with reasoning.
→ AI Compare: Pick 2 to 4 projects. Get an AI verdict and a side-by-side comparison table in seconds.
→ Command Center: Live reservation KPIs, commission projections, availability by project.
Full reservation lifecycle: inquiry → holding → reserved → booked → completed. Oqood and escrow document capture. Per-project document vault and brochure viewer.
No more agents pitching the wrong project. No more lost reservations. No more missed commissions.

---

**Module 3: Lead Sourcing — 11 Connectors**
*Icon: magnet/connections*
Headline: Every Lead. Every Platform. One Inbox.
If a buyer is looking in the UAE, they're probably on Bayut, Property Finder, or Dubizzle — and running a search on Google, seeing your Meta ad, or visiting JamesEdition for luxury properties.
WIYO connects natively to all of them:
✓ Bayut (webhook)
✓ Property Finder (webhook)
✓ Dubizzle (webhook)
✓ Meta Lead Ads (OAuth, auto-enriched from Graph API)
✓ Google Ads lead forms (OAuth)
✓ Google Forms (OAuth)
✓ Google Sheets (live row sync)
✓ JamesEdition (luxury buyer metadata)
✓ Zapier (connect anything)
✓ Custom Landing Pages (embed snippet)
✓ Your Company Website (WordPress + Webflow plugin)
Every lead is validated, normalized, and checked for duplicates (30-day deduplication window) before it enters your pipeline. No manual copy-paste. No missed inquiries. No duplicated contacts.

---

**Module 4: Intelligent WhatsApp**
*Icon: WhatsApp / message*
Headline: WhatsApp, Finally Working for Your Business
WhatsApp is how Dubai does business. But most agencies manage it from a personal phone, miss messages when agents are off, and have zero record of what was said.
WIYO's Intelligent WhatsApp connects to WhatsApp Business API — giving your entire team a shared, managed, professional inbox.
→ Every WhatsApp message automatically syncs to the lead's activity timeline in the CRM
→ AI drafts the perfect reply based on the lead's history and current stage — your agent approves with one tap
→ Pre-approved message templates ready for every stage: first contact, viewing confirmation, follow-up, offer
→ No expensive per-message API fees hidden in the bill
→ Full audit trail: who sent what, when, and to which lead
Your buyers get instant, professional responses. Your agents stop missing messages. Your deals move faster.

---

**Module 5: Listings & Inventory**
*Icon: property/home*
Headline: Add a Listing in Minutes, Not Hours
Uploading a listing used to mean manually typing every detail from a Title Deed — developer name, plot number, area, unit number, all of it. One typo and your DLD submission bounces.
WIYO's Add Listing wizard changes this:
→ Drag and drop the Title Deed PDF. GPT-4o Vision reads every DLD field and auto-fills the form.
→ Drop the owner's passport or Emirates ID. WIYO verifies and stores it for RERA compliance.
→ Need a listing description? Choose your "vibes" (modern, luxury, family-friendly, investment) and AI writes a polished title and description in seconds.
→ Live completion meter guides agents through all 9 steps — no missing fields, no rejected uploads.
Your secondary inventory — draft, active, sold — managed cleanly in one place. Bulk upload for teams managing large portfolios.

---

**Module 6: Marketing Hub**
*Icon: megaphone/rocket*
Headline: Your Agency's Marketing, Running on Autopilot
Stop posting manually and hoping for the best. The WIYO Marketing Hub gives your team a professional broadcast and content engine.
→ Schedule and publish posts across Meta, LinkedIn, and TikTok from one calendar
→ AI generates on-brand content for new listings, project launches, and market updates — with your agency's voice
→ Broadcast campaigns to segmented lead lists via WhatsApp
→ Drip sequences that nurture cold leads automatically over days or weeks
→ Team approval workflows: agents draft, managers approve, nothing goes out unchecked
Turn your listing pipeline into a content machine. Every new property is a marketing opportunity — WIYO makes sure none of them go unannounced.

---

**Module 7: AI Co-pilot**
*Icon: brain/AI/sparkle*
Headline: Every Agent Gets a Personal AI Strategist
WIYO's AI Co-pilot is powered by GPT-4o and embedded directly in the platform — not a separate tab, not a chatbot, not an add-on.
What the AI does on every lead:
→ Lead Score (0–100): Is this buyer serious? The AI scores every lead based on their profile, engagement, and behaviour.
→ 5-Second Brief: Before an agent calls, they see a one-paragraph summary of everything they need to know about that buyer.
→ Next Best Action: The AI recommends one concrete next step — whether to call, send a WhatsApp, schedule a viewing, or pitch a specific project.
→ Draft Message: One tap generates a personalised outreach message tailored to the lead's status, channel (WhatsApp, email, or SMS), and history.
What the AI does on off-plan:
→ Matches buyers to the best projects in your catalogue
→ Generates a side-by-side project comparison with a recommended winner
Your agents close more because they always know exactly what to do next.

---

## 5. COMPARISON / WHY WIYO SECTION

**Add a new section with H2:**
Why UAE Agencies Choose WIYO Over Generic CRMs

**Comparison table — insert as HTML table with semantic markup:**

| Feature | WIYO | Generic CRM (Salesforce, Zoho, HubSpot) | Pixxi / LeadRat |
|---|---|---|---|
| Built for UAE Real Estate | ✅ 100% purpose-built | ❌ Adapted from generic | ✅ Partial |
| Off-Plan Project Management | ✅ Full lifecycle + AI Match | ❌ Not available | ⚠️ Limited |
| AI Lead Scoring (GPT-4o) | ✅ Native, every lead | ⚠️ Add-on / extra cost | ❌ Not available |
| Title Deed OCR Auto-fill | ✅ DLD-aware Vision AI | ❌ Not available | ❌ Not available |
| Bayut + PF + Dubizzle Native | ✅ All 3, zero configuration | ❌ Requires Zapier | ⚠️ Partial |
| WhatsApp Business API | ✅ Built-in, AI-drafted replies | ❌ Third-party integration | ⚠️ Basic |
| 11 Lead Sources in One Inbox | ✅ Unified, deduped | ❌ Manual integrations | ⚠️ Fewer sources |
| UAE Data Residency | ✅ Data stays in UAE | ❌ Usually US/EU servers | ⚠️ Unknown |
| Pricing (starting) | AED 2,650/mo | AED 3,000–15,000+/mo | AED varies |
| Setup Time | ✅ Same day | ❌ Weeks of onboarding | ⚠️ Days |

**Below the table, add this copy:**
Generic CRMs like Salesforce and Zoho were built for software companies and retailers.
They don't know what a Title Deed is. They've never heard of Oqood. They don't integrate with Bayut.
WIYO does. Because WIYO was built in Dubai, by people who live in this market, for the agencies competing in it every day.

---

## 6. PRICING SECTION — Rewrite

**Section heading:**
Transparent Pricing. Built for UAE Agencies of Every Size.

**Section subheading:**
No hidden fees. No per-lead charges. No surprise API bills.
Pay for your plan, and your entire team runs on WIYO.

### Plan Cards:

**WIYO SOLO** — AED 1,000/month *(early-bird)*
For the independent agent who wants a professional edge.
→ 1 Agent Login
→ Unlimited Leads
→ Unlimited Listings & Inventory
→ CRM Pipeline (all 7 stages)
→ Off-Plan Project Access
→ AI Lead Scoring & Copilot
→ WhatsApp Activity Sync
Perfect for: Freelance agents and solo operators in Dubai and across the UAE.

**WIYO STARTER** — ~~AED 3,500~~ **AED 2,650/month**
For growing teams ready to replace the tools stack.
→ 5 Agent Seats
→ Unlimited Leads & Inventory
→ Full CRM Pipeline + SLA Enforcement
→ 11 Lead Source Connectors (Bayut, PF, Meta, Google, etc.)
→ Off-Plan Pillar (Projects + AI Match + Compare)
→ Intelligent WhatsApp Engine
→ AI Co-pilot on every lead
→ Listings with Title Deed OCR
→ 1 Team Workspace
Perfect for: Small-to-mid Dubai and UAE brokerages (2–5 agents).

**WIYO PRO** *(Most Popular)* — ~~AED 7,500~~ **AED 5,500/month** *(−27% Limited Time)*
For established agencies scaling aggressively.
Everything in Starter, plus:
→ 15 Agent Seats
→ Marketing Hub (broadcast, drip, social scheduling, AI content)
→ Advanced Campaign Routing
→ Priority Support
→ Team Performance Analytics
Perfect for: Mid-to-large Dubai real estate agencies with active marketing and 5–15 agents.

**WIYO ENTERPRISE** — ~~AED 15,000~~ **AED 9,900/month** *(−34%)*
For the agencies that dominate their market.
Everything in Pro, plus:
→ 50 Agent Seats
→ Multi-team workspaces
→ Dedicated Onboarding Manager
→ Custom SLA agreements
→ White-glove integration support
→ API access
Perfect for: Large brokerages and developer sales teams operating at scale across Dubai, Abu Dhabi, and the UAE.

**Enterprise CTA below pricing:**
Running 50+ agents, multiple offices, or a developer's in-house sales team?
Talk to us about custom pricing, dedicated infrastructure, and white-label options.
[Talk to Enterprise Sales →]

**Pricing disclaimer:**
All prices in AED · Billed monthly · No lock-in contracts · Cancel anytime
UAE VAT may apply

---

## 7. FAQ SECTION — Expand to 15 Questions

Replace the current FAQ with these (write full answers for each):

1. **What exactly is WIYO and who is it built for?**
   WIYO is a complete Real Estate Operating System built specifically for UAE property brokerages. It combines CRM, off-plan inventory management, lead sourcing from Bayut, Property Finder, Dubizzle and 8 more sources, WhatsApp automation, AI-powered lead scoring, marketing, and billing — in one platform. It's built for agencies of 1 to 50+ agents in Dubai and across the UAE.

2. **How is WIYO different from Salesforce, Zoho, or HubSpot?**
   Generic CRMs are built for software sales teams. They don't know what a Title Deed is, they don't connect to Bayut or Property Finder, they have no concept of off-plan reservation lifecycle or Oqood. WIYO is purpose-built for UAE real estate — every feature, every integration, every workflow was designed for how Dubai agencies actually operate.

3. **Does WIYO connect to Bayut, Property Finder, and Dubizzle?**
   Yes — all three, natively. Leads from Bayut, Property Finder, and Dubizzle flow directly into your WIYO pipeline in real time. No Zapier. No CSV uploads. No manual copy-paste.

4. **How does the AI work in WIYO?**
   WIYO uses GPT-4o (OpenAI's most capable model) for five AI features: lead scoring, lead summaries, next-action recommendations, draft message generation, and off-plan project matching. The AI is built directly into the platform — it reads your actual lead data, your property catalogue, and the buyer's history to give relevant, actionable intelligence.

5. **What is the Title Deed OCR feature?**
   When adding a secondary listing, you can drag and drop a Title Deed PDF onto the WIYO wizard. GPT-4o Vision reads the document — developer name, plot number, unit number, area, all DLD fields — and auto-fills your listing form. No manual typing. No errors. No rejected submissions.

6. **Can WIYO replace my WhatsApp tool?**
   Yes. WIYO includes a full WhatsApp Business API integration. All inbound WhatsApp messages from your leads sync automatically to their CRM profile. AI drafts replies based on the lead's history. Your team approves and sends with one tap. It's a full shared team inbox — not a personal phone number.

7. **What is the 15-Minute SLA in WIYO?**
   78% of buyers choose the first agent who responds. Research shows the window is roughly 15 minutes. WIYO's pipeline enforces a 15-minute SLA: if a new lead arrives and no agent has contacted them within 15 minutes, a red alert appears on the lead card in the Kanban board. This keeps your team accountable and your response times competitive.

8. **How does the Off-Plan AI Match work?**
   In WIYO's Off-Plan Pillar, you select a lead and click "AI Match." The system takes the buyer's brief — budget, preferred areas, unit type, lifestyle — and feeds it to GPT-4o along with every project in your catalogue. The AI ranks projects from best match to worst, with a written explanation for each. Your agents stop guessing. They pitch the right project, every time.

9. **Which cities and countries does WIYO work in?**
   WIYO is optimised for the UAE market — Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, and across the Emirates. The platform supports multi-nationality leads, multi-language notes, and all UAE-specific requirements including RERA document handling and Oqood/DLD compliance workflows.

10. **Is my data safe? Where is it stored?**
    WIYO uses a strict multi-tenant architecture — your agency's data is completely isolated from every other brokerage on the platform. Data is hosted in UAE-based infrastructure. You own your data. WIYO never sells or shares it.

11. **How quickly can we get started?**
    Most agencies are fully onboarded the same day they sign up. Your agents get their logins, you connect your lead sources (we guide you through each one), and you're live. No weeks of implementation. No consultants required.

12. **Does WIYO support off-plan developers, not just brokers?**
    Yes. WIYO's Enterprise plan is designed for developer in-house sales teams managing large project catalogues, multiple agents across sites, and high-volume reservation flows. Talk to our team for a custom demo.

13. **What is the Marketing Hub?**
    The Marketing Hub lets your team plan, create, approve, and publish social content across Meta, LinkedIn, and TikTok — and send WhatsApp broadcast campaigns to segmented lead lists. AI generates on-brand content for new listings and project launches. Everything goes through a team approval workflow before it's published.

14. **Can I add modules as my agency grows?**
    Yes. WIYO is modular. You start with the plan that fits your team today, and add the Marketing Hub, expanded agent seats, and enterprise features as you scale. No forced upgrades.

15. **What's included in Enterprise and how do I get a quote?**
    Enterprise includes 50 agent seats, multi-team workspaces, a dedicated onboarding manager, custom SLA agreements, API access, and white-glove integration support. Contact us at hello@wiyo.ae or book a call through the website.

---

## 8. SOCIAL PROOF SECTION

**Add a new section called "Trusted by UAE Real Estate Professionals":**

```html
<!-- Social proof section — add before FAQ -->
<section id="testimonials">
  <h2>What UAE Real Estate Professionals Are Saying</h2>
  <p>From solo agents to established Dubai brokerages — built by people who understand the UAE market.</p>

  <!-- Testimonial card format — use real testimonials when available, use these as placeholder structure -->
  <div class="testimonial-card">
    <blockquote>"Finally a CRM that actually knows how Dubai real estate works. Bayut and Property Finder leads in one place, AI that tells my agents what to do next — this is what we've been waiting for."</blockquote>
    <cite>— Real Estate Agency, Dubai Marina</cite>
  </div>

  <div class="testimonial-card">
    <blockquote>"We used to juggle five tools and still lose leads. WIYO consolidated everything and the 15-minute SLA has genuinely changed how our team operates."</blockquote>
    <cite>— Property Broker, Downtown Dubai</cite>
  </div>

  <div class="testimonial-card">
    <blockquote>"The off-plan AI match is a game-changer. When a buyer asks which project is right for them, my agents have an AI-backed answer in 10 seconds."</blockquote>
    <cite>— Agency Director, Dubai</cite>
  </div>
</section>
```

**NOTE: Replace placeholder testimonials with real quotes from real WIYO customers as soon as available. Do NOT publish fabricated testimonials with real names or fake company names.**

---

## 9. NEW STANDALONE PAGES TO CREATE

### Page 1: `/real-estate-crm-dubai`
**Title:** `Real Estate CRM Dubai | WIYO — Built for Dubai Brokerages`
**Meta description:** `The best real estate CRM for Dubai agents and brokers. Native Bayut, Property Finder & Dubizzle integration. AI lead scoring, off-plan management, WhatsApp automation. From AED 2,650/month.`

**Content outline:**
- H1: The Real Estate CRM Dubai's Top Agencies Actually Use
- Why Dubai Real Estate Needs a Specialist CRM (not Salesforce, not Zoho)
- Dubai-Specific Features: RERA documents, DLD Title Deed OCR, Oqood capture
- The Dubai Lead Sources WIYO Connects To (Bayut, PF, Dubizzle, JamesEdition for luxury)
- How WIYO Handles Dubai's Off-Plan Market (the biggest commission segment)
- Pricing in AED, transparent, no hidden costs
- CTA: Book a Dubai-Specific Demo

### Page 2: `/uae-real-estate-crm`
**Title:** `UAE Real Estate CRM | WIYO — CRM for Agents Across the Emirates`
**Meta description:** `WIYO is the leading AI-powered CRM for UAE real estate agencies. Works across Dubai, Abu Dhabi, Sharjah and all Emirates. Bayut, Property Finder integration. AED pricing. Book a free demo.`

**Content outline:**
- H1: UAE's First Real Estate Operating System
- The UAE Real Estate Landscape: Why generic CRMs fail here
- Features built for UAE compliance (RERA, Oqood, Emirates ID OCR)
- Multi-emirate support (Dubai, Abu Dhabi, Sharjah, RAK)
- UAE data hosting — your data stays in the UAE
- Pricing in AED (no USD conversion surprises)
- CTA: Start UAE Trial

### Page 3: `/off-plan-crm-uae`
**Title:** `Off-Plan CRM UAE | AI-Powered Off-Plan Sales Management | WIYO`
**Meta description:** `Manage your off-plan portfolio with AI. WIYO's Off-Plan Pillar gives Dubai agents AI project matching, live unit availability, reservation tracking, and Oqood capture. The only CRM built for off-plan.`

**Content outline:**
- H1: The Only CRM Built for UAE Off-Plan Sales
- The Off-Plan Commission Opportunity (and why most CRMs miss it)
- WIYO's Off-Plan Pillar: Projects, AI Match, AI Compare, Command Center
- Full Reservation Lifecycle: inquiry to completed, with Oqood
- AI Project Match: How GPT-4o ranks your catalogue for every buyer
- CTA: See Off-Plan Demo

### Page 4: `/bayut-property-finder-crm`
**Title:** `Bayut & Property Finder CRM Integration | WIYO`
**Meta description:** `WIYO connects your Bayut and Property Finder leads directly into your CRM pipeline. Real-time sync, no manual uploads, automatic deduplication. The best CRM for Bayut and Property Finder users in UAE.`

**Content outline:**
- H1: Bayut + Property Finder Leads, Automatically in Your CRM
- Why manual lead management from portals kills deals
- How WIYO's native webhooks work (real-time, no Zapier)
- The 11 lead sources WIYO connects to
- Deduplication: never work the same lead twice
- CTA: Connect Your Portals Free

### Page 5: `/whatsapp-crm-dubai`
**Title:** `WhatsApp CRM for Dubai Real Estate | WIYO`
**Meta description:** `Manage all your buyer WhatsApp conversations in one professional inbox. AI-drafted replies, full CRM sync, team shared access. The WhatsApp CRM built for Dubai real estate agents.`

**Content outline:**
- H1: Turn WhatsApp from a Chaos Tab into a Closing Machine
- The WhatsApp Problem in UAE Real Estate
- WIYO's Intelligent WhatsApp: Shared Inbox, AI Replies, CRM Sync
- How buyers are handled 24/7 without hiring more staff
- CTA: See WhatsApp in Action

### Page 6: `/blog` (Blog landing + 5 initial articles)

---

## 10. SEO BLOG ARTICLES — 5 to Publish at Launch

### Article 1: `/blog/best-real-estate-crm-dubai-2026`
**Title:** `The 7 Best Real Estate CRM Platforms for Dubai Agents in 2026 (Ranked)`
**Target keyword:** "best real estate CRM Dubai"
**Word count:** 2,200 words
**Outline:**
- Introduction: Why UAE agents need a specialist CRM
- The criteria: UAE portal integrations, off-plan support, WhatsApp, pricing in AED
- #1 WIYO — built in UAE, most complete
- #2–7: Pixxi, LeadRat, Salesforce, Zoho, HubSpot, Pipedrive (honest comparisons, highlight where WIYO wins on UAE-specific features)
- Conclusion: The bottom line for Dubai agencies in 2026

### Article 2: `/blog/bayut-property-finder-crm-integration-guide`
**Title:** `How to Connect Bayut and Property Finder to Your CRM (2026 Guide)`
**Target keyword:** "Bayut Property Finder CRM integration"
**Word count:** 1,800 words
**Outline:**
- Why your leads from portals are getting lost
- Manual vs webhook integration (why webhooks win)
- Step-by-step guide using WIYO's native connectors
- Lead deduplication: why it matters
- Response time statistics in UAE property market
- WIYO's 15-minute SLA explained

### Article 3: `/blog/off-plan-real-estate-crm-uae`
**Title:** `Why UAE Off-Plan Sales Teams Need a Specialist CRM in 2026`
**Target keyword:** "off-plan CRM UAE"
**Word count:** 1,600 words
**Outline:**
- The off-plan opportunity: Dubai's pipeline of projects
- Why Salesforce and Zoho fail for off-plan
- Key features every off-plan CRM must have (AI match, inventory, Oqood)
- How WIYO was built specifically for this segment
- Real workflow: from inquiry to completed reservation

### Article 4: `/blog/whatsapp-real-estate-dubai-agents`
**Title:** `How Dubai Real Estate Agents Should Be Using WhatsApp in 2026`
**Target keyword:** "WhatsApp real estate Dubai"
**Word count:** 1,500 words
**Outline:**
- WhatsApp in UAE: the numbers (90%+ smartphone penetration, most-used platform)
- Why a personal number isn't good enough for a brokerage
- WhatsApp Business API vs WhatsApp Business App
- How to manage a team inbox professionally
- WIYO's Intelligent WhatsApp: AI replies, CRM sync, audit trail
- Response time benchmarks in Dubai's property market

### Article 5: `/blog/ai-real-estate-crm-uae`
**Title:** `AI-Powered CRM for UAE Real Estate: What Agents Need to Know in 2026`
**Target keyword:** "AI CRM UAE real estate"
**Word count:** 1,800 words
**Outline:**
- The AI revolution in UAE property sales
- What AI can and cannot do for real estate agents
- Lead scoring: how it works and why it matters
- AI project matching for off-plan: a practical example
- Title Deed OCR: saving hours on listing admin
- GPT-4o vs older AI tools — what's different
- How WIYO embeds AI natively (not as an add-on)
- The future: where AI in UAE real estate is heading

---

## 11. NAVIGATION — Recommended Site Architecture

Update navigation to:
[WIYO Logo] | Features | Off-Plan | Integrations | Pricing | Blog | Book a Demo [CTA button]

Footer columns:
Column 1 — PRODUCT
Features
Off-Plan CRM
Integrations
Pricing
Changelog
Column 2 — SOLUTIONS
Dubai Brokerages
Off-Plan Sales Teams
Solo Agents
Enterprise
Column 3 — INTEGRATIONS
Bayut CRM
Property Finder CRM
Dubizzle Leads
Meta Ads
WhatsApp Business
Column 4 — COMPANY
About
Blog
Contact
hello@wiyo.ae
Privacy Policy
Terms of Service
Built in UAE 🇦🇪

---

--



## 12. TECHNICAL SEO REQUIREMENTS

Implement all of the following:

1. SITEMAP — Generate /sitemap.xml with all pages, updated dates, priority scores:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.wiyo.ae/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.wiyo.ae/real-estate-crm-dubai</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.wiyo.ae/uae-real-estate-crm</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.wiyo.ae/off-plan-crm-uae</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.wiyo.ae/bayut-property-finder-crm</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.wiyo.ae/whatsapp-crm-dubai</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.wiyo.ae/pricing</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.wiyo.ae/blog</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wiyo.ae/blog/best-real-estate-crm-dubai-2026</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wiyo.ae/blog/bayut-property-finder-crm-integration-guide</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wiyo.ae/blog/off-plan-real-estate-crm-uae</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wiyo.ae/blog/whatsapp-real-estate-dubai-agents</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.wiyo.ae/blog/ai-real-estate-crm-uae</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
</urlset>
```

2. ROBOTS.TXT — Create /robots.txt:
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /_next/
Sitemap: https://www.wiyo.ae/sitemap.xml

3. CANONICAL TAGS — Add `<link rel="canonical">` to every single page. No duplicate content.

4. HREFLANG — Add English as default. Add Arabic (ar-AE) variant if/when Arabic pages exist:
```html
<link rel="alternate" hreflang="en" href="https://www.wiyo.ae/" />
<link rel="alternate" hreflang="x-default" href="https://www.wiyo.ae/" />
```

5. OPEN GRAPH + TWITTER CARDS — Every page must have unique og:title, og:description, og:image. Never use default homepage OG on inner pages.

6. PAGE SPEED — Critical requirements:
   - Largest Contentful Paint (LCP) under 2.5 seconds
   - Use next/image or equivalent for all images with width/height attributes set
   - Lazy load all images below the fold
   - Preload hero image with `<link rel="preload" as="image">`
   - No render-blocking scripts in <head> — defer or async all JS
   - Use system fonts or subset/preload any custom fonts
   - Compress all images to WebP format
   - Add `loading="lazy"` to all non-hero images

7. HEADING HIERARCHY — Every page must follow:
   - Exactly ONE H1 per page (the primary keyword phrase)
   - H2 for major sections
   - H3 for sub-features and sub-points
   - Never skip heading levels

8. INTERNAL LINKING STRATEGY — Implement these cross-links:
   - Homepage hero → /real-estate-crm-dubai, /off-plan-crm-uae
   - Features section → each dedicated feature page
   - Pricing → /pricing standalone page
   - Every blog article links back to at least 2 feature pages
   - Footer links to all key pages (already specified above)
   - Add a "Related Articles" section at the bottom of every blog post

9. IMAGE ALT TEXT RULES — Every image must have descriptive alt text with keywords:
   - Hero image: alt="WIYO real estate CRM dashboard for UAE brokerages"
   - Pipeline screenshot: alt="CRM lead pipeline for Dubai real estate agents showing Bayut and Property Finder leads"
   - Off-plan screenshot: alt="Off-plan project AI matching tool for UAE real estate"
   - WhatsApp screenshot: alt="WhatsApp CRM inbox for Dubai property agents"
   - Logo: alt="WIYO — Real Estate CRM UAE"

10. SCHEMA MARKUP FOR BLOG ARTICLES — Add to every blog post:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article Title]",
  "description": "[Article meta description]",
  "author": {
    "@type": "Person",
    "name": "Shaffay Bajwa",
    "jobTitle": "Founder & CTO, WIYO"
  },
  "publisher": {
    "@type": "Organization",
    "name": "WIYO",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.wiyo.ae/logo.png"
    }
  },
  "datePublished": "[ISO date]",
  "dateModified": "[ISO date]",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "[full URL]" }
}
```

11. FAQ SCHEMA — Add to homepage and any page with FAQ:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What exactly is WIYO and who is it built for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WIYO is a complete Real Estate Operating System built specifically for UAE property brokerages. It combines CRM, off-plan inventory management, lead sourcing from Bayut, Property Finder, Dubizzle and 8 more sources, WhatsApp automation, AI-powered lead scoring, marketing, and billing — in one platform."
      }
    },
    {
      "@type": "Question",
      "name": "Does WIYO connect to Bayut and Property Finder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — natively. Leads from Bayut, Property Finder, and Dubizzle flow directly into your WIYO pipeline in real time via webhooks. No Zapier, no manual uploads."
      }
    },
    {
      "@type": "Question",
      "name": "How much does WIYO cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WIYO starts at AED 1,000/month for solo agents and AED 2,650/month for the Starter team plan (5 agents). The Pro plan for up to 15 agents is AED 5,500/month. Enterprise for up to 50 agents is AED 9,900/month. All prices in AED, billed monthly, no long-term contracts."
      }
    }
  ]
}
```

12. BREADCRUMB SCHEMA — Add to all inner pages:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.wiyo.ae" },
    { "@type": "ListItem", "position": 2, "name": "[Page Name]", "item": "https://www.wiyo.ae/[slug]" }
  ]
}
```

13. CORE WEB VITALS — Add to <head>:
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```
Ensure all interactive elements are minimum 44x44px touch targets for mobile.

14. GOOGLE SEARCH CONSOLE — After deploying, submit sitemap immediately at search.google.com/search-console

15. 301 REDIRECT MAP — If any old URLs existed, add these redirects in your framework config:
/features → /#features
/join-waitlist → /#pricing

---

## 13. HOMEPAGE ADDITIONAL SECTIONS TO ADD

### Section: "How It Works" (3-step visual)

**Heading:** `From Sign-Up to Closing — In Days, Not Months`

**Step 1 — Connect**
Day 1: Connect your lead sources.
Plug in Bayut, Property Finder, Dubizzle, Meta Ads, and Google in under an hour.
Every lead flows into your WIYO pipeline automatically from that moment forward.

**Step 2 — Close**
Day 1 onwards: Let AI do the heavy lifting.
Every new lead is scored, summarised, and matched to the right off-plan project.
Your agents know exactly who to call, what to say, and which property to pitch — before they even pick up the phone.

**Step 3 — Scale**
Month 1+: See what your business is actually doing.
Real-time dashboards show every agent's performance, every lead source's ROI, every deal in the pipeline.
Add more agents, more modules, more sources — WIYO scales with you.

---

### Section: "Built for the UAE" (Trust + Localisation)

**Heading:** `Built in the UAE. For the UAE. By Someone Who Lived It.`

**Body copy:**
WIYO was founded in Dubai by Shaffay Bajwa — a software engineer who spent five years watching UAE real estate agencies pay for tools that were never designed for them.
Generic CRMs don't know what RERA is. They've never seen a DLD Title Deed. They have no idea how Bayut works, what Oqood means, or why a buyer from Russia behaves differently from one coming through JamesEdition.
WIYO was built with all of that baked in from day one. The workflows match how UAE agencies actually operate. The integrations are the portals UAE buyers actually use. The AI understands the UAE property market context.
This isn't software adapted for the UAE. This is software engineered for it.
UAE Data. UAE Pricing (AED). UAE Support Team. UAE-first product roadmap.

---

### Section: "Integration Logos" (Visual Trust Bar)

Add a clean integration logos section showing:
- Bayut logo
- Property Finder logo
- Dubizzle logo
- Meta/Facebook logo
- Google logo
- WhatsApp Business logo
- JamesEdition logo
- OpenAI / GPT-4o badge

**Heading above logos:** `Connects to every platform UAE agents rely on`
**Subtext:** `11 native lead sources. Zero manual imports. All flowing into one pipeline.`

---

### Section: "Numbers" (Social Proof Stats)
[7] Core Modules — One operating system
[11] Native Lead Sources — Bayut, PF, Meta, Google & more
[15 min] SLA Enforcement — No lead goes cold
[AED 2,650] Starting price — Per month, all inclusive
[GPT-4o] AI engine — Not a chatbot. Not a widget. Native intelligence.
[UAE 🇦🇪] Where we're built — And where your data stays

---

### Section: "For Every Role in Your Agency"

**Heading:** `Built for Every Person on Your Team`

**Agency Owner / Director:**
See every agent's performance in real time. Know which lead sources are delivering ROI.
Track pipeline health, conversion rates, and revenue forecasts from a single dashboard.
WIYO gives you the visibility to make every decision with confidence — not gut feel.

**Sales Manager:**
Assign leads instantly. Monitor SLA compliance across your team.
Know which deals are hot, which are stalling, and where to focus today.
No more chasing agents for updates. The pipeline tells you everything.

**Sales Agent:**
Your morning starts with your personal pipeline — scored, prioritised, with AI-briefed notes on every lead.
One tap to draft a WhatsApp. One click to match a buyer to the perfect off-plan project.
Spend your time selling. WIYO handles the rest.

**Marketing Manager:**
Publish across Meta, LinkedIn, and TikTok from one calendar.
AI generates on-brand content for new listings and project launches in minutes.
See which campaigns are bringing leads — not just likes.

---

## 14. CONVERSION OPTIMISATION (CRO)

Implement these conversion elements throughout the site:

1. **Sticky Header CTA** — The header nav should become sticky on scroll with a persistent "Book a Demo" button visible at all times on desktop.

2. **Exit-Intent Popup** — On desktop, trigger a popup when the cursor moves toward the browser close button:
Heading: "Before you go — see WIYO in 5 minutes."
Sub: "Book a quick screen share. We'll show you how your Bayut and Property Finder leads flow into WIYO live."
CTA: "Yes, show me →"

3. **Floating WhatsApp Button** — Add a WhatsApp chat icon (bottom-right fixed position) with the pre-filled message: "Hi WIYO team, I'd like to see a demo for my real estate agency."

4. **Demo Booking Form** — Replace "Join Waitlist" everywhere with "Book a Live Demo" linking to a Calendly or inline booking form with fields:
   - Name
   - Email
   - Phone (UAE format preferred)
   - Agency name
   - Number of agents
   - "What's your biggest challenge right now?" (free text, optional)

5. **Social Proof Ticker** — Add a subtle live-feel ticker near the CTA:
"✓ 3 new UAE agencies joined WIYO this week"
"✓ Trusted by Dubai real estate professionals"
"✓ Live and active across the UAE"
   (Only display factually accurate statements — update as real numbers grow)

6. **Urgency / Scarcity on Pricing** — Keep the existing "Limited Time" badge on WIYO PRO pricing and add:
"Founder pricing ends when capacity is reached — lock in your rate now."

7. **Mobile CTA Bar** — On mobile, add a fixed bottom bar with two buttons:
[WhatsApp Us] [Book a Demo]

---

## 15. WRITING TONE & STYLE GUIDE (for all content)

Follow these rules for every sentence written on wiyo.ae:

**Voice:** Confident, direct, intelligent. Like a founder who knows their product cold and respects the reader's time. No corporate fluff.

**Never write:**
- "Leverage synergies"
- "Best-in-class solution"
- "Robust platform"
- "State-of-the-art technology"
- "Streamlined workflows"
- "Cutting-edge"
- "End-to-end solution"

**Always write:**
- Specific, concrete benefits ("15-minute SLA alert" not "fast notifications")
- UAE-context phrases ("Bayut leads", "DLD Title Deed", "Oqood", "RERA")
- Active voice ("WIYO connects to Bayut" not "Bayut can be connected to through WIYO")
- Short paragraphs. Max 3 sentences before a line break.
- Numbers whenever possible ("11 lead sources" not "many sources")
- Address the reader as "your team", "your agency", "your agents" — not "users"

**Formatting rules:**
- H1: Sentence case. Max 8 words. Contains primary keyword.
- H2: Benefit-led. Starts with "The", "Your", "How", "Why" or a power word.
- CTAs: Action verbs. "Book a Demo", "See It Live", "Start Free", "Talk to Sales" — NOT "Submit", "Click here", "Learn more"
- Bullet points: Max 6 per block. Each starts with a benefit, not a feature name.

---

## 16. LOCAL SEO SIGNALS

Add these to the site footer and contact page to boost local UAE search signals:

```html
<!-- Local Business Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "WIYO",
  "description": "AI-powered Real Estate CRM and Operating System built for UAE brokerages",
  "url": "https://www.wiyo.ae",
  "email": "hello@wiyo.ae",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "areaServed": [
    { "@type": "City", "name": "Dubai" },
    { "@type": "City", "name": "Abu Dhabi" },
    { "@type": "City", "name": "Sharjah" },
    { "@type": "AdministrativeArea", "name": "United Arab Emirates" }
  ],
  "priceRange": "AED 1,000 – AED 9,900 per month",
  "currenciesAccepted": "AED",
  "paymentAccepted": "Credit Card, Bank Transfer"
}
</script>
```

Also add in the visible footer text:
WIYO · Built in Dubai, UAE 🇦🇪
Serving real estate agencies across Dubai, Abu Dhabi, Sharjah, and the Emirates
hello@wiyo.ae

---

## 17. KEYWORD TARGETING MASTER LIST

Use these keywords naturally throughout all content — never stuff, always contextual:

**Primary UAE Real Estate CRM Keywords (High Priority):**
- real estate CRM UAE
- CRM for real estate Dubai
- property CRM Dubai
- real estate CRM software UAE
- best CRM for real estate agents UAE
- Dubai real estate CRM
- UAE property management software

**Off-Plan Specific Keywords:**
- off-plan CRM Dubai
- off-plan real estate software UAE
- off-plan sales management software Dubai
- property project management UAE
- Oqood management software

**Integration Keywords:**
- Bayut CRM integration
- Property Finder CRM
- Dubizzle lead management
- Bayut Property Finder CRM Dubai
- real estate portal CRM integration UAE

**WhatsApp CRM Keywords:**
- WhatsApp CRM real estate Dubai
- WhatsApp business real estate UAE
- WhatsApp lead management Dubai

**AI/Technology Keywords:**
- AI CRM real estate UAE
- AI property sales software Dubai
- GPT-4o real estate CRM
- AI lead scoring real estate
- artificial intelligence real estate UAE

**Comparison/Alternative Keywords:**
- Salesforce alternative UAE real estate
- Zoho alternative Dubai real estate
- HubSpot alternative UAE property
- CRM for real estate agents not Salesforce
- Pixxi alternative
- LeadRat alternative UAE

**Long-tail Buyer Intent Keywords:**
- best CRM for Dubai real estate agency 2026
- how to manage Bayut leads in CRM
- off-plan real estate CRM Dubai 2026
- WhatsApp automation for real estate agents UAE
- AI real estate software UAE 2026

---

## 18. FINAL IMPLEMENTATION CHECKLIST

Before considering this update complete, verify every item:

**Content:**
- [ ] Homepage hero updated with new H1, subheadline, and social proof bar
- [ ] Pain section rewritten with 4 detailed cards
- [ ] All 7 module descriptions written in full with benefits-first language
- [ ] Comparison table added (WIYO vs generic CRMs vs niche tools)
- [ ] Pricing section updated with all 4 plans, clear value props per plan
- [ ] FAQ expanded to 15 full questions with complete answers
- [ ] "Built for the UAE" trust section added
- [ ] "How It Works" 3-step section added
- [ ] "For Every Role" section added
- [ ] Integration logos section added
- [ ] Numbers/stats section added
- [ ] Social proof / testimonials section added (with placeholder structure ready for real quotes)

**Pages:**
- [ ] /real-estate-crm-dubai created with full content
- [ ] /uae-real-estate-crm created with full content
- [ ] /off-plan-crm-uae created with full content
- [ ] /bayut-property-finder-crm created with full content
- [ ] /whatsapp-crm-dubai created with full content
- [ ] /blog landing page created
- [ ] 5 blog articles created with full SEO-optimised content

**Technical SEO:**
- [ ] Unique title tags on every page (50–60 characters)
- [ ] Unique meta descriptions on every page (140–160 characters)
- [ ] Canonical tags on every page
- [ ] Open Graph tags on every page with unique og:image per page
- [ ] /sitemap.xml generated and submitted to Google Search Console
- [ ] /robots.txt created
- [ ] JSON-LD structured data: SoftwareApplication, Organization, FAQ, Article, LocalBusiness, Breadcrumb
- [ ] All images have descriptive alt text with keywords
- [ ] All images converted to WebP format and lazy-loaded
- [ ] H1/H2/H3 hierarchy correct on every page
- [ ] Mobile-responsive verified at 375px, 768px, 1280px breakpoints
- [ ] Page speed: LCP under 2.5s, no render-blocking scripts
- [ ] Internal links between all pages and blog posts
- [ ] Footer updated with all linked pages

**Conversion:**
- [ ] "Join Waitlist" replaced with "Book a Demo" everywhere
- [ ] Sticky header with persistent CTA
- [ ] Floating WhatsApp button added
- [ ] Mobile fixed bottom CTA bar added
- [ ] Demo booking form with agency-specific fields
- [ ] Urgency messaging on pricing

**Do NOT publish:**
- [ ] Confirmed: no admin panel metrics, revenue figures, or subscriber counts exposed
- [ ] Confirmed: no individual customer names without consent
- [ ] Confirmed: no internal engineering details, API keys, or database schema
- [ ] Confirmed: no roadmap features marked Confidential in WIYO Docs
- [ ] Confirmed: no fabricated testimonials with fake names attached

---

## FINAL NOTE TO CLAUDE CODE

This is a complete content and SEO overhaul, not a reskin. Every section of the website needs to be rewritten with substance, specificity, and UAE real estate context. Generic CRM language is the enemy — every sentence should make a Dubai real estate agent feel like this was written specifically for them, because it was.

The goal is simple: when a Dubai broker Googles "real estate CRM UAE," "Bayut CRM," "off-plan CRM Dubai," or "WhatsApp CRM real estate" — WIYO is the first result they see, and the only platform they want to sign up for.

Build it like WIYO is already the king. Because it will be.

That's your complete, production-ready Claude Code prompt. Here's what it covers in full:
Sections completed:

✅ 12 — Technical SEO (sitemap XML, robots.txt, canonicals, hreflang, page speed, heading hierarchy, image alt text, schema markup for Articles, FAQ, Breadcrumbs, Core Web Vitals, redirect map)
✅ 13 — Extra homepage sections (How It Works, Built for UAE, Integration Logos, Numbers Stats, For Every Role)
✅ 14 — Conversion optimisation (sticky header, exit-intent, WhatsApp button, demo form, urgency)
✅ 15 — Writing tone & style guide (with banned phrases list)
✅ 16 — Local SEO signals (LocalBusiness schema, UAE area targeting)
✅ 17 — Master keyword list (primary, off-plan, integration, WhatsApp, AI, comparison, long-tail)
✅ 18 — Complete implementation checklist (content, pages, technical, conversion, sensitive-info guardrails)