---
name: "Arpon Editorial Optical Glass"
description: "An editorial portfolio system that presents engineering proof through calm, optically layered glass."
colors:
  ink: "#0b1832"
  ink-soft: "#2f405d"
  muted: "#5d6b80"
  pearl-background: "#eef4fb"
  glass-surface: "rgba(255, 255, 255, 0.62)"
  glass-surface-strong: "rgba(255, 255, 255, 0.82)"
  glass-blue: "rgba(228, 239, 255, 0.76)"
  glass-border: "rgba(111, 137, 174, 0.2)"
  glass-border-strong: "rgba(82, 112, 154, 0.3)"
  glass-edge: "rgba(255, 255, 255, 0.76)"
  cobalt: "#2856d8"
  cobalt-deep: "#173a9d"
  cobalt-mist: "#dbe7ff"
  aqua: "#2d9fc2"
  success: "#16845a"
  night: "#09162e"
  night-soft: "#122342"
  night-muted: "#b8c7df"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(3.65rem, 7.2vw, 6rem)"
    fontWeight: 520
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.45rem, 4.1vw, 4rem)"
    fontWeight: 520
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(1.55rem, 2.2vw, 2.1rem)"
    fontWeight: 540
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, Helvetica Neue, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, Helvetica Neue, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 720
    lineHeight: 1.5
    letterSpacing: "0.1em"
rounded:
  chip: "8px"
  compact: "10px"
  small: "12px"
  plane: "16px"
  pill: "2rem"
  round: "50%"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "clamp(6rem, 10vw, 9rem)"
  page-gutter: "clamp(1.25rem, 4vw, 4rem)"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.small}"
    padding: "0.82rem 1.1rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-deep}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.small}"
    padding: "0.82rem 1.1rem"
    height: "3.25rem"
  button-secondary:
    backgroundColor: "{colors.glass-surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.small}"
    padding: "0.82rem 1.1rem"
    height: "3.25rem"
  filter-chip:
    backgroundColor: "rgba(255, 255, 255, 0.38)"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.85rem"
    height: "2.6rem"
  filter-chip-active:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.85rem"
    height: "2.6rem"
  glass-card:
    backgroundColor: "{colors.glass-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plane}"
    padding: "clamp(2rem, 4vw, 3.25rem)"
  deep-proof-card:
    backgroundColor: "{colors.night}"
    textColor: "#f7fbff"
    rounded: "{rounded.plane}"
    padding: "clamp(2rem, 4vw, 3.5rem)"
---

# Design System: Arpon Editorial Optical Glass

## Overview

**Creative North Star: "The Optical Engineering Journal"**

This system treats the portfolio as an editorial record of engineering work viewed through calm, optically layered glass. Pearl-blue ambient light establishes a lucid ground; cobalt and aqua refractions provide direction; deep-navy proof fields give photographs and factual achievements the visual gravity they deserve. The result is precise and credible rather than futuristic for its own sake.

Glass is a hierarchy material, not decoration. Navigation, evidence, archives, and actions receive different levels of translucency, blur, edge light, and lift according to their role. Strong typography, real imagery, and a continuous project ledger remain primary, while the optical treatment clarifies relationships without turning the page into a dashboard.

**Key Characteristics:**

- Editorial composition with asymmetric emphasis and continuous reading flow.
- Pearl-blue ambient ground with restrained cobalt and aqua refraction.
- Distinct glass plane roles for navigation, evidence, action, and archive surfaces.
- Deep-navy proof sections that separate high-value evidence from the light field.
- Newsreader display type paired with precise Manrope interface and body copy.
- Motion that is sparse, optical, and fully removable under reduced-motion preferences.

## Colors

The palette moves between a cool pearl daylight field and deep navy proof environments, with cobalt as the directional voice and aqua as a rare refracted highlight.

### Primary

- **Signal Cobalt:** The principal action, active-state, category, and directional color. Use it to guide attention, never as a large decorative wash.
- **Deep Cobalt:** The stronger action and emphasized display color, especially for hover states and italic hero emphasis.

### Secondary

- **Refracted Aqua:** A supporting optical highlight for proof icons, subtle ambient light, and the cobalt-to-aqua scrollbar transition.
- **Cobalt Mist:** A pale supporting tint for cool glass fills and quiet accent backgrounds.

### Neutral

- **Blueprint Ink:** Primary copy, button contrast, and high-confidence labels on light surfaces.
- **Slate Ink:** Secondary headings, navigation, and technical text that still require strong contrast.
- **Measured Gray:** Descriptions, metadata, captions, and supporting copy.
- **Pearl Blue:** The ambient page ground beneath every light glass plane.
- **Clear Glass / Strong Glass / Blue Glass:** Increasingly assertive translucent fills for secondary action, navigation, and cool evidence grouping.
- **Hairline Glass / Structural Glass / Lit Edge:** Low-chroma separators, stronger structural borders, and the bright top edge that makes a plane read as glass.
- **Proof Navy / Lifted Navy / Night Copy:** The dark evidence field, its raised surface, and the muted light text used within it.
- **Available Green:** Reserved for genuine availability status; never use it as a general accent.

**The Refraction Budget Rule.** Cobalt directs; aqua refracts. Neither becomes an all-over neon atmosphere, and aqua remains rarer than cobalt.

**The Proof Field Rule.** Use deep navy for concentrated proof, achievement photography, recruiting contact, and the footer—not as an alternating stripe after every light section.

## Typography

**Display Font:** Newsreader (with Georgia and serif fallback)  
**Body Font:** Manrope (with Helvetica Neue and sans-serif fallback)

**Character:** Newsreader gives the portfolio the cadence of an engineering journal: human, editorial, and assured. Manrope supplies disciplined clarity for navigation, metadata, project descriptions, filters, and technical labels.

### Hierarchy

- **Display** (520, fluid 3.65–6rem, 0.94 line-height): Hero statements only. A restrained italic Newsreader line may carry the single conceptual emphasis.
- **Headline** (520, fluid 2.45–4rem, 1 line-height): Major light-section headings; proof and recruiting headlines may scale to the larger 3–5.4rem range.
- **Title** (540, fluid 1.55–2.1rem, about 1.05 line-height): Skill groups, projects, and contained editorial headings.
- **Body** (400, 0.9rem, 1.75 line-height): Explanations and evidence copy, generally kept near 31–42rem rather than stretched across the container.
- **Label** (650–750, 0.68–0.78rem, up to 0.1em tracking): Navigation, categories, metadata, actions, and tabular project indices. Uppercase is reserved for compact taxonomic labels.

**The Serif Leads Rule.** Newsreader expresses identity, hierarchy, and evidence; Manrope handles every operational or scannable task.

**The Quiet Label Rule.** Small text earns legibility through weight, contrast, and space—not extreme letterspacing or ornamental all-caps.

## Layout

The system uses a centered 80rem content frame with a fluid page gutter. Long-form sections breathe vertically at a 6–9rem rhythm. Editorial grids vary by content: the hero balances copy and portrait; section headings pair a large headline with a narrow précis; capability and skill fields use asymmetric spans; proof photography receives a dedicated two-column stage.

Projects are not a grid of interchangeable cards. Featured work forms a continuous glass ledger: one shared plane, hairline row divisions, numeric order, descriptive copy, stack tags, and direct links. The full archive continues that ledger inside a native disclosure with filters and compact index rows so every project remains discoverable.

Responsive behavior is authored at four thresholds:

- **Wide desktop** (above 68rem / 1088px): three-part navigation, full editorial grids, and three-column project ledger rows.
- **Compact desktop** (up to 68rem / 1088px): primary navigation collapses, section headings simplify, featured project metadata wraps, and contact content becomes one column.
- **Tablet and compact web** (up to 53.75rem / 860px): mobile navigation is available and general layouts can stack. Within the intentional tablet band (36.01–53.75rem / approximately 577–860px), the hero returns to a two-column copy-and-portrait composition; the proof strip remains three columns; projects retain three ledger columns; capability, achievement, about, and skill areas receive purpose-built two-column arrangements.
- **Phone** (up to 36rem / 576px): the large portrait yields to a compact identity row, actions become full width, featured projects and proof photography stack, skill lists become single-column, and nonessential project-tech metadata is removed before titles or links.

The minimum supported viewport is 320px. Fluid values should interpolate within these authored structures, not erase them.

**The Authored Tablet Rule.** Never treat tablet as a shrunken desktop or prematurely stacked phone. Preserve its explicit portrait, proof, ledger, and two-column evidence compositions.

**The Continuous Ledger Rule.** Project discovery is one readable record. Do not replace the featured ledger and archive index with a field of detached, equal-weight cards.

## Elevation & Depth

Depth is a hybrid of tonal layering, backdrop blur, edge light, and restrained ambient shadow. A sticky navigation plane uses high blur and a light lift; shared evidence containers use a medium glass shadow; the about plane is more luminous and lifted; dark proof glass uses tighter black shadow. Unsupported backdrop filtering falls back to nearly opaque pearl or navy surfaces so legibility and hierarchy survive.

### Shadow Vocabulary

- **Ambient Glass** (`0 28px 70px rgba(33, 67, 115, 0.13), 0 6px 18px rgba(33, 67, 115, 0.07)`): Shared ledgers, proof strips, capability groups, and skill groups.
- **Lifted Glass** (`0 34px 90px rgba(23, 58, 113, 0.18), 0 10px 24px rgba(23, 58, 113, 0.08)`): Large authored planes such as the about section.
- **Dark Evidence Lift** (`0 34px 80px rgba(0, 0, 0, 0.22)`): Photography galleries and concentrated proof inside navy fields.
- **Inset Edge Light** (`inset 0 1px 0 rgba(255, 255, 255, 0.88)`): The optical top edge shared by light glass planes; adjust opacity to the plane depth.

**The Plane Roles Rule.** Navigation glass floats, evidence glass groups, action glass responds, and archive glass recedes. Do not give every translucent element the same blur, opacity, and shadow.

**The One Sheen Rule.** The portrait owns the single recurring glass-sheen gesture. Do not repeat traveling highlights across cards, buttons, or section shells.

## Shapes

The form language is softly engineered: 16px radii define major planes, 12px radii define actions and nested glass, 8–10px radii define tags, images, and compact navigation states. Pills are limited to filters and true status-like controls; circular geometry belongs to identity marks, availability signals, and sparse ambient optical forms. Dividers stay hairline and cool rather than becoming heavy boxes.

**The Nested Radius Rule.** A child surface steps down from its parent: 16px outer plane, 12px action or inset, 8–10px tag or image. Do not apply one universal radius everywhere.

## Components

### Buttons

- **Shape:** Gently rounded action surface (12px) with a 3.25rem minimum height on desktop and full-width behavior on phone.
- **Primary:** White Manrope label over a cobalt gradient with a shallow inset highlight and colored lift.
- **Hover / Focus:** Lift by 2px and deepen the cobalt. Keyboard focus always uses the global high-contrast 3px aqua-blue outline with 4px offset; hover is never the only state cue.
- **Secondary:** Blueprint ink on translucent white glass with a lit edge, restrained shadow, and 18px blur. The no-backdrop fallback becomes nearly opaque pearl.

### Chips

- **Style:** Project filters alone use a true pill. Inactive chips are translucent neutral controls; active and hover states become solid cobalt with white text and a 1px lift.
- **Tags:** Technology tags are compact rounded rectangles (8px), not filter pills; they use a cool blue fill and a bright optical border.

### Cards / Containers

- **Corner Style:** Major shared planes use the 16px plane radius; nested evidence and controls use 12px or less.
- **Background:** Choose plane opacity by function. Shared light ledgers sit near half-white; sticky navigation is stronger; deep proof glass is translucent white over navy.
- **Shadow Strategy:** Use the elevation vocabulary by plane role, not by component type alone.
- **Border:** One-pixel lit edges and cool dividers define structure; heavy outlines are absent.
- **Internal Padding:** Usually fluid 2–3.25rem for ledger rows and major planes, tightening to 1–1.5rem on compact screens.

### Navigation

The sticky navigation is a strong, high-blur glass plane with brand identity at left, editorial links centered, and a dark résumé action at right. At 68rem the link set collapses; at 53.75rem the résumé action yields to a 2.65rem menu button and a separate high-opacity glass navigation plane. Links use a fine cobalt underline that grows from the interaction edge.

### Continuous Project Ledger

Featured projects share one glass container and are divided by hairlines instead of card gutters. Subtle alternating blue and aqua washes vary row depth without changing component shape. Hover increases the row's white contribution and horizontal inset. The archive uses native `details`/`summary`, explicit category filters, tabular numbers, and compact link targets; do not conceal source or live links when less important metadata can collapse first.

### Skill Marks

Every skill mark sits in a small white-glass tile (2rem square, 9px radius) with a subtle lift. Use the repository's dedicated SVG assets for Java, C++, JavaScript, TypeScript, Python, PHP, React.js, and Next.js. PHP must use `/skills/php.svg`; do not substitute a letter badge. Laravel uses its `SiLaravel` brand glyph in Laravel red (`#f04438`). Other known brands use their supplied brand icons and restrained brand colors; conceptual capabilities such as Microservices, Event-Driven Architecture, and WebSocket use consistent line icons in cobalt. Hover may lift the tile by 1px but must not animate or recolor the logo aggressively.

### Deep Proof Sections

Achievement, recruiting contact, and footer surfaces use the navy family to concentrate attention around factual evidence and direct action. Their internal glass remains transparent enough to read as layered, while white and night-muted typography protects contrast. Achievement photography keeps editorial captions, controlled image zoom on hover, and an opaque navy fallback when blur is unavailable.

### Motion & Interaction

Ambient orbs drift slowly over 18 seconds; the hero copy resolves once over 850ms; the portrait carries the sole seven-second delayed sheen. State transitions use 180ms ease, structural row or underline changes use 220ms with an expressive ease-out, and image emphasis uses 550ms. Under `prefers-reduced-motion: reduce`, smooth scrolling is disabled and all transitions and animations collapse to 0.01ms with one iteration.

## Do's and Don'ts

### Do:

- **Do** let real projects, proof photography, and direct links lead every decorative effect.
- **Do** assign each glass plane a functional depth: navigation, evidence, action, or archive.
- **Do** preserve the authored tablet composition between approximately 577px and 860px.
- **Do** keep every project discoverable through the continuous featured ledger and full archive.
- **Do** use Newsreader for editorial hierarchy and Manrope for readable technical detail.
- **Do** retain PHP and Laravel as first-class branded skills using their correct asset and glyph treatment.
- **Do** maintain keyboard focus visibility, a working skip link, semantic native controls, labeled external actions, strong text contrast, and the reduced-motion override.
- **Do** provide opaque pearl and navy fallbacks wherever hierarchy otherwise depends on backdrop filtering.

### Don't:

- **Don't** turn the system into generic cyberpunk glass, neon haze, or ornamental blur.
- **Don't** use one identical frosted card treatment for every section, project, skill, and action.
- **Don't** convert the project ledger into a dashboard tile grid or hide the archive behind visual novelty.
- **Don't** repeat the portrait sheen on buttons, cards, photographs, or headings.
- **Don't** flatten deep proof sections into the pearl field or use navy as a routine alternating stripe.
- **Don't** replace brand marks with arbitrary initials, especially for PHP or Laravel.
- **Don't** remove focus, hover, fallback, reduced-motion, or small-screen states to simplify implementation.
- **Don't** allow motion or refraction to compete with engineering evidence or factual claims.
