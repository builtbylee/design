# Headline figure

**Role:** the one big number a section is about, with its trend bars.
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 210–222, and the count-up script · **Variants:** with bars · with percentage

## Why it is the way it is
The figure is set at display size in the sans, because in a record the number is the headline (Law 5); the bars sit beside it so the size of the number has a history.

## Spec
| Property | Value | Evidence |
|---|---|---|
| meta | 14px `--muted`, subject in `--blue` 600 | Measured (211–212) |
| figure | clamp(64px, 8vw, 104px)/600, line-height .95, −0.045em, tabular | Measured (213) |
| percent sign | .5em, 500, `--muted` | Measured (214) |
| label | 16px `--muted`, max 46ch | Measured (215) |
| bars | 170px tall, 8px gap, radius 4px 4px 0 0, `--bar`; the latest `--blue` | Measured (216–218) |
| bar values | 11.5px/600 `--ink` above each bar | Measured (219) |
| count-up | once on first view, 1400ms, cubic ease-out, en-GB separators | Measured (script) |
| bar growth | 700ms `--grow`, staggered 120ms | Measured (script) |
| bar vs track | `--bar` on white is 1.60:1; values are printed, so colour carries no meaning alone | Measured |

## States
at rest (final values) · first view (counts up once) · reduced motion (final values, no growth).

## Copy
```css
/* see components.css "headline figure" and "trend bars" */
```
```html
<p class="fig-meta"><b>Hires</b> across EMEA</p><p class="fig-hero">3,329</p><p class="fig-label">2018 to 2026.</p>
<div class="trend" role="img" aria-label="Hires per year: …"><span class="trend-bar" style="--h:60%"><span class="bv">412</span></span>…<span class="trend-bar peak" style="--h:100%"><span class="bv">690</span></span></div>
```

## Do / Don't
- Do: make the blue bar the latest, and say so if it is not the largest.
- Don't: start the page with the figure at 0. The count-up starts from a visible final state on reload and under reduced motion.
