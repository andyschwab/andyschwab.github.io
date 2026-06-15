# DESIGN.md — andyschwab.link

The living source of decisions for Andy Schwab's professional site. The site is a "business card on the internet" for a consulting practice: nonpretentious, calm, and confident, with credibility carried by judgment and consistency rather than metrics. This document is written so a separate build session can implement and iterate rapidly without re-litigating decisions.

Status: design locked, implementation not yet started. Draft copy below is a starting point to refine, not final wording.

---

## 1. Purpose & Audience

- **The job of this page:** this is not a pitch, and it will not win work on its own. No one decides to hire Andy because of a web page. Its real job is to *not get in the way* — to reassure someone who has already met Andy, been introduced to him, or received his outreach that he is who he seemed to be: real, credible, and consistent in voice and values. Remove reasons to hesitate; never manufacture reasons to act.
- **Primary audience:** people who already have context — someone Andy has met, been introduced to, or reached out to — looking him up afterward.
- **Primary action:** make it effortless to reply or reach out. Email only; no form, no funnel, no scheduler.
- **Hosting:** GitHub Pages, apex domain `andyschwab.link` (see `CNAME`). Sibling properties: `blog.andyschwab.link` (writing, published via `leaflet.pub`) and `at.fund` (a side project, intentionally not featured yet).

---

## 2. Unified Offering Framing (the anchor)

- **Practice name / headline:** **Human-centered technology & operations.** (This is the page headline — the former eyebrow, promoted.)
- **Punchline (closes the intro paragraph):** *"Technology and operations, built around people."*
- **Plain-English gloss of the idea:** helping organizations adopt emerging technology and lead the change that makes it stick, with people at the center.
- **The single idea:** introducing new capability into an organization in a way that *strengthens the people in it rather than routing around them.* Technology is the new capability; operations and leadership are what make it actually take hold.
- **Two facets of one practice, not a menu:**
  - **Technology** — building software and putting AI to work where it sharpens judgment.
  - **People** — operations and leadership that turn new capability into lasting change.
- **Shared differentiator across both:** humans stay at the center of the decision and grow through the change.

---

## 3. Positioning & Voice

### Convictions to convey
- **AI is augmentation, not abdication.** "AI is a mirror, not a mind" — its value is helping people decide better and faster, never making the decision for them. (Echoes the blog essay *Deus Ex Machina*.)
- **Management is growth, not control.** Good operations make expectations legible, create real accountability, and help people become more than they were hired for. Deliberately reframes the management-as-adversary narrative. (Avoid the word "ladders.")
- **Integrity and dignity are the operating system.** Both the technology work and the people work rest on treating everyone involved with integrity and dignity.

### The credibility approach (the "no unicorn metrics" problem)
- The visitor's real question is "is this person real and legitimate?" **Legitimacy is carried by concrete, verifiable specifics, not by phrasing.** Words get out of the way of facts.
- Name real, checkable things and make them easy to confirm: Protocol Labs / Filecoin, command of an Officer Candidate School, the book (with ISBN), the design paper, the NH gubernatorial commissions — plus outbound links (GitHub, LinkedIn, the book, the paper).
- Lead with **responsibility held and things built**, stated plainly and understated.
- Show **judgment, range, and consistency over time** rather than vanity numbers.
- Never brag, never use superlatives, never invent metrics.

### Tone
- Literate, anti-hype, humane, precise. Short sentences. No buzzwords. Plain English over consulting nouns.

### Voice mechanics
- The enemy is the *pitch*, not the pronoun. Ban the selling, not the "I."
- No "you" / "your"; no helper-hero framing ("I help you," "I work with leaders who"); no benefit-promises.
- Natural, active voice. A light, factual first person is fine and reads as direct and accountable ("I built identity and access infrastructure at Protocol Labs"). Do NOT contort sentences into passive or odd word order to dodge a pronoun.
- Terse and declarative, but still human sentences — not résumé fragments or brochure-speak.

### What this page is NOT
- Not a landing page or a funnel. No urgency, no scarcity framing, no "book a call" energy.
- No marketing superlatives, no feature-list brochure copy, no verb-stacked service blurbs.
- No equivocation or filler ("genuinely," "always the same," "real products"). Say the plain thing once.
- Success = someone who already knows Andy reads it and feels confirmed in reaching out. Failure = anything that makes him read like a generic consultant-for-hire.

---

## 4. Page Structure (compressed)

Three sections plus a footer. No separate header bar; the intro is the top of the page. One column throughout.

1. **Intro** — centered, rounded **portrait** (the authenticity anchor, recognizable from other profiles); the **name** as a small kicker; the **headline** ("Human-centered technology & operations."); a short prose **snapshot** of prior experience (no résumé list) that lands on the **punchline**; a low-key email link.
2. **The work** — the two facets (Technology — software & AI; Operations & leadership — people & process), tight, with a single conviction line folded in so the philosophy survives without its own section.
3. **Connect** — email, a plain "open to new work / UK-based" line, and links (GitHub, LinkedIn, Bluesky, Blog — the writing lives here as a link).
4. **Footer** — "Supporting:" (Archive.org, Wikimedia, Signal, Open Source, leaflet.pub) as the only personality trace; copyright.

Dissolved from the earlier draft: the standalone Approach, Selected background (list), and Writing sections. Background becomes the intro snapshot, the convictions shrink to one line in The work, and writing is a link in Connect.

---

## 5. Draft Copy (refine, don't ship as-is)

### Intro
- Portrait: centered, rounded. Alt: "Andy Schwab".
- Kicker (mono, small): `ANDY SCHWAB`
- Headline: **Human-centered technology & operations.**
- Snapshot paragraph (prose, no list; weave verifiable specifics as inline links): "Twenty years building teams and running the systems that hold distributed organizations together — command of an Officer Candidate School in the Army, technology operations and identity infrastructure at [Protocol Labs](https://protocol.ai), a venture-backed startup built and wound down, a software development program taught, a book and [a design paper](https://github.com/sodal-project/community) written along the way." (Link the book to its listing if one exists; otherwise leave plain — *Ultralight IT*, ISBN 978-0997869309.)
- Now-line + punchline: "Now helping leaders put new technology, especially AI, to use without losing the judgment and trust their people depend on. *Technology and operations, built around people.*"
- Email link: plain inline link, label "Email", to `hi@andyschwab.link`. Not a button.

### The work
- **Technology — software & AI.** "I build software and apply AI where it sharpens judgment rather than replacing it. Recent work: a platform that uses AI to improve access-control decisions for organizations without a full IAM system."
- **Operations & leadership — people & process.** "Good operations create the clarity that lets people do their best work — legible expectations, real accountability, room to grow. Not management as control."
- **Conviction line (folds the old Approach):** "Underneath both: technology is a mirror, not a mind, and management grows people rather than controlling them. Keep people at the center."

### Connect
- Email: `hi@andyschwab.link` (plain inline link).
- Line: "Currently open to new work. UK-based." (plain; no scarcity framing)
- Links: GitHub (`github.com/andyschwab`), LinkedIn (`linkedin.com/in/andrewsch`), Bluesky (`bsky.app/profile/andyschwab.link`), Blog (`blog.andyschwab.link`).

### Footer
- "Supporting:" Archive.org · Wikimedia · Signal · Open Source · leaflet.pub.
- "© Andy Schwab" (current year).

---

## 6. Design System

### Typography
- **Primary (headings + body):** Atkinson Hyperlegible Next — accessibility-first, dignified humanist sans; matches the blog. Load via Google Fonts. Fallback stack: `system-ui, -apple-system, Segoe UI, Roboto, sans-serif`.
- **Mono accent:** IBM Plex Mono — small labels and metadata only: the name kicker, section labels, link rows, footer (uppercase, letter-spaced, small). Fallback: `ui-monospace, SFMono-Regular, Menlo, monospace`.
- **Scale (fluid via `clamp()`):**
  - Kicker / meta (mono): `0.8125rem`, uppercase, `letter-spacing: 0.08em`.
  - Body: `clamp(1.05rem, 1rem + 0.3vw, 1.2rem)`, line-height `1.6`.
  - h3 (service titles): `clamp(1.2rem, 1.1rem + 0.5vw, 1.4rem)`.
  - h2 (section titles): `clamp(1.5rem, 1.2rem + 1.2vw, 2rem)`.
  - h1 (headline — the promoted former eyebrow; set in the sans, not mono): `clamp(2.1rem, 1.6rem + 2.6vw, 3.4rem)`, line-height `1.15`.
- **Measure:** 60–68ch for text columns.

### Color
Light is the default ("warm paper"); dark follows `prefers-color-scheme`. Use CSS custom properties.

Light:
- `--bg` (paper): `#FAF8F3`
- `--surface`: `#FFFFFF`
- `--ink` (primary text): `#1B1B19`
- `--ink-secondary`: `#57544C`
- `--border`: `#E2DCCE`
- `--accent` (evergreen): `#2E5D4B`
- `--accent-strong` (hover): `#244A3C`

Dark:
- `--bg`: `#131512`
- `--surface`: `#1B1E1A`
- `--ink`: `#ECE9E0`
- `--ink-secondary`: `#A8A498`
- `--border`: `#2C302B`
- `--accent`: `#7FB59B`
- `--accent-strong`: `#9CCBB4`

Decision: evergreen accent (a mature thread back to the old terminal green) over slate/blue. All text/accent pairings must meet WCAG AA (4.5:1 body, 3:1 large).

### Layout & spacing
- Single narrow column, page max-width ~`46rem`; text/measure column ~`36rem`.
- **Intro is centered** (portrait, kicker, headline, and short snapshot all center-aligned); keep the snapshot brief so centered text stays readable. Subsequent sections are left-aligned within the measure.
- 4px base unit; rem steps: `0.25 / 0.5 / 0.75 / 1 / 1.5 / 2 / 3 / 4 / 6 / 8`.
- Section vertical padding: `clamp(3.5rem, 7vw, 7rem)`.
- Generous whitespace, clear separation between sections (space and/or a hairline `--border` rule).

### Motion
- Subtle scroll reveal: fade + ~12px `translateY`, `~0.5s ease`, light stagger, via `IntersectionObserver` (threshold ~0.15).
- Content is visible by default; JS only adds the reveal. Fully disabled under `prefers-reduced-motion: reduce`.
- No magnetic photo, no dock, no dropdowns, no decorative gimmicks.

### Imagery
- `images/andyschwab-photo.jpeg` — centered, rounded (circle), prominent (~`7–9rem`), static (no interaction). This is the authenticity anchor: the same face shown on other profiles.
- Add a simple monogram favicon (e.g. "AS"). Retire Beret Guy as the primary icon; it may survive as a hidden easter egg if desired.

### Accessibility
- WCAG AA contrast throughout. Semantic landmarks (`header`, `main`, `section`, `footer`). Visible focus states. Full keyboard navigation. A skip-to-content link. Respect reduced motion.

---

## 7. Tech & File Plan (for the future build)

Vanilla HTML/CSS/JS, no build step, no framework.

- `index.html` — semantic single-scroll page with the sections above, plus full meta/SEO:
  - `<title>`: "Andy Schwab — Human-Centered Technology & Operations"
  - meta description (see SEO below), Open Graph + Twitter card tags, canonical `https://andyschwab.link/`.
  - JSON-LD `Person` schema (name, url, jobTitle, sameAs links, `addressCountry: GB` only — no city, email).
  - Remove the existing magnetic-photo script and the dock/dropdown scripts.
- `styles.css` — rewritten for the design system (custom properties, light/dark, fluid type, generous spacing).
- `main.js` — small; scroll-reveal only, gated behind `prefers-reduced-motion`.
- `images/` — keep the portrait; add monogram favicon; add a 1200×630 Open Graph image (to be created).
- Keep `CNAME` and `LICENSE`. Update `README.md` with a one-line description and brief edit instructions.

### SEO defaults
- Description: "Andy Schwab — human-centered technology and operations. Twenty years across the military, Protocol Labs, and education; now consulting on technology and the operations to make it stick, with people at the center."
- Keep the description factual and plain; it is for someone confirming who Andy is, not a sales hook.

---

## 8. Decisions Log (defaults chosen)

- Page purpose: a reassurance / "don't get in the way" page for people who already have context — not a pitch or a funnel.
- Headline: **"Human-centered technology & operations."** (former eyebrow promoted to headline; "change" rejected as jargon; former headline "Technology and operations, built around people" demoted to the intro punchline).
- Structure: **compressed** to three sections + footer — Intro (centered portrait + kicker + headline + prose snapshot + punchline), The work, Connect. No separate header bar. Dissolved the standalone Approach, Background-list, and Writing sections.
- Background: a **prose snapshot**, not a résumé list; verifiable specifics carried as inline links.
- Services: **two** facets (Technology — software & AI; Operations & leadership), not three. AI integration and software development merged; convictions reduced to one line.
- Aesthetic: calm editorial; Atkinson Hyperlegible Next + IBM Plex Mono accents.
- Accent color: desaturated **evergreen** (not slate/blue).
- Engagement: `mailto` + a plain "currently open to new work / UK-based" line (no scarcity, no form, no scheduler).
- Location: shown as "UK-based" (no city); JSON-LD uses `addressCountry: GB` only.
- Writing: a link in Connect (no standalone section; link out to the blog rather than hardcoding titles).
- Personality: subtle trace only — the "Supporting:" footer (now including leaflet.pub); gimmicks retired.
- Voice: ban the pitch, not the pronoun — no "you," natural active voice with a light factual "I"; no passive contortions.
- Tech: vanilla, zero build, GitHub Pages apex.

---

## 9. Out of Scope (noted for later)

- `at.fund` and other side projects — a future "Building" / projects section.
- Linking or reworking the CV PDF (`public/202606 - Andrew Schwab - CV.pdf`).
- Contact form or scheduler.
- Any framework, bundler, or build pipeline.
- Analytics (none for now; add intentionally if ever needed).

---

## 10. Source Facts (reference, from CV & blog)

Used to keep copy accurate; not all of this appears on the page.
- Based in Southampton, UK. Email `hi@andyschwab.link`.
- Sodal — Founder & CEO, 2024–2026; venture-backed; published *Agency Graphs* (MIT) as closing artifact.
- Protocol Labs — Internal Systems Lead (2020–2022), then Principal, Identity & Access (2023–2024); graph-based IAM securing thousands across Filecoin ecosystem.
- Unus Cygnus — Founder & CTO (2021–2023); preserved 1PiB+ of public scientific/civic data.
- US Army / Army National Guard — 2001–2021, Major (Retired); two combat deployments; directed the Georgia ARNG Officer Candidate School; trained deployed soldiers during the Arab Spring.
- NHTI — Assistant Professor, software development program (2017–2019).
- Adventures In Missions — Head of Technology (2013–2017); nonprofit in 50+ countries.
- Publications: *Agency Graphs* (2026); *Ultralight IT* (2016, ISBN 978-0997869309).
- Public service: Gov. Sununu's Commission on Cryptocurrency & Digital Assets (2022); Gov. Ayotte's Commission to Study Stabletokens (2025).
- Education: BS, Computer Information Systems, University of New Hampshire (Manchester), 2009.
