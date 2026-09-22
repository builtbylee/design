---
derived-from: white-cube v2 (2026-09-17)
project: builtbylee/genius-star (Starkle)
status: approved 2026-09-22
---

# Starkle — design system (v1, approved 2026-09-22)

Derived from Dissect's system (docs/DESIGN.md in builtbylee/dissect, "White Cube"), translated for a game. Where a law below differs from Dissect's, the difference is deliberate and explained. Reference artboards: the Direction-D row of the approved canvas (D · Home / Play / Result / Leaderboard); other screens follow the same laws with Direction A's structure.

## The idea
**The interface has no colour of its own. The pieces are the colour.** Achromatic surfaces; eleven saturated pieces; players borrow piece colours as identity. One exception, because it is game state rather than decoration: **gold** marks the golden star — on the board (the hexagon), the result chip, and the leaderboard mark. Gold never appears on a control.

Light only in v1. A dark variant is a future decision, not a toggle.

## Tokens (verbatim from Dissect unless marked ★)
```
--bg:#efeff1  --sheet:#fff  --sunk:#f5f5f7  --sunk2:#ebebee
--ink:#111114 --ink2:#62656b --ink3:#9c9fa6 --hair:#e9e9ec
--live:#2eb87f                      /* connection dot only */
--warn-ink:#8a2f22 --warn-bg:#fbecea /* illegal ghost, errors */
★ --gold:#E9B93A                     /* golden star only */
--r-lg:30px --r-md:22px --r-sm:14px --r-pill:999px
--sh1:0 1px 2px rgba(17,17,20,.04), 0 3px 10px -5px rgba(17,17,20,.08)
--sh2:0 2px 4px rgba(17,17,20,.03), 0 22px 48px -24px rgba(17,17,20,.22)
--sh3:0 1px 1px rgba(17,17,20,.05), 0 8px 20px -10px rgba(17,17,20,.22)
--ease:cubic-bezier(.22,1,.36,1)  --spring:cubic-bezier(.34,1.56,.64,1)
--ui:"Instrument Sans",system-ui,-apple-system,"Segoe UI",sans-serif
--mono:"DM Mono",ui-monospace,SFMono-Regular,Menlo,Consolas,monospace
```
★ Pieces (index = core piece index; 9 and 10 are the two strips and share gold-adjacent yellow):
```
0 Coral #F4776A · 1 Tangerine #F59A3E · 2 Jade #3E9C63 · 3 Teal #2FB5AB · 4 Sky #4FA3E3
5 Indigo #5D6BE0 · 6 Violet #9C6BDD · 7 Rose #E877B0 · 8 Cocoa #A6714E · 9,10 Strip #F0C33C
```
Hue-neighbours alternate lightness so red/green confusion still leaves a lightness difference. Before shipping, simulate protanopia/deuteranopia/tritanopia over all pairs and adjust lightness where any pair falls under ΔE 12; keep hues.
★ Player identity: seat 1 Indigo, 2 Coral, 3 Teal, 4 Violet — always from the piece set, never a new hue.

Type: **Instrument Sans** 400/500/600/700 for UI; **DM Mono** 300/400/500 for every value — times, dice numbers, counts, places, room and challenge codes. Never mono for prose. Google Fonts with real fallback stacks. No Inter. No emoji anywhere, including share text (the star mark is an SVG glyph; the share string uses the word "golden star").

## Laws
1. **Space, not borders.** Separation is surface and gap. Board seams are the sheet showing through between cells, never a stroke. A 1px rule is a last resort; never a grid of them. The one legitimate hairline grid is a results table (`gap:1px; background:var(--hair)`), as in Dissect.
2. **Surfaces float — and during play there is exactly one.** The board sits in a `--sheet` card (`--r-lg`, `--sh2`) on `--bg`. The tray is a `--sunk` stage (`--r-md`). Nothing else on the play screen is a raised surface: the HUD is the floating pill bar, the controls are circles. Result and leaderboard screens step down sheet → sunk → white rows.
3. **One filled thing per area — and on the board it's the blockers.** Seven ink triangles are the region's solid black. Therefore **no filled button exists while a board is in play.** The primary pill appears only at a decision: Play, I'm ready, Start round, Challenge friends, Next round, Play another. Two pills never share a row unless one is quiet.
4. **Pills and circles.** Buttons are pills; the primary carries its arrow in a nested 32px circle that drifts (+2px, −2px) on hover and on press. Icon controls (Rotate, Flip) are **44px** circles (Dissect uses 40; a game on a phone needs 44). Dice numbers, level, codes and status are mono meta pills on `--sunk`.
5. **State sits with its number.** Every time on screen says what it is in visible text: "your time", "time to beat", "server-timed". A suspicious time carries a visible "?" mark whose meaning is one tap away as text, never tooltip-only. Difficulty is always labelled as ours ("Level 3 · our scale"), never as the box's.
6. **Motion is the game, not decoration.** Exactly these animate, and nothing else:
   - **The roll** (≤ 600 ms total): the sheet is already there; seven blockers land one by one, 40 ms apart, 200 ms each on `--spring` with a hair of overshoot; each dice pill fills its number as its blocker lands. Then stillness. The timer starts when the last blocker lands.
   - **Pick up & snap**: lift = translate −2px, `--sh3`, 120 ms `--ease`; snap to lattice 90 ms `--ease`. An illegal drop does not land and does not shake.
   - **Finish**: placed pieces settle in placement order, 40 ms apart (opacity + 1px lift). If the star formed, the hexagon turns gold last and the mark scales in on `--spring`. No confetti, no burst. The time is the celebration.
   - **Live**: progress bars ease 300 ms `--ease`; the grace bar slides down 200 ms.
   - `prefers-reduced-motion`: opacity only, everywhere; the roll shows all seven at once.
7. **The board speaks in rings.** Selected tray tile: lifts onto `--sheet` with `inset 0 0 0 1.5px var(--ink), var(--sh1)`, transitioned together over .22s; unselected tiles are transparent on the sunk stage. Legal ghost: ink ring (0.14 units) with 10% ink fill. Illegal ghost: `--warn-ink` ring with `--warn-bg` fill. Focus keeps its own ring (2px ink, 3px offset) so a focused tile never reads as selected. Hint: a dashed ink ring around the suggested placement, nothing filled.
8. **Hit targets ≥ 44px**, tray tiles 52px, visible focus rings on everything focusable.
9. **Live is staged by the server, never by a clock.** Progress bars move on `progress` messages; the grace bar appears on the `state` that carries `graceEndsAt`; results render on `roundOver`. Local timers only display; they never decide state.
10. **A wait that has gone quiet says so.** The status pill reads "reconnecting · 4s" with a pulsing ink dot when the socket is down (the board stays playable — placement is local); the async leaderboard says "checking…" while it polls. Never a spinner; skeletons where content is coming.
11. **The clock is honest.** The 3-2-1 runs *before* the `ready` call so it costs no server time; the roll animation (≤ 600 ms) runs after reveal and is identical for everyone. The displayed stopwatch is cosmetic; the server's `elapsedMs` is the number that appears on the result.

## Voice
Plain, specific, no exclamation marks, no "Oops", no "Congratulations". "Bob finished. 20s to place." "Lee was 0:40 faster than you." "This doesn't look solvable from here — lift a piece." The result screen leads with the number, not a headline.

## Screens (structure)
- **Home**: floating pill bar (wordmark glyph + name, status pill, avatar circle) · headline two lines · name field (pill input, mono label) · two equal peer sheets: **Play** and **Live race**, each with an ink arrow circle · small empty board silhouette at the foot.
- **Play / Race**: bar (wordmark · `LEVEL 3 · OUR SCALE` meta · mono timer) · board sheet with dice meta row inside · mono caption row (`5 / 11 placed`, right: a one-line instruction) · controls row (two 44px circles, quiet Hint pill) · sunk tray stage. Race adds a `--sunk` opponents block above the board sheet and, when live, the ink grace bar at the very top (`Bob finished · 0:18`).
- **Result**: bar · one sheet: mono label `YOUR TIME`, the time in mono at 56px, golden-star chip when earned, the solved board, one sentence · footer: quiet **Play again** + primary **Challenge friends**.
- **Challenge invite**: bar · headline "Lee challenged you" · sheet: `TIME TO BEAT` mono + who's played · board silhouette with the "roll hidden" pill · primary **I'm ready** with the one-line clock statement.
- **Leaderboard**: bar with code meta · sheet: time-to-beat header, hairline results table (mono place and time, identity dot, star mark, your row ring-lifted), one-sentence comparison in a sunk block · footer quiet **Share** + primary **Play another**.
- **Lobby**: bar · code as large mono with copy circle · players as white rows on hair · Level and First-to as `.seg` controls with mono labels · primary **Start round**.
- **Round over**: bar · sheet: hairline placings table with `+1`/`+2` mono · match scores as a row of sunk tiles · primary **Next round**, quiet **Leave room**.

## Non-goals (v1)
Dark theme · custom themes · sound · any accent colour beyond gold-as-state · illustration.
