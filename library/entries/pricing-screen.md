# Pricing screen

**Kind:** screen · **Tags:** commerce, marketing, numbers · **Origin:** original
**Demo:** `pricing-screen.html`

## Why it is excellent
Switching billing period is the one interaction on a pricing page, and here it is felt. The thumb slides, each price rolls digit by digit to its new value, and the line underneath does the arithmetic ("£240 billed yearly, saving £48"), so nobody has to.

## What to take
- Roll the digits: each digit is a 0–9 strip translated to its value, staggered 40ms left to right. When the shape changes (9 → 7.50), the new strips roll up from 0.
- Show the monthly equivalent large and the actual charge small, and put the saving in money rather than a percentage.
- Make one plan recommended with a ring and the only shadow, and make its button the only filled one.
- On phones, move the recommended plan first.
- Lead each higher tier with "Everything in X, plus:" so the lists stay short.

## Anatomy
| Part | Value | Note |
|---|---|---|
| headline | Bricolage Grotesque 650, clamp(30px, 5vw, 46px), −0.03em | max 18ch |
| switch | pill, thumb slides 380ms `cubic-bezier(.2,.8,.2,1)` | the label sits over the thumb |
| price | 52px tabular, currency at .55em, top-aligned | |
| digit roll | 700ms, 40ms stagger | |
| plan | radius 20px, 1px inset ring; recommended 1.5px green ring + shadow | |
| button | 48px, radius 12px | only the recommended one is filled |

## Behaviour
- **Screen readers:** the rolling digits are hidden; a polite live region reads "£20 per month".
- **Reduced motion:** prices and the thumb change instantly.
- **Content:** Ledgerline is an example product. The footnote says so and states the refund terms.
