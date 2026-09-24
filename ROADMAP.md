# Roadmap

## Where it stands (2026-09-24)
| System | Kind | State |
|---|---|---|
| `white-cube` v2 | extracted from Dissect | locked; 14 atoms annotated in `components/`; complete `components.css`; `specimen.html` |
| `starkle` v2 | derived from white-cube@2 for a game | approved; consolidated from the shipped product; no `components/` yet |
| `dossier` v1 | extracted from talentbylee.com | draft, awaiting approval from its specimen; 16 atoms annotated; 3 ★ deltas the site should also take |

Templates: `DESIGN.template.md`, `COMPONENT.template.md`, `tokens.schema.json` (now with a `size` group) and `TRANSLATE.md`.

## Next, in order

### 1. talentbylee: extract a system (done as `dossier` v1, awaiting approval)
Lee's personal site talentbylee.com. The source is `~/leesam` (repo `builtbylee/leesam`). Its `HANDOVER.md` lists the design tokens, timeline structure and interactions. The look is Instrument Sans with Instrument Serif, and navy and blue, matching `verda.talentbylee.com`.
- **Deliverables:** the full system set (see `CLAUDE.md`), with Measured values citing the site's files.
- **Name:** a system name that is not the person's name (the library is public).

### 2. Curated systems: build the library out
Lee wants high-fidelity, polished, curated systems beyond his own products. Each is original, authored for a clear domain, and distinct from the others. It is not a copy of any real brand.
1. **Propose a slate first.** Show 4–6 directions before building any in full. For each give a name, a domain, the one-line idea, a palette of 4–6 named hex values, a type pairing, and where it spends its boldness. Publish them as one mockup page with a small specimen strip per direction. Lee picks.
2. **Cover different ground.** For example:
   - editorial and long-form reading;
   - a data-dense operations dashboard;
   - a consumer mobile app;
   - commerce or luxury;
   - a developer tool;
   - a warm, playful product.

   Avoid two systems sharing an idea.
3. **Build each approved direction in full.** That means DESIGN, tokens, components.css, annotated components and a specimen checked at phone widths with contrast recorded.

### 3. A gallery
A single page (an artifact) listing every system with its idea, palette, type and a live specimen strip, linking to each specimen. It should be kept current as systems are added.

### Later
- `references/`: principle write-ups when Lee shares something he admires (Principle 9).
- `starkle/components/`: annotate the game's own atoms (bar, board sheet, raised piece, tray, bottom sheet, menu row, switch, pace line) from `builtbylee/starkle`.
- Other products (Execue, Ryval, Appraysal) only if Lee asks.
