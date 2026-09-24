---
derived-from: white-cube@2
project: builtbylee/starkle (repo was genius-star)
status: approved 2026-09-24 (v2; v1 approved 2026-09-22)
---

# Starkle — design system (v2)

**Aesthetic:** White Cube translated for a game: a quiet, soft-tactile gallery where the pieces are the colour.
**Machine values:** `tokens.json`. Shipped product: https://starkle.builtbylee.workers.dev. The project's own running log of decisions is `docs/DESIGN.md` in the product repo; this file is the consolidated system.

## The idea
**The interface has no colour of its own. The pieces are the colour.** Achromatic surfaces; eleven saturated pieces; players borrow piece colours as identity. One exception, because it is game state rather than decoration: **gold** marks the golden star (the hexagon on the board, the result chip, the leaderboard mark). Gold never appears on a control.

Light only. A dark variant is a future decision, not a toggle.

## Tokens
Verbatim from White Cube v2 unless marked ★ (see `tokens.json`).
- Surfaces `--bg #efeff1 → --sheet #fff → --sunk #f5f5f7 → --sunk2 #ebebee`; ink `--ink #111114 / --ink2 #62656b / --ink3 #9c9fa6`; `--hair #e9e9ec`; `--live #2eb87f` (connection dot only); `--warn-ink #8a2f22 / --warn-bg #fbecea` (illegal ghost, dead gaps, errors).
- ★ `--gold #E9B93A`: the golden star only.
- Radii 30 / 22 / 14 / pill. Shadows `--sh1/2/3`. Easings `--ease` (state) and `--spring` (lifts, the roll).
- ★ Pieces (content, not interface): Coral `#F4776A` · Tangerine `#F59A3E` · Jade `#3E9C63` · Teal `#2FB5AB` · Sky `#4FA3E3` · Indigo `#5D6BE0` · Violet `#9C6BDD` · Rose `#E877B0` · Cocoa `#A6714E` · Strip ×2 `#F0C33C`. Hue neighbours alternate lightness for colour-blind play; **Piece marks** (a mono letter A–K on every piece) is the switch for players who need more.
- ★ Seats: 1 Indigo, 2 Coral, 3 Teal, 4 Violet. Always from the piece set, never a new hue.
- ★ Blockers: top `--sheet`, side `#d6d6da`, rim `#e3e3e7`. Nothing on them.
- **`--ink3` is never text under 24px** (2.31:1). Labels use `--ink2`.
- Type: **Instrument Sans** 400–700 for UI; **DM Mono** 300–500 for every value (times, dice, counts, places, codes). Never mono for prose. No Inter. No emoji anywhere, including share text.

## Laws
1. **Space, not borders.** Board seams are the sheet showing through between cells, never a stroke. The one legitimate hairline grid is a results table.
2. **Surfaces float, and during play there is exactly one.** The board sits in a `--sheet` card on `--bg`; the tray is a `--sunk` stage. The only other surface that ever rises is a **bottom sheet**, and it covers the screen with a scrim while it is up.
3. **One filled thing per area; no filled button while a board is in play.** The seven white raised blockers and the pieces are the board's weight. Hint, Give up, Clear and Flip are quiet pills. The primary pill appears only at a decision: Play today's, Play, I'm ready, Start, Challenge friends, Play again.
4. **Pills and circles.** Buttons are pills; the primary carries its arrow in a nested 32px circle that drifts (+2px, −2px) on press. Icon controls are **44px circles** (White Cube's 40 is too small for a thumb). The menu button is a sunk circle in the bar.
5. **State sits with its number.** Every time says what it is ("your time", "time to beat", "server-timed"). A level always travels with its name and count: `Level 3 · Medium · 3,607 solutions`. A hint shows on the clock at once and on the result as `1 hint · +0:30`.
6. **Motion is the game, not decoration.** Only the moments listed under Motion animate.
7. **The board speaks in rings.**
   - A legal landing spot: the target cells in the piece's colour at 30%, under a 0.08-unit ink ring.
   - An illegal one: only the conflicting cells, in `--warn-bg` under a dashed `--warn-ink` outline.
   - A hint: a dashed ink ring, nothing filled.
   - The placed piece a tap was about: the ink ring. It is Flip's target.
   - Keyboard focus keeps its own ring and shows only for keyboard input, never for a finger.
8. **Every target ≥ 44px**; menu rows 58px; tray tiles 52px; visible focus rings on everything focusable.
9. **Live is staged by the server, never by a clock.** Progress moves on `progress` messages; results render on `roundOver`. Local timers only display.
10. **A wait that has gone quiet says so.** "Couldn't reach Starkle — retrying", with Retry. Skeletons in the shape of the content, never a spinner, never zeros while a request is in flight.
11. **The clock is honest.** The 3-2-1 runs before the server clock starts. The stopwatch is cosmetic, but it includes a hint's penalty from the moment the hint is taken. The server's `elapsedMs` is the number on the result.
12. **One fact, once per screen.** No pill repeating a picker or the screen's name, no code in a bar when the screen shows it large, no creator listed twice.
13. **Every phone, not one.** Designed and checked from a 360×740 small Android to a 430×932 large iPhone.
    - A play screen fits one viewport: the board is what gives, down to 240px wide.
    - At heights of 760px and below, Home tightens its rhythm, so the daily, Play and Live race are on screen at 375×667.
    - Safe areas are consumed.
    - The system Back (Android button or gesture, iOS edge swipe) closes an open sheet instead of leaving the screen.
14. **Explainers live in one place.** How to play (reached from the menu) carries the rules, moves, hints and levels, with a live demonstration. A new device plays the three-piece first game once. There are no coach marks on game screens.

## Interaction (v5, drag and drop)
Two rules, the same in the tray and on the board:
- **Tap a piece to turn it** (60°).
  - A tray tile turns in place and remembers its turn when another piece is touched.
  - A placed piece turns where it lies, to the next orientation that fits there. Orientations that would not fit are skipped. If nothing fits, the piece dips once (opacity) and stays.
- **Drag a piece to move it.**
  - It lifts 60px above the finger, and a ghost shows the nearest legal spot within 1.6 cells (the magnet).
  - Letting go sets it.
  - If no legal spot is in reach, it goes back: to where it was on the board, or home to its tray slot, still turned.
  - Letting go over the tray sends it home.
- **Also available:** Flip (and `F`) mirrors the ringed or selected piece, and a second-finger tap mid-drag turns the piece. Keyboard play uses arrows, Enter and Escape.
- **Never:** a held state between gestures, or a hold-to-set.
- **Haptics** (Android only; never mentioned in the UI): turn 8ms · set 14ms · home [8, 40, 8] · illegal: none.
- **Hints** answer one question: *where does this piece go?* Select a tray piece, then tap Hint.
  - A timed game allows one hint, for +0:30. Live races have none. Practice has them free.
  - If the board cannot be finished as it stands, the hint outlines the piece that has to move.

## Motion
| Moment | Spec |
|---|---|
| The roll | seven blockers land 40ms apart, 200ms each on `--spring`; each dice pill fills as its blocker lands; then stillness (≤ 600ms total) |
| Turn | 60° about the piece's own middle, 120ms `--ease`; a flip pulses (scaleX) instead |
| Drag out of the tray | the piece grows to board scale in 120ms |
| Home to the tray | the tile settles in 120ms (WAAPI on the tile; the button is never remounted) |
| Nothing fits | the placed piece dips to 45% opacity and back, 240ms. Nothing ever shakes. |
| Finish | placed pieces settle in placement order; the gold hexagon turns last; no confetti |
| A solution landing | on give-up and in How to play: pieces drop in one by one, 280ms apart (Watch again replays) |
| Bottom sheet | slides up 200ms `--ease`, down 170ms; the scrim fades with it; a drag follows the finger and settles back if short |
| Segmented thumb, switch thumb | one thumb slides, 260ms / 180ms, by **WAAPI**. A CSS transition did not fire on some Androids. |
| Live progress | bars ease 300ms `--ease` |

`prefers-reduced-motion`: opacity only, everywhere. The roll shows all seven at once, and sheets simply appear and disappear.

## Components (system-specific)
- **Bar:** a floating pill (`--sheet`, `--sh1`, 52px) with the wordmark glyph, the level meta, the mono timer, and the menu circle on Home.
- **Board sheet:** the dice meta row inside the sheet (the only place the seven numbers appear), the flat board, and raised pieces and blockers.
- **Raised piece:**
  - union shadow σ0.12, offset 0.16, 22% ink;
  - side face at 72% luminance, offset 0.13;
  - top face in the piece colour;
  - grooves on internal edges at 82%, 0.07 wide;
  - a rim at 90%.
  No gradients, no gloss.
- **Tray:** a `--sunk` stage with eleven fixed slots. A piece always goes home to its own slot.
- **Caption row:** a mono count, then one line naming the piece and what to do with it, then Flip.
- **Bottom sheet:** a grabber and a scrim at 30% ink. It is safe-area padded, capped at the screen height and focus-trapped. Escape, the scrim, a swipe down, and Back (where enabled) close it.
- **Menu row:** 58px, a title plus one line of `--ink2`, and a chevron. The switch row carries a 44×26 switch that slides by WAAPI.
- **Pace line:** a 2px track under the bar with a mono label on the right; warn ink once the time to beat has passed.

## Voice
Plain, specific, no exclamation marks, no "Oops", no "Congratulations".
- "Lee was 0:14 faster than you."
- "Pick a piece in the tray first."
- "Can't finish like this: move the outlined piece."
- The result leads with the number, not a headline.

Never: marketing verbs, emoji, blaming the player ("Wrong!").

## Screens (structure)
- **Home**: bar (wordmark · menu circle) · two-line headline + one line · name field · **Today's Starkle** sheet (date stamp, "Everyone gets this roll today", `Level 3 · Medium · N solutions`, the one filled pill) · **Play** and **Live race** peer sheets · join a room.
- **Menu** (sheet): How to play · Practice · Leaderboard · Profile · Piece marks switch · Add to home screen (when offered).
- **Play / Race**:
  - bar (level meta · mono timer), then the pace line or a one-line note;
  - the board sheet;
  - the caption row;
  - the tray;
  - one action row (Clear the board · Hint +0:30 · Give up).
  Race adds an opponents strip.
- **Result**: `YOUR TIME` in mono at 56px · place, golden-star and hint chips · the solved board · one sentence · share · quiet Play again + primary Challenge friends.
- **Give up**: a sheet with primary Keep playing and quiet Record a DNF. Afterwards, the landing solution with its count.
- **Challenge invite / leaderboard**: headline · time to beat · who has played · hairline results table (the "1 hint" label; your row ring-lifted).
- **Lobby / race results**: the code in large mono · players · "2–4 can play" · Start · "X wins" · Play again / Leave.
- **Practice**: Play's structure with no timer, and Hint and Show solution (under More when the board needs the room).
- **First game**: a step card ("1 of 3 · Drag a piece onto the board"), a fixed three-piece board, Skip.
- **How to play**: the goal, the dice with the landing demo, Moves, Hints, the golden star, Ways to play, Levels, and "Try a quick board".
- **Leaderboard**: friends only (you and the people you have played with) · level `.seg` · period `.seg` · table.
- **Profile**: name · best by level · history (with ▶ replays and "1 hint" labels) · On this device (Mark dead gaps, Start fresh) · Link another device.

## Non-goals
- Dark theme, sound, or any accent beyond gold-as-state. No illustration.
- Coach marks or tutorials on game screens.
- A global leaderboard.
- Anti-cheat marks on screen: the server checks every solve, and among friends a "?" read as an accusation.
- Hints in live races.

## Changes from v1 (2026-09-22 → 2026-09-24)
- **Interaction:** interaction v5 (drag and drop, tap to turn) replaces v1–v4 gestures, and the hold-to-set ring is gone.
- **Rendering:** blockers are white raised triangles, and pieces are raised blocks with grooves.
- **Hints:** one per timed game, +0:30.
- **Removed:** the five dailies (now one), the global leaderboard, on-screen flags, profile stat tiles and admin/test mode.
- **Added:**
  - How to play;
  - the first game for new devices;
  - the Home menu sheet;
  - sheets that swipe and Back to close;
  - Law 12 (one fact once), Law 13 (every phone) and Law 14 (explainers in one place).
- **Levels:** labels are counts of solutions, not "our scale".
