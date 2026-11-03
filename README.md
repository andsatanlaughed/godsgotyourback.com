# godsgotyourback.com

Static landing page for **God's Got Your Back** — Dan Barton's first book, on
resilience. Expected late 2026.

> 100 growth concepts. 12 questions. One promise that holds when yours doesn't.

One hand-built HTML page styled with a locally compiled Tailwind CSS build.
No framework, no runtime — static files you can host anywhere (GitHub Pages,
Netlify, Cloudflare Pages, plain Apache/Nginx).

## Page order

A single page with anchor sections. The order is the pitch — hold it:

1. **Hero** — the title, the counts, the promise.
2. **Who It's For** — the man with something in him desperate to come out, who
   has decided he isn't the one to step up.
3. **What's Inside** — the counts as the visual system: 100 / 12 / 12 / 4, then
   the single poem on its own.
4. **Scripture (dark)** — Isaiah 58:8 and 41:10. "Rear guard" is a military
   term, and it is where the title comes from; the page says so plainly.
5. **The Twelve Questions** — four of them, as a taste.
6. **Where the Concepts Come From** — hand-off to Growth-Concept.com.
7. **Who's Writing This**, then **Be Told First** and the sibling sites.

## Develop & Build

Tailwind is installed locally (no CDN). The CSS compiles from `src/input.css`
to `style.css`.

```bash
npm install        # one time
npm run build      # compile + minify style.css for production
npm run watch      # rebuild style.css on change while developing
npm run serve      # http://localhost:8000
```

Re-run `npm run build` after editing `index.html` (it holds the Tailwind
classes) or `src/input.css`. **A change that isn't rebuilt won't show up.**

## Design system

Same DNA as the rest of the network — Cormorant Garamond (display serif) and
Inter (body), red headings between thin gold rules, the ✦ gold fleuron,
`.gold-divider`. No Caveat script face; that's gramps.me's voice.

Its own face is the **numerals**. This book is built out of counts, so the
counts are the layout: `.tally` / `.tally-num` for the 100 / 12 / 12 / 4 grid
and `.question-num` for the numbered questions. Where
godrepurposesskeletons.com runs dark and dramatic, this one runs light and
steady — gold structure on parchment, with one dark scripture band.

Two things to keep:

- **Numerals need `lining-nums`.** Cormorant Garamond defaults to old-style
  figures, which renders "1" as something close to a lowercase "I" and makes
  "100" look broken at display size. Every numeral set large carries the
  `lining-nums` class. If you add a new one, add the class.
- **Color by job.** `brand.red` `#c0282d` clears 4.5:1 on parchment and can
  carry small text. `brand.gold` `#c39a3e` cannot — it is decorative and
  display-size only. Use `brand.gold-deep` for small gold text on parchment
  and `brand.gold-light` for gold on the dark bands.

## Placeholder copy to replace

- **The twelve questions are invented.** They're the spine of the book and Dan
  hasn't published them, so the four on the page are stand-ins written to show
  the shape. There's an HTML comment marking the section. Swap in the real
  ones before launch.
- The **"Who It's For"** and hero copy is written for this page. The book
  description ("something inside him desperate to come out…") and the bio
  paragraphs are Dan's own, lifted from andsatanlaughed.com.
- **Scripture** is quoted NIV. Check it against the translation Dan prefers —
  the book itself pairs each concept with four.
- **Email** points at `DRB@andsatanlaughed.com`, the address the flagship
  already uses. Switch it if a `@godsgotyourback.com` mailbox gets set up.
- **Growth-Concept.com** is linked from the concepts section but isn't live
  yet. It's listed as "Coming Soon" on danbarton.me.

## Pre-launch notice

The dark strip above the header (`.build-notice`) says the site is a work in
progress. **Delete that `<div>` when the book launches** — the same strip is on
gramps.me and godrepurposesskeletons.com.

## Images

`logo-drb` and `headshot-now` are copied from `danbarton.me/images` (both
`.webp` and `.jpg`). The page is otherwise typographic — no hero photo.

### Favicons

Each site in the network gets its own mark so the tabs are tellable apart.
This one is a **gold shield** on near-black — "got your back" is a rear-guard
image, and a shield reads at 16px where a letterform goes soft.

| File                          | Size     | Used for                          |
| ----------------------------- | -------- | --------------------------------- |
| `favicon.ico`                 | 16/32/48 | Browsers request `/favicon.ico` by default |
| `images/favicon-32.png`       | 32       | Tab icon                          |
| `images/favicon-16.png`       | 16       | Tab icon, small                   |
| `images/apple-touch-icon.png` | 180      | iOS home screen                   |
| `images/icon-512.png`         | 512      | Source / OG image / any manifest  |

Two variants on purpose: the 180 and 512 carry a rounded square with a thin
gold ring around an outlined shield; 16/32 drop the ring and use a solid
filled shield. Check any regeneration at true 16px, not zoomed.

## Hosting

Intended for **GitHub Pages** with a custom domain via the `CNAME` file →
`godsgotyourback.com`. Static only, so there's no server-side form; the
notify button is a `mailto:` link.
