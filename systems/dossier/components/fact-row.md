# Fact row

**Role:** a row of label/value or figure/label cells divided by hairlines: hero facts, stat rows, role proofs.
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 78–83, 132–137, 224–232, 402–405 · **Variants:** fact (label above value) · figure (large number, label below) · dated figure (blue year above)

## Why it is the way it is
Facts sit in a ruled row so they read as a record you could cite; the hairlines are the one place rules are used, because these are cells of a table (Law 2).

## Spec
| Property | Value | Evidence |
|---|---|---|
| row | grid of `--cols` (default 3), 1px `--line` top | Measured (78, 132, 224) |
| cell | 20px 20px 4px 0; 1px `--line` right; later cells 20px left | Measured (79–81, 133–135) |
| label (fact) | 13px `--muted` | Measured (82) |
| value (fact) | 18px/600, −0.015em, `--navy` | Measured (83) |
| figure | 44px/600 (32px small), −0.04em, tabular, `--navy` | Measured (231, 136) |
| figure label | 14px `--muted`, below | Measured (232, 137) |
| year | 13px/600 `--blue` above the figure | Measured (230) |
| phone | one column; cells ruled underneath instead of beside | Measured (402–404) |

## States
Static. Figures in a panel change with the selected role and animate with the panel.

## Copy
```css
.facts{display:grid;grid-template-columns:repeat(var(--cols,3),minmax(0,1fr));border-top:1px solid var(--line)}
.facts > div{display:flex;flex-direction:column;gap:6px;padding:20px 20px 4px 0;border-right:1px solid var(--line)}
.facts > div + div{padding-left:20px}
.facts > div:last-child{border-right:0}
.facts .k{font-size:13px;color:var(--muted)}
.facts .v{font-weight:600;font-size:18px;letter-spacing:-.015em;line-height:1.3;color:var(--navy)}
.facts .fig{font-size:44px;font-weight:600;line-height:1;letter-spacing:-.04em;color:var(--navy);font-variant-numeric:tabular-nums}
.facts .lab{font-size:14px;color:var(--muted)}
@media (max-width:640px){.facts{grid-template-columns:1fr}.facts > div,.facts > div + div{padding:16px 0;border-right:0;border-bottom:1px solid var(--line)}}
```
```html
<div class="facts"><div><span class="k">Based</span><b class="v">London, UK</b></div>…</div>
<div class="facts" style="--cols:5"><div><span class="when">2023</span><span class="fig">3,329</span><span class="lab">Hires</span></div>…</div>
```

## Do / Don't
- Do: give every figure its label in visible text.
- Don't: put the row in a card. It sits on the section ground.
