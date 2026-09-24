---
derived-from: none
project: builtbylee/leesam
status: draft 2026-09-24 (awaiting approval from the specimen)
---
# Dossier — design system (v1)

**Aesthetic:** a calm professional record in navy and one blue. Hairlines organise the facts, one soft shadow marks the object that matters, and a serif carries the person's own voice.
**Origin:** talentbylee.com (`builtbylee/leesam`, `index.html`, September 2026 redesign). Every **Measured** value in this system cites that file's inline `<style>` (lines 18–425) or its inline scripts. This file is the system alone; the CV's content and section plan stay in that repo.
**Machine values:** `tokens.json` · `tokens.css` · atoms in `components.css`, each annotated in `components/`.

## The idea
**Blue means "this one".** A record is mostly navy facts on white and paper, set in one sans. The only blue on screen marks the item you are looking at: the current section, the selected role, the latest bar, the step on screen. Because blue never decorates, the eye can always find where it is.

The second voice is **Instrument Serif**. It appears only when the person speaks rather than the record: the lede, a personal paragraph, one italic word in the closing line. The sans states facts and the serif says what they mean.

Light only. The navy Contact band is an inverted section, not a theme.

## Tokens
See `tokens.css`. Surfaces `--white → --paper` alternate by section; `--navy` headings and the one inverted band; `--ink` body; `--muted` secondary; `--blue` for "this one"; `--blue-soft` behind a selected row; `--bar` for chart bars that are not the peak; `--line` for hairlines; `--faint` and `--rim` for non-text marks only. One shadow, `--shadow`. One easing, `--ease`. Radii 20 / 14 / 10 / 8 / pill.

Type: **Instrument Sans** (400/500/600/700) for everything factual, including numbers, which use `font-variant-numeric: tabular-nums` rather than a monospace face. **Instrument Serif** (regular and italic) for the person's voice. Sentence case everywhere: no uppercase eyebrows, no monospace.

### ★ Deltas from the source
The site is the source of truth; these are the places the system corrects it. Each is a fix the site should also take.
1. **`--blue-deep` `#1d4ed8`** for blue text on `--blue-soft`. The site uses `--blue` there, which measures 4.48:1 and fails. `--blue-deep` measures 5.82:1.
2. **`--faint` `#9aa8b8` is never text.** The site sets step numbers and counter separators in it (2.42:1). In the system, separators stay `--faint` as marks and numbers move to `--muted` (7.06:1).
3. **Every touch target reaches 44px.** The site's Contact button is 38px, step chips 32px, segment buttons 36px and carousel dots 8px. The system sets the first three to `min-height: 44px` and gives each dot a 44px hit area around the visible 8px mark.

## Laws
1. **Blue means "this one".** It marks the current, selected or latest item and nothing else. A second blue thing in the same region means one of them is wrong.
2. **Hairlines organise facts; space separates sections.** A 1px `--line` divides cells of a fact row, a stat row, a proof grid. Sections are separated by a change of ground (`--white` ↔ `--paper`) and 88px of padding, never by a rule alone.
3. **One shadow per section.** `--shadow` goes on the single object the section exists to show: the portrait, the role panel, the carousel, the headline figure. Everything else is flat with at most a hairline border.
4. **The serif is the person speaking.** Instrument Serif never sets a label, a number or a heading. If a line could appear in a table, it is sans.
5. **The number is the headline.** Figures are sans 600 with tight tracking (−0.035 to −0.045em) and tabular numerals, at 32–104px, each with its label in visible `--muted` text directly beneath.
6. **Numbered heads are a real sequence.** A section head carries its position (02, 03…) in blue because the page is read in order. Don't number things that are not a sequence.
7. **One filled thing per area.** The navy Contact button and the navy selected segment are the only solid controls in their regions; everything else is ghost or hairline.
8. **Selection is a fill and a rule, focus is an outline.** A selected row takes `--blue-soft` and a 2px blue left rule; focus is `2px solid --blue` with a 3px offset (inset −2px on full-width rows). A focused row must not look selected.

## Motion
One easing, `--ease` `cubic-bezier(.32,.72,0,1)`: fast out, long settle. Nothing animates on first render.

| What | How | Duration | Evidence |
|---|---|---|---|
| hover colour and fill | background / colour / border | 160ms `--ease` | Measured |
| timeline selection | one indicator slides to the selected row (transform + height) | 380ms `--ease` | Measured |
| role panel swap | height eases; three parts slide 18px from the direction of travel, staggered 45ms | 420ms `--ease` | Measured |
| mobile accordion | `max-height` opens; content rises 10px after 80ms | 420ms / 380ms `--ease` | Measured |
| carousel | track translates one slide | 600ms `--ease` | Measured |
| headline figure | counts up once, cubic ease-out | 1400ms | Measured |
| chart bars | grow once, staggered 120ms | 700ms `cubic-bezier(.22,1,.36,1)` | Measured |
| range line | draws left to right when its row is chosen | 650ms `--ease` | Measured |
| readout swap | fade out, change, fade in | 140ms linear | Measured |
| screen steps | cross-fade; auto-advance every 6s only while visible and not hovered or focused | 450ms `--ease` | Measured |

Never animated: layout on load, text reveals, scroll-driven parallax, anything looping that the reader did not start (photo cross-fades pause on hover).

**Reduced motion:** transitions drop to 0.001ms, count-ups and bar growth are skipped (final values shown), cross-fades show only the first image and auto-advance stops. Every control still works.

## Voice
A senior person's record, written by them. Past tense for past roles, specific numbers with what they count, no adjectives doing the work of evidence.
- "3,329 hires across EMEA, 2018 to 2026."
- "Built practical tools for recurring recruiting tasks."
- "Let's *talk.*"

Never: "passionate", "rockstar", "results-driven"; an exclamation mark; a number without its label.

## States
- **Empty:** a panel with nothing to show says what would be there and why it is missing ("No roles before 2006").
- **Image failed:** logos fall back to two initials in the same disc (`.logo-fallback`).
- **Loading:** content is static; charts sit at their final values until the count-up runs.
- **Copy result:** the button label changes to "Copied" for 2s and the result is announced in a live region; a failure says "Copy failed, select the address instead".

## Non-goals
- A dark theme. Dossier is light only; the navy band is content, not a theme.
- A monospace value face. Numbers use tabular sans (a deliberate departure from Principle 4's mono default).
- A second accent. Status colours (success, warning) are not part of a record; if a product needs them, derive a new system.
- Uppercase eyebrows, icon sets, gradient fills.
