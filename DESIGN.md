# Design System Inspired by IBM Carbon — Customized for BLGroup

> Bảo Lâm Group (BLG) — Enterprise garment manufacturing. Structured blue palette, IBM Carbon-inspired precision with warm Vietnamese manufacturing identity.

---

## 1. Visual Theme & Atmosphere

BLGroup's website is the digital representation of a professional garment manufacturer built on structured, enterprise-grade design principles — inspired by IBM's Carbon Design System.

The page operates on a clean **white canvas** with **structured navy-blue** text, punctuated by a single, commanding accent — **BLG Blue (#2563EB)**. This isn't playful startup minimalism; it's **corporate manufacturing precision** distilled into pixels.

Every element exists within **BLG's 8px grid**; every color maps to a semantic token; every spacing value snaps to the 8px base unit.

The IBM Plex type family is replaced by **Inter** — a modern, highly-readable sans-serif that maintains the same structured, professional quality while being optimized for web and Vietnamese diacritics.

### Key Characteristics:

- **Structured enterprise layout** with clear visual hierarchy — no decorative noise
- **Navy-blue dominant palette** (`#1B2A4A`) conveying trust, stability, international standards
- **Single interactive accent** — BLG Blue (`#2563EB`) for all interactive elements
- **Warm amber accent** (`#F59E0B`) used sparingly for highlights and call-to-action emphasis
- **8px spacing grid** with strict adherence — no arbitrary values, everything aligns
- **Minimal border-radius** (0–4px) on cards and buttons — sharp, precise, enterprise
- **Glassmorphism** used subtly on header/navigation only — not overused
- **Depth through layering**, not heavy shadows — background color stacking over box-shadow
- **Photography-forward** for product and factory sections — full-bleed imagery when available
- **Bottom-border inputs** (not boxed) following Carbon form patterns

---

## 2. Color Palette & Roles

### Primary Brand

| Token | Hex | Role | CSS Variable |
|---|---|---|---|
| **BLG Navy** | `#1B2A4A` | Primary text, headings, navbar, hero backgrounds | `--color-primary` |
| **BLG Navy Light** | `#2D4A7A` | Secondary dark surfaces, hover states | `--color-primary-light` |

### Interactive

| Token | Hex | Role | CSS Variable |
|---|---|---|---|
| **BLG Blue** | `#2563EB` | Primary interactive — buttons, links, focus states | `--color-accent` |
| **BLG Blue Light** | `#3B82F6` | Link hover state, secondary interactive | `--color-accent-light` |
| **BLG Blue 10** | `rgba(37,99,235,0.1)` | Blue tint surface, icon backgrounds | — |
| **Focus Inset** | `#FFFFFF` | Inner ring for focus on dark backgrounds | — |

### Warm Accent

| Token | Hex | Role | CSS Variable |
|---|---|---|---|
| **BLG Amber** | `#F59E0B` | Warm highlight, pulse indicators, badge accents | `--color-warm` |
| **BLG Amber Light** | `#FBBF24` | CTA emphasis, gradient endpoints | `--color-warm-light` |

### Neutral Scale (Gray Family)

| Token | Hex | Role | CSS Variable |
|---|---|---|---|
| **Gray 100** | `#0F172A` | Deepest text, dark mode backgrounds | `--color-bg-dark` |
| **White** | `#FFFFFF` | Page background, card surfaces | `--color-bg` |
| **Gray 05** | `#F8FAFC` | Secondary surface background, card fill, alternating sections | `--color-bg-alt` |
| **Gray 10** | `#F1F5F9` | Scrollbar track, subtle container fills | — |
| **Gray 20** | `#E2E8F0` | Borders, dividers, card outlines | `--color-border` |
| **Gray 50** | `#94A3B8` | Muted labels, placeholder text, disabled icons | `--color-text-muted` |
| **Gray 60** | `#64748B` | Secondary text, descriptions, helper text | `--color-text-light` |
| **Text Primary** | `#0F172A` | Primary body text, headings | `--color-text` |

### Support & Status

| Token | Hex | Role |
|---|---|---|
| **Red 60** | `#DC2626` | Error, danger, destructive actions |
| **Green 50** | `#22C55E` | Success, active status, export badge |
| **Amber 30** | `#F59E0B` | Warning, caution (reuses warm accent) |
| **Blue 60** | `#2563EB` | Informational (reuses primary accent) |

---

## 3. Typography Rules

### Font Stack

```
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
```

Load via Google Fonts with `latin` and `vietnamese` subsets. Use `font-display: swap`.

### Type Scale

| Name | Size | Weight | Line-Height | Use |
|---|---|---|---|---|
| **Display** | `60px` / `3.75rem` | 700 | 1.1 | Hero headlines only |
| **Heading 1** | `48px` / `3rem` | 700 | 1.1 | Page titles, CTA headlines |
| **Heading 2** | `36px` / `2.25rem` | 700 | 1.2 | Section titles |
| **Heading 3** | `24px` / `1.5rem` | 700 | 1.3 | Card titles, subsections |
| **Heading 4** | `20px` / `1.25rem` | 600 | 1.4 | Feature titles |
| **Body** | `16px` / `1rem` | 400 | 1.7 | Default paragraph text |
| **Body Small** | `14px` / `0.875rem` | 400 | 1.5 | Descriptions, card body |
| **Caption** | `12px` / `0.75rem` | 500 | 1.4 | Labels, badges, metadata |
| **Overline** | `12–14px` | 600 | 1.2 | Section labels — UPPERCASE, letter-spacing: `0.08em` |

### Typography Principles

- **Headings**: Weight 700 (bold), tight leading (1.1–1.3), color `--color-primary`
- **Body text**: Weight 400, generous leading (1.7), color `--color-text-light` for descriptions
- **Overline labels**: UPPERCASE, `letter-spacing: 0.08em`, weight 600, color `--color-accent`
- **No italic for emphasis** — use weight 600 or color change instead
- **Vietnamese diacritics**: Inter handles well; ensure proper `line-height` to prevent clipping

---

## 4. Spacing System (8px Grid)

All spacing derives from an **8px base unit**. Use only these values:

| Token | Value | Use |
|---|---|---|
| `spacing-01` | `2px` | Micro gaps, icon-text |
| `spacing-02` | `4px` | Inner padding, tight gaps |
| `spacing-03` | `8px` | Small inner padding |
| `spacing-04` | `12px` | Compact card padding |
| `spacing-05` | `16px` | Default inner padding, gaps |
| `spacing-06` | `24px` | Section content gaps |
| `spacing-07` | `32px` | Between content blocks |
| `spacing-08` | `48px` | Between major sections |
| `spacing-09` | `64px` | Section vertical padding (mobile) |
| `spacing-10` | `80px` | Section vertical padding (tablet) |
| `spacing-11` | `96px` | Section vertical padding (desktop) |
| `spacing-12` | `112px` | Hero section padding |

---

## 5. Layout & Grid

### Container

Instead of custom CSS, we strictly use standard Tailwind utility classes to prevent CSS inheritance conflicts and ensure predictable rendering in Tailwind v4:

```html
<!-- Base structure for all layout containers -->
<div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px]">
```

### Grid System

- **Desktop (≥1024px)**: 12-column grid, `gap: 2rem`
- **Tablet (≥768px)**: 8-column grid, `gap: 1.5rem`
- **Mobile (<768px)**: 4-column grid, `gap: 1rem`

### Common Layouts

| Pattern | Columns | Use |
|---|---|---|
| **Hero** | 2-col (6+6) | Text + visual on desktop, stack on mobile |
| **Stats** | 4-col (3+3+3+3) | Key metrics bar |
| **Products** | 3-col (4+4+4) | Product cards grid |
| **Process** | 7-col | Process step timeline (collapse to 2-col on mobile) |
| **Why Us** | 3-col (4+4+4) | Feature cards |
| **About** | 2-col (6+6) | Image + text split |
| **Footer** | 4-col | Links, contact, social |

---

## 6. Component Specifications

### 6.1 Navigation Bar

```
Height: 72px
Background: glass (rgba(255,255,255,0.8) + backdrop-filter: blur(12px))
Position: fixed top
Border-bottom: 1px solid rgba(255,255,255,0.2)
z-index: 50
```

- **Logo**: Gradient square (32-40px) + brand text, left-aligned
- **Nav links**: `font-size: 14px`, `font-weight: 500`, `padding: 8px 16px`, `border-radius: 8px`
- **CTA button**: Gradient primary-to-accent, `padding: 10px 20px`, rounded-lg, shadow
- **Mobile**: Hamburger → animated slide-down panel

### 6.2 Buttons

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| **Primary** | Gradient `from-accent to-accent-light` | White | None | `12px` | `48px` |
| **Primary Hero** | Gradient `from-accent to-accent-light` | White | None | `12px` | `56px` |
| **Secondary** | `white/10` on dark, `transparent` on light | White / Primary | `1px solid white/20` or `2px solid primary` | `12px` | `48px` |
| **Ghost** | Transparent | Accent | None | `8px` | `auto` |
| **CTA Link** | None | Accent | None | — | — |

**Button interactions:**
- Hover: `-translate-y-0.5`, increased shadow
- All buttons include `transition-all duration-300`
- Icon gap: `8px` between text and arrow icon

### 6.3 Cards

```
Background: white (#FFFFFF)
Border: 1px solid var(--color-border)
Border-radius: 16px (rounded-2xl)
Padding: 32px
Shadow: 0 1px 3px rgba(0,0,0,0.05)
Hover: shadow-xl, translateY(-8px)
Transition: all 0.4s ease
```

- **Icon container**: `56px × 56px`, `border-radius: 12px`, gradient background from accent/10 to primary/10
- **Title**: `font-size: 20px`, weight 700, color primary
- **Description**: `font-size: 14px`, weight 400, color text-light

### 6.4 Section Headers

```
Text-align: center
Max-width: 672px (42rem)
Margin: 0 auto 56px auto
```

Structure (top to bottom):
1. **Overline**: `font-size: 14px`, weight 600, UPPERCASE, `letter-spacing: 0.08em`, color accent
2. **Title**: `font-size: 36px` (lg: 48px), weight 700, color primary, `margin-top: 12px`
3. **Subtitle**: `font-size: 16px`, weight 400, color text-light, `margin-top: 16px`

### 6.5 Stats Bar

```
Position: relative, negative margin-top (-64px) overlapping hero
Grid: 4 columns
Card: white bg, rounded-2xl, shadow-lg, border gray-100
Number: font-size 48px, weight 700, color primary
Label: font-size 14px, color text-light
```

Animated counter on scroll-into-view (requestAnimationFrame at 60fps).

### 6.6 Hero Section

```
min-height: 90vh
Background: gradient from-primary via-#1e3a5f to-bg-dark
Position: relative, overflow hidden
```

Decorative elements:
- **Blob 1**: Absolute, top-right, 600px circle, accent/10, blur-3xl
- **Blob 2**: Absolute, bottom-left, 500px circle, warm/10, blur-3xl
- **Grid pattern**: 60px grid, white lines at 3% opacity

Content:
- **Badge**: Rounded-full pill with pulsing warm dot
- **H1**: 60px (desktop), white, gradient text for emphasis span
- **CTA group**: Flex wrap, gap 16px, primary + ghost buttons
- **Right visual**: Rounded card with overlapping floating badges

### 6.7 Footer

```
Background: var(--color-bg-dark) (#0F172A)
Text: white/70 default
Padding: section-padding (80-112px top, 32px bottom)
```

Structure:
- **Top**: 4-column grid — brand info, navigation, products, contact
- **Bottom**: Horizontal divider + copyright + social icons

---

## 7. Animation & Motion

### Scroll Animations (ScrollAnimation component)

```
Initial: { opacity: 0, y: 40 }
Animate: { opacity: 1, y: 0 }
Duration: 0.6s
Easing: ease-out
Trigger: once, when element enters viewport
Stagger: 0.1–0.15s delay between siblings
```

Direction variants:
- **Default**: y: 40 → 0 (bottom-up)
- **Left**: x: -40 → 0
- **Right**: x: 40 → 0

### Hover Interactions

| Element | Effect |
|---|---|
| **Cards** | `translateY(-8px)`, shadow increase |
| **Buttons** | `translateY(-2px)`, shadow increase |
| **Links** | Color transition, gap increase for arrow |
| **Nav links** | Background tint `accent/5` |
| **Process steps** | Full gradient background swap |
| **Icon containers** | `scale(1.1)` |

### Special Animations

- **Floating badges**: `y: [0, -10, 0]` / `y: [0, 8, 0]`, infinite, easeInOut, 3-3.5s
- **Pulse indicator**: CSS `animate-pulse` on warm dot in hero badge
- **Counter numbers**: RequestAnimationFrame smooth count-up on scroll-into-view
- **Mobile menu**: `height: 0 → auto`, `opacity: 0 → 1`, 300ms
- **Hamburger icon**: Rotate and translate transforms for X animation

All transitions: `duration-200` for micro (color, opacity), `duration-300` for standard (transform, shadow), `duration-400` for dramatic (card hover, step color swap).

---

## 8. Responsive Breakpoints

| Breakpoint | Min-width | Description |
|---|---|---|
| **Mobile** | `0px` | Single column, compact padding |
| **SM** | `640px` | 2-column grids begin |
| **MD** | `768px` | Tablet layout, expanded padding |
| **LG** | `1024px` | Desktop layout, full grid |
| **XL** | `1280px` | Max content width |
| **2XL** | `1536px` | Extended container (1400px) |

### Mobile Adaptations

- Hero: Single column, text only (hide right visual)
- Stats: 2×2 grid instead of 4-column
- Process: 2-column grid instead of 7-column
- Section padding: 80px vertical → 64px
- Font sizes: Display 60px → 36px, H2 48px → 30px

---

## 9. Image & Media Guidelines

### Photography Style

- **Factory/industrial**: Clean, well-lit, showing modern equipment and organized workspace
- **Product shots**: White or neutral background, professional studio quality
- **Team/people**: Natural, professional, showing skilled craftsmanship
- **No stock photos that feel generic** — preference for authentic imagery

### Image Placeholders (current)

When real photography is unavailable, use:
- Gradient containers (`from-bg-alt to-gray-100`) with centered emoji icon + descriptive text
- Aspect ratio: `4:3` for about sections, `1:1` for hero visual
- Border: `1px solid gray-200`, `border-radius: 16px`

### Icon Style

- **Line icons**: Heroicons outline style, `stroke-width: 1.5`
- **Size**: 32px (w-8 h-8) in feature cards, 20px (w-5 h-5) in buttons
- **Color**: Inherit from parent, typically accent blue or white
- **Emoji fallback**: Used for stats and why-us sections (🏭 👷 🌏 ✅ ⏱️ 🤝)

---

## 10. Accessibility

- **Color contrast**: All text meets WCAG 2.1 AA minimum (4.5:1 for body, 3:1 for large text)
- **Focus indicators**: 2px blue outline with white inset ring on dark backgrounds
- **Touch targets**: Minimum 48px height for interactive elements
- **Semantic HTML**: Proper heading hierarchy (single H1 per page)
- **ARIA labels**: On hamburger menu, decorative elements marked `aria-hidden`
- **Reduced motion**: Respect `prefers-reduced-motion` media query
- **Vietnamese language**: `lang="vi"` on html element, Inter font with Vietnamese subset

---

## 11. Dark Sections Pattern

When a section has a dark gradient background (hero, CTA):

```
Background: gradient from-primary via-#1e3a5f to-bg-dark
Text default: white
Text secondary: white/70
Borders: white/20 or white/10
Buttons: white bg + primary text (inverted)
Ghost buttons: white/10 bg + white text + white/20 border
Decorative blobs: accent/10 and warm/10 with blur-3xl
```

---

## 12. Code Conventions

### CSS Variables (defined in :root)

```css
:root {
  --color-primary: #1B2A4A;
  --color-primary-light: #2D4A7A;
  --color-accent: #2563EB;
  --color-accent-light: #3B82F6;
  --color-warm: #F59E0B;
  --color-warm-light: #FBBF24;
  --color-bg: #FFFFFF;
  --color-bg-alt: #F8FAFC;
  --color-bg-dark: #0F172A;
  --color-text: #0F172A;
  --color-text-light: #64748B;
  --color-text-muted: #94A3B8;
  --color-border: #E2E8F0;
}
```

### Utility Classes

| Class | Purpose |
|---|---|
| `.glass` | White glassmorphism (header, overlays) |
| `.glass-dark` | Dark glassmorphism (floating badges) |
| `.gradient-text` | Primary-to-accent gradient text |

*Note: Container sizing and section padding are handled purely via standard Tailwind utility classes (e.g., `max-w-7xl`, `px-6`, `py-20 md:py-24`) to prevent shorthand CSS overrides and remain 100% compliant with Tailwind v4 logic.*

### Component Pattern

- Client components: `"use client"` directive
- Animation: Framer Motion for scroll and interaction
- Links: Next.js `<Link>` component
- Icons: Inline SVG (Heroicons outline)
- Scroll trigger: `useInView` from Framer Motion with `once: true`
