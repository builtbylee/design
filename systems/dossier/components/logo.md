# Logo disc

**Role:** a company mark in a white circle, with initials if the image fails.
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 104–107, 145–151 · **Variants:** 28px (timeline) · 40px · 64px (panel)

## Why it is the way it is
Logos in the list are greyscale until their company is active, so other brands' colours never compete with the one blue (Law 1).

## Spec
| Property | Value | Evidence |
|---|---|---|
| sizes | 28 / 40 / 64px circles | Measured (104, 145, 147) |
| ring | 1px `--line`, white fill | Measured (145) |
| fallback | initials, 600 `--navy`, 9 / 11 / 16px | Measured (104, 145), 16px Interpreted |
| inactive | grayscale(1) contrast(1.15), opacity .9 | Measured (105) |
| active or hover | full colour, 200ms `--ease` | Measured (105, 107) |
| wordmarks | `contain` with 3–5px padding | Measured (106, 148–149) |

## States
inactive (grey) · active (colour) · failed (initials).

## Copy
```html
<span class="logo sm"><img src="okta.png" alt="" onerror="this.hidden=true"><span class="logo-fallback">OK</span></span>
```

## Do / Don't
- Do: leave `alt` empty when the company name is printed beside it.
- Don't: show logos in colour at rest.
