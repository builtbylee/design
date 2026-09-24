# Range chart

**Role:** from-to lines on one axis, one row per group, with a readout for the chosen row.
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 283–322 · **Variants:** from/to · from/mid/to

## Why it is the way it is
Every row is drawn but only the chosen one is blue, so the comparison stays visible while one change is read in detail.

## Spec
| Property | Value | Evidence |
|---|---|---|
| row | 150px label, track, 96px values; 13.5px `--muted`; chosen 600 `--navy` | Measured (298–300) |
| track | 20px tall, 1px `--line` axis | Measured (301–302) |
| position | `--a` / `--b` / `--m` in % of axis width | Measured (304, 308–310) |
| line | 3px, radius 2px, `--rim`; chosen `--blue`, draws in 650ms `--ease` | Measured (304–305, 311) |
| dots | from 10px ring, to 10px filled, mid 8px ring; `--faint`, chosen `--blue` | Measured (307–313) |
| values | right-aligned, tabular | Measured (314) |
| axis | 12px `--muted` ticks placed by `--t` | Measured (315–317) |
| readout | value clamp(48px, 5vw, 64px)/600, delta 15px/600 `--blue`, label 15px `--muted` | Measured (292–294) |
| phone | label and values on one line, track full width below | Measured (346–349) |

## States
chosen row · others; line redraws on choose; readout fades 140ms.

## Copy
```html
<div class="range"><div class="range-row on"><span>Women</span><span class="range-track"><i class="range-line" style="--a:40;--b:73.5"></i><i class="range-dot from" style="--a:40"></i><i class="range-dot to" style="--b:73.5"></i></span><span class="range-vals">16.0 → 29.4%</span></div></div>
```

## Do / Don't
- Do: print both values; the chart is a picture of numbers already on screen.
- Don't: label a tick the data never reaches.
