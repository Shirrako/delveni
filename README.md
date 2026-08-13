# Delveni

Landing page for Delveni — screening flow, countdown, depth-contour signature.

Built with Next.js (static export), plain CSS, no external UI libraries.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

This produces a fully static site in `out/` (configured via `output: "export"`
in `next.config.ts`) — no server runtime needed, which is what makes this a
clean fit for Cloudflare Pages.

## Deploying to Cloudflare Pages via GitHub

1. **Push this repo to GitHub** (from this project folder):
   ```bash
   git remote add origin https://github.com/<your-username>/delveni.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect it in Cloudflare Pages:**
   - Go to the Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git
   - Select the `delveni` repo
   - Build settings:
     - Framework preset: **Next.js (Static HTML Export)**
     - Build command: `npm run build`
     - Build output directory: `out`
   - Deploy

3. Every push to `main` will auto-deploy from then on.

## Project structure

```
app/
  layout.tsx      — root layout, fonts, metadata
  page.tsx         — the landing page (client component)
  globals.css      — all styling
  icon.png         — favicon / app icon
public/
  logo.svg              — full logo mark with background
  logo-mark.svg         — transparent letter mark only
  icon-192.png/icon-512.png — app icon sizes
```

## Notes

- The screening flow (fragment → prompt → "being read" → result) is currently
  a scripted front-end demo — the actual AI-generated question and pass/fail
  judgment aren't wired to a backend yet.
- Countdown is a local demo timer (resets on page refresh), not synced to a
  real drop schedule.
