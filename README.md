# Rocket Station — Homepage

**Live (GitHub Pages):** https://mw3692-dev.github.io/rocket-station-site/  
**Repo:** https://github.com/mw3692-dev/rocket-station-site


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

---

## Staging: Blog & FAQ (temporary)

The **Blog** and **FAQ** content was imported from the live site (rocketstation.com)
for review and lives at:

- `blog.html` — blog index → individual posts in `posts/`
- `faq.html` — accordion of all FAQs

These are reached via a **red "Blog & FAQ — to be hidden" menu item**. That red item,
and the red staging banner at the top of those pages, are **staging-only**.

### Before go-live, remove the temporary menu item

1. In `index.html`, delete the line containing `class="nav__temp"` (the red nav link).
2. (Optional) remove the `.staging-banner` markup at the top of `blog.html`, `faq.html`,
   and the files in `posts/` once the content is approved and permanently placed.

The pages themselves can stay in the repo; only the red entry point is meant to be hidden.

## Editing going forward

Everything is plain HTML/CSS/JS — no build step. Edit the files directly and commit:

```bash
git add -A && git commit -m "your change" && git push
```

Both collaborators can push to `main`. To preview locally: `python3 -m http.server 8000`.
