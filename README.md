# WK 2026 Poule

Friend-group World Cup 2026 prediction game. Participants predict every fixture from the group stage through the final and submit before the tournament starts.

## Live form

`https://thom227.github.io/WorldCup2026`

## Run locally

Open `index.html` directly in a browser — no build step or server needed.

## How to submit

1. Fill in your name and email at the top of the form.
2. Complete all match predictions (group stage + knock-out rounds).
3. Click **PDF opslaan** to save a PDF copy.
4. Click **Inzenden** — your email client will open with a pre-filled message. Attach the PDF and send.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure |
| `styles.css` | All styling including print layout |
| `app.js` | Match data, standings logic, knockout bracket, persistence |

## Admin

Set `ADMIN_EMAIL` in `app.js` to the address where submissions should be sent.
