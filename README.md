# Rocket Station — Homepage

A responsive marketing website rebuilt from the **"Rocket Station (External).fig"** Figma
file (page: *Homepage v1*, prototype frame *D - HP - Prototype*).

## Run it

```bash
cd rocket-station-site
python3 -m http.server 8000
# open http://localhost:8000
```

It's a static site — `index.html`, `styles.css`, `script.js`, and `assets/`. No build step.

## Sections (in design order)

1. **Hero** — Earth-from-space video, "Mission control for the businesses that move fast."
2. **The Solution** — "We've rebuilt back-office operations for the AI era."
3. **How it works** — four steps: 01 Map · 02 Match · 03 Launch · 04 Manage
4. **Industries** — Property Management · Investment · Brokerages & Agents · Service Providers
5. **Proof** — animated stats (1,600+ deployed · 400+ scaled · 14 industries · 98% retention)
6. **Testimonial** — Jack, CEO @ Erimus
7. **AI** — Human-in-the-loop: AI Agents · Automation · Intelligent Workflows
8. **Footer** — "Ready for liftoff?" CTA + contact / link columns

All copy is taken verbatim from the Figma text layers.

## Assets

Extracted from the `.fig` archive and placed in `assets/`:

- `hero.mp4` — hero background video (the "Web-Hero" layer)
- `hero-poster.png` — hero video poster frame
- `testimonial.png` — testimonial portrait

## Design tokens (from the Figma file)

| Token | Value | Use |
|-------|-------|-----|
| Background | `#0A0A0A` | dark sections |
| Light | `#E9E7E2` | light sections |
| Accent orange | `#FB6332` | step labels, AI eyebrow |
| Accent purple | `#DA91F2` | "The Proof" eyebrow |

**Fonts:** the original uses licensed faces (*Die Grotesk*, *Neue Montreal*, *Fragment Mono*).
Those aren't embedded in `.fig` files, so the site substitutes the closest free web fonts —
**Inter** (with a Helvetica Neue fallback) for display/body and **JetBrains Mono** for mono
labels. Swap in the licensed fonts via `@font-face` for an exact match.

The AI-section card descriptions are short, on-brand placeholders (the Figma card bodies were
empty); everything else is the real design copy.
