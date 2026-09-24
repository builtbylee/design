# Button

**Role:** the navy primary (`.cta`), and the white and ghost pair used on the navy band.
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 59–60, 275–280 · **Variants:** cta · button (on navy) · secondary (on navy)

## Why it is the way it is
Buttons are squared-off (radius 8–10px), not pills, because a record is a document: controls look like tabs of paper, not app chrome. The primary is navy so the blue stays free to mean "this one".

## Spec — cta
| Property | Value | Evidence |
|---|---|---|
| height | min 44px | ★ Measured 38px in source; raised to 44px |
| padding / radius | 0 16px / 8px | Measured (59), padding widened with height |
| fill / text | `--navy` / white, 14px/600 | Measured (59) |
| hover | fill `--blue`, 160ms `--ease` | Measured (60) |
| contrast | white on navy 15.54:1; white on blue 5.17:1 | Measured |

## Spec — on the navy band
| Property | Value | Evidence |
|---|---|---|
| button | min 48px, 0 20px, radius 10px, white fill, navy 15px/600; hover `--blue-soft` | Measured (276–277) |
| secondary | transparent, 1px rgba(255,255,255,.28) border, white text; hover rgba(255,255,255,.08) | Measured (278–279) |
| focus on navy | outline `--sky` | Measured (280) |

## States
default · hover (fill changes, nothing moves) · focus-visible (2px ring, 3px offset; `--sky` on navy) · busy/copied (label changes to "Copied" for 2s, width may change, height may not).

## Copy
```css
.cta{display:inline-flex;align-items:center;min-height:44px;padding:0 16px;border-radius:var(--r-sm);background:var(--navy);color:var(--white);
  font-size:14px;font-weight:600;text-decoration:none;border:0;cursor:pointer;transition:background 160ms var(--ease)}
.cta:hover{background:var(--blue)}
.button{display:inline-flex;align-items:center;min-height:48px;padding:0 20px;border:1px solid transparent;border-radius:var(--r-md);background:var(--white);
  color:var(--navy);font-size:15px;font-weight:600;text-decoration:none;cursor:pointer;transition:background 160ms var(--ease)}
.button:hover{background:var(--blue-soft)}
.button.secondary{border-color:rgba(255,255,255,.28);background:transparent;color:var(--white)}
.button.secondary:hover{background:rgba(255,255,255,.08)}
```
```html
<a class="cta" href="#contact">Contact</a>
<div class="button-row"><a class="button" href="mailto:…">Email</a><button class="button secondary" type="button">Copy email</button></div>
```

## Do / Don't
- Do: say exactly what happens ("Copy email", then "Copied").
- Don't: make the cta blue at rest. Blue is a location, not an action.
- Don't: use `.button` on white; it is built for the navy band.
