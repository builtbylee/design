# Dossier — components

One file per atom in `templates/COMPONENT.template.md` form. Every **Measured** row cites a line of `builtbylee/leesam/index.html`. Rows marked ★ are system deltas that correct the source (see `../DESIGN.md`).

| Component | For |
|---|---|
| [topbar](topbar.md) | the sticky bar, section links and phone menu |
| [button](button.md) | the navy cta and the pair on the navy band |
| [section-head](section-head.md) | the numbered heading that opens a section |
| [voice](voice.md) | the serif lede and personal paragraphs |
| [fact-row](fact-row.md) | hairline-divided facts, stats and proofs |
| [object](object.md) | the one shadowed card per section, and its flat sibling |
| [headline-figure](headline-figure.md) | the big number and its trend bars |
| [logo](logo.md) | company marks, greyscale until active |
| [timeline](timeline.md) | the spine list, sliding indicator, panel and phone accordion |
| [list-and-note](list-and-note.md) | blue-dot bullets and the blue-ruled note |
| [segmented](segmented.md) | pick one view in place |
| [step-chip](step-chip.md) | numbered steps for a screenshot sequence |
| [pager](pager.md) | carousel counter, dots and arrows |
| [range-chart](range-chart.md) | from-to rows on one axis with a readout |
| [award](award.md) | one recognition, flat |
| [band](band.md) | the navy closing section |

Global rules every component inherits:
- Focus is `outline: 2px solid var(--blue); outline-offset: 3px` (inset −2px on full-width rows; `--sky` on navy).
- Under `prefers-reduced-motion: reduce`, transitions and animations are cut to a single near-zero frame, count-ups show their final value and nothing auto-advances.

`../components.css` holds the same atoms as one stylesheet.
