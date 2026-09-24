# Working in the design library

This repo is Lee Sam's design library. Its heart is `library/`: a curated collection of excellent, highly polished UI (components and whole screens) that Lee browses for inspiration and points to when building something new. Around it sit the principles, the design systems of Lee's own products, and templates any assistant can apply from the files alone. It is **public**, so never put secrets, private product details or anyone's personal data in it.

Read `README.md` for the load order and `ROADMAP.md` for where the work stands and what comes next.

## What every library entry contains
`library/entries/<id>.html` + `<id>.md`, indexed in `library/library.json`:
- **Kind and tags.** `component` or `screen`, plus tags (`overlay`, `feedback`, `navigation`, `form`, `commerce`, `mobile`…).
- **Origin.** `original` (made from scratch) or `study` (a credited rebuild of a public design: name the maker and link the original).
- **`<id>.html`**: a standalone, working demo. It must work at 360–430px, handle keyboard and focus, and honour reduced motion. Real content, never lorem.
- **`<id>.md`** in `templates/ENTRY.template.md` form: why it works, what to take, anatomy with the key values, and for a study, what the rebuild changes from the original.
- **The bar is craft.** An entry earns its place by being excellent at one thing: its motion, its interaction, its density, its type. Not by being on-trend.
- **Studies** rebuild the design and interaction in open code. They never include the original's logo, screenshots or proprietary font files, and never pass for the original.
- Run `node tools/build-gallery.mjs` after adding an entry; it regenerates `library/gallery.html`, which is republished as the gallery artifact.

## What every system contains
`systems/<id>/`:
- **`DESIGN.md`**: the idea, laws (numbered; one bold sentence each plus at most two of consequence), motion (a table of exactly what animates, with durations and easings, and the reduced-motion rule), voice, states, non-goals. Use `templates/DESIGN.template.md`.
- **`tokens.json`**: valid against `templates/tokens.schema.json` (color, radius, shadow, font, motion, size, content, deltas).
- **`tokens.css`**: the same values as CSS custom properties on `:root`.
- **`components.css`**: the complete atoms, never fragments. Every rule a person needs to rebuild a component.
- **`components/*.md`**: one file per atom in `templates/COMPONENT.template.md` form: role, the one-sentence *why*, a spec table where every row carries evidence, states, agent-ready CSS and HTML, do/don't. See `systems/white-cube/components/` for the standard.
- **`specimen.html`**: every atom rendered from `tokens.css` + `components.css` alone (page scaffolding in its own `<style>`, clearly marked). Real content, never lorem.

## Evidence
- **Extracted systems** (from a shipped product): **Measured** means taken from the source code or pixels. Say which file.
- **Authored or curated systems**: a value is a decision, so the spec states it plainly. Reserve **Measured** for what you verified in the rendered specimen (contrast ratios, rendered sizes, touch targets). **Interpreted** means derived from a law. **Guess** is a stated assumption.

## The quality bar
- **High fidelity and curated, not generated-looking.**
  - Each system has one clear idea, grounded in a domain, and one place where it spends its boldness.
  - Avoid the current generated defaults unless the system deliberately argues for one: warm cream with a serif and terracotta; near-black with one acid accent; purple-to-blue gradient heroes; Inter or Space Grotesk as the safe face; emoji as markers; everything centred; one radius and one shadow on everything.
- **Typography carries the identity.** Pair faces deliberately (Google Fonts with real fallback stacks), set a type scale, and keep running text near 65 characters.
- **Accessibility is measured, not assumed.**
  - Text contrast is ≥ 4.5:1, or 3:1 at 24px and above. Record the ratios in the spec.
  - Targets are ≥ 44px, focus is visible and distinct from selection, and `prefers-reduced-motion` is honoured.
- **Every phone.** Specimens are checked from 360×740 to 430×932 with no sideways scroll, at mobile sizes only (desktop Safari testing is not needed). Every iPhone browser is WebKit, so a WebKit run at phone size is the only way to catch iOS quirks: offer it, don't insist.
- **Themes.** A system that claims light and dark defines both as full token sets. A single-theme system says so in its non-goals.
- **Principle 9.** A system never reuses a real brand's name, logo, fonts or palette, and nothing impersonates a real organisation. Library studies name and credit their source by design; they rebuild the idea in open code, without logos, screenshots or proprietary fonts.

## How Lee works
- **Approval.** Lee approves a system from its specimen before `index.json` marks it `approved`. Publish each specimen as a private artifact for review.
- **Directness.** Build directly and efficiently; don't hand the build to sub-agents. Scale the process to the size of the change.
- **Commits.** Commit with conventional messages and push to `main` once the checks pass: JSON valid against the schema, specimen rendered at phone widths, contrast recorded.
- **Registration.** Keep `index.json` and the README's system table in step with every system added or versioned, and `library/library.json` and the gallery in step with every entry.
