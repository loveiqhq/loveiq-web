# public/

Static assets served directly at the root URL path. Not processed by Next.js bundler.

## What belongs here

- Images (JPG, PNG, WebP, SVG)
- Videos (MP4)
- Favicons and app icons
- Robots/sitemap files (if static; dynamic ones are in `app/`)

## What does NOT belong here

- React components → use `components/`
- TypeScript/JavaScript code → use `app/` or `lib/`
- Data files → use `data/`

## Subdirectory map

| Directory   | Contents                  |
| ----------- | ------------------------- |
| `about/`    | About page images         |
| `academic/` | Academic/research imagery |
| `carousel/` | Carousel section images   |
| `images/`   | General site images       |
| `privacy/`  | Privacy-related assets    |

## Key files

| File                     | URL path                                       |
| ------------------------ | ---------------------------------------------- |
| `favicon.svg`            | `/favicon.svg`                                 |
| `apple-touch-icon.png`   | `/apple-touch-icon.png`                        |
| `couple-hero.mp4`        | `/couple-hero.mp4` (hero video, desktop)       |
| `couple-hero-mobile.mp4` | `/couple-hero-mobile.mp4` (hero video, mobile) |
