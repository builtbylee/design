# Object

**Role:** the one shadowed card per section: the portrait, the role panel, the carousel, the headline figure.
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 29, 84, 127, 157, 210, 253 · **Variants:** object (shadow) · flat (hairline only)

## Why it is the way it is
The single wide, low shadow tells the reader which thing the section exists to show; every other card is flat so that signal stays strong (Law 3).

## Spec
| Property | Value | Evidence |
|---|---|---|
| shadow | 0 32px 70px −50px rgba(10,37,64,.35) | Measured (29) |
| border | 1px `--line` | Measured (84, 127) |
| radius | 20px | Measured (84, 127, 157) |
| padding | 36px panel, 32px figure (24px 20px on phone) | Measured (127, 210, 406) |
| flat variant | same border and radius, no shadow, 28px 32px | Measured (283) |
| portrait | 4:5, `object-fit: cover`, `--paper` behind | Measured (84–85) |
| inset object | screenshots inside an object use 0 24px 50px −40px rgba(10,37,64,.45), radius 14px | Measured (169, 185) |

## States
Static. A panel that swaps content eases its height over 420ms (see timeline).

## Copy
```css
.object{overflow:hidden;border:1px solid var(--line);border-radius:var(--r-xl);background:var(--white);box-shadow:var(--shadow)}
.object.pad{padding:36px}
.flat{border:1px solid var(--line);border-radius:var(--r-xl);background:var(--white);padding:28px 32px}
```
```html
<article class="object pad">…</article>
<figure class="object portrait"><img src="portrait.jpg" alt="Seated by an office window"></figure>
```

## Do / Don't
- Do: pick the object before laying out the section.
- Don't: give two cards in one section the shadow.
