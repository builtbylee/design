# White Cube — design system (v2, locked 2026-09-17)

**Aesthetic:** soft-tactile gallery minimalism with an instrument-panel voice. The gallery convention — achromatic architecture, softly lit, so the exhibit supplies every colour — applied to interface.
**Origin:** Dissect (builtbylee/dissect). This file is the system alone; Dissect's product screens and component-classification rules stay in that repo.
**Machine values:** `tokens.json` · `tokens.css` · atoms in `components.css`, each annotated in `components/` (role, why, spec with Measured / Interpreted / Guess evidence, states, copy, do/don't).

## The idea
**The interface has no colour of its own.** Whatever the product presents — a capture, a board, a photograph — brings the palette. If the UI has an accent it competes with the thing being studied. Achromatic surfaces; the only colour on screen belongs to the content or the user's brand.

Light only. No dark theme, no theme toggle.

## Tokens
See `tokens.css` (verbatim). Surfaces `--bg → --sheet → --sunk → --sunk2`; ink `--ink / --ink2 / --ink3`; `--hair` for the rare rule; `--live` for a status dot only; `--warn-ink/--warn-bg` for failures only. Radii 30 / 22 / 14 / pill. Three shadows, all wide and soft. Two easings: `--ease` for state, `--spring` for lifts.

Type: **Instrument Sans** (400/500/600/700) for UI + **DM Mono** (300/400/500) for values — hex, dimensions, counts, times, codes — never for prose. Google Fonts with real fallback stacks. No Inter. No emoji anywhere.

## Laws
1. **Space, not borders.** Separation comes from surface and gap. A 1px rule is a last resort; never a grid of them.
2. **Surfaces float.** Content sits on `--bg` in `--sheet` cards with large radii and wide soft shadows. Nested surfaces step down: sheet → sunk → white rows.
3. **One filled thing per area.** The primary action is the only solid black element in its region.
4. **Pills and circles.** Buttons are pills; icon controls are 40px circles; the primary button carries its arrow in a nested 30px circle that drifts on hover.
5. **Evidence sits with its claim.** Certainty chips ride the section header; anything less certain than its section carries its own. Reasons are visible text, never tooltip-only.
6. **Motion is analysis, not decoration.** Only the core sequence, hover lifts and state changes animate. Everything respects `prefers-reduced-motion`.
7. **Selection is border and lift.** A selected tile lifts onto `--sheet` with a crisp inset ring — `inset 0 0 0 1.5px var(--ink), var(--sh1)` — never an edge strip, never a real border (a border moves layout on selection). Focus keeps its own ring; a focused tile must not read as selected.
8. **Hit targets ≥ 44px**; visible focus rings (2px `--ink`, 3px offset) on everything focusable.

## Motion principles
A performance is staged by its **data, never by a clock** — a section holds its skeleton until its content arrives. **A wait that has gone quiet says so**: after a few silent seconds the status names what is outstanding and counts the wait. No progress bars; skeletons that match the shape of what is coming; never a spinner.

## Voice
Plain, specific, confident about what is known and blunt about what isn't. Never "Oops", never exclamation marks, never "seamless / elevate / unleash". Explain *why* a thing is the way it is in one sentence, not what it looks like.

## States
Every empty, loading, failed and rate-limited state is designed; never a blank panel.
