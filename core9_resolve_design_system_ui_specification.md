# CORE9 RESOLVE™ — Design System & UI Component Specification

**Document Class:** Master Design System, Tailwind CSS Configuration & Interactive Component Spec  
**Companion Document:** `core9_resolve_website_blueprint.md` (Content, IA & Copy)  
**Target Environment:** Antigravity IDE (React / Next.js / Tailwind CSS / Lucide Icons / Framer Motion or CSS Transitions)  
**Architecture Paradigm:** "One Skeleton, Two Skins" (Unified 9-Part Geometric Layout Engine with Dual Theme Tokens for **Business** and **SAGE**)

---

## 1. Design Philosophy & Visual Architecture

### 1.1 The "One Skeleton, Two Skins" Principle
CORE9 RESOLVE™ Business and SAGE by CORE9 RESOLVE™ share the same underlying living-system methodology. To express this visually without confusing their distinct target audiences:
* **Shared Skeleton:** Both environments use the exact same spatial geometry, container widths, 9-unit bento grid structures, progressive disclosure drawers, and vector node physics.
* **Skin 1 — CORE9 RESOLVE™ Business (`theme-business`):** *Architectural Precision & Living Mechanics.* High-contrast Swiss editorial grids, exposed `1px` structural hairlines, technical monospace indexing, and deep obsidian/alabaster surfaces accented with cobalt and burnished gold.
* **Skin 2 — SAGE by CORE9 RESOLVE™ (`theme-sage`):** *Tactile Warmth & Playful Inquiry.* Sunlit parchment and terracotta clay surfaces, expressive editorial serif headlines, organic rounded corners, and interactive 3D card mechanics connected to the BAWA virtual Playground.

---

## 2. Global Design Tokens & Tailwind CSS Configuration

### 2.1 Color Palette Tokens

#### Theme A: CORE9 RESOLVE™ Business (`[data-theme="business"]`)
| Token Role | CSS Variable | Hex Value | Tailwind Utility Equivalent | Component Application |
| :--- | :--- | :--- | :--- | :--- |
| **Background Primary** | `--bg-primary` | `#F8FAFC` | `bg-slate-50` | Main page canvas, high-clarity reading sections |
| **Background Secondary** | `--bg-secondary` | `#FFFFFF` | `bg-white` | Elevated diagnostic cards, bento cells, intake containers |
| **Surface Inverse (Dark)** | `--bg-inverse` | `#0B0F17` | `bg-slate-950` | Functional Engine (`CORE•NINE•RESOLVE`) & Matrix sections |
| **Text Primary** | `--text-primary` | `#0F172A` | `text-slate-900` | Primary headlines and executive body copy |
| **Text Secondary** | `--text-secondary` | `#475569` | `text-slate-600` | Sub-headlines, captions, supporting descriptions |
| **Accent Primary** | `--accent-primary` | `#1D4ED8` | `text-blue-700` / `bg-blue-700` | Interactive vectors, active navigation, analytical highlights |
| **Accent 9th Function** | `--accent-nine` | `#D97706` | `text-amber-600` / `border-amber-500` | **Guardian of Well-Being (9th Intelligence)**, primary CTAs, aligned states |
| **Diagnostic Friction** | `--state-friction` | `#DC2626` | `text-red-600` / `bg-red-500/10` | Operational inefficiencies, functional misalignment indicators |
| **Diagnostic Aligned** | `--state-aligned` | `#059669` | `text-emerald-600` / `bg-emerald-500/10` | Synchronized execution, restored functional integrity |
| **Border Hairline** | `--border-subtle` | `#E2E8F0` | `border-slate-200` | Exposed 9-grid architectural dividers (`1px solid`) |

#### Theme B: SAGE by CORE9 RESOLVE™ (`[data-theme="sage"]`)
| Token Role | CSS Variable | Hex Value | Tailwind Utility Equivalent | Component Application |
| :--- | :--- | :--- | :--- | :--- |
| **Background Primary** | `--bg-primary` | `#FBF8F3` | `bg-[#FBF8F3]` | Warm parchment canvas for personal exploration |
| **Background Secondary** | `--bg-secondary` | `#F2EAE1` | `bg-[#F2EAE1]` | Soft terracotta clay containers, deck preview stages |
| **Surface Inverse (Deep)** | `--bg-inverse` | `#1C2826` | `bg-[#1C2826]` | Deep forest sanctuary sections, BAWA Playground portal banner |
| **Text Primary** | `--text-primary` | `#292524` | `text-stone-800` | Grounded espresso umber for approachable readability |
| **Text Secondary** | `--text-secondary` | `#57534E` | `text-stone-600` | Supporting narrative and workshop details |
| **Accent Primary** | `--accent-primary` | `#3F6212` | `text-lime-900` / `bg-lime-900` | Botanical sage buttons, human vitality accents |
| **Accent Playful** | `--accent-nine` | `#E11D48` | `text-rose-600` / `amber-600` | Metaphorical deck highlights, interactive Playground triggers |
| **Border Hairline** | `--border-subtle` | `#E7E0D6` | `border-[#E7E0D6]` | Soft organic container borders |

---

### 2.2 Typography System & Scale

Import via Google Fonts in the root document head:
* **Architectural Sans (Business Headings & Shared UI):** `'Plus Jakarta Sans', sans-serif` (Weights: 400, 500, 600, 700)
* **Editorial Serif (SAGE Headings & Pull Quotes):** `'Instrument Serif', serif` or `'Fraunces', serif` (Weight: 400, Italic)
* **Technical Monospace (Diagnostic Indices & Engine Badges):** `'JetBrains Mono', monospace` (Weight: 500)

| Element / Role | Font Family | Desktop Size / Line Height | Mobile Size / Line Height | Tailwind Classes |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display (H1)** | Business: `Plus Jakarta Sans`<br>SAGE: `Instrument Serif` | `56px` / `1.1` (`-0.02em`) | `38px` / `1.15` | `text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]` |
| **Section Header (H2)** | Business: `Plus Jakarta Sans`<br>SAGE: `Instrument Serif` | `40px` / `1.15` (`-0.015em`) | `28px` / `1.2` | `text-2xl md:text-4xl font-semibold tracking-tight` |
| **Subsystem Title (H3)** | `Plus Jakarta Sans` | `24px` / `1.3` | `20px` / `1.35` | `text-xl md:text-2xl font-semibold` |
| **Lead / Core Tenet** | `Plus Jakarta Sans` | `20px` / `1.6` | `18px` / `1.55` | `text-lg md:text-xl font-normal leading-relaxed` |
| **Body Standard** | `Plus Jakarta Sans` | `16px` / `1.65` | `16px` / `1.6` | `text-base leading-relaxed` |
| **System Index / Tag** | `JetBrains Mono` | `12px` / `1.4` (`+0.08em`) | `11px` / `1.4` | `font-mono text-xs uppercase tracking-widest` |

---

### 2.3 Drop-In `tailwind.config.js` Reference

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        business: {
          canvas: '#F8FAFC',
          surface: '#FFFFFF',
          obsidian: '#0B0F17',
          cobalt: '#1D4ED8',
          amber: '#D97706',
          friction: '#DC2626',
          aligned: '#059669',
        },
        sage: {
          parchment: '#FBF8F3',
          clay: '#F2EAE1',
          sanctuary: '#1C2826',
          botanical: '#3F6212',
          ochre: '#D97706',
          coral: '#E11D48',
        }
      },
      borderRadius: {
        'business': '6px',
        'sage': '20px',
      }
    },
  },
  plugins: [],
};
```

---

## 3. Spatial Architecture & The "9" Geometric Motif

### 3.1 Container & Grid Rules
* **Max Container Width:** `max-w-7xl` (`1280px`) centered with responsive padding (`px-4 sm:px-6 lg:px-8`).
* **Section Vertical Rhythm:** `py-20 md:py-28` to maintain executive breathing room and prevent visual crowding (honoring *"More words do not make a business clearer"*).
* **Exposed Architectural Hairlines (Business Door):** Sections and grids are separated by crisp `1px` borders (`border-slate-200` on light backgrounds, `border-slate-800` on dark backgrounds) with subtle corner intersection crosshairs (`+`) at key structural junctions.
* **Border Radius Contrast:**
  * **Business Door:** Sharp, engineered corners (`rounded-md` / `6px`).
  * **SAGE Door:** Tactile, card-like organic corners (`rounded-2xl` / `20px`).

### 3.2 The 3x3 "Nine Intelligence" Bento Grid
Used whenever displaying the 9 core functions, diagnostic inquiries, or system capabilities:
* **Desktop Layout:** `grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200` (each child cell uses `bg-white p-8` to create seamless `1px` internal hairlines).
* **The 9th Cell / Center Anchor (Guardian of Well-Being):**
  * Visually distinguished with a warm amber top-border accent (`border-t-2 border-amber-500`), a subtle radial glow (`bg-gradient-to-br from-amber-500/5 to-transparent`), and the badge `[ FUNCTION 09 // GUARDIAN OF WELL-BEING ]`.

---

## 4. Custom Interactive UI Components (Brian's 9/3 Bridge)

These six signature components translate complex systemic methodology into intuitive visual experiences (Function 9: Illumination + Function 3: Navigation).

---

### Component 1: Dual-Door Global Switcher Header
* **Purpose:** Keeps CORE9 RESOLVE™ Business and SAGE clearly separated in language and tone while showing they belong to one overarching umbrella architecture.
* **Structure:**
  * Top utility bar (`h-9 bg-slate-950 text-slate-400 text-xs font-mono`): Displays two environment pills on the left:
    * `[ CORE9 RESOLVE™ // BUSINESS ]` (Active on Business pages)
    * `[ SAGE by CORE9 RESOLVE™ // PERSONAL & PLAYGROUND ]` (Active on SAGE pages)
  * Main navigation bar (`h-20 backdrop-blur-md bg-white/90 border-b border-slate-200`):
    * Left: Brand wordmark (`CORE9 RESOLVE™` with `TM` superscript in monospace).
    * Center (Business): `Diagnostic Methodology` • `The Functional Engine` • `Our Systemic Advantage` • `Engagement Pathways`
    * Right: Primary CTA button (`Request a Diagnostic Audit` in `bg-slate-900 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-medium transition`).

---

### Component 2: Living-System Interactive Node Canvas (Hero & Page 2)
* **Purpose:** Visually demonstrates *"A Business Is Not a Static Org Chart. It Is a Living System"* without relying on walls of text.
* **Visual Behavior:**
  * An interactive SVG diagram featuring **8 outer functional nodes** orbiting or interconnected with **1 central node (Function 9: Guardian of Well-Being)**.
  * **Interactive State Switcher:** Users can toggle between two live diagnostic states right inside the Hero or Methodology section:
    1. **`[ State A: Fragmented System ]`**: 3 nodes pulse in muted crimson/amber (`#DC2626`), connecting vector lines become dashed and misaligned, and callout badges display: *Operational Inefficiencies*, *Functional Misalignment*, and *Execution Gaps*.
    2. **`[ State B: Synchronized System ]`**: All 9 nodes lock into a balanced geometric lattice, vector lines turn solid cobalt/amber, and callout badges display: *Functional Integrity*, *Aligned Talent*, and *Profitable Execution*.

---

### Component 3: Functional Gaps & Performance Loss Matrix (Page 2)
* **Purpose:** Replaces abstract "energy bleed" language with a rigorous, interactive executive diagnostic matrix.
* **UI Layout:**
  * Dark obsidian container (`bg-slate-950 text-white rounded-lg border border-slate-800 p-6 md:p-10`).
  * Four interactive horizontal rows corresponding to the mandated terminology:
    1. `01 // Operational Inefficiencies`
    2. `02 // Functional Misalignment`
    3. `03 // Execution Gaps`
    4. `04 // Performance & Resource Losses`
  * **Interaction:** Clicking or hovering any row highlights the **Operational Manifestation**, the **Strategic Business Consequence**, and reveals the **CORE9 Diagnostic Inquiry** in a side panel.

---

### Component 4: The Functional Engine Scrubber (`CORE • NINE • RESOLVE`)
* **Purpose:** Presents the 3-part methodology sequence in exact required order (**CORE** $\rightarrow$ **NINE** $\rightarrow$ **RESOLVE**) as an interactive operating engine rather than a static text list.
* **UI Layout:**
  * **3-Stage Segmented Control Bar:**
    * **Stage 1: `CORE`** — *The Foundational Process* (`Connect • Observe • Redesign • Execute`)
    * **Stage 2: `NINE`** — *The Functional Integration* (`Navigate • Integrate • Network • Elevate`) + *Guardian of Well-Being* callout card.
    * **Stage 3: `RESOLVE`** — *The Transformation Process* (`Realize • Examine • Strategize • Optimize • Lead • Validate • Evolve`)
  * **Letter-by-Letter Interactive Cards:** Clicking each letter pill highlights its exact operational definition and updates a progress vector bar (`──────►`) across the screen.

---

### Component 5: Three-Step Advisory Pathway Timeline (Page 4)
* **Purpose:** Visually reinforces that CORE9 RESOLVE™ is an analytical and strategic consulting practice where the client’s team executes the transformation.
* **UI Layout:**
  * Vertical or horizontal 3-card architectural pipeline connected by animated directional bridges:
    * **Card 01:** `Comprehensive Systems Diagnostic Audit` *(Tag: CORE9 Analytical Team)*
    * **Card 02:** `Functional Architecture & Strategic Roadmap` *(Tag: Joint Executive Blueprint)*
    * **Card 03:** `Implementation Guidance & Team Alignment` *(Tag: Leadership & HR Enablement — Client Team Executes)*
  * Includes an explicit boundary badge at the base of the component:
    > `SCOPE GUARANTEE: We diagnose, architect, and guide; your internal team builds and executes.`

---

### Component 6: SAGE Virtual Playground & Metaphorical Deck Stage
* **Purpose:** Brings warmth, playfulness, and interactivity to the SAGE door while funneling visitors to the **BAWA platform** and clarifying **Svetlana's** and **Alexandra's** exact roles.
* **UI Layout (`theme-sage`):**
  * **Part A — Interactive 3-Card Deck Fan:**
    * Displays 3 tactile illustrated cards representing the three metaphorical decks currently uploaded on the BAWA platform (plus a translucent 4th card labeled *"Additional Decks Coming Soon"*).
    * Clicking any card triggers a smooth CSS 3D flip (`rotateY(180deg)`) revealing a reflective self-discovery question and a warm button: `[ Enter the Virtual Playground on BAWA → ]`.
  * **Part B — Personal & Relational Dynamics Role Matrix:**
    * Two distinct, warmly styled invitation cards side-by-side:
      * **Card 1 (Individual & Relational Consultations):** Led exclusively by **Svetlana Pritzker** (Author of CORE9 RESOLVE™). CTA: `[ Book a Personal Consultation with Svetlana ]`.
      * **Card 2 (Creative Group Experiences):** Co-facilitated by **Svetlana Pritzker & Alexandra** (Creative Collaborator & Co-Author of Metaphorical Decks). CTA: `[ Explore Upcoming Group Sessions ]`.

---

## 5. Visual Guardrails & Anti-Patterns (Strict Rules for AI Agents)

When generating pages or assets in Antigravity, enforce these strict rules:
1. **Zero Esoteric Visual Clichés:** Never use chakra silhouettes, astrology charts, tarot mysticism, cosmic nebulae, or glowing third-eye graphics on either site. Keep Business architectural and clinical; keep SAGE grounded in modern art, botanical warmth, and playful human connection.
2. **Zero Generic Corporate Stock:** Avoid stock photos of suits shaking hands or pointing at laptops. Use clean geometric SVG diagrams, high-contrast typography, and unified editorial portraits of Svetlana, Vasili, Brian, and Alexandra.
3. **Progressive Disclosure First:** Never render more than 3 consecutive paragraphs of raw body text without breaking the visual rhythm using a bento grid, pull-quote callout, interactive accordion, or vector diagram.
4. **Role & Scope Fidelity in UI Labels:**
   * Never generate a button or badge promising "Full-Service Execution" or "Hire Our Guild Specialists."
   * Never generate a booking selector that allows booking Alexandra for 1-on-1 consultations.

---

## 6. Antigravity Execution Prompt Sequence (Repeatable Workflow)

Copy and paste these sequential prompts into Antigravity to build the site cleanly using both specification files:

* **Prompt 1 (Theme & Primitives):**
  > *"Read `core9_resolve_design_system.md`. Configure Tailwind CSS with the dual-theme tokens (`business` and `sage`), typography imports (`Plus Jakarta Sans`, `Instrument Serif`, `JetBrains Mono`), and build the Dual-Door Global Switcher Header component."*
* **Prompt 2 (Business Pages 1 & 2):**
  > *"Using the verbatim copy in `core9_resolve_website_blueprint.md` and the component specs in `core9_resolve_design_system.md`, build Page 1 (Home) and Page 2 (The Diagnostic Methodology), including the Living-System Interactive Node Canvas, the Functional Gaps & Performance Loss Matrix, and the interactive `CORE • NINE • RESOLVE` Engine Scrubber."*
* **Prompt 3 (Business Pages 3 & 4 + Intake):**
  > *"Using both specification files, build Page 3 (Our Systemic Advantage) and Page 4 (Engagement Pathways), including the Three-Step Advisory Pathway Timeline and the Diagnostic Audit Intake modal."*
* **Prompt 4 (SAGE Door & BAWA Playground):**
  > *"Switch to the `sage` theme tokens in `core9_resolve_design_system.md` and build the SAGE by CORE9 RESOLVE™ view using Section 4 of `core9_resolve_website_blueprint.md`, featuring the interactive 3-Card BAWA Metaphorical Deck fan and the Personal & Relational Dynamics booking cards for Svetlana and Alexandra."*