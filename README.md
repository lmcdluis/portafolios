# Portafolio Luis Carazo — React + Bootstrap

The **v3 / Liquid Glass** portfolio, implemented as real source for your existing
CRA + TypeScript + react-bootstrap repo (`lmcdluis/portafolios`).

Frosted, rounded panels floating over a blurred steel field: the Industry
steel palette, Barlow Condensed over Barlow, a specular highlight that tracks
the pointer, and a dark ground by default with a light alternate.

Design reference: `Portafolio v3.dc.html` in the design project.

## 1. Install

```bash
npm install sass@1.62.1 --legacy-peer-deps
```

- **sass** — so `main.scss` can import Bootstrap's source and override its variables.
  Pinned to 1.62: later versions deprecate `@import`, which is how Bootstrap is pulled in.
- `--legacy-peer-deps` — your repo already has a peer conflict (react-scripts 4.0.1
  wants TypeScript ^3, the project runs 4.1.3). Put `legacy-peer-deps=true` in a
  root `.npmrc` so you don't have to repeat the flag.
- **Icons** are inlined in `src/components/icons/Icon.tsx` — no icon package.
  CRA 4's webpack cannot consume lucide-react's `.mjs` build.

`bootstrap`, `react-bootstrap`, `react-router-dom` and `typescript` are already
in your `package.json`. (On react-scripts 4, Dart Sass — `sass` — is the
supported package, not `node-sass`.)

## 2. Copy the files

```
src/
  styles/_tokens.scss       ← steel ramp + Bootstrap variable overrides + theme roles
  styles/_glass.scss        ← panels, buttons, switches, cards, dialog, cursor, reveal
  styles/main.scss          ← the one entry point
  theme/ThemeContext.tsx    ← dark/light, persisted (dark steel is the design's own ground)
  i18n/dictionary.ts        ← all UI copy, ES + EN
  i18n/LangContext.tsx      ← language provider, persisted
  data/projects.ts          ← your 9 projects + techs + the Credex case study
  hooks/useInView.ts        ← scroll-reveal / count-up trigger
  hooks/useParallax.ts      ← backdrop parallax
  hooks/useSpecular.ts      ← pointer-tracked specular highlight
  hooks/useScrollSpy.ts     ← which nav link is active
  hooks/useMagneticCursor.ts← trailing ring + pull on small controls
  hooks/useLockBodyScroll.ts
  components/icons/Icon.tsx      ← the five Lucide glyphs, inlined
  components/glass/GlassPanel.tsx
  components/motion/Reveal.tsx
  components/motion/CountUp.tsx
  components/layout/Backdrop.tsx
  components/layout/Cursor.tsx
  components/nav/NavBar.tsx
  components/nav/ThemeToggle.tsx
  components/hero/Hero.tsx
  components/projects/ProjectCard.tsx
  components/projects/CaseStudyDialog.tsx   ← click a card, zoomable screenshot
  components/projects/ProjectsSection.tsx   ← category + technology filters
  components/skills/SkillBar.tsx
  components/skills/SkillsSection.tsx
  components/system/SystemSection.tsx
  components/testimonials/TestimonialsSection.tsx
  components/contact/ContactSection.tsx     ← live validation + send state
  components/footer/SiteFooter.tsx
  pages/home/index.tsx      ← replaces your current home page
  App.tsx                   ← ThemeProvider + LangProvider
  index.tsx                 ← imports styles/main.scss
```

Then delete what this replaces: `src/App.css`, `src/index.css`,
`src/pages/home/style.css`, `src/components/cv-information/`.
Your images stay where they are — `src/assets/images/projects/`.

## 3. Add the font

In `public/index.html`, inside `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&family=Barlow+Condensed:wght@400;600&display=swap" rel="stylesheet">
```

Also set `<html lang="es">` and `<meta name="theme-color" content="#0d151c">`.

## 4. Add your CV

The hero's second button points at `/cv-luis-carazo.pdf` — drop that file into
`public/`, or change the `href` in `src/components/hero/Hero.tsx`.

## 5. Run it

```bash
npm start
```

---

## Where each thing lives

| Feature | File |
| --- | --- |
| Palette, ramps, theme roles | `styles/_tokens.scss` |
| Plates, buttons, chips, switches, dialog | `styles/_glass.scss` |
| Ambient field + vertical rules | `components/layout/Backdrop.tsx` |
| Specular highlight following the cursor | `hooks/useSpecular.ts` |
| Magnetic cursor | `hooks/useMagneticCursor.ts` + `components/layout/Cursor.tsx` |
| Scroll reveal with stagger | `components/motion/Reveal.tsx` (`delay`) |
| Animated counters | `components/motion/CountUp.tsx` |
| Skill bars filling on scroll | `components/skills/SkillBar.tsx` |
| Active nav section | `hooks/useScrollSpy.ts` |
| Dark / light | `theme/ThemeContext.tsx` + `[data-theme='light']` in `_tokens.scss` |
| Case study + image zoom | `components/projects/CaseStudyDialog.tsx` |
| Category + technology filters | `components/projects/ProjectsSection.tsx` |
| Form validation and send state | `components/contact/ContactSection.tsx` |
| ES / EN | `i18n/LangContext.tsx` + `dictionary.ts` |

## How the material works

Every panel is `.glass`: a translucent gradient, `backdrop-filter` blur +
saturation, a hairline edge, a glossy `inset 0 1px 0` top highlight and a soft
drop shadow. Variants: `--tint` (accent-washed), `--quiet` (flat inner plate,
no blur). Add `specular` to a `<GlassPanel>` for the pointer-tracked highlight
and `lift` for the hover raise.

Theming is one swap of semantic roles — `--bg`, `--txt`, `--acc`, `--glass-*`,
`--edge` — under `[data-theme='light']`. No component knows which theme is on.

### Tuning the frost

```scss
--glass-blur: 38px;   // 8px = barely there
--glass-sat: 1.8;
```

### Accent discipline

The steel accent is tuned to ~3:1 against the ground — fine for icons, display
type and chrome, not for body copy. `--acc` carries fills and headlines;
`--acc-txt` is the step used at paragraph size (it goes a shade deeper in the
light theme, where the ground is pale).

## Still open

- **Testimonials** are placeholders — real quotes go in
  `components/testimonials/TestimonialsSection.tsx`.
- **Eight of nine case studies** have no write-up; the dialog shows an honest
  "in progress" state with a mail link. Add them to `caseStudy` in
  `data/projects.ts` as `{ heading: {es,en}, body: {es,en} }`.
- **Contact form** has no backend: it composes a `mailto:`. Swap the
  `window.setTimeout` block in `submit()` for Formspree / EmailJS / your own
  endpoint.
