# Section head

**Role:** the numbered heading that opens every section, with an optional intro.
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 88–93, 400–401 · **Variants:** with intro · without

## Why it is the way it is
The small blue number sits beside the heading because the record is read in order, and the number says where this section falls (Law 6).

## Spec
| Property | Value | Evidence |
|---|---|---|
| grid | 64px number column + 1fr, gap 0 24px, max 900px | Measured (90) |
| number | 14px/500 `--blue`, 12px top padding, spans two rows | Measured (91) |
| h2 | Instrument Sans 600, clamp(30px, 3.6vw, 44px), line-height 1.08, −0.03em, `--navy`, ends with a full stop | Measured (92, markup) |
| intro | 17px `--muted`, max 66ch, 14px above | Measured (93) |
| gap below | 44px (32px on phone) | Measured (90, 400) |
| phone | one column; number above heading | Measured (400–401) |
| sections | 88px padding (64px phone); alternate `--white` / `--paper` with hairline top and bottom | Measured (88–89, 398) |

## States
Static. The number never animates.

## Copy
```css
.head{display:grid;grid-template-columns:64px 1fr;gap:0 24px;align-items:start;margin-bottom:44px;max-width:900px}
.head .num{grid-row:1 / span 2;padding-top:12px;font-size:14px;font-weight:500;color:var(--blue)}
.head p{margin-top:14px;max-width:66ch;font-size:17px;color:var(--muted)}
@media (max-width:640px){.head{grid-template-columns:1fr;margin-bottom:32px}.head .num{grid-row:auto;padding:0 0 8px}}
```
```html
<div class="head"><span class="num">02</span><h2>Timeline.</h2><p>Twenty years across category-defining companies.</p></div>
```

## Do / Don't
- Do: end the heading with a full stop. It is a statement, not a label.
- Don't: number sections that are not a sequence, or add an uppercase eyebrow above.
