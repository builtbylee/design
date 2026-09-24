# Voice (serif)

**Role:** Instrument Serif for the lede and personal paragraphs: the person speaking, not the record.
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 74, 250–251, 273 · **Variants:** lede · paragraph pair · italic word on the band

## Why it is the way it is
A record needs a human line or it reads as a form; putting that line in the only serif on the page makes it unmistakably the person's (Law 4).

## Spec
| Property | Value | Evidence |
|---|---|---|
| lede | Instrument Serif clamp(22px, 2.4vw, 28px) / 1.35, `--ink`, max 720px | Measured (74) |
| paragraphs | clamp(21px, 2vw, 26px) / 1.4, max 34ch; the second in `--muted` | Measured (250–251) |
| band word | italic 400, −0.01em, `--sky` (7.27:1 on navy) | Measured (273) |
| running width | 34ch for serif, 66ch for sans | Measured |

## States
Static.

## Copy
```css
.lede{max-width:720px;font-family:var(--serif);font-size:clamp(22px,2.4vw,28px);line-height:1.35;color:var(--ink)}
.voice p{max-width:34ch;font-family:var(--serif);font-size:clamp(21px,2vw,26px);line-height:1.4;color:var(--ink)}
.voice p + p{margin-top:16px;color:var(--muted)}
```
```html
<p class="lede">The recruiting leader for the AI era.</p>
<div class="voice"><p>First, the point.</p><p>Then what it meant.</p></div>
```

## Do / Don't
- Do: keep it to one lede and one short passage per page.
- Don't: set a label, number or heading in the serif.
