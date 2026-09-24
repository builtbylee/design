# Pager

**Role:** the counter, dots and arrow buttons under a carousel.
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 198–207, 410–415 · **Variants:** desktop row · phone centred wrap

## Why it is the way it is
The counter states position in words ("3 / 7") so the dots can stay small and decorative-quiet; the current dot stretches blue.

## Spec
| Property | Value | Evidence |
|---|---|---|
| counter | 14px `--muted`, current in `--navy` 600, tabular; separator `--faint` (mark only) | Measured (199–201) |
| dot | 8px `--rim`; current 24px `--blue`, 200ms | Measured (203–204) |
| dot target | 44px tall hit area around the visible dot | ★ source 8px |
| arrows | 44px square, radius 10px, 1px `--line`; hover fills `--navy` | Measured (206–207) |
| track | slides 600ms `--ease` | Measured (158) |
| phone | wraps and centres; dots 6px, current 18px | Measured (410–415) |

## States
dot: default · current (`aria-current`) · focus-visible. Arrow: default · hover (navy) · focus-visible.

## Copy
```html
<div class="pager"><p class="pager-count" aria-live="polite"><b>1</b><span class="sep">/</span>7</p>
  <div class="pager-dots" role="group" aria-label="Slides"><button class="pager-dot" type="button" aria-label="Slide 1" aria-current="true"></button>…</div>
  <div class="pager-btns"><button class="pager-btn" type="button" aria-label="Previous slide">←</button><button class="pager-btn" type="button" aria-label="Next slide">→</button></div></div>
```

## Do / Don't
- Do: announce the counter politely.
- Don't: rely on the dots alone for position.
