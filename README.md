# Kiran P S — Portfolio

A fast, responsive, single-page portfolio site. Pure HTML/CSS/JS — no build step, no dependencies.

```
index.html   → markup & content sections
styles.css   → design system, layout, dark/light themes
script.js    → data (skills/experience/projects) + interactions
```

To edit your content, change the arrays at the top of `script.js` (`SKILLS`, `EXPERIENCE`, `PROJECTS`) and the hero/about text in `index.html`.

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 5173   # then visit http://localhost:5173
```

## Deploy for free

### Option A — GitHub Pages (recommended, you already use GitHub)

```bash
# from this folder
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/kiranTakyon/portfolio.git   # create this empty repo on GitHub first
git push -u origin main
```

Then on GitHub: **Repo → Settings → Pages → Source: `main` / root → Save.**
Your site goes live at `https://kiranTakyon.github.io/portfolio/` in ~1 minute.

> Tip: name the repo `kiranTakyon.github.io` instead, and it serves from the clean root URL `https://kiranTakyon.github.io/`.

### Option B — Netlify (drag & drop, instant)

1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. Live instantly on a `*.netlify.app` URL. Connect a custom domain later if you want.

### Option C — Vercel / Cloudflare Pages

Both offer free static hosting — connect the GitHub repo and deploy with default settings (no framework, output = root).

## Custom domain (optional)

All three hosts support free HTTPS on a custom domain (e.g. `kiranps.dev`). You only pay for the domain itself (~$10/yr); hosting stays free.
