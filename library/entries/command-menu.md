# Command menu

**Kind:** component · **Tags:** overlay, navigation, keyboard, search · **Origin:** study of Linear's command menu (https://linear.app)
**Demo:** `command-menu.html`

## Why it is excellent
It turns every action in the product into something you can type, and it knows what you're acting on: the current issue is shown as a chip above the search, so "Change status…" never needs a second question. It opens instantly and gets out of the way just as fast.

## What to take
- Show the context the command applies to, above the input, so results can be verbs rather than nouns.
- Put the shortcut on every row. The menu teaches the keyboard until you no longer need it.
- Group results by intent (this item, go somewhere, do something), and keep group headers quieter than the rows.
- Match on subsequences ("chst" finds "Change status") and bold the matched letters so the match explains itself.
- Animate the list height as results change so the panel doesn't jump.
- The pointer and the keyboard share one highlight. Hovering moves it, and arrow keys carry on from there.

## Anatomy
Values are the rebuild's own, not measured from Linear.
| Part | Value | Note |
|---|---|---|
| panel | min(640px, 100% − 24px), radius 12px, 12vh from top | top-anchored, so it doesn't jump as results change |
| open | scale .96 → 1 and fade, 180ms `cubic-bezier(.16,1,.3,1)` | scrim fades with a 2px blur |
| context chip | 12px, chip fill, truncates with an ellipsis | "Acting on MOB-142 …" |
| input | 52px, 17px text, hairline underneath | no visible box: the panel is the field |
| row | 44px, radius 8px, 16px icon, label, keycaps | the active row gets one soft fill |
| keycaps | 20px, radius 4px, inset hairline | "G then I" for sequences |
| list | max min(380px, 56vh), height animates 120ms | |
| empty | "No commands match “x”. Try “status” or “go to”." | suggests what does exist |

## Behaviour
- **Keyboard:** ⌘K / Ctrl+K toggles; ↑↓ move (wrapping); ↵ runs; Esc closes and returns focus to where it was; Tab is held inside.
- **Semantics:** the input is a `combobox` with `aria-activedescendant` pointing into a `listbox`.
- **Phone:** the panel sits 12px from the top and keycaps hide.
- **Reduced motion:** there is no scale or height animation.

## Study notes
Kept: the context chip, grouped verbs, inline shortcuts and the fast scale-in. Changed: system font instead of Linear's typeface, and a generic issue example. Not reproduced: nested pages, where choosing "Change status…" opens a second list in place. That is the natural next step for this entry. No Linear logo or assets are used.
